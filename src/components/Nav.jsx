import { useEffect, useState } from 'react'
import { site } from '../content/site.js'

const links = [
  { id: 'story', label: 'Story' },
  { id: 'gate', label: 'Gate' },
  { id: 'plan', label: 'Plan' },
  { id: 'archive', label: 'Archive' },
  { id: 'dispatch', label: 'Dispatch' },
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
        <a className="brand" href="#top" aria-label={`${site.name} — top of page`}>
          <span className="brand-mark" aria-hidden="true">
            §
          </span>
          {site.short}
          <span className="brand-sub">/ open record</span>
        </a>

        <nav className="nav-links" aria-label="Sections">
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
          Dispatch
        </a>
      </div>
    </header>
  )
}
