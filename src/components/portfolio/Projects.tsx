import ragImg from "@/assets/project-rag.jpg";
import agentsImg from "@/assets/project-agents.jpg";
import vectorImg from "@/assets/project-vector.jpg";

const projects = [
  {
    n: "01",
    title: "Neural-Sync RAG",
    tag: "Retrieval Architecture",
    desc: "Hybrid retrieval system for a Fortune 500 financial suite — reduced hallucination rates by 42% with citation-grounded synthesis across 1M+ documents.",
    img: ragImg,
    stack: ["LlamaIndex", "Pinecone", "Claude 3.5"],
  },
  {
    n: "02",
    title: "Agentic Workflow Engine",
    tag: "Multi-Agent Orchestration",
    desc: "Autonomous swarm architecture for multi-step supply-chain decisioning. 12 specialised agents collaborating via shared state machine.",
    img: agentsImg,
    stack: ["LangGraph", "GPT-4o", "FastAPI"],
  },
  {
    n: "03",
    title: "Semantic Vector Router",
    tag: "LLM Optimisation",
    desc: "Low-latency classification layer cutting enterprise inference cost by 40% via intelligent prompt caching and embedding-based routing.",
    img: vectorImg,
    stack: ["ONNX", "Redis", "PyTorch"],
  },
];

export function Projects() {
  return (
    <section id="systems" className="px-6 md:px-10 mb-32 md:mb-40">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12 border-b border-border pb-6">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
            Selected Architectural Work
          </h2>
          <span className="font-mono text-[10px] text-muted-foreground/60 uppercase tracking-widest">
            001 — 003
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <article
              key={p.n}
              className={`glass-card rounded-2xl p-6 md:p-8 group ${
                i === 2 ? "md:col-span-2" : ""
              }`}
            >
              <div className="mb-10 overflow-hidden rounded-xl bg-surface">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className={`w-full ${
                    i === 2 ? "aspect-[21/9]" : "aspect-[4/3]"
                  } object-cover transition-transform duration-700 ease-out group-hover:scale-105`}
                />
              </div>

              <div className="flex justify-between items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    <span className="text-accent">{p.n}</span>
                    <span className="h-px w-6 bg-border" />
                    <span>{p.tag}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-md text-pretty">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 text-[10px] font-mono border border-border rounded-full text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="shrink-0 size-12 rounded-full border border-border grid place-items-center group-hover:bg-foreground group-hover:text-background group-hover:rotate-45 transition-all duration-500">
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
