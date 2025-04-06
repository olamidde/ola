"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface TechLogoProps {
  name: string;
  className?: string;
}

export function TechLogo({ name, className }: TechLogoProps) {
  const getLogo = () => {
    switch (name.toLowerCase()) {
      case "javascript":
        return "/images/javascript-logo.svg";
      case "typescript":
        return "/images/typescript-logo.svg";
      case "python":
        return "/images/python-logo.png";
      case "react":
        return "/images/react-logo.png";
      case "java":
        return "/images/java-logo.png";
      default:
        return null;
    }
  };

  const logo = getLogo();

  if (!logo) {
    return null;
  }

  return (
    <div className={cn("relative w-4 h-4", className)}>
      <Image
        src={logo}
        alt={`${name} logo`}
        fill
        className="object-contain"
      />
    </div>
  );
}
