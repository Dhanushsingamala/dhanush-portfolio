"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Intro" },
  { id: "about", label: "About" },
  { id: "projects", label: "Highlights" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function ScrollNavigator() {
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-40% 0px -45% 0px",
        threshold: [0.2, 0.45, 0.7],
      }
    );

    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-50 h-[2px] w-full origin-left bg-slate-200"
        style={{ scaleX: scrollYProgress }}
      />

      <aside className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 2xl:block">
        <div className="glass-panel rounded-2xl border border-zinc-800/80 px-3 py-3">
          <ul className="space-y-3">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="group flex items-center gap-3 rounded-xl px-2 py-1.5 transition-colors duration-300 hover:bg-zinc-800/40"
                    aria-label={`Go to ${section.label} section`}
                  >
                    <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                      <span
                        className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                          isActive ? "bg-slate-100" : "bg-zinc-500"
                        }`}
                      />
                      {isActive ? (
                        <motion.span
                          layoutId="active-dot"
                          className="absolute h-4 w-4 rounded-full border border-slate-200/70"
                          transition={{ type: "spring", stiffness: 320, damping: 28 }}
                        />
                      ) : null}
                    </span>
                    <span
                      className={`text-xs uppercase tracking-[0.14em] transition-colors duration-300 ${
                        isActive ? "text-zinc-100" : "text-zinc-400 group-hover:text-zinc-200"
                      }`}
                    >
                      {section.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
}
