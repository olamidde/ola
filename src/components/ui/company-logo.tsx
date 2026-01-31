"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface CompanyLogoProps {
  company: string;
  className?: string;
}

export function CompanyLogo({ company, className }: CompanyLogoProps) {
  const getLogo = () => {
    const companyLower = company.toLowerCase();
    
    if (companyLower === "microsoft") {
      return "/images/microsoft-logo.svg";
    }
    if (companyLower === "figma") {
      return "/images/figma-logo.png";
    }
    if (companyLower === "texas robotics" || companyLower === "texas") {
      return "/images/ut_austin.png";
    }
    if (companyLower === "cursor") {
      return "/images/cursor-logo.png";
    }
    if (companyLower.startsWith("graphite")) {
      return "/images/graphite-logo.png";
    }
    
    return null;
  };

  const logo = getLogo();

  if (!logo) {
    return null;
  }

  return (
    <div className={cn("relative w-5 h-5", className)}>
      <Image
        src={logo}
        alt={`${company} logo`}
        fill
        className="object-contain"
      />
    </div>
  );
}