"use client";

import { AnimatedReveal } from "@/components/portfolio/AnimatedReveal";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { projects } from "@/data/portfolio";
import { motion } from "framer-motion";

export function ProjectsSection() {
  return (
    <section id="projects" className="flex min-h-screen snap-start items-center px-6 py-20 scroll-mt-24 md:px-10">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Professional Highlights"
            title="Confidential Client Work"
            description="These are anonymized summaries of enterprise projects. Detailed implementations can be discussed during interviews."
          />
        </AnimatedReveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <AnimatedReveal key={project.title} delay={index * 0.12}>
              <motion.article
                initial={{ opacity: 0, y: 24, rotateX: 6 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                whileHover={{ y: -10, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="glass-panel group relative flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-800 p-6"
              >
                <motion.div
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-300/80 to-transparent"
                  animate={{ x: ["-30%", "30%", "-30%"] }}
                  transition={{ duration: 7, delay: index * 0.4, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="absolute -right-16 -top-14 h-40 w-40 rounded-full bg-zinc-200/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  Highlight 0{index + 1}
                </p>
                <h3 className="text-xl font-semibold text-zinc-100">{project.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-zinc-300">{project.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-zinc-700 px-3 py-1 text-xs font-medium text-zinc-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <motion.p
                  className="mt-6 text-xs uppercase tracking-[0.16em] text-zinc-500"
                  animate={{ opacity: [0.55, 1, 0.55] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.25 }}
                >
                  Case study available on request
                </motion.p>
              </motion.article>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
