import { TechBadge } from "@/components/ui/tech-badge";
import { CompanyLogo } from "@/components/ui/company-logo";

const experiences = [
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
      <div className="container px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-8">experience</h2>
        <div className="grid gap-8 max-w-3xl mx-auto w-full">
          {experiences.map((experience, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-shrink-0">
                {experience.company === "microsoft" || experience.company === "figma" ? (
                  <CompanyLogo company={experience.company} />
                ) : experience.icon === "texas" ? (
                  <CompanyLogo company="texas" />
                ) : null}
              </div>
              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-medium">{experience.company}</h3>
                    <p className="text-sm text-muted-foreground">{experience.role}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-sm text-muted-foreground">{experience.location}</p>
                    <p className="text-sm text-muted-foreground">{experience.period}</p>
                  </div>
                </div>
                <p className="text-sm mb-4">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <TechBadge key={techIndex} name={tech.name} iconType={tech.iconType} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
