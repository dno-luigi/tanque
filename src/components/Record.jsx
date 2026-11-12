import { docket, ui } from '../content/active.js'
import { SectionHead } from './Shared.jsx'
import docketText from '../../docs/FVI802230-case-summary.txt?raw'

export default function Record() {
  return (
    <section className="section" id="record">
      <div className="wrap">
        <SectionHead number={docket.number} eyebrow={docket.eyebrow} title={docket.title} />

        <div className="docket reveal" id="docket">
          <div className="docket-head">
            <p className="docket-note">{docket.note}</p>
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
