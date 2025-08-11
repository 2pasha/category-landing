import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isChanging, setIsChanging] = useState(false);
  const [modalItem, setModalItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Статичні дані замість завантаження з JSON
  const staticData = [
    {
      "category": "IT",
      "description": "я Software Engeneer в продуктовій компанії і в такий буремний, для джунів, час знайов свою першу роботу в IT менше ніж за місяць, тому, я гадаю, маю чим поділитися",
      "items": [
        {
          "name": "чек лист що питають на співбесідах frontend developer",
          "price": "150 грн"
        },
        {
          "name": "як складати cover letter (мій досвід)",
          "price": "150 грн"
        },
        {
          "name": "як привертати увагу рекрутерів",
          "price": "150 грн"
        },
        {
          "name": "тех чек (для джунів frontend)",
          "price": "150 грн"
        }
      ]
    },
    {
      "category": "медіа",
      "description": "був час коли я займався медійною стороною для Студентського уряду ВНТУ та Відокремленого підрозділу УСЛ, люди казали, що буває, креативні ідеї видаю. Тому якщо хочеш щось зробити в медіа (для себе чи організації) - можливо, я зможу щось накинути ",
      "items": [
        {
          "name": "поділюсь референсами, які залишилися в мене",
          "price": "100 грн"
        },
        {
          "name": "спільний брейншторм",
          "price": "200 грн"
        },
        {
          "name": "ідея + реалізація креативу [Вінниця]",
          "price": "300 грн"
        }
      ]
    },
    {
      "category": "різне",
      "description": "просто ось таких пару пунктиків, які на мою думку прикольненькі",
      "items": [
        {
          "name": "анекдот",
          "price": "50 грн"
        },
        {
          "name": "порекомендувати книгу ",
          "price": "70 грн"
        },
        {
          "name": "порекомендувати фільм ",
          "price": "70 грн"
        },
        {
          "name": "подарую книгу, яку останню прочитав",
          "price": "200 грн"
        },
        {
          "name": "маєш свою ідею, яку я не врахував",
          "price": "500 грн"
        }
      ]
    },
    {
      "category": "разом",
      "description": "ти платиш гроші, з мене вся організація. класно придумав?) (якщо активність платна - кожен платить сам за себе)",
      "items": [
        {
          "name": "піти на пробіжку ",
          "price": "100 грн"
        },
        {
          "name": "зібратися на футбол",
          "price": "200 грн"
        },
        {
          "name": "пограємо в приставку",
          "price": "150 грн"
        },
        {
          "name": "покататися на велосипедах",
          "price": "200 грн"
        },
        {
          "name": "пограти майнкрафт",
          "price": "100 грн"
        },
        {
          "name": "покататися на сапах",
          "price": "500 грн"
        },
        {
          "name": "піти на каву",
          "price": "200 грн"
        },
        {
          "name": "піти на пиво",
          "price": "200 грн"
        }
      ]
    },
    {
      "category": "для моєї дівчини",
      "description": "Аліна попросила додати це сюди - хто я такий, щоб це не зробити)",
      "items": [
        {
          "name": "виконувати цілий день бажання",
          "price": "1000 грн"
        },
        {
          "name": "помити машину",
          "price": "300 грн"
        }
      ]
    }
  ];
  

  useEffect(() => {
    // Використовуємо статичні дані замість fetch
    setCategories(staticData);
    setLoading(false);
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
              <p>{selectedCategory.description}</p>
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
                <span className="price-label">для того щоб обрати цю позицію, потрібно зробити донат від {modalItem?.price}. І зазнач, будь ласка, в призначенні яку позицію обрав і як тебе можна знайти (телеграм/інстаграм)</span>
              </div>
              <div className="modal-actions">
                <a 
                  href="https://send.monobank.ua/jar/7uiVGcPZbN" 
                  className="modal-button"
                  target="_blank"
                  rel="noopener noreferrer"
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
