import { profile } from '../content/portfolio'
import { img, imgSrcSet } from '../lib/site'

/** Professional portrait. Shows a labeled frame until `profile.portrait` is set. */
export function Portrait({ className = '' }: { className?: string }) {
  if (profile.portrait) {
    return (
      <div className={`zoom-frame aspect-[4/5] rounded-[2rem] bg-sand ${className}`}>
        <img
          src={img(profile.portrait, 900)}
          srcSet={imgSrcSet(profile.portrait, [500, 900, 1300])}
          sizes="(min-width: 1024px) 40vw, 100vw"
          alt={`Portrait of ${profile.name}`}
          className="h-full w-full object-cover"
        />
      </div>
    )
  }
  return (
    <div
      className={`placeholder-tile relative flex aspect-[4/5] flex-col items-center justify-center rounded-[2rem] border border-dashed border-rose/50 text-center ${className}`}
    >
      <svg viewBox="0 0 100 120" className="h-28 w-28 text-rose/70" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden>
        <circle cx="50" cy="42" r="20" />
        <path d="M14 116c4-24 18-38 36-38s32 14 36 38" />
      </svg>
      <p className="eyebrow mt-6 text-rose-deep">Placeholder</p>
      <p className="mt-1 font-display text-2xl">Professional portrait</p>
      <p className="mt-1 text-xs text-espresso-soft">Replace with your photography</p>
    </div>
  )
}
