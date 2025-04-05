import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Home, FolderKanban, FileText, Camera, Link2, FileSpreadsheet } from "lucide-react";
import { cn } from "@/lib/utils";

const routes = [
  { name: "Home", path: "/", icon: Home },
  { name: "Projects", path: "/projects", icon: FolderKanban },
  { name: "Blog", path: "/blog", icon: FileText },
  { name: "Photography", path: "/photography", icon: Camera },
  { name: "Links", path: "/links", icon: Link2 },
  { name: "Resume", path: "/resume", icon: FileSpreadsheet },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full py-4">
      <div className="container flex justify-center">
        <NavigationMenu className="border rounded-full px-2 py-1 bg-background/95 backdrop-blur shadow-sm">
          <NavigationMenuList>
            {routes.map((route) => (
              <NavigationMenuItem key={route.path}>
                <Link href={route.path} legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "px-3 py-1.5")}>
                    <route.icon className="h-4 w-4" />
                    <span className="sr-only">{route.name}</span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
