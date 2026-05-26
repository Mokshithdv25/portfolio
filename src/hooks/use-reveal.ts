import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement = HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll<HTMLElement>("[data-reveal]");
    el.dataset.revealRoot = "ready";

    if (typeof IntersectionObserver === "undefined") {
      targets.forEach((t) => {
        t.dataset.revealed = "true";
      });
      return () => {
        delete el.dataset.revealRoot;
      };
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).dataset.revealed = "true";
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px", ...options },
    );
    targets.forEach((t) => io.observe(t));

    // Scroll-driven motion: writes --p (0 -> 1 as element traverses viewport)
    const motionTargets = Array.from(
      el.querySelectorAll<HTMLElement>("[data-scroll-motion]"),
    );
    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      for (const t of motionTargets) {
        const r = t.getBoundingClientRect();
        const center = r.top + r.height / 2;
        // -1 when below viewport, 0 at center, 1 when above
        const p = Math.max(-1.2, Math.min(1.2, (vh / 2 - center) / (vh / 2 + r.height / 2)));
        t.style.setProperty("--p", p.toFixed(4));
        // 0..1 normalized
        t.style.setProperty("--pn", ((p + 1) / 2).toFixed(4));
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      delete el.dataset.revealRoot;
    };
  }, [options]);
  return ref;
}

export function useScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
      if (ref.current) ref.current.style.transform = `scaleX(${scrolled})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return ref;
}
