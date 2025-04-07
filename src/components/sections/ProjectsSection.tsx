import Link from "next/link";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "music mind",
    description: "ai music production assistant using langchain and openai apis that analyzes music theory patterns and generates midi sequences.",
    link: "/projects/music-mind",
  },
  {
    title: "code mentor",
    description: "intelligent code review system using llms and ast parsing to provide contextual code suggestions.",
    link: "/projects/code-mentor",
  },
  {
    title: "autonomous robotics",
    description: "path planning algorithm for boston dynamic's spot robot integrating computer vision and reinforcement learning.",
    link: "/projects/autonomous-robotics",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-12 md:py-16">
      <div className="container px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-8">projects</h2>
        <div className="flex justify-center mb-8">
          <Button variant="outline" asChild>
            <Link href="/projects">
              view all <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
