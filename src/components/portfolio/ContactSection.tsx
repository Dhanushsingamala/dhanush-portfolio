"use client";

import { AnimatedReveal } from "@/components/portfolio/AnimatedReveal";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { socialLinks } from "@/data/portfolio";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contact" className="flex min-h-screen snap-start items-center px-6 pb-24 pt-20 scroll-mt-24 md:px-10">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[1fr_1fr] md:items-end">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let&apos;s Build Something Useful"
            description="Open to product-focused frontend roles, contract projects, and CRM platform collaborations."
          />
        </AnimatedReveal>

        <AnimatedReveal delay={0.15}>
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
            className="glass-panel relative overflow-hidden rounded-3xl border border-zinc-800 p-7"
          >
            <motion.div
              className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-zinc-200/10 to-transparent"
              animate={{ x: ["-120%", "520%"] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Open For Opportunities</p>
            <a
              href="mailto:dhanushsingamala@gmail.com"
              className="mt-3 block text-xl font-semibold text-zinc-100 transition-colors duration-300 hover:text-slate-200"
            >
              dhanushsingamala@gmail.com
            </a>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 320, damping: 20 }}
                  className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition-colors duration-300 hover:border-zinc-500 hover:text-zinc-100"
                >
                  {social.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
