# Этап 10. Форма заявки и backend

## Что сделано

- Проверен перенос `OrderForm` в `next/src/components/OrderForm/OrderForm.tsx`.
- Компонент оставлен client component через `'use client'`, потому что использует state, effect и отправку формы.
- Ссылки на политику и обработку данных работают через `next/link`.
- Email для fallback-сообщения берется из `next/src/config/contacts.ts`.
- URL backend берется из `NEXT_PUBLIC_CONTACT_API_URL`, с локальным fallback `http://localhost:3001/api/contact`.
- В `.env.example` добавлена переменная `NEXT_PUBLIC_CONTACT_API_URL`.
- Обработка ответа backend проверяет успешный контракт `{ ok: true }` и показывает серверные `errors` или `error` в toast.

## Backend

- SMTP-секреты не переносились во frontend.
- Контракт сверили с `mm-mail`:
  - `POST /api/contact`;
  - поля `name`, `email`, `message`, `tourName`, `acceptedPolicy`;
  - успешный ответ `{ ok: true }`;
  - ошибки валидации в `errors`.

## Проверка

- `npm run lint` в `next` проходит.
- `npm run build` в `next` проходит.
- `mm-mail` запущен локально на `http://localhost:3001`.
- `GET /health` вернул `{ ok: true }`.
- `POST /api/contact` с некорректным email вернул `400` и `errors.email`.
- `POST /api/contact` с тестовой валидной заявкой вернул `200` и `{ ok: true }`.
- При локальной браузерной проверке нужно запускать Next с `NEXT_PUBLIC_CONTACT_API_URL=http://localhost:3001/api/contact`.
- Важно: текущий `mm-mail` разрешает CORS для `http://localhost:5173`, но не для стандартного Next dev origin `http://localhost:3000`. Для проверки в браузере нужно либо добавить `http://localhost:3000` и `http://127.0.0.1:3000` в `ALLOWED_ORIGINS` backend, либо запускать Next на разрешенном origin.

## Итог

Этап 10 выполнен на уровне кода: форма Next.js использует публичный URL backend, не содержит SMTP-секретов, сохраняет обработку валидации и ожидает подтверждение `{ ok: true }` от `mm-mail`.
