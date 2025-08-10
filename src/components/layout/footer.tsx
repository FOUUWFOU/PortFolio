"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import type { HTMLAttributeAnchorTarget } from "react";

interface SocialLinkProps {
  href: string;
  "aria-label": string;
  target?: HTMLAttributeAnchorTarget;
  rel?: string;
  children: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  "aria-label": ariaLabel,
  target,
  rel,
  children,
}) => (
  <Link href={href} aria-label={ariaLabel} target={target} rel={rel}>
    {children}
  </Link>
);

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t bg-background/80">
      <div className="container mx-auto max-w-7xl flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row md:px-6">
        <p className="text-xl text-muted-foreground">
          © {currentYear !== null && <>{currentYear} </>}Aarti Sangale. All
          rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <SocialLink
            href="https://x.com/shri47069182"
            target="_blank"
            aria-label="Twitter profile"
          >
            <Twitter className="h-8 w-8 text-muted-foreground transition-colors hover:text-foreground" />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/dipak-patil-aab288221/"
            target="_blank"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="h-8 w-8 text-muted-foreground transition-colors hover:text-foreground" />
          </SocialLink>
          <SocialLink
            href="https://github.com/DipakPatil007"
            target="_blank"
            aria-label="GitHub profile"
          >
            <Github className="h-8 w-8 text-muted-foreground transition-colors hover:text-foreground" />
          </SocialLink>
        </div>
      </div>
    </footer>
  );
}
