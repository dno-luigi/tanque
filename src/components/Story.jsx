import { story, ui } from '../content/active.js'
import { SectionHead } from './Shared.jsx'

export default function Story() {
  return (
    <section className="section" id="story">
      <div className="wrap">
        <SectionHead
          number={story.number}
          eyebrow={story.eyebrow}
          title={story.title}
          intro={story.intro}
        />

        <div className="story-grid">
          <aside className="story-aside reveal">
            {story.pull ? <p className="pull">{story.pull}</p> : null}
            <div className="aside-meta">
              <span>
                {ui.story.custody} <strong>{ui.story.custodyValue}</strong>
              </span>
              <span>
                {ui.story.conviction} <strong>{ui.story.convictionValue}</strong>
              </span>
              <span>
                {ui.story.nextFiling} <strong>{ui.story.nextFilingValue}</strong>
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
