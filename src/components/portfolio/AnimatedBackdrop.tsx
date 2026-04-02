"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function AnimatedBackdrop() {
  const { scrollYProgress } = useScroll();
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, -140]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        style={{ y: ySlow }}
        className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-zinc-100/10 blur-3xl"
        animate={{ x: [0, 40, -10, 0], y: [0, -20, 20, 0], scale: [1, 1.08, 0.95, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{ y: yFast }}
        className="absolute right-0 top-28 h-80 w-80 rounded-full bg-slate-300/12 blur-3xl"
        animate={{ x: [0, -50, 25, 0], y: [0, 25, -15, 0], scale: [1, 0.92, 1.07, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{ y: ySlow }}
        className="absolute bottom-16 left-1/3 h-64 w-64 rounded-full bg-zinc-400/14 blur-3xl"
        animate={{ x: [0, 30, -30, 0], y: [0, -30, 20, 0], scale: [1, 1.05, 0.9, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
