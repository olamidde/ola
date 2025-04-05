import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "project one",
    description: "a brief description of project one and what technologies were used.",
    link: "/projects/project-one",
  },
  {
    title: "project two",
    description: "a brief description of project two and what technologies were used.",
    link: "/projects/project-two",
  },
  {
    title: "project three",
    description: "a brief description of project three and what technologies were used.",
    link: "/projects/project-three",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-12 md:py-16">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-8">projects</h2>
        <div className="flex justify-center mb-8">
          <Button variant="outline" asChild>
            <Link href="/projects">
              view all <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="lowercase">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto flex justify-center">
                <Button variant="outline" asChild>
                  <Link href={project.link}>
                    view project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
