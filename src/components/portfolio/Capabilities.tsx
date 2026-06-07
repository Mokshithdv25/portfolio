const skills = [
  { name: "RAG & Query Transformation", level: "Router / Re-ranker" },
  { name: "Agentic Workflows", level: "Tools / Roles / Handoffs" },
  { name: "Product PRDs & Metrics", level: "VoC / Prioritization" },
  { name: "Experimentation", level: "A/B / Causal Analysis" },
  { name: "ML Systems", level: "FastAPI / Docker / CI" },
  { name: "Data Engineering & BI", level: "SQL / dbt / Warehouse" },
];

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="px-6 md:px-10 py-24 md:py-32 bg-surface/30 border-y border-border"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          data-reveal
          className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground mb-12 border-b border-border pb-4"
        >
          Core Expertise
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {skills.map((s, i) => (
              <div
                key={s.name}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
                className="kinetic-list-row flex justify-between items-center gap-4 border-b border-border py-4 min-h-[3.25rem] group"
              >
                <span className="text-base group-hover:text-accent transition-colors shrink-0">
                  {s.name}
                </span>
                <span className="text-muted-foreground text-[10px] font-mono uppercase tracking-widest text-right shrink-0">
                  {s.level}
                </span>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center gap-6" data-reveal="right">
            <blockquote className="text-xl md:text-2xl font-light italic text-foreground/80 leading-snug tracking-tight">
              <span className="text-accent">"</span>I build AI systems with data discipline and
              product judgment: grounded answers, measurable workflows, clean metrics, and decisions
              that can be defended.<span className="text-accent">"</span>
            </blockquote>
            <p className="text-sm text-muted-foreground leading-relaxed border-l border-border pl-4">
              The common thread is measurement: retrieval quality, model performance, experiment
              impact, product success metrics, and business outcomes.
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              — AI + Data + Product Operating Principle
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
