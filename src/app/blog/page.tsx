import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "blog post one",
    description: "a brief description of blog post one.",
    date: "april 10, 2023",
    slug: "blog-post-one",
  },
  {
    title: "blog post two",
    description: "a brief description of blog post two.",
    date: "march 25, 2023",
    slug: "blog-post-two",
  },
  {
    title: "blog post three",
    description: "a brief description of blog post three.",
    date: "february 15, 2023",
    slug: "blog-post-three",
  },
  {
    title: "blog post four",
    description: "a brief description of blog post four.",
    date: "january 5, 2023",
    slug: "blog-post-four",
  },
];

export const metadata = {
  title: "blog | your name",
  description: "read my latest thoughts, ideas, and insights",
};

export default function BlogPage() {
  return (
    <div className="container px-4 sm:px-6 py-12 md:py-16 text-center">
      <h1 className="text-4xl font-bold tracking-tight mb-4">blog</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
        my thoughts, ideas, and insights
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {blogPosts.map((post, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle className="lowercase">{post.title}</CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{post.description}</p>
            </CardContent>
            <CardFooter className="mt-auto flex justify-center">
              <Button variant="outline" asChild>
                <Link href={`/blog/${post.slug}`}>
                  read more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
