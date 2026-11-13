import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { caseStudies } from '../../content/portfolio'
import { img, pageMeta } from '../../lib/site'
import { ArrowRight, Download, Plus } from '../../components/Icons'
import { Gallery } from '../../components/Gallery'
import { Reveal } from '../../components/Reveal'

export const Route = createFileRoute('/academic/$slug')({
  loader: ({ params }) => {
    const index = caseStudies.findIndex((c) => c.slug === params.slug)
    if (index === -1) throw notFound()
    return { study: caseStudies[index], next: caseStudies[(index + 1) % caseStudies.length] }
  },
  head: ({ loaderData }) =>
    loaderData ? pageMeta(`${loaderData.study.title} — Academic Case Study`) : {},
  component: CaseStudyPage,
})

const sectionOrder = [
  ['overview', 'Project Overview'],
  ['challenge', 'Business Challenge'],
  ['research', 'Research & Consumer Insights'],
  ['strategy', 'Strategy & Recommendations'],
  ['creative', 'Creative Execution'],
  ['takeaways', 'Key Takeaways'],
] as const

function CaseStudyPage() {
  const { study, next } = Route.useLoaderData()

  return (
    <article>
      <header className="container-editorial pb-16 pt-14 md:pt-20">
        <Link to="/academic" className="eyebrow link-underline rise pb-1 text-espresso-soft">
          ← All case studies
        </Link>
        <div className="mt-10 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow rise text-rose-deep">
              Case Study {study.number} · {study.focus}
            </p>
            <h1 className="rise mt-6 text-[clamp(3rem,7vw,6.5rem)]" style={{ animationDelay: '120ms' }}>
              {study.title}
            </h1>
            <p className="rise mt-4 font-display text-2xl italic text-espresso-soft" style={{ animationDelay: '200ms' }}>
              {study.course}
            </p>
            {study.placeholder && (
              <p className="rise mt-8 inline-flex rounded-full bg-blush px-5 py-2 text-xs" style={{ animationDelay: '280ms' }}>
                Placeholder case study — content to be added
              </p>
            )}
          </div>
          <div className="rise lg:col-span-5" style={{ animationDelay: '200ms' }}>
            {study.cover ? (
              <div className="zoom-frame aspect-[4/3] rounded-[2rem] bg-sand">
                <img src={img(study.cover, 1000)} alt="" className="h-full w-full object-cover" />
              </div>
            ) : (
              <div className="placeholder-tile flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-[2rem] border border-dashed border-rose/50 text-rose-deep">
                <Plus />
                <span className="eyebrow">Placeholder · Cover image</span>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="container-editorial grid gap-14 pb-24 lg:grid-cols-12">
        <nav aria-label="Case study sections" className="hidden lg:col-span-3 lg:block">
          <ol className="sticky top-28 space-y-3 border-l border-espresso/10 pl-6">
            {sectionOrder.map(([key, label], i) => (
              <li key={key}>
                <a href={`#${key}`} className="eyebrow text-espresso-soft transition-colors hover:text-rose-deep">
                  0{i + 1} {label}
                </a>
              </li>
            ))}
            <li>
              <a href="#deliverables" className="eyebrow text-espresso-soft transition-colors hover:text-rose-deep">
                07 Deliverables
              </a>
            </li>
          </ol>
        </nav>

        <div className="lg:col-span-8 lg:col-start-5">
          {sectionOrder.map(([key, label], i) => (
            <Reveal as="section" key={key} className="border-t border-espresso/10 py-12">
              <div id={key} className="scroll-mt-32 grid gap-6 md:grid-cols-[10rem_1fr]">
                <div>
                  <span className="font-display text-3xl italic text-rose">0{i + 1}</span>
                  <h2 className="mt-2 text-2xl">{label}</h2>
                </div>
                <div>
                  <p className={study.placeholder ? 'italic text-espresso-soft' : 'text-lg leading-relaxed'}>
                    {study.sections[key]}
                  </p>
                  {key === 'creative' && (
                    <div className="mt-8">
                      <Gallery samples={study.gallery} />
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal as="section" className="border-t border-espresso/10 py-12">
            <div id="deliverables" className="scroll-mt-32 grid gap-6 md:grid-cols-[10rem_1fr]">
              <div>
                <span className="font-display text-3xl italic text-rose">07</span>
                <h2 className="mt-2 text-2xl">Deliverables</h2>
              </div>
              <ul className="space-y-3">
                {study.deliverables.map((d) =>
                  d.file ? (
                    <li key={d.label}>
                      <a
                        href={d.file}
                        download
                        className="group flex items-center justify-between rounded-2xl border border-espresso/15 bg-white/60 px-6 py-5 transition-colors hover:border-espresso hover:bg-espresso hover:text-cream"
                      >
                        <span className="font-display text-xl">{d.label}</span>
                        <Download className="h-4 w-4" />
                      </a>
                    </li>
                  ) : (
                    <li
                      key={d.label}
                      className="placeholder-tile flex items-center justify-between rounded-2xl border border-dashed border-rose/50 px-6 py-5"
                    >
                      <span className="font-display text-xl">{d.label}</span>
                      <span className="eyebrow text-rose-deep">Placeholder · Upload file</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      {next.slug !== study.slug && (
        <Link
          to="/academic/$slug"
          params={{ slug: next.slug }}
          className="group block border-t border-espresso/10 bg-white/50 transition-colors duration-700 hover:bg-blush-soft"
        >
          <div className="container-editorial flex items-center justify-between gap-8 py-16">
            <div>
              <p className="eyebrow text-espresso-soft">Next case study — {next.number}</p>
              <p className="mt-3 font-display text-4xl transition-colors group-hover:text-rose-deep md:text-5xl">
                {next.title}
              </p>
            </div>
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-espresso/20 transition-all duration-700 group-hover:bg-espresso group-hover:text-cream">
              <ArrowRight className="h-5 w-5" />
            </span>
          </div>
        </Link>
      )}
    </article>
  )
}
