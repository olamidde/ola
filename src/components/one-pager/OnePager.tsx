import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CompanyLogo } from "@/components/ui/company-logo";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { experiences } from "@/content/experience";

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socials = [
  { label: "email", href: "mailto:olamideogunsanya@outlook.com", Icon: Mail },
  { label: "github", href: "https://github.com/olamidde", Icon: FaGithub },
  {
    label: "linkedin",
    href: "https://linkedin.com/in/ola-ogunsanya",
    Icon: FaLinkedin,
  },
  { label: "x", href: "https://x.com/olaogn", Icon: XIcon },
];

const elsewhere = [
  { label: "writing", description: "thoughts, reflections, and essays", href: "/writing" },
  { label: "music", description: "what i'm listening to and making", href: "/music" },
  { label: "links", description: "papers, books, and things i love", href: "/links" },
];

function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={className}>
      {socials.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={label}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-border hover:bg-muted hover:text-foreground"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
      {children}
    </h2>
  );
}

export function OnePager() {
  return (
    <div className="relative min-h-screen">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 45% at 50% 0%, color-mix(in oklch, var(--primary) 12%, transparent), transparent 70%)",
        }}
      />

      <main className="mx-auto w-full max-w-2xl px-6 py-16 sm:py-24">
        {/* Hero */}
        <header className="reveal" style={{ animationDelay: "0.02s" }}>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border border-border/60">
                <Image
                  src="/images/profile-pic.png"
                  alt="Ola Ogunsanya"
                  fill
                  sizes="56px"
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  ola ogunsanya
                </h1>
                <p className="text-sm text-muted-foreground sm:text-base">
                  software engineer{" "}
                  <span className="text-foreground/70">@ cursor</span> · nyc
                </p>
              </div>
            </div>
            <ThemeToggle />
          </div>

          <div className="mt-8 space-y-4 text-base leading-relaxed text-foreground/90">
            <p>
              Hi! I&apos;m Ola. I&apos;m a software engineer at Cursor based in nyc,
              thinking a lot about how ai can transform the developer experience
              and make building software feel effortless.
            </p>
            <p>
              I love going from zero to one. I&apos;ve worked with great teams at
              Microsoft and Figma straddling product and engineering, and these
              days i&apos;m endlessly hungry to learn and get better in every area.
            </p>
            <p className="text-muted-foreground">
              Outside of work, I am currently exploring creating my own music.
            </p>
          </div>

          <SocialLinks className="mt-7 flex items-center gap-2" />
        </header>

        {/* Experience */}
        <section className="reveal mt-16" style={{ animationDelay: "0.12s" }}>
          <SectionLabel>experience</SectionLabel>
          <ol className="space-y-1">
            {experiences.map((experience) => (
              <li key={`${experience.company}-${experience.period}`}>
                <div className="group -mx-3 rounded-xl px-3 py-3 transition-colors hover:bg-muted/40">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-2.5">
                      <CompanyLogo company={experience.company} />
                      <h3 className="truncate font-medium text-foreground">
                        {experience.company}
                      </h3>
                    </div>
                    <span className="shrink-0 font-mono text-xs tabular-nums text-muted-foreground">
                      {experience.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {experience.role} · {experience.location}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {experience.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Elsewhere */}
        <section className="reveal mt-16" style={{ animationDelay: "0.2s" }}>
          <SectionLabel>elsewhere</SectionLabel>
          <div className="grid gap-2">
            {elsewhere.map(({ label, description, href }) => (
              <Link
                key={href}
                href={href}
                className="group flex items-center justify-between rounded-xl border border-border/60 px-4 py-3 transition-colors hover:border-border hover:bg-muted/40"
              >
                <div>
                  <p className="font-medium text-foreground">{label}</p>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </Link>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="reveal mt-16" style={{ animationDelay: "0.28s" }}>
          <SectionLabel>get in touch</SectionLabel>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:olamideogunsanya@outlook.com"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="h-4 w-4" />
              say hello
            </a>
            <SocialLinks className="flex items-center gap-2" />
          </div>
        </section>

        <footer className="mt-20 border-t border-border/60 pt-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ola Ogunsanya
          </p>
        </footer>
      </main>
    </div>
  );
}
