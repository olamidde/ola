import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { WritingSection } from "@/components/sections/WritingSection";
import { OnePager } from "@/components/one-pager/OnePager";
import { ONE_PAGER_ENABLED } from "@/lib/flags";

export default function Home() {
  if (ONE_PAGER_ENABLED) {
    return <OnePager />;
  }

  return (
    <>
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <WritingSection />
    </>
  );
}
