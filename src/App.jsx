import { useEffect, useRef } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Story from './components/Story.jsx'
import Timeline from './components/Timeline.jsx'
import Facts from './components/Facts.jsx'
import HeckGate from './components/HeckGate.jsx'
import Phases from './components/Phases.jsx'
import Evidence from './components/Evidence.jsx'
import Immunity from './components/Immunity.jsx'
import Archive from './components/Archive.jsx'
import Protocol from './components/Protocol.jsx'
import Dispatch from './components/Dispatch.jsx'
import Footer from './components/Footer.jsx'
import { useReveal } from './hooks/useReveal.js'

function ScrollProgress() {
  const bar = useRef(null)

  useEffect(() => {
    let frame = 0

    const paint = () => {
      frame = 0
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      const ratio = max > 0 ? Math.min(1, Math.max(0, doc.scrollTop / max)) : 0
      if (bar.current) bar.current.style.transform = `scaleX(${ratio})`
    }

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(paint)
    }

    paint()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return <div className="progress" ref={bar} aria-hidden="true" />
}

export default function App() {
  useReveal()

  return (
    <>
      <a className="skip" href="#story">
        Skip to the record
      </a>
      <ScrollProgress />
      <div className="grain" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Story />
        <Timeline />
        <Facts />
        <HeckGate />
        <Phases />
        <Evidence />
        <Immunity />
        <Archive />
        <Protocol />
        <Dispatch />
      </main>
      <Footer />
    </>
  )
}
