# Этап 5. Перенос страниц

Дата выполнения: 2026-05-16.

## Что перенесено

В Next.js добавлены аналоги всех пользовательских маршрутов:

| Маршрут | Файл Next.js |
| --- | --- |
| `/` | `next/app/page.tsx` |
| `/tours` | `next/app/tours/page.tsx` |
| `/tours/[slug]` | `next/app/tours/[slug]/page.tsx` |
| `/reviews` | `next/app/reviews/page.tsx` |
| `/about` | `next/app/about/page.tsx` |
| `/payment` | `next/app/payment/page.tsx` |
| `/privacy` | `next/app/privacy/page.tsx` |
| `/data-policy` | `next/app/data-policy/page.tsx` |
| 404 | `next/app/not-found.tsx` |

Также перенесены в `next/src`:

- компоненты страниц и UI-компоненты;
- `data/tours.ts`;
- `data/reviews.ts`;
- изображения из `src/assets`.

## Адаптация под Next.js

- Все найденные `react-router-dom` зависимости в `next/src` удалены.
- Внутренние ссылки переведены на `next/link`.
- Детальная страница тура стала серверной страницей.
- Модалка заявки на странице тура вынесена в client component `next/src/components/TourOrderCta/TourOrderCta.tsx`.
- Для `/tours/[slug]` добавлен `generateStaticParams`.
- Для неизвестного slug используется `notFound()`.
- `import.meta.glob` в галерее отзывов заменен на явные импорты изображений.
- `OrderForm` переведен на `NEXT_PUBLIC_CONTACT_API_URL`, fallback остается `http://localhost:3001/api/contact`.
- Fallback email для ошибки формы берется из `contacts.email`.

## Client components

Client components отмечены там, где нужны hooks, DOM, portal или fetch:

- `Header`
- `Meet`
- `SmartImage`
- `Modal`
- `OrderForm`
- `ReviewsGallery`
- `TourOrderCta`

## Проверки

В папке `next/`:

- `npm run lint` - успешно.
- `npm run build` - успешно.
- Build сгенерировал 25 статических страниц.
- `/tours/[slug]` собирается как SSG через `generateStaticParams`.

На dev server `http://127.0.0.1:3100` проверены:

- `/` - 200
- `/tours` - 200
- `/reviews` - 200
- `/payment` - 200
- `/about` - 200
- `/privacy` - 200
- `/data-policy` - 200
- `/missing-route` - 404
- все 16 страниц `/tours/<slug>` - 200

В корне проекта:

- `npm run build` - успешно, текущий Vite frontend не сломан.

## Статус

Этап 5 завершен: все старые пользовательские маршруты имеют Next.js аналоги и открываются напрямую по URL.
