import { Link, useRouterState } from '@tanstack/react-router'
import { contact, profile } from '../content/portfolio'
import { ContactLinks } from './ContactLinks'
import { Reveal } from './Reveal'

export function SiteFooter() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const showContact = pathname !== '/contact'
  return (
    <footer className="relative overflow-hidden bg-espresso text-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-rose/20 blur-3xl"
      />
      {showContact && (
      <div className="container-editorial relative grid gap-16 py-24 md:py-32 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <p className="eyebrow mb-8 text-blush">Get in touch</p>
          <h2 className="text-[clamp(2.8rem,6vw,5.5rem)]">
            Let&rsquo;s Create <span className="display-italic text-blush">Something</span> Meaningful.
          </h2>
          <p className="mt-8 max-w-md text-cream/70">{contact.supporting}</p>
        </Reveal>
        <Reveal delay={150} className="self-end lg:col-span-5 lg:col-start-8">
          <ContactLinks tone="light" />
        </Reveal>
      </div>
      )}
      <div className="container-editorial relative flex flex-col gap-4 border-t border-cream/10 py-8 text-[0.7rem] uppercase tracking-[0.2em] text-cream/50 sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-6">
          <Link to="/work" className="hover:text-blush">Work</Link>
          <Link to="/about" className="hover:text-blush">About</Link>
          <Link to="/academic" className="hover:text-blush">Academic</Link>
          <Link to="/resume" className="hover:text-blush">Resume</Link>
        </nav>
      </div>
    </footer>
  )
}
