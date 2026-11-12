import { footer, site, ui } from '../content/active.js'

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

          <nav className="footer-links" aria-label={ui.footer.aria}>
            <a href="#archive">{ui.footer.archive}</a>
            <a href="#dispatch">{ui.footer.dispatch}</a>
            <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
            {ui.altLocale.href ? (
              <a
                href={ui.altLocale.href}
                hrefLang={ui.altLocale.lang}
                lang={ui.altLocale.lang}
                aria-label={ui.altLocale.aria}
              >
                {ui.altLocale.label}
              </a>
            ) : null}
            {site.repoUrl ? (
              <a href={site.repoUrl} target="_blank" rel="noreferrer noopener">
                {ui.footer.source}
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
          <span>{ui.footer.notLegal}</span>
        </div>
      </div>
    </footer>
  )
}
