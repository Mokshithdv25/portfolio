export function Contact() {
  return (
    <section id="contact" className="px-6 md:px-10 pt-24 pb-12">
      <div className="max-w-7xl mx-auto text-center">
        <div data-reveal="scale" className="inline-block mb-12 animate-float">
          <div className="p-px rounded-3xl bg-gradient-to-tr from-accent via-accent-glow to-blue-400">
            <div className="bg-base px-8 md:px-16 py-14 md:py-20 rounded-3xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
                Initiate Protocol
              </p>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                Let's scale <br className="md:hidden" /> intelligence.
              </h2>
              <p className="text-muted-foreground mb-10 max-w-md mx-auto">
                Currently accepting select architectural consulting and senior
                engineering engagements.
              </p>
              <a
                href="mailto:hello@axon.ai"
                className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-bold uppercase tracking-[0.2em] text-xs rounded-full hover:scale-105 transition-transform duration-300"
              >
                Get in Touch <span>→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-3 text-muted-foreground font-mono text-[10px] uppercase tracking-[0.25em]">
          <span>Available Worldwide</span>
          <span className="text-accent">•</span>
          <span>Remote Optimised</span>
          <span className="text-accent">•</span>
          <span>Encrypted Comms</span>
        </div>
      </div>
    </section>
  );
}
