import { useEffect, useRef, useState } from 'react'
import { LuCheck, LuArrowUpRight } from 'react-icons/lu'
import { me } from './data.js'
const empty = { name: '', email: '', message: '', website: '' }
function Field({ id, label, error, extra, children }) {
  return <div className={'fld' + (error ? ' bad' : '')}><div className="fl"><label htmlFor={id}>{label}</label>{extra}</div>{children}<span className="fbar" />{error && <small role="alert">{error}</small>}</div>
}
export default function ContactForm() {
  const [f, setF] = useState(empty), [t, setT] = useState({}), [st, setSt] = useState('idle'), msg = useRef(null)
  useEffect(() => { const h = e => { const d = typeof e.detail === 'string' ? { message: e.detail } : e.detail; setF(x => ({ ...x, ...d })); setTimeout(() => msg.current?.focus({ preventScroll: true }), 250) }; addEventListener('prefill', h); return () => removeEventListener('prefill', h) }, [])
  const err = { name: f.name.trim().length < 2 ? 'Please enter your name.' : '', email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email) ? '' : 'Enter a valid email address.', message: f.message.trim().length < 10 ? 'Please add at least 10 characters.' : '' }
  const set = k => e => setF(x => ({ ...x, [k]: e.target.value })), blur = k => () => setT(x => ({ ...x, [k]: true }))
  const submit = async e => {
    e.preventDefault(); setT({ name: 1, email: 1, message: 1 }); if (Object.values(err).some(Boolean)) return
    setSt('sending')
    try {
      const r = await fetch(me.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) })
      const data = await r.json().catch(() => ({})); setSt(r.ok && data.ok ? 'done' : 'error')
    } catch { setSt('error') }
  }
  if (st === 'done') return <div className="form done"><span className="tick"><LuCheck /></span><h3>Message sent.</h3><p>Thank you, {f.name.split(' ')[0]}. Your note has been submitted successfully.</p><button className="pill ghost on-dark" onClick={() => {setSt('idle');setF(empty);setT({})}}>Send another</button></div>
  return <form className="form" onSubmit={submit} noValidate>
    <div className="form-h"><h3>Send a message</h3></div>
    <div className="two">
      <Field id="n" label="Full name" error={t.name && err.name}><input id="n" autoComplete="name" maxLength={120} value={f.name} onChange={set('name')} onBlur={blur('name')} placeholder="Your name" /></Field>
      <Field id="e" label="Email address" error={t.email && err.email}><input id="e" type="email" autoComplete="email" maxLength={254} value={f.email} onChange={set('email')} onBlur={blur('email')} placeholder="name@company.com" /></Field>
    </div>
    <div className="form-trap" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off" value={f.website} onChange={set('website')} /></div>
    <Field id="m" label="Message" error={t.message && err.message} extra={<small className="count">{f.message.length}/4000</small>}><textarea id="m" ref={msg} rows="5" maxLength={4000} value={f.message} onChange={set('message')} onBlur={blur('message')} placeholder="A short introduction and what you'd like to discuss" /></Field>
    <div className="f-foot"><button className="send" type="submit" disabled={st === 'sending'}><span>{st === 'sending' ? 'Sending…' : 'Send message'}</span><i><LuArrowUpRight /></i></button></div>
    {st === 'error' && <p className="form-n err" role="alert">Could not send the message. Please try again, or email <a href={'mailto:' + me.email}>{me.email}</a>. The site owner must configure the email service on Vercel.</p>}
  </form>
}
