import { useState } from 'react'
import { lines } from '../content'

export default function Lines() {
  const [active, setActive] = useState(lines.tabs[0].key)
  const current = lines.tabs.find((t) => t.key === active) ?? lines.tabs[0]

  return (
    <section id="lines" className="bg-greenDeep text-paper">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-36">
        <div className="max-w-3xl">
          <p className="eyebrow mb-8">{lines.eyebrow}</p>
          <h2 className="font-display text-[36px] leading-[1.08] tracking-tightish sm:text-[44px] md:text-[56px]">
            {lines.heading}
          </h2>
        </div>

        <div
          role="tablist"
          aria-label="Three lines of Sabeel"
          className="mt-16 flex flex-wrap gap-x-8 gap-y-4 border-b border-lineDark"
        >
          {lines.tabs.map((t) => {
            const selected = t.key === active
            return (
              <button
                key={t.key}
                role="tab"
                aria-selected={selected}
                aria-controls={`panel-${t.key}`}
                id={`tab-${t.key}`}
                onClick={() => setActive(t.key)}
                className={[
                  'relative pb-4 text-[13px] font-medium uppercase tracking-eyebrow transition-colors duration-300',
                  selected ? 'text-paper' : 'text-paper/50 hover:text-paper/80',
                ].join(' ')}
              >
                {t.label}
                <span
                  aria-hidden="true"
                  className={[
                    'absolute inset-x-0 -bottom-px h-px bg-brass origin-left transition-transform duration-400',
                    selected ? 'scale-x-100' : 'scale-x-0',
                  ].join(' ')}
                />
              </button>
            )
          })}
        </div>

        {/* Panels — render all for crawlability, hide inactive */}
        {lines.tabs.map((t) => {
          const isCurrent = t.key === current.key
          return (
            <div
              key={t.key}
              role="tabpanel"
              id={`panel-${t.key}`}
              aria-labelledby={`tab-${t.key}`}
              hidden={!isCurrent}
              className="pt-14"
            >
              <div
                className="grid grid-cols-1 gap-12 md:grid-cols-12"
                style={{
                  animation: isCurrent ? 'panelIn 500ms ease both' : undefined,
                }}
              >
                <div className="md:col-span-7">
                  <h3 className="font-display text-[28px] leading-tight tracking-tightish md:text-[38px]">
                    {t.title}
                  </h3>
                  <p className="mt-8 max-w-prose65 text-[16px] leading-relaxed text-paper/80 md:text-[17px]">
                    {t.body}
                  </p>
                </div>
                <ul className="md:col-span-5 space-y-6 border-t border-lineDark pt-6 md:border-t-0 md:border-s md:ps-10 md:pt-0">
                  {t.points.map((p, i) => (
                    <li
                      key={i}
                      className="flex gap-4 text-[15px] leading-relaxed text-paper/80"
                      style={{
                        animation: isCurrent
                          ? `pointIn 500ms ease ${120 + i * 90}ms both`
                          : undefined,
                      }}
                    >
                      <span className="font-display text-brass text-[15px] leading-relaxed">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
