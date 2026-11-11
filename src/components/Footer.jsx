import { footer, site } from '../content/site.js'

const words = site.name.split(' ')
const lastWord = words.pop()

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <p className="footer-mark">
            {words.join(' ')} <em>{lastWord}</em>
          </p>

          <nav className="footer-links" aria-label="Footer">
            <a href="#archive">The archive</a>
            <a href="#gate">The legal gate</a>
            <a href="#dispatch">Send records</a>
            <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
            {site.repoUrl ? (
              <a href={site.repoUrl} target="_blank" rel="noreferrer noopener">
                Source
              </a>
            ) : null}
          </nav>
        </div>

        <div className="footer-rule" />

        <p className="disclaimer">{footer.disclaimer}</p>

        <div className="footer-base">
          <span>
            {year} · {site.name}
          </span>
          <span className="closing">{footer.closing}</span>
          <span>Not legal advice</span>
        </div>
      </div>
    </footer>
  )
}
