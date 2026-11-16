import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'

export const reduced = () => typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches
export const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v))
export const pad = n => String(n).padStart(2, '0')

/* ---------- Smooth, inertial scrolling (Apple-style) ---------- */
export let lenis = null
export function useSmoothScroll() {
  useEffect(() => {
    if (reduced()) return
    lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.95, smoothWheel: true })
    let id; const raf = t => { lenis.raf(t); id = requestAnimationFrame(raf) }; id = requestAnimationFrame(raf)
    return () => { cancelAnimationFrame(id); lenis.destroy(); lenis = null }
  }, [])
}
export const scrollToId = (id, offset = 0) => {
  const el = document.getElementById(id); if (!el) return
  if (lenis) lenis.scrollTo(el, { offset, duration: 1.5, easing: t => 1 - Math.pow(1 - t, 4) })
  else el.scrollIntoView({ behavior: 'smooth' })
}
export const scrollTop = () => { lenis ? lenis.scrollTo(0, { immediate: true }) : scrollTo(0, 0) }

/* ---------- Scroll subscription (rAF-throttled, no React re-render) ---------- */
export function useScrollFrame(cb, deps = []) {
  useEffect(() => {
    let raf = 0
    const run = () => { raf = 0; cb() }
    const on = () => { if (!raf) raf = requestAnimationFrame(run) }
    run(); addEventListener('scroll', on, { passive: true }); addEventListener('resize', on)
    return () => { cancelAnimationFrame(raf); removeEventListener('scroll', on); removeEventListener('resize', on) }
  }, deps)
}

export function useInView(opts = { threshold: 0.15, rootMargin: '0px 0px -6% 0px' }) {
  const ref = useRef(null); const [on, set] = useState(false)
  useEffect(() => {
    if (reduced()) { set(true); return }
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { set(true); o.disconnect() } }, opts)
    ref.current && o.observe(ref.current); return () => o.disconnect()
  }, [])
  return [ref, on]
}

/* Generic reveal. v = 'up' | 'clip' | 'fade' */
export const Reveal = ({ children, delay = 0, v = 'up', as: T = 'div', className = '', style, ...r }) => {
  const [ref, on] = useInView(v === 'clip' ? { threshold: 0, rootMargin: '0px 0px -8% 0px' } : undefined)
  return <T ref={ref} className={`rv v-${v} ${on ? 'in ' : ''}${className}`} style={{ '--d': delay + 'ms', ...style }} {...r}>{children}</T>
}

/* Headline: parts = [[text, isRed], ...]. Words rise out of a mask, half white / half red. */
export function Headline({ parts, as: T = 'h2', className = '', delay = 0, now = false }) {
  const [ref, on] = useInView({ threshold: 0.3 })
  let i = 0
  const label = parts.map(p => p[0]).join('')
  return (
    <T ref={ref} className={`hl ${on || now ? 'in ' : ''}${className}`} aria-label={label}>
      {parts.map(([t, red], k) => t.split(' ').filter(Boolean).map(w => (
        <span key={k + w + i} className="w" aria-hidden="true"><span className={red ? 'red' : ''} style={{ transitionDelay: delay + i++ * 55 + 'ms' }}>{w}&nbsp;</span></span>
      )))}
    </T>
  )
}

/* Scroll-scrubbed statement: words light up one by one as you scroll (red parts stay red). */
export function ScrollWords({ parts, className = '' }) {
  const ref = useRef(null); const words = useRef([])
  const flat = parts.flatMap(([t, red]) => t.split(' ').filter(Boolean).map(w => [w, red]))
  useScrollFrame(() => {
    const el = ref.current; if (!el) return
    const r = el.getBoundingClientRect()
    const p = clamp((innerHeight * 0.82 - r.top) / (r.height + innerHeight * 0.25))
    const n = flat.length
    words.current.forEach((w, i) => w && w.style.setProperty('--l', clamp((p * (n + 6) - i) / 4).toFixed(3)))
  })
  return <p ref={ref} className={'sw ' + className}>{flat.map(([w, red], i) => <span key={i} ref={e => (words.current[i] = e)} className={red ? 'red' : ''}>{w} </span>)}</p>
}

export function Count({ to, dec = 0, prefix = '', suffix = '' }) {
  const [ref, on] = useInView({ threshold: 0.4 }); const [v, setV] = useState(0)
  useEffect(() => {
    if (!on) return; if (reduced()) { setV(to); return }
    let t0, raf; const d = 1600
    const f = t => { t0 ??= t; const p = Math.min((t - t0) / d, 1); setV(to * (1 - Math.pow(1 - p, 4))); p < 1 && (raf = requestAnimationFrame(f)) }
    raf = requestAnimationFrame(f); return () => cancelAnimationFrame(raf)
  }, [on, to])
  return <span ref={ref}>{prefix}{v.toFixed(dec)}{suffix}</span>
}

/* Cursor spotlight for premium cards */
export const spot = e => {
  const el = e.currentTarget, r = el.getBoundingClientRect()
  el.style.setProperty('--mx', e.clientX - r.left + 'px'); el.style.setProperty('--my', e.clientY - r.top + 'px')
}
