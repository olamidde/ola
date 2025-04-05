import { Separator } from "@/components/ui/separator";
import { TechBadge } from "@/components/ui/tech-badge";
import { Building, Code, Cpu } from "lucide-react";

const experiences = [
  {
    role: "software engineer",
    company: "example corp",
    icon: Building,
    location: "sf",
    period: "2021 - present",
    description: "led development of key features and mentored junior developers.",
    technologies: [
      { name: "react", iconType: "code" },
      { name: "typescript", iconType: "code" },
      { name: "node.js", iconType: "server" },
      { name: "graphql", iconType: "database" },
    ],
  },
  {
    role: "software engineer",
    company: "tech solutions",
    icon: Code,
    location: "nyc",
    period: "2018 - 2021",
    description: "worked on various web applications using modern technologies.",
    technologies: [
      { name: "javascript", iconType: "code" },
      { name: "python", iconType: "code" },
      { name: "django", iconType: "server" },
      { name: "postgresql", iconType: "database" },
    ],
  },
  {
    role: "software engineer",
    company: "startup inc",
    icon: Cpu,
    location: "austin",
    period: "2016 - 2018",
    description: "assisted in building and maintaining web applications.",
    technologies: [
      { name: "html", iconType: "code" },
      { name: "css", iconType: "code" },
      { name: "javascript", iconType: "code" },
      { name: "php", iconType: "server" },
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12 md:py-16 bg-muted/50">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-8">experience</h2>
        <div className="max-w-xl mx-auto text-left">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-b border-dashed border-slate-200 dark:border-neutral-700 !py-1 !my-0 hover:bg-muted transition-all duration-300 ease-in-out rounded-md px-1 mb-4"
            >
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <exp.icon className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">{exp.company}</p>
                    <p className="text-xs text-muted-foreground">{exp.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                  <p className="text-xs text-muted-foreground">{exp.period}</p>
                </div>
              </div>
              <p className="text-sm pb-2 pl-8">{exp.description}</p>
              <div className="flex flex-wrap gap-2 pl-8 pb-2">
                {exp.technologies.map((tech, techIndex) => (
                  <TechBadge
                    key={techIndex}
                    name={tech.name}
                    iconType={tech.iconType}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
