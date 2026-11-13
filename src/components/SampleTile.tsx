import type { Sample } from '../content/portfolio'
import { img, imgSrcSet } from '../lib/site'
import { Plus } from './Icons'

export const aspectClass: Record<NonNullable<Sample['aspect']>, string> = {
  square: 'aspect-square',
  portrait: 'aspect-[4/5]',
  story: 'aspect-[9/16]',
  landscape: 'aspect-[4/3]',
}

/** A work sample: renders the image if provided, otherwise a labeled placeholder. */
export function SampleTile({
  sample,
  onOpen,
  sizes = '(min-width: 768px) 33vw, 100vw',
}: {
  sample: Sample
  onOpen?: () => void
  sizes?: string
}) {
  const aspect = aspectClass[sample.aspect ?? 'square']

  if (!sample.src) {
    return (
      <figure
        className={`placeholder-tile ${aspect} relative flex flex-col items-center justify-center gap-3 rounded-[1.25rem] border border-dashed border-rose/50 p-5 text-center`}
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-rose/60 text-rose-deep">
          <Plus className="h-4 w-4" />
        </span>
        <figcaption>
          <span className="eyebrow block text-rose-deep">Placeholder</span>
          <span className="mt-1 block font-display text-xl leading-tight text-espresso">
            {sample.label}
          </span>
          {sample.hint && (
            <span className="mt-1 block text-[0.72rem] text-espresso-soft">
              {sample.hint}
            </span>
          )}
        </figcaption>
      </figure>
    )
  }

  return (
    <figure className="group">
      <button
        type="button"
        onClick={onOpen}
        className={`zoom-frame ${aspect} block w-full cursor-zoom-in rounded-[1.25rem] bg-sand`}
        aria-label={`View ${sample.label} larger`}
      >
        <img
          src={img(sample.src, 800)}
          srcSet={imgSrcSet(sample.src, [400, 800, 1200])}
          sizes={sizes}
          alt={sample.alt ?? sample.label}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </button>
      <figcaption className="eyebrow mt-3 text-espresso-soft">{sample.label}</figcaption>
    </figure>
  )
}
