import { SiPython, SiPostgresql, SiPandas, SiNumpy, SiJavascript, SiScikitlearn, SiTensorflow, SiLangchain, SiQdrant, SiMlflow, SiFastapi, SiDocker, SiGit, SiGithub, SiReact, SiVercel, SiGooglecloud, SiGooglegemini, SiFigma } from 'react-icons/si'
import { LuBrainCircuit, LuDatabase, LuWorkflow, LuServer, LuChartColumn, LuCode, LuSearch, LuScanSearch, LuNetwork, LuGauge, LuChartLine, LuTerminal } from 'react-icons/lu'

// Monochrome brand marks only (inherit currentColor): consistent, restrained, professional.
const brands = { Python: SiPython, PostgreSQL: SiPostgresql, SQL: SiPostgresql, Pandas: SiPandas, NumPy: SiNumpy, JavaScript: SiJavascript, 'Scikit-learn': SiScikitlearn, TensorFlow: SiTensorflow, LangChain: SiLangchain, Qdrant: SiQdrant, MLflow: SiMlflow, FastAPI: SiFastapi, Docker: SiDocker, Git: SiGit, GitHub: SiGithub, React: SiReact, Vercel: SiVercel, GCP: SiGooglecloud, Gemini: SiGooglegemini, Figma: SiFigma }
const lines = { LangGraph: LuWorkflow, Pinecone: LuDatabase, FAISS: LuScanSearch, ChromaDB: LuDatabase, BM25: LuSearch, Cohere: LuNetwork, RAGAS: LuGauge, Langfuse: LuChartLine, MCP: LuTerminal, NLP: LuBrainCircuit, EDA: LuChartColumn, XGBoost: LuGauge, Tableau: LuChartColumn, Matplotlib: LuChartLine, Seaborn: LuChartLine, MLflow: LuChartLine }

export function ToolIcon({ name, size = 18 }) {
  const B = brands[name] || lines[name] || LuCode
  return <B size={size} strokeWidth={1.5} aria-hidden="true" />
}
export const Chip = ({ name }) => <span className="chip"><ToolIcon name={name} size={16} />{name}</span>
export { LuBrainCircuit, LuServer, LuChartColumn, LuWorkflow }
