import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { nav } from '../content'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = nav.map((n) => n.href.replace('#', ''))
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => !!n)
    if (!targets.length) return

    const io = new IntersectionObserver(
      (entries) => {
        // pick the entry with the largest intersection ratio currently visible
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(`#${(visible.target as HTMLElement).id}`)
      },
      {
        // section counts as "active" when its top is between 15% and 55% down the viewport
        rootMargin: '-15% 0px -45% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [])

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled
          ? 'bg-paper/95 backdrop-blur-sm border-b border-line text-ink'
          : 'bg-transparent text-paper border-b border-transparent',
      ].join(' ')}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6 md:px-10">
        <Link to="/" aria-label="Sabeel home" className="focus:outline-none group">
          <span className="inline-block transition-transform duration-500 group-hover:-translate-y-[1px]">
            <Logo variant="header" />
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium">
          {nav.slice(0, 5).map((item) => {
            const isActive = active === item.href
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'true' : undefined}
                className={[
                  'relative py-2 transition-opacity duration-200',
                  isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100',
                ].join(' ')}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={[
                    'absolute left-0 right-0 -bottom-[3px] h-[1px] bg-brass origin-left transition-transform duration-300',
                    isActive ? 'scale-x-100' : 'scale-x-0',
                  ].join(' ')}
                />
              </a>
            )
          })}
          <a
            href="#join"
            className="btn-outline"
            style={{ padding: '10px 18px', fontSize: '13px' }}
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  )
}
