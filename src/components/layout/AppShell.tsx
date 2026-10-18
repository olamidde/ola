"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ONE_PAGER_ENABLED } from "@/lib/flags";

// The prototype one-pager owns its full layout (including its own theme
// toggle and contact section), so when it is enabled we hide the global
// navbar/footer on the home route only. Every other route keeps the full
// chrome.
export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isOnePager = ONE_PAGER_ENABLED && pathname === "/";

  if (isOnePager) {
    return <main className="flex-1">{children}</main>;
  }

  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
