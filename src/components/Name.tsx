import { name } from '../content'
import { stockImages } from '../content/images'
import StockPhoto from './StockPhoto'

export default function Name() {
  return (
    <section id="name" className="bg-paper text-ink">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-36">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-12">
          {/* Left: Arabic wordmark and definition */}
          <div className="md:col-span-5">
            <p className="eyebrow mb-8">{name.eyebrow}</p>

            <div
              className="font-arabic text-green leading-none"
              style={{ fontSize: 'clamp(120px, 20vw, 240px)' }}
              lang="ar"
              dir="rtl"
              aria-label="Sabeel in Arabic"
            >
              {name.arabic}
            </div>

            <span className="rule-brass mt-10 mb-6" aria-hidden="true" />

            <p className="text-[13px] leading-relaxed text-grey max-w-xs">
              <span className="font-sans font-semibold text-ink">
                {name.definitionLabel}
              </span>{' '}
              {name.definition}
            </p>
          </div>

          {/* Right: Story */}
          <div className="md:col-span-7 md:pl-6 lg:pl-16">
            <h2 className="font-display text-[36px] leading-[1.08] tracking-tightish sm:text-[44px] md:text-[52px]">
              {name.heading}
            </h2>

            <div className="mt-10 space-y-6 max-w-prose65 text-[17px] leading-relaxed text-ink/85">
              {name.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Full-bleed image band carrying the pull quote */}
      <div className="mt-8 md:mt-16">
        <StockPhoto
          image={stockImages.hands}
          aspect="aspect-[16/9] md:aspect-[21/9]"
          scrim={0.82}
          align="center"
          overlay={
            <div className="mx-auto max-w-content px-6 md:px-10">
              <blockquote className="max-w-4xl">
                <p className="font-display italic text-paper text-[24px] leading-[1.3] tracking-tightish sm:text-[30px] md:text-[40px]">
                  &ldquo;{name.quote}&rdquo;
                </p>
                <span className="rule-brass mt-8" aria-hidden="true" />
              </blockquote>
            </div>
          }
        />
      </div>
    </section>
  )
}
