/*
  Supporting photography for the marketing page.

  All URLs go directly to Unsplash's public CDN (images.unsplash.com). We do
  not use plus.unsplash.com — those are Unsplash+ premium assets that carry a
  watermark for non-subscribers.

  Photographer credits below are kept in code so a future maintainer can
  build an on-page credits screen without hunting for URLs.

  Treatment rules (from the brief):
  - Desaturate toward the palette and/or overlay a deep-green scrim at 70–85%.
  - Hard rectangles, no rounded corners, no drop shadows.
  - If text sits over an image, scrim must be 80% or higher.
  - No more than four supporting images across the whole page (this is the four).
*/

const IX = '?auto=format&fit=crop&w=2000&q=72'

export const stockImages = {
  arcade: {
    src: `https://images.unsplash.com/photo-1781973358123-3450d3093bd4${IX}`,
    alt:
      'A historic courtyard with an arched arcade and a patterned stone floor, evocative of old Damascus.',
    credit: 'Photo: Laila H on Unsplash',
    creditUrl: 'https://unsplash.com/photos/HYKWC2OtQrU',
  },
  hands: {
    src: `https://images.unsplash.com/photo-1547609434-b732edfee020${IX}`,
    alt:
      'A craftsman at work in a wood workshop, cutting a plank by hand — documentary treatment.',
    credit: 'Photo: Will Suddreth on Unsplash',
    creditUrl: 'https://unsplash.com/photos/o54RjF-C7xo',
  },
  builders: {
    src: `https://images.unsplash.com/photo-1522071820081-009f0129c71c${IX}`,
    alt:
      'A small group of people working together around laptops, gathered close to a shared table.',
    credit: 'Photo: Annie Spratt on Unsplash',
    creditUrl: 'https://unsplash.com/photos/QckxruozjRg',
  },
} as const

export type StockImage = (typeof stockImages)[keyof typeof stockImages]
