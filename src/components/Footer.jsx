import { footer, site, ui } from '../content/active.js'

export default function Footer() {
  const year = new Date().getFullYear()
  const words = site.name.split(' ')
  const lastWord = words.pop()

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <p className="footer-mark">
            {words.join(' ')} <em>{lastWord}</em>
          </p>

          <nav className="footer-links" aria-label={ui.footer.aria}>
            <a href="#plea">{ui.footer.plea}</a>
            <a href="#records">{ui.footer.records}</a>
            <a href="#attention">{ui.footer.attention}</a>
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

        <p className="notice-title">{footer.title}</p>
        <p className="disclaimer">{footer.disclaimer}</p>

        <div className="footer-base">
          <span>
            {year} · {site.name}
          </span>
          {footer.closing ? <span className="closing">{footer.closing}</span> : null}
          <span>{ui.footer.notLegal}</span>
        </div>
      </div>
    </footer>
  )
}
