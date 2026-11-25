"use client";

import React from "react";
import {
  ArrowRight,
  BarChart3,
  Bell,
  BookOpen,
  Building2,
  Code2,
  FileText,
  Globe,
  Layers,
  Palette,
  Rocket,
  Search,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Terminal,
  Users,
  Zap,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const WORKSPACE_MODULES = [
  {
    title: "Analytics",
    description: "Real-time traffic metrics, funnels, and revenue charts.",
    icon: BarChart3,
  },
  {
    title: "Permissions",
    description: "Role-based access rules and audit logs for your team.",
    icon: ShieldCheck,
  },
  {
    title: "Theme Studio",
    description: "Customize primary, secondary, and semantic tokens live.",
    icon: Palette,
  },
  {
    title: "CLI Registry",
    description: "Pull individual components straight into your codebase.",
    icon: Terminal,
  },
];

/**
 * Overview demo
 */
export function NavigationMenuDemo() {
  return <NavigationMenuBasicDemo />;
}

/**
 * 1. Mega Menu (Featured Card + Grid Links)
 */
export function NavigationMenuBasicDemo() {
  return (
    <div className="flex min-h-[280px] w-full items-start justify-center pt-2">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[360px] gap-3 md:w-[480px] md:grid-cols-[0.85fr_1fr]">
                <NavigationMenuLink asChild>
                  <a
                    href="#overview"
                    onClick={(e) => e.preventDefault()}
                    className="flex flex-col justify-between rounded-md border-2 border-border bg-primary p-4 text-primary-foreground shadow-brutal-sm transition-transform hover:-translate-y-0.5"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-sm border-2 border-border bg-card text-card-foreground">
                      <Zap className="h-5 w-5" strokeWidth={2.5} />
                    </div>
                    <div className="mt-4 space-y-1">
                      <div className="text-sm font-black tracking-tight">
                        Punch UI
                      </div>
                      <p className="text-xs leading-snug opacity-90">
                        High-contrast Neobrutalist components ready for admin
                        dashboards.
                      </p>
                    </div>
                  </a>
                </NavigationMenuLink>

                <ul className="space-y-1.5">
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="#setup"
                        onClick={(e) => e.preventDefault()}
                        className="block rounded-md border-2 border-transparent p-2.5 transition-colors hover:border-border hover:bg-secondary hover:text-secondary-foreground"
                      >
                        <div className="text-xs font-bold">Quick Setup</div>
                        <p className="mt-0.5 text-[11px] text-muted-foreground">
                          Configure Tailwind tokens and install via CLI.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="#tokens"
                        onClick={(e) => e.preventDefault()}
                        className="block rounded-md border-2 border-transparent p-2.5 transition-colors hover:border-border hover:bg-secondary hover:text-secondary-foreground"
                      >
                        <div className="text-xs font-bold">Design Tokens</div>
                        <p className="mt-0.5 text-[11px] text-muted-foreground">
                          6 built-in presets plus custom color overrides.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="#dark-mode"
                        onClick={(e) => e.preventDefault()}
                        className="block rounded-md border-2 border-transparent p-2.5 transition-colors hover:border-border hover:bg-secondary hover:text-secondary-foreground"
                      >
                        <div className="text-xs font-bold">Dark Mode</div>
                        <p className="mt-0.5 text-[11px] text-muted-foreground">
                          Crisp inverted borders tuned for charcoal surfaces.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Modules</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[340px] gap-2 md:w-[460px] md:grid-cols-2">
                {WORKSPACE_MODULES.map((mod) => {
                  const Icon = mod.icon;
                  return (
                    <li key={mod.title}>
                      <NavigationMenuLink asChild>
                        <a
                          href={`#${mod.title.toLowerCase()}`}
                          onClick={(e) => e.preventDefault()}
                          className="flex items-start gap-2.5 rounded-md border-2 border-transparent p-2.5 transition-colors hover:border-border hover:bg-secondary hover:text-secondary-foreground"
                        >
                          <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-sm border-2 border-border bg-muted text-foreground">
                            <Icon className="h-3.5 w-3.5" strokeWidth={2.5} />
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs font-bold">{mod.title}</div>
                            <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">
                              {mod.description}
                            </p>
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  );
                })}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="#changelog"
              onClick={(e) => e.preventDefault()}
              className={cn(navigationMenuTriggerStyle(), "shadow-brutal-sm")}
            >
              Changelog
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

/**
 * 2. Simple List with Icons & Badges
 */
export function NavigationMenuSimpleDemo() {
  const resources = [
    { label: "Documentation", icon: BookOpen, badge: null },
    { label: "Release Notes", icon: FileText, badge: "v0.1" },
    { label: "Templates", icon: Layers, badge: "New" },
    { label: "Workspace Settings", icon: Settings, badge: null },
  ];

  return (
    <div className="flex min-h-[240px] w-full items-start justify-center pt-2">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[240px] space-y-1">
                {resources.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label}>
                      <NavigationMenuLink asChild>
                        <a
                          href={`#${item.label.toLowerCase()}`}
                          onClick={(e) => e.preventDefault()}
                          className="flex items-center justify-between gap-2 rounded-md border-2 border-transparent px-2.5 py-2 text-xs font-bold transition-colors hover:border-border hover:bg-secondary hover:text-secondary-foreground"
                        >
                          <span className="flex items-center gap-2">
                            <Icon className="h-4 w-4" strokeWidth={2.5} />
                            {item.label}
                          </span>
                          {item.badge && (
                            <Badge variant="default" size="sm" noShadow>
                              {item.badge}
                            </Badge>
                          )}
                        </a>
                      </NavigationMenuLink>
                    </li>
                  );
                })}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="#deploy"
              onClick={(e) => e.preventDefault()}
              className={cn(navigationMenuTriggerStyle(), "shadow-brutal-sm")}
            >
              <Rocket className="h-3.5 w-3.5" strokeWidth={2.5} />
              Deploy
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

/**
 * 3. Full SaaS / Admin Topbar Navigation (Interactive Border & Shadow Variants)
 */
export function NavigationMenuTopbarDemo() {
  const [styleMode, setStyleMode] = React.useState<
    "default" | "noShadow" | "noBorder" | "minimal"
  >("noBorder");

  const isNoBorder = styleMode === "noBorder" || styleMode === "minimal";
  const isNoShadow = styleMode === "noShadow" || styleMode === "minimal";

  const activePropsLabel =
    styleMode === "default"
      ? "<NavigationMenu />"
      : styleMode === "noShadow"
        ? "<NavigationMenu noShadow />"
        : styleMode === "noBorder"
          ? "<NavigationMenu noBorder />"
          : "<NavigationMenu noBorder noShadow />";

  const products = [
    {
      title: "Admin Dashboards",
      desc: "Pre-wired tables, KPI cards, and role controls.",
      icon: Layers,
    },
    {
      title: "Live Analytics",
      desc: "Real-time event streams, funnels, and charts.",
      icon: BarChart3,
    },
    {
      title: "Team Workflows",
      desc: "Approvals, notifications, and audit trails.",
      icon: Users,
    },
    {
      title: "Access & Security",
      desc: "SSO, API keys, and granular permissions.",
      icon: ShieldCheck,
    },
  ];

  const solutions = [
    { title: "Startups", desc: "Ship your MVP in days.", icon: Rocket },
    {
      title: "Enterprise",
      desc: "Multi-region scale & SLA.",
      icon: Building2,
    },
    {
      title: "E-Commerce",
      desc: "Orders, inventory & payouts.",
      icon: ShoppingBag,
    },
    { title: "Global SaaS", desc: "Multi-currency & i18n ready.", icon: Globe },
  ];

  const devLinks = [
    { title: "Documentation", desc: "Guides & component API", icon: BookOpen },
    { title: "API Reference", desc: "REST & Webhook specs", icon: Code2 },
    { title: "CLI Registry", desc: "Install UI blocks fast", icon: Terminal },
  ];

  return (
    <div className="min-h-[420px] w-full max-w-4xl space-y-4">
      {/* Live Variant Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-md border-2 border-border bg-card px-3.5 py-2.5 shadow-brutal-sm">
        <ToggleGroup
          type="single"
          variant="outline"
          size="sm"
          noShadow
          value={styleMode}
          onValueChange={(value) => {
            if (
              value === "default" ||
              value === "noShadow" ||
              value === "noBorder" ||
              value === "minimal"
            ) {
              setStyleMode(value);
            }
          }}
          aria-label="Navigation menu border and shadow preset"
        >
          <ToggleGroupItem value="default">Default</ToggleGroupItem>
          <ToggleGroupItem value="noShadow">No Shadow</ToggleGroupItem>
          <ToggleGroupItem value="noBorder">No Border</ToggleGroupItem>
          <ToggleGroupItem value="minimal">Minimal</ToggleGroupItem>
        </ToggleGroup>

        <code className="rounded-sm border-2 border-border bg-muted px-2 py-1 font-mono text-[11px] font-bold">
          {activePropsLabel}
        </code>
      </div>

      <div className="overflow-visible rounded-lg border-2 border-border bg-background shadow-brutal">
        {/* Topbar */}
        <header className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-border bg-card px-4 py-2.5">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-sm border-2 border-border bg-primary text-primary-foreground shadow-brutal-sm">
              <Zap className="h-4 w-4" strokeWidth={2.5} />
            </div>
            <span className="font-mono text-sm font-black uppercase tracking-tight">
              Punch Cloud
            </span>
            <Badge
              variant="secondary"
              size="sm"
              noShadow
              className="hidden sm:inline-flex"
            >
              v2.4
            </Badge>
          </div>

          {/* Main NavigationMenu */}
          <NavigationMenu noShadow={isNoShadow} noBorder={isNoBorder}>
            <NavigationMenuList className="flex-wrap">
              {/* Products Mega-Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-8 px-2.5">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[340px] gap-3 md:w-[540px] md:grid-cols-[0.75fr_1.25fr]">
                    <NavigationMenuLink asChild>
                      <a
                        href="#platform"
                        onClick={(e) => e.preventDefault()}
                        className="flex flex-col justify-between rounded-md border-2 border-border bg-secondary p-3.5 text-secondary-foreground shadow-brutal-sm transition-transform hover:-translate-y-0.5"
                      >
                        <Badge
                          variant="default"
                          size="sm"
                          noShadow
                          className="w-fit"
                        >
                          <Sparkles className="h-3 w-3" strokeWidth={2.5} />
                          New
                        </Badge>
                        <div className="mt-5 space-y-1">
                          <div className="text-sm font-black">
                            Punch Platform
                          </div>
                          <p className="text-[11px] leading-snug opacity-85">
                            Unified toolkit for bold internal tools and SaaS
                            dashboards.
                          </p>
                        </div>
                      </a>
                    </NavigationMenuLink>

                    <ul className="grid gap-1">
                      {products.map((item) => {
                        const Icon = item.icon;
                        return (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <a
                                href={`#${item.title.toLowerCase()}`}
                                onClick={(e) => e.preventDefault()}
                                className="flex items-start gap-2.5 rounded-sm border-2 border-transparent p-2 transition-colors hover:border-border hover:bg-muted"
                              >
                                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-sm border-2 border-border bg-card">
                                  <Icon
                                    className="h-3.5 w-3.5"
                                    strokeWidth={2.5}
                                  />
                                </div>
                                <div className="min-w-0">
                                  <div className="text-xs font-bold">
                                    {item.title}
                                  </div>
                                  <p className="text-[11px] leading-snug text-muted-foreground">
                                    {item.desc}
                                  </p>
                                </div>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Solutions Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-8 px-2.5">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[340px] space-y-2.5 md:w-[440px]">
                    <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                      {solutions.map((item) => {
                        const Icon = item.icon;
                        return (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <a
                                href={`#${item.title.toLowerCase()}`}
                                onClick={(e) => e.preventDefault()}
                                className="flex items-start gap-2.5 rounded-sm border-2 border-transparent p-2 transition-colors hover:border-border hover:bg-secondary hover:text-secondary-foreground"
                              >
                                <Icon
                                  className="mt-0.5 h-4 w-4 shrink-0"
                                  strokeWidth={2.5}
                                />
                                <div>
                                  <div className="text-xs font-bold">
                                    {item.title}
                                  </div>
                                  <p className="text-[11px] text-muted-foreground">
                                    {item.desc}
                                  </p>
                                </div>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        );
                      })}
                    </ul>

                    <div className="flex items-center justify-between rounded-sm border-2 border-border bg-muted px-3 py-2 text-[11px]">
                      <span className="font-bold">
                        Need a custom enterprise plan?
                      </span>
                      <a
                        href="#sales"
                        onClick={(e) => e.preventDefault()}
                        className="inline-flex items-center gap-1 font-mono font-bold text-primary hover:underline"
                      >
                        Talk to Sales
                        <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
                      </a>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Developers Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-8 px-2.5">
                  Developers
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[260px] space-y-1.5">
                    <ul className="space-y-1">
                      {devLinks.map((item) => {
                        const Icon = item.icon;
                        return (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <a
                                href={`#${item.title.toLowerCase()}`}
                                onClick={(e) => e.preventDefault()}
                                className="flex items-start gap-2.5 rounded-sm border-2 border-transparent p-2 transition-colors hover:border-border hover:bg-secondary"
                              >
                                <Icon
                                  className="mt-0.5 h-4 w-4 shrink-0"
                                  strokeWidth={2.5}
                                />
                                <div>
                                  <div className="text-xs font-bold">
                                    {item.title}
                                  </div>
                                  <p className="text-[11px] text-muted-foreground">
                                    {item.desc}
                                  </p>
                                </div>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        );
                      })}
                    </ul>

                    <div className="flex items-center justify-between border-t-2 border-border pt-2 text-[11px]">
                      <span className="font-mono font-bold text-muted-foreground">
                        API Status
                      </span>
                      <Badge variant="success" size="sm" dot noShadow>
                        Operational
                      </Badge>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Standalone Pricing Link */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#pricing"
                  onClick={(e) => e.preventDefault()}
                  className={cn(
                    navigationMenuTriggerStyle({ noBorder: isNoBorder }),
                    !isNoShadow && !isNoBorder && "shadow-brutal-sm",
                    "h-8 px-2.5"
                  )}
                >
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Utilities */}
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              noShadow
              className="hidden h-8 gap-2 px-2.5 text-muted-foreground lg:inline-flex"
            >
              <Search className="h-3.5 w-3.5" strokeWidth={2.5} />
              <span className="text-xs">Search</span>
              <KbdGroup>
                <Kbd size="sm" variant="muted" noShadow>
                  ⌘K
                </Kbd>
              </KbdGroup>
            </Button>

            <Button
              type="button"
              variant="outline"
              size="icon"
              noShadow
              aria-label="Notifications"
              className="relative h-8 w-8"
            >
              <Bell className="h-3.5 w-3.5" strokeWidth={2.5} />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-border bg-primary font-mono text-[9px] font-black text-primary-foreground">
                3
              </span>
            </Button>

            <Avatar size="sm" noShadow>
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Mock Workspace Hero Content Underneath */}
        <div className="space-y-2 p-6 text-left">
          <Badge variant="muted" size="sm" noShadow className="font-mono">
            WORKSPACE / OVERVIEW
          </Badge>
          <h4 className="text-lg font-black tracking-tight">
            Welcome back, Alex Morgan
          </h4>
          <p className="max-w-lg text-xs text-muted-foreground">
            Hover or click any menu item in the topbar above (Products,
            Solutions, Developers) to preview the floating Neobrutalist
            NavigationMenu over page content.
          </p>
        </div>
      </div>
    </div>
  );
}
