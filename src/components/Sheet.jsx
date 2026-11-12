import { sections, ui } from '../content/active.js'
import { SectionHead } from './Shared.jsx'
import docketText from '../../docs/FVI802230-case-summary.txt?raw'

function Paragraph({ block }) {
  return <p className={block.strong ? 'is-strong' : undefined}>{block.text}</p>
}

function Quote({ block }) {
  return <blockquote className="sheet-quote">{block.text}</blockquote>
}

function Table({ block }) {
  return (
    <div className="sheet-table-wrap">
      <table className="sheet-table">
        <thead>
          <tr>
            {block.head.map((cell) => (
              <th key={cell} scope="col">
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Timeline({ block }) {
  return (
    <ol className="tl">
      {block.rows.map((row, i) => (
        <li className="tl-item reveal" key={i} style={{ '--i': i }}>
          <div className="tl-marker">{row[0]}</div>
          <div className="tl-rail" aria-hidden="true">
            <span className="tl-dot" />
          </div>
          <div className="tl-body">
            <p>{row[1]}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

function Groups({ block }) {
  return (
    <div className="needs sheet-needs">
      {block.groups.map((group, i) => (
        <div className="need reveal" key={group.title} style={{ '--i': i }}>
          <h3>{group.title}</h3>
          <ul>
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

function Cards({ block }) {
  return (
    <div className="archive-grid">
      {block.items.map((item, i) => (
        <article className="doc reveal" key={item} style={{ '--i': i }}>
          <div className="doc-top">
            <span className="doc-type">{String(i + 1).padStart(2, '0')}</span>
          </div>
          <h3>{item}</h3>
        </article>
      ))}
    </div>
  )
}

function Badge({ block }) {
  return <p className="sheet-badge">{block.text}</p>
}

function Sign({ block }) {
  return (
    <div className="sheet-sign">
      {block.lines.map((line) => (
        <span key={line}>{line}</span>
      ))}
    </div>
  )
}

function Docket({ block }) {
  return (
    <div className="docket reveal">
      <div className="docket-head">
        <p className="section-num">{block.label}</p>
      </div>

      <details className="docket-details">
        <summary>{block.label}</summary>
        <pre className="docket-text" tabIndex={0}>
          {docketText}
        </pre>
      </details>

      <p className="docket-actions">
        <a href={ui.docket.file} download>
          {ui.docket.download}
        </a>
        <span className="docket-meta">{block.meta}</span>
      </p>
    </div>
  )
}

function OrderedList({ block }) {
  return (
    <ol className="sheet-list">
      {block.items.map((item, i) => (
        <li key={item}>
          <span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
          {item}
        </li>
      ))}
    </ol>
  )
}

function Block({ block, sectionId }) {
  switch (block.type) {
    case 'p':
      return <Paragraph block={block} />
    case 'quote':
      return <Quote block={block} />
    case 'table':
      return sectionId === 'record' ? <Timeline block={block} /> : <Table block={block} />
    case 'groups':
      return <Groups block={block} />
    case 'list':
      return sectionId === 'archive' ? <Cards block={block} /> : <OrderedList block={block} />
    case 'badge':
      return <Badge block={block} />
    case 'sign':
      return <Sign block={block} />
    case 'docket':
      return <Docket block={block} />
    default:
      return null
  }
}

export default function Sheet() {
  return (
    <>
      {sections.map((section) => {
        const isDispatch = section.id === 'attention'

        if (isDispatch) {
          return (
            <section className="dispatch" id={section.id} key={section.id}>
              <div className="wrap">
                <div className="dispatch-head reveal">
                  <p className="section-num">{section.number}</p>
                  <h2>{section.title}</h2>
                </div>
                <div className="prose reveal sheet-body">
                  {section.blocks.map((block, i) => (
                    <Block block={block} sectionId={section.id} key={i} />
                  ))}
                </div>
              </div>
            </section>
          )
        }

        return (
          <section className="section" id={section.id} key={section.id}>
            <div className="wrap">
              <SectionHead number={section.number} title={section.title} />
              <div className="prose reveal sheet-body">
                {section.blocks.map((block, i) => (
                  <Block block={block} sectionId={section.id} key={i} />
                ))}
              </div>
            </div>
          </section>
        )
      })}
    </>
  )
}
