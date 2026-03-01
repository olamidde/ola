import Link from "next/link";
import { writingPosts } from "@/content/writing";

export const metadata = {
  title: "writing | ola ogunsanya",
  description: "read my latest thoughts, ideas, and insights",
};

export default function WritingPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            ola ogunsanya
          </h1>
          <p className="text-lg text-muted-foreground mt-1">writing</p>
        </div>

        <div className="flex flex-col gap-16">
          {writingPosts.length === 0 ? (
            <p className="text-muted-foreground">nothing here yet.</p>
          ) : (
            writingPosts.map((post, index) => (
              <Link
                key={index}
                href={`/writing/${post.slug}`}
                className="group block text-left"
              >
                <h2 className="text-xl font-bold tracking-tight text-foreground group-hover:underline">
                  {post.title}
                </h2>
                <p className="mt-2 text-base text-muted-foreground">
                  {post.description}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{post.date}</p>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
