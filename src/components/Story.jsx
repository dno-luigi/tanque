import { story } from '../content/site.js'
import { SectionHead } from './Shared.jsx'

export default function Story() {
  return (
    <section className="section" id="story">
      <div className="wrap">
        <SectionHead number={story.number} eyebrow={story.eyebrow} title={story.title} />

        <div className="story-grid">
          <aside className="story-aside reveal">
            <p className="pull">{story.pull}</p>
            <div className="aside-meta">
              <span>
                Custody <strong>5 years, 8 months</strong>
              </span>
              <span>
                Conviction <strong>standing</strong>
              </span>
              <span>
                Next filing <strong>motion to vacate</strong>
              </span>
            </div>
          </aside>

          <div className="prose reveal">
            {story.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
