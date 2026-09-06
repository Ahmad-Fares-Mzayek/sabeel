type Props = {
  variant?: 'mark' | 'header' | 'full'
  className?: string
}

export default function Logo({ variant = 'mark', className = '' }: Props) {
  const Mark = (
    <svg
      viewBox="0 0 100 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-auto"
    >
      <path d="M22 128 L22 60" stroke="currentColor" strokeWidth="13" />
      <path d="M78 128 L78 60" stroke="currentColor" strokeWidth="13" />
      <path
        d="M22 54 A28 28 0 0 1 78 54"
        stroke="currentColor"
        strokeWidth="13"
        fill="none"
      />
    </svg>
  )

  if (variant === 'mark') {
    return (
      <span className={`inline-block ${className}`} aria-label="Sabeel">
        {Mark}
      </span>
    )
  }

  if (variant === 'header') {
    return (
      <span className={`inline-flex items-center gap-3 ${className}`} aria-label="Sabeel">
        <span className="h-7 w-auto">{Mark}</span>
        <span
          className="font-sans font-semibold text-[15px]"
          style={{ letterSpacing: '0.24em' }}
        >
          SABEEL
        </span>
      </span>
    )
  }

  return (
    <span className={`inline-flex items-center gap-4 ${className}`} aria-label="Sabeel">
      <span className="h-11 w-auto">{Mark}</span>
      <span className="flex flex-col leading-none">
        <span
          className="font-sans font-semibold text-[18px]"
          style={{ letterSpacing: '0.24em' }}
        >
          SABEEL
        </span>
        <span
          className="font-arabic text-brass mt-2"
          style={{ fontSize: '15px' }}
        >
          سبيل
        </span>
      </span>
    </span>
  )
}
