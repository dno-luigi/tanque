import { facts } from '../content/site.js'
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
      </div>
    </section>
  )
}
