import { skills } from '../content/portfolio'
import { SkillIcon } from './Icons'
import { Reveal } from './Reveal'

export function SkillsToolkit() {
  return (
    <section aria-labelledby="toolkit-heading" className="bg-white/60 py-24 md:py-32">
      <div className="container-editorial">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-6 text-rose-deep">Marketing Skills & Creative Toolkit</p>
            <h2 id="toolkit-heading" className="text-[clamp(2.6rem,5vw,4.5rem)]">
              Where insight meets <span className="display-italic text-rose-deep">execution.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="self-end lg:col-span-5 lg:col-start-8">
            <p className="text-espresso-soft">
              A blend of research-driven strategy and hands-on creative production — the skills behind
              every project on this site.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-espresso/10 bg-espresso/10 sm:grid-cols-2 xl:grid-cols-4">
          {skills.map((group, i) => (
            <Reveal
              key={group.category}
              delay={i * 100}
              className="group flex flex-col bg-cream p-8 transition-colors duration-700 hover:bg-blush-soft md:p-10"
            >
              <div className="flex items-center justify-between">
                <SkillIcon
                  name={group.icon}
                  className="h-11 w-11 text-rose-deep transition-transform duration-700 group-hover:rotate-12"
                />
                <span className="font-display text-xl italic text-espresso/40">0{i + 1}</span>
              </div>
              <h3 className="mt-10 text-3xl">{group.category}</h3>
              <ul className="mt-6 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span aria-hidden className="mt-[0.7em] h-px w-4 shrink-0 bg-rose" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
