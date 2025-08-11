# 🚀 Інструкції по деплою

## GitHub Pages

### 1. Підготовка репозиторію

1. **Створіть новий репозиторій на GitHub:**
   - Назва: `category-landing`
   - Публічний або приватний
   - Не додавайте README, .gitignore або ліцензію

2. **Клонуйте репозиторій:**
```bash
git clone https://github.com/YOUR_USERNAME/category-landing.git
cd category-landing
```

3. **Скопіюйте файли проекту в папку**

4. **Оновіть `package.json`:**
```json
"homepage": "https://YOUR_USERNAME.github.io/category-landing"
```

5. **Оновіть `public/index.html`:**
```html
<meta property="og:url" content="https://YOUR_USERNAME.github.io/category-landing/" />
<meta property="twitter:url" content="https://YOUR_USERNAME.github.io/category-landing/" />
```

### 2. Деплой

1. **Встановіть залежності:**
```bash
npm install
```

2. **Зробіть перший коміт:**
```bash
git add .
git commit -m "Initial commit: Category landing app"
git push origin main
```

3. **Деплой на GitHub Pages:**
```bash
npm run deploy
```

4. **Налаштування GitHub Pages:**
   - Перейдіть в Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)
   - Save

### 3. Перевірка

- Відкрийте `https://YOUR_USERNAME.github.io/category-landing`
- Перевірте, що всі функції працюють
- Перевірте мета-теги та favicon

## Vercel (Альтернатива)

### 1. Підготовка

1. **Зареєструйтесь на [vercel.com](https://vercel.com)**
2. **Підключіть GitHub акаунт**

### 2. Деплой

1. **Натисніть "New Project"**
2. **Імпортуйте репозиторій `category-landing`**
3. **Налаштування:**
   - Framework Preset: Create React App
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm install`

### 3. Перевірка

- Vercel автоматично створить URL
- Кожен push в main гілку автоматично деплоїться

## 🔧 Налаштування після деплою

### 1. Оновлення даних

1. **Відредагуйте `public/data.json`**
2. **Зробіть коміт та push:**
```bash
git add .
git commit -m "Update data"
git push origin main
```

3. **Деплой:**
```bash
npm run deploy  # для GitHub Pages
# або автоматично для Vercel
```

### 2. Зміна посилання для донату

1. **Відредагуйте `src/App.js`**
2. **Замініть URL в кнопці:**
```javascript
href="https://send.monobank.ua/jar/YOUR_NEW_JAR_ID"
```

3. **Деплой змін**

### 3. Оновлення мета-тегів

1. **Відредагуйте `public/index.html`**
2. **Змініть title, description, keywords**
3. **Деплой змін**

## 🚨 Вирішення проблем

### GitHub Pages не оновлюється

1. **Перевірте branch gh-pages**
2. **Очистіть кеш браузера**
3. **Зачекайте 5-10 хвилин**

### Помилки збірки

1. **Перевірте залежності:**
```bash
npm install
```

2. **Очистіть кеш:**
```bash
npm run build -- --reset-cache
```

3. **Перевірте версії Node.js (рекомендовано 16+)**

### Мета-теги не працюють

1. **Перевірте правильність URL в og:url**
2. **Використовуйте абсолютні URL**
3. **Перевірте через [Facebook Debugger](https://developers.facebook.com/tools/debug/)**

## 📱 Перевірка на різних пристроях

1. **Desktop**: Chrome, Firefox, Safari
2. **Mobile**: iOS Safari, Chrome Mobile
3. **Tablet**: iPad, Android tablet
4. **Перевірте responsive дизайн**

## 🔍 SEO перевірка

1. **Google PageSpeed Insights**
2. **Lighthouse Audit**
3. **Meta tags validator**
4. **Open Graph tester**

---

**Успішного деплою! 🎉**
