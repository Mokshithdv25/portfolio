import ragContractImg from "@/assets/project-rag-contract.png";
import agentOpsImg from "@/assets/project-agentops.png";
import llmopsImg from "@/assets/project-llmops.png";
import finetuneImg from "@/assets/project-finetune.png";
import ventureImg from "@/assets/project-venture-new.png";
import gridpulseImg from "@/assets/project-gridpulse.png";
import topicIntelImg from "@/assets/project-topic-intel.png";

const projects = [
  {
    n: "01",
    title: "Production RAG Contract Intelligence",
    tag: "Query Routing · Re-Ranking",
    desc: "Hybrid RAG + relational search over 1,000+ supplier contracts, designed with query rewriting, source routing, sub-query decomposition, and re-ranking to surface liability without hallucinating in high-stakes decisions.",
    img: ragContractImg,
    stack: ["LangGraph", "pgvector", "BGE Reranker", "SQL"],
  },
  {
    n: "02",
    title: "EchoMind Agentic RevOps Engine",
    tag: "Graph Orchestration",
    desc: "Multi-agent content workflow for GTM teams: scraper, grader, RAG validator, LLM generator, and QA loop with stateful handoffs to raise content pass rate toward 85% while controlling hallucination risk.",
    img: agentOpsImg,
    stack: ["LangGraph", "PRAW", "Vector DB", "GA4 / GSC"],
  },
  {
    n: "03",
    title: "LLMOps Guardrail Evaluation Pipeline",
    tag: "Reliability · Safety",
    desc: "CI-style evaluation layer for RAG and agent systems: malicious-prompt stress tests, faithfulness scoring, answer relevance, context precision, and dashboard exports so model behavior is tested like production software.",
    img: llmopsImg,
    stack: ["Ragas", "TruLens", "NeMo Guardrails", "W&B"],
  },
  {
    n: "04",
    title: "Local Fine-Tuning Optimization Lab",
    tag: "QLoRA · Quantization",
    desc: "Build track for privacy-sensitive domain models: fine-tune Llama or Mistral on niche documentation with QLoRA, track loss and GPU memory, then quantize to 4-bit for low-latency local inference.",
    img: finetuneImg,
    stack: ["PyTorch", "Transformers", "Unsloth", "llama.cpp"],
  },
  {
    n: "05",
    title: "Vantage Point — VC Investment Intelligence",
    tag: "Thesis Generation · ML Prediction",
    desc: "Streamlit investment intelligence dashboard that turns historical VC data into thesis-ready insights—exit efficiency, geographic capital density, sector deep dives, investor matchmaking, and a Random Forest startup success predictor.",
    img: ventureImg,
    stack: ["Streamlit", "Python", "scikit-learn", "Pandas"],
    href: "https://github.com/Mokshithdv25/VentureCapital",
    demo: "https://venturecapital-ujqvnjxgynh5y9ckpesqzi.streamlit.app/",
  },
  {
    n: "06",
    title: "GridPulse ML — EV Surge Risk Pipeline",
    tag: "MLOps · CI/CD · Serving",
    desc: "End-to-end production ML system that predicts EV charging station surge risk: reproducible data prep, shared feature engineering, validation gates, drift monitoring, FastAPI inference with Prometheus metrics, Docker, and GitHub Actions CI/CD—runnable with no external datasets or cloud accounts.",
    img: gridpulseImg,
    stack: ["FastAPI", "scikit-learn", "Docker", "GitHub Actions"],
    href: "https://github.com/Mokshithdv25/end-to-end-prd-ML-pipeline",
  },
  {
    n: "07",
    title: "ChatGPT Review Topic Intelligence",
    tag: "LDA · NMF · MLflow",
    desc: "Streamlit app for large-scale ChatGPT app review analysis: upload a CSV, run LDA and NMF topic models, view aggregated theme distributions, and export predictions—with models trained in Colab and tracked in Databricks MLflow.",
    img: topicIntelImg,
    stack: ["Streamlit", "scikit-learn", "MLflow", "LDA / NMF"],
    href: "https://github.com/Mokshithdv25/reviews_topic_app",
    demo: "https://mokshithdv25-chatgpt-topic-app-app-newq6b.streamlit.app/",
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
            Competitive AI Portfolio Systems
          </h2>
          <span className="font-mono text-[10px] text-muted-foreground/60 uppercase tracking-widest">
            001 — 007
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <article
              key={p.n}
              data-reveal="scale"
              data-scroll-motion
              data-tilt={i % 2 === 0 ? "left" : "right"}
              style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}
              className={`project-card glass-card rounded-2xl p-6 md:p-8 group ${
                i >= 2 ? "md:col-span-2" : ""
              }`}
            >
              <div className="project-bg-layer" aria-hidden />
              <div className="project-image-frame mb-10 overflow-hidden rounded-xl bg-surface">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className={`w-full ${
                    i >= 2 ? "aspect-[21/9]" : "aspect-[4/3]"
                  } project-image object-cover`}
                />
              </div>


              <div className="flex justify-between items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    <span className="text-accent">{p.n}</span>
                    <span className="h-px w-6 bg-border" />
                    <span>{p.tag}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-md text-pretty">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="stack-pill px-2.5 py-1 text-[10px] font-mono border border-border rounded-full text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                    {"demo" in p && p.demo ? (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="stack-pill px-2.5 py-1 text-[10px] font-mono border border-accent/40 rounded-full text-accent hover:bg-accent/10 transition-colors"
                      >
                        Live demo
                      </a>
                    ) : null}
                  </div>
                </div>
                {"href" in p && p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${p.title} on GitHub`}
                    className="project-arrow shrink-0 size-12 rounded-full border border-border grid place-items-center group-hover:bg-foreground group-hover:text-background"
                  >
                    <span className="text-xl leading-none">↗</span>
                  </a>
                ) : (
                  <div className="project-arrow shrink-0 size-12 rounded-full border border-border grid place-items-center group-hover:bg-foreground group-hover:text-background">
                    <span className="text-xl leading-none">↗</span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
