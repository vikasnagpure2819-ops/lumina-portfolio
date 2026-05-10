import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import portrait from "@/assets/portrait.jpg";
import { profile } from "@/lib/portfolio-data";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yMid = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const yFg = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section id="top" ref={ref} className="relative min-h-screen overflow-hidden">
      <motion.div style={{ y: yBg, scale }} className="absolute inset-0 -z-10">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-grid opacity-30" />
      <div className="absolute -top-32 -left-32 size-[500px] rounded-full bg-primary/20 blur-[120px] animate-pulse-glow -z-10" />
      <div className="absolute top-1/3 -right-40 size-[600px] rounded-full bg-accent/20 blur-[140px] animate-pulse-glow -z-10" />

      <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-24 md:pt-48">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div style={{ y: yFg, opacity }} className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-8"
            >
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for freelance & full-time
            </motion.div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="block text-gradient"
              >
                {profile.name.split(" ")[0]}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.8 }}
                className="block text-gradient-primary italic font-light"
              >
                {profile.name.split(" ")[1]}.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-8 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-medium glow-ring hover:scale-105 transition-all"
              >
                View my work
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                className="glass rounded-full px-7 py-3.5 font-medium hover:bg-white/5 transition-colors"
              >
                Get in touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="mt-14 flex items-center gap-8 text-xs text-muted-foreground font-mono uppercase tracking-widest"
            >
              <div><div className="text-2xl font-display text-gradient mb-1">2+</div>Years</div>
              <div className="h-10 w-px bg-border" />
              <div><div className="text-2xl font-display text-gradient mb-1">15+</div>Projects</div>
              <div className="h-10 w-px bg-border" />
              <div><div className="text-2xl font-display text-gradient mb-1">3</div>Companies</div>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: yMid }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-primary opacity-30 blur-2xl animate-pulse-glow" />
              <div className="relative h-full w-full rounded-[2rem] overflow-hidden glass-strong glow-ring animate-float">
                <img src={portrait} alt="Vikas Nagpure" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4">
                  <div className="text-xs font-mono text-muted-foreground">Now building</div>
                  <div className="text-sm font-medium mt-0.5">Cinematic web at Dignisys</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 glow-soft animate-float" style={{ animationDelay: "1s" }}>
                <div className="text-[10px] font-mono uppercase text-muted-foreground">Stack</div>
                <div className="text-sm font-medium">Next.js / MERN</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono text-muted-foreground flex flex-col items-center gap-2"
      >
        <span>SCROLL</span>
        <div className="h-10 w-px bg-gradient-to-b from-foreground/60 to-transparent" />
      </motion.div>
    </section>
  );
}
