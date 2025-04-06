"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Code, Database, Server, Globe } from "lucide-react";

interface TechBadgeProps {
  name: string;
  iconType?: "code" | "database" | "server" | "globe";
  className?: string;
}

export function TechBadge({ name, iconType = "code", className }: TechBadgeProps) {
  const getIcon = () => {
    const iconClass = "h-3 w-3";
    
    switch (name.toLowerCase()) {
      case "typescript":
        return <Image src="/images/typescript-logo.svg" alt="TypeScript" width={12} height={12} className={iconClass} />;
      case "javascript":
        return <Image src="/images/javascript-logo.svg" alt="JavaScript" width={12} height={12} className={iconClass} />;
      case "python":
        return <Image src="/images/python-logo.svg" alt="Python" width={12} height={12} className={iconClass} />;
      case "react":
        return <Image src="/images/react-logo.svg" alt="React" width={12} height={12} className={iconClass} />;
      default:
        switch (iconType) {
          case "database":
            return <Database className={iconClass} />;
          case "server":
            return <Server className={iconClass} />;
          case "globe":
            return <Globe className={iconClass} />;
          case "code":
          default:
            return <Code className={iconClass} />;
        }
    }
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-2 py-1 text-xs rounded-full border border-border bg-muted/30",
        className
      )}
    >
      {getIcon()}
      <span className="leading-none">{name}</span>
    </div>
  );
}
