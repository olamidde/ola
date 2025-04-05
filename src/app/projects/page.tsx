import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description: "A detailed description of project one. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://example.com/project-one",
  },
  {
    title: "Project Two",
    description: "A detailed description of project two. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://example.com/project-two",
  },
  {
    title: "Project Three",
    description: "A detailed description of project three. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://example.com/project-three",
  },
  {
    title: "Project Four",
    description: "A detailed description of project four. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
    technologies: ["Vue.js", "JavaScript", "Tailwind CSS"],
    link: "https://example.com/project-four",
  },
  {
    title: "Project Five",
    description: "A detailed description of project five. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
    technologies: ["Angular", "TypeScript", "SCSS"],
    link: "https://example.com/project-five",
  },
  {
    title: "Project Six",
    description: "A detailed description of project six. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
    technologies: ["React Native", "TypeScript", "Expo"],
    link: "https://example.com/project-six",
  },
];

export const metadata = {
  title: "Projects | Your Name",
  description: "Explore my portfolio of projects and work",
};

export default function ProjectsPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Projects</h1>
      <p className="text-xl text-muted-foreground mb-8">
        A collection of my work and personal projects
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>
                {project.technologies.join(" • ")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{project.description}</p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button variant="outline" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
