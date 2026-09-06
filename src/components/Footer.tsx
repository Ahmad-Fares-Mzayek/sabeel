import { Link } from 'react-router-dom'
import Logo from './Logo'
import { footer } from '../content'

export default function Footer() {
  return (
    <footer className="bg-greenDeep text-paper">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <Logo variant="full" />
            <p className="mt-8 max-w-xs text-[15px] leading-relaxed text-paper/70">
              {footer.tagline}
            </p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.heading} className="md:col-span-3">
              <p className="eyebrow mb-6">{col.heading}</p>
              <ul className="space-y-3 text-[14px]">
                {col.links.map((l) =>
                  l.href.startsWith('/') ? (
                    <li key={l.label}>
                      <Link to={l.href} className="text-paper/80 hover:text-paper">
                        {l.label}
                      </Link>
                    </li>
                  ) : (
                    <li key={l.label}>
                      <a href={l.href} className="text-paper/80 hover:text-paper">
                        {l.label}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
          ))}

          <div className="md:col-span-1" />
        </div>

        <div className="mt-16 border-t border-lineDark pt-8 flex flex-wrap items-center justify-between gap-4">
          <nav className="flex flex-wrap gap-6 text-[11px] uppercase tracking-eyebrow">
            <Link
              to="/privacy"
              className="text-paper/60 hover:text-brass transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-paper/60 hover:text-brass transition-colors"
            >
              Terms
            </Link>
          </nav>
          <p className="text-[11px] uppercase tracking-eyebrow text-paper/40">
            © {new Date().getFullYear()} Sabeel
          </p>
        </div>
      </div>
    </footer>
  )
}
