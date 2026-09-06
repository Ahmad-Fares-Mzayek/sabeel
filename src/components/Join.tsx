import { join } from '../content'

type Field = { label: string; type: string }

function Path({
  tag,
  title,
  body,
  cta,
  fields,
  tone,
}: {
  tag: string
  title: string
  body: string
  cta: { label: string; href: string }
  fields: Field[]
  tone: 'light' | 'dark'
}) {
  const isDark = tone === 'dark'
  const inputBase = isDark
    ? 'bg-transparent border border-lineDark text-paper placeholder-paper/40 focus:border-brass'
    : 'bg-transparent border border-line text-ink placeholder-grey focus:border-brass'
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        window.location.href = cta.href
      }}
      className={[
        'p-8 md:p-12 h-full flex flex-col',
        isDark ? 'bg-greenDeep text-paper' : 'bg-paper text-ink border border-line',
      ].join(' ')}
    >
      <p className={['eyebrow mb-6', isDark ? '' : ''].join(' ')}>{tag}</p>
      <h3 className="font-display text-[26px] leading-[1.2] tracking-tightish md:text-[32px]">
        {title}
      </h3>
      <p
        className={[
          'mt-6 max-w-prose65 text-[15px] leading-relaxed',
          isDark ? 'text-paper/75' : 'text-ink/75',
        ].join(' ')}
      >
        {body}
      </p>

      <div className="mt-10 grid grid-cols-1 gap-5">
        {fields.map((f) => {
          const id = `${tag}-${f.label}`.toLowerCase().replace(/[^a-z0-9]+/g, '-')
          return (
            <div key={f.label} className="flex flex-col gap-2">
              <label
                htmlFor={id}
                className={[
                  'text-[11px] uppercase tracking-eyebrow',
                  isDark ? 'text-paper/60' : 'text-grey',
                ].join(' ')}
              >
                {f.label}
              </label>
              {f.type === 'textarea' ? (
                <textarea
                  id={id}
                  rows={3}
                  className={['w-full px-3 py-3 text-[14px] outline-none', inputBase].join(' ')}
                />
              ) : (
                <input
                  id={id}
                  type={f.type}
                  className={['w-full px-3 py-3 text-[14px] outline-none', inputBase].join(' ')}
                />
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-10">
        <button type="submit" className={['btn-outline', isDark ? 'text-paper' : 'text-ink'].join(' ')}>
          {cta.label}
        </button>
      </div>
    </form>
  )
}

export default function Join() {
  return (
    <section id="join" className="bg-paper text-ink">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-36">
        <div className="max-w-3xl">
          <p className="eyebrow mb-8">{join.eyebrow}</p>
          <h2 className="font-display text-[36px] leading-[1.08] tracking-tightish sm:text-[44px] md:text-[56px]">
            {join.heading}
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-2 md:gap-10">
          <Path
            tag={join.builder.tag}
            title={join.builder.title}
            body={join.builder.body}
            cta={join.builder.cta}
            fields={join.builder.fields}
            tone="light"
          />
          <Path
            tag={join.investor.tag}
            title={join.investor.title}
            body={join.investor.body}
            cta={join.investor.cta}
            fields={join.investor.fields}
            tone="dark"
          />
        </div>

        {/*
          TODO: Wire these forms to a real endpoint (e.g. Formspree / a hosted
          submission handler). For now the submit button opens a pre-addressed
          email so nothing is silently lost.
        */}
      </div>
    </section>
  )
}
