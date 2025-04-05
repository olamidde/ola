import { Separator } from "@/components/ui/separator";

const experiences = [
  {
    title: "senior developer",
    company: "example corp",
    period: "2021 - present",
    description: "led development of key features and mentored junior developers.",
  },
  {
    title: "developer",
    company: "tech solutions",
    period: "2018 - 2021",
    description: "worked on various web applications using modern technologies.",
  },
  {
    title: "junior developer",
    company: "startup inc",
    period: "2016 - 2018",
    description: "assisted in building and maintaining web applications.",
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
              <div className="flex justify-between items-baseline py-2">
                <div>
                  <h3 className="font-medium">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground">{exp.period}</span>
              </div>
              <p className="text-sm pb-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
