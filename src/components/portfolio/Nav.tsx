export function Nav() {
  const links = [
    { href: "#systems", label: "Projects" },
    { href: "#features", label: "Capabilities" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-10 py-5 bg-background/80 backdrop-blur-xl border-b border-border/60">
      <a href="#" className="font-black tracking-tighter text-2xl text-foreground">
        MOKSHITH<span className="text-accent">.</span>
      </a>

      <div className="hidden md:flex gap-8 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="hover:text-foreground transition-colors duration-300"
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
