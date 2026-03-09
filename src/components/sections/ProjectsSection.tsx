import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "music mind",
    description: "ai music production assistant using langchain and openai apis.",
    link: "/projects/music-mind",
  },
  {
    title: "code mentor",
    description: "intelligent code review system using llms and ast parsing.",
    link: "/projects/code-mentor",
  },
  {
    title: "autonomous robotics",
    description: "path planning algorithm for boston dynamic's spot robot.",
    link: "/projects/autonomous-robotics",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight mb-8">projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Link key={index} href={project.link}>
                <Card className="flex flex-col hover:shadow-md transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="lowercase">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
