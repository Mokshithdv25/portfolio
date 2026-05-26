import ragImg from "@/assets/project-rag.jpg";
import agentsImg from "@/assets/project-agents.jpg";
import vectorImg from "@/assets/project-vector.jpg";

const projects = [
  {
    n: "01",
    title: "Production RAG Contract Intelligence",
    tag: "Query Routing · Re-Ranking",
    desc: "Hybrid RAG + relational search over 1,000+ supplier contracts, designed with query rewriting, source routing, sub-query decomposition, and re-ranking to surface liability without hallucinating in high-stakes decisions.",
    img: ragImg,
    stack: ["LangGraph", "pgvector", "BGE Reranker", "SQL"],
  },
  {
    n: "02",
    title: "EchoMind Agentic RevOps Engine",
    tag: "Graph Orchestration",
    desc: "Multi-agent content workflow for GTM teams: scraper, grader, RAG validator, LLM generator, and QA loop with stateful handoffs to raise content pass rate toward 85% while controlling hallucination risk.",
    img: agentsImg,
    stack: ["LangGraph", "PRAW", "Vector DB", "GA4 / GSC"],
  },
  {
    n: "03",
    title: "LLMOps Guardrail Evaluation Pipeline",
    tag: "Reliability · Safety",
    desc: "CI-style evaluation layer for RAG and agent systems: malicious-prompt stress tests, faithfulness scoring, answer relevance, context precision, and dashboard exports so model behavior is tested like production software.",
    img: vectorImg,
    stack: ["Ragas", "TruLens", "NeMo Guardrails", "W&B"],
  },
  {
    n: "04",
    title: "Local Fine-Tuning Optimization Lab",
    tag: "QLoRA · Quantization",
    desc: "Build track for privacy-sensitive domain models: fine-tune Llama or Mistral on niche documentation with QLoRA, track loss and GPU memory, then quantize to 4-bit for low-latency local inference.",
    img: ragImg,
    stack: ["PyTorch", "Transformers", "Unsloth", "llama.cpp"],
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
            001 — 004
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
                  </div>
                </div>
                <div className="project-arrow shrink-0 size-12 rounded-full border border-border grid place-items-center group-hover:bg-foreground group-hover:text-background">
                  <span className="text-xl leading-none">↗</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
