import { immunity } from '../content/site.js'
import { SectionHead } from './Shared.jsx'

export default function Immunity() {
  return (
    <section className="section" id="immunity">
      <div className="wrap">
        <SectionHead
          number={immunity.number}
          eyebrow={immunity.eyebrow}
          title={immunity.title}
          intro={immunity.intro}
        />

        <div className="immunity-grid">
          {immunity.cards.map((card, i) => (
            <article
              className={`immune reveal${card.canPierce ? ' can-pierce' : ''}`}
              key={card.title}
              style={{ '--i': i }}
            >
              <span className="immune-kind">{card.kind}</span>
              <h3>{card.title}</h3>
              <span className="immune-scope">{card.scope}</span>
              <p className="immune-body">{card.body}</p>
              <p className="immune-note">{card.note}</p>
            </article>
          ))}
        </div>

        <blockquote className="takeaway reveal">
          <span>The sentence that matters</span>
          &ldquo;{immunity.takeaway}&rdquo;
        </blockquote>
      </div>
    </section>
  )
}
