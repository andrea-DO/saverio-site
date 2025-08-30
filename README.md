# Saverio Filippelli — Portfolio (React + Vite + Tailwind)

A minimalist, accessible portfolio for an audiovisual translator (ES>IT).

## Tech
- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3
- Vitest (unit tests)

## Run locally

```bash
# Install deps
pnpm i || npm i || yarn

# Start dev server
npm run dev

# Type-check
npm run typecheck

# Run tests
npm run test

# Build
npm run build

# Preview build
npm run preview
```

## Notes
- Replace assets in `src/assets/` and SEO URLs in `index.html`.
- Update `src/data/profile.ts` for content changes.
- Contact form opens a `mailto:` by default; wire to your backend if preferred.
