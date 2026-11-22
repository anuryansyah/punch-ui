"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ThemeCustomizer } from "@/components/docs/theme-customizer";
import { siteConfig } from "@/lib/config";
import { LanguageSwitcher, useLanguage } from "@/lib/i18n";
import {
  ArrowUpRight,
  BookOpen,
  Layers,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react";

export default function MarketingPage() {
  const { dict } = useLanguage();
  const m = dict.marketing;

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] space-y-8 px-4 py-6 sm:px-6 md:py-12 lg:px-10">
      {/* Hero Section */}
      <Card className="p-6 md:p-10">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <Badge variant="secondary" className="gap-1.5 px-3 py-1">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2.5} />
            {m.hero.badge}
          </Badge>
          <LanguageSwitcher />
        </div>

        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
          {m.hero.title}
        </h1>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">
          {m.hero.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Button asChild>
            <Link href="/docs">
              <BookOpen className="h-4 w-4" strokeWidth={2.5} />
              {m.hero.ctaDocs}
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
          </Button>
          <div className="inline-flex h-10 items-center gap-2 rounded-md border-2 border-border bg-muted px-4 font-mono text-xs font-bold text-card-foreground shadow-brutal-sm md:text-sm">
            <Terminal className="h-4 w-4" strokeWidth={2.5} />
            npx shadcn@latest add {siteConfig.url}/r/button.json
          </div>
        </div>
      </Card>

      {/* Interactive Theme Customizer (Inline di Homepage) */}
      <section id="customizer">
        <ThemeCustomizer variant="inline" />
      </section>

      {/* Preview Cards */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="space-y-3 p-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              {m.cards.kpi.label}
            </span>
            <Badge variant="secondary">+24.8%</Badge>
          </div>
          <p className="font-mono text-3xl font-bold tracking-tight">
            {m.cards.kpi.value}
          </p>
          <p className="text-xs text-muted-foreground">
            {m.cards.kpi.description}
          </p>
        </Card>

        <Card className="space-y-3 p-6">
          <div className="flex items-center gap-2 font-bold">
            <Layers className="h-5 w-5" strokeWidth={2.5} />
            {m.cards.mechanical.title}
          </div>
          <p className="text-xs text-muted-foreground">
            {m.cards.mechanical.description}
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            <Button size="sm">Primary Button</Button>
            <Button variant="secondary" size="sm">
              Secondary
            </Button>
          </div>
        </Card>

        <Card className="space-y-3 p-6">
          <div className="flex items-center gap-2 font-bold">
            <ShieldCheck className="h-5 w-5" strokeWidth={2.5} />
            {m.cards.accessibility.title}
          </div>
          <p className="text-xs text-muted-foreground">
            {m.cards.accessibility.description}
          </p>
          <Input
            type="text"
            placeholder={m.cards.accessibility.placeholder}
            className="h-9 text-xs"
          />
        </Card>
      </section>
    </main>
  );
}
