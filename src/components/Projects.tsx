import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/lib/portfolio-data";
import { SectionLabel } from "./About";

export function Projects() {
  return (
    <section id="work" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <SectionLabel>02 / Selected Work</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-4xl md:text-6xl font-bold leading-tight tracking-tight"
            >
              Featured <span className="text-gradient-primary italic font-light">projects.</span>
            </motion.h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            A curated set of products I've shipped — from industrial platforms to analytics dashboards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-50, 50], [8, -8]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, [-50, 50], [-8, 8]), { stiffness: 200, damping: 20 });

  const onMouseMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set(e.clientX - r.left - r.width / 2);
    y.set(e.clientY - r.top - r.height / 2);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      ref={ref}
      href={project.link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={onMouseMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className="group relative block rounded-3xl overflow-hidden glass-strong glow-soft will-change-transform"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.name}
          className="absolute inset-0 h-full w-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-accent/0 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500" />

        <div className="absolute top-5 left-5">
          <span className="glass text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-full">
            {project.tag}
          </span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute top-5 right-5 size-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground opacity-0 group-hover:opacity-100 transition-all"
        >
          ↗
        </motion.div>
      </div>

      <div className="p-7 relative">
        <h3 className="font-display text-2xl md:text-3xl font-semibold mb-2 group-hover:text-gradient-primary transition-all">
          {project.name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span key={t} className="text-xs font-mono text-muted-foreground border border-border rounded-full px-3 py-1">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
