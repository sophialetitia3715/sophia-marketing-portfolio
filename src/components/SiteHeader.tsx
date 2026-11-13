import { Link, useRouterState } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { profile } from '../content/portfolio'

const links = [
  { to: '/about', label: 'About' },
  { to: '/work', label: 'Work' },
  { to: '/academic', label: 'Academic' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
] as const

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-700 ${
        scrolled || open
          ? 'bg-cream/90 backdrop-blur-md shadow-[0_1px_0_rgb(62_39_35/0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-editorial flex items-center justify-between py-5">
        <Link to="/" className="group flex items-baseline gap-2" aria-label={`${profile.name} — home`}>
          <span className="font-display text-[1.65rem] leading-none tracking-tight">
            Sophia <span className="italic text-rose-deep">Letitia</span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="link-underline eyebrow pb-1 text-espresso/80 hover:text-espresso"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span
            className={`absolute h-px w-6 bg-espresso transition-transform duration-500 ${open ? 'rotate-45' : '-translate-y-1'}`}
          />
          <span
            className={`absolute h-px w-6 bg-espresso transition-transform duration-500 ${open ? '-rotate-45' : 'translate-y-1'}`}
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-[72px] bottom-0 bg-cream transition-all duration-700 md:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav aria-label="Mobile navigation" className="container-editorial pt-10">
          <ul className="space-y-2">
            <li>
              <Link to="/" className="font-display text-5xl">
                Home
              </Link>
            </li>
            {links.map((link, i) => (
              <li
                key={link.to}
                className={`transition-all duration-700 ${open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: `${(i + 1) * 60}ms` }}
              >
                <Link
                  to={link.to}
                  className="font-display text-5xl"
                  activeProps={{ className: 'italic text-rose-deep' }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="eyebrow mt-12 text-espresso-soft">{profile.email}</p>
        </nav>
      </div>
    </header>
  )
}
