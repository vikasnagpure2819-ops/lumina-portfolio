import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[min(96%,1100px)]"
    >
      <nav className="glass-strong rounded-full px-5 py-3 flex items-center justify-between glow-soft">
        <a href="#top" className="font-display font-bold tracking-tight text-base flex items-center gap-2">
          <span className="size-2 rounded-full bg-gradient-primary animate-pulse-glow" />
          <span className="text-gradient">Vikas.dev</span>
        </a>
        <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors relative group">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-primary group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="text-xs md:text-sm font-medium px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground hover:scale-105 transition-transform"
        >
          Let's talk
        </a>
      </nav>
    </motion.header>
  );
}
