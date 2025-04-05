import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

export default function Home() {
  return (
    <>
      <div className="container py-12 md:py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Hello, I'm Your Name</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">A brief tagline about what you do</p>
      </div>

      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
    </>
  );
}
