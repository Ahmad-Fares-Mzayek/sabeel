import { roadmap } from '../content'

export default function Roadmap() {
  return (
    <section id="roadmap" className="bg-paper text-ink">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-36">
        <div className="max-w-3xl">
          <p className="eyebrow mb-8">{roadmap.eyebrow}</p>
          <h2 className="font-display text-[36px] leading-[1.08] tracking-tightish sm:text-[44px] md:text-[56px]">
            {roadmap.heading}
          </h2>
        </div>

        <ol className="relative mt-20 md:mt-24 md:ps-12">
          {/* spine */}
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 start-[7px] w-px bg-line md:start-2"
          />
          {roadmap.stages.map((s) => (
            <li key={s.year} className="group relative pb-14 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute -start-[1px] top-3 h-[9px] w-[9px] bg-brass md:-start-[6px] md:h-[13px] md:w-[13px] transition-transform duration-500 group-hover:scale-150"
              />
              <span
                aria-hidden="true"
                className="absolute -start-[9px] top-[3px] h-[25px] w-[25px] border border-brass opacity-0 transition-opacity duration-500 group-hover:opacity-60 md:-start-[14px] md:h-[29px] md:w-[29px]"
              />
              <div className="ps-8 md:ps-10 grid grid-cols-1 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-3">
                  <p className="text-[11px] uppercase tracking-eyebrow text-brass">
                    {s.year}
                  </p>
                  <p className="mt-2 font-display text-[26px] leading-tight tracking-tightish text-ink md:text-[30px] transition-colors duration-300 group-hover:text-green">
                    {s.title}
                  </p>
                </div>
                <div className="md:col-span-9 mt-3 md:mt-1">
                  <p className="max-w-prose65 text-[16px] leading-relaxed text-ink/80">
                    {s.body}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
