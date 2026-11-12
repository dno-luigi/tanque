import { hero } from '../content/active.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-beam" aria-hidden="true" />
      <div className="wrap">
        <div className="hero-solo">
          <p className="kicker">
            <span className="kicker-dot" aria-hidden="true" />
            {hero.kicker}
            <span className="kicker-firm"> · {hero.firm}</span>
          </p>

          <h1 className="hero-title">
            <span className="line">{hero.line1}</span>
            <span className="line line-em">{hero.line2}</span>
            <span className="line line-alt">{hero.line3}</span>
          </h1>

          <div className="hero-body">
            {hero.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
