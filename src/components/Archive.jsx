import { archive, ui } from '../content/active.js'
import { SectionHead } from './Shared.jsx'

export default function Archive() {
  const published = archive.docs.filter((doc) => doc.status === 'published').length

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
            {ui.archive.footPublished
              .replace('{held}', String(published))
              .replace('{total}', String(archive.docs.length))}
          </span>
          <span>{ui.archive.footUpdated}</span>
        </div>
      </div>
    </section>
  )
}
