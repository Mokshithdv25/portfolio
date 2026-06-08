import { useEffect, useRef } from "react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Mokshithdv25",
    glyph: "GH",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mokshithkumar",
    glyph: "LI",
  },
  {
    label: "Email",
    href: "mailto:mokshithdv@gmail.com",
    glyph: "✉",
  },
];

/* Magnetic button hook */
function useMagnetic(strength = 0.45) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    };
    const onLeave = () => {
      el.style.transform = "";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return ref;
}

function MagneticLink({
  href,
  label,
  glyph,
}: {
  href: string;
  label: string;
  glyph: string;
}) {
  const ref = useMagnetic(0.5);

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative inline-flex items-center justify-center size-12 rounded-full border border-white/10 text-muted-foreground hover:text-foreground hover:border-accent/60 transition-colors duration-300"
      style={{ transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1), color 0.3s, border-color 0.3s" }}
    >
      <span className="text-xs font-mono font-bold">{glyph}</span>
      {/* Glow ring */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: "0 0 28px -6px var(--accent-glow)" }}
      />
    </a>
  );
}

export function Footer() {
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Subtle letter-spacing breathe on mount
    const el = nameRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.transition = "opacity 1.2s cubic-bezier(0.16,1,0.3,1), transform 1.2s cubic-bezier(0.16,1,0.3,1)";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
    });
  }, []);

  return (
    <footer className="relative overflow-hidden border-t border-border/40 pt-20 pb-12 px-6 md:px-10">
      {/* Radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, oklch(0.65 0.22 305 / 0.14), transparent)",
        }}
      />

      {/* Rotating border-top gradient */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px pointer-events-none footer-border-line"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Large name */}
        <div className="text-center mb-16">
          <h2
            ref={nameRef}
            className="font-black text-[clamp(3rem,10vw,9rem)] leading-none tracking-tighter select-none footer-name-gradient"
          >
            MOKSHITH KUMAR
          </h2>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            AI-first · Data · Product
          </p>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border/40 pt-8">
          {/* Available badge */}
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Open to AI, Data & Product Roles
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <MagneticLink key={s.label} {...s} />
            ))}
          </div>

          {/* Copyright */}
          <p className="font-mono text-[9px] text-muted-foreground/50 uppercase tracking-widest">
            © 2026 Mokshith Kumar
          </p>
        </div>
      </div>
    </footer>
  );
}
