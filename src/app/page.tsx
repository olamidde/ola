import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

export default function Home() {
  return (
    <>
      <div className="container px-4 sm:px-6 py-12 md:py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">hey im ola 👋🏾</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">software engineer with a passion for ai and robotics</p>
      </div>

      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
    </>
  );
}
