import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { WritingSection } from "@/components/sections/WritingSection";

export default function Home() {
  return (
    <>
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <WritingSection />
    </>
  );
}
