import { TechBadge } from "@/components/ui/tech-badge";
import { CompanyLogo } from "@/components/ui/company-logo";
import { Collapsible } from "@/components/ui/collapsible";
import { experiences } from "@/content/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12 md:py-16">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
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
    </section>
  );
}
