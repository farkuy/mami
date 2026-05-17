# Этап 12. Финальная проверка перед релизом

## Что проверено

- `npm run lint` в `next` проходит.
- `npm run build` в `next` проходит.
- Production-сервер Next запущен локально на `http://localhost:3002`.
- `mm-mail` запущен локально на `http://localhost:3001`.
- `mm-mail` для проверки разрешает CORS с `http://localhost:3002`.

## Маршруты

Production-ответы:

- `/` - 200.
- `/tours` - 200.
- `/tours/obzornaya` - 200.
- `/tours/kreml` - 200.
- `/reviews` - 200.
- `/payment` - 200.
- `/about` - 200.
- `/privacy` - 200.
- `/data-policy` - 200.
- `/robots.txt` - 200.
- `/sitemap.xml` - 200.
- Несуществующий маршрут - 404.

Все 16 страниц экскурсий из `src/data/tours.ts` проверены по slug: каждая отдает 200, содержит H1 и путь к заказу.

## SEO

- На ключевых страницах есть `title`.
- На ключевых страницах есть `meta name="description"`.
- На ключевых страницах есть canonical.
- На ключевых страницах есть Open Graph title и image.
- `/robots.txt` доступен.
- `/sitemap.xml` доступен.
- Sitemap содержит 23 URL и не содержит `localhost`.
- JSON-LD на главной и на странице экскурсии успешно парсится как JSON.
- 404-страница содержит `Страница не найдена` и `noindex`.

## Контакты и форма

- В контактном конфиге исправлен email на `bogdasovanton83@gmail.com`.
- На главной production-странице есть:
  - `tel:+79200205424`;
  - `mailto:bogdasovanton83@gmail.com`;
  - Telegram `https://t.me/irisbogd`.
- JSON-LD содержит актуальный email.
- Тестовая заявка через локальный backend с Origin `http://localhost:3002` вернула `200` и `{ ok: true }`.
- CORS preflight для `http://localhost:3002` вернул `Access-Control-Allow-Origin: http://localhost:3002`.

## Тексты

- В `app` и `src` не найдено длинных тире `—` и `–`.
- В `app` и `src` не найдено явных признаков битой кодировки: `вЂ`, `�`, mojibake-паттерны `Р...`/`С...`.
- Placeholder `guide@example.com` убран из Next-контактов.

## Осталось проверить вручную

- Открыть `http://localhost:3002` в браузере.
- Проверить главную, `/tours`, одну-две страницы экскурсий, `/reviews`, `/payment`, `/privacy`, `/data-policy`.
- Проверить мобильную ширину в DevTools.
- Открыть/закрыть мобильное меню.
- Открыть модалку заказа на странице экскурсии.
- Отправить тестовую заявку из браузера.
- Убедиться, что в browser console нет ошибок.

Автоматическая browser-console/mobile-проверка в текущей среде не выполнена: доступного browser automation runtime нет, поэтому этот пункт оставлен как ручной smoke-test.

## Важное перед публикацией

- Перед production-деплоем задать реальный `NEXT_PUBLIC_SITE_URL`, если домен отличается от текущего `https://www.test.ru`.
- Для production backend добавить реальный домен Next-сайта в `ALLOWED_ORIGINS` у `mm-mail`.

## Итог

Этап 12 выполнен на уровне кода, сборки и HTTP/SEO/API-проверок. Перед релизом остается короткий ручной визуальный smoke-test в браузере и проверка production-домена/env.
