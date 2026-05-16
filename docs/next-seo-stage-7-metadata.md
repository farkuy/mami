# Этап 7. SEO metadata

## Что сделано

- Добавлен общий SEO-хелпер `next/src/config/seo.ts`.
- В корневом `next/app/layout.tsx` настроены:
  - `metadataBase`;
  - базовый `title` с шаблоном;
  - базовый `description`;
  - базовые Open Graph данные.
- У основных страниц добавлены уникальные `title`, `description`, canonical URL, Open Graph и Twitter Card:
  - `/`;
  - `/tours`;
  - `/reviews`;
  - `/payment`;
  - `/about`;
  - `/privacy`;
  - `/data-policy`.
- Для `next/app/tours/[slug]/page.tsx` добавлен `generateMetadata()`.
- Title, description, canonical и preview image страниц экскурсий генерируются из данных конкретного тура.
- Домен берется из `NEXT_PUBLIC_SITE_URL`, fallback - `https://www.test.ru`.

## Проверка

- `npm run build` в папке `next` проходит успешно.
- В HTML главной страницы есть уникальные:
  - `<title>`;
  - `<meta name="description">`;
  - canonical;
  - `og:title`;
  - `og:image`.
- В HTML `/tours` есть отдельные title/description и canonical `https://www.test.ru/tours`.
- В HTML `/tours/obzornaya` и `/tours/kreml` разные title/description, разные canonical URL и разные preview images.

## Результат

Этап 7 выполнен: основные страницы и страницы экскурсий получили уникальные SEO-теги, canonical URL и Open Graph данные для предпросмотра ссылок.
