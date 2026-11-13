import { profile } from '../content/portfolio'
import { ArrowUpRight, LinkedIn, Mail } from './Icons'

/** Email + LinkedIn rows. LinkedIn becomes a link once `profile.linkedin.url` is set. */
export function ContactLinks({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const border = tone === 'light' ? 'border-cream/20' : 'border-espresso/15'
  const muted = tone === 'light' ? 'text-cream/60' : 'text-espresso-soft'
  const row = `group flex items-center justify-between gap-6 border-t ${border} py-6 transition-colors duration-500`

  const linkedInBody = (
    <>
      <span className="flex items-center gap-5">
        <LinkedIn className="h-5 w-5 shrink-0 opacity-70" />
        <span>
          <span className={`eyebrow block ${muted}`}>LinkedIn</span>
          <span className="font-display text-2xl sm:text-3xl">{profile.linkedin.handle}</span>
        </span>
      </span>
      {profile.linkedin.url ? (
        <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
      ) : (
        <span className={`eyebrow shrink-0 ${muted}`}>Link coming soon</span>
      )}
    </>
  )

  return (
    <div className={`border-b ${border}`}>
      <a href={`mailto:${profile.email}`} className={`${row} hover:text-rose`}>
        <span className="flex min-w-0 items-center gap-5">
          <Mail className="h-5 w-5 shrink-0 opacity-70" />
          <span className="min-w-0">
            <span className={`eyebrow block ${muted}`}>Email</span>
            <span className="block truncate font-display text-2xl sm:text-3xl">{profile.email}</span>
          </span>
        </span>
        <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
      </a>
      {profile.linkedin.url ? (
        <a
          href={profile.linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${row} hover:text-rose`}
        >
          {linkedInBody}
        </a>
      ) : (
        <div className={row}>{linkedInBody}</div>
      )}
    </div>
  )
}
