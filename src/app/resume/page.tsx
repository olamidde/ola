import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Download } from "lucide-react";

export const metadata = {
  title: "resume | your name",
  description: "my professional experience and skills",
};

export default function ResumePage() {
  return (
    <div className="container py-12 md:py-16 text-center">
      <div className="flex flex-col items-center gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">resume</h1>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            my professional experience and skills
          </p>
        </div>
        <Button asChild>
          <a href="/resume.pdf" download>
            <Download className="mr-2 h-4 w-4" /> download pdf
          </a>
        </Button>
      </div>

      <div className="grid gap-8 max-w-3xl mx-auto">
        {/* Education Section */}
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl lowercase">education</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="border-b border-dashed border-slate-200 dark:border-neutral-700 !py-1 !my-0 hover:bg-muted transition-all duration-300 ease-in-out rounded-md px-1 mb-4">
              <div className="flex justify-between items-baseline py-2">
                <div>
                  <h3 className="font-medium">university name</h3>
                  <p className="text-sm text-muted-foreground">bachelor of science in computer science</p>
                </div>
                <span className="text-sm text-muted-foreground">2014 - 2018</span>
              </div>
              <p className="text-sm pb-2">
                relevant coursework: data structures, algorithms, web development, database systems
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Experience Section */}
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl lowercase">experience</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="border-b border-dashed border-slate-200 dark:border-neutral-700 !py-1 !my-0 hover:bg-muted transition-all duration-300 ease-in-out rounded-md px-1 mb-4">
              <div className="flex justify-between items-baseline py-2">
                <div>
                  <h3 className="font-medium">senior developer</h3>
                  <p className="text-sm text-muted-foreground">example corp</p>
                </div>
                <span className="text-sm text-muted-foreground">2021 - present</span>
              </div>
              <ul className="text-sm pb-2 list-disc pl-5 space-y-1">
                <li>led development of key features and mentored junior developers</li>
                <li>implemented ci/cd pipelines to improve deployment efficiency</li>
                <li>collaborated with design team to create responsive user interfaces</li>
              </ul>
            </div>

            <div className="border-b border-dashed border-slate-200 dark:border-neutral-700 !py-1 !my-0 hover:bg-muted transition-all duration-300 ease-in-out rounded-md px-1 mb-4">
              <div className="flex justify-between items-baseline py-2">
                <div>
                  <h3 className="font-medium">developer</h3>
                  <p className="text-sm text-muted-foreground">tech solutions</p>
                </div>
                <span className="text-sm text-muted-foreground">2018 - 2021</span>
              </div>
              <ul className="text-sm pb-2 list-disc pl-5 space-y-1">
                <li>worked on various web applications using modern technologies</li>
                <li>developed restful apis for client-side applications</li>
                <li>participated in code reviews and team planning sessions</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl lowercase">skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2 lowercase">programming languages</h3>
                <p className="text-sm">javascript, typescript, python, java</p>
              </div>
              <div>
                <h3 className="font-medium mb-2 lowercase">frontend</h3>
                <p className="text-sm">react, next.js, html, css, tailwind css</p>
              </div>
              <div>
                <h3 className="font-medium mb-2 lowercase">backend</h3>
                <p className="text-sm">node.js, express, django, spring boot</p>
              </div>
              <div>
                <h3 className="font-medium mb-2 lowercase">other</h3>
                <p className="text-sm">git, docker, aws, ci/cd, agile methodologies</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
