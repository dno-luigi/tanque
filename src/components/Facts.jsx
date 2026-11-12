import { facts } from '../content/active.js'
import { SectionHead } from './Shared.jsx'

export default function Facts() {
  return (
    <section className="section" id="facts">
      <div className="wrap">
        <SectionHead number={facts.number} eyebrow={facts.eyebrow} title={facts.title} />

        <div className="facts-grid">
          {facts.items.map((fact, i) => (
            <article className="fact reveal" key={fact.n} style={{ '--i': i }}>
              <div className="fact-top">
                <span className="fact-n" aria-hidden="true">
                  {fact.n}
                </span>
                <h3>{fact.title}</h3>
              </div>
              <p className="fact-claim">{fact.claim}</p>
              <p className="fact-detail">{fact.detail}</p>
              <span className="fact-source">{fact.source}</span>
            </article>
          ))}
        </div>

        {facts.floor ? (
          <div className="floor reveal">
            <div className="floor-head">
              <p className="floor-title">{facts.floor.title}</p>
              <p className="floor-intro">{facts.floor.intro}</p>
            </div>
            <ul className="floor-rules">
              {facts.floor.rules.map((rule) => (
                <li key={rule.cite}>
                  <strong>{rule.cite}</strong>
                  <span>{rule.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  )
}
