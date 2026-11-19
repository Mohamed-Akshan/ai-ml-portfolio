
import { useEffect, useState } from 'react'

import {
  LuArrowUpRight,
  LuArrowLeft
} from 'react-icons/lu'

import {
  Reveal,
  Headline,
  Count,
  useInView,
  pad
} from './hooks.jsx'

import { Chip } from './Icons.jsx'
import Thumb from './Visuals.jsx'
import { projects } from './data.js'


// =====================================================
// HELPERS
// =====================================================

const real = value => (
  Boolean(value) &&
  !value.startsWith('[')
)

const sections = [
  ['ps', 'Problem & solution'],
  ['arch', 'Architecture'],
  ['feat', 'Features'],
  ['res', 'Results'],
  ['stack', 'Stack'],
  ['take', 'Takeaways']
]


// =====================================================
// ANIMATED METRIC BAR
// =====================================================

function Bar({ pct, children, label }) {
  const [ref, visible] = useInView({
    threshold: 0.4
  })

  return (
    <div
      ref={ref}
      className="metric"
    >

      <span className="mono-s">
        {label}
      </span>

      <b>
        {children}
      </b>

      <div className="mbar">
        <i
          style={{
            transform: `scaleX(${visible ? pct / 100 : 0})`
          }}
        />
      </div>

    </div>
  )
}


// =====================================================
// INTERACTIVE ARCHITECTURE WALKTHROUGH
// =====================================================

function Arch({ nodes }) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const total = nodes.length

  useEffect(() => {
    if (paused || total === 0) {
      return
    }

    const timer = setTimeout(() => {
      setActive(current => (current + 1) % total)
    }, 3800)

    return () => clearTimeout(timer)

  }, [active, paused, total])

  if (total === 0) {
    return null
  }

  const [title, description] = nodes[active]

  return (
    <div className="px">

      {/* Steps */}

      <div
        className="px-list"
        role="tablist"
        aria-label="Pipeline steps"
      >

        {nodes.map(([name, detail], index) => (
          <button
            key={`${name}-${index}`}
            role="tab"
            aria-selected={index === active}
            className={
              index === active
                ? 'on'
                : index < active
                  ? 'done'
                  : ''
            }
            onClick={() => {
              setActive(index)
              setPaused(true)
            }}
          >

            <i>
              {pad(index + 1)}
            </i>

            <span>
              <b>{name}</b>
              <small>{detail}</small>
            </span>

          </button>
        ))}

      </div>


      {/* Active architecture step */}

      <div
        className="px-stage"
        key={active}
      >

        <span
          className="outline-n"
          aria-hidden="true"
        >
          {pad(active + 1)}
        </span>

        <div>

          <span className="mono-s red">
            Step {active + 1} of {total}
          </span>

          <h3>
            {title}
          </h3>

          <p>
            {description}
          </p>

        </div>


        {/* Connections */}

        <div className="px-io">

          <div>
            <small>Receives from</small>

            <b>
              {nodes[active - 1]?.[0] || 'Raw input'}
            </b>
          </div>

          <span aria-hidden="true">
            <LuArrowUpRight />
          </span>

          <div>
            <small>Passes to</small>

            <b>
              {nodes[active + 1]?.[0] || 'Final output'}
            </b>
          </div>

        </div>


        {/* Play / Pause */}

        <button
          className="lnk"
          onClick={() => {
            setPaused(!paused)
          }}
        >
          {paused ? 'Play' : 'Pause'} walkthrough
        </button>

      </div>

    </div>
  )
}


// =====================================================
// EVALUATION METRIC CARD
// =====================================================

function MetricCard({
  label,
  value,
  max,
  prefix = ''
}) {

  if (value == null) {
    return (
      <Reveal
        v="clip"
        className="bcard"
      >
        <div className="metric">

          <span className="mono-s">
            {label}
          </span>

          <b>Pending</b>

          <p>
            Awaiting verified evaluation results
          </p>

        </div>
      </Reveal>
    )
  }


  const small = max === 1

  const percentage = max > 0
    ? Math.min(value / max * 100, 100)
    : 0

  const decimals = small
    ? value > 0.9
      ? 4
      : 3
    : value % 1
      ? 2
      : 0

  return (
    <Reveal
      v="clip"
      className="bcard"
    >

      <Bar
        pct={percentage}
        label={label}
      >

        <Count
          to={value}
          dec={decimals}
          prefix={prefix}
        />

      </Bar>

    </Reveal>
  )
}


// =====================================================
// PROJECT DETAIL PAGE
// =====================================================

export default function Project({ id }) {

  const index = projects.findIndex(
    project => project.id === id
  )

  if (index === -1) {
    return null
  }

  const project = projects[index]

  const next = projects[
    (index + 1) % projects.length
  ]


  // Headline summary

  const firstMetric = project.metrics?.[0]

  const headlineResult = !firstMetric
    ? 'Not available'
    : firstMetric[1] == null
      ? 'Evaluation pending'
      : firstMetric[0] + ' ' + (
        firstMetric[2] === 1
          ? firstMetric[1]
          : firstMetric[1].toLocaleString()
      )

  const summary = [
    [
      'Core stack',
      project.tools.slice(0, 3).join(', ')
    ],
    [
      'Headline result',
      headlineResult
    ],
    [
      'Tools used',
      project.tools.length
    ]
  ]


  return (
    <main className="proj">

      {/* =============================================
          HEADER
      ============================================= */}

      <section className="sec dark ph">

        <div className="wrap">

          <a
            className="back"
            href="#projects"
          >
            <LuArrowLeft strokeWidth={1.5} />
            All projects
          </a>


          <span className="mono-s red">
            {project.kind}
          </span>


          <Headline
            as="h1"
            now
            className="h1"
            parts={[
              [project.title + ' ', 0],
              [project.tagline || '', 1]
            ]}
          />


          <p className="sub">
            {project.sub}
          </p>


          <div className="ph-row">

            {/* Project links */}

            <div className="ph-links">

              {real(project.gh) && (
                <a
                  className="pill on-dark"
                  href={project.gh}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>GitHub</span>

                  <i>
                    <LuArrowUpRight />
                  </i>
                </a>
              )}


              {real(project.live) && (
                <a
                  className="pill ghost on-dark"
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Open live demo</span>

                  <i>
                    <LuArrowUpRight />
                  </i>
                </a>
              )}


              {!real(project.gh) && !real(project.live) && (
                <span className="mono-s">
                  Links coming soon
                </span>
              )}

            </div>


            {/* Project summary */}

            <dl>

              {summary.map(([label, value]) => (
                <div key={label}>

                  <dt className="mono-s">
                    {label}
                  </dt>

                  <dd>
                    {value}
                  </dd>

                </div>
              ))}

            </dl>

          </div>


          {/* Project thumbnail */}

          <Reveal
            v="clip"
            className="ph-vis"
          >

            <Thumb
              kind={project.thumb}
              img={project.img}
            />

          </Reveal>

        </div>

      </section>


      {/* =============================================
          PROBLEM AND SOLUTION
      ============================================= */}

      <section
        id="ps"
        className="sec light"
      >

        <div className="wrap">

          <Headline
            className="h2"
            parts={[
              ['The problem, ', 0],
              ['and what I built.', 1]
            ]}
          />


          <div className="ps">

            {/* Problem */}

            <Reveal
              v="clip"
              className="bcard"
            >

              <span className="mono-s red">
                The problem
              </span>

              {project.problem.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}

            </Reveal>


            {/* Solution */}

            <Reveal
              v="clip"
              delay={120}
              className="bcard inv"
            >

              <span className="mono-s red">
                The solution
              </span>

              {project.solution.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}

            </Reveal>

          </div>

        </div>

      </section>


      {/* =============================================
          INTERACTIVE ARCHITECTURE
      ============================================= */}

      <section
        id="arch"
        className="sec dark"
      >

        <div className="wrap">

          <Headline
            className="h2"
            parts={[
              ['Architecture, ', 0],
              ['step by step.', 1]
            ]}
          />

          <Reveal v="up">
            <Arch nodes={project.arch} />
          </Reveal>

        </div>

      </section>


      {/* =============================================
          FEATURES
      ============================================= */}

      <section
        id="feat"
        className="sec light"
      >

        <div className="wrap">

          <Headline
            className="h2"
            parts={[
              ['Key ', 0],
              ['features.', 1]
            ]}
          />


          <ul className="feat">

            {project.features.map((feature, index) => (
              <Reveal
                as="li"
                v="line"
                key={`${feature}-${index}`}
                delay={index * 70}
              >

                <small>
                  {pad(index + 1)}
                </small>

                <span>
                  {feature}
                </span>

              </Reveal>
            ))}

          </ul>

        </div>

      </section>


      {/* =============================================
          RESULTS AND EVALUATION
      ============================================= */}

      <section
        id="res"
        className="sec dark"
      >

        <div className="wrap">

          <Headline
            className="h2"
            parts={[
              ['Results, ', 0],
              [project.metricNote, 1]
            ]}
          />


          <div className="metrics">

            {project.metrics.map(
              ([label, value, max, prefix = '']) => (
                <MetricCard
                  key={label}
                  label={label}
                  value={value}
                  max={max}
                  prefix={prefix}
                />
              )
            )}

          </div>

        </div>

      </section>


      {/* =============================================
          TECHNOLOGY STACK
      ============================================= */}

      <section
        id="stack"
        className="sec light"
      >

        <div className="wrap">

          <Headline
            className="h2"
            parts={[
              ['Tech ', 0],
              ['stack.', 1]
            ]}
          />


          <Reveal className="chips big">

            {project.tools.map(tool => (
              <Chip
                key={tool}
                name={tool}
              />
            ))}

          </Reveal>

        </div>

      </section>


      {/* =============================================
          ENGINEERING TAKEAWAYS
      ============================================= */}

      <section
        id="take"
        className="sec dark"
      >

        <div className="wrap">

          <Headline
            className="h2"
            parts={[
              ['What I ', 0],
              ['took away.', 1]
            ]}
          />


          <div className="takes">

            {project.learned.map((lesson, index) => (
              <Reveal
                key={index}
                v="clip"
                delay={index * 110}
                className="bcard"
              >

                <span
                  className="outline-n"
                  aria-hidden="true"
                >
                  {pad(index + 1)}
                </span>

                <p>
                  {lesson}
                </p>

              </Reveal>
            ))}

          </div>

        </div>

      </section>


      {/* =============================================
          NEXT PROJECT
      ============================================= */}

      <a
        className="sec light next"
        href={'#/project/' + next.id}
      >

        <div className="wrap">

          <span className="mono-s red">
            Next project
          </span>

          <div className="nx">

            <span>
              {next.title}
            </span>

            <i>
              <LuArrowUpRight />
            </i>

          </div>

          <p>
            {next.tagline || next.kind}
          </p>

        </div>

      </a>

    </main>
  )
}
