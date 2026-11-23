"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AlignLeft, ArrowUp, Palette, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { useLanguage } from "@/lib/i18n";

interface TocHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function DocsTableOfContents() {
  const pathname = usePathname();
  const { lang, dict } = useLanguage();
  const [headings, setHeadings] = useState<TocHeading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const container = document.querySelector("[data-docs-content]");
    if (!container) return;

    const elements = Array.from(
      container.querySelectorAll<HTMLHeadingElement>("h2, h3")
    ).filter((el) => !el.closest("[data-preview-canvas]"));

    const usedIds = new Set<string>();
    const collected: TocHeading[] = [];

    elements.forEach((el) => {
      const text = (el.textContent || "").trim();
      if (!text) return;

      let id = el.id || slugify(text);
      if (!id) return;

      if (usedIds.has(id)) {
        let count = 2;
        while (usedIds.has(`${id}-${count}`)) {
          count += 1;
        }
        id = `${id}-${count}`;
      }

      usedIds.add(id);
      if (!el.id) {
        el.id = id;
      }
      el.classList.add("scroll-mt-24");

      const level: 2 | 3 = el.tagName.toLowerCase() === "h3" ? 3 : 2;
      collected.push({ id, text, level });
    });

    setHeadings(collected);
    if (collected.length > 0) {
      setActiveId((prev) =>
        collected.some((h) => h.id === prev) ? prev : collected[0].id
      );
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      {
        rootMargin: "-80px 0px -65% 0px",
        threshold: 0.1,
      }
    );

    elements.forEach((el) => {
      if (el.id) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname, lang]);

  const handleScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    setActiveId(id);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const liveThemeCard = dict.common.sidebar.liveThemeCard;

  return (
    <div className="flex max-h-[calc(100vh-8rem)] flex-col gap-5">
      <SidebarProvider className="min-h-0 flex-1 flex-col bg-transparent">
        <Sidebar
          side="right"
          variant="floating"
          collapsible="none"
          className="m-0 flex min-h-0 w-full flex-1"
        >
          <SidebarHeader className="px-3.5 py-3">
            <p className="flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <AlignLeft className="h-3.5 w-3.5" strokeWidth={2.5} />
              {dict.common.toc.title}
            </p>
          </SidebarHeader>

          <SidebarContent className="p-3">
            {headings.length === 0 ? (
              <p className="px-1 text-xs text-muted-foreground">
                {dict.common.toc.empty}
              </p>
            ) : (
              <SidebarMenu className="gap-1">
                {headings.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <SidebarMenuItem
                      key={item.id}
                      className={item.level === 3 ? "pl-3" : ""}
                    >
                      <SidebarMenuButton
                        type="button"
                        size="sm"
                        isActive={isActive}
                        onClick={() => handleScrollTo(item.id)}
                        className="h-auto whitespace-normal py-1.5 text-left"
                      >
                        <span className="line-clamp-2">{item.text}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            )}
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>

      <Card className="shrink-0 bg-secondary p-4 text-secondary-foreground">
        <p className="flex items-center gap-1.5 text-xs font-bold uppercase">
          <Palette className="h-4 w-4" strokeWidth={2.5} />
          {liveThemeCard.title}
        </p>
        <p className="mt-1 text-xs">{liveThemeCard.description}</p>
        <div className="mt-3 flex items-center gap-1.5 rounded-sm border-2 border-border bg-card px-2.5 py-1.5 font-mono text-[11px] font-bold text-card-foreground">
          <Terminal className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
          <span className="truncate">npx shadcn build</span>
        </div>
      </Card>
    </div>
  );
}

export function DocsBackToTop() {
  const { dict } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 240);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <Button
      type="button"
      size="icon"
      variant="secondary"
      aria-label={dict.common.toc.backToTop}
      title={dict.common.toc.backToTop}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-20 z-40 h-11 w-11 shadow-brutal"
    >
      <ArrowUp className="h-5 w-5" strokeWidth={2.5} />
    </Button>
  );
}
