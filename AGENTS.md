# AGENTS.md

## Project Context

This repository contains a React/Vite website for a private tourist guide in Nizhny Novgorod. The site presents excursions, guide information, reviews, payment/legal pages, and contact options for booking or asking questions.

Visitors should be able to contact the guide by phone, messenger, and email. Keep email contact support visible and functional when changing contact blocks, forms, headers, footers, or booking flows. Shared contact data belongs in `src/config/contacts.ts` instead of being hardcoded in components.

## Product Goals

- Help visitors quickly understand who the guide is, what excursions are available, and how to book.
- Keep the site warm, trustworthy, and easy to scan on mobile.
- Prioritize fast first load and stable rendering, especially for image-heavy tour pages.
- Preserve clear booking paths: phone, messenger, email, and the contact/order form.

## Tech Stack

- Vite
- React 19
- TypeScript
- React Router
- CSS Modules
- Static assets in `src/assets` and `public`

## Common Commands

```bash
npm install
npm run dev
npm run build
npm run lint
npm run preview
```

## Code Guidelines

- Follow the existing component structure under `src/components`, `src/pages`, `src/config`, and `src/data`.
- Prefer small, focused React components with typed props.
- Use CSS Modules for component styles.
- Avoid large UI libraries unless there is a clear product need.
- Keep reusable content and data in config/data files rather than duplicating it in JSX.
- Use semantic HTML landmarks and accessible labels for interactive elements.
- Keep Russian user-facing copy natural, concise, and consistent with a personal guide service.

## Contact Guidelines

- Keep `src/config/contacts.ts` as the source of truth for phone, email, and messenger links.
- Use `tel:` for phone links and `mailto:` for email links.
- External messenger links should use `target="_blank"` and `rel="noopener noreferrer"`.
- If a form is changed, make sure users still have a non-form fallback: phone, messenger, or email.

## Performance Guidelines

Landing-page performance matters for this project. Before adding heavy dependencies, animations, media, or routing changes, check the practices in:

- `docs/landing-performance.md`

At a minimum, keep above-the-fold assets small, lazy-load non-critical images, avoid layout shifts, and verify production builds with `npm run build`.
