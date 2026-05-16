# Этап 9. Структурированные данные JSON-LD

## Что сделано

- Добавлен общий компонент `next/src/components/JsonLd/JsonLd.tsx`.
- Добавлен конфиг-строитель `next/src/config/structured-data.ts`.
- В корневой layout добавлен JSON-LD граф:
  - `WebSite`;
  - `LocalBusiness`.
- На страницы экскурсий добавлен JSON-LD граф:
  - `BreadcrumbList`;
  - `TouristTrip`.

## Данные

- Общие данные сайта берутся из `next/src/config/seo.ts`.
- Телефон, email и Telegram берутся из `next/src/config/contacts.ts`.
- Данные экскурсии берутся из `next/src/data/tours.ts`.
- URL и изображения формируются абсолютными ссылками через текущий `NEXT_PUBLIC_SITE_URL`.
- Рейтинги не добавлены, потому что в данных нет подтвержденного агрегированного рейтинга.

## Проверка

- `npm run build` проходит.
- `npm run lint` проходит.
- Проверен сгенерированный HTML:
  - `next/.next/server/app/index.html` содержит `WebSite` и `LocalBusiness`;
  - `next/.next/server/app/tours/obzornaya.html` содержит `WebSite`, `LocalBusiness`, `BreadcrumbList` и `TouristTrip`.
- JSON-LD блоки извлечены из HTML и успешно распарсены через `ConvertFrom-Json`.

## Итог

Этап 9 выполнен: сайт и страницы экскурсий получили машинно-читаемые структурированные данные, соответствующие видимому контенту страниц.
