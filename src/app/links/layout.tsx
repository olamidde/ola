import { Metadata } from "next";

export const metadata: Metadata = {
  title: "links | ola ogunsanya",
  description: "interesting links and resources",
};

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
