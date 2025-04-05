import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Download } from "lucide-react";

export const metadata = {
  title: "Resume | Your Name",
  description: "My professional experience and skills",
};

export default function ResumePage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">Resume</h1>
          <p className="text-xl text-muted-foreground">
            My professional experience and skills
          </p>
        </div>
        <Button asChild>
          <a href="/resume.pdf" download>
            <Download className="mr-2 h-4 w-4" /> Download PDF
          </a>
        </Button>
      </div>

      <div className="grid gap-8">
        {/* Education Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Education</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="font-semibold">University Name</h3>
                  <p className="text-muted-foreground">Bachelor of Science in Computer Science</p>
                </div>
                <span className="text-sm text-muted-foreground">2014 - 2018</span>
              </div>
              <p className="mt-2">
                Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Experience Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Experience</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="font-semibold">Senior Developer</h3>
                  <p className="text-muted-foreground">Example Corp</p>
                </div>
                <span className="text-sm text-muted-foreground">2021 - Present</span>
              </div>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Led development of key features and mentored junior developers</li>
                <li>Implemented CI/CD pipelines to improve deployment efficiency</li>
                <li>Collaborated with design team to create responsive user interfaces</li>
              </ul>
            </div>

            <Separator />

            <div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="font-semibold">Developer</h3>
                  <p className="text-muted-foreground">Tech Solutions</p>
                </div>
                <span className="text-sm text-muted-foreground">2018 - 2021</span>
              </div>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Worked on various web applications using modern technologies</li>
                <li>Developed RESTful APIs for client-side applications</li>
                <li>Participated in code reviews and team planning sessions</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Programming Languages</h3>
                <p>JavaScript, TypeScript, Python, Java</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Frontend</h3>
                <p>React, Next.js, HTML, CSS, Tailwind CSS</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Backend</h3>
                <p>Node.js, Express, Django, Spring Boot</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Other</h3>
                <p>Git, Docker, AWS, CI/CD, Agile Methodologies</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
