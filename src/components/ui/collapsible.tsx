"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CollapsibleProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export function Collapsible({ children, trigger, defaultOpen = false, className }: CollapsibleProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className={cn("w-full", className)}>
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full justify-between p-0 h-auto hover:bg-transparent"
      >
        {trigger}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </Button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-200 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="pt-4">
          {children}
        </div>
      </div>
    </div>
  );
} 