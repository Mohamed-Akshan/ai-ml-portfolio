import { useEffect, useRef } from 'react'


// Project thumbnails
// Black and red theme matching the existing portfolio.

const R = '#e5352b'


function Frame({ label, title, children }) {
  const ref = useRef(null)

  useEffect(() => {
    const svg = ref.current
    if (!svg) return

    let visible = false
    const motion = matchMedia('(prefers-reduced-motion: reduce)')

    const sync = () => {
      const paused = !visible || document.hidden || motion.matches
      svg.classList.toggle('thumb-paused', paused)
      svg.classList.toggle('thumb-static', motion.matches)

      if (motion.matches) svg.setCurrentTime?.(4)
      if (paused) svg.pauseAnimations?.()
      else svg.unpauseAnimations?.()
    }

    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting
        sync()
      }, { rootMargin: '0px', threshold: 0.01 })
      : null

    if (observer) observer.observe(svg)
    else visible = true
    document.addEventListener('visibilitychange', sync)
    motion.addEventListener?.('change', sync)
    sync()

    return () => {
      observer?.disconnect()
      document.removeEventListener('visibilitychange', sync)
      motion.removeEventListener?.('change', sync)
    }
  }, [])

  return (
    <svg
      ref={ref}
      viewBox="0 0 640 400"
      className="thumb thumb-paused"
      role="img"
      aria-label={label}
    >
      <rect
        width="640"
        height="400"
        fill="#0d0d0e"
      />

      <rect
        x="24"
        y="24"
        width="592"
        height="352"
        rx="18"
        fill="#151517"
        stroke="#2b2b2e"
      />

      <path
        d="M24 62V42a18 18 0 0 1 18-18h556a18 18 0 0 1 18 18v20z"
        fill="#1b1b1e"
      />

      {[0, 1, 2].map(i => (
        <circle
          key={i}
          cx={46 + i * 16}
          cy="43"
          r="4"
          fill="#3b3b40"
        />
      ))}

      <text
        x="120"
        y="47"
        fill="#7d7d83"
        fontSize="11"
        className="t-mono"
      >
        {title}
      </text>

      {children}
    </svg>
  )
}


// =====================================================
// DOTLINK — Creative Operations Workspace
// =====================================================

function DotLink() {
  return (
    <Frame
      label="Illustrative DotLink workflow: Dottie prepares a quotation for human approval"
      title="dotlink / creative operations workspace"
    >
      <rect x="44" y="80" width="116" height="276" rx="12" fill="#101012" stroke="#2b2b2e" />
      <text x="57" y="105" fill="#fff" fontSize="16" fontWeight="600">DotLink</text>
      {['Overview', 'Clients', 'Projects', 'Tasks', 'Services', 'Finance', 'Approvals'].map((label, i) => (
        <g key={label}>
          {i === 5 && <rect x="51" y={120 + i * 27} width="102" height="23" rx="5" fill="#33201f" />}
          <circle cx="61" cy={131 + i * 27} r="3" fill={i === 5 ? R : '#66666c'} />
          <text x="72" y={135 + i * 27} fontSize="10" fill={i === 5 ? '#ff665a' : '#b3b3b9'}>{label}</text>
        </g>
      ))}
      <rect x="172" y="80" width="420" height="276" rx="12" fill="#101012" stroke="#2b2b2e" />
      <circle cx="192" cy="103" r="8" fill={R} />
      <path d="M188 104L191 107L196 99" stroke="#fff" strokeWidth="1.6" fill="none" />
      <text x="206" y="107" fill="#fff" fontSize="13" fontWeight="600">Dottie</text>
      <text x="579" y="107" textAnchor="end" fill="#85858b" fontSize="9" className="t-mono">AI ASSISTANT</text>
      <g className="fadein">
        <rect x="249" y="124" width="325" height="47" rx="8" fill="#252529" />
        <text x="262" y="143" fill="#fff" fontSize="11">Prepare a quotation for the branding project.</text>
        <text x="262" y="158" fill="#aaaab0" fontSize="10">Use the existing service rates.</text>
      </g>
      <g className="fadein" style={{ animationDelay: '.6s' }}>
        <rect x="189" y="184" width="385" height="45" rx="8" fill="#1c1c20" stroke="#38383c" />
        <text x="203" y="202" fill="#ff665a" fontSize="10" className="t-mono">FINANCE AGENT</text>
        <text x="203" y="218" fill="#d9d9dc" fontSize="10">Service rates retrieved. Preparing proposal.</text>
        <path d="M532 207H558" stroke="#55555b" strokeDasharray="3 3" />
        <circle cx="532" cy="207" r="3.5" fill={R}>
          <animate attributeName="cx" values="532;558;532" dur="2.5s" repeatCount="indefinite" />
        </circle>
      </g>
      <g className="fadein" style={{ animationDelay: '1.3s' }}>
        <rect x="189" y="240" width="385" height="99" rx="9" fill="#202023" stroke={R} strokeOpacity=".75" />
        <text x="203" y="260" fill="#ff665a" fontSize="10" className="t-mono">APPROVAL REQUIRED</text>
        <text x="203" y="280" fill="#fff" fontSize="13" fontWeight="600">Branding quotation</text>
        <text x="203" y="299" fill="#fff" fontSize="17" fontWeight="600">Rs. 45,000</text>
        <rect x="203" y="310" width="101" height="19" rx="5" fill={R} />
        <text x="253" y="323" fill="#fff" fontSize="9" textAnchor="middle">Review proposal</text>
        <text x="317" y="323" fill="#a5a5aa" fontSize="9">Awaiting approval</text>
      </g>
    </Frame>
  )
}


// =====================================================
// ZIPRO — Customer Feedback Copilot
// =====================================================

function Zipro() {
  const complaints = [
    {
      text: 'My driver cancelled again!',
      source: 'APP REVIEW',
      y: 116
    },
    {
      text: 'Still waiting for my refund.',
      source: 'SUPPORT TICKET',
      y: 201
    },
    {
      text: 'No drivers near my area.',
      source: 'CUSTOMER SURVEY',
      y: 286
    }
  ]

  return (
    <Frame
      label="ZIPRO customer complaint investigation and evidence-backed product recommendations"
      title="zipro / voice of customer copilot"
    >

      {/* Feedback panel */}

      <text
        x="46"
        y="91"
        fontSize="10"
        fill="#a5a5aa"
        className="t-mono"
      >
        CUSTOMER FEEDBACK
      </text>

      {complaints.map((item, index) => (
        <g
          key={item.source}
          className="fadein"
          style={{
            animationDelay: `${index * 0.22}s`
          }}
        >
          <rect
            x="44"
            y={item.y}
            width="248"
            height="70"
            rx="10"
            fill="#202023"
            stroke="#38383c"
          />

          <circle
            cx="61"
            cy={item.y + 17}
            r="4"
            fill={R}
          />

          <text
            x="73"
            y={item.y + 21}
            fill="#a2a2a8"
            fontSize="9.5"
            fontWeight="600"
          >
            {item.source}
          </text>

          <text
            x="58"
            y={item.y + 48}
            fill="#f2f2f3"
            fontSize="12"
          >
            {item.text}
          </text>
        </g>
      ))}


      {/* Connection */}

      <path
        d="M292 221H334"
        stroke={R}
        strokeWidth="2"
        strokeDasharray="5 5"
      />

      <circle r="4" fill={R}>
        <animateMotion
          dur="2.5s"
          repeatCount="indefinite"
          path="M292 221 L334 221"
        />
      </circle>


      {/* ZIPRO chat panel */}

      <rect
        x="334"
        y="100"
        width="264"
        height="248"
        rx="12"
        fill="#101012"
        stroke="#36363b"
      />

      <rect
        x="347"
        y="114"
        width="238"
        height="34"
        rx="8"
        fill="#202024"
      />

      <circle
        cx="363"
        cy="131"
        r="5"
        fill={R}
      />

      <text
        x="376"
        y="135"
        fill="#fff"
        fontSize="12"
        fontWeight="600"
      >
        ZIPRO AI COPILOT
      </text>


      {/* Product manager message */}

      <rect
        x="354"
        y="164"
        width="221"
        height="58"
        rx="9"
        fill="#29292d"
      />

      <text
        x="366"
        y="185"
        fill="#fff"
        fontSize="11.5"
      >
        What should we fix first,
      </text>

      <text
        x="366"
        y="203"
        fill="#fff"
        fontSize="11.5"
      >
        and why?
      </text>


      {/* AI response */}

      <rect
        x="354"
        y="234"
        width="221"
        height="95"
        rx="9"
        fill="#1b1b1f"
        stroke={R}
        strokeOpacity=".5"
      />

      <text
        x="366"
        y="253"
        fill="#e5352b"
        fontSize="10"
        fontWeight="600"
      >
        ZIPRO RESPONSE
      </text>

      <text
        x="366"
        y="273"
        fill="#e9e9ec"
        fontSize="11.5"
      >
        Investigate driver
      </text>

      <text
        x="366"
        y="288"
        fill="#e9e9ec"
        fontSize="11.5"
      >
        cancellations first.
      </text>

      <path
        d="M365 300H563"
        stroke="#36363b"
      />

      <circle
        cx="372"
        cy="313"
        r="4"
        fill="#55b985"
      />

      <text
        x="382"
        y="317"
        fontSize="9.5"
        fill="#c9c9ce"
      >
        View supporting sources
      </text>

      <circle
        cx="564"
        cy="313"
        r="3.5"
        fill={R}
      >
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>

    </Frame>
  )
}


// =====================================================
// STOREBRIDGE MCP — Multi-Branch Retail
// =====================================================

function StoreBridge() {
  const branches = [
    ['LIBERTY PLAZA', 100],
    ['ONE GALLE FACE', 180],
    ['PETTAH', 260]
  ]

  return (
    <Frame
      label="StoreBridge MCP assistant connected to three retail branches"
      title="storebridge / walk & talk"
    >

      {/* Assistant panel */}

      <rect
        x="42"
        y="84"
        width="246"
        height="278"
        rx="12"
        fill="#101012"
        stroke="#303034"
      />

      <text
        x="60"
        y="112"
        fill="#92929a"
        fontSize="11"
        className="t-mono"
      >
        MANAGER / STOCK SEARCH
      </text>

      <rect
        x="58"
        y="128"
        width="215"
        height="54"
        rx="9"
        fill="#222226"
      />

      <text
        x="71"
        y="150"
        fill="#fff"
        fontSize="12"
      >
        S23 Ultra in other
      </text>

      <text
        x="71"
        y="168"
        fill="#fff"
        fontSize="12"
      >
        branches?
      </text>

      <rect
        x="58"
        y="196"
        width="215"
        height="143"
        rx="9"
        fill="#171719"
        stroke="#414147"
      />

      <circle
        cx="76"
        cy="215"
        r="5"
        fill={R}
      />

      <text
        x="88"
        y="220"
        fill="#fff"
        fontSize="12"
        fontWeight="600"
      >
        Walk & Talk Assistant
      </text>

      <text
        x="72"
        y="248"
        fill="#c7c7cb"
        fontSize="11"
      >
        Checking available stock
      </text>

      <text
        x="72"
        y="266"
        fill="#c7c7cb"
        fontSize="11"
      >
        across three branches.
      </text>

      <path
        d="M72 291H251"
        stroke="#36363b"
      />

      <circle
        cx="79"
        cy="314"
        r="4"
        fill="#55b985"
      />

      <text
        x="90"
        y="318"
        fill="#c5c5ca"
        fontSize="10"
      >
        Authorised inventory lookup
      </text>


      {/* MCP connection */}

      <path
        d="M288 227H338"
        stroke={R}
        strokeWidth="1.8"
        strokeDasharray="5 5"
      />

      <rect
        x="338"
        y="153"
        width="103"
        height="141"
        rx="12"
        fill="#1b1b1e"
        stroke={R}
        strokeOpacity=".7"
      />

      <text
        x="389"
        y="183"
        textAnchor="middle"
        fill="#fff"
        fontSize="15"
        fontWeight="600"
      >
        MCP
      </text>

      <text
        x="389"
        y="204"
        textAnchor="middle"
        fill="#aaaab0"
        fontSize="10"
      >
        1 SERVER
      </text>

      <path
        d="M356 226H423"
        stroke="#3c3c41"
      />

      <text
        x="389"
        y="251"
        textAnchor="middle"
        fill="#fff"
        fontSize="20"
      >
        08
      </text>

      <text
        x="389"
        y="269"
        textAnchor="middle"
        fill="#92929a"
        fontSize="10"
      >
        READ TOOLS
      </text>


      {/* Three branches */}

      {branches.map(([name, y]) => (
        <g key={name}>

          <path
            d={`M441 224H462V${y + 20}H476`}
            stroke="#55555b"
            fill="none"
            strokeWidth="1.4"
          />

          <rect
            x="476"
            y={y}
            width="118"
            height="48"
            rx="8"
            fill="#1e1e22"
            stroke="#39393e"
          />

          <circle
            cx="491"
            cy={y + 16}
            r="4"
            fill={R}
          />

          <text
            x="500"
            y={y + 18}
            fill="#fff"
            fontSize="9.4"
            fontWeight="600"
          >
            {name}
          </text>

          <text
            x="490"
            y={y + 35}
            fill="#97979f"
            fontSize="9"
          >
            PostgreSQL
          </text>

        </g>
      ))}


      {/* Animated data flow */}

      <circle r="4" fill={R}>
        <animateMotion
          dur="2.8s"
          repeatCount="indefinite"
          path="M288 227 L338 227 L441 224 L462 224 L462 200 L476 200"
        />
      </circle>

      <text
        x="338"
        y="338"
        fill="#85858b"
        fontSize="11"
        className="t-mono"
      >
        LangGraph · FastAPI · RBAC
      </text>

    </Frame>
  )
}


// =====================================================
// CREDIT RISK — Existing Thumbnail
// =====================================================

function Credit() {
  const bars = [62, 88, 48, 96, 74, 58]

  return (
    <Frame
      label="Credit risk prediction interface"
      title="credit-risk / default probability"
    >

      <rect
        x="44"
        y="84"
        width="260"
        height="272"
        rx="12"
        fill="#101012"
        stroke="#27272a"
      />

      <path
        d="M90 270a82 82 0 0 1 168 0"
        fill="none"
        stroke="#2b2b2f"
        strokeWidth="14"
        strokeLinecap="round"
      />

      <path
        d="M90 270a82 82 0 0 1 168 0"
        fill="none"
        stroke={R}
        strokeWidth="14"
        strokeLinecap="round"
        pathLength="100"
        className="draw"
        style={{
          strokeDasharray: 100,
          strokeDashoffset: 100,
          '--to': 4
        }}
      />

      <text
        x="174"
        y="252"
        textAnchor="middle"
        fill="#fff"
        fontSize="36"
        fontWeight="600"
      >
        96.3%
      </text>

      <text
        x="174"
        y="274"
        textAnchor="middle"
        fill="#85858b"
        fontSize="11"
        className="t-mono"
      >
        accuracy
      </text>

      {[
        ['ROC-AUC', '0.983'],
        ['Precision', '0.828'],
        ['Recall', '0.716']
      ].map(([label, value], i) => (
        <g key={label}>

          <text
            x={62 + i * 84}
            y="316"
            fill="#85858b"
            fontSize="9.5"
            className="t-mono"
          >
            {label}
          </text>

          <text
            x={62 + i * 84}
            y="338"
            fill="#fff"
            fontSize="17"
            fontWeight="600"
          >
            {value}
          </text>

        </g>
      ))}

      <rect
        x="324"
        y="84"
        width="268"
        height="130"
        rx="12"
        fill="#101012"
        stroke="#27272a"
      />

      <text
        x="342"
        y="108"
        fill="#85858b"
        fontSize="10.5"
        className="t-mono"
      >
        feature weight
      </text>

      {bars.map((height, i) => (
        <rect
          key={i}
          x={346 + i * 38}
          y={196 - height}
          width="22"
          height={height}
          rx="4"
          fill={i === 3 ? R : '#3a3a3f'}
          className="rise"
          style={{
            animationDelay: `${i * 0.1}s`
          }}
        />
      ))}

      <rect
        x="324"
        y="228"
        width="268"
        height="128"
        rx="12"
        fill="#101012"
        stroke="#27272a"
      />

      <text
        x="342"
        y="252"
        fill="#85858b"
        fontSize="10.5"
        className="t-mono"
      >
        default probability
      </text>

      <rect
        x="342"
        y="268"
        width="232"
        height="8"
        rx="4"
        fill="#2b2b2f"
      />

      <rect
        x="342"
        y="268"
        width="62"
        height="8"
        rx="4"
        fill={R}
        className="grow"
      />

      {['Low', 'Medium', 'High'].map((label, i) => (
        <text
          key={label}
          x={342 + i * 82}
          y="302"
          fill={i === 0 ? '#fff' : '#6d6d73'}
          fontSize="12"
          fontWeight="500"
        >
          {label}
        </text>
      ))}

      <text
        x="342"
        y="334"
        fill="#85858b"
        fontSize="10.5"
        className="t-mono"
      >
        FastAPI · Docker · MLflow
      </text>

    </Frame>
  )
}


// =====================================================
// SAMSUNG SALES — Existing Thumbnail
// =====================================================

function Sales() {
  const points =
    '0,120 50,98 100,106 150,70 200,82 250,44 300,52 350,18'

  return (
    <Frame
      label="Samsung global sales dashboards"
      title="samsung-sales / executive view"
    >

      {[
        ['Revenue', '$22.9M'],
        ['Records', '15,500'],
        ['Return rate', '9.2%']
      ].map(([label, value], i) => (
        <g key={label}>

          <rect
            x={44 + i * 192}
            y="84"
            width="176"
            height="62"
            rx="12"
            fill="#101012"
            stroke="#27272a"
          />

          <text
            x={60 + i * 192}
            y="108"
            fill="#85858b"
            fontSize="10.5"
            className="t-mono"
          >
            {label}
          </text>

          <text
            x={60 + i * 192}
            y="134"
            fill={i === 0 ? '#fff' : '#d9d9dc'}
            fontSize="22"
            fontWeight="600"
          >
            {value}
          </text>

        </g>
      ))}

      <rect
        x="44"
        y="160"
        width="380"
        height="196"
        rx="12"
        fill="#101012"
        stroke="#27272a"
      />

      {[0, 1, 2, 3].map(i => (
        <line
          key={i}
          x1="62"
          x2="408"
          y1={200 + i * 40}
          y2={200 + i * 40}
          stroke="#222225"
        />
      ))}

      <g transform="translate(66 200)">

        <polyline
          points={points}
          fill="none"
          stroke={R}
          strokeWidth="2.5"
          strokeLinejoin="round"
          pathLength="100"
          className="draw"
          style={{
            strokeDasharray: 100,
            strokeDashoffset: 100,
            '--to': 0
          }}
        />

        {points.split(' ').map(point => {
          const [x, y] = point.split(',')

          return (
            <circle
              key={point}
              cx={x}
              cy={y}
              r="3"
              fill="#151517"
              stroke={R}
              strokeWidth="1.5"
            />
          )
        })}

      </g>

      <rect
        x="440"
        y="160"
        width="152"
        height="196"
        rx="12"
        fill="#101012"
        stroke="#27272a"
      />

      {[
        ['Retail', 88],
        ['Online', 68],
        ['Partner', 46],
        ['Direct', 30]
      ].map(([label, width], i) => (
        <g key={label}>

          <text
            x="456"
            y={190 + i * 40}
            fill="#85858b"
            fontSize="10.5"
            className="t-mono"
          >
            {label}
          </text>

          <rect
            x="456"
            y={198 + i * 40}
            width="120"
            height="6"
            rx="3"
            fill="#2b2b2f"
          />

          <rect
            x="456"
            y={198 + i * 40}
            width={width * 1.08}
            height="6"
            rx="3"
            fill={i === 0 ? R : '#6d6d73'}
            className="grow"
            style={{
              animationDelay: `${i * 0.15}s`
            }}
          />

        </g>
      ))}

    </Frame>
  )
}


// =====================================================
// THUMBNAIL SELECTOR
// =====================================================

export default function Thumb({ kind, img }) {
  if (img) {
    return (
      <img
        className="thumb"
        src={img}
        alt=""
      />
    )
  }

  if (kind === 'dotlink') {
    return <DotLink />
  }

  if (kind === 'zipro') {
    return <Zipro />
  }

  if (kind === 'storebridge') {
    return <StoreBridge />
  }

  if (kind === 'stockbridge') {
    return <StoreBridge />
  }

  if (kind === 'credit') {
    return <Credit />
  }

  return <Sales />
}
