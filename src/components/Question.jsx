import { question } from '../content/active.js'
import { SectionHead } from './Shared.jsx'

export default function Question() {
  return (
    <section className="section" id="question">
      <div className="wrap">
        <SectionHead
          number={question.number}
          eyebrow={question.eyebrow}
          title={question.title}
        />

        <div className="prose reveal">
          {question.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
