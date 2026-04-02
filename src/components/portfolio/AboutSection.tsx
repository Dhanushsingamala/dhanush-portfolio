"use client";

import { AnimatedReveal } from "@/components/portfolio/AnimatedReveal";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { education, experience, professionalSummary } from "@/data/portfolio";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="flex min-h-screen snap-start flex-col justify-center px-6 py-20 scroll-mt-24 md:px-10">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[1fr_1fr] md:items-start">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="About"
            title="Professional Summary"
            description={professionalSummary}
          />
        </AnimatedReveal>

        <AnimatedReveal delay={0.15}>
          <div className="glass-panel rounded-3xl border border-zinc-800 p-7 text-zinc-300">
            <p className="leading-8">
              I have worked across role-based platforms, CRM products, and configuration-driven customer apps,
              delivering frontend systems that are scalable, business-ready, and simple to maintain.
            </p>
          </div>
        </AnimatedReveal>
      </div>

      <div className="mx-auto mt-10 grid w-full max-w-6xl gap-6 md:grid-cols-2">
        <AnimatedReveal>
          <div className="glass-panel relative overflow-hidden rounded-3xl border border-zinc-800 p-7">
            <motion.div
              className="absolute left-8 top-16 h-[74%] w-px bg-zinc-700/70"
              initial={{ scaleY: 0, transformOrigin: "top" }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
            <h3 className="text-lg font-semibold text-zinc-100">Education</h3>
            <ul className="mt-5 space-y-4">
              {education.map((item, index) => (
                <motion.li
                  key={`${item.institution}-${item.year}`}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="relative border-b border-zinc-800/70 pb-4 pl-7 last:border-0 last:pb-0"
                >
                  <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border border-zinc-400 bg-zinc-900" />
                  <p className="text-sm font-semibold text-zinc-100">{item.institution}</p>
                  <p className="mt-1 text-sm text-zinc-300">{item.qualification}</p>
                  <p className="mt-1 text-xs text-zinc-400">
                    {item.score} | {item.year}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.12}>
          <div className="glass-panel relative overflow-hidden rounded-3xl border border-zinc-800 p-7">
            <motion.div
              className="absolute left-8 top-16 h-[74%] w-px bg-zinc-700/70"
              initial={{ scaleY: 0, transformOrigin: "top" }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            />
            <h3 className="text-lg font-semibold text-zinc-100">Experience</h3>
            <ul className="mt-5 space-y-4">
              {experience.map((item, index) => (
                <motion.li
                  key={`${item.company}-${item.role}`}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="relative border-b border-zinc-800/70 pb-4 pl-7 last:border-0 last:pb-0"
                >
                  <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border border-zinc-400 bg-zinc-900" />
                  <p className="text-sm font-semibold text-zinc-100">
                    {item.role} · {item.company}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-zinc-400">{item.duration}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">{item.summary}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
