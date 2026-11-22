"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Palette, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n";

export function DocsSidebarNav() {
  const pathname = usePathname();
  const { dict } = useLanguage();
  const nav = dict.common.sidebar;

  const sections = [
    {
      group: nav.groups.gettingStarted,
      items: [
        { title: nav.items.introCatalog, href: "/docs" },
        { title: nav.items.homeThemes, href: "/" },
      ],
    },
    {
      group: nav.groups.tier1,
      items: [
        { title: nav.items.button, href: "/docs/components/button" },
        { title: nav.items.card, href: "/docs/components/card" },
        { title: nav.items.badge, href: "/docs/components/badge" },
        { title: nav.items.input, href: "/docs/components/input" },
        { title: nav.items.avatar, href: "/docs/components/avatar" },
        { title: nav.items.separator, href: "/docs/components/separator" },
        { title: nav.items.table, href: "/docs/components/table" },
        { title: nav.items.dataTable, href: "/docs/components/data-table" },
        { title: nav.items.pagination, href: "/docs/components/pagination" },
        { title: nav.items.sidebar, href: "/docs/components/sidebar" },
        { title: nav.items.scrollArea, href: "/docs/components/scroll-area" },
      ],
    },
    {
      group: nav.groups.tier2,
      items: [
        { title: nav.items.select, href: "/docs/components/select" },
        { title: nav.items.checkbox, href: "/docs/components/checkbox" },
        { title: nav.items.radioGroup, href: "/docs/components/radio-group" },
        { title: nav.items.switch, href: "/docs/components/switch" },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <Card className="p-4">
        {sections.map((section) => (
          <div key={section.group} className="mb-5 last:mb-0">
            <p className="mb-2.5 flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <BookOpen className="h-3.5 w-3.5" strokeWidth={2.5} />
              {section.group}
            </p>
            <ul className="space-y-2">
              {section.items.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Button
                      asChild
                      size="sm"
                      variant={isActive ? "default" : "ghost"}
                      className="w-full justify-start px-3 py-2 text-xs"
                    >
                      <Link
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.title}
                      </Link>
                    </Button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </Card>

      <Card className="bg-secondary p-4 text-secondary-foreground">
        <p className="flex items-center gap-1.5 text-xs font-bold uppercase">
          <Palette className="h-4 w-4" strokeWidth={2.5} />
          {nav.liveThemeCard.title}
        </p>
        <p className="mt-1 text-xs">{nav.liveThemeCard.description}</p>
        <div className="mt-3 flex items-center gap-1.5 rounded-sm border-2 border-border bg-card px-2.5 py-1.5 font-mono text-[11px] font-bold text-card-foreground">
          <Terminal className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
          <span className="truncate">npx shadcn build</span>
        </div>
      </Card>
    </div>
  );
}
