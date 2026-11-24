"use client";

import * as React from "react";
import {
  FolderKanban,
  Home,
  Menu,
  Settings,
  SlidersHorizontal,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";

export function SheetBasicDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Quick Inspector</SheetTitle>
          <SheetDescription>
            Slide-over panel for secondary details, filters, and quick edits
            without leaving the current view.
          </SheetDescription>
        </SheetHeader>
        <div className="space-y-3 text-sm">
          <div className="rounded-md border-2 border-border bg-muted p-3.5">
            <p className="font-mono text-xs font-black uppercase">
              Active Deployment
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              punch-ui-prod • ap-southeast-1 • Healthy
            </p>
          </div>
          <p className="text-muted-foreground">
            Press{" "}
            <kbd className="rounded-sm border-2 border-border bg-muted px-1.5 py-0.5 font-mono text-xs font-bold text-foreground">
              ESC
            </kbd>{" "}
            or click the backdrop to dismiss.
          </p>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
          <SheetClose asChild>
            <Button>Done</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export function SheetSidesDemo() {
  const sides = [
    { side: "top" as const, label: "Top" },
    { side: "right" as const, label: "Right" },
    { side: "bottom" as const, label: "Bottom" },
    { side: "left" as const, label: "Left" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {sides.map((item) => (
        <Sheet key={item.side}>
          <SheetTrigger asChild>
            <Button variant="outline">{item.label}</Button>
          </SheetTrigger>
          <SheetContent side={item.side}>
            <SheetHeader variant="secondary">
              <SheetTitle>Sheet Side: {item.label}</SheetTitle>
              <SheetDescription>
                Slides in smoothly from the {item.side} viewport edge.
              </SheetDescription>
            </SheetHeader>
            <p className="text-sm text-muted-foreground">
              Pass{" "}
              <code className="rounded-sm border border-border bg-muted px-1 py-0.5 font-mono text-xs font-bold text-foreground">
                side=&quot;{item.side}&quot;
              </code>{" "}
              on <code>SheetContent</code> to anchor the drawer to any edge.
            </p>
            <SheetFooter>
              <SheetClose asChild>
                <Button size="sm">Close</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}

export function SheetFilterDemo() {
  const [open, setOpen] = React.useState(false);
  const [keyword, setKeyword] = React.useState("edge");
  const [onlyActive, setOnlyActive] = React.useState(true);
  const [includeLogs, setIncludeLogs] = React.useState(true);
  const [applied, setApplied] = React.useState<string | null>(null);

  function handleApply(event: React.FormEvent) {
    event.preventDefault();
    setApplied(
      `Filter: "${keyword || "all"}" • Active only: ${onlyActive ? "yes" : "no"}`
    );
    setOpen(false);
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="secondary">
            <SlidersHorizontal className="h-4 w-4" strokeWidth={2.5} />
            Filter Data
          </Button>
        </SheetTrigger>
        <SheetContent>
          <form onSubmit={handleApply} className="flex h-full flex-col gap-5">
            <SheetHeader>
              <SheetTitle>Filter Deployments</SheetTitle>
              <SheetDescription>
                Narrow down telemetry rows by keyword and status flags.
              </SheetDescription>
            </SheetHeader>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="sheet-filter-keyword">Service Keyword</Label>
                <Input
                  id="sheet-filter-keyword"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="e.g. gateway, worker..."
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between gap-3">
                <div>
                  <Label htmlFor="sheet-active-only">
                    Active Services Only
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Hide archived and paused containers.
                  </p>
                </div>
                <Switch
                  id="sheet-active-only"
                  checked={onlyActive}
                  onCheckedChange={setOnlyActive}
                />
              </div>

              <div className="flex items-center gap-2.5">
                <Checkbox
                  id="sheet-include-logs"
                  checked={includeLogs}
                  onCheckedChange={(checked) =>
                    setIncludeLogs(Boolean(checked))
                  }
                />
                <Label htmlFor="sheet-include-logs">
                  Include build &amp; webhook logs
                </Label>
              </div>
            </div>

            <SheetFooter>
              <SheetClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </SheetClose>
              <Button type="submit">Apply Filters</Button>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>

      {applied && (
        <p className="font-mono text-xs font-bold text-success">{applied}</p>
      )}
    </div>
  );
}

export function SheetNavigationDemo() {
  const navItems = [
    { label: "Dashboard", icon: Home, badge: null },
    { label: "Projects", icon: FolderKanban, badge: "12" },
    { label: "Team Members", icon: Users, badge: null },
    { label: "Settings", icon: Settings, badge: "NEW" },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu className="h-4 w-4" strokeWidth={2.5} />
          Mobile Menu
        </Button>
      </SheetTrigger>
      <SheetContent side="left" size="sm">
        <SheetHeader variant="primary">
          <SheetTitle>Punch UI</SheetTitle>
          <SheetDescription>Workspace Navigation</SheetDescription>
        </SheetHeader>

        <nav className="flex flex-col gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <SheetClose key={item.label} asChild>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-md border-2 border-border bg-card px-3 py-2.5 text-sm font-bold shadow-brutal-sm transition-all hover:bg-secondary hover:text-secondary-foreground active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                >
                  <span className="flex items-center gap-2.5">
                    <Icon className="h-4 w-4" strokeWidth={2.5} />
                    <span>{item.label}</span>
                  </span>
                  {item.badge && (
                    <Badge variant="outline" size="sm" noShadow>
                      {item.badge}
                    </Badge>
                  )}
                </button>
              </SheetClose>
            );
          })}
        </nav>

        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline" className="w-full">
              Close Menu
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export function SheetScrollableDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Activity Feed Drawer</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Audit Activity Feed</SheetTitle>
          <SheetDescription>
            Scrollable drawer body powered by ScrollArea with auto-hiding
            scrollbar.
          </SheetDescription>
        </SheetHeader>

        <ScrollArea
          variant="ghost"
          scrollbarVariant="auto"
          className="min-h-0 flex-1"
          viewportClassName="space-y-3 pr-3"
        >
          {Array.from({ length: 12 }).map((_, idx) => (
            <div
              key={idx}
              className="rounded-md border-2 border-border bg-muted p-3"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-black">
                  EVENT #{1024 + idx}
                </span>
                <Badge variant="outline" size="sm" noShadow>
                  {idx + 2}m ago
                </Badge>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Registry artifact verified and synced to edge cache node.
              </p>
            </div>
          ))}
        </ScrollArea>

        <SheetFooter className="border-t-2 border-border pt-4">
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
