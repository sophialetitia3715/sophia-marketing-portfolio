import { createFileRoute, Link } from '@tanstack/react-router'
import { about, home, profile, projects } from '../content/portfolio'
import { img, imgSrcSet, pageMeta } from '../lib/site'
import { ArrowRight } from '../components/Icons'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { SkillsToolkit } from '../components/SkillsToolkit'

export const Route = createFileRoute('/')({
  component: Home,
  head: () => pageMeta('Marketing Portfolio'),
})

const disciplines = [
  'Consumer Psychology',
  'Creative Strategy',
  'Social Media',
  'Audience Research',
  'Content Creation',
  'Brand Storytelling',
  'Event Promotion',
]

function Home() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────── */}
      <section className="container-editorial relative pb-20 pt-8 md:pt-12">
        <div className="flex items-end justify-between gap-6 border-b border-espresso/10 pb-6">
          <p className="eyebrow rise text-espresso-soft">
            {profile.school} · {profile.degree.replace('Bachelor of Science', 'B.S.')}
          </p>
          <p className="eyebrow rise hidden text-espresso-soft sm:block">{profile.graduation}</p>
        </div>

        <h1 className="sr-only">{profile.name} — Marketing Portfolio</h1>
        <p
          aria-hidden
          className="rise mt-8 font-display text-[clamp(4.2rem,15.5vw,15rem)] leading-[0.85] tracking-[-0.03em]"
          style={{ animationDelay: '80ms' }}
        >
          Sophia <span className="italic text-rose-deep">Letitia</span>
        </p>

        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5 lg:pt-10">
            <h2 className="text-[clamp(2.1rem,3.6vw,3.25rem)]">
              {home.headline.map((line, i) => (
                <span
                  key={line}
                  className={`rise block ${i === 1 ? 'display-italic text-rose-deep' : ''}`}
                  style={{ animationDelay: `${250 + i * 140}ms` }}
                >
                  {line}
                </span>
              ))}
            </h2>
            <p className="rise mt-8 max-w-md text-espresso-soft" style={{ animationDelay: '700ms' }}>
              {home.supporting}
            </p>
            <div className="rise mt-10 flex flex-wrap gap-4" style={{ animationDelay: '820ms' }}>
              <Link to="/work" className="btn btn-dark">
                Explore My Work <ArrowRight />
              </Link>
              <Link to="/about" className="btn btn-line">
                Get to Know Me
              </Link>
            </div>
          </div>

          {/* Editorial collage */}
          <div className="relative lg:col-span-7">
            <div className="rise relative ml-auto w-[86%] lg:w-[78%]" style={{ animationDelay: '300ms' }}>
              <div className="zoom-frame aspect-[4/5] rounded-[2.25rem] rounded-tl-[9rem] bg-sand">
                <img
                  src={img('/img/hero.png', 1100)}
                  srcSet={imgSrcSet('/img/hero.png', [600, 1100, 1600])}
                  sizes="(min-width: 1024px) 45vw, 86vw"
                  alt="Editorial flat lay of blush roses, a sketchbook of brand ideas, color swatches and coffee"
                  fetchPriority="high"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div
              className="rise absolute -bottom-10 left-0 w-[40%] max-w-[17rem] lg:-left-6"
              style={{ animationDelay: '550ms' }}
            >
              <div className="zoom-frame aspect-[3/4] rounded-[1.5rem] border-[6px] border-cream bg-sand shadow-[0_30px_60px_-30px_rgb(62_39_35/0.45)]">
                <img
                  src={img('/img/hero-detail.png', 500)}
                  srcSet={imgSrcSet('/img/hero-detail.png', [300, 500, 800])}
                  sizes="17rem"
                  alt="Blush silk ribbon over stacked magazines"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div
              className="rise absolute right-0 top-10 hidden w-44 rounded-full bg-blush p-6 text-center shadow-[0_20px_50px_-25px_rgb(62_39_35/0.4)] sm:block lg:-right-4"
              style={{ animationDelay: '700ms', aspectRatio: '1' }}
            >
              <div className="flex h-full flex-col items-center justify-center">
                <span className="font-display text-lg italic leading-tight">Psychology</span>
                <span className="eyebrow my-1 text-rose-deep">×</span>
                <span className="font-display text-lg italic leading-tight">Marketing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Marquee ────────────────────────────────────── */}
      <div className="mt-12 overflow-hidden border-y border-espresso/10 py-6" aria-hidden>
        <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
          {[...disciplines, ...disciplines].map((d, i) => (
            <span key={i} className="flex items-center gap-12 font-display text-3xl italic text-espresso/70 md:text-4xl">
              {d}
              <span className="h-2 w-2 rounded-full bg-rose" />
            </span>
          ))}
        </div>
      </div>

      {/* ── Introduction ──────────────────────────────── */}
      <section className="container-editorial grid gap-14 py-24 md:py-36 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <div className="zoom-frame aspect-[4/5] rounded-[2rem] rounded-br-[7rem] bg-sand">
            <img
              src={img('/img/about.png', 800)}
              srcSet={imgSrcSet('/img/about.png', [500, 800, 1200])}
              sizes="(min-width: 1024px) 30vw, 100vw"
              alt="A creative mood board with color swatches and flower photographs"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
        <div className="lg:col-span-7 lg:col-start-6 lg:pt-16">
          <Reveal>
            <p className="eyebrow mb-8 text-rose-deep">Introduction</p>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-display text-[clamp(1.9rem,3.2vw,2.9rem)] leading-[1.2]">
              <span className="text-rose-deep">“</span>
              {home.intro}
              <span className="text-rose-deep">”</span>
            </p>
          </Reveal>
          <Reveal delay={200} className="mt-14 grid gap-8 border-t border-espresso/10 pt-10 sm:grid-cols-3">
            {about.pillars.map((p, i) => (
              <div key={p.title}>
                <span className="font-display text-lg italic text-rose-deep">0{i + 1}</span>
                <h3 className="mt-2 text-2xl">{p.title}</h3>
                <p className="mt-2 text-sm text-espresso-soft">{p.body}</p>
              </div>
            ))}
          </Reveal>
          <Reveal delay={260} className="mt-12">
            <Link to="/about" className="btn btn-line">
              Get to Know Me <ArrowRight />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Featured experience ───────────────────────── */}
      <section aria-labelledby="work-heading" className="container-editorial pb-24 md:pb-36">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <p className="eyebrow mb-6 text-rose-deep">Featured Experience & Portfolio</p>
            <h2 id="work-heading" className="text-[clamp(2.8rem,6vw,5.5rem)]">
              Selected <span className="display-italic text-rose-deep">work.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <Link to="/work" className="link-underline eyebrow pb-1">
              View all projects
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-x-10 gap-y-20 md:grid-cols-12">
          {projects.map((project, i) => {
            const layout = [
              'md:col-span-7',
              'md:col-span-5 md:mt-40',
              'md:col-span-5 md:col-start-2',
              'md:col-span-6 md:mt-24',
            ][i % 4]
            const aspect = i % 2 === 0 ? 'aspect-[5/4]' : 'aspect-[4/5]'
            return (
              <Reveal key={project.slug} delay={(i % 2) * 120} className={layout}>
                <ProjectCard project={project} aspect={aspect} />
              </Reveal>
            )
          })}
        </div>
      </section>

      <SkillsToolkit />

      {/* ── Academic teaser ───────────────────────────── */}
      <section className="container-editorial grid items-center gap-14 py-24 md:py-36 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <p className="eyebrow mb-6 text-rose-deep">Academic Projects</p>
          <h2 className="text-[clamp(2.6rem,5vw,4.5rem)]">
            Case studies in <span className="display-italic text-rose-deep">strategy & research.</span>
          </h2>
          <p className="mt-8 max-w-lg text-espresso-soft">
            Coursework in marketing strategy, consumer research, advertising, brand positioning and
            business analysis — presented as full case studies, from challenge to takeaways.
          </p>
          <Link to="/academic" className="btn btn-dark mt-10">
            View Case Studies <ArrowRight />
          </Link>
        </Reveal>
        <Reveal delay={150} className="lg:col-span-5 lg:col-start-8">
          <div className="zoom-frame aspect-[4/3] rounded-[2rem] rounded-tr-[7rem] bg-sand">
            <img
              src={img('/img/academic.png', 900)}
              srcSet={imgSrcSet('/img/academic.png', [500, 900, 1300])}
              sizes="(min-width: 1024px) 40vw, 100vw"
              alt="A research desk with printed charts, notes and books"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </section>
    </>
  )
}
