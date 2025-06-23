"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Search } from "lucide-react";
import { FaGithub, FaBook, FaNewspaper, FaCode, FaBrain, FaMusic, FaRocket, FaGraduationCap } from "react-icons/fa";
import { SiArxiv, SiPaperswithcode } from "react-icons/si";

// Define categories for filtering
const categories = [
  "all",
  "ml-ai",
  "deep-learning",
  "music-ai",
  "productivity",
  "software-eng",
  "research",
  "books",
  "tools",
];

// Define the links with categories and icons
const links = [
  // Machine Learning & AI Research Papers
  {
    title: "Attention Is All You Need",
    website: "arxiv.org",
    url: "https://arxiv.org/abs/1706.03762",
    icon: SiArxiv,
    category: "ml-ai",
  },
  {
    title: "BERT: Pre-training of Deep Bidirectional Transformers",
    website: "arxiv.org",
    url: "https://arxiv.org/abs/1810.04805",
    icon: SiArxiv,
    category: "ml-ai",
  },
  {
    title: "GPT-3: Language Models are Few-Shot Learners",
    website: "arxiv.org",
    url: "https://arxiv.org/abs/2005.14165",
    icon: SiArxiv,
    category: "ml-ai",
  },
  {
    title: "ResNet: Deep Residual Learning for Image Recognition",
    website: "arxiv.org",
    url: "https://arxiv.org/abs/1512.03385",
    icon: SiArxiv,
    category: "deep-learning",
  },
  {
    title: "Generative Adversarial Networks",
    website: "arxiv.org",
    url: "https://arxiv.org/abs/1406.2661",
    icon: SiArxiv,
    category: "deep-learning",
  },
  {
    title: "AlphaGo: Mastering the Game of Go",
    website: "nature.com",
    url: "https://www.nature.com/articles/nature16961",
    icon: FaNewspaper,
    category: "ml-ai",
  },
  {
    title: "AlphaFold: Highly accurate protein structure prediction",
    website: "nature.com",
    url: "https://www.nature.com/articles/s41586-021-03819-2",
    icon: FaNewspaper,
    category: "ml-ai",
  },
  {
    title: "Vision Transformer (ViT)",
    website: "arxiv.org",
    url: "https://arxiv.org/abs/2010.11929",
    icon: SiArxiv,
    category: "deep-learning",
  },
  {
    title: "CLIP: Learning Transferable Visual Representations",
    website: "arxiv.org",
    url: "https://arxiv.org/abs/2103.00020",
    icon: SiArxiv,
    category: "ml-ai",
  },
  {
    title: "DALL-E 2: Hierarchical Text-Conditional Image Generation",
    website: "arxiv.org",
    url: "https://arxiv.org/abs/2204.06125",
    icon: SiArxiv,
    category: "ml-ai",
  },
  {
    title: "Stable Diffusion: High-Resolution Image Synthesis",
    website: "arxiv.org",
    url: "https://arxiv.org/abs/2112.10752",
    icon: SiArxiv,
    category: "deep-learning",
  },
  {
    title: "ChatGPT: Optimizing Language Models for Dialogue",
    website: "arxiv.org",
    url: "https://arxiv.org/abs/2203.02155",
    icon: SiArxiv,
    category: "ml-ai",
  },
  {
    title: "LLaMA: Open and Efficient Foundation Language Models",
    website: "arxiv.org",
    url: "https://arxiv.org/abs/2302.13971",
    icon: SiArxiv,
    category: "ml-ai",
  },
  {
    title: "Gemini: A Family of Highly Capable Multimodal Models",
    website: "arxiv.org",
    url: "https://arxiv.org/abs/2312.11805",
    icon: SiArxiv,
    category: "ml-ai",
  },
  {
    title: "Sora: Creating video from text",
    website: "openai.com",
    url: "https://openai.com/research/video-generation-models-as-world-simulators",
    icon: FaBrain,
    category: "ml-ai",
  },
  // Music AI Research
  {
    title: "MusicLM: Generating Music From Text",
    website: "arxiv.org",
    url: "https://arxiv.org/abs/2301.11325",
    icon: SiArxiv,
    category: "music-ai",
  },
  {
    title: "AudioCraft: Generative Audio AI",
    website: "arxiv.org",
    url: "https://arxiv.org/abs/2309.12415",
    icon: SiArxiv,
    category: "music-ai",
  },
  {
    title: "Jukebox: A Generative Model for Music",
    website: "arxiv.org",
    url: "https://arxiv.org/abs/2005.00341",
    icon: SiArxiv,
    category: "music-ai",
  },
  {
    title: "MuseNet: Deep Neural Network for Music Generation",
    website: "openai.com",
    url: "https://openai.com/research/musenet",
    icon: FaMusic,
    category: "music-ai",
  },
  {
    title: "Neural Audio Synthesis of Musical Notes",
    website: "arxiv.org",
    url: "https://arxiv.org/abs/1612.03789",
    icon: SiArxiv,
    category: "music-ai",
  },
  // Software Engineering Books & Principles
  {
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    website: "amazon.com",
    url: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350884",
    icon: FaBook,
    category: "books",
  },
  {
    title: "Design Patterns: Elements of Reusable Object-Oriented Software",
    website: "amazon.com",
    url: "https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612",
    icon: FaBook,
    category: "books",
  },
  {
    title: "The Pragmatic Programmer: Your Journey to Mastery",
    website: "amazon.com",
    url: "https://www.amazon.com/Pragmatic-Programmer-Journey-Mastery-Anniversary/dp/0135957052",
    icon: FaBook,
    category: "books",
  },
  {
    title: "Refactoring: Improving the Design of Existing Code",
    website: "amazon.com",
    url: "https://www.amazon.com/Refactoring-Improving-Design-Existing-Code/dp/0134757599",
    icon: FaBook,
    category: "books",
  },
  {
    title: "Code Complete: A Practical Handbook of Software Construction",
    website: "amazon.com",
    url: "https://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670",
    icon: FaBook,
    category: "books",
  },
  {
    title: "The Mythical Man-Month: Essays on Software Engineering",
    website: "amazon.com",
    url: "https://www.amazon.com/Mythical-Man-Month-Software-Engineering-Anniversary/dp/0201835959",
    icon: FaBook,
    category: "books",
  },
  {
    title: "Working Effectively with Legacy Code",
    website: "amazon.com",
    url: "https://www.amazon.com/Working-Effectively-Legacy-Michael-Feathers/dp/0131177052",
    icon: FaBook,
    category: "books",
  },
  {
    title: "Domain-Driven Design: Tackling Complexity in the Heart of Software",
    website: "amazon.com",
    url: "https://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215",
    icon: FaBook,
    category: "books",
  },
  // Productivity & Learning
  {
    title: "Atomic Habits: An Easy & Proven Way to Build Good Habits",
    website: "jamesclear.com",
    url: "https://jamesclear.com/atomic-habits",
    icon: FaBook,
    category: "productivity",
  },
  {
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    website: "amazon.com",
    url: "https://www.amazon.com/Deep-Work-Focused-Success-Distracted/dp/1455586692",
    icon: FaBook,
    category: "productivity",
  },
  {
    title: "The 7 Habits of Highly Effective People",
    website: "amazon.com",
    url: "https://www.amazon.com/Habits-Highly-Effective-People-Powerful/dp/0743269519",
    icon: FaBook,
    category: "productivity",
  },
  {
    title: "Getting Things Done: The Art of Stress-Free Productivity",
    website: "amazon.com",
    url: "https://www.amazon.com/Getting-Things-Done-Stress-Free-Productivity/dp/0142000280",
    icon: FaBook,
    category: "productivity",
  },
  {
    title: "Make Time: How to Focus on What Matters Every Day",
    website: "amazon.com",
    url: "https://www.amazon.com/Make-Time-Focus-Matters-Every/dp/0525572422",
    icon: FaBook,
    category: "productivity",
  },
  // Research & Academic Papers
  {
    title: "Papers With Code: The latest in Machine Learning",
    website: "paperswithcode.com",
    url: "https://paperswithcode.com/",
    icon: SiPaperswithcode,
    category: "research",
  },
  {
    title: "Google Research Blog",
    website: "ai.google",
    url: "https://ai.google/research/",
    icon: FaNewspaper,
    category: "research",
  },
  {
    title: "OpenAI Research",
    website: "openai.com",
    url: "https://openai.com/research",
    icon: FaBrain,
    category: "research",
  },
  {
    title: "DeepMind Research",
    website: "deepmind.com",
    url: "https://deepmind.com/research",
    icon: FaBrain,
    category: "research",
  },
  {
    title: "Anthropic Research",
    website: "anthropic.com",
    url: "https://www.anthropic.com/research",
    icon: FaBrain,
    category: "research",
  },
  // Tools & Development
  {
    title: "GitHub Copilot: Your AI pair programmer",
    website: "github.com",
    url: "https://github.com/features/copilot",
    icon: FaGithub,
    category: "tools",
  },
  {
    title: "LangChain: Framework for developing LLM applications",
    website: "langchain.com",
    url: "https://www.langchain.com/",
    icon: FaCode,
    category: "tools",
  },
  {
    title: "Hugging Face: The AI community building the future",
    website: "huggingface.co",
    url: "https://huggingface.co/",
    icon: FaBrain,
    category: "tools",
  },
  {
    title: "Weights & Biases: Developer tools for ML teams",
    website: "wandb.ai",
    url: "https://wandb.ai/",
    icon: FaRocket,
    category: "tools",
  },
  {
    title: "Streamlit: Turn Python scripts into web apps",
    website: "streamlit.io",
    url: "https://streamlit.io/",
    icon: FaCode,
    category: "tools",
  },
  {
    title: "FastAPI: Modern, fast web framework for Python",
    website: "fastapi.tiangolo.com",
    url: "https://fastapi.tiangolo.com/",
    icon: FaCode,
    category: "tools",
  },
  {
    title: "Ray: Unified framework for scaling AI and Python applications",
    website: "ray.io",
    url: "https://www.ray.io/",
    icon: FaRocket,
    category: "tools",
  },
  {
    title: "MLflow: Open source platform for ML lifecycle",
    website: "mlflow.org",
    url: "https://mlflow.org/",
    icon: FaBrain,
    category: "tools",
  },
  {
    title: "Kubeflow: Machine Learning Toolkit for Kubernetes",
    website: "kubeflow.org",
    url: "https://www.kubeflow.org/",
    icon: FaRocket,
    category: "tools",
  },
  {
    title: "TensorFlow: Open source machine learning platform",
    website: "tensorflow.org",
    url: "https://www.tensorflow.org/",
    icon: FaBrain,
    category: "tools",
  },
  {
    title: "PyTorch: An open source machine learning framework",
    website: "pytorch.org",
    url: "https://pytorch.org/",
    icon: FaBrain,
    category: "tools",
  },
  {
    title: "Jupyter: Open source, interactive data science",
    website: "jupyter.org",
    url: "https://jupyter.org/",
    icon: FaGraduationCap,
    category: "tools",
  },
  {
    title: "Docker: Accelerate how you build, share, and run applications",
    website: "docker.com",
    url: "https://www.docker.com/",
    icon: FaCode,
    category: "tools",
  },
  {
    title: "Kubernetes: Production-Grade Container Orchestration",
    website: "kubernetes.io",
    url: "https://kubernetes.io/",
    icon: FaRocket,
    category: "tools",
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
        a collection of research papers, books, and resources i find interesting
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
              {category.replace('-', ' ')}
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
                    {link.category.replace('-', ' ')}
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
