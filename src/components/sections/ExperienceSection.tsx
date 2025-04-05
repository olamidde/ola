import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const experiences = [
  {
    title: "Senior Developer",
    company: "Example Corp",
    period: "2021 - Present",
    description: "Led development of key features and mentored junior developers.",
  },
  {
    title: "Developer",
    company: "Tech Solutions",
    period: "2018 - 2021",
    description: "Worked on various web applications using modern technologies.",
  },
  {
    title: "Junior Developer",
    company: "Startup Inc",
    period: "2016 - 2018",
    description: "Assisted in building and maintaining web applications.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12 md:py-16 bg-muted/50">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Experience</h2>
        <div className="grid gap-6 max-w-2xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col items-center gap-2">
                  <CardTitle>{exp.title}</CardTitle>
                  <CardDescription>{exp.company}</CardDescription>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p>{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
