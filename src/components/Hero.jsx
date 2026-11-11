import { hero } from '../content/site.js'
import { Arrow } from './Shared.jsx'

function LetterArtifact() {
  const { artifact } = hero

  return (
    <figure className="artifact">
      <div className="paper">
        <span className="tape" aria-hidden="true" />
        <div className="paper-head">
          <span>{artifact.header}</span>
          <span className="paper-ref">FORM 12-B</span>
        </div>

        <dl className="paper-rows">
          {artifact.rows.map(([key, value]) => (
            <div className="paper-row" key={key}>
              <dt>{key}</dt>
              <dd className={key === 'Result' ? 'neg' : undefined}>{value}</dd>
            </div>
          ))}
        </dl>

        <div className="paper-foot">
          <span className="redact w-70" aria-hidden="true" />
          <span className="redact w-45" aria-hidden="true" />
          <p className="paper-note">Subject address on file with the department.</p>
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
                Read the record
              </a>
              <a className="btn btn-ghost" href="#gate">
                Why we can&rsquo;t sue yet <Arrow />
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
