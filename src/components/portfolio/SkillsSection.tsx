"use client";

import { AnimatedReveal } from "@/components/portfolio/AnimatedReveal";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { skills } from "@/data/portfolio";
import { motion } from "framer-motion";

const laneA = [...skills, ...skills];
const laneB = [...skills.slice().reverse(), ...skills.slice().reverse()];

export function SkillsSection() {
  return (
    <section id="skills" className="flex min-h-screen snap-start items-center px-6 py-20 scroll-mt-24 md:px-10">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Skills"
            title="Tools and Technologies"
            description="A focused stack for building high-quality frontend applications and connected backend services."
          />
        </AnimatedReveal>

        <AnimatedReveal delay={0.15}>
          <div className="space-y-4 overflow-hidden">
            <motion.div
              className="flex w-max gap-3"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            >
              {laneA.map((skill, index) => (
                <motion.span
                  key={`a-${skill}-${index}`}
                  whileHover={{ y: -4, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="rounded-full border border-zinc-700 bg-zinc-900/70 px-4 py-2 text-sm font-medium text-zinc-200"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              className="flex w-max gap-3"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            >
              {laneB.map((skill, index) => (
                <motion.span
                  key={`b-${skill}-${index}`}
                  whileHover={{ y: -4, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="rounded-full border border-zinc-700 bg-zinc-900/70 px-4 py-2 text-sm font-medium text-zinc-200"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
