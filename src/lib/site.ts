import { profile } from '../content/portfolio'

export const site = {
  name: profile.name,
  description:
    'Sophia Letitia — marketing student at Bryant University combining consumer psychology, creative strategy and hands-on marketing experience.',
}

export function pageMeta(title: string, description: string = site.description) {
  const fullTitle = `${title} | ${site.name}`
  return {
    meta: [
      { title: fullTitle },
      { name: 'description', content: description },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
    ],
  }
}

/** Serve a public image through the Netlify Image CDN at a given width. */
export function img(src: string, width: number) {
  if (!src.startsWith('/')) return src
  return `/.netlify/images?url=${encodeURIComponent(src)}&w=${width}&fm=webp&q=80`
}

export function imgSrcSet(src: string, widths: number[]) {
  return widths.map((w) => `${img(src, w)} ${w}w`).join(', ')
}
