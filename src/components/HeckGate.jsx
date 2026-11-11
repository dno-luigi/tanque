import { useState } from 'react'
import { heck } from '../content/site.js'
import { SectionHead } from './Shared.jsx'

export default function HeckGate() {
  const [open, setOpen] = useState(false)

  return (
    <section className="section" id="gate">
      <div className="wrap">
        <SectionHead number={heck.number} eyebrow={heck.eyebrow} title={heck.title} />

        <div className="gate-grid">
          <div className="gate-copy reveal">
            {heck.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            <p className="cite">{heck.citation}</p>
          </div>

          <div className={`gate-panel reveal${open ? ' is-open' : ''}`}>
            <div className="gate-toggle" role="group" aria-label="Status of the criminal conviction">
              <button type="button" aria-pressed={!open} onClick={() => setOpen(false)}>
                {heck.closedLabel}
              </button>
              <button type="button" aria-pressed={open} onClick={() => setOpen(true)}>
                {heck.openLabel}
              </button>
            </div>

            <div className="gate-visual">
              <div className="gate-status">
                <span className="gate-status-label">42 U.S.C. § 1983</span>
                <span className="gate-status-value">{open ? heck.openState : heck.closedState}</span>
              </div>
              <div className="gate-door" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </div>

            <p className="gate-note" aria-live="polite">
              {open ? heck.openNote : heck.closedNote}
            </p>

            <ul className="keys">
              {heck.keys.map((key) => (
                <li className="key" key={key.title}>
                  <span className="key-icon" aria-hidden="true" />
                  <div>
                    <strong>{key.title}</strong>
                    <p>{key.detail}</p>
                  </div>
                  {key.ours ? <span className="key-ours">Our route</span> : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
