# Этап 4. Перенос глобальной основы

Дата выполнения: 2026-05-16.

## Что перенесено в Next.js

- Глобальные CSS-переменные, reset и базовые utility-классы из Vite frontend перенесены в `next/app/globals.css`.
- Root layout в `next/app/layout.tsx` теперь подключает:
  - `Header`;
  - общий `<main>`;
  - `Footer`.
- Контакты перенесены в `next/src/config/contacts.ts`.
- Навигация перенесена в `next/src/config/navigation.ts`.
- Header перенесен в `next/src/components/Header`.
- Footer перенесен в `next/src/components/Footer`.

## Адаптация роутинга

- `react-router-dom` в перенесенных компонентах не используется.
- Внутренние ссылки заменены на `next/link`.
- Активный пункт меню в Header считается через `usePathname`.
- Header помечен как client component, потому что использует `useState`, `useEffect`, scroll listener и мобильное меню.
- Footer остается server component.

## Контакты

Контактные данные остались централизованы:

```text
next/src/config/contacts.ts
```

В Header и Footer есть телефон, Telegram и email. Messenger-ссылка открывается через `target="_blank"` и `rel="noopener noreferrer"`.

## Временная главная

`next/app/page.tsx` пока остается временной страницей статуса миграции, но уже рендерится внутри общего layout с Header/Footer. Полноценные бизнес-страницы будут переноситься на этапе 5.

## Проверки

В папке `next/`:

- `npm run lint` - успешно.
- `npm run build` - успешно.
- Dev server `http://127.0.0.1:3100` ответил `200`.
- HTML содержит `Нижний Новгород: Открой Свой`, футерный текст `Все права защищены` и email `guide@example.com`.

## Статус

Этап 4 завершен: общая основа Next.js версии подключена, навигация и контакты работают через Next-compatible компоненты.
