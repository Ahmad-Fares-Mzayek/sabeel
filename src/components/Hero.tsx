import { hero } from '../content'
import { stockImages } from '../content/images'

export default function Hero() {
  const img = stockImages.arcade
  return (
    <section
      id="top"
      className="relative min-h-screen w-full bg-greenDeep text-paper overflow-hidden"
    >
      <img
        src={img.src}
        alt={img.alt}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: 'saturate(0.55) contrast(1.02) brightness(0.85)' }}
      />
      {/* Deep-green scrim — 82% floor keeps headline contrast even on lighter frames */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(12, 42, 36, 0.82)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-content flex-col px-6 pt-32 pb-16 md:px-10 md:pt-40 md:pb-20">
        <div className="max-w-3xl">
          <p className="eyebrow mb-8">{hero.eyebrow}</p>

          <h1 className="font-display text-paper text-[44px] leading-[1.02] tracking-tightish sm:text-[64px] md:text-[88px] lg:text-[104px]">
            {hero.headline}
            <br />
            <span className="text-paper/70">{hero.subline}</span>
          </h1>

          <p className="mt-10 max-w-prose65 text-[17px] leading-relaxed text-paper/80 md:text-[18px]">
            {hero.body}
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-6">
            <a href={hero.primary.href} className="btn-outline text-paper">
              {hero.primary.label}
            </a>
            <a
              href={hero.secondary.href}
              className="link-underline text-paper text-[15px] font-medium"
            >
              {hero.secondary.label}
            </a>
          </div>
        </div>

        <div className="mt-auto pt-16">
          <span className="rule-brass mb-6" aria-hidden="true" />
          <div className="flex flex-wrap items-end justify-between gap-6 text-[12px] font-medium tracking-wider text-paper/60 uppercase">
            <span>Damascus · Syria</span>
            <span>Studio · Academy · Capital</span>
          </div>
        </div>
      </div>
    </section>
  )
}
