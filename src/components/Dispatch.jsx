import { useState } from 'react'
import { dispatch, site } from '../content/site.js'

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    try {
      const area = document.createElement('textarea')
      area.value = text
      area.setAttribute('readonly', '')
      area.style.position = 'fixed'
      area.style.opacity = '0'
      document.body.appendChild(area)
      area.select()
      const ok = document.execCommand('copy')
      document.body.removeChild(area)
      return ok
    } catch {
      return false
    }
  }
}

export default function Dispatch() {
  const [copied, setCopied] = useState('')
  const [failed, setFailed] = useState(false)

  const shareLink = async () => {
    const url = site.canonicalUrl || window.location.origin + window.location.pathname
    const ok = await copyText(url)
    setFailed(!ok)
    setCopied(ok ? 'link' : '')
  }

  const shareSummary = async () => {
    const url = site.canonicalUrl || window.location.origin + window.location.pathname
    const ok = await copyText(`${dispatch.shareSummary}\n\n${site.name} — ${url}`)
    setFailed(!ok)
    setCopied(ok ? 'summary' : '')
  }

  const reset = () => {
    window.setTimeout(() => {
      setCopied('')
      setFailed(false)
    }, 2400)
  }

  const words = dispatch.title.replace(/\.$/, '').split(' ')
  const lastWord = words.pop()

  return (
    <section className="dispatch" id="dispatch">
      <div className="wrap">
        <div className="dispatch-head reveal">
          <p className="section-num">
            {dispatch.number} <span className="slash">/</span> {dispatch.eyebrow}
          </p>
          <h2>
            {words.join(' ')} <em>{lastWord}.</em>
          </h2>
          <p className="dispatch-body">{dispatch.body}</p>

          <div className="dispatch-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                shareSummary()
                reset()
              }}
            >
              Copy the summary
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => {
                shareLink()
                reset()
              }}
            >
              Copy the link
            </button>
            <a className="btn btn-ghost" href={`mailto:${site.contactEmail}?subject=${encodeURIComponent(site.name + ' — records and leads')}`}>
              Email the record
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </a>
            <span className="copy-state" role="status" aria-live="polite">
              {failed
                ? 'Copy failed — select manually'
                : copied === 'link'
                  ? 'Link copied'
                  : copied === 'summary'
                    ? 'Summary copied'
                    : ''}
            </span>
          </div>
        </div>

        <div className="needs">
          {dispatch.needs.map((need, i) => (
            <div className="need reveal" key={need.title} style={{ '--i': i }}>
              <h3>{need.title}</h3>
              <p>{need.detail}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
