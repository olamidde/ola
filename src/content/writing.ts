export type WritingPost = {
  title: string;
  description: string;
  date: string;
  slug: string;
  content: string;
};

export const writingPosts: WritingPost[] = [
  {
    title: "Post Grad",
    description: "Reflections on my post-grad life and what I've learned.",
    date: "March 1, 2026",
    slug: "post-grad",
    content: `These past couple months have been a ride. I graduated college, moved to a new york city and started a new job. Add more of your reflections here—separate paragraphs with blank lines.`,
  },
];

export function getPostBySlug(slug: string): WritingPost | undefined {
  return writingPosts.find((post) => post.slug === slug);
}
