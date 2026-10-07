import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Any element with [data-r] fades/slides in when it scrolls into view.
export function useReveal() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    const els = [...document.querySelectorAll('[data-r]')]
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    els.forEach((el, i) => {
      el.classList.add('reveal')
      el.style.setProperty('--d', `${(i % 4) * 80}ms`)
      io.observe(el)
    })
    return () => io.disconnect()
  }, [pathname])
}
