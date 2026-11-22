"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AlignLeft, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Card className="p-4">
      <p className="mb-3 flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
        <AlignLeft className="h-3.5 w-3.5" strokeWidth={2.5} />
        {dict.common.toc.title}
      </p>

      {headings.length === 0 ? (
        <p className="text-xs text-muted-foreground">{dict.common.toc.empty}</p>
      ) : (
        <ul className="space-y-1.5">
          {headings.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id} className={item.level === 3 ? "pl-3" : ""}>
                <Button
                  type="button"
                  size="sm"
                  variant={isActive ? "default" : "ghost"}
                  onClick={() => handleScrollTo(item.id)}
                  className="h-auto w-full justify-start whitespace-normal px-2.5 py-1.5 text-left text-xs"
                >
                  <span className="line-clamp-2">{item.text}</span>
                </Button>
              </li>
            );
          })}
        </ul>
      )}

      <div className="mt-4 border-t-2 border-border pt-3">
        <Button
          type="button"
          variant="secondary"
          size="sm"
          onClick={handleScrollTop}
          className="w-full"
        >
          <ArrowUp className="h-3.5 w-3.5" strokeWidth={2.5} />
          {dict.common.toc.backToTop}
        </Button>
      </div>
    </Card>
  );
}
