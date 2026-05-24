import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Capabilities } from "@/components/portfolio/Capabilities";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Axon — Senior AI Engineer · RAG & Agentic Systems" },
      {
        name: "description",
        content:
          "Portfolio of a top-10% AI engineer specialising in production RAG pipelines and multi-agent orchestration. 3 years of industry, MSc AI & Business Management.",
      },
      { property: "og:title", content: "Axon — Senior AI Engineer" },
      {
        property: "og:description",
        content: "Engineering high-fidelity RAG and agentic AI systems for the enterprise.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground font-sans selection:bg-accent/30 selection:text-foreground overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Capabilities />
        <About />
        <Contact />
      </main>
      <footer className="p-8 text-center text-[10px] text-muted-foreground tracking-[0.25em] uppercase font-mono border-t border-border">
        © 2026 Axon Intelligence Systems — Designed for the 10%
      </footer>
    </div>
  );
}
