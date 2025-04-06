import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { TechBadge } from "@/components/ui/tech-badge";
import { Building, Code, Cpu, Download, GraduationCap, Database, Server, Globe } from "lucide-react";

export const metadata = {
  title: "resume | ola ogunsanya",
  description: "my professional experience and skills",
};

export default function ResumePage() {
  return (
    <div className="container px-4 sm:px-6 py-12 md:py-16 text-center">
      <div className="flex flex-col items-center gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">resume</h1>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            my professional experience and skills
          </p>
        </div>
        <Button asChild>
          <a href="/ola_ogunsanya_resume.pdf" download>
            <Download className="mr-2 h-4 w-4" /> download pdf
          </a>
        </Button>
      </div>

      <div className="grid gap-8 max-w-3xl mx-auto w-full">
        {/* Education Section */}
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl lowercase">education</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="border-b border-dashed border-slate-200 dark:border-neutral-700 !py-1 !my-0 hover:bg-muted transition-all duration-300 ease-in-out rounded-md px-1 mb-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 gap-2">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">the university of texas at austin</p>
                    <p className="text-xs text-muted-foreground">bachelor of science in computer science and mathematics</p>
                  </div>
                </div>
                <div className="text-left sm:text-right mt-1 sm:mt-0 ml-8 sm:ml-0">
                  <p className="text-sm text-muted-foreground">austin, tx</p>
                  <p className="text-xs text-muted-foreground">2025</p>
                </div>
              </div>
              <p className="text-sm pb-2 pl-8">
                relevant coursework: autonomous robotics, software engineering, artificial intelligence, machine learning, nlp
              </p>
              <div className="flex flex-wrap gap-2 pl-8 pb-2">
                <TechBadge name="python" iconType="code" />
                <TechBadge name="java" iconType="code" />
                <TechBadge name="javascript" iconType="code" />
                <TechBadge name="typescript" iconType="code" />
                <TechBadge name="c++" iconType="code" />
              </div>
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
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 gap-2">
                <div className="flex items-center gap-3">
                  <Building className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">figma</p>
                    <p className="text-xs text-muted-foreground">software engineer intern</p>
                  </div>
                </div>
                <div className="text-left sm:text-right mt-1 sm:mt-0 ml-8 sm:ml-0">
                  <p className="text-sm text-muted-foreground">nyc</p>
                  <p className="text-xs text-muted-foreground">2024</p>
                </div>
              </div>
              <ul className="text-sm pb-2 list-disc pl-8 space-y-1">
                <li>implemented tab bar renaming feature, increasing user workflow efficiency</li>
                <li>led design and implementation of agent debug menu system for desktop app</li>
                <li>revamped desktop tab bar notification system with new ui and resolved web app synchronization issues</li>
              </ul>
              <div className="flex flex-wrap gap-2 pl-8 pb-2">
                <TechBadge name="typescript" iconType="code" />
                <TechBadge name="react" iconType="code" />
                <TechBadge name="electron" iconType="code" />
                <TechBadge name="javascript" iconType="code" />
              </div>
            </div>

            <div className="border-b border-dashed border-slate-200 dark:border-neutral-700 !py-1 !my-0 hover:bg-muted transition-all duration-300 ease-in-out rounded-md px-1 mb-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 gap-2">
                <div className="flex items-center gap-3">
                  <Code className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">microsoft</p>
                    <p className="text-xs text-muted-foreground">software engineer intern</p>
                  </div>
                </div>
                <div className="text-left sm:text-right mt-1 sm:mt-0 ml-8 sm:ml-0">
                  <p className="text-sm text-muted-foreground">nyc</p>
                  <p className="text-xs text-muted-foreground">2024</p>
                </div>
              </div>
              <ul className="text-sm pb-2 list-disc pl-8 space-y-1">
                <li>contributed to ml model serving infrastructure for sql server's query processing system</li>
                <li>collaborated with sql cogs and web teams to implement feature extraction pipeline improvements</li>
                <li>developed monitoring dashboard for sql server's ml query performance predictions</li>
              </ul>
              <div className="flex flex-wrap gap-2 pl-8 pb-2">
                <TechBadge name="python" iconType="code" />
                <TechBadge name="azure" iconType="server" />
                <TechBadge name="sql" iconType="database" />
                <TechBadge name="ml" iconType="code" />
              </div>
            </div>

            <div className="border-b border-dashed border-slate-200 dark:border-neutral-700 !py-1 !my-0 hover:bg-muted transition-all duration-300 ease-in-out rounded-md px-1 mb-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 gap-2">
                <div className="flex items-center gap-3">
                  <Cpu className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">microsoft</p>
                    <p className="text-xs text-muted-foreground">software engineer intern</p>
                  </div>
                </div>
                <div className="text-left sm:text-right mt-1 sm:mt-0 ml-8 sm:ml-0">
                  <p className="text-sm text-muted-foreground">seattle</p>
                  <p className="text-xs text-muted-foreground">2023</p>
                </div>
              </div>
              <ul className="text-sm pb-2 list-disc pl-8 space-y-1">
                <li>engineered python and azure functions automation to clean up sharepoint online database records</li>
                <li>optimized spo database maintenance using t-sql scripts, reducing storage costs significantly</li>
                <li>developed automated cleanup processes for efficient database management</li>
              </ul>
              <div className="flex flex-wrap gap-2 pl-8 pb-2">
                <TechBadge name="python" iconType="code" />
                <TechBadge name="azure" iconType="server" />
                <TechBadge name="t-sql" iconType="database" />
                <TechBadge name="sharepoint" iconType="server" />
              </div>
            </div>

            <div className="border-b border-dashed border-slate-200 dark:border-neutral-700 !py-1 !my-0 hover:bg-muted transition-all duration-300 ease-in-out rounded-md px-1 mb-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 gap-2">
                <div className="flex items-center gap-3">
                  <Cpu className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">texas robotics</p>
                    <p className="text-xs text-muted-foreground">autonomous robotics researcher</p>
                  </div>
                </div>
                <div className="text-left sm:text-right mt-1 sm:mt-0 ml-8 sm:ml-0">
                  <p className="text-sm text-muted-foreground">austin</p>
                  <p className="text-xs text-muted-foreground">2022-2023</p>
                </div>
              </div>
              <ul className="text-sm pb-2 list-disc pl-8 space-y-1">
                <li>developed advanced path planning algorithm for boston dynamic's spot robot</li>
                <li>integrated computer vision pipeline and reinforcement learning methodologies</li>
                <li>co-authored research paper demonstrating algorithm's success in avoiding obstacles</li>
              </ul>
              <div className="flex flex-wrap gap-2 pl-8 pb-2">
                <TechBadge name="python" iconType="code" />
                <TechBadge name="ros" iconType="code" />
                <TechBadge name="opencv" iconType="code" />
                <TechBadge name="reinforcement learning" iconType="code" />
              </div>
            </div>

            <div className="border-b border-dashed border-slate-200 dark:border-neutral-700 !py-1 !my-0 hover:bg-muted transition-all duration-300 ease-in-out rounded-md px-1 mb-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 gap-2">
                <div className="flex items-center gap-3">
                  <Code className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">microsoft</p>
                    <p className="text-xs text-muted-foreground">new technologist intern</p>
                  </div>
                </div>
                <div className="text-left sm:text-right mt-1 sm:mt-0 ml-8 sm:ml-0">
                  <p className="text-sm text-muted-foreground">san francisco</p>
                  <p className="text-xs text-muted-foreground">2022</p>
                </div>
              </div>
              <ul className="text-sm pb-2 list-disc pl-8 space-y-1">
                <li>developed an mvp react application to teach underprivileged groups career-based skills</li>
                <li>designed and implemented responsive ui components for course content delivery</li>
                <li>set up firebase authentication and database infrastructure for user data</li>
              </ul>
              <div className="flex flex-wrap gap-2 pl-8 pb-2">
                <TechBadge name="react" iconType="code" />
                <TechBadge name="javascript" iconType="code" />
                <TechBadge name="firebase" iconType="database" />
                <TechBadge name="css" iconType="code" />
              </div>
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
                <p className="text-sm">java, javascript, swift, python, c++, html, css, c#, typescript, tailwind, sql, rust, haskell</p>
              </div>
              <div>
                <h3 className="font-medium mb-2 lowercase">frontend</h3>
                <p className="text-sm">react.js, next.js, tailwind, html, css</p>
              </div>
              <div>
                <h3 className="font-medium mb-2 lowercase">backend</h3>
                <p className="text-sm">supabase, postgresql, ruby, django, graphql, redis</p>
              </div>
              <div>
                <h3 className="font-medium mb-2 lowercase">ai & ml</h3>
                <p className="text-sm">pytorch, tensorflow, langchain, ray, scikit-learn, opencv, gazebo</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
