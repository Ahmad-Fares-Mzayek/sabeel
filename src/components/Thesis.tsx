import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { thesis } from '../content'
import CountUp from './CountUp'

const PANELS = [
  {
    numeral: 'I',
    title: 'Cost',
    kicker: 'Same dollar, different country.',
    body: thesis.items[0].body,
  },
  {
    numeral: 'II',
    title: 'Talent',
    kicker: 'The team required to ship has shrunk.',
    body: thesis.items[1].body,
  },
  {
    numeral: 'III',
    title: 'Timing',
    kicker: 'The institutions are being formed now.',
    body: thesis.items[2].body,
  },
] as const

/* ─────────────────────── Cost visualisation ─────────────────────── */

function CostViz({ active }: { active: boolean }) {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14 md:items-start">
      <div className="md:col-span-5">
        <p className="text-[11px] uppercase tracking-eyebrow text-brass">The figure</p>
        <p className="mt-4 font-display leading-none text-paper text-[72px] sm:text-[96px] md:text-[120px] lg:text-[144px] tracking-tightish">
          ${active ? <CountUp to={80} duration={1400} /> : '0'}
          <span className="text-brass">K</span>
        </p>
        <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-paper/60">
          The same eighty thousand dollars, deployed into two economies, buys two different futures.
        </p>
      </div>

      <div className="md:col-span-7 space-y-8">
        <div>
          <div className="flex items-baseline justify-between">
            <p className="text-[11px] uppercase tracking-eyebrow text-paper/60">Gulf</p>
            <p className="text-[12px] text-paper/50">1 senior engineer · 1 year</p>
          </div>
          <div className="mt-3 h-9 w-full bg-white/[0.04] border border-lineDark relative overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-paper/25 origin-left"
              style={{
                width: '100%',
                animation: active ? 'fillBar 900ms ease 100ms both' : undefined,
                transform: active ? undefined : 'scaleX(0)',
              }}
            />
            <div className="absolute inset-0 flex items-center px-3">
              <span className="text-[11px] uppercase tracking-eyebrow text-paper/60">
                Engineer · full year
              </span>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between">
            <p className="text-[11px] uppercase tracking-eyebrow text-brass">Syria</p>
            <p className="text-[12px] text-paper/70">Full team · 18 months · in market</p>
          </div>
          <div className="mt-3 grid grid-cols-4 gap-[2px] h-9 w-full">
            {['Team', 'Runway', 'Infra', 'Product'].map((label, i) => (
              <div
                key={label}
                className="relative bg-white/[0.04] border border-lineDark overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-brass/85 origin-left"
                  style={{
                    animation: active
                      ? `fillBar 500ms ease ${400 + i * 180}ms both`
                      : undefined,
                    transform: active ? undefined : 'scaleX(0)',
                  }}
                />
                <span className="relative flex h-full items-center justify-center text-[10px] uppercase tracking-eyebrow text-paper/95">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <span className="rule-brass mt-4" aria-hidden="true" />
        </div>

        <p className="text-[13px] italic text-paper/55">
          The window on this arithmetic is measured in years, not decades.
        </p>
      </div>
    </div>
  )
}

/* ─────────────────────── Talent visualisation ─────────────────────── */

function TalentViz({ active }: { active: boolean }) {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14 md:items-start">
      <div className="md:col-span-6">
        <p className="text-[11px] uppercase tracking-eyebrow text-paper/50">Then</p>
        <p className="mt-2 font-display text-[22px] leading-tight tracking-tightish text-paper/70">
          A ten-person team, all humans.
        </p>
        <div className="mt-6 grid grid-cols-10 gap-2 max-w-md">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className="block h-6 w-6 bg-paper/25 border border-lineDark"
              style={{
                animation: active ? `dotPop 240ms ease ${i * 50}ms both` : undefined,
                opacity: active ? undefined : 0,
              }}
            />
          ))}
        </div>

        <div className="mt-12">
          <p className="text-[11px] uppercase tracking-eyebrow text-brass">Now</p>
          <p className="mt-2 font-display text-[22px] leading-tight tracking-tightish text-paper">
            Two engineers, directing the tools.
          </p>
          <div className="mt-6 flex items-center gap-3 max-w-md">
            <div className="grid grid-cols-2 gap-2">
              {Array.from({ length: 2 }).map((_, i) => (
                <span
                  key={i}
                  className="block h-6 w-6 bg-brass border border-brass"
                  style={{
                    animation: active
                      ? `dotPop 280ms ease ${700 + i * 90}ms both`
                      : undefined,
                    opacity: active ? undefined : 0,
                  }}
                />
              ))}
            </div>
            <span className="h-px flex-1 bg-brass/40 mx-2" aria-hidden="true" />
            <span
              className="border border-brass px-3 py-1 text-[11px] uppercase tracking-eyebrow text-brass"
              style={{
                animation: active ? 'dotPop 300ms ease 950ms both' : undefined,
                opacity: active ? undefined : 0,
              }}
            >
              + AI tooling
            </span>
          </div>
        </div>
      </div>

      <div className="md:col-span-6 md:pl-10 md:border-s md:border-lineDark">
        <p className="text-[11px] uppercase tracking-eyebrow text-brass">Team size, for the same output</p>
        <p className="mt-6 font-display text-paper leading-none text-[72px] sm:text-[88px] md:text-[104px] tracking-tightish">
          <span className="text-paper/45">10</span>
          <span className="mx-3 text-brass">→</span>
          {active ? <CountUp from={10} to={2} duration={1200} /> : '10'}
        </p>
        <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-paper/60">
          A generation that learned to build under constraint. Very few have ever been paid to build something of their own.
        </p>
      </div>
    </div>
  )
}

/* ─────────────────────── Timing visualisation ─────────────────────── */

function TimingViz({ active }: { active: boolean }) {
  const markerLeft = 20 // percent — Jan 2026 within 2025-2030
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14 md:items-start">
      <div className="md:col-span-7">
        <p className="text-[11px] uppercase tracking-eyebrow text-brass">Syrian Ministry of Communications and IT</p>
        <p className="mt-3 font-display text-[26px] leading-tight tracking-tightish text-paper md:text-[32px]">
          National Agenda for Startups, 2025 to 2030.
        </p>

        <div className="mt-14 relative">
          {/* Timeline spine */}
          <div className="relative h-px bg-lineDark">
            <div
              className="absolute inset-y-0 left-0 bg-brass origin-left"
              style={{
                width: '100%',
                animation: active ? 'fillBar 1300ms ease 200ms both' : undefined,
                transform: active ? undefined : 'scaleX(0)',
              }}
            />
          </div>

          {/* Year ticks */}
          <div className="mt-3 flex justify-between text-[11px] uppercase tracking-eyebrow text-paper/40">
            {['2025', '2026', '2027', '2028', '2029', '2030'].map((y) => (
              <span key={y}>{y}</span>
            ))}
          </div>

          {/* Marker */}
          <div
            className="absolute top-[-10px]"
            style={{ left: `${markerLeft}%`, transform: 'translateX(-50%)' }}
          >
            <div className="relative">
              <span className="block h-5 w-5 bg-brass" aria-hidden="true" />
              <span
                aria-hidden="true"
                className="absolute inset-0 border border-brass"
                style={{
                  animation: active ? 'pulseBrass 1600ms ease-out 1400ms 3' : undefined,
                }}
              />
            </div>
            <div className="absolute top-[26px] left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
              <p className="text-[10px] uppercase tracking-eyebrow text-brass">Jan 2026</p>
              <p className="mt-1 text-[11px] text-paper/70">Published</p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:col-span-5 md:pl-10 md:border-s md:border-lineDark space-y-6 mt-10 md:mt-0">
        {[
          { n: 6, label: 'Pillars' },
          { n: 28, label: 'Strategies' },
          { n: 1, label: 'National fund of funds', suffix: '', wide: true },
        ].map((s, i) => (
          <div
            key={s.label}
            className="flex items-baseline gap-5 border-b border-lineDark pb-4 last:border-b-0"
            style={{
              animation: active ? `panelIn 500ms ease ${400 + i * 180}ms both` : undefined,
              opacity: active ? undefined : 0,
            }}
          >
            <span className="font-display text-brass leading-none text-[52px] md:text-[64px] tracking-tightish">
              {active ? <CountUp to={s.n} duration={1000} /> : 0}
            </span>
            <span className="text-[13px] uppercase tracking-eyebrow text-paper/70">
              {s.label}
            </span>
          </div>
        ))}
        <p className="text-[13px] leading-relaxed text-paper/55 max-w-xs pt-2">
          The institutions that will define Syrian technology for two decades are being formed now, with almost no incumbents.
        </p>
      </div>
    </div>
  )
}

/* ─────────────────────── Section ─────────────────────── */

const VIZ = [CostViz, TalentViz, TimingViz]

export default function Thesis() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [hasAdvanced, setHasAdvanced] = useState(false)

  const goTo = useCallback((i: number) => {
    const c = containerRef.current
    if (!c) return
    const w = c.clientWidth
    c.scrollTo({ left: i * w, behavior: 'smooth' })
    setHasAdvanced(true)
  }, [])

  // Track which panel is centered based on scroll position
  useEffect(() => {
    const c = containerRef.current
    if (!c) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const w = c.clientWidth
        if (w === 0) return
        const idx = Math.round(c.scrollLeft / w)
        setActive((prev) => {
          const clamped = Math.max(0, Math.min(PANELS.length - 1, idx))
          if (clamped !== 0) setHasAdvanced(true)
          return prev === clamped ? prev : clamped
        })
      })
    }
    c.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      c.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight' || e.key === 'PageDown') {
      e.preventDefault()
      goTo(Math.min(PANELS.length - 1, active + 1))
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault()
      goTo(Math.max(0, active - 1))
    } else if (e.key === 'Home') {
      e.preventDefault()
      goTo(0)
    } else if (e.key === 'End') {
      e.preventDefault()
      goTo(PANELS.length - 1)
    }
  }

  return (
    <section id="thesis" className="bg-greenDeep text-paper">
      <div className="mx-auto max-w-content px-6 pt-24 md:px-10 md:pt-36">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10 md:items-end">
          <div className="md:col-span-8">
            <p className="eyebrow mb-8">{thesis.eyebrow}</p>
            <h2 className="font-display text-[36px] leading-[1.08] tracking-tightish sm:text-[44px] md:text-[56px]">
              {thesis.heading}
            </h2>
          </div>
          <div className="md:col-span-4 md:pb-2">
            <p className="text-[13px] leading-relaxed text-paper/60">
              Three forces converging on the same country, at the same time.
            </p>
            <p
              className={[
                'mt-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-eyebrow text-brass transition-opacity duration-500',
                hasAdvanced ? 'opacity-40' : 'opacity-100',
              ].join(' ')}
            >
              <span>Drag, click, or press →</span>
              <span
                aria-hidden="true"
                className="inline-block"
                style={{
                  animation: hasAdvanced ? undefined : 'nudgeRight 1800ms ease-in-out infinite',
                }}
              >
                →
              </span>
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-14 md:mt-20 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            {PANELS.map((p, i) => {
              const on = i === active
              return (
                <button
                  key={p.numeral}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show ${p.title}`}
                  aria-current={on ? 'true' : undefined}
                  className="group flex items-center gap-3 py-2 focus:outline-none"
                >
                  <span
                    aria-hidden="true"
                    className={[
                      'h-px transition-all duration-500',
                      on ? 'w-16 bg-brass' : 'w-8 bg-paper/25 group-hover:bg-paper/60',
                    ].join(' ')}
                  />
                  <span
                    className={[
                      'font-display leading-none tracking-tightish transition-colors duration-300',
                      on ? 'text-brass text-[18px]' : 'text-paper/40 text-[15px] group-hover:text-paper/80',
                    ].join(' ')}
                  >
                    {p.numeral}
                  </span>
                  <span
                    className={[
                      'hidden sm:inline text-[11px] uppercase tracking-eyebrow transition-colors duration-300',
                      on ? 'text-paper' : 'text-paper/40 group-hover:text-paper/80',
                    ].join(' ')}
                  >
                    {p.title}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] uppercase tracking-eyebrow text-paper/50 tabular-nums">
              {String(active + 1).padStart(2, '0')} / {String(PANELS.length).padStart(2, '0')}
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => goTo(Math.max(0, active - 1))}
                disabled={active === 0}
                aria-label="Previous asymmetry"
                className="h-12 w-12 flex items-center justify-center border border-paper/40 text-paper transition-all duration-200 hover:bg-brass hover:border-brass hover:text-greenDeep disabled:opacity-25 disabled:hover:bg-transparent disabled:hover:border-paper/40 disabled:hover:text-paper"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M15 6l-6 6 6 6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => goTo(Math.min(PANELS.length - 1, active + 1))}
                disabled={active === PANELS.length - 1}
                aria-label="Next asymmetry"
                className="relative h-12 px-5 flex items-center gap-3 border border-brass bg-brass text-greenDeep transition-all duration-200 hover:bg-transparent hover:text-brass disabled:opacity-25 disabled:cursor-not-allowed"
              >
                <span className="text-[11px] font-semibold uppercase tracking-eyebrow">
                  Next
                </span>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slider viewport with overlay chevrons */}
      <div className="relative mt-12 md:mt-16">
        <div
          ref={containerRef}
          tabIndex={0}
          onKeyDown={onKey}
          role="region"
          aria-label="The three asymmetries"
          aria-roledescription="carousel"
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none focus:outline-none focus-visible:ring-1 focus-visible:ring-brass/60"
          style={{ overscrollBehaviorX: 'contain' }}
        >
        {PANELS.map((p, i) => {
          const Viz = VIZ[i]
          const isActive = i === active
          return (
            <article
              key={p.numeral}
              data-index={i}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${PANELS.length}: ${p.title}`}
              className="flex-none w-full snap-start"
            >
              <div className="mx-auto max-w-content px-6 pt-8 pb-24 md:px-10 md:pt-12 md:pb-36 min-h-[560px] md:min-h-[640px]">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-14">
                  <header className="md:col-span-4">
                    <span
                      className="font-display text-brass leading-none"
                      style={{ fontSize: 'clamp(72px, 12vw, 132px)', letterSpacing: '0.03em' }}
                      aria-hidden="true"
                    >
                      {p.numeral}
                    </span>
                    <h3 className="mt-2 font-display text-[32px] leading-tight tracking-tightish md:text-[44px]">
                      {p.title}
                    </h3>
                    <p className="mt-4 font-display italic text-paper/60 text-[18px] leading-snug tracking-tightish">
                      {p.kicker}
                    </p>
                    <p className="mt-8 max-w-prose65 text-[15px] leading-relaxed text-paper/75">
                      {p.body}
                    </p>
                  </header>

                  <div className="md:col-span-8">
                    <Viz active={isActive} />
                  </div>
                </div>
              </div>
            </article>
          )
        })}
        </div>

        {/* Right-edge gradient fade — subtle "more" affordance, only when not on last slide */}
        <div
          aria-hidden="true"
          className={[
            'pointer-events-none absolute inset-y-0 right-0 w-24 md:w-32 transition-opacity duration-500',
            active < PANELS.length - 1 ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
          style={{
            background:
              'linear-gradient(90deg, rgba(12,42,36,0) 0%, rgba(12,42,36,0.65) 100%)',
          }}
        />
        {/* Left-edge gradient fade */}
        <div
          aria-hidden="true"
          className={[
            'pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 transition-opacity duration-500',
            active > 0 ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
          style={{
            background:
              'linear-gradient(-90deg, rgba(12,42,36,0) 0%, rgba(12,42,36,0.55) 100%)',
          }}
        />

        {/* Floating overlay chevrons — hidden on touch-first screens where swipe is native */}
        <button
          type="button"
          onClick={() => goTo(Math.max(0, active - 1))}
          disabled={active === 0}
          aria-label="Previous asymmetry"
          className={[
            'hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10',
            'h-14 w-14 items-center justify-center border border-paper/30 bg-greenDeep/80 backdrop-blur-sm text-paper',
            'transition-all duration-200 hover:bg-brass hover:border-brass hover:text-greenDeep',
            'disabled:opacity-0 disabled:pointer-events-none',
          ].join(' ')}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => goTo(Math.min(PANELS.length - 1, active + 1))}
          disabled={active === PANELS.length - 1}
          aria-label="Next asymmetry"
          className={[
            'hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10',
            'h-14 w-14 items-center justify-center border border-brass bg-brass text-greenDeep',
            'transition-all duration-200 hover:scale-110',
            'disabled:opacity-0 disabled:pointer-events-none',
          ].join(' ')}
          style={{
            animation:
              !hasAdvanced && active === 0 ? 'nudgeRight 1800ms ease-in-out 3' : undefined,
          }}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </section>
  )
}
