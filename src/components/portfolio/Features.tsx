const features = [
  {
    id: "rag",
    icon: "⬡",
    title: "Production RAG",
    subtitle: "Query Routing · Re-Ranking",
    desc: "Hybrid retrieval with sub-query decomposition, BM25+vector fusion, and BGE re-ranking. Built to surface facts without hallucinating on high-stakes decisions.",
    accentHue: "305",
  },
  {
    id: "agents",
    icon: "◈",
    title: "Agentic Orchestration",
    subtitle: "LangGraph · CrewAI",
    desc: "Stateful multi-agent pipelines with typed handoffs, human-in-the-loop checkpoints, and graceful fallbacks.",
    accentHue: "195",
  },
  {
    id: "llmops",
    icon: "⊕",
    title: "LLMOps Evaluation",
    subtitle: "Ragas · TruLens · W&B",
    desc: "CI-style eval harness: faithfulness, context precision, answer relevance, malicious-prompt stress testing, and drift monitoring.",
    accentHue: "280",
  },
  {
    id: "data",
    icon: "▦",
    title: "Data Products",
    subtitle: "SQL · Snowflake · BI",
    desc: "Executive decision dashboards, risk-scoring pipelines, and dbt data models that power $300M+ in liability visibility.",
    accentHue: "220",
  },
  {
    id: "finetune",
    icon: "⊗",
    title: "Model Optimization",
    subtitle: "QLoRA · Quantization",
    desc: "Fine-tune Llama/Mistral on proprietary docs with QLoRA, then quantize to 4-bit for sub-100ms local inference.",
    accentHue: "150",
  },
  {
    id: "analytics",
    icon: "◉",
    title: "Product Analytics",
    subtitle: "PostHog · GA4 · Mixpanel",
    desc: "Behavioral cohort analysis, funnel modeling, and LLM-assisted VoC analysis over 1M+ app reviews.",
    accentHue: "40",
  },
];

type Feature = (typeof features)[number];

function FeatureCard({ f, delay }: { f: Feature; delay: number }) {
  const accent = `oklch(0.65 0.22 ${f.accentHue})`;
  const accentGlow = `oklch(0.72 0.2 ${f.accentHue})`;

  return (
    <article
      data-reveal="scale"
      style={
        {
          "--reveal-delay": `${delay}ms`,
          background:
            "linear-gradient(135deg, rgb(255 255 255 / 0.03), rgb(255 255 255 / 0.01))",
          backdropFilter: "blur(16px)",
        } as React.CSSProperties
      }
      className="bento-card group relative overflow-hidden rounded-2xl p-6 md:p-8 flex flex-col gap-4 border border-white/[0.07] transition-all duration-700 ease-out cursor-default min-h-[220px]"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(ellipse at 30% 20%, ${accent}18 0%, transparent 65%)`,
        }}
      />

      <div
        className="text-3xl leading-none transition-all duration-500 group-hover:scale-110 w-fit"
        style={{ color: accent, filter: `drop-shadow(0 0 12px ${accentGlow})` }}
      >
        {f.icon}
      </div>

      <div className="flex-1">
        <div
          className="font-mono text-[9px] uppercase tracking-[0.35em] mb-2"
          style={{ color: accent }}
        >
          {f.subtitle}
        </div>
        <h3 className="text-lg md:text-xl font-bold tracking-tight mb-3 transition-colors duration-300 group-hover:text-white">
          {f.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
      </div>
    </article>
  );
}

export function Features() {
  return (
    <section id="features" className="px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div
          data-reveal
          className="flex items-end justify-between mb-12 border-b border-border pb-6"
        >
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-3">
              What I Build With
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Production AI <span className="text-stroke">disciplines.</span>
            </h2>
          </div>
          <span className="font-mono text-[10px] text-muted-foreground/60 uppercase tracking-widest hidden md:block">
            6 disciplines
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {features.map((f, i) => (
            <FeatureCard key={f.id} f={f} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
