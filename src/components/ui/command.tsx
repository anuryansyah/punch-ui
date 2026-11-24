"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CommandProps extends React.ComponentPropsWithoutRef<
  typeof CommandPrimitive
> {
  noShadow?: boolean;
}

/**
 * Neobrutalist Command palette root container powered by cmdk.
 */
export const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  CommandProps
>(({ className, noShadow = false, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md border-2 border-border bg-card text-card-foreground",
      !noShadow && "shadow-brutal",
      className
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

export interface CommandDialogProps extends DialogPrimitive.DialogProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

/**
 * Neobrutalist CommandDialog modal styled like a classic application window.
 */
export function CommandDialog({
  title = "Command Palette",
  description = "Search commands, pages, and actions.",
  children,
  ...props
}: CommandDialogProps) {
  return (
    <DialogPrimitive.Root {...props}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg border-2 border-border bg-card p-0 text-card-foreground shadow-brutal-lg outline-none duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
          <div className="flex items-center justify-between border-b-2 border-border bg-muted px-3.5 py-2">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full border-2 border-border bg-primary" />
              <DialogPrimitive.Title className="font-mono text-xs font-black uppercase tracking-wider text-foreground">
                {title}
              </DialogPrimitive.Title>
            </div>
            <DialogPrimitive.Description className="sr-only">
              {description}
            </DialogPrimitive.Description>
            <DialogPrimitive.Close
              aria-label="Close command dialog"
              className="inline-flex h-6 items-center gap-1 rounded-sm border-2 border-border bg-card px-1.5 font-mono text-[10px] font-black uppercase text-foreground transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <span>ESC</span>
              <X className="h-3 w-3" strokeWidth={2.5} />
            </DialogPrimitive.Close>
          </div>
          <Command noShadow className="rounded-none border-0">
            {children}
          </Command>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

/**
 * Search input for Command with Neobrutalist bottom divider.
 */
export const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div
    className="flex items-center gap-2 border-b-2 border-border bg-card px-3"
    cmdk-input-wrapper=""
  >
    <Search
      className="h-4 w-4 shrink-0 text-muted-foreground"
      strokeWidth={2.5}
    />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-11 w-full bg-transparent py-3 text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  </div>
));
CommandInput.displayName = CommandPrimitive.Input.displayName;

/**
 * Scrollable list wrapper for Command groups and items.
 */
export const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn(
      "max-h-[300px] overflow-y-auto overflow-x-hidden p-1.5",
      className
    )}
    {...props}
  />
));
CommandList.displayName = CommandPrimitive.List.displayName;

/**
 * Empty state displayed when no CommandItem matches the search query.
 */
export const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className={cn(
      "py-6 text-center font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground",
      className
    )}
    {...props}
  />
));
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

/**
 * Categorized group of CommandItem entries.
 */
export const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-black [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    )}
    {...props}
  />
));
CommandGroup.displayName = CommandPrimitive.Group.displayName;

/**
 * Hard 2px separator between CommandGroup sections.
 */
export const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("-mx-1.5 my-1.5 h-[2px] bg-border", className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

/**
 * Selectable item inside CommandList with solid Neobrutalist active highlight.
 */
export const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-pointer select-none items-center gap-2 rounded-sm border-2 border-transparent px-2.5 py-2 text-sm font-semibold outline-none transition-colors",
      "data-[selected=true]:border-border data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground data-[selected=true]:shadow-brutal-sm",
      "data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-40",
      "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      className
    )}
    {...props}
  />
));
CommandItem.displayName = CommandPrimitive.Item.displayName;

/**
 * Keyboard shortcut badge aligned to the right of a CommandItem.
 */
export function CommandShortcut({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "ml-auto rounded-sm border-2 border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-foreground",
        className
      )}
      {...props}
    />
  );
}
CommandShortcut.displayName = "CommandShortcut";
