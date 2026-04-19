@AGENTS.md

# ORAGON Website

Agency site for ORAGON — a Filipino automation & AI agency founded by Miguel Isorena (CEO) and Dennis Isorena (Co-Founder).

## Stack
- **Next.js 16.2.2** — App Router, React 19
- **Tailwind CSS v4** — CSS-first config via `app/globals.css`, no `tailwind.config.js`
- **TypeScript 5**
- **Framer Motion** — entrance animations (`useInView`, `motion.div`)
- **Lenis** — smooth scroll provider

## Routes
| Route | File |
|---|---|
| `/` | `app/page.tsx` |
| `/about` | `app/about/page.tsx` |
| `/projects` | `app/projects/page.tsx` |
| `/investors` | `app/investors/page.tsx` |

## Theme & Design Tokens (`app/globals.css`)
Light theme, white base, pastel orange accent.

Key CSS vars:
```
--bg-base: #ffffff          --bg-surface: #f8f7f5
--text-primary: #1a1a1a     --text-secondary: #4a4a4a
--accent: #fb923c           --accent-text: #ea580c
--accent-glow: rgba(251,146,60,0.12)
--border: #e5e0db
```

Aurora keyframes + `--animate-aurora` are defined here (used by `aurora-background.tsx`).
Color aliases (`--blue-500`, `--indigo-300`, etc.) for the aurora component are in `:root`.
`html` background is plain `#ffffff` — no dot grid, no gradients.

## Page Structure (`app/page.tsx`)
Home page renders: `Hero → Stats → Services → Process → CTA → Contact`
About and Projects sections were removed from the home page — they are standalone routes.

## Key Components

### Layout
- `components/layout/Nav.tsx` — Fixed white navbar. Semi-transparent at top, opaque on scroll. Dark text links, pastel orange CTA button ("Work With Us"). Logo uses `variant="light"`.
- `components/providers/SmoothScroll.tsx` — Lenis wrapper
- `components/providers/ThemeProvider.tsx` — Light-only context (no toggle)

### UI
- `components/ui/OragonLogo.tsx` — Inline SVG logo. Shield outline + flame mark in `#fb923c`. Variants: `"light"` (orange mark + dark text), `"dark"` (orange mark + white text), `"white"` (all white).
- `components/ui/aurora-background.tsx` — Aceternity aurora effect. Used in Hero as full-height wrapper. Blue/violet shimmer, top-right masked, `opacity-35`, `invert` filter for light mode.
- `components/ui/ProjectCard.tsx` — Project card with status badge (green = live, orange = in-progress).
- `components/ui/RevealBox.tsx` — Scroll-triggered reveal animation wrapper.
- `components/ui/HeroCanvas.tsx` — Legacy particle canvas. No longer used in Hero (replaced by aurora).

### Sections
- `Hero.tsx` — Uses `<AuroraBackground>` as wrapper. Has h1, orange accent divider, tagline, two CTA buttons.
- `Stats.tsx` — `bg-surface` cream background. Stats: 3 products, 2 founders, 100% remote, PH HQ.
- `Services.tsx` — Transparent background. Service cards from `lib/services.ts`.
- `Process.tsx` — `bg-surface` cream background.
- `CTA.tsx` — Transparent background. No orange glow (removed).
- `Contact.tsx` — `bg-surface` cream background.

## Data (`lib/`)
- `lib/projects.ts` — Smart Stock (live), AutoServe (in-progress). Type includes `status: "live" | "in-progress"`.
- `lib/services.ts` — Service card data.
- `lib/socials.ts` — LinkedIn set to `linkedin.com/company/oragon`.
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge).

## Tailwind v4 Notes
- No `tailwind.config.js` — all config is in `globals.css` via `@theme inline`
- Custom animations go in `@theme inline` as `--animate-*` vars + separate `@keyframes`
- `@import "tailwindcss"` at top of `globals.css` replaces the PostCSS plugin setup

## Content
- **Miguel Isorena** — Founder & CEO. Leads product and engineering.
- **Dennis Isorena** — Co-Founder. Leads business strategy and financial operations.
- Brand tagline: *"Your problems. Our solutions."*
- Support email: `support@oragon.com.ph`
