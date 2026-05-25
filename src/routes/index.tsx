import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Capabilities } from "@/components/portfolio/Capabilities";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { useReveal, useScrollProgress } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mokshith Kumar — AI Product & Systems Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Mokshith Kumar, an AI product and data systems builder focused on production RAG, agentic workflows, LLMOps evaluation, and measurable business impact.",
      },
      { property: "og:title", content: "Mokshith Kumar — AI Product & Systems Portfolio" },
      {
        property: "og:description",
        content:
          "Production-minded AI work across contract intelligence, agentic RevOps, support automation, and LLM evaluation.",
      },
    ],
  }),
});

function Index() {
  const rootRef = useReveal<HTMLDivElement>();
  const progressRef = useScrollProgress();

  return (
    <div
      ref={rootRef}
      className="relative min-h-screen bg-background text-foreground font-sans selection:bg-accent/30 selection:text-foreground overflow-x-hidden"
    >
      <div ref={progressRef} className="scroll-progress" />
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Capabilities />
        <About />
        <Contact />
      </main>
      <footer className="p-8 text-center text-[10px] text-muted-foreground tracking-[0.25em] uppercase font-mono border-t border-border">
        © 2026 Mokshith Kumar — AI Product, Data, and Systems
      </footer>
    </div>
  );
}
