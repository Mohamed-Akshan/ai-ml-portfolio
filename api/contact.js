/** Vercel function. Secrets remain server-side; no new npm dependencies. */
const DESTINATION = 'mohamedakshan.dev@gmail.com'
const json = (res, status, body) => res.status(status).setHeader('Cache-Control', 'no-store').json(body)
const clean = x => typeof x === 'string' ? x.trim() : ''
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.setHeader('Allow', 'POST').status(405).json({ ok: false, error: 'Method not allowed' })
  const contentLength = Number(req.headers['content-length'] || 0)
  if (contentLength > 10000) return json(res, 413, { ok: false, error: 'Request too large' })
  const { name: rawName, email: rawEmail, message: rawMessage, website } = req.body || {}
  if (website) return json(res, 200, { ok: true }) // honeypot
  const name = clean(rawName), email = clean(rawEmail), message = clean(rawMessage)
  if (name.length < 2 || name.length > 120 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || message.length < 10 || message.length > 4000) return json(res, 400, { ok: false, error: 'Invalid submission' })
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_FROM_EMAIL) return json(res, 503, { ok: false, error: 'Email transport not configured' })
  const cvRequest = /\b(cv|resume|résumé)\b/i.test(message)
  const escapeHtml = str => str.replace(/[&<>"']/g, ch => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[ch]))
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST', headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: process.env.CONTACT_FROM_EMAIL, to: [DESTINATION], reply_to: email,
      subject: cvRequest ? 'Portfolio — CV requested' : 'Portfolio — new message',
      html: `<h2>Portfolio enquiry</h2><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Reply to:</strong> ${escapeHtml(email)}</p><p><strong>Request type:</strong> ${cvRequest ? 'CV request' : 'General message'}</p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
      text: `Name: ${name}\nReply to: ${email}\nCV request: ${cvRequest ? 'Yes' : 'No'}\n\n${message}` })
  }).catch(() => null)
  if (!response?.ok) { console.error('Email provider could not accept the request', response?.status); return json(res, 502, { ok: false, error: 'Delivery request failed' }) }
  return json(res, 200, { ok: true })
}
