import { useState } from 'react'
import { what } from '../content'

/*
  Company-lifecycle timeline. A horizontal spine (spark → scale) with four
  models pinned along it. A year selector controls which stages Sabeel
  occupies at that moment in time, making the phased trajectory legible
  as a single interactive artefact.
*/

type StageKey = 'studio' | 'incubator' | 'accelerator' | 'vc'

const STAGES: {
  key: StageKey
  label: string
  order: number
  origin: string
  sabeel: string
  activeFrom: number
}[] = [
  {
    key: 'studio',
    label: 'Venture studio',
    order: 1,
    origin:
      'The company is originated inside the studio, with the studio’s team and method.',
    sabeel: 'Today',
    activeFrom: 2026,
  },
  {
    key: 'incubator',
    label: 'Incubator',
    order: 2,
    origin: 'A founder arrives with an idea and a team.',
    sabeel: 'Phase two',
    activeFrom: 2027,
  },
  {
    key: 'accelerator',
    label: 'Accelerator',
    order: 3,
    origin: 'A founder arrives with traction and needs a push.',
    sabeel: 'Long term',
    activeFrom: 2028,
  },
  {
    key: 'vc',
    label: 'Venture capital',
    order: 4,
    origin: 'A founder arrives with a company that already exists.',
    sabeel: 'Not yet',
    activeFrom: 2030,
  },
]

const YEARS = [2026, 2027, 2028, 2030] as const
type Year = (typeof YEARS)[number]

const YEAR_LABEL: Record<Year, string> = {
  2026: '2026',
  2027: '2027',
  2028: '2028',
  2030: '2029–30',
}

export default function WhatWeAre() {
  const [year, setYear] = useState<Year>(2026)

  const activeCount = STAGES.filter((s) => year >= s.activeFrom).length
  const fillPct = (activeCount / STAGES.length) * 100

  return (
    <section id="what" className="bg-paper text-ink">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-36">
        {/* Heading */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12 md:items-end">
          <div className="md:col-span-8">
            <p className="eyebrow mb-8">{what.eyebrow}</p>
            <h2 className="font-display text-[36px] leading-[1.08] tracking-tightish sm:text-[44px] md:text-[56px]">
              {what.heading}
            </h2>
          </div>
          <div className="md:col-span-4">
            <p className="max-w-prose65 text-[15px] leading-relaxed text-ink/75">
              {what.intro}
            </p>
          </div>
        </div>

        {/* Year selector */}
        <div className="mt-20 md:mt-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-4">Sabeel, over time</p>
              <p className="font-display text-[22px] leading-tight tracking-tightish text-ink md:text-[26px]">
                Where we sit in the year of{' '}
                <span className="text-brass">{YEAR_LABEL[year]}</span>.
              </p>
            </div>

            <div
              role="tablist"
              aria-label="Choose a year"
              className="flex flex-wrap gap-2"
            >
              {YEARS.map((y) => {
                const on = y === year
                return (
                  <button
                    key={y}
                    type="button"
                    role="tab"
                    aria-selected={on}
                    onClick={() => setYear(y)}
                    className={[
                      'px-4 py-2 text-[12px] font-medium uppercase tracking-eyebrow border transition-all duration-300',
                      on
                        ? 'border-brass text-ink bg-paperWarm'
                        : 'border-line text-grey hover:border-ink hover:text-ink',
                    ].join(' ')}
                  >
                    {YEAR_LABEL[y]}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Lifecycle bar + stage nodes */}
        <div className="mt-14">
          {/* Axis label */}
          <div className="flex items-center justify-between text-[11px] uppercase tracking-eyebrow text-grey">
            <span>The spark</span>
            <span className="hidden md:inline text-brass">Company lifecycle</span>
            <span>Scale</span>
          </div>

          {/* The spine */}
          <div className="relative mt-4 h-px w-full bg-line">
            <div
              className="absolute inset-y-0 left-0 bg-brass origin-left transition-transform duration-700 ease-out"
              style={{ width: '100%', transform: `scaleX(${fillPct / 100})` }}
              aria-hidden="true"
            />

            {/* Nodes */}
            {STAGES.map((s, i) => {
              const on = year >= s.activeFrom
              const leftPct = (i + 0.5) * (100 / STAGES.length)
              return (
                <span
                  key={s.key}
                  className="absolute top-0 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${leftPct}%` }}
                  aria-hidden="true"
                >
                  <span
                    className={[
                      'block h-4 w-4 border-2 transition-all duration-500',
                      on ? 'bg-brass border-brass' : 'bg-paper border-line',
                    ].join(' ')}
                  />
                </span>
              )
            })}
          </div>

          {/* Stage cards below the spine */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STAGES.map((s, i) => {
              const on = year >= s.activeFrom
              return (
                <article
                  key={s.key}
                  className={[
                    'relative border p-6 md:p-7 transition-all duration-500',
                    on
                      ? 'border-brass bg-paperWarm translate-y-0'
                      : 'border-line bg-transparent md:translate-y-3 opacity-70',
                  ].join(' ')}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <p
                      className={[
                        'text-[11px] uppercase tracking-eyebrow transition-colors duration-300',
                        on ? 'text-brass' : 'text-grey',
                      ].join(' ')}
                    >
                      Model {String(s.order).padStart(2, '0')}
                    </p>
                    <span
                      className={[
                        'text-[10px] font-medium uppercase tracking-eyebrow px-2 py-1 border transition-colors duration-300',
                        on
                          ? 'border-brass text-brass'
                          : 'border-line text-grey',
                      ].join(' ')}
                    >
                      {s.sabeel}
                    </span>
                  </div>

                  <h3
                    className={[
                      'mt-4 font-display text-[22px] leading-tight tracking-tightish md:text-[26px] transition-colors duration-300',
                      on ? 'text-green' : 'text-ink/70',
                    ].join(' ')}
                  >
                    {s.label}
                  </h3>

                  <p
                    className={[
                      'mt-4 text-[13px] leading-relaxed transition-colors duration-300',
                      on ? 'text-ink/80' : 'text-ink/50',
                    ].join(' ')}
                  >
                    {s.origin}
                  </p>

                  {on && (
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-0 h-full w-[2px] bg-brass origin-top"
                      style={{
                        animation: 'railGrow 500ms ease both',
                      }}
                    />
                  )}
                </article>
              )
            })}
          </div>

          {/* Legend */}
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-[12px] text-grey">
            <span className="inline-flex items-center gap-2">
              <span className="inline-block h-3 w-3 bg-brass border-2 border-brass" />
              Sabeel active
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="inline-block h-3 w-3 bg-paper border-2 border-line" />
              Not yet
            </span>
            <span className="ml-auto italic text-grey/80">
              Toggle a year to see how the studio extends.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
