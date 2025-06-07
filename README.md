# PhuketGo

Флагманский туристический сайт на WordPress с автоматическим импортом туров, рерайтом статей, генерацией Telegram‑постов и визуальным управлением через Codex.

## Стартовая инициализация

1. Склонировать репозиторий:
   ```bash
git clone https://github.com/aaddaa/phuketgo.git
cd phuketgo
```

2. Установить зависимости и скопировать `.env.example` в `.env`:

   ```bash
npm install
cp .env.example .env
```

3. Настроить переменные окружения в `.env`.
4. Запустить локально:
   ```bash
npm run dev
```

## Интеграции

* WordPress REST API
* WooCommerce API
* Telegram Bot API
* Codex Dashboard
* Railway CI/CD

## Подключение к Railway

1. Создать проект на Railway и подключить GitHub-репозиторий.
2. Добавить секреты из `.env` в настройки Railway.
3. Настроить автодеплой при пуше в ветку `main`.

## Дальнейшие шаги

1. Реализовать базовый клиент для WordPress API и создать тестовую статью.
2. Реализовать парсер туров из TIsland в `backend/parser/tisland`.
3. Настроить отправку тестового сообщения в Telegram из `backend/telegram`.
4. Добавить GitHub Actions для запуска тестов и линтинга.
5. Подготовить шаблоны Codex для визуального управления импортом.

*Документ сгенерирован автоматически для упрощения старта проекта.*
