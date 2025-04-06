import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-16">
      <div className="container px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-8">about me</h2>
        <div className="flex flex-col items-center gap-8 max-w-2xl mx-auto w-full">
          <Avatar className="w-32 h-32">
            <AvatarFallback>oo</AvatarFallback>
          </Avatar>
          <Card className="w-full">
            <CardContent className="pt-6">
              <p className="mb-4">
                hello! i'm ola, a software engineer based in austin, tx. i specialize in full-stack development and have a passion for ai, machine learning, and robotics.
              </p>
              <p>
                i'm currently studying computer science and mathematics at the university of texas at austin, with experience in software engineering at microsoft and figma. i enjoy building applications that solve real-world problems and exploring the intersection of ai and user experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
