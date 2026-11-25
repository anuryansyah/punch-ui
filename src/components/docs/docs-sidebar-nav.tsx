"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Layers, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { siteConfig } from "@/lib/config";
import { useLanguage } from "@/lib/i18n";

export interface DocsSidebarNavProps {
  onNavigate?: () => void;
  embedded?: boolean;
}

export function DocsSidebarNav({
  onNavigate,
  embedded = false,
}: DocsSidebarNavProps = {}) {
  const pathname = usePathname();
  const { dict } = useLanguage();
  const nav = dict.common.sidebar;

  const componentItems = [
    { title: nav.items.accordion, href: "/docs/components/accordion" },
    { title: nav.items.alert, href: "/docs/components/alert" },
    { title: nav.items.alertDialog, href: "/docs/components/alert-dialog" },
    { title: nav.items.avatar, href: "/docs/components/avatar" },
    { title: nav.items.badge, href: "/docs/components/badge" },
    { title: nav.items.breadcrumb, href: "/docs/components/breadcrumb" },
    { title: nav.items.button, href: "/docs/components/button" },
    { title: nav.items.buttonGroup, href: "/docs/components/button-group" },
    { title: nav.items.card, href: "/docs/components/card" },
    { title: nav.items.chart, href: "/docs/components/chart" },
    { title: nav.items.checkbox, href: "/docs/components/checkbox" },
    { title: nav.items.colorPicker, href: "/docs/components/color-picker" },
    { title: nav.items.combobox, href: "/docs/components/combobox" },
    { title: nav.items.command, href: "/docs/components/command" },
    { title: nav.items.dataTable, href: "/docs/components/data-table" },
    { title: nav.items.datePicker, href: "/docs/components/date-picker" },
    { title: nav.items.dialog, href: "/docs/components/dialog" },
    { title: nav.items.dropdownMenu, href: "/docs/components/dropdown-menu" },
    { title: nav.items.emptyState, href: "/docs/components/empty-state" },
    { title: nav.items.fileUpload, href: "/docs/components/file-upload" },
    { title: nav.items.form, href: "/docs/components/form" },
    { title: nav.items.input, href: "/docs/components/input" },
    { title: nav.items.inputOtp, href: "/docs/components/input-otp" },
    { title: nav.items.kbd, href: "/docs/components/kbd" },
    { title: nav.items.marquee, href: "/docs/components/marquee" },
    {
      title: nav.items.navigationMenu,
      href: "/docs/components/navigation-menu",
    },
    { title: nav.items.pagination, href: "/docs/components/pagination" },
    { title: nav.items.popover, href: "/docs/components/popover" },
    { title: nav.items.progress, href: "/docs/components/progress" },
    { title: nav.items.radioGroup, href: "/docs/components/radio-group" },
    {
      title: nav.items.richTextEditor,
      href: "/docs/components/rich-text-editor",
    },
    { title: nav.items.scrollArea, href: "/docs/components/scroll-area" },
    { title: nav.items.select, href: "/docs/components/select" },
    { title: nav.items.separator, href: "/docs/components/separator" },
    { title: nav.items.sheet, href: "/docs/components/sheet" },
    { title: nav.items.sidebar, href: "/docs/components/sidebar" },
    { title: nav.items.skeleton, href: "/docs/components/skeleton" },
    { title: nav.items.slider, href: "/docs/components/slider" },
    { title: nav.items.sonner, href: "/docs/components/sonner" },
    { title: nav.items.switch, href: "/docs/components/switch" },
    { title: nav.items.table, href: "/docs/components/table" },
    { title: nav.items.tabs, href: "/docs/components/tabs" },
    { title: nav.items.toggleGroup, href: "/docs/components/toggle-group" },
    { title: nav.items.tooltip, href: "/docs/components/tooltip" },
  ].sort((a, b) => a.title.localeCompare(b.title));

  const sections = [
    {
      group: nav.groups.gettingStarted,
      icon: "book" as const,
      items: [
        { title: nav.items.introCatalog, href: "/docs" },
        { title: nav.items.homeThemes, href: "/" },
      ],
    },
    {
      group: nav.groups.components,
      icon: "layers" as const,
      items: componentItems,
    },
  ];

  return (
    <SidebarProvider
      className={
        embedded
          ? "min-h-0 flex-1 flex-col overflow-hidden bg-transparent"
          : "min-h-0 flex-col bg-transparent"
      }
    >
      <Sidebar
        variant={embedded ? "sidebar" : "floating"}
        collapsible="none"
        className={
          embedded
            ? "m-0 flex h-full w-full border-0 shadow-none"
            : "m-0 flex max-h-[calc(100vh-8rem)] w-full"
        }
      >
        <SidebarContent className="p-3">
          {sections.map((section) => (
            <SidebarGroup key={section.group} className="mb-3 last:mb-0">
              <SidebarGroupLabel className="mb-1.5 flex items-center gap-1.5 px-1">
                {section.icon === "book" ? (
                  <BookOpen className="h-3.5 w-3.5" strokeWidth={2.5} />
                ) : (
                  <Layers className="h-3.5 w-3.5" strokeWidth={2.5} />
                )}
                {section.group}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="gap-1.5">
                  {section.items.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                      <SidebarMenuItem key={item.href}>
                        <SidebarMenuButton
                          asChild
                          size="sm"
                          isActive={isActive}
                        >
                          <Link
                            href={item.href}
                            aria-current={isActive ? "page" : undefined}
                            onClick={onNavigate}
                          >
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}

/**
 * Mobile drawer trigger + left Sheet containing DocsSidebarNav (visible below md breakpoint).
 */
export function DocsMobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="Open documentation menu"
          className="h-9 w-9 shrink-0 md:hidden"
        >
          <Menu className="h-4 w-4" strokeWidth={2.5} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" size="sm" className="gap-0 p-0">
        <SheetHeader className="border-b-2 border-border bg-secondary px-4 py-3.5 pr-14 text-left">
          <SheetTitle className="flex items-center gap-2 font-mono text-sm font-black uppercase text-secondary-foreground">
            <Layers className="h-4 w-4" strokeWidth={2.5} />
            {siteConfig.name} {siteConfig.version}
          </SheetTitle>
          <SheetDescription className="sr-only">
            Documentation navigation menu
          </SheetDescription>
        </SheetHeader>
        <DocsSidebarNav embedded onNavigate={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  );
}
