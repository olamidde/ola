import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Blog Post One",
    description: "A brief description of blog post one.",
    date: "April 10, 2023",
    slug: "blog-post-one",
  },
  {
    title: "Blog Post Two",
    description: "A brief description of blog post two.",
    date: "March 25, 2023",
    slug: "blog-post-two",
  },
  {
    title: "Blog Post Three",
    description: "A brief description of blog post three.",
    date: "February 15, 2023",
    slug: "blog-post-three",
  },
  {
    title: "Blog Post Four",
    description: "A brief description of blog post four.",
    date: "January 5, 2023",
    slug: "blog-post-four",
  },
];

export const metadata = {
  title: "Blog | Your Name",
  description: "Read my latest thoughts, ideas, and insights",
};

export default function BlogPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
      <p className="text-xl text-muted-foreground mb-8">
        My thoughts, ideas, and insights
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{post.description}</p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button variant="outline" asChild>
                <Link href={`/blog/${post.slug}`}>
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
