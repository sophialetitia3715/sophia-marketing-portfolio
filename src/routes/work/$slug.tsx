import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { projects, type Project } from '../../content/portfolio'
import { img, imgSrcSet, pageMeta } from '../../lib/site'
import { ArrowRight } from '../../components/Icons'
import { Gallery } from '../../components/Gallery'
import { Reveal } from '../../components/Reveal'

export const Route = createFileRoute('/work/$slug')({
  loader: ({ params }) => {
    const index = projects.findIndex((p) => p.slug === params.slug)
    if (index === -1) throw notFound()
    return { project: projects[index], next: projects[(index + 1) % projects.length] }
  },
  head: ({ loaderData }) =>
    loaderData
      ? pageMeta(
          `${loaderData.project.organization} — ${loaderData.project.role}`,
          loaderData.project.summary,
        )
      : {},
  component: ProjectPage,
})

const themes: Record<
  Project['theme'],
  { hero: string; muted: string; accent: string; numeral: string; band: string }
> = {
  cream: {
    hero: 'bg-cream text-espresso',
    muted: 'text-espresso-soft',
    accent: 'text-rose-deep',
    numeral: 'text-blush',
    band: 'bg-blush-soft/70',
  },
  blush: {
    hero: 'bg-blush-soft text-espresso',
    muted: 'text-espresso-soft',
    accent: 'text-rose-deep',
    numeral: 'text-white',
    band: 'bg-white/70',
  },
  espresso: {
    hero: 'bg-espresso text-cream',
    muted: 'text-cream/65',
    accent: 'text-blush',
    numeral: 'text-cream/15',
    band: 'bg-blush-soft/70',
  },
  rose: {
    hero: 'bg-[#efd9df] text-espresso',
    muted: 'text-espresso-soft',
    accent: 'text-rose-deep',
    numeral: 'text-cream',
    band: 'bg-white/70',
  },
}

function ProjectPage() {
  const { project, next } = Route.useLoaderData()
  const t = themes[project.theme]

  return (
    <article>
      {/* Hero */}
      <header className={`${t.hero} relative mx-3 overflow-hidden rounded-[2.5rem] md:mx-5`}>
        <div className="container-editorial grid gap-12 pb-20 pt-14 md:pb-28 md:pt-20 lg:grid-cols-12">
          <div className="relative lg:col-span-6">
            <Link to="/work" className={`eyebrow link-underline rise pb-1 ${t.muted}`}>
              ← All work
            </Link>
            <p
              aria-hidden
              className={`rise pointer-events-none mt-6 font-display text-[clamp(7rem,16vw,14rem)] italic leading-[0.8] ${t.numeral}`}
            >
              {project.number}
            </p>
            <p className={`eyebrow rise mt-6 ${t.accent}`} style={{ animationDelay: '100ms' }}>
              {project.category}
            </p>
            <h1 className="rise mt-4 text-[clamp(2.8rem,6vw,5.5rem)]" style={{ animationDelay: '180ms' }}>
              {project.organization}
            </h1>
            <p className="rise mt-6 font-display text-2xl italic md:text-3xl" style={{ animationDelay: '260ms' }}>
              {project.tagline}
            </p>
            <dl className="rise mt-10 flex flex-wrap gap-x-12 gap-y-4" style={{ animationDelay: '340ms' }}>
              <div>
                <dt className={`eyebrow ${t.muted}`}>Role</dt>
                <dd className="mt-1 font-display text-xl">{project.role}</dd>
              </div>
              <div>
                <dt className={`eyebrow ${t.muted}`}>Timeline</dt>
                <dd className="mt-1 font-display text-xl">{project.dates}</dd>
              </div>
            </dl>
          </div>
          <div className="rise lg:col-span-6 lg:self-end" style={{ animationDelay: '220ms' }}>
            <div className="zoom-frame aspect-[4/3] rounded-[2rem] rounded-tl-[8rem] bg-sand">
              <img
                src={img(project.cover, 1200)}
                srcSet={imgSrcSet(project.cover, [600, 1200, 1800])}
                sizes="(min-width: 1024px) 50vw, 100vw"
                alt={project.coverAlt}
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
            </div>
            <p className={`eyebrow mt-3 text-right ${t.muted}`}>Mood imagery</p>
          </div>
        </div>
      </header>

      {/* Overview + stats */}
      <section className="container-editorial grid gap-14 py-24 md:py-32 lg:grid-cols-12">
        <Reveal className="lg:col-span-3">
          <p className="eyebrow text-rose-deep">Overview</p>
        </Reveal>
        <div className="lg:col-span-8 lg:col-start-5">
          <Reveal>
            <p className="font-display text-[clamp(1.8rem,3vw,2.75rem)] leading-[1.25]">{project.summary}</p>
          </Reveal>
          {project.stats && (
            <Reveal delay={120} className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] bg-espresso/10 sm:grid-cols-3">
              {project.stats.map((s) => (
                <div key={s.label} className="bg-cream p-8">
                  <p className="font-display text-6xl text-rose-deep">{s.value}</p>
                  <p className="eyebrow mt-3 text-espresso-soft">{s.label}</p>
                </div>
              ))}
            </Reveal>
          )}
        </div>
      </section>

      {/* What I did */}
      <section className={`${t.band} py-24 md:py-32`}>
        <div className="container-editorial grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow mb-6 text-rose-deep">Highlights</p>
            <h2 className="text-[clamp(2.4rem,4.5vw,4rem)]">
              What I <span className="display-italic text-rose-deep">did.</span>
            </h2>
            <ul className="mt-10 flex flex-wrap gap-2">
              {project.capabilities.map((c) => (
                <li key={c} className="rounded-full border border-espresso/15 bg-cream/70 px-4 py-1.5 text-xs">
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <ol className="lg:col-span-7 lg:col-start-6">
            {project.highlights.map((h, i) => (
              <Reveal
                as="li"
                key={h}
                delay={i * 90}
                className="group grid grid-cols-[3.5rem_1fr] gap-4 border-t border-espresso/15 py-8 last:border-b"
              >
                <span className="font-display text-3xl italic text-rose transition-colors duration-500 group-hover:text-rose-deep">
                  0{i + 1}
                </span>
                <p className="text-lg leading-relaxed">{h}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Work samples */}
      <section className="container-editorial py-24 md:py-32">
        <Reveal className="mb-6 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-6 text-rose-deep">Work Samples</p>
            <h2 className="text-[clamp(2.4rem,4.5vw,4rem)]">
              The work, <span className="display-italic text-rose-deep">in detail.</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-16 space-y-24">
          {project.gallery.map((group, gi) => (
            <Reveal key={group.title} className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <span className="font-display text-xl italic text-rose">
                  {project.number}.{gi + 1}
                </span>
                <h3 className="mt-2 text-3xl">{group.title}</h3>
                <p className="mt-3 text-sm text-espresso-soft">{group.description}</p>
              </div>
              <div className="lg:col-span-9">
                <Gallery samples={group.samples} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Next project */}
      <Link
        to="/work/$slug"
        params={{ slug: next.slug }}
        className="group block border-t border-espresso/10 bg-white/50 transition-colors duration-700 hover:bg-blush-soft"
      >
        <div className="container-editorial flex flex-col gap-8 py-20 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow text-espresso-soft">Next project — {next.number}</p>
            <p className="mt-4 text-[clamp(2.4rem,5vw,4.5rem)] font-display leading-none transition-colors duration-500 group-hover:text-rose-deep">
              {next.organization}
            </p>
          </div>
          <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-espresso/20 transition-all duration-700 group-hover:border-espresso group-hover:bg-espresso group-hover:text-cream">
            <ArrowRight className="h-5 w-5" />
          </span>
        </div>
      </Link>
    </article>
  )
}
