import { useState, type FormEvent } from 'react'
import { join } from '../content'
import { WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT } from '../config/web3forms'

type Field = { label: string; type: string }

const fieldName = (label: string) =>
  label
    .toLowerCase()
    .replace(/\s*\(.*?\)\s*/g, '')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '')

type Status = 'idle' | 'submitting' | 'success' | 'error'

function Path({
  tag,
  title,
  body,
  ctaLabel,
  subject,
  fields,
  tone,
}: {
  tag: string
  title: string
  body: string
  ctaLabel: string
  subject: string
  fields: Field[]
  tone: 'light' | 'dark'
}) {
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState<string>('')

  const isDark = tone === 'dark'
  const inputBase = isDark
    ? 'bg-transparent border border-lineDark text-paper placeholder-paper/40 focus:border-brass'
    : 'bg-transparent border border-line text-ink placeholder-grey focus:border-brass'

  const isBusy = status === 'submitting'
  const isSuccess = status === 'success'

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (isBusy) return
    setStatus('submitting')
    setMessage('')

    const formEl = e.currentTarget
    const fd = new FormData(formEl)

    // Honeypot: any bot that fills every field will trip this.
    if ((fd.get('botcheck') as string)?.length) {
      setStatus('success') // silently accept, spammer never learns
      formEl.reset()
      return
    }

    fd.append('access_key', WEB3FORMS_ACCESS_KEY)
    fd.append('subject', subject)
    fd.append('from_name', `Sabeel — ${tag}`)

    const payload: Record<string, string> = {}
    fd.forEach((v, k) => {
      payload[k] = typeof v === 'string' ? v : ''
    })

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setMessage('Thanks — we have it. Someone will read it and get back to you.')
        formEl.reset()
      } else {
        setStatus('error')
        setMessage(
          typeof data.message === 'string'
            ? data.message
            : 'Something went wrong. Please try again.',
        )
      }
    } catch {
      setStatus('error')
      setMessage('Network error. Please try again in a moment.')
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={[
        'p-8 md:p-12 h-full flex flex-col',
        isDark ? 'bg-greenDeep text-paper' : 'bg-paper text-ink border border-line',
      ].join(' ')}
    >
      <p className="eyebrow mb-6">{tag}</p>
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

      {isSuccess ? (
        <div
          className={[
            'mt-10 border p-6 flex-1 flex flex-col justify-center',
            isDark ? 'border-brass/60 text-paper' : 'border-brass/60 text-ink',
          ].join(' ')}
          role="status"
          aria-live="polite"
        >
          <p className="text-[11px] uppercase tracking-eyebrow text-brass">Received</p>
          <p className="mt-4 font-display text-[22px] leading-[1.25] tracking-tightish">
            {message}
          </p>
          <button
            type="button"
            onClick={() => {
              setStatus('idle')
              setMessage('')
            }}
            className="mt-8 self-start link-underline text-[13px] font-medium"
          >
            Send another
          </button>
        </div>
      ) : (
        <>
          <div className="mt-10 grid grid-cols-1 gap-5">
            {fields.map((f) => {
              const name = fieldName(f.label)
              const id = `${tag}-${name}`.toLowerCase().replace(/[^a-z0-9]+/g, '-')
              const required = f.label.toLowerCase().indexOf('optional') === -1
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
                      name={name}
                      rows={3}
                      required={required}
                      disabled={isBusy}
                      className={[
                        'w-full px-3 py-3 text-[14px] outline-none transition-opacity',
                        inputBase,
                        isBusy ? 'opacity-50' : '',
                      ].join(' ')}
                    />
                  ) : (
                    <input
                      id={id}
                      name={name}
                      type={f.type}
                      required={required}
                      disabled={isBusy}
                      className={[
                        'w-full px-3 py-3 text-[14px] outline-none transition-opacity',
                        inputBase,
                        isBusy ? 'opacity-50' : '',
                      ].join(' ')}
                    />
                  )}
                </div>
              )
            })}

            {/* Honeypot — hidden from real users, visible to naive bots */}
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
            />
          </div>

          {status === 'error' && (
            <p
              role="alert"
              className={[
                'mt-6 text-[13px] leading-relaxed',
                isDark ? 'text-brass' : 'text-brass',
              ].join(' ')}
            >
              {message}
            </p>
          )}

          <div className="mt-10 flex items-center gap-5">
            <button
              type="submit"
              disabled={isBusy}
              className={[
                'btn-outline transition-opacity',
                isDark ? 'text-paper' : 'text-ink',
                isBusy ? 'opacity-60 cursor-wait' : '',
              ].join(' ')}
            >
              {isBusy ? 'Sending…' : ctaLabel}
            </button>
            {isBusy && (
              <span
                className={[
                  'text-[11px] uppercase tracking-eyebrow',
                  isDark ? 'text-paper/60' : 'text-grey',
                ].join(' ')}
              >
                Please wait
              </span>
            )}
          </div>
        </>
      )}
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
            ctaLabel={join.builder.cta.label}
            subject="Sabeel — new builder application"
            fields={join.builder.fields}
            tone="light"
          />
          <Path
            tag={join.investor.tag}
            title={join.investor.title}
            body={join.investor.body}
            ctaLabel={join.investor.cta.label}
            subject="Sabeel — new investor enquiry"
            fields={join.investor.fields}
            tone="dark"
          />
        </div>
      </div>
    </section>
  )
}
