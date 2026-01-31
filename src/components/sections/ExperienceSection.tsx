import { TechBadge } from "@/components/ui/tech-badge";
import { CompanyLogo } from "@/components/ui/company-logo";
import { Collapsible } from "@/components/ui/collapsible";

const experiences = [
  {
    role: "software engineer",
    company: "cursor",
    location: "nyc",
    period: "2025 - present",
    description: "building ai-powered developer tools that transform how engineers write code. working on advanced code intelligence, context-aware completions, and next-generation ide features using latest llm research.",
    technologies: [
      { name: "typescript", iconType: "code" as const },
      { name: "python", iconType: "code" as const },
      { name: "react", iconType: "code" as const },
    ]
  },
  {
    role: "software engineer",
    company: "graphite",
    location: "nyc",
    period: "2025 - present",
    description: "built modern git workflow tooling for stacked diffs and pr management. contributed to product and infrastructure before acquisition, now integrating graphite's workflow innovations into cursor's ai-powered development environment.",
    technologies: [
      { name: "typescript", iconType: "code" as const },
      { name: "python", iconType: "code" as const },
    ]
  },
  {
    role: "software engineer intern",
    company: "figma",
    location: "nyc",
    period: "2024",
    description: "implemented tab bar renaming feature and led design of agent debug menu system for desktop app.",
    technologies: [
      { name: "typescript", iconType: "code" as const },
      { name: "react", iconType: "code" as const },
      { name: "electron", iconType: "code" as const },
      { name: "javascript", iconType: "code" as const },
    ],
  },
  {
    role: "software engineer intern",
    company: "microsoft",
    location: "nyc",
    period: "2024",
    description: "contributed to ml model serving infrastructure for sql server's query processing system.",
    technologies: [
      { name: "python", iconType: "code" as const },
      { name: "azure", iconType: "server" as const },
      { name: "sql", iconType: "database" as const },
      { name: "ml", iconType: "code" as const },
    ],
  },
  {
    role: "software engineer intern",
    company: "microsoft",
    location: "seattle",
    period: "2023",
    description: "engineered python and azure functions automation to clean up stale sharepoint online database records.",
    technologies: [
      { name: "python", iconType: "code" as const },
      { name: "azure", iconType: "server" as const },
      { name: "t-sql", iconType: "database" as const },
      { name: "sharepoint", iconType: "server" as const },
    ],
  },
  {
    role: "autonomous robotics researcher",
    company: "texas robotics",
    icon: "texas",
    location: "austin",
    period: "2022-2023",
    description: "developed advanced path planning algorithm for boston dynamic's spot robot.",
    technologies: [
      { name: "python", iconType: "code" as const },
      { name: "ros", iconType: "code" as const },
      { name: "opencv", iconType: "code" as const },
      { name: "reinforcement learning", iconType: "code" as const },
    ],
  },
  {
    role: "software engineer intern",
    company: "microsoft",
    location: "san francisco",
    period: "2022",
    description: "developed an mvp react application to teach underprivileged groups career-based skills.",
    technologies: [
      { name: "react", iconType: "code" as const },
      { name: "javascript", iconType: "code" as const },
      { name: "firebase", iconType: "database" as const },
      { name: "css", iconType: "code" as const },
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12 md:py-16">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-8">experience</h2>
          <div className="grid gap-8">
            {experiences.map((experience, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <CompanyLogo company={experience.company} />
                </div>
                <div className="flex-grow min-w-0">
                  <Collapsible
                    trigger={
                      <div className="flex items-start justify-between w-full gap-4">
                        <div className="flex-shrink min-w-0">
                          <h3 className="font-medium">{experience.company}</h3>
                          <p className="text-sm text-muted-foreground">{experience.role}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-sm text-muted-foreground">{experience.location}</p>
                          <p className="text-sm text-muted-foreground">{experience.period}</p>
                        </div>
                      </div>
                    }
                  >
                    <p className="text-sm mb-4">{experience.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <TechBadge key={techIndex} name={tech.name} iconType={tech.iconType} />
                      ))}
                    </div>
                  </Collapsible>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
