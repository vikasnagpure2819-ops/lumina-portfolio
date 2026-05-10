import { motion } from "framer-motion";
import { profile } from "@/lib/portfolio-data";
import { SectionLabel } from "./About";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-44 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 size-[800px] rounded-full bg-primary/15 blur-[180px] -z-10 animate-pulse-glow" />
      <div className="absolute inset-0 bg-grid opacity-20 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="mx-auto max-w-5xl px-6 text-center">
        <SectionLabel>05 / Contact</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1] tracking-tight"
        >
          Let's create
          <br />
          <span className="text-gradient-primary italic font-light">something extraordinary.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto"
        >
          Have a project in mind, or just want to say hi? My inbox is always open.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-3 mt-12 px-8 py-5 rounded-full bg-gradient-primary text-primary-foreground text-lg font-medium glow-ring"
        >
          {profile.email}
          <span>↗</span>
        </motion.a>

        <div className="mt-20 flex flex-wrap justify-center gap-4">
          <SocialLink href={profile.github} label="GitHub" />
          <SocialLink href={profile.linkedin} label="LinkedIn" />
          <SocialLink href={`tel:${profile.phone}`} label={profile.phone} />
        </div>

        <div className="mt-32 pt-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <span>© {new Date().getFullYear()} Vikas Nagpure</span>
          <span>Designed & built with care.</span>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="glass rounded-full px-6 py-3 text-sm hover:bg-white/5 transition-all hover:scale-105 hover:border-primary/40"
    >
      {label}
    </a>
  );
}
