import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { GalaxyScene } from "./GalaxyScene";

const pillars = [
  {
    label: "Data",
    text: "SQL, ML, data warehouses, dashboards, experimentation.",
  },
  {
    label: "AI",
    text: "RAG, agentic workflows, LLM apps, fine-tuning, automation.",
  },
  {
    label: "Product",
    text: "PRDs, success metrics, prioritization trade-offs, user empathy.",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Mokshithdv25",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mokshithkumar",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:mokshithdv@gmail.com",
    icon: Mail,
  },
];

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
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between mb-10">
          <div className="signal-badge inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-white/[0.03] animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-muted-foreground">
              Data · AI · Product
            </span>
          </div>

          <div
            className="flex items-center gap-2 animate-fade-up"
            style={{ animationDelay: "120ms" }}
            aria-label="Primary links"
          >
            {socials.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  title={item.label}
                  className="hero-social-link inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-accent/70 hover:text-foreground"
                >
                  <Icon className="size-4" strokeWidth={1.8} />
                </a>
              );
            })}
          </div>
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
            KUMAR
          </span>
        </h1>

        <div className="grid grid-cols-12 gap-8 items-end">
          <div
            className="col-span-12 lg:col-span-6 animate-fade-up"
            style={{ animationDelay: "280ms" }}
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              Seasoned professional who combines data, AI, and product thinking: rigorous analysis,
              AI systems, product-minded execution, and business outcomes.
            </p>
          </div>

          <div
            className="col-span-12 lg:col-span-6 grid gap-3 sm:grid-cols-3 animate-fade-up"
            style={{ animationDelay: "380ms" }}
          >
            {pillars.map((pillar) => (
              <div key={pillar.label} className="hero-pillar">
                <p>{pillar.label}</p>
                <span>{pillar.text}</span>
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
