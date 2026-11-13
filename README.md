# Sophia Letitia — Marketing Portfolio

The personal marketing portfolio and brand site of Sophia Letitia, a Marketing student at Bryant University (B.S. Marketing, minor in Psychology, expected May 2027). It is designed as an editorial, agency-style portfolio for advertising agencies, brands, marketing firms and recruiters.

## Pages

- **Home** (`/`) — name, headline, introduction, editorial image collage, featured work, skills toolkit, academic teaser.
- **About** (`/about`) — professional story, portrait, what I bring, skills toolkit.
- **Work** (`/work`) and **project pages** (`/work/<slug>`) — four featured experiences, each with highlights, capabilities, key figures and work-sample galleries with a lightbox.
- **Academic** (`/academic`) and **case studies** (`/academic/<slug>`) — case-study layout (overview, challenge, research, strategy, creative execution, takeaways, deliverables).
- **Resume** (`/resume`) — styled resume preview with PDF download.
- **Contact** (`/contact`) — email and LinkedIn; every other page closes with the same contact section.

## Updating content

Everything lives in **`src/content/portfolio.ts`** — copy, projects, skills, case studies and contact details.

| To add… | Do this |
| --- | --- |
| Your portrait | Put the photo in `public/img/` and set `profile.portrait` (e.g. `'/img/sophia-portrait.jpg'`). |
| Your resume PDF | Put it in `public/files/` and set `profile.resumePdf`. Until then, the Download button saves the on-page resume as a PDF via the browser. |
| Your LinkedIn link | Set `profile.linkedin.url` to the full profile URL. The link becomes clickable everywhere. |
| Work samples | Put images in `public/work/<project-slug>/` and add `src: '/work/<project-slug>/file.jpg'` to the matching sample. Samples without `src` show as labeled placeholders. |
| A case study | Edit an entry in `caseStudies`: set `title`, `course`, `focus`, the six `sections`, `placeholder: false`, an optional `cover`, and upload deliverables to `public/files/` (`file: '/files/deck.pdf'`). |

The images in `public/img/` are mood and editorial imagery, not work samples. Replace them with your own photography whenever you like.

## Tech

- [TanStack Start](https://tanstack.com/start) (React 19) with file-based routes in `src/routes/`
- Tailwind CSS v4 with the brand palette and typography in `src/styles.css`
- Cormorant Garamond and Montserrat (Google Fonts)
- Netlify hosting, with images served through the Netlify Image CDN

## Run locally

```bash
pnpm install
netlify dev        # or: pnpm dev
```

Tests: `pnpm test`.
