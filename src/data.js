
export const me = {
  name: 'Mohamed Akshan',
  short: 'Akshan',
  role: 'Generative AI · Applied Machine Learning · Data Science',
  email: 'mohamedakshan.dev@gmail.com',
  phone: '',
  linkedin: 'https://www.linkedin.com/in/akshan-mohamed-ashraf',
  github: 'https://github.com/Mohamed-Akshan',
  cv: '',
  formEndpoint: '/api/contact',

  summary: 'I bring a software engineering foundation to machine learning. My projects span customer feedback intelligence, financial risk and analytics, with an interest in making technical work practical for the people using it.',

  about: [
    'I care about the decisions a system helps someone make, not only the model behind it.',
    'My approach connects problem understanding, engineering and measurable results.'
  ]
}


export const focus = [
  {
    t: 'Agentic AI & RAG',
    d: 'Multi-agent systems that retrieve, reason and check their own sources.',
    rows: [
      'LangGraph multi-agent workflows',
      'Hybrid retrieval and reranking',
      'Guardrails and source citations',
      'Corrective search',
      'Evaluation with RAGAS',
      'Observability with Langfuse'
    ]
  },

  {
    t: 'Applied Machine Learning',
    d: 'Models that are explainable, measured honestly and tracked from the first experiment.',
    rows: [
      'Feature engineering',
      'Model benchmarking',
      'Interpretable modelling',
      'Experiment tracking with MLflow',
      'Classification and regression',
      'Held-out evaluation'
    ]
  },

  {
    t: 'AI Engineering',
    d: 'The path from a notebook to a service people can actually use.',
    rows: [
      'Inference APIs with FastAPI',
      'Containerised backends',
      'React interfaces for models',
      'PostgreSQL data layer',
      'Deployment on Vercel and GCP',
      'Git-based workflows'
    ]
  },

  {
    t: 'Analytics & BI',
    d: 'Numbers and dashboards that answer the question that was actually asked.',
    rows: [
      'KPI design',
      'Exploratory data analysis',
      'Data cleaning and outlier analysis',
      'Tableau dashboards',
      'Python visual analysis',
      'Stakeholder reporting'
    ]
  }
]


export const process = [
  [
    'Understand the Problem',
    'Identify the real-world challenge, business objectives, and expected outcomes.'
  ],
  [
    'Explore the Domain & Data',
    'Understand domain context, analyze data, and uncover meaningful patterns.'
  ],
  [
    'Design & Build',
    'Engineer features, develop models, and integrate intelligent AI solutions.'
  ],
  [
    'Evaluate & Optimize',
    'Validate performance, analyze errors, and improve accuracy, reliability, and efficiency.'
  ],
  [
    'Deploy & Monitor',
    'Deliver scalable AI applications through APIs, deployment, and continuous monitoring.'
  ]
]


export const skills = [
  [
    'Programming & Data',
    ['Python', 'SQL', 'PostgreSQL', 'Pandas', 'NumPy', 'JavaScript']
  ],
  [
    'Machine Learning & Deep Learning',
    ['Scikit-learn', 'XGBoost', 'TensorFlow', 'NLP', 'EDA']
  ],
  [
    'Generative & Agentic AI',
    [
      'LLMs',
      'OpenAI',
      'LangChain',
      'LangGraph',
      'Gemini',
      'MCP',
      'Prompt engineering',
      'Tool calling'
    ]
  ],
  [
    'Vector Search & Evaluation',
    [
      'Pinecone',
      'FAISS',
      'ChromaDB',
      'Qdrant',
      'BM25',
      'Cohere',
      'Semantic search',
      'RAGAS',
      'Langfuse'
    ]
  ],
  [
    'MLOps & Engineering',
    [
      'MLflow',
      'FastAPI',
      'REST APIs',
      'Docker',
      'Git',
      'GitHub',
      'React',
      'Vercel',
      'GCP',
      'Neon'
    ]
  ],
  [
    'Analytics & Visualization',
    [
      'Tableau',
      'Matplotlib',
      'Seaborn',
      'Statistical analysis',
      'KPI reporting'
    ]
  ]
]


export const concepts = [
  'Supervised learning',
  'Feature engineering',
  'Model evaluation',
  'Classification',
  'Regression',
  'Corrective RAG',
  'Prompt engineering',
  'Tool calling',
  'Guardrails',
  'Hybrid retrieval',
  'Semantic search',
  'Statistical analysis',
  'KPI reporting',
  'REST APIs'
]


export const education = [
  {
    t: 'BSc (Hons) in Data Science',
    s: 'Cardiff Metropolitan University · ICBT Campus'
  },
  {
    t: 'Higher National Diploma (HND) in Software Engineering',
    s: 'Cardiff Metropolitan University · ICBT Campus'
  }
]


export const experience = [
  {
    t: 'Graphic Designer',
    c: 'Crystal Cube (Remote) · Express Bedsheets',
    d: '1.5 years of experience',
    p: 'Created brand visuals, promotional artwork and digital marketing assets. Worked from client briefs, revised designs through feedback and delivered production-ready materials for different business audiences.',
    i: [
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Canva'
    ],
    img: ''
  },
  {
    t: 'Sales Manager',
    c: 'Walk & Talk',
    d: '3 years of experience',
    p: 'Led customer-facing retail sales, explained products clearly, handled objections and supported purchasing decisions. Developed practical strengths in listening, negotiation, relationship building and day-to-day operations.',
    i: [
      'Customer relations',
      'Sales communication',
      'Negotiation'
    ],
    img: ''
  }
]


export const strengths = [
  'Design sense for dashboards and UI',
  'Customer-facing communication',
  'Stakeholder feedback loops',
  'Full-stack delivery'
]


export const media = {
  portrait: '/portrait.webp'
}


export const facts = [
  ['Foundation', 'Software Engineering'],
  ['Specialism', 'Applied AI and ML'],
  ['Perspective', 'Design + customer experience'],
  ['Academic path', 'Data Science at Cardiff Met']
]


export const eduPath = [
  {
    t: 'NVQ Level 4',
    s: 'Vocational Training Authority (VTA)'
  },
  {
    t: 'NVQ Level 5',
    s: 'Vocational Training Authority (VTA)'
  },
  {
    t: 'HND in Software Engineering',
    s: 'Cardiff Metropolitan University · ICBT Campus'
  },
  {
    t: 'BSc (Hons) in Data Science',
    s: 'Cardiff Metropolitan University · ICBT Campus'
  }
]


export const projects = [

  // =====================================================
  // PROJECT 01 — ZIPRO
  // =====================================================

  {
    id: 'zipro',
    thumb: 'zipro',

    title: 'ZIPRO',
    kind: 'Agentic Customer Intelligence',
    tagline: 'Voice of Customer Copilot',

    sub: 'Turning scattered customer feedback into evidence-backed product decisions',

    short: 'An AI product copilot that helps product managers investigate customer complaints, identify recurring issues and make decisions backed by real feedback.',

    gh: 'https://github.com/Mohamed-Akshan/Zipro-Voice-of-Customer-Copilot',

    live: 'https://zipro-frontend.vercel.app/',

    tools: [
      'LangGraph',
      'OpenAI',
      'LangChain',
      'Pinecone',
      'Gemini',
      'BM25',
      'Cohere',
      'PostgreSQL',
      'Neon',
      'FastAPI',
      'React',
      'Langfuse',
      'RAGAS'
    ],

    problem: [
      'One of the most important responsibilities of a product manager is understanding what customers are struggling with and deciding what the product team should improve next. In a real product job, feedback rarely arrives in one organised place. It comes from Play Store reviews, support tickets, sales calls, customer interviews, surveys and WhatsApp messages. The product manager has to turn all this scattered, messy feedback into meaningful product decisions.',

      'Consider a ride-hailing application similar to Uber. One customer complains that a driver cancelled after making them wait fifteen minutes. Another says their refund still has not arrived. Someone else reports being charged for a failed booking, while other customers complain about unreliable pickups or not finding drivers during peak hours. These complaints may describe related problems, but they are spread across different sources and written in different ways.',

      'The product manager must investigate which problems occur repeatedly, understand why customers are frustrated, identify patterns and decide what deserves attention first. Manually reviewing every complaint takes time, and a traditional dashboard showing complaint counts does not always explain the customer experience behind those numbers.',

      'There is also a serious trust problem with AI-generated recommendations. If an assistant says that driver cancellations should be the top product priority, the product manager must be able to ask: "Based on what evidence? Which customers actually reported this?" Without verifiable sources, even a convincing recommendation becomes difficult to trust or defend in a product meeting. The real challenge is not simply summarising customer feedback, but turning it into clear, actionable and evidence-backed product decisions.'
    ],

    solution: [
      'I developed ZIPRO, an agentic AI-powered Voice of Customer Copilot, to help product managers investigate fragmented feedback and turn customer complaints into informed product improvement decisions. Designed around a fictional ride-hailing application, ZIPRO combines an interactive Customer Intelligence Dashboard with a conversational AI Product Copilot.',

      'The dashboard provides a structured view of recurring complaints, issue categories, customer feedback trends and other statistics. Instead of manually searching through individual reviews or tickets, a product manager can ask natural-language questions such as: "What are customers complaining about most?", "Why are riders frustrated with cancellations?" or "Which issue should we prioritise this quarter?"',

      'Behind the conversational interface, I implemented a three-agent workflow using LangGraph. The Investigation Agent gathers relevant customer evidence using structured PostgreSQL analytics and Hybrid Corrective RAG. The retrieval pipeline combines Pinecone semantic search using Gemini embeddings with BM25 keyword search, supports Cohere reranking, and can perform corrective retrieval when the initial evidence is insufficient.',

      'The Product Decision Agent uses the investigation findings to propose product improvements, explain the reasoning and suggest success metrics. The Evidence Verification Agent then checks important claims, source IDs and quotations against the original feedback records stored in PostgreSQL. This is the important distinction: ZIPRO does not simply generate recommendations. It helps product managers question those recommendations and inspect the customer evidence supporting them.',

      'I used OpenAI for LLM reasoning, PostgreSQL with Neon for relational data, FastAPI for backend services and React for the user interface. LangGraph PostgreSQL checkpointing supports conversational context, while Langfuse provides observability and RAGAS supports retrieval evaluation. Recommendations remain evidence-informed hypotheses for product managers to validate rather than automatic product roadmap decisions.'
    ],

    arch: [
      [
        'Product Manager Request',
        'The product manager asks ZIPRO about customer complaints, recurring issues or possible product improvements using the React interface.'
      ],
      [
        'FastAPI & Domain Guardrails',
        'The backend receives the request, validates its scope and loads relevant conversation context.'
      ],
      [
        'Investigation Agent',
        'The first LangGraph agent investigates the question and determines which customer evidence and business statistics are required.'
      ],
      [
        'PostgreSQL Analytics',
        'SQLAlchemy queries structured feedback records and issue statistics from PostgreSQL.'
      ],
      [
        'Hybrid RAG Retrieval',
        'Pinecone semantic retrieval using Gemini embeddings is combined with BM25 keyword search to discover relevant customer feedback.'
      ],
      [
        'Reranking & Corrective Retrieval',
        'Optional Cohere reranking improves evidence selection. When retrieved context is insufficient, the system can reformulate the search and retrieve again.'
      ],
      [
        'Product Decision Agent',
        'The second LangGraph agent uses the investigation findings to propose evidence-backed product improvements and relevant success metrics.'
      ],
      [
        'Evidence Verification Agent',
        'The third LangGraph agent verifies source identifiers, quotations and important claims against original PostgreSQL feedback records.'
      ],
      [
        'Grounded Response',
        'ZIPRO returns a conversational answer with supporting source citations, while Langfuse captures workflow traces for observability.'
      ]
    ],

    features: [
      'Three LangGraph agents: Investigation, Product Decision and Evidence Verification',
      'Customer Intelligence Dashboard with SQL-backed issue statistics and feedback trends',
      'AI Product Copilot for natural-language complaint investigation and product decision support',
      'Hybrid Corrective RAG combining Pinecone semantic search and BM25 keyword retrieval',
      'Gemini embeddings and optional Cohere reranking',
      'Evidence-backed product recommendations with suggested success metrics',
      'Clickable source citations linked to original customer feedback records',
      'Verification of feedback source IDs, customer quotations and issue associations',
      'Corrective retrieval and explicit handling of insufficient evidence',
      'Multi-turn conversation memory using LangGraph PostgreSQL checkpointing',
      'Feedback ingestion supporting CSV, JSON, DOCX, PDF and XLSX',
      'OpenAI-powered reasoning and FastAPI backend integration',
      'Neon PostgreSQL database integration',
      'Langfuse observability and RAGAS evaluation'
    ],

    metrics: [
      ['Faithfulness', 0.867, 1],
      ['Context Recall', 0.720, 1]
    ],

    metricNote: 'RAGAS results from standalone RAG evaluation, not the complete multi-agent workflow.',

    learned: [
      'Building ZIPRO changed how I think about AI product recommendations. Generating an impressive answer is not enough. A product manager needs to know what customer evidence supports a conclusion before making a product decision.',

      'The most valuable engineering work was connecting retrieval, structured analytics, reasoning and verification into one workflow. This taught me to prioritise traceable evidence, careful evaluation and honest handling of insufficient information.'
    ]
  },


  // =====================================================
  // PROJECT 02 — STOREBRIDGE MCP
  // =====================================================

  {
    id: 'storebridge',
    thumb: 'storebridge',

    title: 'StoreBridge MCP',
    kind: 'Agentic Multi-Branch Retail Intelligence',
    tagline: 'Built for Walk & Talk',

    sub: 'A permission-aware AI assistant connecting three retail branches through one conversation',

    short: 'Inspired by a lost-sale experience in mobile retail, StoreBridge makes cross-branch inventory and business intelligence accessible through natural language.',

    gh: 'https://github.com/Mohamed-Akshan/storebridge-mcp',

    live: 'https://storebridge-mcp-ten.vercel.app/',

    tools: [
      'FastMCP',
      'LangGraph',
      'OpenAI',
      'Gemini',
      'FastAPI',
      'PostgreSQL',
      'Neon',
      'SQLAlchemy',
      'React',
      'JWT',
      'Langfuse',
      'RAGAS'
    ],

    problem: [
      'During my time working at Walk & Talk, a mobile phone retailer with three branches in Liberty Plaza, One Galle Face Mall and Pettah, I experienced firsthand how a simple delay in accessing information could cost us a customer.',

      'I remember one particularly busy day during the festive shopping season. Our Liberty Plaza branch was crowded when a customer walked in looking for a Samsung Galaxy S23 Ultra. Unfortunately, we did not have the model in stock at our branch. However, there was a possibility that one of our other two branches had it.',

      'We immediately tried calling our colleagues at One Galle Face and Pettah to check availability. But it was peak shopping season, and both stores were handling their own rush of customers. Our calls went unanswered, and we had no way to confirm the stock ourselves. After waiting for some time, the customer became frustrated and decided to leave. We lost a potential sale, not necessarily because the phone was unavailable across our business, but because we could not find out quickly enough.',

      'This experience highlighted a much bigger operational problem. Although all three branches belonged to the same business, each operated with a separate system. Checking another branch’s inventory often meant calling its staff, while the owner had to switch between different systems to review sales, stock levels, profitability and employee performance.',

      'The information existed, but it was not easily accessible when we needed it most. And in retail, a delayed answer can mean a lost customer.'
    ],

    solution: [
      'That experience inspired me to build StoreBridge MCP, an agentic AI-powered retail intelligence system designed for the Walk & Talk retail workflow.',

      'Instead of requiring staff to call another branch or manually switch between different systems, StoreBridge connects all three branches through a single conversational interface. Using the Walk & Talk Assistant, a branch manager can simply ask: "Do we have a Samsung Galaxy S23 Ultra available at One Galle Face or Pettah?" The assistant retrieves available inventory records from the relevant branch databases and provides an answer without depending on another employee to respond.',

      'The system also solves a different challenge for the business owner. Rather than logging into three separate systems to analyse business performance, the owner can ask questions such as: "Which branch generated the highest sales this month?", "Who are our top-performing employees?" or "Which branch generated the highest profit?" and receive data-backed answers through natural conversation.',

      'However, access to information is not the same for everyone. Branch managers can check inventory and permitted product information, while sensitive financial reports, profit analysis and employee performance data are restricted to the owner. These permissions are enforced through role-based authentication, MCP tool-level restrictions and input/output guardrails, ensuring that a manager cannot access confidential information simply by asking the AI.',

      'Technically, StoreBridge uses LangGraph to coordinate a Supervisor Agent and a Business Agent, a reusable FastMCP server exposing read-only business tools, FastAPI for backend services and separate PostgreSQL databases representing each branch. The SQLAlchemy data layer retrieves authorised information while business calculations are performed by backend queries rather than invented by the language model.',

      'What started as a frustrating experience on a busy sales floor became an opportunity to build a practical AI solution that connects fragmented retail systems, reduces the time spent searching for information and helps staff respond to customers before a potential sale is lost. This portfolio implementation uses synthetic retail and financial records, not real Walk & Talk customer data.'
    ],

    arch: [
      [
        'Owner or Manager Request',
        'A user asks the Walk & Talk Assistant about product availability, pricing, stock or business performance using the React interface.'
      ],
      [
        'FastAPI Authentication',
        'The backend validates the user session with JWT-based authentication and identifies the authorised role.'
      ],
      [
        'Supervisor Agent',
        'The first LangGraph agent understands intent and routes business requests, out-of-scope questions and prohibited write operations.'
      ],
      [
        'Business Agent',
        'The second LangGraph agent interprets the retail question and selects appropriate business tools.'
      ],
      [
        'MCP Client & Tool Permissions',
        'The MCP client accesses only the tools permitted for the authenticated user role.'
      ],
      [
        'Custom FastMCP Server',
        'A reusable FastMCP server exposes eight read-only business tools for inventory, pricing and owner-authorised analytics.'
      ],
      [
        'SQLAlchemy & Branch Databases',
        'Business tools execute structured database queries against Liberty Plaza, One Galle Face and Pettah PostgreSQL databases. Authentication records are held separately.'
      ],
      [
        'Validation & Guardrails',
        'The system applies role-scoped access, input/output checks and restrictions on modifying inventory or business records.'
      ],
      [
        'Grounded Business Response',
        'The assistant returns available data in plain language, tables or charts. Langfuse supports workflow observability.'
      ]
    ],

    features: [
      'Two LangGraph agents: Supervisor Agent and Business Agent',
      'One reusable FastMCP server providing eight read-only retail business tools',
      'Cross-branch inventory search and product variant identification',
      'Selling-price comparisons and low-stock monitoring',
      'Owner-level revenue, gross profit and branch performance analytics',
      'Employee sales performance and product-category insights',
      'Three separate PostgreSQL branch databases and one authentication database',
      'PostgreSQL integration with Neon',
      'Role-based access for owner, branch manager and demo users',
      'Manager access restricted to authorised inventory and pricing information',
      'JWT authentication, HttpOnly cookies and Argon2 password hashing',
      'Server-side MCP tool permissions and input/output guardrails',
      'Read-only conversational tools that cannot update inventory or delete transactions',
      'Contextual follow-up questions without repeating the full product name',
      'React dashboard with charts, markdown tables and conversational business intelligence',
      'Langfuse observability and RAGAS evaluation'
    ],

    metrics: [
      ['Faithfulness', 0.895, 1],
      ['Context Recall', 0.841, 1]
    ],

    metricNote: 'RAGAS scores for eligible MCP-grounded responses; non-retrieval refusals were excluded.',

    learned: [
      'This project began with a problem I understood from the sales floor. An unanswered stock enquiry can turn into customer frustration and a lost purchasing opportunity. I learned how to translate a real operational bottleneck into a focused AI engineering problem.',

      'I also learned that connecting business databases to an LLM is not enough. A trustworthy system must verify user permissions, restrict tool access, calculate business figures from actual records and prevent unauthorised operations regardless of how a question is phrased.'
    ]
  },


  // =====================================================
  // PROJECT 03 — CREDIT RISK
  // ORIGINAL CONTENT PRESERVED
  // =====================================================

  {
    id: 'credit-risk',
    thumb: 'credit',
    title: 'Credit Risk Prediction',
    kind: 'ML-Powered Lending Risk Assessment',
    sub: 'Default prediction served through a FastAPI endpoint',

    short: 'A credit default system with an interpretable model, tracked experiments and a React interface.',

    gh: 'https://github.com/Mohamed-Akshan/credit-risk-prediction',

    live: 'https://credit-risk-prediction-orcin.vercel.app/',

    tools: [
      'Python',
      'Pandas',
      'Scikit-learn',
      'XGBoost',
      'MLflow',
      'FastAPI',
      'React',
      'Docker'
    ],

    problem: [
      'Before a lender issues a loan, it needs to understand the chance that a borrower may not repay. Useful information is spread across customer financial records, loan history and credit-bureau data, and the relationships are not obvious from any one field. A simple rule or a high overall accuracy score can hide costly missed defaults.',

      'I worked with roughly 50,000 records to turn that fragmented information into a repeatable prediction pipeline. The challenge was not just to score customers, but to compare models fairly and keep the result understandable for a person reviewing risk.'
    ],

    solution: [
      'The application estimates the probability of default from applicant information through a consistent workflow, replacing ad hoc calculations with a tested, repeatable model.',

      'I selected Logistic Regression after comparing it with Random Forest and XGBoost, balancing predictive metrics with interpretability. A React interface communicates the estimated risk while keeping the actual lending decision with a human reviewer. This is an educational model, not a production lending approval system.'
    ],

    arch: [
      ['Data sources', 'Financial, loan and credit-bureau records'],
      ['Data consolidation', 'Join records and inspect data quality'],
      ['Preprocessing & features', 'Encode/transform variables and engineer loan-to-income and delinquency features'],
      ['Train/test split', 'Maintain a held-out evaluation set'],
      ['Model benchmarking', 'Compare Logistic Regression, Random Forest and XGBoost'],
      ['Experiment evaluation', 'Record metrics and candidate runs with MLflow'],
      ['Model selection & packaging', 'Choose Logistic Regression and persist preprocessing plus model artifacts'],
      ['FastAPI inference', 'Validate input and calculate default probability'],
      ['React application', 'Present the result for human interpretation']
    ],

    features: [
      'Loan-to-income and delinquency feature engineering',
      'Three-model benchmark with MLflow experiment tracking',
      'Default probability display for informed human review',
      'Model artifacts and preprocessing packaged together',
      'Docker-packaged FastAPI backend with React frontend'
    ],

    metrics: [
      ['Accuracy', 0.9628, 1],
      ['ROC-AUC', 0.9827, 1],
      ['Precision', 0.828, 1],
      ['Recall', 0.716, 1]
    ],

    metricNote: 'Held-out test set of 12,497 records.',

    learned: [
      'A strong overall accuracy score is not enough in a risk-sensitive application. I had to examine precision and recall, and think about the consequences of missed defaults.',

      'Keeping feature transformations together with the trained model was essential to making the web application behave consistently with evaluation.'
    ]
  },


  // =====================================================
  // PROJECT 04 — SAMSUNG SALES
  // ORIGINAL CONTENT PRESERVED
  // =====================================================

  {
    id: 'samsung-sales',
    thumb: 'sales',
    title: 'Samsung Global Sales',
    kind: 'Revenue & Customer Intelligence Dashboard',
    sub: 'Three interactive Tableau dashboards on 2021–2024 sales',

    short: 'Executive, pricing and customer/channel dashboards built on 15,500 sales records.',

    gh: '',

    live: 'https://public.tableau.com/app/profile/mohamed.akshan/viz/SamsungSalesDashboard_17733325342200/ExecutiveOverview?publish=yes',

    tools: [
      'Tableau',
      'Python',
      'Pandas',
      'Matplotlib',
      'Seaborn'
    ],

    problem: [
      'A global sales team can see its total revenue and still miss the questions that matter: Which countries are improving? Which phone categories contribute most? Are discounts associated with stronger sales, and do certain customer segments return more products?',

      'The Samsung sales dataset contained 15,500 transactions across 2021–2024. Because product, customer, channel and pricing information sat together in the raw records, answering these questions manually meant repeated filtering, calculations and reports. Missing values and unusual transactions also needed checking before the figures could be trusted.'
    ],

    solution: [
      'I organized the data into three focused Tableau dashboards: an executive overview for commercial performance, a product and pricing view for discount and device questions, and a customer/channel view for buying and return patterns.',

      'Interactive filters, drill-downs and consistent KPI definitions make it easier to move from a headline number to its explanation. The result is a clearer starting point for business discussion, rather than a collection of charts with no decision in mind.'
    ],

    arch: [
      ['Sales data', '15,500 records covering 2021–2024'],
      ['Data profiling', 'Explore distributions, missing values and outliers with Python'],
      ['Data preparation', 'Treat missing values and investigate unusual observations in context'],
      ['Metric design', 'Define revenue, ASP, returns, QoQ growth and 5G contribution'],
      ['Tableau dashboards', 'Build executive, product-pricing and customer-channel views'],
      ['Interactive exploration', 'Filters, comparisons, drill-downs and insights']
    ],

    features: [
      'Executive performance dashboard',
      'Product pricing dashboard',
      'Customer and channel analytics dashboard',
      'KPIs: average selling price, returned revenue, quarter-over-quarter growth, 5G revenue contribution'
    ],

    metrics: [
      ['Records analysed', 15500, 15500, ''],
      ['Dataset revenue ($M)', 22.91, 25, '$'],
      ['Return rate (%)', 9.2, 100, '']
    ],

    metricNote: 'Dataset revenue and return rate, 2021–2024.',

    learned: [
      'I found that dashboard design starts with the business question, not with choosing a chart. Each view needed to support a clear decision.',

      'Cleaning data required judgment: an unusually large sale is not automatically an error, and removing it without context can distort the story.'
    ]
  }
]
