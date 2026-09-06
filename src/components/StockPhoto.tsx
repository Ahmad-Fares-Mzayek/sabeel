import type { ReactNode } from 'react'
import type { StockImage } from '../content/images'

type Props = {
  image: StockImage
  /** 0–1. 0.35–0.55 for decorative, 0.8+ when text sits over the image. */
  scrim?: number
  /** Tailwind aspect-ratio classes, or empty for intrinsic. Defaults to 21:9 banner. */
  aspect?: string
  /** Optional overlay content — rendered above the scrim. Requires scrim ≥ 0.8. */
  overlay?: ReactNode
  /** Overlay text alignment inside the image. */
  align?: 'start' | 'center' | 'end'
  className?: string
}

export default function StockPhoto({
  image,
  scrim = 0.5,
  aspect = 'aspect-[21/9]',
  overlay,
  align = 'start',
  className = '',
}: Props) {
  if (overlay && scrim < 0.8) {
    // Enforce brief rule: text over image requires scrim ≥ 80%.
    scrim = 0.8
  }

  const alignItems =
    align === 'center' ? 'items-center' : align === 'end' ? 'items-end' : 'items-start'

  return (
    <figure className={`relative overflow-hidden bg-greenDeep ${aspect} ${className}`}>
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: 'saturate(0.55) contrast(1.02) brightness(0.92)' }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(12, 42, 36, ${scrim})` }}
      />
      {overlay && (
        <div className={`relative z-10 h-full flex ${alignItems}`}>
          <div className="w-full">{overlay}</div>
        </div>
      )}
      <figcaption className="sr-only">
        {image.alt} {image.credit}
      </figcaption>
    </figure>
  )
}
