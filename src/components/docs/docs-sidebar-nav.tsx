"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen } from "lucide-react";
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
        { title: nav.items.slider, href: "/docs/components/slider" },
        { title: nav.items.form, href: "/docs/components/form" },
        { title: nav.items.datePicker, href: "/docs/components/date-picker" },
        { title: nav.items.command, href: "/docs/components/command" },
        { title: nav.items.combobox, href: "/docs/components/combobox" },
        { title: nav.items.inputOtp, href: "/docs/components/input-otp" },
      ],
    },
  ];

  return (
    <SidebarProvider className="min-h-0 flex-col bg-transparent">
      <Sidebar
        variant="floating"
        collapsible="none"
        className="m-0 flex max-h-[calc(100vh-8rem)] w-full"
      >
        <SidebarContent className="p-3">
          {sections.map((section) => (
            <SidebarGroup key={section.group} className="mb-3 last:mb-0">
              <SidebarGroupLabel className="mb-1.5 flex items-center gap-1.5 px-1">
                <BookOpen className="h-3.5 w-3.5" strokeWidth={2.5} />
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
