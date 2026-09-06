import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Not found — Sabeel'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-greenDeep text-paper flex flex-col">
      <header className="border-b border-lineDark">
        <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6 md:px-10">
          <Link to="/" aria-label="Sabeel home" className="focus:outline-none">
            <Logo variant="header" />
          </Link>
          <Link to="/" className="link-underline text-[13px] font-medium">
            Back to home
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center">
        <div className="mx-auto max-w-content w-full px-6 py-20 md:px-10 md:py-28">
          <p className="eyebrow mb-8">404</p>
          <h1 className="font-display text-[64px] leading-[1.05] tracking-tightish md:text-[104px]">
            Nothing lives here.
          </h1>
          <p className="mt-10 max-w-prose65 text-[17px] leading-relaxed text-paper/75">
            The page you asked for does not exist, or it moved. Head back to
            the start.
          </p>
          <div className="mt-12">
            <Link to="/" className="btn-outline text-paper">
              Return home
            </Link>
          </div>
          <span className="rule-brass mt-20 block" aria-hidden="true" />
        </div>
      </main>
    </div>
  )
}
