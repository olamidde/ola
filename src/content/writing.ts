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
    description: "Reflections on exploring new york, cultivating relationships, and staying hungry to learn and grow.",
    date: "March 1, 2026",
    slug: "post-grad",
    content: `These past couple months have been a ride. I graduated college, moved to new york city, and started a new job, and somewhere in the blur of packing boxes and first days I started to understand who I'm becoming.

New york has a way of pulling you out of your comfort zone, and I've tried to say yes to all of it. On weekends I've wandered through neighborhoods I'd never even heard of, eating jollof in the bronx one day and dumplings in flushing the next, catching live music in harlem and getting lost in bookstores in the village. One night I'm at a rooftop show with people I just met, the next I'm in someone's tiny brooklyn kitchen learning to cook a dish from a country I've never been to. Every block feels like a different world. Getting to explore so many different avenues of this city, and getting exposed to so many different people and cultures, has stretched how I see everything.

All of that exploring taught me how much relationships actually matter, and how much intention it takes to keep them alive. It's easy to meet people in a place this big, but it's a lot harder to hold onto them. I've had to learn to be the one who texts first, who plans the dinner, who calls home just to check in. I try to protect the friendships from college and back home even while I build brand new ones here, because I've realized the people you keep are the people who keep you. Growth was never a solo climb for me. It has always been a group project, and I don't take a single person in my corner for granted.

But if there's one thing that drives me more than anything, it's how badly I want to learn. I'm hungry for it in a way I can't really turn off. I want to get better at everything: writing cleaner code, having harder conversations, cooking a real meal, staying disciplined in the gym, understanding how great products and teams actually come together. I chase the feeling of not knowing something and then slowly figuring it out. I read constantly, I ask too many questions, and I say yes to problems that scare me, because every new thing I learn makes the world bigger and makes me a little less afraid of it. I don't want to improve in just one lane. I want to become a better engineer, a better friend, and a better version of myself in every area at once.

Work has thrown its own kind of curveball at me too. I joined graphite, poured myself into building, and then watched the ground shift underneath me as we were acquired into cursor. It's a strange, surreal thing. The company you know changes shape almost overnight, roadmaps get rewritten, and you have to hold your work loosely while still caring about it deeply. It taught me that nothing in this industry is permanent, and that the only real constants are the people beside you and the craft you carry with you. So I stay adaptable, keep shipping through the uncertainty, and trust that change usually opens more doors than it closes.

If I've learned anything post-grad, it's this: explore everything, hold your people close, and stay hungry enough to keep growing. I don't know exactly where all of this is going, but for the first time I'm okay not knowing. I'm just grateful to be exploring, learning, and figuring it out, one wild month at a time.`,
  },
];

export function getPostBySlug(slug: string): WritingPost | undefined {
  return writingPosts.find((post) => post.slug === slug);
}
