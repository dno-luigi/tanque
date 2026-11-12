import { deal } from '../content/active.js'
import { SectionHead } from './Shared.jsx'

export default function Deal() {
  return (
    <section className="section" id="deal">
      <div className="wrap">
        <SectionHead number={deal.number} eyebrow={deal.eyebrow} title={deal.title} />

        <div className="prose reveal">
          {deal.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="floor reveal">
          <div className="floor-head">
            <p className="floor-title">{deal.rulesTitle}</p>
          </div>
          <ul className="floor-rules">
            {deal.rules.map((rule) => (
              <li key={rule.cite}>
                <strong>{rule.cite}</strong>
                <span>{rule.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
