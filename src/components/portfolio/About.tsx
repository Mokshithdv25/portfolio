const timeline = [
  {
    year: "2025",
    title: "MS Artificial Intelligence in Business",
    org: "Machine learning, unstructured data analytics, transformers, NLP, agentic AI, computer vision, AI business strategy, data governance, SQL, data warehousing",
  },
  {
    year: "2023",
    title: "Product Manager",
    org: "AI products, RAG contract intelligence, supplier workflows, $300M+ liability impact, business metrics, stakeholder delivery",
  },
  {
    year: "2022",
    title: "Business Analyst",
    org: "SQL, Tableau, Snowflake, predictive analytics, machine learning, dashboards, KPI reporting, executive decision systems",
  },
];

export function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5" data-reveal="left">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground mb-6 border-b border-border pb-4">
            Trajectory
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tighter leading-[0.95] mb-8">
            AI-first builder <br />
            with <span className="text-stroke">data + product depth.</span>
          </h3>
        </div>

        <div className="lg:col-span-7 lg:pt-14">
          <ol className="relative">
            {timeline.map((t, i) => (
              <li
                key={t.year + t.title}
                data-reveal="right"
                style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}
                className="kinetic-list-row grid grid-cols-[80px_1fr] gap-6 py-6 border-b border-border last:border-b-0 group"
              >
                <div className="font-mono text-sm text-muted-foreground group-hover:text-accent transition-colors">
                  {t.year}
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-medium tracking-tight">{t.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{t.org}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
