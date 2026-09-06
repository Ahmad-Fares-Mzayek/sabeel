import { useEffect, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

type Props = {
  eyebrow: string
  title: string
  effective: string
  children: ReactNode
}

export default function LegalPage({ eyebrow, title, effective, children }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col">
      <header className="border-b border-line">
        <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6 md:px-10">
          <Link to="/" aria-label="Sabeel home" className="focus:outline-none">
            <Logo variant="header" />
          </Link>
          <Link to="/" className="link-underline text-[13px] font-medium">
            Back to home
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-20 md:px-10 md:py-28">
          <p className="eyebrow mb-6">{eyebrow}</p>
          <h1 className="font-display text-[38px] leading-[1.1] tracking-tightish md:text-[52px]">
            {title}
          </h1>
          <p className="mt-6 text-[11px] uppercase tracking-eyebrow text-grey">
            Effective {effective}
          </p>

          <article className="mt-14 space-y-12 text-[15px] leading-relaxed text-ink/85">
            {children}
          </article>
        </div>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto max-w-content px-6 md:px-10 py-8 flex flex-wrap items-center justify-between gap-4">
          <nav className="flex flex-wrap gap-6 text-[11px] uppercase tracking-eyebrow">
            <Link to="/" className="text-grey hover:text-brass transition-colors">
              Home
            </Link>
            <Link
              to="/privacy"
              className="text-grey hover:text-brass transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-grey hover:text-brass transition-colors"
            >
              Terms
            </Link>
          </nav>
          <p className="text-[11px] uppercase tracking-eyebrow text-grey">
            © {new Date().getFullYear()} Sabeel
          </p>
        </div>
      </footer>
    </div>
  )
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string
  children: ReactNode
}) {
  return (
    <section>
      <h2 className="font-display text-[22px] leading-tight tracking-tightish text-ink md:text-[26px]">
        {heading}
      </h2>
      <div className="mt-5 space-y-4">{children}</div>
    </section>
  )
}
