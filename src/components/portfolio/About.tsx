const timeline = [
  { year: "2024", title: "Senior AI Engineer", org: "Stealth — Agentic Systems" },
  { year: "2023", title: "AI Engineer · RAG Lead", org: "Enterprise SaaS" },
  { year: "2022", title: "MSc Artificial Intelligence & Business Management", org: "Distinction" },
  { year: "2021", title: "ML Research Assistant", org: "University Lab" },
];

export function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground mb-6 border-b border-border pb-4">
            Trajectory
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tighter leading-[0.95] mb-8">
            Three years deep <br />
            in the frontier of <span className="text-stroke">applied AI.</span>
          </h3>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            A graduate of an Artificial Intelligence & Business Management program
            with a sharp focus on production agentic systems. Operating in the top
            10% of practitioners — measured by shipped systems, not titles.
          </p>
        </div>

        <div className="lg:col-span-7 lg:pt-14">
          <ol className="relative">
            {timeline.map((t, i) => (
              <li
                key={t.year + t.title}
                className="grid grid-cols-[80px_1fr] gap-6 py-6 border-b border-border last:border-b-0 group"
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
