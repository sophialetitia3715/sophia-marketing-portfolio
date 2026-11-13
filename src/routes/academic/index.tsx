import { createFileRoute, Link } from '@tanstack/react-router'
import { caseStudies } from '../../content/portfolio'
import { img, pageMeta } from '../../lib/site'
import { ArrowRight, Plus } from '../../components/Icons'
import { PageIntro } from '../../components/PageIntro'
import { Reveal } from '../../components/Reveal'

export const Route = createFileRoute('/academic/')({
  component: Academic,
  head: () =>
    pageMeta('Academic Projects', 'Academic marketing projects and case studies by Sophia Letitia.'),
})

const caseSections = [
  'Project overview',
  'Business challenge',
  'Research & consumer insights',
  'Strategy & recommendations',
  'Creative execution',
  'Key takeaways',
]

function Academic() {
  return (
    <>
      <PageIntro
        eyebrow="Academic Projects"
        title={
          <>
            Case studies in <span className="display-italic text-rose-deep">strategy & research.</span>
          </>
        }
      >
        Marketing strategy, consumer research, advertising, brand positioning and business analysis
        from my coursework at Bryant University — each presented from the business challenge through
        to the creative work and what I learned.
      </PageIntro>

      <section className="container-editorial pb-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 100}>
              <Link to="/academic/$slug" params={{ slug: cs.slug }} className="group block">
                <div
                  className={`zoom-frame relative aspect-[4/5] rounded-[1.75rem] ${cs.cover ? 'bg-sand' : 'placeholder-tile border border-dashed border-rose/50'}`}
                >
                  {cs.cover ? (
                    <img src={img(cs.cover, 800)} alt="" loading="lazy" className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-3 text-rose-deep">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-rose/60 transition-transform duration-700 group-hover:rotate-90">
                        <Plus />
                      </span>
                      <span className="eyebrow">Cover image</span>
                    </div>
                  )}
                  <span className="absolute left-6 top-5 font-display text-6xl italic text-espresso/20">
                    {cs.number}
                  </span>
                  {cs.placeholder && (
                    <span className="eyebrow absolute right-5 top-6 rounded-full bg-cream px-3 py-1 text-rose-deep">
                      Placeholder
                    </span>
                  )}
                </div>
                <p className="eyebrow mt-6 text-rose-deep">{cs.focus}</p>
                <h2 className="mt-2 text-3xl transition-colors duration-500 group-hover:text-rose-deep">{cs.title}</h2>
                <p className="mt-1 text-sm text-espresso-soft">{cs.course}</p>
                <span className="link-underline eyebrow mt-5 inline-flex items-center gap-2 pb-1">
                  Open case study <ArrowRight />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-editorial pb-28">
        <Reveal className="rounded-[2rem] bg-white/70 p-10 md:p-14">
          <p className="eyebrow text-rose-deep">The case-study framework</p>
          <ol className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseSections.map((s, i) => (
              <li key={s} className="flex items-baseline gap-4 border-t border-espresso/10 pt-5">
                <span className="font-display text-2xl italic text-rose">0{i + 1}</span>
                <span className="font-display text-2xl">{s}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>
    </>
  )
}
