"use client";

import * as React from "react";
import {
  BarChart3,
  ChevronDown,
  CreditCard,
  FolderKanban,
  Home,
  Inbox,
  Layers,
  Plus,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";

/**
 * Overview demo
 */
export function SidebarDemo() {
  return <SidebarBasicDemo />;
}

/**
 * 1. Basic Sidebar
 */
export function SidebarBasicDemo() {
  const [activeItem, setActiveItem] = React.useState("overview");

  const mainItems = [
    { id: "overview", label: "Overview", icon: Home },
    { id: "projects", label: "Projects", icon: FolderKanban },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "team", label: "Team Members", icon: Users },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="h-[420px] w-full max-w-3xl overflow-hidden rounded-md border-2 border-border shadow-brutal">
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2.5 px-1">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border-2 border-border bg-primary font-mono text-xs font-extrabold text-primary-foreground shadow-brutal-sm">
                PU
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-extrabold leading-tight">
                  Punch Studio
                </p>
                <p className="truncate font-mono text-[11px] text-muted-foreground">
                  Pro Workspace
                </p>
              </div>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Platform</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {mainItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <SidebarMenuItem key={item.id}>
                        <SidebarMenuButton
                          isActive={activeItem === item.id}
                          onClick={() => setActiveItem(item.id)}
                        >
                          <Icon strokeWidth={2.5} />
                          <span>{item.label}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter>
            <div className="flex items-center gap-2.5 px-1">
              <Avatar size="sm" noShadow>
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <p className="truncate text-xs font-bold leading-tight">
                  Alex Morgan
                </p>
                <p className="truncate font-mono text-[10px] text-muted-foreground">
                  alex@punch-ui.dev
                </p>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset>
          <header className="flex h-12 items-center gap-3 border-b-2 border-border bg-card px-4">
            <SidebarTrigger />
            <span className="font-mono text-xs font-bold uppercase tracking-wider">
              {activeItem}
            </span>
          </header>
          <div className="flex flex-1 flex-col justify-between p-5">
            <div className="space-y-2">
              <Badge size="sm" noShadow variant="secondary">
                Active Route
              </Badge>
              <h3 className="text-lg font-extrabold capitalize">
                {activeItem} Workspace
              </h3>
              <p className="text-xs text-muted-foreground">
                Click any menu item on the left or press the trigger button to
                toggle the sidebar.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-md border-2 border-border bg-card p-3">
                <p className="font-mono text-[11px] font-bold text-muted-foreground">
                  REVENUE
                </p>
                <p className="mt-1 font-mono text-lg font-extrabold">$12,480</p>
              </div>
              <div className="rounded-md border-2 border-border bg-card p-3">
                <p className="font-mono text-[11px] font-bold text-muted-foreground">
                  ACTIVE USERS
                </p>
                <p className="mt-1 font-mono text-lg font-extrabold">1,284</p>
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}

/**
 * 2. Collapsible Icon Mode
 */
export function SidebarCollapsibleDemo() {
  const [active, setActive] = React.useState("dashboard");

  const items = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "inbox", label: "Inbox", icon: Inbox },
    { id: "billing", label: "Billing", icon: CreditCard },
    { id: "security", label: "Security", icon: ShieldCheck },
  ];

  return (
    <div className="h-[380px] w-full max-w-3xl overflow-hidden rounded-md border-2 border-border shadow-brutal">
      <SidebarProvider defaultOpen={false}>
        <Sidebar collapsible="icon">
          <SidebarHeader className="items-center">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border-2 border-border bg-secondary font-mono text-xs font-extrabold text-secondary-foreground">
              UI
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <SidebarMenuItem key={item.id}>
                        <SidebarMenuButton
                          tooltip={item.label}
                          isActive={active === item.id}
                          onClick={() => setActive(item.id)}
                        >
                          <Icon strokeWidth={2.5} />
                          <span>{item.label}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <SidebarInset>
          <header className="flex h-12 items-center justify-between border-b-2 border-border bg-card px-4">
            <div className="flex items-center gap-3">
              <SidebarTrigger />
              <span className="font-mono text-xs font-bold uppercase">
                Collapsible Icon Rail
              </span>
            </div>
            <Badge size="sm" noShadow>
              Ctrl + B
            </Badge>
          </header>
          <div className="p-5">
            <p className="text-sm font-bold capitalize">{active} View</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Click the trigger button in the top-left to expand or collapse
              between the icon rail and full labels.
            </p>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}

/**
 * 3. Nested Submenu & Badges
 */
export function SidebarSubmenuDemo() {
  const [activeMenu, setActiveMenu] = React.useState("components");
  const [activeSub, setActiveSub] = React.useState("buttons");
  const [componentsOpen, setComponentsOpen] = React.useState(true);
  const [projectsOpen, setProjectsOpen] = React.useState(false);

  function selectMainMenu(menuId: string) {
    setActiveMenu(menuId);
    setComponentsOpen(false);
    setProjectsOpen(false);
  }

  const componentSubItems = [
    { id: "buttons", label: "Button & Badge" },
    { id: "tables", label: "Data Table" },
    { id: "forms", label: "Select & Form" },
    { id: "sidebar", label: "Sidebar" },
  ];

  const projectSubItems = [
    { id: "design-system", label: "Design System" },
    { id: "marketing-site", label: "Marketing Site" },
    { id: "mobile-app", label: "Mobile App" },
  ];

  return (
    <div className="h-[440px] w-full max-w-3xl overflow-hidden rounded-md border-2 border-border shadow-brutal">
      <SidebarProvider className="h-full">
        <Sidebar collapsible="icon" className="h-full">
          <SidebarHeader>
            <div className="flex items-center gap-2.5 px-1 group-data-[collapsible=icon]/sidebar:justify-center group-data-[collapsible=icon]/sidebar:px-0">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border-2 border-border bg-primary font-mono text-xs font-extrabold text-primary-foreground shadow-brutal-sm">
                PU
              </div>
              <div className="min-w-0 group-data-[collapsible=icon]/sidebar:hidden">
                <p className="truncate text-sm font-extrabold leading-tight">
                  Workspace Menu
                </p>
                <p className="truncate font-mono text-[11px] text-muted-foreground">
                  v1.0 Registry
                </p>
              </div>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Workspace</SidebarGroupLabel>
              <SidebarGroupAction aria-label="Add project">
                <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
              </SidebarGroupAction>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      tooltip="Overview"
                      isActive={activeMenu === "overview"}
                      onClick={() => selectMainMenu("overview")}
                    >
                      <Home strokeWidth={2.5} />
                      <span>Overview</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton
                      tooltip="Inbox"
                      isActive={activeMenu === "inbox"}
                      onClick={() => selectMainMenu("inbox")}
                    >
                      <Inbox strokeWidth={2.5} />
                      <span>Inbox</span>
                      <SidebarMenuBadge>12</SidebarMenuBadge>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton
                      tooltip="Components"
                      isActive={activeMenu === "components"}
                      onClick={() => {
                        setActiveMenu("components");
                        setComponentsOpen((prev) => !prev);
                        setProjectsOpen(false);
                      }}
                    >
                      <Layers strokeWidth={2.5} />
                      <span>Components</span>
                      <SidebarMenuBadge>NEW</SidebarMenuBadge>
                      <ChevronDown
                        strokeWidth={2.5}
                        className={`ml-1 h-3.5 w-3.5 shrink-0 transition-transform duration-150 group-data-[collapsible=icon]/sidebar:hidden ${
                          componentsOpen ? "rotate-0" : "-rotate-90"
                        }`}
                      />
                    </SidebarMenuButton>
                    {componentsOpen && (
                      <SidebarMenuSub>
                        {componentSubItems.map((sub) => (
                          <SidebarMenuSubItem key={sub.id}>
                            <SidebarMenuSubButton
                              href={`#${sub.id}`}
                              isActive={
                                activeMenu === "components" &&
                                activeSub === sub.id
                              }
                              onClick={(e) => {
                                e.preventDefault();
                                setActiveMenu("components");
                                setActiveSub(sub.id);
                              }}
                            >
                              {sub.label}
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    )}
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton
                      tooltip="Projects"
                      isActive={activeMenu === "projects"}
                      onClick={() => {
                        setActiveMenu("projects");
                        setProjectsOpen((prev) => !prev);
                        setComponentsOpen(false);
                      }}
                    >
                      <FolderKanban strokeWidth={2.5} />
                      <span>Projects</span>
                      <ChevronDown
                        strokeWidth={2.5}
                        className={`ml-auto h-3.5 w-3.5 shrink-0 transition-transform duration-150 group-data-[collapsible=icon]/sidebar:hidden ${
                          projectsOpen ? "rotate-0" : "-rotate-90"
                        }`}
                      />
                    </SidebarMenuButton>
                    {projectsOpen && (
                      <SidebarMenuSub>
                        {projectSubItems.map((sub) => (
                          <SidebarMenuSubItem key={sub.id}>
                            <SidebarMenuSubButton
                              href={`#${sub.id}`}
                              isActive={
                                activeMenu === "projects" &&
                                activeSub === sub.id
                              }
                              onClick={(e) => {
                                e.preventDefault();
                                setActiveMenu("projects");
                                setActiveSub(sub.id);
                              }}
                            >
                              {sub.label}
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    )}
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton
                      tooltip="Analytics"
                      isActive={activeMenu === "analytics"}
                      onClick={() => selectMainMenu("analytics")}
                    >
                      <BarChart3 strokeWidth={2.5} />
                      <span>Analytics</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarSeparator />

            <SidebarGroup>
              <SidebarGroupLabel>Account</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      tooltip="Team Members"
                      isActive={activeMenu === "team"}
                      onClick={() => selectMainMenu("team")}
                    >
                      <Users strokeWidth={2.5} />
                      <span>Team Members</span>
                      <SidebarMenuBadge>4</SidebarMenuBadge>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      tooltip="Billing"
                      isActive={activeMenu === "billing"}
                      onClick={() => selectMainMenu("billing")}
                    >
                      <CreditCard strokeWidth={2.5} />
                      <span>Billing</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      tooltip="Security"
                      isActive={activeMenu === "security"}
                      onClick={() => selectMainMenu("security")}
                    >
                      <ShieldCheck strokeWidth={2.5} />
                      <span>Security</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      tooltip="Preferences"
                      isActive={activeMenu === "preferences"}
                      onClick={() => selectMainMenu("preferences")}
                    >
                      <Settings strokeWidth={2.5} />
                      <span>Preferences</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter>
            <div className="flex items-center gap-2.5 px-1 group-data-[collapsible=icon]/sidebar:justify-center group-data-[collapsible=icon]/sidebar:px-0">
              <Avatar size="sm" noShadow>
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
              <div className="min-w-0 group-data-[collapsible=icon]/sidebar:hidden">
                <p className="truncate text-xs font-bold leading-tight">
                  Alex Morgan
                </p>
                <p className="truncate font-mono text-[10px] text-muted-foreground">
                  alex@punch-ui.dev
                </p>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset>
          <header className="flex h-12 items-center justify-between border-b-2 border-border bg-card px-4">
            <div className="flex items-center gap-3">
              <SidebarTrigger />
              <span className="font-mono text-xs font-bold uppercase tracking-wider">
                {activeMenu === "components" || activeMenu === "projects"
                  ? `${activeMenu} / ${activeSub}`
                  : activeMenu}
              </span>
            </div>
            <Badge size="sm" noShadow variant="secondary">
              Interactive
            </Badge>
          </header>
          <div className="p-5">
            <h3 className="text-base font-extrabold">
              Nested Submenus & Badges
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Click Components to expand or collapse the submenu, select items
              without navigating away, or toggle the icon rail with the trigger
              button.
            </p>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}

/**
 * 4. Floating Variant
 */
export function SidebarFloatingDemo() {
  return (
    <div className="bg-dot-pattern h-[380px] w-full max-w-3xl overflow-hidden rounded-md border-2 border-border shadow-brutal">
      <SidebarProvider className="bg-transparent">
        <Sidebar variant="floating">
          <SidebarHeader>
            <span className="px-1 font-mono text-xs font-extrabold uppercase">
              Floating Panel
            </span>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>
                  <Home strokeWidth={2.5} />
                  <span>Overview</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <BarChart3 strokeWidth={2.5} />
                  <span>Reports</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <CreditCard strokeWidth={2.5} />
                  <span>Invoices</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        <SidebarInset className="bg-transparent">
          <div className="p-5">
            <div className="rounded-md border-2 border-border bg-card p-4 shadow-brutal-sm">
              <p className="text-sm font-extrabold">Floating Sidebar Layout</p>
              <p className="mt-1 text-xs text-muted-foreground">
                The floating variant detaches the sidebar with outer margins,
                2px border, and a hard shadow over textured canvases.
              </p>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}

/**
 * 5. Right Side Sidebar
 */
export function SidebarRightDemo() {
  return (
    <div className="h-[360px] w-full max-w-3xl overflow-hidden rounded-md border-2 border-border shadow-brutal">
      <SidebarProvider>
        <Sidebar side="right">
          <SidebarHeader>
            <span className="px-1 font-mono text-xs font-extrabold uppercase">
              Inspector Panel
            </span>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>
                  <Layers strokeWidth={2.5} />
                  <span>Properties</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Users strokeWidth={2.5} />
                  <span>Collaborators</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        <SidebarInset>
          <header className="flex h-12 items-center justify-between border-b-2 border-border bg-card px-4">
            <span className="font-mono text-xs font-bold uppercase">
              Canvas
            </span>
            <SidebarTrigger />
          </header>
          <div className="p-5">
            <p className="text-sm font-bold">Right-Aligned Sidebar</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Pass side=&quot;right&quot; to place the sidebar on the right edge
              for inspectors or secondary drawers.
            </p>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
