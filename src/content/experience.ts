export type TechIconType = "code" | "database" | "server" | "globe";

export type Technology = {
  name: string;
  iconType: TechIconType;
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  icon?: string;
  technologies: Technology[];
};

export const experiences: Experience[] = [
  {
    role: "software engineer",
    company: "spacex super intelligence",
    location: "nyc",
    period: "2026 - present",
    description:
      "building ai-powered products from the ground up, exploring how autonomous systems and applied ml can push the boundaries of what software can do.",
    technologies: [
      { name: "typescript", iconType: "code" },
      { name: "python", iconType: "code" },
      { name: "ml", iconType: "code" },
    ],
  },
  {
    role: "software engineer",
    company: "cursor",
    location: "nyc",
    period: "2025 - present",
    description:
      "building ai-powered developer tools that transform how engineers write code. working on advanced code intelligence, context-aware completions, and next-generation ide features using latest llm research.",
    technologies: [
      { name: "typescript", iconType: "code" },
      { name: "python", iconType: "code" },
      { name: "react", iconType: "code" },
    ],
  },
  {
    role: "software engineer",
    company: "graphite",
    location: "nyc",
    period: "2025 - present",
    description:
      "built modern git workflow tooling for stacked diffs and pr management. contributed to product and infrastructure before acquisition, now integrating graphite's workflow innovations into cursor's ai-powered development environment.",
    technologies: [
      { name: "typescript", iconType: "code" },
      { name: "python", iconType: "code" },
    ],
  },
  {
    role: "software engineer intern",
    company: "figma",
    location: "nyc",
    period: "2024",
    description:
      "implemented tab bar renaming feature and led design of agent debug menu system for desktop app.",
    technologies: [
      { name: "typescript", iconType: "code" },
      { name: "react", iconType: "code" },
      { name: "electron", iconType: "code" },
      { name: "javascript", iconType: "code" },
    ],
  },
  {
    role: "software engineer intern",
    company: "microsoft",
    location: "nyc",
    period: "2024",
    description:
      "contributed to ml model serving infrastructure for sql server's query processing system.",
    technologies: [
      { name: "python", iconType: "code" },
      { name: "azure", iconType: "server" },
      { name: "sql", iconType: "database" },
      { name: "ml", iconType: "code" },
    ],
  },
  {
    role: "software engineer intern",
    company: "microsoft",
    location: "seattle",
    period: "2023",
    description:
      "engineered python and azure functions automation to clean up stale sharepoint online database records.",
    technologies: [
      { name: "python", iconType: "code" },
      { name: "azure", iconType: "server" },
      { name: "t-sql", iconType: "database" },
      { name: "sharepoint", iconType: "server" },
    ],
  },
  {
    role: "autonomous robotics researcher",
    company: "texas robotics",
    icon: "texas",
    location: "austin",
    period: "2022-2023",
    description:
      "developed advanced path planning algorithm for boston dynamic's spot robot.",
    technologies: [
      { name: "python", iconType: "code" },
      { name: "ros", iconType: "code" },
      { name: "opencv", iconType: "code" },
      { name: "reinforcement learning", iconType: "code" },
    ],
  },
  {
    role: "software engineer intern",
    company: "microsoft",
    location: "san francisco",
    period: "2022",
    description:
      "developed an mvp react application to teach underprivileged groups career-based skills.",
    technologies: [
      { name: "react", iconType: "code" },
      { name: "javascript", iconType: "code" },
      { name: "firebase", iconType: "database" },
      { name: "css", iconType: "code" },
    ],
  },
];
