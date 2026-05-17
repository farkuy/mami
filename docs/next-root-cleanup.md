# Перенос Next.js в корень

## Что сделано

- Next.js приложение перенесено из `next/` в корень репозитория.
- Старый Vite frontend удален.
- Корневые `package.json`, `package-lock.json`, `tsconfig.json`, `eslint.config.mjs`, `next.config.ts` и `next-env.d.ts` теперь относятся к Next.js.
- Корневые `app/` и `src/` теперь являются рабочим Next.js приложением.
- Папка `next/` удалена.
- Удалены старые Vite-файлы:
  - `index.html`;
  - `vite.config.ts`;
  - `tsconfig.app.json`;
  - `tsconfig.node.json`;
  - `eslint.config.js`;
  - `dist`;
  - старые Vite logs.
- Удалены неиспользуемые шаблонные ассеты `src/assets/vite.svg` и `src/assets/react.svg`.
- `README.md`, `AGENTS.md`, `.env.example` и `docs/landing-performance.md` обновлены под Next.js в корне.

## Команды теперь запускаются из корня

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Итог

Корень репозитория теперь является единственным frontend-приложением на Next.js. Старый Vite frontend больше не участвует в разработке, сборке и деплое.
