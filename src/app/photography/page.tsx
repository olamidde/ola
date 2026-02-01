import { Camera } from "lucide-react";

export const metadata = {
  title: "photography | ola ogunsanya",
  description: "photography portfolio coming soon",
};

export default function PhotographyPage() {
  return (
    <div className="py-12 md:py-16 min-h-[70vh] flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">photography</h1>

        <div className="flex flex-col items-center justify-center gap-8 mt-8">
        <div className="relative">
          <Camera className="h-24 w-24 text-muted-foreground animate-pulse" />
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-ping" />
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 animate-bounce inline-block">coming soon :)</h2>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            my photography portfolio is currently in development.
            <br />
            check back later for some amazing shots!
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}
