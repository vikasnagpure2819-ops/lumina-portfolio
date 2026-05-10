import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { profile } from "@/lib/portfolio-data";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yFg = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const blur = useTransform(scrollYProgress, [0, 1], ["0px", "8px"]);

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section id="top" ref={ref} className="relative min-h-screen overflow-hidden flex items-center">
      <motion.div style={{ y: yBg, scale, filter: blur ? undefined : undefined }} className="absolute inset-0 -z-10">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-grid opacity-20" />
      <motion.div
        animate={{ opacity: [0.4, 0.85, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 size-[600px] rounded-full bg-primary/20 blur-[140px] -z-10"
      />
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 -right-52 size-[700px] rounded-full bg-accent/20 blur-[160px] -z-10"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-0 left-1/3 size-[500px] rounded-full bg-primary/10 blur-[120px] -z-10"
      />

      <motion.div style={{ y: yFg, opacity }} className="relative mx-auto max-w-5xl px-6 pt-32 pb-24 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.2, ease }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-10"
        >
          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for freelance & full-time
        </motion.div>

        <h1 className="font-display text-6xl md:text-8xl lg:text-[9rem] font-bold leading-[0.9] tracking-tight">
          <motion.span
            initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.6, duration: 1.6, ease }}
            className="block text-gradient"
          >
            {profile.name.split(" ")[0]}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.95, duration: 1.6, ease }}
            className="block text-gradient-primary italic font-light"
          >
            {profile.name.split(" ")[1]}.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1.4, ease }}
          className="mt-10 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 1.4, ease }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#work"
            data-cursor="hover"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-primary text-primary-foreground font-medium glow-ring hover:scale-[1.04] hover:-translate-y-0.5 transition-all duration-500"
          >
            View my work
            <span className="transition-transform duration-500 group-hover:translate-x-1.5">→</span>
          </a>
          <a
            href="#contact"
            data-cursor="hover"
            className="glass rounded-full px-8 py-4 font-medium hover:bg-white/5 hover:-translate-y-0.5 transition-all duration-500"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.2 }}
          className="mt-16 flex items-center justify-center gap-10 text-xs text-muted-foreground font-mono uppercase tracking-widest"
        >
          <div><div className="text-2xl font-display text-gradient mb-1">2+</div>Years</div>
          <div className="h-10 w-px bg-border" />
          <div><div className="text-2xl font-display text-gradient mb-1">15+</div>Projects</div>
          <div className="h-10 w-px bg-border" />
          <div><div className="text-2xl font-display text-gradient mb-1">3</div>Companies</div>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono text-muted-foreground flex flex-col items-center gap-2 tracking-[0.3em]"
      >
        <span>SCROLL</span>
        <div className="h-12 w-px bg-gradient-to-b from-foreground/60 to-transparent" />
      </motion.div>
    </section>
  );
}
