import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { profile } from "@/lib/portfolio-data";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section id="about" ref={ref} className="relative py-32 md:py-44">
      <motion.div style={{ y }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[700px] rounded-full bg-primary/10 blur-[160px] -z-10" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>01 / About</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight max-w-4xl"
        >
          <span className="text-muted-foreground/50">I build</span>{" "}
          <span className="text-gradient">scalable web products</span>{" "}
          <span className="text-muted-foreground/50">with refined</span>{" "}
          <span className="text-gradient-primary italic font-light">craft & care.</span>
        </motion.h2>

        <div className="mt-20 grid md:grid-cols-12 gap-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-7 text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            {profile.summary} I obsess over performance, motion, and clean architecture — turning ideas into immersive, fast, production-grade experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="md:col-span-5 glass rounded-3xl p-8 glow-soft"
          >
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Currently</div>
            <div className="font-display text-2xl mb-2">Full Stack Developer</div>
            <div className="text-muted-foreground">@ Dignisys Limited — Navi Mumbai</div>
            <div className="mt-6 pt-6 border-t border-border flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Education</span>
              <span>B.Tech IT • CGPA 8.64</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-3 mb-8 text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground"
    >
      <span className="h-px w-10 bg-gradient-to-r from-primary to-transparent" />
      {children}
    </motion.div>
  );
}
