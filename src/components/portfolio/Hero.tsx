import { useEffect, useRef } from "react";

export function Hero() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!orbRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      orbRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section className="relative px-6 md:px-10 pt-40 pb-32 md:pb-48 overflow-hidden ambient-grid">
      <div
        ref={orbRef}
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 size-[600px] rounded-full bg-accent/20 blur-[140px] transition-transform duration-700 ease-out"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-20 size-[400px] rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-white/[0.03] mb-10 animate-fade-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-muted-foreground">
            Top 10% AI Engineer · Available Q2
          </span>
        </div>

        <h1
          className="text-[clamp(3.5rem,12vw,10rem)] font-black leading-[0.85] tracking-tighter mb-12 animate-fade-up"
          style={{ animationDelay: "100ms" }}
        >
          BEYOND
          <br />
          <span className="text-stroke">AGENTS.</span>
        </h1>

        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 md:col-span-5 animate-fade-up" style={{ animationDelay: "250ms" }}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              Engineering high-fidelity RAG pipelines and autonomous agentic swarms at the intersection
              of machine intelligence and business strategy.
            </p>
          </div>
          <div
            className="col-span-12 md:col-span-7 flex flex-wrap justify-start md:justify-end gap-10 font-mono text-[10px] text-muted-foreground uppercase tracking-tight animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            {[
              { k: "Experience", v: "3 Years Industry" },
              { k: "Focus", v: "RAG / Agentic AI" },
              { k: "Academic", v: "MSc AI & Business" },
            ].map((s) => (
              <div key={s.k}>
                <p className="text-foreground mb-1.5 tracking-[0.2em]">{s.k}</p>
                <p>{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
