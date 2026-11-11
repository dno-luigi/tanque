import { useEffect, useState } from 'react'
import { site, ui } from '../content/active.js'

const links = [
  { id: 'story', label: ui.nav.story },
  { id: 'gate', label: ui.nav.gate },
  { id: 'plan', label: ui.nav.plan },
  { id: 'archive', label: ui.nav.archive },
  { id: 'dispatch', label: ui.nav.dispatch },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      setScrolled(window.scrollY > 16)
      let current = ''
      for (const link of links) {
        const el = document.getElementById(link.id)
        if (el && el.getBoundingClientRect().top <= 160) current = link.id
      }
      setActive(current)
    }

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="nav-inner">
        <a className="brand" href="#top" aria-label={`${site.name} — ${ui.nav.topOfPage}`}>
          <span className="brand-mark" aria-hidden="true">
            §
          </span>
          {site.short}
          <span className="brand-sub">{ui.nav.brandSub}</span>
        </a>

        <nav className="nav-links" aria-label={ui.nav.sections}>
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? 'is-active' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#dispatch">
          {ui.nav.cta}
        </a>
      </div>
    </header>
  )
}
