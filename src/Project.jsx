import { useEffect, useState } from 'react'
import { LuArrowUpRight, LuArrowLeft } from 'react-icons/lu'
import { Reveal, Headline, Count, useInView, pad } from './hooks.jsx'
import { Chip } from './Icons.jsx'
import Thumb from './Visuals.jsx'
import { projects } from './data.js'
const real = v => v && !v.startsWith('[')
const secs = [['ps', 'Problem & solution'], ['arch', 'Architecture'], ['feat', 'Features'], ['res', 'Results'], ['stack', 'Stack'], ['take', 'Takeaways']]

function Bar({ pct, children, label }) {
  const [ref, on] = useInView({ threshold: .4 })
  return (<div ref={ref} className="metric"><span className="mono-s">{label}</span><b>{children}</b><div className="mbar"><i style={{ transform: `scaleX(${on ? pct / 100 : 0})` }} /></div></div>)
}
function Arch({ nodes }) {
  const [a, setA] = useState(0), [pause, setPause] = useState(false), n = nodes.length
  useEffect(() => { if (pause) return; const t = setTimeout(() => setA(x => (x + 1) % n), 3800); return () => clearTimeout(t) }, [a, pause, n])
  const [t, s] = nodes[a]
  return (<div className="px">
    <div className="px-list" role="tablist" aria-label="Pipeline steps">{nodes.map(([x, y], k) => (
      <button key={x} role="tab" aria-selected={k === a} className={k === a ? 'on' : k < a ? 'done' : ''} onClick={() => { setA(k); setPause(true) }}><i>{pad(k + 1)}</i><span><b>{x}</b><small>{y}</small></span></button>))}</div>
    <div className="px-stage" key={a}>
      <span className="outline-n" aria-hidden="true">{pad(a + 1)}</span>
      <div><span className="mono-s red">Step {a + 1} of {n}</span><h3>{t}</h3><p>{s}</p></div>
      <div className="px-io"><div><small>Receives from</small><b>{nodes[a - 1]?.[0] || 'Raw input'}</b></div><span aria-hidden="true"><LuArrowUpRight /></span><div><small>Passes to</small><b>{nodes[a + 1]?.[0] || 'Final output'}</b></div></div>
      <button className="lnk" onClick={() => setPause(!pause)}>{pause ? 'Play' : 'Pause'} walkthrough</button>
    </div></div>)
}
export default function Project({ id }) {
  const i = projects.findIndex(p => p.id === id), p = projects[i], next = projects[(i + 1) % projects.length]
  if (!p) return null
  return (<main className="proj">
    <section className="sec dark ph"><div className="wrap">
      <a className="back" href="#projects"><LuArrowLeft strokeWidth={1.5} /> All projects</a>
      <span className="mono-s red">{p.kind}</span>
      <Headline as="h1" now className="h1" parts={[[p.title + ' ', 0], [p.tagline || '', 1]]} />
      <p className="sub">{p.sub}</p>
      <div className="ph-row">
        <div className="ph-links">{real(p.gh) && <a className="pill on-dark" href={p.gh} target="_blank" rel="noopener noreferrer"><span>GitHub</span><i><LuArrowUpRight /></i></a>}{real(p.live) && <a className="pill ghost on-dark" href={p.live} target="_blank" rel="noopener noreferrer"><span>Open live demo</span><i><LuArrowUpRight /></i></a>}{!real(p.gh) && !real(p.live) && <span className="mono-s">Links coming soon</span>}</div>
        <dl>{[['Core stack', p.tools.slice(0, 3).join(', ')], ['Headline result', p.metrics[0][0] + ' ' + (p.metrics[0][2] === 1 ? p.metrics[0][1] : p.metrics[0][1].toLocaleString())], ['Tools used', p.tools.length]].map(([k, v]) => <div key={k}><dt className="mono-s">{k}</dt><dd>{v}</dd></div>)}</dl>
      </div>
      <Reveal v="clip" className="ph-vis"><Thumb kind={p.thumb} img={p.img} /></Reveal>
    </div></section>

    <section id="ps" className="sec light"><div className="wrap">
      <Headline className="h2" parts={[['The problem, ', 0], ['and what I built.', 1]]} />
      <div className="ps">
        <Reveal v="clip" className="bcard"><span className="mono-s red">The problem</span>{p.problem.map(x => <p key={x}>{x}</p>)}</Reveal>
        <Reveal v="clip" delay={120} className="bcard inv"><span className="mono-s red">The solution</span>{p.solution.map(x => <p key={x}>{x}</p>)}</Reveal>
      </div></div></section>

    <section id="arch" className="sec dark"><div className="wrap">
      <Headline className="h2" parts={[['Architecture, ', 0], ['step by step.', 1]]} />
      <Reveal v="up"><Arch nodes={p.arch} /></Reveal></div></section>

    <section id="feat" className="sec light"><div className="wrap">
      <Headline className="h2" parts={[['Key ', 0], ['features.', 1]]} />
      <ul className="feat">{p.features.map((f, k) => <Reveal as="li" v="line" key={f} delay={k * 70}><small>{pad(k + 1)}</small><span>{f}</span></Reveal>)}</ul></div></section>

    <section id="res" className="sec dark"><div className="wrap">
      <Headline className="h2" parts={[['Results, ', 0], [p.metricNote, 1]]} />
      <div className="metrics">{p.metrics.map(([l, v, max, pre = '']) => { const small = max === 1
        return <Reveal key={l} v="clip" className="bcard"><Bar pct={Math.min(v / max * 100, 100)} label={l}><Count to={v} dec={small ? (v > .9 ? 4 : 3) : v % 1 ? 2 : 0} prefix={pre} /></Bar></Reveal> })}</div>
</div></section>

    <section id="stack" className="sec light"><div className="wrap">
      <Headline className="h2" parts={[['Tech ', 0], ['stack.', 1]]} />
      <Reveal className="chips big">{p.tools.map(x => <Chip key={x} name={x} />)}</Reveal></div></section>

    <section id="take" className="sec dark"><div className="wrap">
      <Headline className="h2" parts={[['What I ', 0], ['took away.', 1]]} />
      <div className="takes">{p.learned.map((x, k) => <Reveal key={x} v="clip" delay={k * 110} className="bcard"><span className="outline-n" aria-hidden="true">{pad(k + 1)}</span><p>{x}</p></Reveal>)}</div></div></section>

    <a className="sec light next" href={'#/project/' + next.id}><div className="wrap"><span className="mono-s red">Next project</span><div className="nx"><span>{next.title}</span><i><LuArrowUpRight /></i></div><p>{next.tagline || next.kind}</p></div></a>
  </main>)
}
