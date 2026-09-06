import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

export default function Writing() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="border-b border-line">
        <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6 md:px-10">
          <Link to="/" aria-label="Sabeel home">
            <Logo variant="header" />
          </Link>
          <Link to="/" className="link-underline text-[13px] font-medium">
            Back to home
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-40">
        <p className="eyebrow mb-8">Writing</p>
        <h1 className="font-display text-[44px] leading-[1.05] tracking-tightish md:text-[64px]">
          Public writing from the Academy.
        </h1>
        <p className="mt-8 max-w-prose65 text-[17px] leading-relaxed text-ink/80">
          A running index of essays, workshops and the annual State of Syrian Tech report.
          Nothing published yet. First pieces arrive with the opening cohort.
        </p>
        <ul className="mt-16 divide-y divide-line border-y border-line">
          {[1, 2, 3].map((i) => (
            <li key={i} className="flex items-baseline justify-between gap-6 py-6">
              <span className="font-display text-[22px] text-ink/40">Forthcoming</span>
              <span className="text-[12px] uppercase tracking-wider text-grey">2026</span>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
