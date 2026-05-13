<br clear="both">

<div align="center">
  <img width="300" height="auto" src="./assets/app_img.png" />
</div>

<h1 align="center">📰 NEWS APP</h1>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-20232a?logo=react&style=for-the-badge" alt="React" />
  <img src="https://img.shields.io/badge/Vite-8-646cff?logo=vite&style=for-the-badge" alt="Vite" />
  <img src="https://img.shields.io/badge/Axios-1.16-5a29e4?logo=axios&style=for-the-badge" alt="Axios" />
  <img src="https://img.shields.io/badge/CSS_Modules-000?logo=cssmodules&style=for-the-badge" alt="CSS Modules" />
  <img src="https://img.shields.io/badge/ESLint-9-4b32c3?logo=eslint&style=for-the-badge" alt="ESLint" />
</p>

<h3 align="center">
  Лаконичное новостное приложение с живым API, адаптивным дизайном и умным отображением времени
</h3>

---

# 🧠 О проекте

Минималистичный агрегатор новостей, который получает данные из Currents API и отображает их в виде карточек с автоматическим расчётом времени публикации.

Никакой лишней информации — только:

- заголовок
- изображение
- автор
- время публикации в формате:
  - `2 минуты назад`
  - `3 часа назад`
  - `1 день назад`

Приложение создано для быстрого просмотра новостей:

> открыл → увидел главное → закрыл.

---

# ✨ Функциональность

- 📰 **Живая лента новостей**
  - загрузка актуальных мировых новостей при открытии страницы

- ⏳ **Человеческое отображение времени**
  - вместо сухих дат используется формат `time ago`

- 🎯 **Два формата отображения**
  - большой баннер для главной новости
  - компактный список для остальных

- 📱 **Адаптивная вёрстка**
  - интерфейс корректно выглядит на любых устройствах

- 🔒 **Безопасность**
  - API-ключ хранится в `.env` и не попадает в Git

- 🖼 **Плейсхолдеры изображений**
  - если картинки нет — показывается заглушка

---

# 🛠 Технологии

| Слой         | Технология                         |
| ------------ | ---------------------------------- |
| Интерфейс    | React 19 + React DOM               |
| Сборка       | Vite 8                             |
| HTTP-запросы | Axios                              |
| Стилизация   | CSS Modules + Google Fonts (Inter) |
| Линтинг      | ESLint 9                           |
| API          | Currents API                       |

---

# 🏗 Архитектура проекта

Проект разделён на логические слои, благодаря чему код легко читать и расширять.

## 📂 `api/`

Слой работы с сервером.

```js
apiNews.js;
```

Отвечает за:

- HTTP-запросы
- подключение Currents API
- работу с переменными окружения

---

## 🧩 `components/`

Переиспользуемые UI-компоненты.

Каждый компонент содержит:

- JSX-логику
- CSS Module со стилями

### Компоненты:

| Компонент    | Описание                             |
| ------------ | ------------------------------------ |
| `Header`     | шапка приложения + текущая дата      |
| `Image`      | изображение с fallback-плейсхолдером |
| `NewsBanner` | главная новость                      |
| `NewsItem`   | карточка новости                     |
| `NewsList`   | список новостей                      |

---

## 📄 `pages/`

Страницы приложения.

### `Main`

Главная страница:

- делает запрос к API через `useEffect`
- сохраняет данные в state
- передаёт новости компонентам

---

## 🛠 `helpers/`

Чистые утилиты без React.

| Файл               | Назначение                |
| ------------------ | ------------------------- |
| `formatDate.js`    | форматирование даты       |
| `formatTimeAgo.js` | расчёт времени публикации |

---

# 🔑 Настройка API

Приложение использует API сервиса:

👉 https://currentsapi.services/en

## Что нужно сделать:

### 1️⃣ Зарегистрироваться

Создай аккаунт на сайте Currents API.

### 2️⃣ Получить API Key

Скопируй ключ из личного кабинета.

### 3️⃣ Создать `.env`

В корне проекта создай файл:

```env
VITE_NEWS_BASE_API_URL=https://api.currentsapi.services/v1/
VITE_NEWS_API_KEY=your_api_key
```

---

# 🚀 Запуск проекта

## Клонирование репозитория

```bash
git clone https://github.com/your-username/news_app.git
cd news_app
```

## Установка зависимостей

```bash
npm install
```

## Запуск dev-сервера

```bash
npm run dev
```

---

# 📦 Доступные команды

| Команда           | Описание                            |
| ----------------- | ----------------------------------- |
| `npm run dev`     | запуск dev-сервера                  |
| `npm run build`   | production build                    |
| `npm run preview` | локальный preview production-сборки |
| `npm run lint`    | проверка ESLint                     |

---

# 📁 Структура проекта

```bash
news_app/
├── .env.example
├── .gitignore
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
└── src/
    ├── api/
    │   └── apiNews.js
    │
    ├── components/
    │   ├── Header/
    │   ├── Image/
    │   ├── NewsBanner/
    │   ├── NewsItem/
    │   └── NewsList/
    │
    ├── helpers/
    │   ├── formatDate.js
    │   └── formatTimeAgo.js
    │
    ├── pages/
    │   └── Main/
    │
    ├── App.jsx
    ├── main.jsx
    └── index.css
```

---

# 📬 Контакты

<div align="center">
  <a href="https://t.me/Shayba_05" target="_blank">
    <img
      src="https://img.shields.io/static/v1?message=Telegram&logo=telegram&label=&color=2CA5E0&logoColor=white&style=for-the-badge"
      height="30"
      alt="telegram"
    />
  </a>
</div>

---

<h3 align="center">
  ⭐ Поставь звезду, если проект понравился ⭐
</h3>
