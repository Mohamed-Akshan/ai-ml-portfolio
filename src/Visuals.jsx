// Premium monochrome project visuals (pure SVG). Replace any with a real screenshot via `img` in data.js.
const R = '#e5352b'
const Frame = ({ label, title, children }) => (
  <svg viewBox="0 0 640 400" className="thumb" role="img" aria-label={label}>
    <rect width="640" height="400" fill="#0d0d0e" />
    <rect x="24" y="24" width="592" height="352" rx="18" fill="#151517" stroke="#2b2b2e" />
    <path d="M24 62V42a18 18 0 0 1 18-18h556a18 18 0 0 1 18 18v20z" fill="#1b1b1e" />
    {[0, 1, 2].map(i => <circle key={i} cx={46 + i * 16} cy="43" r="4" fill="#3b3b40" />)}
    <text x="120" y="47" className="t-mono" fill="#7d7d83" fontSize="11">{title}</text>
    {children}
  </svg>)

function Zipro() {
  const agents = [['Investigate', 92], ['Decide', 168], ['Verify', 244]]
  return (<Frame label="ZIPRO agent workflow" title="zipro / voice-of-customer copilot">
    <rect x="44" y="84" width="190" height="272" rx="12" fill="#101012" stroke="#27272a" />
    <rect x="58" y="100" width="120" height="30" rx="8" fill="#232326" /><rect x="58" y="104" width="0" height="0" />
    <rect x="58" y="142" width="160" height="46" rx="8" fill="none" stroke={R} strokeOpacity=".7" />
    {[152, 164, 176].map((y, i) => <rect key={y} x="68" y={y} width={130 - i * 28} height="5" rx="2.5" fill="#d9d9dc" opacity={0.85 - i * 0.2} />)}
    <rect x="58" y="204" width="130" height="30" rx="8" fill="#232326" />
    <rect x="58" y="246" width="160" height="62" rx="8" fill="none" stroke={R} strokeOpacity=".7" />
    {[258, 270, 282, 294].map((y, i) => <rect key={y} x="68" y={y} width={136 - i * 22} height="5" rx="2.5" fill="#d9d9dc" opacity={0.85 - i * 0.15} />)}
    {agents.map(([n, y], i) => (<g key={n} className="fadein" style={{ animationDelay: i * 0.25 + 's' }}>
      <rect x="290" y={y} width="168" height="52" rx="12" fill="#1b1b1e" stroke="#303034" />
      <text x="308" y={y + 23} fill="#fff" fontSize="14" fontWeight="600">{n} agent</text>
      <text x="308" y={y + 40} fill="#85858b" fontSize="10.5" className="t-mono">langgraph / 0{i + 1}</text>
      <circle cx="436" cy={y + 26} r="5" fill={i === 2 ? R : '#4a4a50'} />
    </g>))}
    <path d="M374 144v24M374 220v24" stroke="#3b3b40" strokeWidth="1.5" />
    <path d="M234 190H290M458 270H500" stroke="#3b3b40" strokeWidth="1.5" strokeDasharray="3 4" />
    <rect x="500" y="170" width="92" height="132" rx="12" fill="#101012" stroke="#27272a" />
    <text x="514" y="196" fill="#85858b" fontSize="10" className="t-mono">sources</text>
    {[212, 232, 252, 272].map((y, i) => <g key={y}><rect x="514" y={y} width="64" height="6" rx="3" fill="#2b2b2f" /><rect x="514" y={y} width={[50, 38, 58, 28][i]} height="6" rx="3" fill={i === 0 ? R : '#6d6d73'} className="grow" style={{ animationDelay: i * 0.2 + 's' }} /></g>)}
    <circle r="4" fill={R}><animateMotion dur="3.2s" repeatCount="indefinite" path="M234 190 L290 190 L374 144 L374 168 L374 220 L374 244 L458 270 L500 270" /></circle>
  </Frame>)
}
function Credit() {
  const bars = [62, 88, 48, 96, 74, 58]
  return (<Frame label="Credit risk prediction interface" title="credit-risk / default probability">
    <rect x="44" y="84" width="260" height="272" rx="12" fill="#101012" stroke="#27272a" />
    <path d="M90 270a82 82 0 0 1 168 0" fill="none" stroke="#2b2b2f" strokeWidth="14" strokeLinecap="round" />
    <path d="M90 270a82 82 0 0 1 168 0" fill="none" stroke={R} strokeWidth="14" strokeLinecap="round" pathLength="100" className="draw" style={{ strokeDasharray: 100, strokeDashoffset: 100, '--to': 4 }} />
    <text x="174" y="252" textAnchor="middle" fill="#fff" fontSize="36" fontWeight="600">96.3%</text>
    <text x="174" y="274" textAnchor="middle" fill="#85858b" fontSize="11" className="t-mono">accuracy</text>
    {[['ROC-AUC', '0.983'], ['Precision', '0.828'], ['Recall', '0.716']].map(([a, b], i) => <g key={a}><text x={62 + i * 84} y="316" fill="#85858b" fontSize="9.5" className="t-mono">{a}</text><text x={62 + i * 84} y="338" fill="#fff" fontSize="17" fontWeight="600">{b}</text></g>)}
    <rect x="324" y="84" width="268" height="130" rx="12" fill="#101012" stroke="#27272a" />
    <text x="342" y="108" fill="#85858b" fontSize="10.5" className="t-mono">feature weight</text>
    {bars.map((h, i) => <rect key={i} x={346 + i * 38} y={196 - h} width="22" height={h} rx="4" fill={i === 3 ? R : '#3a3a3f'} className="rise" style={{ animationDelay: i * 0.1 + 's' }} />)}
    <rect x="324" y="228" width="268" height="128" rx="12" fill="#101012" stroke="#27272a" />
    <text x="342" y="252" fill="#85858b" fontSize="10.5" className="t-mono">default probability</text>
    <rect x="342" y="268" width="232" height="8" rx="4" fill="#2b2b2f" /><rect x="342" y="268" width="62" height="8" rx="4" fill={R} className="grow" />
    {['Low', 'Medium', 'High'].map((t, i) => <text key={t} x={342 + i * 82} y="302" fill={i === 0 ? '#fff' : '#6d6d73'} fontSize="12" fontWeight="500">{t}</text>)}
    <text x="342" y="334" fill="#85858b" fontSize="10.5" className="t-mono">FastAPI · Docker · MLflow</text>
  </Frame>)
}
function Sales() {
  const pts = '0,120 50,98 100,106 150,70 200,82 250,44 300,52 350,18'
  return (<Frame label="Samsung global sales dashboards" title="samsung-sales / executive view">
    {[['Revenue', '$22.9M'], ['Records', '15,500'], ['Return rate', '9.2%']].map(([a, b], i) => <g key={a}><rect x={44 + i * 192} y="84" width="176" height="62" rx="12" fill="#101012" stroke="#27272a" /><text x={60 + i * 192} y="108" fill="#85858b" fontSize="10.5" className="t-mono">{a}</text><text x={60 + i * 192} y="134" fill={i === 0 ? '#fff' : '#d9d9dc'} fontSize="22" fontWeight="600">{b}</text></g>)}
    <rect x="44" y="160" width="380" height="196" rx="12" fill="#101012" stroke="#27272a" />
    {[0, 1, 2, 3].map(i => <line key={i} x1="62" x2="408" y1={200 + i * 40} y2={200 + i * 40} stroke="#222225" />)}
    <g transform="translate(66 200)"><polyline points={pts} fill="none" stroke={R} strokeWidth="2.5" strokeLinejoin="round" pathLength="100" className="draw" style={{ strokeDasharray: 100, strokeDashoffset: 100, '--to': 0 }} />
      {pts.split(' ').map(p => { const [x, y] = p.split(','); return <circle key={p} cx={x} cy={y} r="3" fill="#151517" stroke={R} strokeWidth="1.5" /> })}</g>
    <rect x="440" y="160" width="152" height="196" rx="12" fill="#101012" stroke="#27272a" />
    {[['Retail', 88], ['Online', 68], ['Partner', 46], ['Direct', 30]].map(([t, w], i) => <g key={t}><text x="456" y={190 + i * 40} fill="#85858b" fontSize="10.5" className="t-mono">{t}</text><rect x="456" y={198 + i * 40} width="120" height="6" rx="3" fill="#2b2b2f" /><rect x="456" y={198 + i * 40} width={w * 1.2 * 0.9} height="6" rx="3" fill={i === 0 ? R : '#6d6d73'} className="grow" style={{ animationDelay: i * 0.15 + 's' }} /></g>)}
  </Frame>)
}
export default function Thumb({ kind, img }) {
  if (img) return <img className="thumb" src={img} alt="" />
  return kind === 'zipro' ? <Zipro /> : kind === 'credit' ? <Credit /> : <Sales />
}
