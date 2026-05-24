const skills = [
  { name: "PyTorch & JAX", level: "Expert" },
  { name: "LangChain / LlamaIndex", level: "Core" },
  { name: "Vector Database Ops", level: "Strategic" },
  { name: "LLM Fine-Tuning", level: "Advanced" },
  { name: "Agentic Orchestration", level: "Expert" },
  { name: "MLOps · AWS / GCP", level: "Production" },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="px-6 md:px-10 py-24 md:py-32 bg-surface/30 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4 space-y-6" data-reveal="left">
            <div className="text-accent font-mono text-[10px] tracking-[0.3em] uppercase">
              Foundations
            </div>
            <div className="space-y-3">
              {skills.map((s, i) => (
                <div
                  key={s.name}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
                  className="flex justify-between items-baseline border-b border-border pb-3 group"
                >
                  <span className="text-base md:text-lg group-hover:text-accent transition-colors">
                    {s.name}
                  </span>
                  <span className="text-muted-foreground text-[10px] font-mono uppercase tracking-widest">
                    {s.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col justify-center" data-reveal="right">
            <blockquote className="text-2xl md:text-4xl font-light italic text-foreground/80 leading-snug tracking-tight">
              <span className="text-accent">"</span>
              The bridge between LLM research and enterprise value is built with
              clean architecture, careful evaluation, and relentless iteration.
              <span className="text-accent">"</span>
            </blockquote>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              — Personal Engineering Doctrine
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
