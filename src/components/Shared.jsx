export function SectionHead({ number, eyebrow, title, intro }) {
  return (
    <header className="section-head reveal">
      <div className="head-main">
        <p className="section-num">
          {number} <span className="slash">/</span> {eyebrow}
        </p>
        <h2 className="section-title">{title}</h2>
      </div>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </header>
  )
}

export function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      →
    </span>
  )
}
