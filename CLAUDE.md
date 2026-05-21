@AGENTS.md

# ORAGON Website

Agency site for ORAGON, a Filipino automation & AI agency built solo by Miguel Isorena (Founder).

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
| `/clients` | `app/clients/page.tsx` |
| `/vision` | `app/vision/page.tsx` |
| `/contact` | `app/contact/page.tsx` |

`/projects` was deleted on 2026-05-21 (superseded by the richer `/clients` page). A 301 redirect lives in `next.config.ts` to keep any old social/inbound links routing forward.

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
Home page renders: `Hero → Proof → Services → BookingSection → FounderNote → Contact`
(Rebuilt 2026-05-18 per `MI OS/02-build/plans/2026-05-18-oragon-site-rebuild-spec.md`.)
About, Projects, and Vision pages remain as standalone routes.

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

### Sections (current homepage)
- `Hero.tsx` — Uses `<AuroraBackground>` as wrapper. Headline "I build AI automation that actually ships." Single CTA: "Book a call" scrolling to booking section.
- `Proof.tsx` — Single line: "Already built: SmartStock (live) · Oragon Bookings (live)".
- `Services.tsx` — Transparent background. Three cards from `lib/services.ts`: POS+Sales, Bookings, Custom Workflows.
- `BookingSection.tsx` — Cal.com inline embed for 30-min discovery call. Fallback link: support@oragon.com.ph.
- `FounderNote.tsx` — Founder note from Miguel.
- `Contact.tsx` — `bg-surface` cream background. Demoted to fallback path.

### Sections (dead code — kept in repo but not imported)
- `Stats.tsx`, `Process.tsx`, `CTA.tsx`, `WhoWeServe.tsx`, `About.tsx`, `Testimonials.tsx`, `Skills.tsx`, `Projects.tsx`

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
- **Miguel Isorena** — Founder. Solo operator. Builds everything personally.
- Brand positioning (2026-05-18): "I build AI automation that actually ships."
- Support email: `support@oragon.com.ph`
