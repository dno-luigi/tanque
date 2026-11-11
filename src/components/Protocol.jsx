import { protocol } from '../content/site.js'
import { SectionHead } from './Shared.jsx'

export default function Protocol() {
  return (
    <section className="section" id="protocol">
      <div className="wrap">
        <SectionHead
          number={protocol.number}
          eyebrow={protocol.eyebrow}
          title={protocol.title}
          intro={protocol.intro}
        />

        <div className="protocol-list">
          {protocol.rules.map((rule, i) => (
            <div className="rule reveal" key={rule.n} style={{ '--i': i }}>
              <span className="rule-n">{rule.n}</span>
              <p className="rule-statement">{rule.statement}</p>
              <p className="rule-detail">{rule.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
