import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Linkedin, Twitter, Mail } from "lucide-react";

const links = [
  {
    title: "GitHub",
    description: "Check out my code repositories and open-source contributions",
    icon: Github,
    url: "https://github.com/yourusername",
  },
  {
    title: "LinkedIn",
    description: "Connect with me professionally",
    icon: Linkedin,
    url: "https://linkedin.com/in/yourusername",
  },
  {
    title: "Twitter",
    description: "Follow me for updates and thoughts",
    icon: Twitter,
    url: "https://twitter.com/yourusername",
  },
  {
    title: "Email",
    description: "Contact me directly",
    icon: Mail,
    url: "mailto:your.email@example.com",
  },
  {
    title: "Personal Website",
    description: "Visit my personal website",
    icon: ExternalLink,
    url: "https://yourwebsite.com",
  },
];

export const metadata = {
  title: "Links | Your Name",
  description: "Connect with me on various platforms",
};

export default function LinksPage() {
  return (
    <div className="container py-12 md:py-16 max-w-md mx-auto">
      <h1 className="text-4xl font-bold tracking-tight mb-4 text-center">Links</h1>
      <p className="text-xl text-muted-foreground mb-8 text-center">
        Connect with me on various platforms
      </p>
      
      <div className="space-y-4">
        {links.map((link, index) => (
          <Card key={index}>
            <CardHeader className="p-4">
              <div className="flex items-center gap-3">
                <link.icon className="h-5 w-5" />
                <div>
                  <CardTitle className="text-lg">{link.title}</CardTitle>
                  <CardDescription>{link.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0 pb-4 px-4">
              <Button className="w-full" asChild>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  Visit <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
