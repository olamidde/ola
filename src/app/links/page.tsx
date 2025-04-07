"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Search } from "lucide-react";
import { FaGithub, FaYoutube, FaMedium, FaDev, FaBook, FaNewspaper, FaCode, FaLink } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

// Define categories for filtering
const categories = [
  "all",
  "tech",
  "design",
  "productivity",
  "inspiration",
  "learning",
  "tools",
];

// Define the links with categories and icons
const links = [
  {
    title: "How to Build a Full Stack App with Next.js 13 and Firebase",
    website: "github.com",
    url: "https://github.com/fireship-io/next13-firebase-demo",
    icon: FaGithub,
    category: "tech",
  },
  {
    title: "The Future of Web Development: HTMX vs React",
    website: "youtube.com",
    url: "https://www.youtube.com/watch?v=NA5Fcgs_viU",
    icon: FaYoutube,
    category: "tech",
  },
  {
    title: "Designing Better User Interfaces",
    website: "medium.com",
    url: "https://medium.com/design/designing-better-user-interfaces-5c5d87b686a0",
    icon: FaMedium,
    category: "design",
  },
  {
    title: "The Power of Atomic Habits",
    website: "jamesclear.com",
    url: "https://jamesclear.com/atomic-habits",
    icon: FaBook,
    category: "productivity",
  },
  {
    title: "Understanding TypeScript Generics",
    website: "dev.to",
    url: "https://dev.to/mapleleaf/understanding-typescript-generics-4ede",
    icon: FaDev,
    category: "tech",
  },
  {
    title: "AI Tools for Developers in 2023",
    website: "hashnode.com",
    url: "https://hashnode.com/post/ai-tools-for-developers-in-2023",
    icon: SiHashnode,
    category: "tools",
  },
  {
    title: "The Art of Readable Code",
    website: "refactoring.guru",
    url: "https://refactoring.guru/readable-code",
    icon: FaCode,
    category: "learning",
  },
  {
    title: "Latest Tech News and Trends",
    website: "techcrunch.com",
    url: "https://techcrunch.com/",
    icon: FaNewspaper,
    category: "tech",
  },
  {
    title: "Design Inspiration Gallery",
    website: "dribbble.com",
    url: "https://dribbble.com/",
    icon: FaLink,
    category: "inspiration",
  },
];

// Metadata is now in a separate file: metadata.ts

export default function LinksPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter links based on search query and selected category
  const filteredLinks = links.filter((link) => {
    const matchesSearch = link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         link.website.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || link.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container px-4 sm:px-6 py-12 md:py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold tracking-tight mb-4 text-center">interesting links</h1>
      <p className="text-xl text-muted-foreground mb-8 text-center max-w-md mx-auto">
        a collection of articles, tools, and resources i find interesting
      </p>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="search links..."
            className="pl-9"
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer capitalize"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-muted-foreground mb-4">
        showing {filteredLinks.length} of {links.length} links
      </p>

      {/* Links grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredLinks.length > 0 ? (
          filteredLinks.map((link, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                <CardHeader className="p-4 pb-2">
                  <div className="flex items-center gap-3">
                    <div className="bg-muted rounded-full p-2 flex-shrink-0">
                      <link.icon className="h-4 w-4" />
                    </div>
                    <div className="text-left">
                      <CardTitle className="text-base lowercase line-clamp-1">{link.title}</CardTitle>
                      <CardDescription className="text-xs">{link.website}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 pb-4 px-4 flex justify-between items-center">
                  <Badge variant="secondary" className="capitalize text-xs">
                    {link.category}
                  </Badge>
                  <ExternalLink className="h-3 w-3 text-muted-foreground" />
                </CardContent>
              </a>
            </Card>
          ))
        ) : (
          <div className="col-span-2 py-12 text-center">
            <p className="text-muted-foreground">no links found matching your search</p>
          </div>
        )}
      </div>
    </div>
  );
}
