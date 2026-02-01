import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "project one",
    description: "a detailed description of project one. lorem ipsum dolor sit amet, consectetur adipiscing elit. nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
    technologies: ["react", "typescript", "tailwind css"],
    link: "https://example.com/project-one",
  },
  {
    title: "project two",
    description: "a detailed description of project two. lorem ipsum dolor sit amet, consectetur adipiscing elit. nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
    technologies: ["next.js", "typescript", "tailwind css"],
    link: "https://example.com/project-two",
  },
  {
    title: "project three",
    description: "a detailed description of project three. lorem ipsum dolor sit amet, consectetur adipiscing elit. nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
    technologies: ["react", "javascript", "css"],
    link: "https://example.com/project-three",
  },
  {
    title: "project four",
    description: "a detailed description of project four. lorem ipsum dolor sit amet, consectetur adipiscing elit. nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
    technologies: ["vue.js", "javascript", "tailwind css"],
    link: "https://example.com/project-four",
  },
  {
    title: "project five",
    description: "a detailed description of project five. lorem ipsum dolor sit amet, consectetur adipiscing elit. nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
    technologies: ["angular", "typescript", "scss"],
    link: "https://example.com/project-five",
  },
  {
    title: "project six",
    description: "a detailed description of project six. lorem ipsum dolor sit amet, consectetur adipiscing elit. nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
    technologies: ["react native", "typescript", "expo"],
    link: "https://example.com/project-six",
  },
];

export const metadata = {
  title: "projects | your name",
  description: "explore my portfolio of projects and work",
};

export default function ProjectsPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight mb-4 text-center">projects</h1>
        <p className="text-xl text-muted-foreground mb-8 text-center">
          a collection of my work and personal projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle className="lowercase">{project.title}</CardTitle>
              <CardDescription>
                {project.technologies.join(" • ")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{project.description}</p>
            </CardContent>
            <CardFooter className="mt-auto flex justify-center">
              <Button variant="outline" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  view project <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
        </div>
      </div>
    </div>
  );
}
