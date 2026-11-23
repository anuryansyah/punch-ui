"use client";

import * as React from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  FileText,
  FolderKanban,
  LayoutDashboard,
  Rocket,
  Search,
  Settings,
  Smile,
  Terminal,
  User,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export function CommandBasicDemo() {
  const [lastAction, setLastAction] = React.useState<string | null>(null);

  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-3">
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem onSelect={() => setLastAction("Calendar")}>
              <Calendar strokeWidth={2.5} />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem onSelect={() => setLastAction("Search Emoji")}>
              <Smile strokeWidth={2.5} />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem onSelect={() => setLastAction("Calculator")}>
              <Calculator strokeWidth={2.5} />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem onSelect={() => setLastAction("Profile")}>
              <User strokeWidth={2.5} />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => setLastAction("Billing")}>
              <CreditCard strokeWidth={2.5} />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => setLastAction("Settings")}>
              <Settings strokeWidth={2.5} />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>

      <div className="flex items-center justify-between rounded-md border-2 border-border bg-muted px-3 py-2 font-mono text-xs font-bold">
        <span className="text-muted-foreground">LAST EXECUTED:</span>
        <span>{lastAction ?? "None yet"}</span>
      </div>
    </div>
  );
}

export function CommandDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string>("Ready");

  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  function runCommand(label: string) {
    setSelected(label);
    setOpen(false);
  }

  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center gap-4">
      <Button
        type="button"
        variant="outline"
        onClick={() => setOpen(true)}
        className="w-full justify-between px-2"
      >
        <span className="flex items-center gap-2 text-muted-foreground">
          <Search className="h-4 w-4" strokeWidth={2.5} />
          <span>Search commands, pages...</span>
        </span>
        <kbd className="rounded-sm border-2 border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] font-black text-foreground">
          ⌘K
        </kbd>
      </Button>

      <p className="font-mono text-xs text-muted-foreground">
        Press{" "}
        <kbd className="rounded-sm border-2 border-border bg-card px-1.5 py-0.5 font-bold text-foreground">
          Ctrl + K
        </kbd>{" "}
        or{" "}
        <kbd className="rounded-sm border-2 border-border bg-card px-1.5 py-0.5 font-bold text-foreground">
          ⌘ + K
        </kbd>{" "}
        anywhere. Status:{" "}
        <span className="font-bold text-foreground">{selected}</span>
      </p>

      <CommandDialog open={open} onOpenChange={setOpen} title="Punch Command">
        <CommandInput placeholder="Jump to page or run an action..." />
        <CommandList>
          <CommandEmpty>No matching commands.</CommandEmpty>
          <CommandGroup heading="Quick Actions">
            <CommandItem onSelect={() => runCommand("Deploy to Production")}>
              <Rocket strokeWidth={2.5} />
              <span>Deploy to Production</span>
              <CommandShortcut>⌘D</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => runCommand("Open CLI Console")}>
              <Terminal strokeWidth={2.5} />
              <span>Open CLI Console</span>
              <CommandShortcut>⌘J</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => runCommand("Create New Document")}>
              <FileText strokeWidth={2.5} />
              <span>Create New Document</span>
              <CommandShortcut>⌘N</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Navigation">
            <CommandItem onSelect={() => runCommand("Dashboard Overview")}>
              <LayoutDashboard strokeWidth={2.5} />
              <span>Dashboard Overview</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand("Project Boards")}>
              <FolderKanban strokeWidth={2.5} />
              <span>Project Boards</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand("Team Directory")}>
              <Users strokeWidth={2.5} />
              <span>Team Directory</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}

export function CommandStatesDemo() {
  return (
    <div className="mx-auto w-full max-w-md">
      <Command noShadow>
        <CommandInput placeholder="Filter workspace tools..." />
        <CommandList>
          <CommandEmpty>No tools match your query.</CommandEmpty>
          <CommandGroup heading="Workspace Tools">
            <CommandItem>
              <LayoutDashboard strokeWidth={2.5} />
              <span className="flex-1">Analytics Engine</span>
              <Badge variant="success" noShadow className="text-[10px]">
                LIVE
              </Badge>
            </CommandItem>
            <CommandItem>
              <Terminal strokeWidth={2.5} />
              <span className="flex-1">Edge Functions</span>
              <Badge variant="warning" noShadow className="text-[10px]">
                BETA
              </Badge>
            </CommandItem>
            <CommandItem disabled>
              <CreditCard strokeWidth={2.5} />
              <span className="flex-1">Audit Log Export</span>
              <Badge variant="outline" noShadow className="text-[10px]">
                LOCKED
              </Badge>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}
