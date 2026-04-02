"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

const easeCurve: [number, number, number, number] = [0.22, 1, 0.36, 1];

type AnimatedRevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  y?: number;
}>;

export function AnimatedReveal({
  children,
  className,
  delay = 0,
  y = 24,
}: AnimatedRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale: 0.985, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: easeCurve, delay }}
    >
      {children}
    </motion.div>
  );
}
