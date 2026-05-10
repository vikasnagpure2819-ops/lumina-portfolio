import { motion } from "framer-motion";
import { useMemo } from "react";

type P = {
  id: number;
  size: number;
  left: string;
  top: string;
  dx: number;
  dy: number;
  duration: number;
  delay: number;
  blur: number;
  hue: "primary" | "accent" | "white";
};

export function FloatingParticles({ count = 22 }: { count?: number }) {
  const particles = useMemo<P[]>(() => {
    const rand = (min: number, max: number) => Math.random() * (max - min) + min;
    const hues: P["hue"][] = ["primary", "accent", "white"];
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: rand(2, 7),
      left: `${rand(0, 100)}%`,
      top: `${rand(0, 100)}%`,
      dx: rand(-80, 80),
      dy: rand(-120, 120),
      duration: rand(14, 28),
      delay: rand(0, 8),
      blur: rand(0, 2),
      hue: hues[Math.floor(Math.random() * hues.length)],
    }));
  }, [count]);

  const color = (h: P["hue"]) =>
    h === "primary"
      ? "bg-primary/70"
      : h === "accent"
      ? "bg-accent/70"
      : "bg-foreground/60";

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{
            x: [0, p.dx, -p.dx * 0.5, 0],
            y: [0, p.dy, p.dy * 0.4, 0],
            opacity: [0, 0.9, 0.2, 0.7, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            filter: `blur(${p.blur}px)`,
          }}
          className={`absolute rounded-full ${color(p.hue)} shadow-[0_0_12px_currentColor]`}
        />
      ))}
    </div>
  );
}
