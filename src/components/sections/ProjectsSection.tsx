import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">projects</h2>
            <Button variant="outline" asChild>
              <Link href="/projects">
                view all <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
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
      </div>
    </section>
  );
}
