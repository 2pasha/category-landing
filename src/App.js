import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isChanging, setIsChanging] = useState(false);
  const [modalItem, setModalItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        setCategories(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Помилка завантаження даних:', error);
        setLoading(false);
      });
  }, []);

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) return;
    
    setIsChanging(true);
    setTimeout(() => {
      setSelectedCategory(category);
      setIsChanging(false);
    }, 200);
  };

  const handleItemClick = (item) => {
    setModalItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setModalItem(null);
    }, 300);
  };

  const handleModalBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Завантаження...</p>
      </div>
    );
  }

  return (
    <div className="app">
      <main className="main-content">
        <aside className="categories-sidebar">
          <h2>[ категорії ]</h2>
          <ul className="categories-list">
            {categories.map((category, index) => (
              <li key={index}>
                <button
                  className={`category-button ${
                    selectedCategory === category ? 'active' : ''
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category.category}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <section className="items-section">
          {(selectedCategory && !isChanging) && (
            <div className="items-content">
              <h2>{`[ ${selectedCategory.category} ]`}</h2>
              <ul className="items-list">
                {selectedCategory.items.map((item, index) => (
                  <li key={index} onClick={() => handleItemClick(item)}>
                    <div className="item-name">{item.name}</div>
                    <div className="item-price">{item.price}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </main>

      {/* Модальне вікно */}
      {isModalOpen && (
        <div className="modal-backdrop" onClick={handleModalBackdropClick}>
          <div className="modal">
            <div className="modal-header">
              <h3>{modalItem?.name}</h3>
              <button className="modal-close" onClick={closeModal}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-price">
                <span className="price-label">для того щоб обрати цю позицію, потрібно зробити донат від {modalItem?.price}</span>
              </div>
              <div className="modal-actions">
                <a 
                  href="https://send.monobank.ua/jar/7uiVGcPZbN" 
                  className="modal-button"
                  target="_blank"
                >
                  донатик сюди
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
