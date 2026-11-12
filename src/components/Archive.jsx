import { archive, ui } from '../content/active.js'
import { SectionHead } from './Shared.jsx'
import docketText from '../../docs/FVI802230-case-summary.txt?raw'

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
            {ui.archive.footCertified
              .replace('{held}', String(held))
              .replace('{total}', String(archive.docs.length))}
          </span>
          <span>{ui.archive.footUpdated}</span>
        </div>

        <div className="docket reveal" id="docket">
          <div className="docket-head">
            <p className="section-num">
              {archive.number} <span className="slash">/</span> {ui.docket.eyebrow}
            </p>
            <h3 className="docket-title">{ui.docket.title}</h3>
            <p className="docket-note">{ui.docket.note}</p>
          </div>

          <details className="docket-details">
            <summary>{ui.docket.open}</summary>
            <pre className="docket-text" tabIndex={0}>
              {docketText}
            </pre>
          </details>

          <p className="docket-actions">
            <a href={ui.docket.file} download>
              {ui.docket.download}
            </a>
            <span className="docket-meta">{ui.docket.meta}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
