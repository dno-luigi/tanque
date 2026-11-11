import { hero, ui } from '../content/active.js'
import { Arrow } from './Shared.jsx'

function LetterArtifact() {
  const { artifact } = hero

  return (
    <figure className="artifact">
      <div className="paper">
        <span className="tape" aria-hidden="true" />
        <div className="paper-head">
          <span>{artifact.header}</span>
          <span className="paper-ref">{ui.hero.paperRef}</span>
        </div>

        <dl className="paper-rows">
          {artifact.rows.map((row) => (
            <div className="paper-row" key={row.label}>
              <dt>{row.label}</dt>
              <dd className={row.neg ? 'neg' : undefined}>{row.value}</dd>
            </div>
          ))}
        </dl>

        <div className="paper-foot">
          <span className="redact w-70" aria-hidden="true" />
          <span className="redact w-45" aria-hidden="true" />
          <p className="paper-note">{ui.hero.paperNote}</p>
        </div>

        <div className="stamp">
          {artifact.stamp}
          <em>{artifact.stampSub}</em>
        </div>
      </div>

      <figcaption>
        <strong>{artifact.label}</strong>
        {artifact.caption}
      </figcaption>
    </figure>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-beam" aria-hidden="true" />
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="kicker">
              <span className="kicker-dot" aria-hidden="true" />
              {hero.kicker}
            </p>

            <h1 className="hero-title">
              <span className="line">{hero.line1}</span>
              <span className="line line-em">{hero.line2}</span>
              <span className="line line-alt">{hero.line3}</span>
            </h1>

            <p className="hero-sub">{hero.sub}</p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#story">
                {ui.hero.readRecord}
              </a>
              <a className="btn btn-ghost" href="#gate">
                {ui.hero.whyCannotSue} <Arrow />
              </a>
            </div>

            <p className="hero-note">{hero.note}</p>
          </div>

          <LetterArtifact />
        </div>

        <dl className="stats">
          {hero.stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
