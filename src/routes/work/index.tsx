import { createFileRoute, Link } from '@tanstack/react-router'
import { projects } from '../../content/portfolio'
import { img, imgSrcSet, pageMeta } from '../../lib/site'
import { ArrowRight } from '../../components/Icons'
import { PageIntro } from '../../components/PageIntro'
import { Reveal } from '../../components/Reveal'

export const Route = createFileRoute('/work/')({
  component: Work,
  head: () =>
    pageMeta('Work', 'Featured marketing experience and portfolio projects by Sophia Letitia.'),
})

function Work() {
  return (
    <>
      <PageIntro
        eyebrow="Featured Experience & Portfolio"
        title={
          <>
            Four chapters, <span className="display-italic text-rose-deep">one point of view.</span>
          </>
        }
      >
        Nonprofit marketing, social media for a working farm, alumni relations and student
        leadership — each project shows a different side of how I connect brands with people.
      </PageIntro>

      <section className="container-editorial space-y-28 pb-28 md:space-y-40 md:pb-40">
        {projects.map((project, i) => {
          const flip = i % 2 === 1
          return (
            <article key={project.slug} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
              <Reveal className={`lg:col-span-7 ${flip ? 'lg:order-2 lg:col-start-6' : ''}`}>
                <Link
                  to="/work/$slug"
                  params={{ slug: project.slug }}
                  className={`zoom-frame group block aspect-[4/3] bg-sand ${
                    flip ? 'rounded-[2rem] rounded-tl-[8rem]' : 'rounded-[2rem] rounded-br-[8rem]'
                  }`}
                  aria-label={`Open ${project.organization}`}
                >
                  <img
                    src={img(project.cover, 1100)}
                    srcSet={imgSrcSet(project.cover, [600, 1100, 1600])}
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    alt={project.coverAlt}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    className="h-full w-full object-cover"
                  />
                </Link>
              </Reveal>
              <Reveal delay={120} className={`lg:col-span-5 ${flip ? 'lg:order-1 lg:col-start-1' : ''}`}>
                <p className="font-display text-8xl italic leading-none text-blush md:text-9xl">
                  {project.number}
                </p>
                <p className="eyebrow mt-6 text-rose-deep">{project.category}</p>
                <h2 className="mt-4 text-[clamp(2.4rem,4vw,3.6rem)]">{project.organization}</h2>
                <p className="mt-3 text-espresso-soft">
                  {project.role} · {project.dates}
                </p>
                <p className="mt-6 font-display text-2xl italic leading-snug">{project.tagline}</p>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {project.capabilities.slice(0, 4).map((c) => (
                    <li key={c} className="rounded-full border border-espresso/15 px-4 py-1.5 text-xs">
                      {c}
                    </li>
                  ))}
                </ul>
                <Link to="/work/$slug" params={{ slug: project.slug }} className="btn btn-dark mt-10">
                  View Project <ArrowRight />
                </Link>
              </Reveal>
            </article>
          )
        })}
      </section>
    </>
  )
}
