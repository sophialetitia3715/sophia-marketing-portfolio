import { Link } from '@tanstack/react-router'
import type { Project } from '../content/portfolio'
import { img, imgSrcSet } from '../lib/site'
import { ArrowRight } from './Icons'

export function ProjectCard({
  project,
  aspect = 'aspect-[4/5]',
}: {
  project: Project
  aspect?: string
}) {
  return (
    <Link
      to="/work/$slug"
      params={{ slug: project.slug }}
      className="group block"
      aria-label={`${project.organization} — ${project.role}`}
    >
      <div className={`zoom-frame relative ${aspect} rounded-[1.75rem] bg-sand`}>
        <img
          src={img(project.cover, 900)}
          srcSet={imgSrcSet(project.cover, [500, 900, 1400])}
          sizes="(min-width: 1024px) 45vw, 100vw"
          alt={project.coverAlt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/55 via-espresso/0 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-100" />
        <span className="absolute left-6 top-6 font-display text-6xl italic leading-none text-cream/90 md:text-7xl">
          {project.number}
        </span>
        <span className="absolute bottom-6 right-6 flex h-12 w-12 translate-y-2 items-center justify-center rounded-full bg-cream text-espresso opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowRight />
        </span>
        <p className="eyebrow absolute bottom-6 left-6 max-w-[70%] text-cream/90">{project.category}</p>
      </div>
      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <h3 className="text-3xl transition-colors duration-500 group-hover:text-rose-deep md:text-4xl">
            {project.organization}
          </h3>
          <p className="mt-2 text-sm text-espresso-soft">{project.role}</p>
        </div>
        <p className="eyebrow shrink-0 pt-2 text-espresso-soft">{project.dates}</p>
      </div>
    </Link>
  )
}
