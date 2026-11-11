import { timeline } from '../content/site.js'
import { SectionHead } from './Shared.jsx'

function tagClass(tag) {
  if (tag === 'Open') return 'tag is-open'
  if (tag === 'Contested') return 'tag is-contested'
  return 'tag'
}

export default function Timeline() {
  return (
    <section className="section" id="timeline">
      <div className="wrap">
        <SectionHead
          number={timeline.number}
          eyebrow={timeline.eyebrow}
          title={timeline.title}
          intro={timeline.intro}
        />

        <ol className="tl">
          {timeline.events.map((event, i) => (
            <li className="tl-item reveal" key={event.marker} style={{ '--i': i }}>
              <div className="tl-marker">{event.marker}</div>
              <div className="tl-rail" aria-hidden="true">
                <span className="tl-dot" />
              </div>
              <div className="tl-body">
                <h3>{event.title}</h3>
                <p>{event.body}</p>
                <span className={tagClass(event.tag)}>{event.tag}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
