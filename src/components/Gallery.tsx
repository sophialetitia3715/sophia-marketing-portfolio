import { useCallback, useEffect, useState } from 'react'
import type { Sample } from '../content/portfolio'
import { img } from '../lib/site'
import { Close } from './Icons'
import { SampleTile } from './SampleTile'

/** Masonry-style gallery of work samples with a keyboard-friendly lightbox. */
export function Gallery({ samples }: { samples: Sample[] }) {
  const viewable = samples.filter((s) => s.src)
  const [open, setOpen] = useState<number | null>(null)

  const close = useCallback(() => setOpen(null), [])
  const step = useCallback(
    (dir: number) =>
      setOpen((i) => (i === null ? i : (i + dir + viewable.length) % viewable.length)),
    [viewable.length],
  )

  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, close, step])

  const cols =
    samples.length === 1
      ? 'columns-1 max-w-3xl'
      : samples.length === 2
        ? 'columns-1 sm:columns-2'
        : 'columns-1 sm:columns-2 lg:columns-3'

  const current = open !== null ? viewable[open] : null

  return (
    <>
      <div className={`${cols} gap-5 [&>*]:mb-5 [&>*]:break-inside-avoid`}>
        {samples.map((sample, i) => (
          <SampleTile
            key={`${sample.label}-${i}`}
            sample={sample}
            onOpen={() => setOpen(viewable.indexOf(sample))}
          />
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.label}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-espresso/90 p-6 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-6 top-6 rounded-full p-2 text-cream hover:bg-cream/10"
            aria-label="Close"
          >
            <Close />
          </button>
          <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={img(current.src!, 1800)}
              alt={current.alt ?? current.label}
              className="max-h-[80vh] w-auto rounded-2xl object-contain"
            />
            <figcaption className="eyebrow mt-4 flex items-center justify-between gap-6 text-cream/80">
              <span>{current.label}</span>
              {viewable.length > 1 && (
                <span className="flex gap-4">
                  <button type="button" onClick={() => step(-1)} className="hover:text-blush">
                    Prev
                  </button>
                  <button type="button" onClick={() => step(1)} className="hover:text-blush">
                    Next
                  </button>
                </span>
              )}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  )
}
