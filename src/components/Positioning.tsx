import { useRef, type MouseEvent } from 'react'
import { positioning } from '../content'

function SpotlightTile({
  label,
  body,
}: {
  label: string
  body: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className="group relative bg-paperWarm p-8 md:p-10 overflow-hidden transition-transform duration-500 hover:-translate-y-[2px]"
      style={{ ['--mx' as string]: '50%', ['--my' as string]: '50%' } as React.CSSProperties}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(220px circle at var(--mx) var(--my), rgba(176, 141, 79, 0.14), transparent 65%)',
        }}
      />
      <div className="relative">
        <p className="eyebrow mb-6">{label}</p>
        <p className="font-display text-[20px] leading-[1.25] tracking-tightish text-ink md:text-[22px]">
          {body}
        </p>
        <span
          aria-hidden="true"
          className="mt-6 block h-px w-8 bg-brass origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
        />
      </div>
    </div>
  )
}

export default function Positioning() {
  return (
    <section id="positioning" className="bg-paperWarm text-ink">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-36">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-6">
            <p className="eyebrow mb-8">{positioning.eyebrow}</p>
            <h2 className="font-display text-[36px] leading-[1.08] tracking-tightish sm:text-[44px] md:text-[52px]">
              {positioning.heading}
            </h2>
          </div>
          <div className="md:col-span-6 md:pt-6">
            <p className="max-w-prose65 text-[17px] leading-relaxed text-ink/80">
              {positioning.body}
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-4 border border-line">
          {positioning.blocks.map((b) => (
            <SpotlightTile key={b.label} label={b.label} body={b.body} />
          ))}
        </div>
      </div>
    </section>
  )
}
