import { useEffect } from 'react'

/**
 * Reveals every `.reveal` element once it scrolls into view.
 * Elements added after mount are ignored on purpose — the page is static.
 */
export function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('.reveal'))
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // A data attribute is used instead of a class so React re-renders of the
    // same element (toggling the gate, opening a phase) cannot wipe it.
    if (reduced || !('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.setAttribute('data-in', ''))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-in', '')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -4% 0px', threshold: 0.01 },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])
}
