import { useState } from 'react'
import { phases, ui } from '../content/active.js'
import { SectionHead } from './Shared.jsx'

export default function Phases() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section" id="plan">
      <div className="wrap">
        <SectionHead
          number={phases.number}
          eyebrow={phases.eyebrow}
          title={phases.title}
          intro={phases.intro}
        />

        <div className="phases">
          {phases.items.map((phase, i) => {
            const isOpen = open === i
            return (
              <article className={`phase reveal${isOpen ? ' is-open' : ''}`} key={phase.n}>
                <h3>
                  <button
                    type="button"
                    className="phase-head"
                    aria-expanded={isOpen}
                    aria-controls={`phase-body-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span className="phase-n" aria-hidden="true">
                      {phase.n}
                    </span>
                    <span className="phase-titles">
                      <span className="phase-kicker">
                        {ui.phases.label} {phase.n} · {phase.kicker}
                      </span>
                      <span className="phase-title">{phase.title}</span>
                    </span>
                    <span className="phase-plus" aria-hidden="true" />
                  </button>
                </h3>

                <div className="phase-body" id={`phase-body-${i}`}>
                  <div className="phase-inner">
                    <div className="phase-content">
                      <p className="phase-summary">{phase.summary}</p>
                      <ul className="phase-list">
                        {phase.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                      <p className="phase-output">
                        <span>{ui.phases.output}</span>
                        {phase.output}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
