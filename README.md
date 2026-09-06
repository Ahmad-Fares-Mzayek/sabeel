# Sabeel

Marketing website for **Sabeel**, a venture studio operating in Syria.

Sabeel finds young Syrian technical talent, backs them with a monthly stipend so they can build full time, and turns the strongest of them into founders of real companies. It supplies the team, the method, the tooling and the operational support, co-owns what gets built, and brings in outside investors deal by deal.

The name comes from the Arabic **سبيل** — the public drinking fountains built into the streets of Damascus and endowed by wealthy citizens as a permanent free resource for anyone passing. The word also means path, way, or means to an end. Both meanings are intentional.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS with a custom design system (Spectral / Inter / IBM Plex Sans Arabic; palette of paper, deep green, and brass)
- No backend — deployable as a static build

## Getting started

```bash
npm install
npm run dev       # dev server at http://localhost:5173
npm run build     # production build to ./dist
npm run preview   # preview the production build
```

## Project layout

```
src/
├── App.tsx                    # Section composition
├── main.tsx                   # Router + entry
├── index.css                  # Design tokens, keyframes, primitives
├── components/                # Section + shared components
│   ├── Hero.tsx
│   ├── Name.tsx
│   ├── Thesis.tsx             # Horizontal snap-slider with bespoke viz
│   ├── Model.tsx              # Animated Academy → Studio → Capital diagram
│   ├── WhatWeAre.tsx          # Interactive company-lifecycle timeline
│   ├── Lines.tsx              # Tabbed section
│   ├── Positioning.tsx        # Cursor-spotlight tile grid
│   ├── Roadmap.tsx
│   ├── Principles.tsx         # Image-backed dark section
│   ├── Join.tsx
│   ├── Footer.tsx
│   ├── Header.tsx             # Active-section indicator
│   ├── ScrollProgress.tsx     # Top brass progress bar
│   ├── StockPhoto.tsx         # Shared image treatment
│   └── CountUp.tsx            # Scroll-triggered number counter
├── content/
│   ├── index.ts               # All copy in one place
│   └── images.ts              # Photography URLs + attribution
└── hooks/
    └── useReveal.ts           # Fade + rise on scroll into view
```

All copy lives in `src/content/index.ts` so it can be edited without touching component code.

## Photography

Three supporting photographs from Unsplash — Damascene arcade (Laila H), craftsman at work (Will Suddreth), team at a shared table (Annie Spratt). Attribution lives in `src/content/images.ts`.
