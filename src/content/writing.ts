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
    description: "Reflections on relationships, staying curious, growing up in nyc, and surviving acquisitions.",
    date: "March 1, 2026",
    slug: "post-grad",
    content: `These past couple months have been a ride. I graduated college, moved to new york city, and started a new job — and somewhere in the blur of packing boxes and first days, I started to understand who I'm becoming.

College taught me a lot of things, but the lesson that keeps coming back is that relationships are everything. The late nights in the lab, the friends who talked me through my worst self-doubt, the mentors who saw something in me before I saw it myself — none of the wins would have meant anything without the people I shared them with. I used to think growth was a solo climb. I've learned it's a group project. The people you surround yourself with quietly become the ceiling and the floor of who you get to be, and I try not to take a single one of them for granted anymore.

That realization is tied to something else I can't shake: I just want to keep learning. I'm endlessly curious about how things work — how great software gets built, how teams make decisions, how a small idea turns into something millions of people actually touch. I chase that feeling of not knowing something and then, slowly, understanding it. It's why I say yes to hard problems even when they scare me. Every time I learn something new the world gets a little bigger, and I get a little less afraid of it.

New york has been the accelerant for all of it. The city moves fast and doesn't wait for you, and honestly that's been the best thing for me. I've grown more here in a few months than I did in years of comfort. Living somewhere that constantly humbles you forces you to figure out who you are when no one is grading you. I've learned to be more independent, more intentional with my time, and far more comfortable being uncomfortable. Some days are lonely and some days are electric — I've come to appreciate both.

And then there's the craziness of going through acquisitions. I joined graphite, poured myself into building, and then watched the ground shift underneath me as we were acquired into cursor. It's a strange, surreal thing — the company you know changes shape almost overnight, roadmaps get rewritten, and you have to hold your work loosely while still caring about it deeply. It taught me that nothing in this industry is permanent, and that the only real constants are the people beside you and the craft you carry with you. I learned to stay adaptable, to keep shipping through the uncertainty, and to trust that change — as chaotic as it feels — usually opens more doors than it closes.

If I've learned anything post-grad, it's this: hold your people close, stay curious enough to keep growing, and let the chaos change you for the better. I don't know exactly where all of this is going, but for the first time I'm okay not knowing. I'm just grateful to be building, learning, and figuring it out — one wild month at a time.`,
  },
];

export function getPostBySlug(slug: string): WritingPost | undefined {
  return writingPosts.find((post) => post.slug === slug);
}
