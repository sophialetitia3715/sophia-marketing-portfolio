import { createFileRoute, Link } from '@tanstack/react-router'
import { about, profile } from '../content/portfolio'
import { img, imgSrcSet, pageMeta } from '../lib/site'
import { ArrowRight } from '../components/Icons'
import { Portrait } from '../components/Portrait'
import { Reveal } from '../components/Reveal'
import { SkillsToolkit } from '../components/SkillsToolkit'

export const Route = createFileRoute('/about')({
  component: About,
  head: () =>
    pageMeta(
      'About',
      'Sophia Letitia — Marketing student at Bryant University with a minor in Psychology.',
    ),
})

function About() {
  const [first, ...rest] = about.paragraphs
  return (
    <>
      <section className="container-editorial grid gap-14 pb-24 pt-16 md:pt-24 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="eyebrow rise mb-8 text-rose-deep">About Me</p>
          <h1 className="rise text-[clamp(3rem,7.5vw,7rem)]" style={{ animationDelay: '120ms' }}>
            A marketer who starts with <span className="display-italic text-rose-deep">people.</span>
          </h1>
          <p className="rise mt-10 max-w-md text-lg text-espresso-soft" style={{ animationDelay: '260ms' }}>
            {first}
          </p>

          <dl className="rise mt-12 grid max-w-md grid-cols-2 gap-6 border-t border-espresso/10 pt-8" style={{ animationDelay: '380ms' }}>
            {[
              ['University', profile.school],
              ['Degree', 'B.S. Marketing'],
              ['Minor', 'Psychology'],
              ['Graduation', profile.graduation],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="eyebrow text-espresso-soft">{k}</dt>
                <dd className="mt-1 font-display text-xl">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative lg:col-span-5 lg:col-start-8">
          <Reveal>
            <Portrait className="rounded-tr-[8rem]" />
          </Reveal>
          <div className="absolute -bottom-8 -left-8 hidden w-40 lg:block">
            <Reveal delay={200}>
              <div className="zoom-frame aspect-square rounded-full border-[6px] border-cream bg-sand">
                <img
                  src={img('/img/hero-detail.png', 400)}
                  srcSet={imgSrcSet('/img/hero-detail.png', [200, 400])}
                  sizes="10rem"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-blush-soft/60 py-24 md:py-36">
        <div className="container-editorial grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-rose-deep">My Story</p>
            <p className="mt-6 font-display text-5xl italic leading-none text-rose-deep md:text-6xl">
              From ticket sales to brand strategy.
            </p>
          </Reveal>
          <div className="space-y-8 lg:col-span-7 lg:col-start-6">
            {rest.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className={i === 0 ? 'font-display text-[clamp(1.6rem,2.6vw,2.3rem)] leading-[1.3]' : 'text-lg leading-relaxed text-espresso/85'}>
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-editorial py-24 md:py-32">
        <Reveal>
          <p className="eyebrow mb-12 text-rose-deep">What I Bring</p>
        </Reveal>
        <div className="grid gap-12 md:grid-cols-3">
          {about.pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 120} className="group border-t border-espresso/15 pt-8">
              <span className="font-display text-7xl italic text-blush transition-colors duration-700 group-hover:text-rose">
                0{i + 1}
              </span>
              <h2 className="mt-4 text-4xl">{p.title}</h2>
              <p className="mt-4 text-espresso-soft">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <SkillsToolkit />

      <section className="container-editorial flex flex-col items-start justify-between gap-8 py-24 md:flex-row md:items-end">
        <Reveal>
          <h2 className="text-[clamp(2.4rem,5vw,4.5rem)]">
            See the work behind <span className="display-italic text-rose-deep">the story.</span>
          </h2>
        </Reveal>
        <Reveal delay={120} className="flex flex-wrap gap-4">
          <Link to="/work" className="btn btn-dark">
            Explore My Work <ArrowRight />
          </Link>
          <Link to="/resume" className="btn btn-line">
            View Resume
          </Link>
        </Reveal>
      </section>
    </>
  )
}
