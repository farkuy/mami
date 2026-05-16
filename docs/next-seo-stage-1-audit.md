# Этап 1. Аудит текущего frontend

Дата аудита: 2026-05-16.

## Общая картина

- Текущий frontend: Vite + React 19 + TypeScript.
- Роутинг: `react-router-dom` 7 через `BrowserRouter` в `src/App.tsx`.
- Стили: глобальные `src/index.css`, `src/App.css` и CSS Modules рядом с компонентами.
- Данные экскурсий: `src/data/tours.ts`.
- Данные отзывов: `src/data/reviews.ts`.
- Контакты: `src/config/contacts.ts`.
- Форма заявки: `src/components/OrderForm/OrderForm.tsx`, отправка в `VITE_CONTACT_API_URL` или `http://localhost:3001/api/contact`.
- Service worker регистрируется в production из `src/main.tsx` через `public/sw.js`.

## Скрипты и зависимости

Скрипты из `package.json`:

- `npm run dev` - Vite dev server.
- `npm run build` - `tsc -b && vite build`.
- `npm run lint` - ESLint.
- `npm run preview` - Vite preview.
- `npm run start` - build + preview.

Ключевые runtime-зависимости:

- `react`
- `react-dom`
- `react-router-dom`

Для Next.js миграции `react-router-dom` должен уйти из runtime-кода Next-версии, а навигация должна перейти на `next/link`, `usePathname`, `notFound` и файловый роутинг.

## Текущие маршруты

Маршруты объявлены в `src/App.tsx`:

| Текущий путь | Компонент страницы | Next.js аналог |
| --- | --- | --- |
| `/` | `src/pages/HomePage.tsx` | `app/page.tsx` |
| `/tours` | `src/pages/ToursPage.tsx` | `app/tours/page.tsx` |
| `/tours/:slug` | `src/pages/TourPage.tsx` | `app/tours/[slug]/page.tsx` |
| `/about` | `src/pages/AboutPage.tsx` | `app/about/page.tsx` |
| `/payment` | `src/pages/PaymentPage.tsx` | `app/payment/page.tsx` |
| `/reviews` | `src/pages/ReviewsPage.tsx` | `app/reviews/page.tsx` |
| `/privacy` | `src/pages/PrivacyPage.tsx` | `app/privacy/page.tsx` |
| `/data-policy` | `src/pages/DataPolicyPage.tsx` | `app/data-policy/page.tsx` |

Отдельного React Router маршрута для 404 нет. Сейчас есть `public/404.html`. В Next нужно добавить `app/not-found.tsx`.

## Страницы для переноса

- `HomePage` собирает первый экран и основные блоки: `Hero`, `About`, `Pitch`, `Meet`, `ContactForm`.
- `ToursPage` показывает список экскурсий через `Tours`.
- `TourPage` показывает детальную страницу экскурсии, берет `slug` из URL, ищет тур через `getTourBySlug`, при отсутствии делает redirect на `/tours`, открывает модалку заявки.
- `ReviewsPage` показывает `Reviews` и `ReviewsGallery`.
- `AboutPage` показывает `AboutFull`.
- `PaymentPage` показывает `Payment`.
- `PrivacyPage` показывает `Privacy`.
- `DataPolicyPage` показывает `DataPolicy`.

## Экскурсии для статических страниц

В `src/data/tours.ts` найдено 16 экскурсий:

| Slug | Группа | Название |
| --- | --- | --- |
| `obzornaya` | `city` | Обзорная экскурсия в Нижнем Новгороде |
| `kreml` | `city` | Экскурсия по Нижегородскому Кремлю |
| `detali` | `city` | «Город в деталях» - пешеходная экскурсия по центру |
| `strelka-sobor` | `city` | Экскурсия по Стрелке и Кафедральному собору Александра Невского |
| `stolitsa-zakatov` | `city` | «Столица закатов» - вечерняя экскурсия |
| `chaepitie-na-strelke` | `city` | Прогулка по Стрелке + мастер-класс «Чаепитие по-нижегородски» |
| `gastro` | `city` | Гастрономическая экскурсия «Традиции волжской кухни» |
| `misticheskiy` | `city` | «Мистический Нижний» |
| `karman-rossii` | `city` | «Карман России» - экскурсия по Нижегородской ярмарке |
| `reki` | `city` | «На перекрёстке великих рек» - экскурсия по Волге и Оке |
| `zvezdy` | `city` | «Звёзды над Волгой: судьбы знаменитых нижегородцев» |
| `prazdnichnye` | `city` | Праздничные тематические экскурсии |
| `gorodskie-legendy` | `children` | «Городские легенды» |
| `zagadki-kreposti` | `children` | «Загадки древней крепости» |
| `millionka` | `children` | «Тайны нищей Миллионки и купеческой Рождественской» |
| `masterovoy` | `children` | «Мастеровой Нижний Новгород» |

Эти slug должны попасть в `generateStaticParams` для `app/tours/[slug]/page.tsx`.

## Общие данные, которые стоит сохранить

- `src/data/tours.ts` - типы `TourGroupId`, `Tour`, `TourGroup`, массивы `tourGroups`, `tours`, helpers `getTourBySlug`, `getToursByGroup`.
- `src/data/reviews.ts` - тип `Review` и массив `reviews`.
- `src/config/contacts.ts` - единый источник телефона, email и Telegram.
- `src/config/navigation.ts` - навигационные пункты, но ссылки будут использовать Next API.

Важно: в `OrderForm` сейчас есть локальная константа `CONTACT_EMAIL`. При переносе лучше брать fallback-email из `contacts.email`, чтобы не появилось второе место правды.

## Компоненты с зависимостью от React Router

Эти файлы нужно заменить или адаптировать при переносе на Next:

- `src/App.tsx` - удалить `BrowserRouter`, `Routes`, `Route`; заменить файловым роутингом Next.
- `src/pages/TourPage.tsx` - заменить `useParams`, `Navigate`, `Link`; для неизвестного slug использовать `notFound()` или redirect по выбранному поведению.
- `src/components/Layout/Layout.tsx` - заменить `Outlet` на `children` в `app/layout.tsx`.
- `src/components/ScrollToTop.tsx` - использует `useLocation`; в Next может быть client component на `usePathname`/`useSearchParams` или может быть исключен, если поведение не нужно.
- `src/components/Header/Header.tsx` - заменить `Link`, `NavLink`, `useLocation`; активность считать через `usePathname`. Компонент остается client component из-за `useState`, `useEffect`, scroll и мобильного меню.
- `src/components/Footer/Footer.tsx` - заменить `Link` на `next/link`.
- `src/components/Hero/Hero.tsx` - заменить `Link` на `next/link`.
- `src/components/Tours/Tours.tsx` - заменить `Link` на `next/link`.
- `src/components/ToursPreview/ToursPreview.tsx` - заменить `Link` в кнопке.
- `src/components/ReviewsPreview/ReviewsPreview.tsx` - заменить `Link` в кнопке.
- `src/components/OrderForm/OrderForm.tsx` - заменить `Link`; компонент остается client component из-за формы, state, fetch и toast.

## Компоненты, которые точно останутся client components

- `Header` - состояние меню, scroll listener, hash scroll.
- `Meet` - локальное состояние активного изображения.
- `ReviewsGallery` - состояние активного изображения и keyboard/effect логика.
- `OrderForm` - state, submit, toast, fetch.
- `Modal` - portal, effect, обработчики закрытия.
- `SmartImage` - `useRef`, `useState`, `useEffect`; в Next можно постепенно заменить на `next/image`, но это отдельный этап оптимизации.
- `TourPage` в текущем виде client-only из-за модалки и state. Для SEO лучше разделить: серверная страница рендерит контент тура, а кнопку/модалку заявки вынести в client component.

## Проверка полноты

Учтены пользовательские страницы:

- Главная.
- Список экскурсий.
- 16 детальных страниц экскурсий.
- Отзывы.
- Оплата.
- О гиде/услугах.
- Политика конфиденциальности.
- Обработка персональных данных.

Не потеряны юридические страницы, отзывы, оплата и экскурсии. Контактные каналы должны остаться видимыми в `Header`, `Footer`, `ContactForm`, `Privacy`, `DataPolicy`.

## Замечания перед этапом 2

- В рабочем дереве уже есть незакоммиченное изменение `.gitignore`; я его не трогал.
- Текущий план миграции добавлен в `.gitignore`, поэтому этот аудит создан отдельным файлом.
- Следующий этап требует выбрать структуру миграции. Самый безопасный вариант для этого репозитория - создать Next.js приложение рядом с текущим Vite-кодом или в отдельной папке внутри репозитория, не удаляя Vite-файлы до полной проверки.
