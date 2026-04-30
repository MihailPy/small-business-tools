# Small Business Tools Landing

Одностраничный сайт на чистом HTML/CSS/JavaScript для презентации цифровых услуг малому бизнесу.

## Что внутри

- Hero-блок с основным оффером и кнопкой связи в Telegram
- Секции: аудитория, услуги, примеры решений, этапы работы, цены
- Блок навыков и контактов
- Полностью клиентский рендер контента из `script.js` (без бэкенда)
- Адаптивная верстка для desktop/tablet/mobile

## Стек

- `HTML5`
- `CSS3` (custom properties, grid/flex, media queries)
- `Vanilla JavaScript`

## Структура проекта

- `index.html` — разметка секций и контейнеров
- `style.css` — тема, сетка, карточки, кнопки, адаптив
- `script.js` — контент, ссылки и рендер всех динамических блоков
- `README.md` — документация

## Быстрый запуск

1. Клонируйте репозиторий.
2. Откройте `index.html` в браузере.

Для локальной разработки удобнее запускать простой сервер:

```bash
python3 -m http.server 8000
```

После этого откройте `http://localhost:8000`.

## Как редактировать контент

Весь контент задается в `script.js`.

### 1) Основные тексты и контакты

Редактируйте объект `siteConfig`:

- `heroText`
- `contactsTitle`
- `contactsNote`
- `footerTitle`
- `telegramUrl`
- `email`

### 2) Целевая аудитория

Редактируйте массив `audience`.

### 3) Услуги

Редактируйте массив `services`.

Каждый элемент содержит:

- `title`
- `benefit`
- `result`
- `priceFrom`
- `timeline`

### 4) Примеры решений

Редактируйте массив `examples` (`title`, `description`).

### 5) Этапы работы

Редактируйте массив `workflowSteps`.

### 6) Тарифы

Редактируйте массив `pricingPlans` (`name`, `description`, `price`, `timeline`).

### 7) Входной оффер

Редактируйте объект `entryOffer` (`title`, `description`).

### 8) Блок доверия

Редактируйте объект `trustBlock`:

- `skills` — список чипов
- `note` — короткий поясняющий текст

## Кастомизация дизайна

Основные цвета и параметры задаются в `style.css` через CSS-переменные в `:root`:

- `--bg`, `--surface`, `--text`, `--muted`
- `--accent`, `--line`, `--shadow`, `--radius`

Сетки секций и карточек настраиваются через классы:

- `.hero__wrap`
- `.cards`, `.cards--compact`
- `.steps`
- `.trust-grid`
- `.contacts`

## Деплой

Проект статический, поэтому подходит любой static hosting:

- GitHub Pages
- Netlify
- Vercel (как static site)
- Nginx/Apache

## Ограничения текущей версии

- Нет формы отправки данных на сервер
- Нет CMS/админки
- Нет аналитики (Yandex Metrica/GA) из коробки
- Контент редактируется вручную в `script.js`
