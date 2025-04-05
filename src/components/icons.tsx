"use client";

import { LucideProps } from "lucide-react";

export function ReactIcon(props: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="12" r="10" strokeDasharray="32" strokeDashoffset="32">
        <animate
          attributeName="stroke-dashoffset"
          values="32;0"
          dur="0.8s"
          fill="freeze"
        />
      </circle>
      <circle cx="12" cy="12" r="6" strokeDasharray="19" strokeDashoffset="19">
        <animate
          attributeName="stroke-dashoffset"
          values="19;0"
          dur="0.6s"
          fill="freeze"
        />
      </circle>
    </svg>
  );
}

export function JavaScriptIcon(props: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8v8" />
      <path d="M8 8v8" />
      <path d="M8 12h4" />
      <rect width="20" height="20" x="2" y="2" rx="2" />
    </svg>
  );
}

export function TypeScriptIcon(props: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16.5 9.4 16.5 4" />
      <path d="M19.7 6.6 13.3 6.6" />
      <path d="M8 11h8" />
      <path d="M8 15h5" />
      <path d="M11 11v8" />
      <rect width="20" height="20" x="2" y="2" rx="2" />
    </svg>
  );
}

export function PythonIcon(props: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M11 7V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4" />
      <path d="M13 17v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4" />
      <path d="M9 7V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4" />
      <path d="M15 17v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4" />
      <path d="M5 8v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8" />
    </svg>
  );
}

export function NodeIcon(props: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22v-5" />
      <path d="M9 7V2" />
      <path d="M15 7V2" />
      <path d="M9 17v-5a3 3 0 0 1 6 0v5" />
      <path d="M12 17h5a3 3 0 0 0 0-6h-5" />
      <path d="M7 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h3" />
      <path d="M20 7h3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-3" />
    </svg>
  );
}

export function ReactQueryIcon(props: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8v8" />
      <path d="M8 8v8" />
      <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="M4 12h4" />
      <path d="M16 12h4" />
    </svg>
  );
}
