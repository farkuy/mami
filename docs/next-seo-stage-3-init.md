# Этап 3. Инициализация Next.js

Дата выполнения: 2026-05-16.

## Что создано

Next.js приложение создано в отдельной папке:

```text
next/
```

Добавлены файлы:

- `next/package.json`
- `next/package-lock.json`
- `next/next.config.ts`
- `next/tsconfig.json`
- `next/eslint.config.mjs`
- `next/next-env.d.ts`
- `next/app/layout.tsx`
- `next/app/page.tsx`
- `next/app/globals.css`

Корневой Vite frontend не удалялся и не переносился.

## Текущая версия

После `npm install` установлена версия:

```text
Next.js 16.2.6
```

В `next.config.ts` явно задан `turbopack.root: process.cwd()`, чтобы Next не выбирал неверный workspace root из-за нескольких lockfile в родительских папках.

## Скрипты

В `next/package.json` доступны:

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Проверки

В папке `next/`:

- `npm run lint` - успешно.
- `npm run build` - успешно.
- Dev server на `http://127.0.0.1:3100` ответил `200`, страница содержит текст `Нижний Новгород: Открой Свой`.

В корне проекта:

- `npm run build` - успешно, текущий Vite frontend не сломан.

## Замечания

- `npm install` сообщил 2 moderate vulnerabilities в dependency tree. Автоматический `npm audit fix --force` не запускался, чтобы не вносить breaking-обновления на этапе инициализации.
- Первый запуск lint/dev server внутри песочницы падал с `EPERM: lstat 'C:\Users\Onton'`; проверки были повторены с разрешением вне песочницы.

## Статус

Этап 3 завершен: базовое Next.js приложение работает, TypeScript/build проходят, старый Vite проект остается рабочим fallback.
