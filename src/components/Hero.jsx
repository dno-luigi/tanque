import { hero } from '../content/active.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-beam" aria-hidden="true" />
      <div className="wrap">
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
