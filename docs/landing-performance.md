# Best Practices for Fast React Landing Pages

These notes are project guidance for keeping this tourist-guide landing site quick, stable, and pleasant on mobile connections.

## Images

- Prefer AVIF or WebP for large photos when possible.
- Keep hero images visually strong but compressed; avoid shipping multi-megabyte originals.
- Set explicit `width`/`height` or stable CSS aspect ratios for images to prevent layout shift.
- Use eager loading only for the main above-the-fold image.
- Use `loading="lazy"` for gallery, review, and below-the-fold tour images.
- Use responsive image sizes when adding new large visual sections.

## JavaScript

- Avoid heavy UI libraries for simple controls, cards, modals, and navigation.
- Keep third-party scripts out of the critical path.
- Split rarely visited pages or heavy widgets with dynamic imports if bundle size grows.
- Keep data transforms simple and do them outside render when possible.
- Avoid adding client-side state libraries unless the site genuinely needs shared dynamic state.

## CSS and Layout

- Use CSS Modules and local component styles.
- Keep global CSS limited to reset, typography, layout tokens, and shared utilities.
- Avoid expensive visual effects on large areas, such as heavy blur filters and large animated shadows.
- Reserve space for dynamic content so text, buttons, and images do not jump during load.
- Build mobile-first layouts and check narrow screens before considering the page done.

## Fonts

- Prefer system fonts or a small, limited webfont set.
- If using webfonts, preload only the critical font files and use `font-display: swap`.
- Avoid many weights and styles; each variant adds network cost.

## React Rendering

- Keep components pure and predictable.
- Use stable keys for lists of tours, reviews, and gallery items.
- Avoid unnecessary effects for data that can be derived during render.
- Do not introduce client-only rendering for static content that can be rendered normally.

## Routing and Navigation

- Keep main landing content reachable quickly from the home page.
- Preserve direct URLs for tour, payment, privacy, and policy pages.
- For static hosting, keep fallback behavior in sync with the router and `public/404.html`.

## Measurement Checklist

Before shipping performance-sensitive changes:

- Run `npm run build`.
- Check the production preview with `npm run preview` when visual behavior changed.
- Inspect the first viewport on mobile width.
- Confirm no large below-the-fold image is loaded eagerly.
- Confirm contact paths still work: phone, messenger, email, and form.
