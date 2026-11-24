"use client";

import * as React from "react";
import { Rocket, Settings, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function DialogBasicDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Welcome to Punch UI</DialogTitle>
          <DialogDescription>
            Bold 2px borders, hard offset shadows, and accessible Radix Dialog
            focus management out of the box.
          </DialogDescription>
        </DialogHeader>
        <p className="text-sm text-card-foreground">
          Press{" "}
          <kbd className="rounded-sm border-2 border-border bg-muted px-1.5 py-0.5 font-mono text-xs font-bold">
            ESC
          </kbd>{" "}
          or click outside to close this modal at any time.
        </p>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button>Got It</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function DialogFormDemo() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("Alex Morgan");
  const [role, setRole] = React.useState("maintainer");
  const [savedNotice, setSavedNotice] = React.useState<string | null>(null);

  function handleSave(event: React.FormEvent) {
    event.preventDefault();
    setSavedNotice(`Saved ${name} (${role})`);
    setOpen(false);
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="secondary">
            <Settings className="h-4 w-4" strokeWidth={2.5} />
            Edit Profile
          </Button>
        </DialogTrigger>
        <DialogContent>
          <form onSubmit={handleSave} className="space-y-4">
            <DialogHeader>
              <DialogTitle>Edit Member Profile</DialogTitle>
              <DialogDescription>
                Update workspace display name and permission role.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-3">
              <div className="space-y-1.5">
                <Label htmlFor="dialog-member-name">Display Name</Label>
                <Input
                  id="dialog-member-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="dialog-member-role">Workspace Role</Label>
                <Select value={role} onValueChange={setRole}>
                  <SelectTrigger id="dialog-member-role">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="viewer">Viewer</SelectItem>
                    <SelectItem value="maintainer">Maintainer</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">Save Changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {savedNotice && (
        <p className="font-mono text-xs font-bold text-success">
          {savedNotice}
        </p>
      )}
    </div>
  );
}

export function DialogSizeDemo() {
  const sizes = [
    {
      key: "sm" as const,
      label: "Small (sm)",
      desc: "max-w-sm — compact prompts",
    },
    {
      key: "default" as const,
      label: "Default",
      desc: "max-w-lg — standard modals",
    },
    {
      key: "lg" as const,
      label: "Large (lg)",
      desc: "max-w-2xl — rich forms & previews",
    },
    {
      key: "xl" as const,
      label: "Extra Large (xl)",
      desc: "max-w-4xl — wide dashboards",
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {sizes.map((item) => (
        <Dialog key={item.key}>
          <DialogTrigger asChild>
            <Button variant="outline">{item.label}</Button>
          </DialogTrigger>
          <DialogContent size={item.key}>
            <DialogHeader>
              <DialogTitle>Dialog Size: {item.label}</DialogTitle>
              <DialogDescription>{item.desc}</DialogDescription>
            </DialogHeader>
            <div className="rounded-md border-2 border-border bg-muted p-4 font-mono text-xs">
              &lt;DialogContent size=&quot;{item.key}&quot;&gt;
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button size="sm">Close</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}

export function DialogScrollableDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Release Notes</Button>
      </DialogTrigger>
      <DialogContent className="flex max-h-[80vh] flex-col">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <DialogTitle>Release Changelog</DialogTitle>
            <Badge variant="secondary" noShadow>
              v0.3.0
            </Badge>
          </div>
          <DialogDescription>
            Scrollable modal body with fixed header and footer actions.
          </DialogDescription>
        </DialogHeader>

        <div className="min-h-0 flex-1 space-y-4 overflow-y-auto pr-2 text-sm">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div
              key={idx}
              className="rounded-md border-2 border-border bg-muted p-3.5"
            >
              <p className="font-mono text-xs font-black uppercase">
                Update #{idx + 1} • Component Milestone
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Improved keyboard focus handling, standardized 2px border
                geometry across Light and Dark presets, and synchronized
                bilingual documentation snippets.
              </p>
            </div>
          ))}
        </div>

        <DialogFooter className="border-t-2 border-border pt-4">
          <DialogClose asChild>
            <Button variant="outline">Dismiss</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button>Acknowledge</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function DialogHeaderVariantDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <Rocket className="h-4 w-4" strokeWidth={2.5} />
            Primary Header
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader variant="primary">
            <DialogTitle>Deploy to Production</DialogTitle>
            <DialogDescription>
              High-emphasis window header using variant=&quot;primary&quot;.
            </DialogDescription>
          </DialogHeader>
          <p className="text-sm">
            Build #482 passed all type checks and registry validations. Ready to
            promote to the edge network.
          </p>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button>Deploy Now</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary">
            <Sparkles className="h-4 w-4" strokeWidth={2.5} />
            Secondary Header
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader variant="secondary">
            <DialogTitle>Pro Workspace Unlocked</DialogTitle>
            <DialogDescription>
              Retro accent bar using variant=&quot;secondary&quot;.
            </DialogDescription>
          </DialogHeader>
          <p className="text-sm">
            Your team now has access to custom theme presets, unlimited registry
            items, and priority support.
          </p>
          <DialogFooter>
            <DialogClose asChild>
              <Button>Awesome</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
