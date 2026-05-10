import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/lib/portfolio-data";
import { SectionLabel } from "./About";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="experience" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-5xl px-6">
        <SectionLabel>04 / Journey</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-20"
        >
          Experience <span className="text-gradient-primary italic font-light">timeline.</span>
        </motion.h2>

        <div ref={ref} className="relative pl-8 md:pl-16">
          <div className="absolute left-2 md:left-6 top-0 bottom-0 w-px bg-border" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-2 md:left-6 top-0 w-px bg-gradient-to-b from-primary via-accent to-transparent"
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative mb-14 last:mb-0"
            >
              <div className="absolute -left-[26px] md:-left-[42px] top-2 size-3 rounded-full bg-gradient-primary glow-ring" />
              <div className="glass rounded-3xl p-7 md:p-9 hover:border-primary/40 transition-colors group">
                <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
                  <h3 className="font-display text-2xl md:text-3xl font-semibold">{exp.company}</h3>
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                <div className="text-primary text-sm font-medium mb-1">{exp.role}</div>
                <div className="text-xs text-muted-foreground mb-5">{exp.location}</div>
                <ul className="space-y-2.5">
                  {exp.points.map((p) => (
                    <li key={p} className="text-sm text-muted-foreground leading-relaxed flex gap-3">
                      <span className="text-primary mt-1.5">▹</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
