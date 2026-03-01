import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getPostBySlug, writingPosts } from "@/content/writing";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return writingPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "post not found | ola ogunsanya" };
  return {
    title: `${post.title} | ola ogunsanya`,
    description: post.description,
  };
}

export default async function WritingPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const paragraphs = post.content
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
        <Link
          href="/writing"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-12 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          back to writing
        </Link>

        <article>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {post.title}
          </h1>
          <p className="mt-2 text-muted-foreground">{post.date}</p>

          <div className="mt-12">
            {paragraphs.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
