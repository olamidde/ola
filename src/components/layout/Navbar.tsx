import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Laptop, PenLine, Camera, Link2, FileSpreadsheet } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const routes = [
  { name: "projects", path: "/projects", icon: Laptop },
  { name: "blog", path: "/blog", icon: PenLine },
  { name: "photography", path: "/photography", icon: Camera },
  { name: "links", path: "/links", icon: Link2 },
  { name: "resume", path: "/resume", icon: FileSpreadsheet },
];

export function Navbar() {
  return (
    <TooltipProvider>
      <header className="sticky top-0 z-50 w-full py-4">
        <div className="container flex justify-center relative">
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <ThemeToggle />
          </div>
          <NavigationMenu className="border rounded-full px-2 py-1 bg-background/95 backdrop-blur shadow-sm">
            <NavigationMenuList className="flex items-center">
              <NavigationMenuItem className="mr-6">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "px-3 py-1.5 font-semibold text-base")}>
                        ola
                      </NavigationMenuLink>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>home</p>
                  </TooltipContent>
                </Tooltip>
              </NavigationMenuItem>
              {routes.map((route) => (
                <NavigationMenuItem key={route.path}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href={route.path} legacyBehavior passHref>
                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "px-3 py-1.5")}>
                          <route.icon className="h-4 w-4" />
                          <span className="sr-only">{route.name}</span>
                        </NavigationMenuLink>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="capitalize">{route.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </NavigationMenuItem>
              ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
    </TooltipProvider>
  );
}
