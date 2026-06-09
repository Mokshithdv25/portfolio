import { Building2, ExternalLink, Github } from "lucide-react";
import ragContractImg from "@/assets/project-rag-contract-v2.png";
import agentOpsImg from "@/assets/project-agentops-v2.png";
import gridpulseImg from "@/assets/project-gridpulse-v2.png";
import prdCopilotImg from "@/assets/project-prd-copilot-v2.png";
import experimentImg from "@/assets/project-experimentation-growth-v2.png";
import warehouseImg from "@/assets/project-data-warehouse-v2.png";

const projects = [
  {
    n: "01",
    title: "Production RAG Contract Intelligence",
    tag: "Query Routing · Reranking",
    desc: "Enterprise contract intelligence system for grounded answers over supplier agreements.",
    img: ragContractImg,
    stack: ["LangGraph", "pgvector", "BGE Reranker", "SQL"],
    proof: [
      { label: "Problem", text: "Manual contract review made liability discovery slow, inconsistent, and hard to audit." },
      { label: "Architecture", text: "SQL filters, vector retrieval, query rewriting, reranking, and cited answer generation." },
      { label: "Result", text: "$300M+ liability visibility with source-backed clauses for executive decisions." },
    ],
  },
  {
    n: "02",
    title: "Reddit Pulse — Agentic RevOps Engine",
    tag: "Graph Orchestration",
    desc: "Agentic RevOps workflow that turns Reddit and search signals into qualified GTM content.",
    img: agentOpsImg,
    stack: ["LangGraph", "PRAW", "Vector DB", "GA4 / GSC"],
    href: "https://github.com/Mokshithdv25/reddit-pulse",
    proof: [
      { label: "Problem", text: "GTM teams lose time moving between scraping, scoring, drafting, and manual QA." },
      { label: "Architecture", text: "Specialized agents handle ingest, grading, RAG validation, generation, and approval." },
      { label: "Result", text: "Designed to lift pass rate toward 85% while reducing hallucination risk." },
    ],
  },
  {
    n: "03",
    title: "Databricks Lakehouse MLflow Platform",
    tag: "Databricks · Delta Lake · BI",
    desc: "End-to-end e-commerce recommendation pipeline predicting probability of purchase.",
    img: warehouseImg,
    stack: ["Databricks", "PySpark", "Delta Lake", "MLflow", "XGBoost", "SQL"],
    href: "https://github.com/Mokshithdv25/Databricks-Lakehouse-MLflow-Platform",
    proof: [
      { label: "Problem", text: "E-commerce teams need scalable recommendations from noisy click, view, and purchase events." },
      { label: "Architecture", text: "Bronze, Silver, and Gold Delta layers feed PySpark features, candidate generation, and an XGBoost ranker." },
      { label: "Result", text: "MLflow registry, REST serving, offline metrics, cold-start handling, and drift monitoring." },
    ],
  },
  {
    n: "04",
    title: "Experimentation & Growth Analytics Lab",
    tag: "A/B Testing · Causal Metrics",
    desc: "Data science lab for turning A/B tests into product growth decisions.",
    img: experimentImg,
    stack: ["Python", "SQL", "Statsmodels", "Product Metrics"],
    href: "https://github.com/Mokshithdv25/Experimentation-Growth-Analytics-Platform",
    proof: [
      { label: "Problem", text: "Teams need evidence for ship, hold, or iterate decisions beyond vanity metrics." },
      { label: "Architecture", text: "Power analysis, funnel SQL, uplift estimates, confidence intervals, and guardrails." },
      { label: "Result", text: "Decision readout connects statistical lift to revenue, retention, and risk metrics." },
    ],
  },
  {
    n: "05",
    title: "ChatGPT Reviews to PRD Copilot",
    tag: "Product AI · VoC Analytics",
    desc: "AI product tool that converts user reviews into PRD-ready roadmap inputs.",
    img: prdCopilotImg,
    stack: ["Streamlit", "scikit-learn", "OpenAI API", "MLflow"],
    href: "https://github.com/Mokshithdv25/reviews_topic_app",
    demo: "https://mokshithdv25-chatgpt-topic-app-app-newq6b.streamlit.app/",
    proof: [
      { label: "Problem", text: "Review data is noisy and difficult to translate into clear product priorities." },
      { label: "Architecture", text: "Topic modeling, sentiment signals, AI synthesis, PRD sections, and metric framing." },
      { label: "Result", text: "Turns customer feedback into prioritized features, goals, and success metrics." },
    ],
  },
  {
    n: "06",
    title: "GridPulse ML — EV Surge Risk Pipeline",
    tag: "MLOps · CI/CD · Serving",
    desc: "Production ML pipeline for predicting EV charging station surge risk.",
    img: gridpulseImg,
    stack: ["FastAPI", "scikit-learn", "Docker", "GitHub Actions"],
    href: "https://github.com/Mokshithdv25/end-to-end-prd-ML-pipeline",
    proof: [
      { label: "Problem", text: "Operators need early warnings before demand spikes overload stations and routes." },
      { label: "Architecture", text: "Raw data prep, feature engineering, validation gates, API serving, and drift checks." },
      { label: "Result", text: "Deployable FastAPI service with risk scores, recommendations, and monitoring metrics." },
    ],
  },
];

export function Projects() {
  return (
    <section id="systems" className="px-6 md:px-10 mb-32 md:mb-40">
      <div className="max-w-7xl mx-auto">
        <div
          data-reveal
          className="flex items-end justify-between mb-12 border-b border-border pb-6"
        >
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
            AI, Data & Product Portfolio Systems
          </h2>
          <span className="font-mono text-[10px] text-muted-foreground/60 uppercase tracking-widest">
            001 — 006
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <article
              key={p.n}
              data-reveal="scale"
              data-scroll-motion
              data-tilt={i % 2 === 0 ? "left" : "right"}
              style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}
              className="project-card glass-card rounded-2xl p-5 md:p-6 group"
            >
              <div className="project-bg-layer" aria-hidden />
              <div className="project-image-frame mb-7 overflow-hidden rounded-xl bg-surface">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="w-full aspect-[16/10] project-image object-cover"
                />
              </div>


              <div className="flex flex-col gap-5">
                <div>
                  <div className="flex items-center gap-2 md:gap-3 mb-3 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.14em] md:tracking-[0.2em] text-muted-foreground">
                    <span className="text-accent">{p.n}</span>
                    <span className="h-px w-6 bg-border" />
                    <span>{p.tag}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 tracking-tight">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xl text-pretty">
                    {p.desc}
                  </p>
                  <div className="project-proof-grid mt-6">
                    {p.proof.map((item) => (
                      <div key={item.label} className="project-proof-item">
                        <span>{item.label}</span>
                        <p>{item.text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="stack-pill px-2.5 py-1 text-[10px] font-mono border border-border rounded-full text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3 border-t border-border/70 pt-5">
                  {"href" in p && p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${p.title} GitHub repository`}
                      className="project-readme-link inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/10 px-4 py-2.5 text-[10px] font-mono uppercase tracking-[0.16em] text-accent hover:bg-foreground hover:text-background"
                    >
                      <Github className="size-3.5" strokeWidth={1.8} />
                      View GitHub
                    </a>
                  ) : (
                    <div className="project-readme-link inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-[10px] font-mono uppercase tracking-[0.16em] text-muted-foreground">
                      <Building2 className="size-3.5" strokeWidth={1.8} />
                      Company project
                    </div>
                  )}
                  {"demo" in p && p.demo ? (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-readme-link inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-[10px] font-mono uppercase tracking-[0.16em] text-muted-foreground hover:bg-foreground hover:text-background"
                    >
                      <ExternalLink className="size-3.5" strokeWidth={1.8} />
                      Live Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
