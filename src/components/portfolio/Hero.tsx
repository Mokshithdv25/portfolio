import { useEffect, useRef } from "react";
import { GalaxyScene } from "./GalaxyScene";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 80;
      const y = (e.clientY / window.innerHeight - 0.5) * 80;
      sectionRef.current?.style.setProperty("--cursor-x", `${x}px`);
      sectionRef.current?.style.setProperty("--cursor-y", `${y}px`);
      if (!orbRef.current) return;
      orbRef.current.style.transform = `translate3d(${x * 0.6}px, ${y * 0.6}px, 0) scale(1.06)`;
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-stage relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-32 pb-24 overflow-hidden"
    >
      <GalaxyScene />

      <div
        aria-hidden
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 45%, oklch(0.04 0 0 / 0.55) 0%, oklch(0.04 0 0 / 0.82) 70%)",
        }}
      />

      <div
        ref={orbRef}
        aria-hidden
        className="hero-reactor pointer-events-none absolute -top-40 -right-40 z-[1] size-[700px] rounded-full blur-[160px] transition-transform duration-700 ease-out"
        style={{ background: "oklch(0.65 0.22 305 / 0.18)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-20 z-[1] size-[400px] rounded-full blur-[120px] animate-float"
        style={{ background: "oklch(0.65 0.22 195 / 0.1)" }}
      />

      <div aria-hidden className="kinetic-rails z-[1]">
        <span />
        <span />
        <span />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="signal-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-white/[0.03] mb-10 animate-fade-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-muted-foreground">
            AI Product · Data Systems · Enterprise AI
          </span>
        </div>

        <h1 className="text-[clamp(3.5rem,12vw,10rem)] font-black leading-[0.85] tracking-tighter mb-12">
          <span
            className="hero-title-line block animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            MOKSHITH
          </span>
          <span
            className="hero-title-line block text-stroke animate-fade-up"
            style={{ animationDelay: "180ms" }}
          >
            BUILDS AI.
          </span>
        </h1>

        <div className="grid grid-cols-12 gap-8 items-end">
          <div
            className="col-span-12 md:col-span-5 animate-fade-up"
            style={{ animationDelay: "280ms" }}
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              Product-minded AI systems builder focused on production RAG, agentic workflows,
              LLMOps evaluation, and data products that move retention, cost, latency, and risk
              metrics.
            </p>
          </div>

          <div
            className="col-span-12 md:col-span-7 flex flex-wrap justify-start md:justify-end gap-10 font-mono text-[10px] text-muted-foreground uppercase tracking-tight animate-fade-up"
            style={{ animationDelay: "380ms" }}
          >
            {[
              { k: "Risk Impact", v: "$300M+ surfaced" },
              { k: "Automation", v: "500+ tickets / week" },
              { k: "Growth", v: "6x engagement lift" },
            ].map((s) => (
              <div key={s.k} className="metric-tile">
                <p className="text-foreground mb-1.5 tracking-[0.2em]">{s.k}</p>
                <p>{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-up"
        style={{ animationDelay: "520ms" }}
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground/60">
          scroll
        </span>
        <div className="scroll-chevron" />
      </div>
    </section>
  );
}
