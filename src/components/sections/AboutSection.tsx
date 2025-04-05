import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-16">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-8">about me</h2>
        <div className="flex flex-col items-center gap-8 max-w-2xl mx-auto">
          <Avatar className="w-32 h-32">
            <AvatarFallback>yn</AvatarFallback>
          </Avatar>
          <Card className="w-full">
            <CardContent className="pt-6">
              <p className="mb-4">
                hello! i'm [your name], a [your profession] based in [your location]. i specialize in [your specialization] and have a passion for [your passion].
              </p>
              <p>
                lorem ipsum dolor sit amet, consectetur adipiscing elit. nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
