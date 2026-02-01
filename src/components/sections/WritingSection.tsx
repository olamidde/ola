import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const recentPosts = [
  {
    title: "writing post one",
    description: "a brief description of writing post one.",
    date: "april 10, 2023",
    slug: "writing-post-one",
  },
  {
    title: "writing post two",
    description: "a brief description of writing post two.",
    date: "march 25, 2023",
    slug: "writing-post-two",
  },
];

export function WritingSection() {
  return (
    <section id="writing" className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight">writing</h2>
          <Button variant="outline" asChild>
            <Link href="/writing">
              view all <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentPosts.map((post, index) => (
              <Link key={index} href={`/writing/${post.slug}`}>
                <Card className="flex flex-col hover:shadow-md transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="lowercase">{post.title}</CardTitle>
                    <CardDescription>{post.date}</CardDescription>
                  </CardHeader>
                  <div className="px-6 pb-6">
                    <p>{post.description}</p>
                  </div>
                </Card>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
} 