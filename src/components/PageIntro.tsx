import type { ReactNode } from 'react'

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: ReactNode
  children?: ReactNode
}) {
  return (
    <section className="container-editorial pb-16 pt-16 md:pb-24 md:pt-24">
      <p className="eyebrow rise mb-8 text-rose-deep">{eyebrow}</p>
      <h1 className="rise max-w-5xl text-[clamp(3rem,8vw,7.5rem)]" style={{ animationDelay: '120ms' }}>
        {title}
      </h1>
      {children && (
        <div className="rise mt-10 max-w-xl text-espresso-soft" style={{ animationDelay: '260ms' }}>
          {children}
        </div>
      )}
    </section>
  )
}
