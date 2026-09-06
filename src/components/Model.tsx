import { useEffect, useRef, useState } from 'react'
import { model } from '../content'

function useVisible<T extends Element>(threshold = 0.3) {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return { ref, visible }
}

function DiagramDesktop({ visible }: { visible: boolean }) {
  const boxTransition = 'transition-opacity duration-700'
  const arrowStyle = (delay: number): React.CSSProperties => ({
    strokeDasharray: 120,
    strokeDashoffset: visible ? 0 : 120,
    transition: `stroke-dashoffset 700ms ease ${delay}ms`,
  })
  const returnPathStyle: React.CSSProperties = {
    strokeDasharray: '5 6',
    // extra dashoffset value large enough to hide the whole ~900px path
    strokeDashoffset: visible ? 0 : 900,
    // Chained: fade in dashed line after arrows land
    transition: 'stroke-dashoffset 1400ms ease 900ms',
  }
  return (
    <svg
      viewBox="0 0 900 260"
      className="hidden md:block w-full h-auto"
      role="img"
      aria-label="Academy leads to Studio, Studio leads to Capital, results return to Academy."
    >
      <g className={boxTransition} style={{ opacity: visible ? 1 : 0, transitionDelay: '0ms' }}>
        <rect x="20" y="60" width="220" height="90" fill="none" stroke="#123D34" strokeWidth="1.25" />
        <text x="130" y="112" textAnchor="middle" fontFamily="Spectral" fontSize="26" fill="#141618">
          Academy
        </text>
      </g>

      <g className={boxTransition} style={{ opacity: visible ? 1 : 0, transitionDelay: '250ms' }}>
        <rect x="340" y="60" width="220" height="90" fill="#123D34" />
        <text x="450" y="112" textAnchor="middle" fontFamily="Spectral" fontSize="26" fill="#FAF8F4">
          Studio
        </text>
      </g>

      <g className={boxTransition} style={{ opacity: visible ? 1 : 0, transitionDelay: '500ms' }}>
        <rect x="660" y="60" width="220" height="90" fill="none" stroke="#123D34" strokeWidth="1.25" />
        <text x="770" y="112" textAnchor="middle" fontFamily="Spectral" fontSize="26" fill="#141618">
          Capital
        </text>
      </g>

      <g stroke="#B08D4F" strokeWidth="1.25" fill="none">
        <line x1="245" y1="105" x2="330" y2="105" style={arrowStyle(200)} />
        <line x1="565" y1="105" x2="650" y2="105" style={arrowStyle(450)} />
        {visible && (
          <>
            <polyline points="322,100 332,105 322,110" style={{ opacity: 1, transition: 'opacity 300ms ease 700ms' }} />
            <polyline points="642,100 652,105 642,110" style={{ opacity: 1, transition: 'opacity 300ms ease 950ms' }} />
          </>
        )}
      </g>

      <g stroke="#B08D4F" strokeWidth="1.25" fill="none">
        <path
          d="M770 155 Q770 220 450 220 Q130 220 130 155"
          style={returnPathStyle}
        />
        {visible && (
          <polyline
            points="135,163 130,153 125,163"
            fill="#B08D4F"
            stroke="none"
            style={{ opacity: 1, transition: 'opacity 300ms ease 2200ms' }}
          />
        )}
      </g>
      <text
        x="450"
        y="245"
        textAnchor="middle"
        fontFamily="Inter"
        fontSize="11"
        letterSpacing="2.5"
        fill="#B08D4F"
        style={{
          opacity: visible ? 1 : 0,
          transition: 'opacity 600ms ease 2100ms',
        }}
      >
        RESULTS FUND AND FILL THE NEXT COHORT
      </text>
    </svg>
  )
}

function DiagramMobile({ visible }: { visible: boolean }) {
  const box = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transition: `opacity 600ms ease ${delay}ms`,
  })
  const arrow = (delay: number): React.CSSProperties => ({
    strokeDasharray: 90,
    strokeDashoffset: visible ? 0 : 90,
    transition: `stroke-dashoffset 500ms ease ${delay}ms`,
  })
  return (
    <svg
      viewBox="0 0 300 520"
      className="md:hidden w-full h-auto"
      role="img"
      aria-label="Academy leads to Studio, Studio leads to Capital, results return to Academy."
    >
      <g style={box(0)}>
        <rect x="40" y="20" width="220" height="80" fill="none" stroke="#123D34" strokeWidth="1.25" />
        <text x="150" y="66" textAnchor="middle" fontFamily="Spectral" fontSize="22" fill="#141618">
          Academy
        </text>
      </g>

      <g stroke="#B08D4F" strokeWidth="1.25" fill="none">
        <line x1="150" y1="105" x2="150" y2="165" style={arrow(200)} />
      </g>

      <g style={box(300)}>
        <rect x="40" y="170" width="220" height="80" fill="#123D34" />
        <text x="150" y="216" textAnchor="middle" fontFamily="Spectral" fontSize="22" fill="#FAF8F4">
          Studio
        </text>
      </g>

      <g stroke="#B08D4F" strokeWidth="1.25" fill="none">
        <line x1="150" y1="255" x2="150" y2="315" style={arrow(500)} />
      </g>

      <g style={box(600)}>
        <rect x="40" y="320" width="220" height="80" fill="none" stroke="#123D34" strokeWidth="1.25" />
        <text x="150" y="366" textAnchor="middle" fontFamily="Spectral" fontSize="22" fill="#141618">
          Capital
        </text>
      </g>

      <g stroke="#B08D4F" strokeWidth="1.25" fill="none">
        <path
          d="M270 360 Q290 440 150 460 Q10 440 30 60"
          style={{
            strokeDasharray: '5 6',
            strokeDashoffset: visible ? 0 : 900,
            transition: 'stroke-dashoffset 1400ms ease 900ms',
          }}
        />
      </g>
      <text
        x="150"
        y="500"
        textAnchor="middle"
        fontFamily="Inter"
        fontSize="10"
        letterSpacing="2"
        fill="#B08D4F"
        style={{ opacity: visible ? 1 : 0, transition: 'opacity 500ms ease 2100ms' }}
      >
        RESULTS FUND THE NEXT COHORT
      </text>
    </svg>
  )
}

export default function Model() {
  const { ref, visible } = useVisible<HTMLDivElement>(0.25)

  return (
    <section id="model" className="bg-paperWarm text-ink">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-36">
        <div className="max-w-3xl">
          <p className="eyebrow mb-8">{model.eyebrow}</p>
          <h2 className="font-display text-[36px] leading-[1.08] tracking-tightish sm:text-[44px] md:text-[56px]">
            {model.heading}
          </h2>
          <p className="mt-8 max-w-prose65 text-[17px] leading-relaxed text-ink/80">
            {model.intro}
          </p>
        </div>

        <div ref={ref} className="mt-16 md:mt-24">
          <DiagramDesktop visible={visible} />
          <DiagramMobile visible={visible} />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-3 md:gap-12">
          {model.steps.map((s, i) => {
            const isCenter = i === 1
            return (
              <div
                key={s.label}
                className={[
                  'group pt-6 border-t transition-colors duration-300',
                  isCenter ? 'border-brass' : 'border-line hover:border-brass',
                ].join(' ')}
              >
                <p className="eyebrow mb-4 transition-colors duration-300">
                  {s.label}
                </p>
                <p className="text-[15px] leading-relaxed text-ink/80 max-w-prose65">
                  {s.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
