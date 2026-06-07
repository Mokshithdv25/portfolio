import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Features } from "@/components/portfolio/Features";
import { Capabilities } from "@/components/portfolio/Capabilities";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { useReveal, useScrollProgress } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")(
  {
    component: Index,
    head: () => ({
      meta: [
        { title: "Mokshith Kumar — AI, Data & Product Portfolio" },
        {
          name: "description",
          content:
            "Portfolio of Mokshith Kumar, an AI-first builder at the intersection of data, AI, and product, focused on RAG, agents, ML systems, experimentation, and measurable business impact.",
        },
        {
          property: "og:title",
          content: "Mokshith Kumar — AI, Data & Product Portfolio",
        },
        {
          property: "og:description",
          content:
            "AI-first portfolio across RAG contract intelligence, agentic RevOps, product PRDs, production ML, experimentation, and modern data stacks.",
        },
      ],
    }),
  }
);

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
        <Features />
        <Capabilities />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
