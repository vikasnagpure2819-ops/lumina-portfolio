import { motion } from "framer-motion";
import { skillGroups } from "@/lib/portfolio-data";
import { SectionLabel } from "./About";

export function Skills() {
  return (
    <section id="skills" className="relative py-32 md:py-44">
      <div className="absolute top-1/2 left-1/4 size-[500px] rounded-full bg-accent/10 blur-[140px] -z-10" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>03 / Toolkit</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mb-16"
        >
          Tools I <span className="text-gradient-primary italic font-light">live by.</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7 }}
              whileHover={{ y: -6 }}
              className="glass rounded-3xl p-7 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity" />
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-5">
                0{i + 1} — {g.label}
              </div>
              <ul className="space-y-2.5">
                {g.items.map((item) => (
                  <li key={item} className="text-sm flex items-center gap-2">
                    <span className="size-1 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
