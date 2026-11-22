"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function DocsPager() {
  const pathname = usePathname();
  const { dict } = useLanguage();
  const nav = dict.common.sidebar.items;
  const pager = dict.common.pager;

  const pages = [
    { title: nav.introCatalog, href: "/docs" },
    { title: nav.button, href: "/docs/components/button" },
    { title: nav.card, href: "/docs/components/card" },
    { title: nav.badge, href: "/docs/components/badge" },
    { title: nav.input, href: "/docs/components/input" },
    { title: nav.avatar, href: "/docs/components/avatar" },
    { title: nav.separator, href: "/docs/components/separator" },
    { title: nav.table, href: "/docs/components/table" },
    { title: nav.pagination, href: "/docs/components/pagination" },
    { title: nav.scrollArea, href: "/docs/components/scroll-area" },
  ];

  const currentIndex = pages.findIndex((p) => p.href === pathname);
  if (currentIndex === -1) return null;

  const prev = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const next = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  return (
    <nav
      aria-label="Pagination"
      className="grid grid-cols-2 divide-x-2 divide-border overflow-hidden rounded-lg border-2 border-border bg-card text-card-foreground shadow-brutal-sm md:shadow-brutal"
    >
      {/* Kolom Kiri (Previous) */}
      {prev ? (
        <Link
          href={prev.href}
          className="group flex items-center justify-start gap-3.5 px-5 py-4 transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring"
        >
          <ArrowLeft
            className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-x-1"
            strokeWidth={2.5}
          />
          <div className="min-w-0 text-left">
            <span className="block text-xs text-muted-foreground">
              {pager.previous}
            </span>
            <span className="block truncate text-sm font-bold md:text-base">
              {prev.title}
            </span>
          </div>
        </Link>
      ) : (
        <div className="px-5 py-4" />
      )}

      {/* Kolom Kanan (Next) */}
      {next ? (
        <Link
          href={next.href}
          className="group flex items-center justify-end gap-3.5 px-5 py-4 transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring"
        >
          <div className="min-w-0 text-right">
            <span className="block text-xs text-muted-foreground">
              {pager.next}
            </span>
            <span className="block truncate text-sm font-bold md:text-base">
              {next.title}
            </span>
          </div>
          <ArrowRight
            className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
            strokeWidth={2.5}
          />
        </Link>
      ) : (
        <div className="px-5 py-4" />
      )}
    </nav>
  );
}
