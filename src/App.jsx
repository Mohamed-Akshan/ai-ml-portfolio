
import { storyParagraphs } from './story.js'
import { useEffect, useRef, useState } from 'react'
import {
  LuArrowRight, LuArrowUpRight, LuMail, LuLinkedin,
  LuGithub, LuFileText, LuMenu, LuX, LuBrainCircuit,
  LuCode, LuPenTool, LuGraduationCap, LuBriefcase,
  LuHeadset, LuLayers, LuMessagesSquare, LuRepeat,
  LuLayoutDashboard, LuCpu, LuDatabase, LuServer,
  LuChartColumn, LuWorkflow, LuTerminal
} from 'react-icons/lu'

import {
  Reveal, Headline, ScrollWords, useScrollFrame,
  useSmoothScroll, scrollToId, scrollTop,
  reduced, clamp, pad
} from './hooks.jsx'

import { Chip, ToolIcon } from './Icons.jsx'
import Thumb from './Visuals.jsx'
import ContactForm from './ContactForm.jsx'
import Project from './Project.jsx'

import {
  me, media, facts, focus, process, skills,
  eduPath, experience, projects
} from './data.js'

const real = v => v && !v.startsWith('[')

const nav = [
  ['Home', 'home'],
  ['About', 'about'],
  ['What I do', 'services'],
  ['Toolkit', 'toolkit'],
  ['Projects', 'projects'],
  ['Experience', 'experience'],
  ['Education', 'education'],
  ['Contact', 'contact']
]

const Tag = ({ children }) => (
  <Reveal v="fade" className="tag">
    <span>//</span> {children}
  </Reveal>
)

const Pill = ({ href, onClick, children, ghost, dark }) => (
  <a
    href={href}
    onClick={onClick}
    className={
      'pill' +
      (ghost ? ' ghost' : '') +
      (dark ? ' on-dark' : '')
    }
  >
    <span>{children}</span>
    <i><LuArrowUpRight /></i>
  </a>
)

/* ============ Preloader ============ */

function Loader({ done }) {
  const [n, setN] = useState(0)
  const [out, setOut] = useState(false)

  useEffect(() => {
    if (reduced()) {
      done()
      return
    }

    let t0
    let raf
    const d = 1250

    const f = t => {
      t0 ??= t

      const p = clamp((t - t0) / d)

      setN(
        Math.round(
          (1 - Math.pow(1 - p, 3)) * 100
        )
      )

      if (p < 1) {
        raf = requestAnimationFrame(f)
      } else {
        setOut(true)
        setTimeout(done, 200)
      }
    }

    raf = requestAnimationFrame(f)

    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div
      className={'loader' + (out ? ' out' : '')}
      aria-hidden="true"
    >
      <span className="l-name"></span>

      <span className="l-n">
        {pad(n).padStart(3, '0')}
      </span>

      <i
        style={{
          transform: `scaleX(${n / 100})`
        }}
      />
    </div>
  )
}

/* ============ Hero ============ */

function Silhouette() {
  return (
    <svg
      viewBox="0 0 400 520"
      className="sil"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="sg"
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop
            offset="0"
            stopColor="#c6c6ca"
          />
          <stop
            offset="1"
            stopColor="#d4d4d7"
            stopOpacity=".2"
          />
        </linearGradient>
      </defs>

      <path
        d="M200 40c-52 0-86 40-86 96 0 38 14 66 34 82-72 20-120 62-132 130v172h368V348c-12-68-60-110-132-130 20-16 34-44 34-82 0-56-34-96-86-96z"
        fill="url(#sg)"
      />
    </svg>
  )
}

function Hero({ ready }) {
  const ref = useRef(null)

  useScrollFrame(() => {
    const el = ref.current

    if (el) {
      el.style.setProperty(
        '--hp',
        clamp(scrollY / innerHeight).toFixed(4)
      )
    }
  })

  return (
    <section
      id="home"
      ref={ref}
      className={
        'hero editorial-hero' +
        (ready ? ' ready' : '')
      }
    >
      <div className="h-wrap">

        <div className="editorial-copy">

          <h1>
            From real problems
            <br />
            <em>To</em> intelligent solutions
            <span className="hero-period">.</span>
          </h1>

          <p className="editorial-role">
            AI/ML Engineering | AI Full-Stack Development | Data Science Undergraduate
          </p>

          <div className="editorial-actions">

            <Pill
              href="#projects"
              onClick={e => {
                e.preventDefault()
                scrollToId('projects')
              }}
            >
              Explore My Work
            </Pill>

            <Pill
              href="#contact"
              onClick={e => {
                e.preventDefault()
                scrollToId('contact')
              }}
            >
              Let's Connect
            </Pill>

          </div>

          <div
            className="hero-signature"
            aria-label="Mohamed Akshan signature"
          >
            Mohamed Akshan
          </div>

        </div>

        <div
          className="editorial-photo"
          aria-hidden="true"
        >
          <img
            src={media.portrait}
            alt=""
            fetchPriority="high"
          />
        </div>

        <a
          className="h-scroll"
          href="#about"
          onClick={e => {
            e.preventDefault()
            scrollToId('about')
          }}
          aria-label="Scroll to About"
        >
          <i />
          <span>Scroll</span>
        </a>

      </div>
    </section>
  )
}

/* ============ About ============ */

const factIcons = [
  LuCode,
  LuBrainCircuit,
  LuPenTool,
  LuGraduationCap
]

function About() {
  return (
    <section id="about" className="sec dark">
      <div className="wrap">

        <Tag>Intro</Tag>

        <ScrollWords
          className="statement"
          parts={[
            ["I'm a data science undergraduate ", 0],
            ['who builds dependable AI systems ', 1],
            ['that turn messy data into ', 0],
            ['decisions people can act on.', 1]
          ]}
        />

        <div className="about-sub">

          <Reveal as="p" className="sub">
            My software engineering foundation shapes
            how I approach AI: build the complete
            product, test its behaviour and make
            the results understandable.
          </Reveal>

          <Reveal delay={120}>
            <Pill
              href="#projects"
              onClick={e => {
                e.preventDefault()
                scrollToId('projects')
              }}
              ghost
              dark
            >
              See my work
            </Pill>
          </Reveal>

        </div>

        <div className="bento">

          <Reveal
            v="clip"
            className="bcard bio"
          >

            <div className="bio-top">

              <div className="mini">
                {media.portrait ? (
                  <img
                    src={media.portrait}
                    alt=""
                    loading="lazy"
                  />
                ) : (
                  <Silhouette />
                )}
              </div>

              <span className="mono-s">
                Mohamed Akshan
              </span>

            </div>

            <div>
              <h3>I'm Akshan.</h3>
              <p>{me.summary}</p>
            </div>

            <Pill
              href="#contact"
              onClick={e => {
                e.preventDefault()
                scrollToId('contact')
              }}
            >
              Get in touch
            </Pill>

          </Reveal>

          {facts.map(([k, v], i) => {
            const I = factIcons[i]

            return (
              <Reveal
                key={k}
                v="clip"
                delay={90 * (i + 1)}
                className="bcard fact"
              >

                <span className="fi">
                  <I strokeWidth={1.4} />
                </span>

                <span className="mono-s">
                  {k}
                </span>

                <b>{v}</b>

              </Reveal>
            )
          })}

        </div>

        <div className="proc">

          <Reveal v="fade">
            <h3 className="sh">
              How I Work
            </h3>
          </Reveal>

          <ol>
            {process.map(([t, d], i) => (
              <Reveal
                as="li"
                key={t}
                delay={i * 90}
                v="line"
              >
                <span className="n">
                  {pad(i + 1)}
                </span>

                <b>{t}</b>

                <p>{d}</p>
              </Reveal>
            ))}
          </ol>

        </div>

      </div>
    </section>
  )
}

/* ============ Personal Story ============ */

function DataStory() {
  return (
    <section
      id="story"
      className="sec light story-teaser"
    >
      <div className="wrap">

        <Tag>My starting point</Tag>

        <Reveal v="up">
          <h2 className="story-teaser-title">
            A story that changed how I see technology
          </h2>
        </Reveal>

        <Reveal v="up">
          <p className="story-teaser-intro">
            A story about Target's use of customer
            data sparked my curiosity about what
            machine learning can reveal — and the
            responsibility that comes with it.
          </p>
        </Reveal>

        <Reveal v="fade">
          <a
            href="#/story"
            className="story-read pill"
          >
            <span>See the whole story</span>

            <i>
              <LuArrowUpRight />
            </i>
          </a>
        </Reveal>

      </div>
    </section>
  )
}

function StoryText({ text }) {
  return (
    <>
      {text
        .split(/(\*\*[^*]+\*\*)/g)
        .filter(Boolean)
        .map((part, index) =>
          part.startsWith('**') &&
            part.endsWith('**') ? (
            <strong key={index}>
              {part.slice(2, -2)}
            </strong>
          ) : (
            <span key={index}>
              {part}
            </span>
          )
        )}
    </>
  )
}

function StoryPage() {
  return (
    <main className="story-page">

      <div className="wrap story-page-inner">

        <a
          href="#home"
          className="story-back"
          aria-label="Back to portfolio"
        >
          ← Back to portfolio
        </a>

        <header className="story-page-head">

          <span className="mono-s red">
            THE STORY THAT INSPIRED ME
          </span>

          <h1>
            Pregnancy and the{' '}
            <em>Power of Data</em>
          </h1>

        </header>

        <article className="story-article">

          {storyParagraphs.map(
            (paragraph, index) => (
              <p key={index}>
                <StoryText text={paragraph} />
              </p>
            )
          )}

        </article>

        <a
          href="#home"
          className="story-back story-back-bottom"
        >
          ← Back to portfolio
        </a>

      </div>
    </main>
  )
}

/* ============ What I Do ============ */

function Services() {
  return (
    <section
      id="services"
      className="sec light"
    >
      <div className="wrap">

        <Tag>What I do</Tag>

        <Headline
          className="h2"
          parts={[
            ['Applied AI, ', 0],
            ['from raw data to working product.', 1]
          ]}
        />

        <div className="svc">

          {focus.map((f, i) => (
            <article
              key={f.t}
              className="svc-b"
            >

              <Reveal
                v="fade"
                className="svc-n"
                aria-hidden="true"
              >
                <span>{pad(i + 1)}</span>
              </Reveal>

              <div className="svc-c">

                <Reveal v="up">
                  <h3>{f.t}</h3>
                  <p>{f.d}</p>
                </Reveal>

                <ul>
                  {f.rows.map((r, k) => (
                    <Reveal
                      as="li"
                      v="line"
                      key={r}
                      delay={k * 70}
                    >
                      <span>{r}</span>

                      <small>
                        {pad(k + 1)}
                      </small>
                    </Reveal>
                  ))}
                </ul>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  )
}

/* ============ Toolkit ============ */

const gIcons = [
  LuCode,
  LuCpu,
  LuWorkflow,
  LuDatabase,
  LuServer,
  LuChartColumn
]

const spans = [
  's5',
  's7',
  's7',
  's5',
  's6',
  's6'
]

const blurb = [
  'Core languages and the data stack underneath everything.',
  'Classical ML, deep learning and the discipline of evaluation.',
  'Agent frameworks, models and protocols for tool use.',
  'Retrieval, reranking and measuring answer quality.',
  'Tracking, serving, containers and shipping.',
  'Turning analysis into something readable.'
]

function Toolkit() {
  const names = skills.flatMap(s => s[1])

  return (
    <section
      id="toolkit"
      className="sec dark"
    >
      <div className="wrap">

        <Tag>Toolkit</Tag>

        <Headline
          className="h2"
          parts={[
            ['The tools I ', 0],
            ['build with, and why.', 1]
          ]}
        />

        <div className="tk">

          {skills.map(([g, items], i) => {
            const I = gIcons[i]

            return (
              <Reveal
                key={g}
                v="clip"
                delay={(i % 2) * 110}
                className={
                  'tcard ' + spans[i]
                }
              >

                <span className="mono-s">
                  {pad(i + 1)}
                </span>

                <I
                  className="wm"
                  strokeWidth={1}
                  aria-hidden="true"
                />

                <h3>{g}</h3>

                <p>{blurb[i]}</p>

                <div className="chips">
                  {items.map(x => (
                    <Chip
                      key={x}
                      name={x}
                    />
                  ))}
                </div>

              </Reveal>
            )
          })}

        </div>

      </div>

      <div
        className="marq"
        aria-hidden="true"
      >
        <div>
          {[...names, ...names].map(
            (t, i) => (
              <span key={i}>
                {t}
                <i />
              </span>
            )
          )}
        </div>
      </div>

    </section>
  )
}

/* ============ Projects ============ */

function Stack() {
  const ref = useRef(null)

  // Reveal each card once, without measuring layout on every scroll frame.
  useEffect(() => {
    const stack = ref.current
    if (!stack || reduced() || !('IntersectionObserver' in window)) return

    const cards = Array.from(stack.querySelectorAll('.pcard'))
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('project-visible')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' })

    stack.classList.add('project-reveal-ready')
    cards.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <div
      className="stack"
      ref={ref}
    >

      {projects.map((p, k) => (
        <a
          key={p.id}
          href={'#/project/' + p.id}
          className="pcard"
        >

          <div className="pc-in">

            <div className="pc-l">

              <div className="pc-top">

                <span className="mono-s red">
                  {pad(k + 1)} / {pad(projects.length)}
                </span>

                <span className="mono-s">
                  {p.kind}
                </span>

              </div>

              <div>

                <h3>{p.title}</h3>

                {p.tagline && (
                  <em>{p.tagline}</em>
                )}

                <p>{p.short}</p>

              </div>

              <div className="pc-b">

                <div className="chips">

                  {p.tools
                    .slice(0, 4)
                    .map(x => (
                      <Chip
                        key={x}
                        name={x}
                      />
                    ))}

                  {p.tools.length > 4 && (
                    <span className="chip more">
                      +{p.tools.length - 4}
                    </span>
                  )}

                </div>

                <span className="pill on-dark">
                  <span>
                    View case study
                  </span>

                  <i>
                    <LuArrowUpRight />
                  </i>
                </span>

              </div>

            </div>

            <div className="pc-r">
              <Thumb
                kind={p.thumb}
                img={p.img}
              />
            </div>

          </div>

        </a>
      ))}

    </div>
  )
}

function Projects() {
  return (
    <section
      id="projects"
      className="sec light"
    >
      <div className="wrap">

        <Tag>Selected work</Tag>

        <Headline
          className="h2"
          parts={[
            ['Selected projects, ', 0],
            ['from question to outcome.', 1]
          ]}
        />

        <Stack />

      </div>
    </section>
  )
}

/* ============ Experience ============ */

const carry = [
  [
    LuLayoutDashboard,
    'Visual clarity',
    'Present complex outputs through interfaces people can navigate.'
  ],
  [
    LuMessagesSquare,
    'Listening first',
    'Find the real need behind a question or request.'
  ],
  [
    LuRepeat,
    'Constructive feedback',
    'Iterate with stakeholders instead of working from assumptions.'
  ],
  [
    LuLayers,
    'Business perspective',
    'Balance the technical solution with its practical value.'
  ]
]

function Experience() {
  const roleIc = [
    LuPenTool,
    LuHeadset
  ]

  return (
    <section
      id="experience"
      className="sec dark"
    >
      <div className="wrap">

        <Tag>Experience</Tag>

        <Headline
          className="h2"
          parts={[
            ['Design taught me clarity. ', 0],
            ['Sales taught me to listen.', 1]
          ]}
        />

        <div className="roles">

          {experience.map((e, k) => {
            const I = roleIc[k]

            return (
              <Reveal
                key={e.t}
                v="clip"
                delay={k * 120}
                className="bcard role"
              >

                <span
                  className="outline-n"
                  aria-hidden="true"
                >
                  {pad(k + 1)}
                </span>

                <span className="fi">
                  <I strokeWidth={1.4} />
                </span>

                <div>

                  <span className="mono-s">
                    {e.d}
                  </span>

                  <h3>{e.t}</h3>

                  <b>{e.c}</b>

                  <p>{e.p}</p>

                </div>

                {e.i.length > 0 && (
                  <div className="chips">

                    {e.i.map(x => (
                      <Chip
                        key={x}
                        name={x}
                      />
                    ))}

                  </div>
                )}

              </Reveal>
            )
          })}

        </div>

        <div className="carry">

          <Reveal v="fade">
            <h3 className="sh">
              What I carry into AI work
            </h3>
          </Reveal>

          <ul>
            {carry.map(([I, t, d], i) => (
              <Reveal
                as="li"
                v="line"
                key={t}
                delay={i * 90}
              >

                <I
                  strokeWidth={1.4}
                  className="ci"
                />

                <b>{t}</b>

                <p>{d}</p>

                <small>
                  {pad(i + 1)}
                </small>

              </Reveal>
            ))}
          </ul>

        </div>

      </div>
    </section>
  )
}

/* ============ Education ============ */

const eduLv = [
  'Level 4',
  'Level 5',
  'Diploma',
  'Degree'
]

function Education() {
  const ref = useRef(null)

  useScrollFrame(() => {
    const el = ref.current

    if (!el) return

    const r = el.getBoundingClientRect()

    el.style.setProperty(
      '--tp',
      clamp(
        (innerHeight * 0.6 - r.top) / r.height
      ).toFixed(4)
    )
  })

  return (
    <section
      id="education"
      className="sec light"
    >
      <div className="wrap">

        <Tag>Education</Tag>

        <Headline
          className="h2"
          parts={[
            ['Each step built on ', 0],
            ['the one before.', 1]
          ]}
        />

        <ol
          className="tl"
          ref={ref}
        >

          <span
            className="tl-line"
            aria-hidden="true"
          >
            <i />
          </span>

          {eduPath.map((e, i) => (
            <li
              key={e.t}
              className={
                'tl-i ' +
                (i % 2 ? 'r' : 'l')
              }
            >

              <span
                className="tl-dot"
                aria-hidden="true"
              />

              <Reveal
                v="clip"
                className="bcard"
              >

                <span
                  className="outline-n"
                  aria-hidden="true"
                >
                  {pad(i + 1)}
                </span>

                <span className="mono-s red">
                  {eduLv[i]}
                </span>

                <h3>{e.t}</h3>

                <p>{e.s}</p>

              </Reveal>

            </li>
          ))}

        </ol>

      </div>
    </section>
  )
}

/* ============ Contact ============ */

function Contact() {
  const links = [
    [
      'Email',
      me.email,
      'mailto:' + me.email,
      LuMail
    ],
    [
      'LinkedIn',
      me.linkedin,
      me.linkedin,
      LuLinkedin
    ],
    [
      'GitHub',
      me.github,
      me.github,
      LuGithub
    ]
  ]

  return (
    <section
      id="contact"
      className="sec dark contact"
    >
      <div className="wrap">

        <Tag>Contact</Tag>

        <div className="c-grid">

          <div className="c-l">

            <Headline
              className="h2 xl"
              parts={[
                ["Let's build something ", 0],
                ['useful together.', 1]
              ]}
            />

            <Reveal
              as="p"
              className="sub"
            >
              Have a role, project or technical
              challenge in mind? Send a note
              with a little context. I welcome
              thoughtful conversations about
              AI engineering work.
            </Reveal>

            <ul className="c-links">

              {links.map(([l, v, h, I], i) => (
                <Reveal
                  as="li"
                  v="line"
                  key={l}
                  delay={i * 90}
                >

                  <a
                    href={real(v) ? h : '#m'}
                    onClick={
                      !real(v)
                        ? e => {
                          e.preventDefault()
                          scrollToId('m', -200)
                        }
                        : undefined
                    }
                  >

                    <I strokeWidth={1.4} />

                    <span>

                      <small>{l}</small>

                      <b>
                        {real(v)
                          ? v.replace(/^https?:\/\//, '')
                          : 'Available on request'}
                      </b>

                    </span>

                    <LuArrowUpRight className="go" />

                  </a>

                </Reveal>
              ))}

            </ul>

            <Reveal>

              {real(me.cv) ? (

                <Pill
                  href={me.cv}
                  dark
                  ghost
                >
                  Download my CV
                </Pill>

              ) : (

                <button
                  className="pill ghost on-dark"
                  onClick={() => {
                    dispatchEvent(
                      new CustomEvent('prefill', {
                        detail: {
                          message:
                            'Hello Akshan, I would like to request your CV. Please send it to my email address.'
                        }
                      })
                    )

                    scrollToId('m', -200)
                  }}
                >

                  <span>
                    Request my CV
                  </span>

                  <i>
                    <LuFileText />
                  </i>

                </button>

              )}

            </Reveal>

          </div>

          <Reveal
            v="clip"
            className="c-r"
          >
            <ContactForm />
          </Reveal>

        </div>

      </div>
    </section>
  )
}

/* ============ Main Application ============ */

export default function App() {
  const [route, setRoute] = useState(
    location.hash
  )

  const [ready, setReady] = useState(false)
  const [act, setAct] = useState('')
  const [menu, setMenu] = useState(false)
  const progressRef = useRef(null)
  const activeRef = useRef('')

  useSmoothScroll()

  /* Card pointer animation */

  useEffect(() => {
    const m = e => {
      const c = e.target.closest?.(
        '.bcard,.tcard'
      )

      if (!c) return

      const r = c.getBoundingClientRect()

      c.style.setProperty(
        '--mx',
        e.clientX - r.left + 'px'
      )

      c.style.setProperty(
        '--my',
        e.clientY - r.top + 'px'
      )
    }

    addEventListener(
      'pointermove',
      m,
      { passive: true }
    )

    return () => {
      removeEventListener(
        'pointermove',
        m
      )
    }
  }, [])

  /* Pause decorative marquee outside the viewport. */
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const elements = document.querySelectorAll('.marq > div')
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        entry.target.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused'
      }
    })
    elements.forEach(el => { el.style.animationPlayState = 'paused'; observer.observe(el) })
    return () => observer.disconnect()
  }, [route, ready])

  /* Track route changes */

  useEffect(() => {
    const h = () => {
      setRoute(location.hash)
    }

    addEventListener('hashchange', h)

    return () => {
      removeEventListener(
        'hashchange',
        h
      )
    }
  }, [])

  /* Scroll progress indicator */

  useScrollFrame(() => {
    const progress = progressRef.current
    if (!progress) return
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - innerHeight)
    progress.style.transform = `scaleX(${clamp(scrollY / maxScroll)})`
  })

  const pid = route.startsWith('#/project/')
    ? route.slice(10)
    : null

  const storyRoute = route === '#/story'

  const innerPage = Boolean(
    pid || storyRoute
  )

  /* FIXED: Handle page navigation */

  useEffect(() => {
    if (innerPage) {
      scrollTop()
      return
    }

    if (route === '#home' || route === '') {
      scrollTop()
      return
    }

    if (
      route.length > 1 &&
      !route.startsWith('#/')
    ) {
      const timer = setTimeout(() => {
        scrollToId(route.slice(1))
      }, 60)

      return () => clearTimeout(timer)
    }
  }, [route, innerPage])

  /* Mobile menu behaviour */

  useEffect(() => {
    document.body.style.overflow = menu
      ? 'hidden'
      : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menu])

  /* Active navigation indicator */

  useScrollFrame(() => {
    if (innerPage) {
      const next = pid ? 'projects' : 'about'
      if (activeRef.current !== next) { activeRef.current = next; setAct(next) }
      return
    }

    let cur = ''

    nav.forEach(([, id]) => {
      const el = document.getElementById(id)

      if (
        el &&
        el.getBoundingClientRect().top <=
        innerHeight * 0.45
      ) {
        cur = id
      }
    })

    if (activeRef.current !== cur) { activeRef.current = cur; setAct(cur) }
  }, [innerPage, pid])

  /* FIXED: Navigation handler */

  const go = id => e => {
    e.preventDefault()

    setMenu(false)

    if (innerPage) {
      const targetHash = '#' + id

      if (location.hash !== targetHash) {
        location.hash = targetHash
      } else if (id === 'home') {
        scrollTop()
      } else {
        scrollToId(id)
      }

      return
    }

    if (id === 'home') {
      scrollTop()
      return
    }

    scrollToId(id)
  }

  return (
    <>

      {!ready && (
        <Loader
          done={() => setReady(true)}
        />
      )}

      <div
        ref={progressRef}
        className="progress"
        style={{ transform: 'scaleX(0)' }}
      />

      {/* Navbar — no name or logo */}

      <header className="nav">
        <div className="nav-in">

          <nav aria-label="Primary">

            {nav.map(([label, id]) => (
              <a
                key={id}
                href={'#' + id}
                onClick={go(id)}
                className={
                  act === id ? 'on' : ''
                }
              >
                {label}
              </a>
            ))}

          </nav>

          <button
            className="burger"
            onClick={() => setMenu(!menu)}
            aria-label="Menu"
            aria-expanded={menu}
          >
            {menu ? (
              <LuX />
            ) : (
              <LuMenu />
            )}
          </button>

        </div>
      </header>

      {/* Mobile Navigation */}

      <div
        className={
          'drawer' +
          (menu ? ' open' : '')
        }
        aria-hidden={!menu}
      >

        {nav.map(([label, id], i) => (
          <a
            key={id}
            href={'#' + id}
            onClick={go(id)}
            style={{ '--i': i }}
          >
            <small>
              {pad(i + 1)}
            </small>

            {label}
          </a>
        ))}

      </div>

      {/* Pages */}

      {pid ? (

        <Project
          key={pid}
          id={pid}
        />

      ) : storyRoute ? (

        <StoryPage />

      ) : (

        <main>
          <Hero ready={ready} />
          <About />
          <DataStory />
          <Services />
          <Toolkit />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>

      )}

      {/* Footer */}

      <footer
        className={
          'foot' +
          (innerPage ? ' dark' : '')
        }
      >
        <div className="wrap">

          <div className="f-row">

            <span>
              Generative AI · Applied Machine Learning · Data Science
            </span>

            <span>
              © 2026 Mohamed Akshan
            </span>

            <a
              href="#home"
              onClick={go('home')}
            >
              Back to top
            </a>

          </div>

        </div>
      </footer>

    </>
  )
}
