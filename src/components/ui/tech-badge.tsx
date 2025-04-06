"use client";

import { cn } from "@/lib/utils";
import { Code, Database, Server, Globe } from "lucide-react";
import { TechLogo } from "./tech-logo";

interface TechBadgeProps {
  name: string;
  iconType?: "code" | "database" | "server" | "globe";
  className?: string;
}

export function TechBadge({ name, iconType = "code", className }: TechBadgeProps) {
  const getIcon = () => {
    // Check if we have a custom logo for this technology
    const customLogos = ["javascript", "typescript", "python", "react", "java"];

    if (customLogos.includes(name.toLowerCase())) {
      return <TechLogo name={name} />;
    }

    // Fall back to generic icons
    switch (iconType) {
      case "database":
        return <Database className="h-3 w-3" />;
      case "server":
        return <Server className="h-3 w-3" />;
      case "globe":
        return <Globe className="h-3 w-3" />;
      case "code":
      default:
        return <Code className="h-3 w-3" />;
    }
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full border border-border bg-muted/30",
        className
      )}
    >
      {getIcon()}
      <span>{name}</span>
    </div>
  );
}
