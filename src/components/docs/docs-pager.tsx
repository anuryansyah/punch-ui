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

  const componentPages = [
    { title: nav.accordion, href: "/docs/components/accordion" },
    { title: nav.alert, href: "/docs/components/alert" },
    { title: nav.alertDialog, href: "/docs/components/alert-dialog" },
    { title: nav.avatar, href: "/docs/components/avatar" },
    { title: nav.badge, href: "/docs/components/badge" },
    { title: nav.breadcrumb, href: "/docs/components/breadcrumb" },
    { title: nav.button, href: "/docs/components/button" },
    { title: nav.buttonGroup, href: "/docs/components/button-group" },
    { title: nav.card, href: "/docs/components/card" },
    { title: nav.chart, href: "/docs/components/chart" },
    { title: nav.checkbox, href: "/docs/components/checkbox" },
    { title: nav.colorPicker, href: "/docs/components/color-picker" },
    { title: nav.combobox, href: "/docs/components/combobox" },
    { title: nav.command, href: "/docs/components/command" },
    { title: nav.dataTable, href: "/docs/components/data-table" },
    { title: nav.datePicker, href: "/docs/components/date-picker" },
    { title: nav.dialog, href: "/docs/components/dialog" },
    { title: nav.dropdownMenu, href: "/docs/components/dropdown-menu" },
    { title: nav.emptyState, href: "/docs/components/empty-state" },
    { title: nav.fileUpload, href: "/docs/components/file-upload" },
    { title: nav.form, href: "/docs/components/form" },
    { title: nav.input, href: "/docs/components/input" },
    { title: nav.inputOtp, href: "/docs/components/input-otp" },
    { title: nav.kbd, href: "/docs/components/kbd" },
    { title: nav.marquee, href: "/docs/components/marquee" },
    { title: nav.navigationMenu, href: "/docs/components/navigation-menu" },
    { title: nav.pagination, href: "/docs/components/pagination" },
    { title: nav.popover, href: "/docs/components/popover" },
    { title: nav.progress, href: "/docs/components/progress" },
    { title: nav.radioGroup, href: "/docs/components/radio-group" },
    { title: nav.richTextEditor, href: "/docs/components/rich-text-editor" },
    { title: nav.scrollArea, href: "/docs/components/scroll-area" },
    { title: nav.select, href: "/docs/components/select" },
    { title: nav.separator, href: "/docs/components/separator" },
    { title: nav.sheet, href: "/docs/components/sheet" },
    { title: nav.sidebar, href: "/docs/components/sidebar" },
    { title: nav.skeleton, href: "/docs/components/skeleton" },
    { title: nav.slider, href: "/docs/components/slider" },
    { title: nav.sonner, href: "/docs/components/sonner" },
    { title: nav.switch, href: "/docs/components/switch" },
    { title: nav.table, href: "/docs/components/table" },
    { title: nav.tabs, href: "/docs/components/tabs" },
    { title: nav.toggleGroup, href: "/docs/components/toggle-group" },
    { title: nav.tooltip, href: "/docs/components/tooltip" },
  ].sort((a, b) => a.title.localeCompare(b.title));

  const pages = [{ title: nav.introCatalog, href: "/docs" }, ...componentPages];

  const currentIndex = pages.findIndex((p) => p.href === pathname);
  if (currentIndex === -1) return null;

  const prev = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const next = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  return (
    <nav
      aria-label="Pagination"
      className="grid grid-cols-2 divide-x-2 divide-border overflow-hidden rounded-lg border-2 border-border bg-card text-card-foreground shadow-brutal-sm md:shadow-brutal"
    >
      {/* Left Column (Previous) */}
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

      {/* Right Column (Next) */}
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
