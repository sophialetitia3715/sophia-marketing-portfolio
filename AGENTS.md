# AGENTS.md — Sophia Letitia Portfolio

A personal marketing portfolio for Sophia Letitia (Marketing, Bryant University, minor in Psychology, expected May 2027). The site is static content with no backend, database, auth or forms. It runs on TanStack Start + React 19 + Tailwind v4 and deploys to Netlify.

## Content source of truth

- **`src/content/portfolio.ts`** holds ALL copy and data: `profile`, `home`, `about`, `projects`, `skills`, `caseStudies`, `contact`. Pages render from it, so don't hard-code content in routes.
- **Facts must come from the owner's resume and brief.** Never invent experience, dates, metrics, results or academic projects. Missing visuals and case studies use explicit placeholders: a `Sample` without `src`, or a `CaseStudy` with `placeholder: true`. Keep them labeled "Placeholder".
- `profile.portrait`, `profile.resumePdf` and `profile.linkedin.url` start empty. The UI falls back to a placeholder frame, a print-to-PDF button and non-clickable handle text. Set them to activate the real versions.

## Structure

- `src/routes/`: `index` (home), `about`, `work/index`, `work/$slug` (project detail, loader + `notFound`), `academic/index`, `academic/$slug`, `resume`, `contact`, `__root` (fonts, header, footer).
- `src/components/`: `SiteHeader` (sticky, mobile overlay menu), `SiteFooter` (closing contact section, hidden on `/contact`), `ContactLinks`, `Reveal` (IntersectionObserver scroll reveal), `Gallery` + `SampleTile` (masonry + lightbox, placeholder tiles), `ProjectCard`, `SkillsToolkit`, `Portrait`, `PageIntro`, `Icons` (inline SVG, no icon library).
- `src/lib/site.ts`: `pageMeta()` and `img()`/`imgSrcSet()` helpers that build Netlify Image CDN URLs (`/.netlify/images?url=…&w=…&fm=webp`). Use them for every raster image.
- `public/img/`: AI-generated editorial mood imagery (PNG). `public/work/` and `public/files/` are for the owner's samples and downloads.

## Design conventions

- Palette tokens live in `src/styles.css` `@theme`: `cream #FBF8F5`, `blush #F4C9D6`, `blush-soft`, `rose #DD90A5`, `rose-deep` (accessible text accent), `espresso #3E2723`, `espresso-soft`, `sand`. Keep the pink subtle: use it for accents and soft bands, never for large saturated fills.
- Type: `font-display` (Cormorant Garamond) for headlines, `font-sans` (Montserrat) for body text. Custom utilities: `eyebrow`, `display-italic`, `container-editorial`. Buttons are `btn` plus `btn-dark`, `btn-line` or `btn-light`.
- Motion: `.rise` (on-load entrance), `<Reveal>` (on scroll) and `.zoom-frame` (image hover). All three respect `prefers-reduced-motion`. A noscript style keeps reveals visible without JS.
- Each project has a `theme` (`cream | blush | espresso | rose`) that styles its detail-page hero, so the four pages look distinct.
- The resume page prints cleanly: header, footer and `.no-print` elements are hidden by `@media print`.

## Notes

- Don't use browser APIs during SSR render. Keep them in effects and handlers.
- TypeScript stays on 6.x because the Netlify adapter tooling needs it.
