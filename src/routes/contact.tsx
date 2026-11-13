import { createFileRoute } from '@tanstack/react-router'
import { contact } from '../content/portfolio'
import { img, imgSrcSet, pageMeta } from '../lib/site'
import { ContactLinks } from '../components/ContactLinks'
import { Reveal } from '../components/Reveal'

export const Route = createFileRoute('/contact')({
  component: Contact,
  head: () => pageMeta('Contact', contact.supporting),
})

function Contact() {
  return (
    <section className="container-editorial grid gap-14 pb-28 pt-16 md:pt-24 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <p className="eyebrow rise mb-8 text-rose-deep">Contact</p>
        <h1 className="rise text-[clamp(3rem,7.5vw,7rem)]" style={{ animationDelay: '120ms' }}>
          Let&rsquo;s Create <span className="display-italic text-rose-deep">Something</span> Meaningful.
        </h1>
        <p className="rise mt-10 max-w-lg text-lg text-espresso-soft" style={{ animationDelay: '240ms' }}>
          {contact.supporting}
        </p>
        <div className="rise mt-14 max-w-2xl" style={{ animationDelay: '360ms' }}>
          <ContactLinks />
        </div>
      </div>
      <Reveal delay={200} className="lg:col-span-4 lg:col-start-9 lg:pt-24">
        <div className="zoom-frame aspect-[3/4] rounded-[2rem] rounded-tl-[8rem] bg-sand">
          <img
            src={img('/img/hero-detail.png', 800)}
            srcSet={imgSrcSet('/img/hero-detail.png', [400, 800, 1200])}
            sizes="(min-width: 1024px) 30vw, 100vw"
            alt="Blush silk ribbon over stacked magazines"
            className="h-full w-full object-cover"
          />
        </div>
      </Reveal>
    </section>
  )
}
