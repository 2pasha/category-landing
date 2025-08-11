# Каталог категорій - React додаток

Мінімалістичний React додаток для відображення категорій товарів та об'єктів з можливістю донату. Дизайн у термінальному стилі з чорним фоном та білим текстом.

## ✨ Функціональність

- **Відображення категорій**: Мінімалістичний список категорій зліва
- **Вибір категорії**: Клік по категорії робить її активною
- **Відображення об'єктів**: Справа показуються всі об'єкти з обраної категорії
- **Модальне вікно**: Детальна інформація про об'єкт з кнопкою донату
- **Анімації**: Плавні переходи та ефекти появи
- **Адаптивний дизайн**: Підтримка мобільних пристроїв

## 🎨 Дизайн

- **Стиль**: Мінімалістичний термінальний
- **Кольори**: Чорний фон, білий текст
- **Шрифт**: Моноширинний (Courier New, Monaco)
- **Анімації**: Fade-in, slide-in, hover ефекти

## 🚀 Швидкий старт

### Локальний запуск

1. **Клонування репозиторію:**
```bash
git clone https://github.com/your-username/category-landing.git
cd category-landing
```

2. **Встановлення залежностей:**
```bash
npm install
```

3. **Запуск проекту:**
```bash
npm start
```

4. **Відкрийте браузер:** `http://localhost:3000`

### Деплой на GitHub Pages

1. **Підготуйте проект:**
```bash
npm run build
```

2. **Деплой:**
```bash
npm run deploy
```

3. **Налаштування GitHub:**
   - Перейдіть в Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

## 📁 Структура проекту

```
category-landing/
├── public/
│   ├── data.json          # Дані категорій та об'єктів
│   ├── favicon.svg        # SVG favicon
│   ├── og-image.svg       # Open Graph зображення
│   └── index.html         # HTML шаблон з мета-тегами
├── src/
│   ├── App.js             # Основний React компонент
│   ├── App.css            # Стилі з анімаціями
│   └── index.js           # Точка входу
├── package.json           # Залежності та скрипти
└── README.md              # Документація
```

## ⚙️ Налаштування

### Зміна даних

Відредагуйте файл `public/data.json`:

```json
[
  {
    "category": "Назва категорії",
    "items": [
      {
        "name": "Назва об'єкта",
        "price": "Сума донату"
      }
    ]
  }
]
```

### Зміна посилання для донату

В `src/App.js` знайдіть та змініть URL:

```javascript
href="https://send.monobank.ua/jar/YOUR_JAR_ID"
```

### Налаштування GitHub Pages

1. **Оновіть `homepage` в `package.json`:**
```json
"homepage": "https://YOUR_USERNAME.github.io/category-landing"
```

2. **Замініть `your-username` в `public/index.html`:**
```html
<meta property="og:url" content="https://YOUR_USERNAME.github.io/category-landing/" />
```

## 🔧 Технології

- **React 18** - UI бібліотека
- **CSS3** - Стилі та анімації
- **Fetch API** - Завантаження даних
- **gh-pages** - Деплой на GitHub Pages

## 📱 Responsive дизайн

- **Desktop**: Двостовпцевий layout
- **Tablet**: Адаптивні відступи
- **Mobile**: Одностовпцевий layout

## 🎯 SEO та мета-теги

- **Title**: "Каталог категорій - Мінімалістичний лендінг"
- **Description**: Опис функціональності
- **Open Graph**: Для соціальних мереж
- **Twitter Cards**: Для Twitter
- **Favicon**: SVG іконка

## 🚀 Команди

```bash
npm start          # Запуск dev сервера
npm run build      # Збірка для продакшену
npm run deploy     # Деплой на GitHub Pages
npm test           # Запуск тестів
```

## 📄 Ліцензія

MIT License - вільне використання та модифікація.

## 🤝 Внесок

1. Fork проект
2. Створіть feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit зміни (`git commit -m 'Add some AmazingFeature'`)
4. Push в branch (`git push origin feature/AmazingFeature`)
5. Відкрийте Pull Request

## 📞 Підтримка

Якщо у вас є питання або пропозиції, створіть Issue в репозиторії.

---

**Створено з ❤️ використовуючи React та мінімалістичний дизайн**
