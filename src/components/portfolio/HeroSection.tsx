"use client";

import { motion } from "framer-motion";
import { navItems } from "@/data/portfolio";

const easeCurve: [number, number, number, number] = [0.22, 1, 0.36, 1];

const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeCurve },
  },
};

const statusItems = [
  { label: "Current Role", value: "Frontend Developer" },
  { label: "Focus", value: "React + CRM Platforms" },
  { label: "Location", value: "India" },
];

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen snap-start items-center overflow-hidden px-6 pb-24 pt-8 scroll-mt-24 md:px-10 md:pb-28 md:pt-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
        <motion.header
          className="glass-panel sticky top-4 z-20 flex items-center justify-between gap-4 rounded-2xl px-4 py-3 backdrop-blur-xl md:px-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeCurve }}
        >
          <a href="#home" className="text-sm font-semibold tracking-wide text-zinc-100">
            DR
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-300 transition-colors duration-300 hover:text-zinc-100"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-zinc-700 px-4 py-1.5 text-sm font-medium text-zinc-200 transition-colors duration-300 hover:border-zinc-500 hover:text-zinc-100"
          >
            Let&apos;s Connect
          </a>
        </motion.header>

        <div className="relative grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-end">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.p
              variants={heroItem}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700/70 bg-zinc-900/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400"
            >
              Building practical products
            </motion.p>
            <motion.h1 variants={heroItem} className="font-display max-w-2xl text-5xl font-bold leading-[1.02] text-zinc-100 sm:text-6xl md:text-7xl">
             @ Dhanush Reddy Singamala 
            </motion.h1>
            <motion.p variants={heroItem} className="max-w-xl text-xl leading-8 text-zinc-300 sm:text-2xl">
                Software Developer | MERN Stack Enthusiast
            </motion.p>
            <motion.p variants={heroItem} className="max-w-xl text-base leading-7 text-zinc-400">
              I design and build reliable digital products with modern frontend architecture, scalable APIs,
              and a sharp focus on user workflows.
            </motion.p>
            <motion.div variants={heroItem} className="flex flex-wrap gap-3 pt-2">
              {statusItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.08, ease: easeCurve }}
                  className="rounded-full border border-zinc-700/90 bg-zinc-900/70 px-4 py-2"
                >
                  <p className="text-[10px] uppercase tracking-[0.14em] text-zinc-500">{item.label}</p>
                  <p className="mt-0.5 text-sm font-medium text-zinc-200">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.a
              variants={heroItem}
              href="#about"
              whileHover={{ x: 6 }}
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors duration-300 hover:text-slate-200"
            >
              <span>Scroll to explore</span>
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
              >
                ↓
              </motion.span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, ease: easeCurve, delay: 0.2 }}
            className="glass-panel relative overflow-hidden rounded-3xl border border-zinc-800 p-7"
          >
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-zinc-100/10 blur-3xl" />
            <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-slate-300/10 blur-3xl" />
            <motion.div
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-300/60 to-transparent"
              animate={{ x: ["-25%", "25%", "-25%"] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Daily Workflow</p>
            <ul className="mt-6 space-y-4 text-sm text-zinc-200">
              <li className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                <span>Development Environment</span>
                <span className="text-zinc-400">VS Code + Extensions</span>
              </li>
              <li className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                <span>Source Control</span>
                <span className="text-zinc-400">Git + GitHub</span>
              </li>
              <li className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                <span>Project Management</span>
                <span className="text-zinc-400">Jira + Agile Ticketing</span>
              </li>
              <li className="flex items-center justify-between pb-1">
                <span>Execution Style</span>
                <span className="text-zinc-400">Sprints + Deadlines</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
