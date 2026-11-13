import { createFileRoute, Link } from '@tanstack/react-router'
import { profile, projects, skills } from '../content/portfolio'
import { pageMeta } from '../lib/site'
import { Download } from '../components/Icons'
import { Reveal } from '../components/Reveal'

export const Route = createFileRoute('/resume')({
  component: Resume,
  head: () => pageMeta('Resume', 'Resume of Sophia Letitia — Marketing, Bryant University.'),
})

function Resume() {
  const certifications = skills.find((s) => s.category === 'Certifications')?.items ?? []
  const skillGroups = skills.filter((s) => s.category !== 'Certifications')

  return (
    <>
      <section className="no-print container-editorial flex flex-col gap-10 pb-14 pt-16 md:flex-row md:items-end md:justify-between md:pt-24">
        <div>
          <p className="eyebrow rise mb-8 text-rose-deep">Resume</p>
          <h1 className="rise text-[clamp(3rem,8vw,7.5rem)]" style={{ animationDelay: '120ms' }}>
            The <span className="display-italic text-rose-deep">essentials.</span>
          </h1>
        </div>
        <div className="rise flex flex-wrap gap-4" style={{ animationDelay: '240ms' }}>
          {profile.resumePdf ? (
            <a href={profile.resumePdf} download className="btn btn-dark">
              Download PDF <Download />
            </a>
          ) : (
            <button type="button" onClick={() => window.print()} className="btn btn-dark">
              Download PDF <Download />
            </button>
          )}
          <Link to="/contact" className="btn btn-line">
            Contact Me
          </Link>
        </div>
      </section>

      <section className="container-editorial pb-28">
        <Reveal>
          <div className="print-sheet mx-auto max-w-5xl rounded-[2rem] bg-white p-8 shadow-[0_40px_90px_-50px_rgb(62_39_35/0.4)] sm:p-12 md:p-16">
            <header className="flex flex-col gap-6 border-b border-espresso/15 pb-8 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="font-display text-5xl md:text-6xl">
                  Sophia <span className="italic text-rose-deep">Letitia</span>
                </h2>
                <p className="eyebrow mt-3 text-espresso-soft">Marketing · Consumer Psychology · Creative Strategy</p>
              </div>
              <div className="space-y-1 text-sm md:text-right">
                <a href={`mailto:${profile.email}`} className="block hover:text-rose-deep">
                  {profile.email}
                </a>
                {profile.linkedin.url ? (
                  <a href={profile.linkedin.url} target="_blank" rel="noopener noreferrer" className="block hover:text-rose-deep">
                    LinkedIn: {profile.linkedin.handle}
                  </a>
                ) : (
                  <p>LinkedIn: {profile.linkedin.handle}</p>
                )}
              </div>
            </header>

            <div className="grid gap-12 pt-10 md:grid-cols-[1fr_15rem]">
              <div className="space-y-10">
                <ResumeBlock title="Education">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-display text-2xl">{profile.school}</h4>
                    <p className="eyebrow text-espresso-soft">{profile.graduation}</p>
                  </div>
                  <p className="mt-1 text-sm">
                    {profile.degree} · {profile.minor}
                  </p>
                </ResumeBlock>

                <ResumeBlock title="Experience">
                  <div className="space-y-8">
                    {projects.map((p) => (
                      <div key={p.slug} className="break-inside-avoid">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <h4 className="font-display text-2xl">{p.organization}</h4>
                          <p className="eyebrow text-espresso-soft">{p.dates}</p>
                        </div>
                        <p className="text-sm italic text-rose-deep">{p.role}</p>
                        <ul className="mt-3 space-y-1.5 text-sm leading-relaxed">
                          {p.highlights.map((h) => (
                            <li key={h} className="flex gap-3">
                              <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-rose" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </ResumeBlock>
              </div>

              <aside className="space-y-10">
                {skillGroups.map((g) => (
                  <ResumeBlock key={g.category} title={g.category}>
                    <ul className="space-y-1 text-sm">
                      {g.items.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </ResumeBlock>
                ))}
                <ResumeBlock title="Certifications">
                  <ul className="space-y-2 text-sm">
                    {certifications.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </ResumeBlock>
              </aside>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}

function ResumeBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="eyebrow mb-4 border-b border-blush pb-2 text-rose-deep">{title}</h3>
      {children}
    </section>
  )
}
