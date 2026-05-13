import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
      <nav
        className={`glass-strong rounded-full px-3 py-2 flex items-center justify-between transition-all ${
          scrolled ? "neon-glow" : ""
        }`}
      >
        <a href="#home" className="px-4 py-1.5 font-display font-bold text-lg">
          <span className="neon-text">.</span>aryan
        </a>
        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                {l.label}
                <span className="absolute inset-x-4 -bottom-0.5 h-px bg-[var(--neon)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 bg-[var(--neon)] text-[var(--primary-foreground)] px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform"
        >
          Hire Me →
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden px-4 py-2 text-sm"
          aria-label="Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>
      {open && (
        <div className="lg:hidden mt-2 glass-strong rounded-3xl p-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-xl hover:bg-white/5 text-sm"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
