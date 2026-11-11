import { archive } from '../content/site.js'
import { SectionHead } from './Shared.jsx'

export default function Archive() {
  const held = archive.docs.filter((doc) => doc.status === 'held').length

  return (
    <section className="section" id="archive">
      <div className="wrap">
        <SectionHead
          number={archive.number}
          eyebrow={archive.eyebrow}
          title={archive.title}
          intro={archive.intro}
        />

        <div className="archive-grid">
          {archive.docs.map((doc, i) => (
            <article
              className={`doc reveal${doc.status === 'missing' ? ' is-missing' : ''}`}
              key={doc.title}
              style={{ '--i': i }}
            >
              <div className="doc-top">
                <span className="doc-type">{doc.type}</span>
                <span className={`chip ${doc.status}`}>{archive.statusLabels[doc.status]}</span>
              </div>
              <h3>{doc.title}</h3>
              <p className="doc-note">{doc.note}</p>
            </article>
          ))}
        </div>

        <div className="archive-foot">
          <span>
            {held} of {archive.docs.length} documents certified and published
          </span>
          <span>Last updated on publication of each record · no unverified uploads</span>
        </div>
      </div>
    </section>
  )
}
