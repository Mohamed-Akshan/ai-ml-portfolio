import { useEffect, useRef, useState } from 'react'

export const reduced = () => typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches
export const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v))
export const pad = n => String(n).padStart(2, '0')

/* ---------- Smooth, inertial scrolling (Apple-style) ---------- */
// Native scrolling avoids a second animation loop competing with the browser.
export let lenis = null
export function useSmoothScroll() { }
export const scrollToId = (id, offset = 0) => {
  const el = document.getElementById(id)
  if (!el) return
  window.scrollTo({
    top: window.scrollY + el.getBoundingClientRect().top + offset,
    behavior: reduced() ? 'instant' : 'smooth'
  })
}
export const scrollTop = () => window.scrollTo({ top: 0, behavior: 'instant' })

// One shared animation frame for all scroll subscribers.
const subscribers = new Set()
let frame = 0
const flush = () => {
  frame = 0
  for (const callback of subscribers) callback()
}
const schedule = () => { if (!frame) frame = requestAnimationFrame(flush) }
export function useScrollFrame(cb, deps = []) {
  const latest = useRef(cb)
  latest.current = cb
  useEffect(() => {
    const run = () => latest.current()
    if (!subscribers.size) {
      window.addEventListener('scroll', schedule, { passive: true })
      window.addEventListener('resize', schedule)
    }
    subscribers.add(run)
    schedule()
    return () => {
      subscribers.delete(run)
      if (!subscribers.size) {
        window.removeEventListener('scroll', schedule)
        window.removeEventListener('resize', schedule)
        cancelAnimationFrame(frame)
        frame = 0
      }
    }
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
    words.current.forEach((w, i) => {
      if (!w) return
      const value = clamp((p * (n + 6) - i) / 4).toFixed(3)
      if (w.style.getPropertyValue('--l') !== value) w.style.setProperty('--l', value)
    })
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
