import { AboutSection } from "@/components/portfolio/AboutSection";
import { AnimatedBackdrop } from "@/components/portfolio/AnimatedBackdrop";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ScrollNavigator } from "@/components/portfolio/ScrollNavigator";
import { SkillsSection } from "@/components/portfolio/SkillsSection";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(38%_26%_at_16%_12%,rgba(255,255,255,0.09),transparent_66%),radial-gradient(36%_30%_at_78%_20%,rgba(148,163,184,0.14),transparent_70%),radial-gradient(44%_34%_at_50%_82%,rgba(71,85,105,0.18),transparent_72%)]" />
      <AnimatedBackdrop />
      <ScrollNavigator />
      <main className="relative z-10 snap-y snap-mandatory">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}
