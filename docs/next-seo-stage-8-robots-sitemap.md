# Этап 8. robots.txt и sitemap.xml

## Что сделано

- Добавлен `next/app/robots.ts`.
- Добавлен `next/app/sitemap.ts`.
- `robots.txt` разрешает индексацию сайта и указывает sitemap.
- `sitemap.xml` включает:
  - `/`;
  - `/tours`;
  - `/about`;
  - `/reviews`;
  - `/payment`;
  - `/privacy`;
  - `/data-policy`;
  - все страницы экскурсий из `next/src/data/tours.ts`.
- Домен берется из `NEXT_PUBLIC_SITE_URL`.
- В `.env.example` добавлена переменная `NEXT_PUBLIC_SITE_URL`.

## Проверка

- `npm run build` в папке `next` проходит успешно.
- Next.js генерирует статические маршруты:
  - `/robots.txt`;
  - `/sitemap.xml`.
- Проверен `.next/server/app/robots.txt.body`:
  - есть `User-Agent: *`;
  - есть `Allow: /`;
  - есть `Sitemap: https://www.test.ru/sitemap.xml`.
- Проверен `.next/server/app/sitemap.xml.body`:
  - URL абсолютные;
  - localhost отсутствует;
  - страницы экскурсий присутствуют.

## Результат

Этап 8 выполнен: поисковые роботы получают `robots.txt`, а sitemap содержит основные страницы сайта и все статические страницы экскурсий.
