import { sections, ui } from '../content/active.js'
import { SectionHead } from './Shared.jsx'
import docketText from '../../docs/FVI802230-case-summary.txt?raw'

function Block({ block }) {
  switch (block.type) {
    case 'p':
      return <p className={block.strong ? 'is-strong' : undefined}>{block.text}</p>

    case 'quote':
      return <blockquote className="sheet-quote">{block.text}</blockquote>

    case 'table':
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
                    <td key={j} data-label={block.head[j]}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    case 'groups':
      return (
        <div className="sheet-groups">
          {block.groups.map((group) => (
            <div className="sheet-group" key={group.title}>
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

    case 'list':
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

    case 'badge':
      return <p className="sheet-badge">{block.text}</p>

    case 'sign':
      return (
        <div className="sheet-sign">
          {block.lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
      )

    case 'docket':
      return (
        <div className="sheet-docket">
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

    default:
      return null
  }
}

export default function Sheet() {
  return (
    <>
      {sections.map((section) => (
        <section className="section" id={section.id} key={section.id}>
          <div className="wrap">
            <SectionHead number={section.number} title={section.title} />
            <div className="prose reveal sheet-body">
              {section.blocks.map((block, i) => (
                <Block block={block} key={i} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
