"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Check,
  Copy,
  Sparkles,
  Terminal,
} from "lucide-react";
import { DocsSearchCommand } from "@/components/docs/docs-search-command";
import { HomepageShowcase } from "@/components/docs/homepage-showcase";
import { ThemeCustomizer } from "@/components/docs/theme-customizer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee";
import { siteConfig } from "@/lib/config";
import { LanguageSwitcher, useLanguage } from "@/lib/i18n";

const MARQUEE_HIGHLIGHTS = [
  "47 COMPONENTS",
  "6 LIVE PRESETS",
  "CUSTOM COLOR BUILDER",
  "LIGHT & DARK MODE",
  "CUSTOM REGISTRY",
  "ZERO BLUR",
];

const MARQUEE_COMPONENTS = [
  { label: "Charts", href: "/docs/components/chart" },
  { label: "Data Table", href: "/docs/components/data-table" },
  { label: "Rich Text Editor", href: "/docs/components/rich-text-editor" },
  { label: "File Upload", href: "/docs/components/file-upload" },
  { label: "Color Picker", href: "/docs/components/color-picker" },
  { label: "Navigation Menu", href: "/docs/components/navigation-menu" },
  { label: "Command", href: "/docs/components/command" },
  { label: "Combobox", href: "/docs/components/combobox" },
  { label: "Date Picker", href: "/docs/components/date-picker" },
  { label: "Input OTP", href: "/docs/components/input-otp" },
  { label: "Dialog", href: "/docs/components/dialog" },
  { label: "Sheet", href: "/docs/components/sheet" },
  { label: "Sidebar", href: "/docs/components/sidebar" },
  { label: "Toast (Sonner)", href: "/docs/components/sonner" },
  { label: "Toggle Group", href: "/docs/components/toggle-group" },
  { label: "Empty State", href: "/docs/components/empty-state" },
  { label: "Kbd", href: "/docs/components/kbd" },
  { label: "Accordion", href: "/docs/components/accordion" },
];

export default function MarketingPage() {
  const { dict } = useLanguage();
  const m = dict.marketing;
  const [copiedCli, setCopiedCli] = useState(false);

  const cliCommand = `npx shadcn@latest add ${siteConfig.url}/r/button.json`;

  const handleCopyCli = async () => {
    await navigator.clipboard.writeText(cliCommand);
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
  };

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] space-y-10 px-4 py-6 sm:px-6 md:py-10 lg:px-10">
      {/* Hero Section */}
      <Card className="p-6 md:p-10">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <Badge variant="secondary" className="gap-1.5 px-3 py-1">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2.5} />
            {m.hero.badge}
          </Badge>

          <div className="flex flex-wrap items-center gap-2.5">
            <DocsSearchCommand />
            <LanguageSwitcher />
          </div>
        </div>

        <h1 className="text-3xl font-black tracking-tight md:text-5xl">
          {m.hero.title}
        </h1>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">
          {m.hero.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button asChild>
            <Link href="/docs">
              <BookOpen className="h-4 w-4" strokeWidth={2.5} />
              {m.hero.ctaDocs}
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
          </Button>

          <div className="inline-flex h-10 max-w-full items-center gap-2 rounded-md border-2 border-border bg-muted pl-3.5 pr-1.5 font-mono text-xs font-bold text-card-foreground shadow-brutal-sm">
            <Terminal className="h-4 w-4 shrink-0" strokeWidth={2.5} />
            <span className="truncate">{cliCommand}</span>
            <Button
              type="button"
              variant="outline"
              size="icon"
              noShadow
              onClick={handleCopyCli}
              aria-label={copiedCli ? "Copied CLI" : "Copy CLI command"}
              className="h-7 w-7 shrink-0"
            >
              {copiedCli ? (
                <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
              ) : (
                <Copy className="h-3.5 w-3.5" strokeWidth={2.5} />
              )}
            </Button>
          </div>
        </div>
      </Card>

      {/* Dual Opposite-Direction Neobrutalist Marquee */}
      <section
        aria-label="Highlights and featured components"
        className="space-y-3"
      >
        <Marquee variant="secondary" direction="left" speed="normal">
          {MARQUEE_HIGHLIGHTS.map((item) => (
            <React.Fragment key={item}>
              <span className="font-mono text-xs font-black uppercase tracking-wider md:text-sm">
                {item}
              </span>
              <span aria-hidden="true" className="text-sm font-black">
                ✦
              </span>
            </React.Fragment>
          ))}
        </Marquee>

        <Marquee variant="default" direction="right" speed="slow">
          {MARQUEE_COMPONENTS.map((comp) => (
            <Badge
              key={comp.href}
              asChild
              variant="outline"
              noShadow
              className="font-mono transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Link href={comp.href}>{comp.label}</Link>
            </Badge>
          ))}
        </Marquee>
      </section>

      {/* Interactive Theme Customizer (Inline di Homepage) */}
      <section id="customizer" className="scroll-mt-6">
        <ThemeCustomizer variant="inline" />
      </section>

      {/* Real-Case Interactive Bento Showcase */}
      <section id="showcase" className="scroll-mt-6 space-y-5">
        <div className="space-y-2">
          <Badge variant="secondary" className="font-mono">
            {m.showcase.badge}
          </Badge>
          <h2 className="text-2xl font-black tracking-tight md:text-3xl">
            {m.showcase.title}
          </h2>
          <p className="max-w-3xl text-sm text-muted-foreground md:text-base">
            {m.showcase.description}
          </p>
        </div>

        <HomepageShowcase />
      </section>

      {/* Bottom CTA */}
      <Card
        variant="secondary"
        className="flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center md:p-8"
      >
        <div className="space-y-1.5">
          <h2 className="text-xl font-black tracking-tight md:text-2xl">
            {m.cta.title}
          </h2>
          <p className="text-secondary-foreground/85 max-w-2xl text-xs md:text-sm">
            {m.cta.description}
          </p>
        </div>
        <Button asChild size="lg" className="shrink-0">
          <Link href="/docs">
            <BookOpen className="h-4 w-4" strokeWidth={2.5} />
            {m.cta.button}
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </Button>
      </Card>

      {/* Footer */}
      <footer className="flex flex-col items-start justify-between gap-3 border-t-2 border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
        <div className="flex items-center gap-2 font-mono font-bold text-foreground">
          <span>{siteConfig.name}</span>
          <Badge variant="outline" size="sm" noShadow className="font-mono">
            {siteConfig.version}
          </Badge>
          <span className="font-sans font-normal text-muted-foreground">
            • Neobrutalist shadcn/ui Component Registry
          </span>
        </div>

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center gap-4 font-mono font-bold"
        >
          <Link
            href="/docs"
            className="text-foreground underline-offset-4 hover:underline"
          >
            Docs
          </Link>
          <Link
            href="/docs/components/button"
            className="text-foreground underline-offset-4 hover:underline"
          >
            Components
          </Link>
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-foreground underline-offset-4 hover:underline"
          >
            GitHub
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </a>
        </nav>
      </footer>
    </main>
  );
}
