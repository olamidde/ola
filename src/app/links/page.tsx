import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const links = [
  {
    title: "github",
    description: "check out my code repositories and open-source contributions",
    icon: Github,
    url: "https://github.com/yourusername",
  },
  {
    title: "linkedin",
    description: "connect with me professionally",
    icon: Linkedin,
    url: "https://linkedin.com/in/yourusername",
  },
  {
    title: "x",
    description: "follow me for updates and thoughts",
    icon: FaXTwitter,
    url: "https://x.com/olaogn",
  },
  {
    title: "email",
    description: "contact me directly",
    icon: Mail,
    url: "mailto:your.email@example.com",
  },
  {
    title: "personal website",
    description: "visit my personal website",
    icon: ExternalLink,
    url: "https://yourwebsite.com",
  },
];

export const metadata = {
  title: "links | your name",
  description: "connect with me on various platforms",
};

export default function LinksPage() {
  return (
    <div className="container px-4 sm:px-6 py-12 md:py-16 max-w-md mx-auto text-center">
      <h1 className="text-4xl font-bold tracking-tight mb-4">links</h1>
      <p className="text-xl text-muted-foreground mb-8">
        connect with me on various platforms
      </p>

      <div className="space-y-4">
        {links.map((link, index) => (
          <Card key={index}>
            <CardHeader className="p-4">
              <div className="flex items-center gap-3">
                <link.icon className="h-5 w-5" />
                <div className="text-left">
                  <CardTitle className="text-lg lowercase">{link.title}</CardTitle>
                  <CardDescription>{link.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0 pb-4 px-4">
              <Button className="w-full" asChild>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  visit <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
