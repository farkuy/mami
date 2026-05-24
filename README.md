# Нижний Новгород: Открой Свой

Next.js сайт частного гида по Нижнему Новгороду: экскурсии, страницы услуг, отзывы, оплата, юридические страницы и форма заявки.

## Стек

- Next.js App Router
- React 19
- TypeScript
- CSS Modules
- Static assets in `src/assets` and `public`

## Команды

```bash
npm install
npm run dev
npm run build
npm run start
npm run lint
```

## Переменные окружения

```bash
NEXT_PUBLIC_CONTACT_API_URL=http://localhost:3001/api/contact
NEXT_PUBLIC_SITE_URL=https://www.test.ru
```

`NEXT_PUBLIC_CONTACT_API_URL` указывает на backend `mm-mail`. SMTP-секреты остаются только в backend и не должны попадать во frontend.

## Структура

- `app/` - маршруты Next.js.
- `src/components/` - UI и секции страниц.
- `src/config/` - контакты, навигация, SEO и structured data.
- `src/data/` - данные экскурсий и отзывов.
- `src/assets/` - локальные изображения.
- `public/` - публичные файлы.

## Проверка перед публикацией

```bash
npm run lint
npm run build
npm run start
```

После запуска production-версии проверьте основные страницы, мобильное меню, форму заявки, `/robots.txt`, `/sitemap.xml` и 404.
