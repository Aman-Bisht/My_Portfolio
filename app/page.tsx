

import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { FeaturedProjects } from "@/components/featured-projects";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { PersonalProjects } from "@/components/personal-projects";
import { SkillsSection } from "@/components/skill-section";

export default function Home() {
  return (
    <main className="relative">
       <Header />
     <HeroSection />
       <AboutSection />
      <SkillsSection />
      <ExperienceSection />
     <FeaturedProjects />
      <PersonalProjects />
      <ContactSection />
      <Footer /> 
    </main>
  )
}
