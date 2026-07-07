# afk.codes

Personal portfolio of **Ashish Kumar** ([@afkcodes](https://github.com/afkcodes)) — Senior Frontend Engineer, Design Systems.

Dark, editorial, terminal-inspired design leaning into the **AFK** brand: massive Syne display type, blaze-orange accents, and two signature touches —

- **Living ASCII field** — a hand-rolled canvas backdrop of flowing monospace glyphs (fbm value noise, glyph-atlas rendering). The field stirs around your cursor and ripples on click.
- **AFK screensaver** — go idle for 40 seconds and the site itself goes AFK: a DVD-style bouncing `AFK — away_from_keyboard` mark with a live clock, until any input wakes it.

## Stack

- [Astro 5](https://astro.build) — fully static output, zero framework runtime
- [Tailwind CSS 4](https://tailwindcss.com) — design tokens via `@theme`
- [GSAP + ScrollTrigger](https://gsap.com) — hero character reveal, scroll reveals, parallax, counters, magnetic buttons, custom cursor
- [Lenis](https://lenis.darkroom.engineering) — smooth scrolling
- Self-hosted fonts via Fontsource (Syne, Space Grotesk, JetBrains Mono)

All motion respects `prefers-reduced-motion` — reduced-motion visitors get an instant, fully visible page.

## SEO

- Static HTML, canonical URLs, full Open Graph + Twitter meta
- JSON-LD structured data (`Person` + `WebSite`)
- Sitemap via `@astrojs/sitemap`, `robots.txt`

## Develop

```bash
npm install
npm run dev      # dev server on :3000
npm run build    # static build to dist/
npm run preview  # preview the build
```

## Deploy

Deployed on Cloudflare (static assets from `dist/`, see `wrangler.toml`):

```bash
npm run build && npx wrangler deploy
```

## Editing content

All copy, experience, projects, skills and stats live in one file: `src/data/portfolio.ts`.
