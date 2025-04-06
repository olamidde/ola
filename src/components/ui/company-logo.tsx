"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface CompanyLogoProps {
  company: string;
  className?: string;
}

export function CompanyLogo({ company, className }: CompanyLogoProps) {
  const getLogo = () => {
    switch (company.toLowerCase()) {
      case "microsoft":
        return "/images/microsoft-logo.svg";
      case "figma":
        return "/images/figma-logo.png";
      case "texas robotics":
      case "texas":
        return "/images/ut_austin.png";
      default:
        return null;
    }
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