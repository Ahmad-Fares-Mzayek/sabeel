export const nav = [
  { href: '#name', label: 'The name' },
  { href: '#thesis', label: 'Thesis' },
  { href: '#model', label: 'Model' },
  { href: '#lines', label: 'Three lines' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#join', label: 'Join' },
]

export const hero = {
  eyebrow: 'A venture studio in Syria',
  headline: 'The talent is already here.',
  subline: 'Almost nothing else is.',
  body:
    'Sabeel finds young Syrian engineers, backs them with a stipend so they can build full time, and turns the strongest of them into founders of real companies.',
  primary: { href: '#model', label: 'How it works' },
  secondary: { href: '#join', label: 'For investors' },
}

export const name = {
  eyebrow: 'The name',
  arabic: 'سبيل',
  definitionLabel: 'sa·beel',
  definition:
    'noun. Arabic. A public drinking fountain endowed for the free use of any passer-by. Also: a path, a way, a means to an end.',
  heading: 'Something given, not extracted.',
  paragraphs: [
    'In old Damascus, wealthy citizens built sabeels into the walls of their streets, small stone niches with cold water, free to anyone who stopped. Endowed once, drawn from forever.',
    'The word carries a second meaning: a route forward, a way through. Both readings are intentional. Something given rather than taken. And a path for people who did not have one before.',
  ],
  quote:
    'Every founder we back keeps the majority of what they build. We are paid when the company works, not before.',
}

export type ThesisItem = {
  numeral: string
  title: string
  body: string
  figure?: { gulf: string; syria: string; note: string }
}

export const thesis: { eyebrow: string; heading: string; items: ThesisItem[] } = {
  eyebrow: 'The thesis',
  heading: 'Three differences in Syria, right now.',
  items: [
    {
      numeral: 'I',
      title: 'Cost',
      body:
        'Eighty thousand dollars builds a real company in Syria: a small team, eighteen months of runway, infrastructure, and a product in market. The same figure buys a single senior engineer for one year in the Gulf. The gap closes as the economy normalises.',
      figure: {
        gulf: '$80,000 · One senior engineer, one year, in the Gulf.',
        syria: '$80,000 · A full team, eighteen months, a product in market, in Syria.',
        note: 'The window on this arithmetic is measured in years, not decades.',
      },
    },
    {
      numeral: 'II',
      title: 'Talent',
      body:
        'A generation of Syrian engineers learned to build under constraint, without reliable power, capital or tools. With current AI tooling they can ship production software at a fraction of the team size once required. Very few have ever been paid to build something of their own.',
    },
    {
      numeral: 'III',
      title: 'Timing',
      body:
        'Syria’s Ministry of Communications and Information Technology published the National Agenda for Startups in January 2026, covering 2025 to 2030, with six pillars, twenty eight strategies and a planned national fund of funds. The institutions that will define Syrian technology for two decades are being formed now, with almost no incumbents.',
    },
  ],
}

export const model = {
  eyebrow: 'The model',
  heading: 'One loop, run continuously.',
  intro:
    'Academy finds the people. Studio builds with them. Capital funds what comes out. Results fund and fill the next cohort.',
  steps: [
    {
      label: 'Academy',
      body:
        'Free public workshops and bootcamps.',
    },
    {
      label: 'Studio',
      body:
        'A small number of exceptional engineers on a stipend, building full time. Shipping every week.',
    },
    {
      label: 'Capital',
      body:
        'When a company is ready, founders get a shot at seeing their dream through.',
    },
  ],
  returnLabel: 'Results fund and fill the next cohort',
}

export type WhatRow = { kind: string; origin: string; sabeel: string }

export const what = {
  eyebrow: 'What we are',
  heading: 'A venture studio now, a venture capital later.',
  intro:
    'A studio stands at the birth of the company, not the end of one. Everything else can be built on top once the studio works.',
  columns: ['Model', 'Where the company comes from', 'Where Sabeel sits'],
  rows: [
    {
      kind: 'Incubator',
      origin: 'A founder arrives with an idea and a team.',
      sabeel: 'Phase two.',
    },
    {
      kind: 'Accelerator',
      origin: 'A founder arrives with traction and needs a push.',
      sabeel: 'Long term.',
    },
    {
      kind: 'Venture capital',
      origin: 'A founder arrives with a company that already exists.',
      sabeel: 'Not yet.',
    },
    {
      kind: 'Venture studio',
      origin: 'The company is originated inside the studio, with the studio’s team and method.',
      sabeel: 'Today.',
    },
  ],
}

export const lines = {
  eyebrow: 'Three lines',
  heading: 'Lines of Service',
  tabs: [
    {
      key: 'studio',
      label: 'Studio',
      title: 'A small number of engineers, paid to build.',
      body:
        'A handful of exceptional young Syrian engineers on a stipend, building full time instead of taking whatever work pays. They ship every week, in the open. The individual products are not the point, the cadence is.',
      points: [
        'Stipend for eighteen months, no equity taken from the builder for the stipend itself.',
        'Every shipped thing is a portfolio entry for the builder and a proof of method for Sabeel.',
        'The strongest of these become founders of real companies.',
      ],
    },
    {
      key: 'academy',
      label: 'Academy',
      title: 'A ladder, not a course.',
      body:
        'Free public workshops on what a startup actually is, what incubators and accelerators do, what equity costs you. A founder bootcamp teaching people to direct AI to build real software rather than to code from scratch. A national priority with almost no domestic supply.',
      points: [
        'Public workshops, open to anyone.',
        'Founder bootcamp on shipping with AI as the default tool.',
        'Continuous public writing and convening.',
      ],
    },
    {
      key: 'capital',
      label: 'Capital',
      title: 'One company at a time.',
      body:
        'When a company inside the studio is ready, the investment is assembled for that specific company and investors decide one company at a time. The investment builds up the company.',
      points: [
        'Sabeel holds founding equity for originating and building.',
        'Investor cheques go to the company to grow it.',
      ],
    },
  ],
}

export const positioning = {
  eyebrow: 'Positioning',
  heading: 'We are not entering an existing market. We are building a new one.',
  body:
    'The demand, the vocabulary, the norms and most of the institutions do not exist yet in Syria and have to be created before anyone can compete over them. The founders have operated outside, building and selling technology in the Gulf and internationally, and are bringing that inside, plainly and in Arabic.',
  blocks: [
    { label: 'What we bring in', body: 'Strategy, tools, and the knowledge of shipping learned outside.' },
    { label: 'What we publish', body: 'Curriculums, courses, and industry reports.' },
    { label: 'What we hold', body: 'Workshops, cohorts, and the room where the institutions get discussed.' },
    { label: 'What it adds up to', body: 'The right to originate companies before the market for them exists.' },
  ],
}

export const roadmap = {
  eyebrow: 'Roadmap',
  heading: 'A studio today. A full institution by the end of the decade.',
  stages: [
    {
      year: '2026',
      title: 'Establish',
      body: 'First studio cohort, first public workshops, first dedicated investment vehicle.',
    },
    {
      year: '2027',
      title: 'Prove',
      body:
        'Incubation opens as a second primary line, running alongside the studio. First graduates find outside capital.',
    },
    {
      year: '2028',
      title: 'Compound',
      body:
        'Incubation at full scale. Studio companies compounding on early proof. Academy scaled through partners.',
    },
    {
      year: '2029–30',
      title: 'Institutionalise',
      body:
        'A structured accelerator with a cheque attached. The full stack of Syrian technology institutions, running in public.',
    },
  ],
}

export const principles = {
  eyebrow: 'Principles',
  heading: 'How we work, in five sentences.',
  items: [
    {
      title: 'Pay or take equity. Never both quietly.',
      body: 'If we are paying you, we are paying you. If we are your partner, we say so.',
    },
    {
      title: 'Build in public. Including the failures.',
      body: 'Weekly shipping, weekly writing, and a public log of what did not work.',
    },
    {
      title: 'The founder keeps the majority.',
      body: 'The person who builds the company owns the company. Sabeel is a co-founder, not a landlord.',
    },
    {
      title: 'Separate the public good from the portfolio.',
      body: 'The workshops are free and stay free. It is not a funnel for the studio, though it feeds it.',
    },
    {
      title: 'Say it like it is.',
      body: 'We do not describe the country, the market, or ourselves as more finished than we are.',
    },
  ],
}

export const join = {
  eyebrow: 'Join',
  heading: 'Two ways in.',
  builder: {
    tag: 'You build',
    title: 'If you build and want to be paid to build your own thing.',
    body:
      'Tell us what you have shipped, what you are working on now, and what you would build if the stipend covered eighteen months.',
    cta: { label: 'Apply as a builder', href: 'mailto:builders@sabeel.example?subject=Sabeel%20builder%20application' },
    fields: [
      { label: 'Name', type: 'text' },
      { label: 'Email', type: 'email' },
      { label: 'A link to something you built', type: 'url' },
      { label: 'What you would build if we said yes', type: 'textarea' },
    ],
  },
  investor: {
    tag: 'You invest',
    title: 'If you back companies, see the ones coming out of Syria first.',
    body:
      'You see the deal, the team, the terms, and decide one at a time. Fund the companies looking to shape the syrian tech future.',
    cta: { label: 'Get on the investor list', href: 'mailto:invest@sabeel.example?subject=Sabeel%20investor%20list' },
    fields: [
      { label: 'Name', type: 'text' },
      { label: 'Email', type: 'email' },
      { label: 'Firm or fund (optional)', type: 'text' },
      { label: 'Investment Budget and Interests', type: 'textarea' },
    ],
  },
  formNote:
    'TODO: wire these forms to a real endpoint. For now the buttons open a pre-addressed email.',
}

export const footer = {
  tagline: 'A venture studio in Syria.',
  contact: '[ CONTACT DETAILS PLACEHOLDER ]',
  columns: [
    {
      heading: 'Sections',
      links: [
        { href: '#name', label: 'The name' },
        { href: '#thesis', label: 'Thesis' },
        { href: '#model', label: 'Model' },
        { href: '#lines', label: 'Three lines' },
        { href: '#roadmap', label: 'Roadmap' },
        { href: '#principles', label: 'Principles' },
      ],
    },
    {
      heading: 'Elsewhere',
      links: [
        { href: '#join', label: 'For builders' },
        { href: '#join', label: 'For investors' },
      ],
    },
  ],
}
