type IconProps = { className?: string }

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.1,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export function ArrowRight({ className = 'h-3.5 w-3.5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={1.4}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  )
}

export function ArrowUpRight({ className = 'h-3.5 w-3.5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={1.4}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  )
}

export function Download({ className = 'h-3.5 w-3.5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={1.4}>
      <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
    </svg>
  )
}

export function Plus({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export function Close({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={1.4}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

export function Mail({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </svg>
  )
}

export function LinkedIn({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10.5V17M8 7.5v.01M12 17v-6.5M12 13.5c0-1.7 1-3 2.6-3S17 11.6 17 13.3V17" />
    </svg>
  )
}

/** Fine-line category icons for the skills toolkit. */
export function SkillIcon({ name, className = 'h-9 w-9' }: { name: string } & IconProps) {
  switch (name) {
    case 'compass':
      return (
        <svg viewBox="0 0 40 40" className={className} {...base}>
          <circle cx="20" cy="20" r="15" />
          <circle cx="20" cy="20" r="10" strokeDasharray="1 3" />
          <path d="m24.5 15.5-3 6-6 3 3-6z" />
        </svg>
      )
    case 'sparkle':
      return (
        <svg viewBox="0 0 40 40" className={className} {...base}>
          <path d="M20 5c1 8 3.5 12 11 15-7.5 3-10 7-11 15-1-8-3.5-12-11-15 7.5-3 10-7 11-15z" />
          <path d="M31 6v5M28.5 8.5h5" />
        </svg>
      )
    case 'tools':
      return (
        <svg viewBox="0 0 40 40" className={className} {...base}>
          <rect x="6" y="9" width="28" height="20" rx="3" />
          <path d="M14 33h12M20 29v4M11 15h8M11 19h12M11 23h5" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 40 40" className={className} {...base}>
          <circle cx="20" cy="17" r="10" />
          <circle cx="20" cy="17" r="6" strokeDasharray="1 2.5" />
          <path d="m14 25-3 10 5-2.5 4 3M26 25l3 10-5-2.5-4 3" />
        </svg>
      )
  }
}
