import { useState } from 'react'
import { evidence, ui } from '../content/active.js'
import { SectionHead } from './Shared.jsx'

export default function Evidence() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section" id="record">
      <div className="wrap">
        <SectionHead
          number={evidence.number}
          eyebrow={evidence.eyebrow}
          title={evidence.title}
          intro={evidence.intro}
        />

        <div className="evidence">
          {evidence.rows.map((row, i) => {
            const isOpen = open === i
            return (
              <div className={`ev-row${isOpen ? ' is-open' : ''}`} key={row.entity}>
                <button
                  type="button"
                  className="ev-head"
                  aria-expanded={isOpen}
                  aria-controls={`ev-body-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="ev-num">0{i + 1}</span>
                  <span className="ev-entity">
                    <h3>{row.entity}</h3>
                    <p>{row.objective}</p>
                  </span>
                  <span className="ev-status">{row.status}</span>
                  <span className="ev-toggle" aria-hidden="true" />
                </button>

                <div className="ev-proof" id={`ev-body-${i}`}>
                  <div className="ev-proof-inner">
                    <p>
                      <span>{ui.evidence.proves}</span>
                      {row.proof}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
