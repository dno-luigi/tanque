import { hero } from '../content/active.js'

function LetterArtifact() {
  const { artifact } = hero

  return (
    <figure className="artifact">
      <div className="paper">
        <span className="tape" aria-hidden="true" />
        <div className="paper-head">
          <span>{artifact.header}</span>
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
            <p className="hero-firm">{hero.firm}</p>

            <h1 className="hero-title">
              <span className="line">{hero.line1}</span>
              <span className="line line-em">{hero.line2}</span>
              <span className="line line-alt">{hero.line3}</span>
            </h1>

            {hero.note ? <p className="hero-note">{hero.note}</p> : null}
          </div>

          {hero.artifact ? <LetterArtifact /> : null}
        </div>

        {hero.stats && hero.stats.length ? (
          <dl className="stats">
            {hero.stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </section>
  )
}
