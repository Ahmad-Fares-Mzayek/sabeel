import { principles } from '../content'
import { stockImages } from '../content/images'

export default function Principles() {
  const bg = stockImages.builders
  return (
    <section
      id="principles"
      className="relative bg-greenDeep text-paper overflow-hidden"
    >
      {/* Background photograph */}
      <img
        src={bg.src}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: 'saturate(0.4) contrast(1.05) brightness(0.7)' }}
      />
      {/* Heavy scrim so principles copy sits at full contrast */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(12, 42, 36, 0.88)' }}
      />
      {/* Subtle vertical falloff to add depth toward the edges */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(12,42,36,0.15) 0%, rgba(12,42,36,0) 25%, rgba(12,42,36,0) 75%, rgba(12,42,36,0.25) 100%)',
        }}
      />

      <div className="relative mx-auto max-w-content px-6 py-24 md:px-10 md:py-36">
        <div className="max-w-3xl">
          <p className="eyebrow mb-8">{principles.eyebrow}</p>
          <h2 className="font-display text-[36px] leading-[1.08] tracking-tightish sm:text-[44px] md:text-[56px]">
            {principles.heading}
          </h2>
        </div>

        <ol className="mt-20 divide-y divide-lineDark border-y border-lineDark">
          {principles.items.map((p, i) => (
            <li
              key={i}
              className="group relative grid grid-cols-1 gap-6 py-12 md:grid-cols-12 md:gap-10 transition-colors duration-300 hover:bg-white/[0.03]"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 bottom-0 w-[2px] bg-brass origin-top scale-y-0 transition-transform duration-500 group-hover:scale-y-100"
              />
              <div className="md:col-span-1 md:pl-6">
                <span className="text-[11px] uppercase tracking-eyebrow text-brass inline-block transition-transform duration-500 group-hover:translate-x-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="md:col-span-6">
                <h3 className="font-display text-[24px] leading-[1.2] tracking-tightish md:text-[30px] text-paper transition-colors duration-300 group-hover:text-brass">
                  {p.title}
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="max-w-prose65 text-[16px] leading-relaxed text-paper/75">
                  {p.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
