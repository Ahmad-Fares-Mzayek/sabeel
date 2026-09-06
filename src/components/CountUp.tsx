import { useEffect, useRef, useState } from 'react'

type Props = {
  to: number
  from?: number
  duration?: number
  format?: (n: number) => string
  className?: string
}

const reduceMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function CountUp({
  to,
  from = 0,
  duration = 1200,
  format = (n) => Math.round(n).toString(),
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [value, setValue] = useState(reduceMotion() ? to : from)
  const started = useRef(false)

  useEffect(() => {
    if (reduceMotion() || started.current) return
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started.current) {
            started.current = true
            const start = performance.now()
            const step = (now: number) => {
              const t = Math.min(1, (now - start) / duration)
              // easeOutCubic
              const eased = 1 - Math.pow(1 - t, 3)
              setValue(from + (to - from) * eased)
              if (t < 1) requestAnimationFrame(step)
            }
            requestAnimationFrame(step)
            io.disconnect()
          }
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [from, to, duration])

  return (
    <span ref={ref} className={className}>
      {format(value)}
    </span>
  )
}
