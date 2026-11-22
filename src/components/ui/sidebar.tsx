"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { PanelLeft, X } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const SIDEBAR_KEYBOARD_SHORTCUT = "b";

export interface SidebarContextValue {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean | ((prev: boolean) => boolean)) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
}

const SidebarContext = React.createContext<SidebarContextValue | null>(null);

/**
 * Hook to access and control Sidebar open/collapsed state.
 */
export function useSidebar(): SidebarContextValue {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}

export interface SidebarProviderProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

/**
 * Context provider and flex layout wrapper for Sidebar and SidebarInset.
 */
export const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  SidebarProviderProps
>(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const [isMobile, setIsMobile] = React.useState(false);
    const [openMobile, setOpenMobile] = React.useState(false);
    const [internalOpen, setInternalOpen] = React.useState(defaultOpen);

    const open = openProp ?? internalOpen;
    const setOpen = React.useCallback(
      (value: boolean | ((prev: boolean) => boolean)) => {
        const nextValue = typeof value === "function" ? value(open) : value;
        if (setOpenProp) {
          setOpenProp(nextValue);
        } else {
          setInternalOpen(nextValue);
        }
      },
      [open, setOpenProp]
    );

    React.useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 767px)");
      const updateMobile = () => setIsMobile(mediaQuery.matches);
      updateMobile();
      mediaQuery.addEventListener("change", updateMobile);
      return () => mediaQuery.removeEventListener("change", updateMobile);
    }, []);

    const toggleSidebar = React.useCallback(() => {
      if (isMobile) {
        setOpenMobile((prev) => !prev);
      } else {
        setOpen((prev) => !prev);
      }
    }, [isMobile, setOpen]);

    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (
          event.key.toLowerCase() === SIDEBAR_KEYBOARD_SHORTCUT &&
          (event.metaKey || event.ctrlKey)
        ) {
          event.preventDefault();
          toggleSidebar();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [toggleSidebar]);

    const state: "expanded" | "collapsed" = open ? "expanded" : "collapsed";

    const contextValue = React.useMemo<SidebarContextValue>(
      () => ({
        state,
        open,
        setOpen,
        openMobile,
        setOpenMobile,
        isMobile,
        toggleSidebar,
      }),
      [state, open, setOpen, openMobile, isMobile, toggleSidebar]
    );

    return (
      <SidebarContext.Provider value={contextValue}>
        <div
          ref={ref}
          data-sidebar-wrapper=""
          className={cn(
            "group/sidebar-wrapper flex min-h-full w-full bg-background text-foreground",
            className
          )}
          {...rest}
        >
          {children}
        </div>
      </SidebarContext.Provider>
    );
  }
);
SidebarProvider.displayName = "SidebarProvider";

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  side?: "left" | "right";
  variant?: "sidebar" | "floating" | "inset";
  collapsible?: "offcanvas" | "icon" | "none";
}

/**
 * Neobrutalist Sidebar container supporting desktop collapse modes and mobile drawer.
 */
export const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  (
    {
      side = "left",
      variant = "sidebar",
      collapsible = "offcanvas",
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const { state, openMobile, setOpenMobile } = useSidebar();
    const isCollapsed = collapsible !== "none" && state === "collapsed";

    const desktopWidthClass =
      collapsible === "none"
        ? "w-64"
        : isCollapsed
          ? collapsible === "icon"
            ? "w-16"
            : "w-0 overflow-hidden border-0 p-0"
          : "w-64";

    const variantClasses =
      variant === "floating"
        ? "m-2 rounded-md border-2 border-border bg-card text-card-foreground shadow-brutal"
        : variant === "inset"
          ? "bg-background text-foreground"
          : cn(
              "border-border bg-card text-card-foreground",
              side === "left" ? "border-r-2" : "border-l-2"
            );

    return (
      <>
        {/* Desktop Sidebar */}
        <aside
          ref={ref}
          data-state={collapsible === "none" ? "expanded" : state}
          data-collapsible={isCollapsed ? collapsible : ""}
          data-variant={variant}
          data-side={side}
          className={cn(
            "group/sidebar hidden shrink-0 flex-col transition-[width] duration-200 ease-out md:flex",
            side === "right" && "order-last",
            desktopWidthClass,
            !(isCollapsed && collapsible === "offcanvas") && variantClasses,
            className
          )}
          {...rest}
        >
          {children}
        </aside>

        {/* Mobile Drawer */}
        {openMobile && (
          <div className="fixed inset-0 z-50 flex md:hidden">
            <div
              aria-hidden="true"
              onClick={() => setOpenMobile(false)}
              className="bg-foreground/40 fixed inset-0 backdrop-blur-[1px]"
            />
            <aside
              data-state="expanded"
              data-side={side}
              className={cn(
                "relative z-10 flex h-full w-72 max-w-[85vw] flex-col border-border bg-card text-card-foreground shadow-brutal-lg",
                side === "left" ? "mr-auto border-r-2" : "ml-auto border-l-2",
                className
              )}
            >
              <button
                type="button"
                aria-label="Close sidebar"
                onClick={() => setOpenMobile(false)}
                className="absolute right-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-sm border-2 border-border bg-card text-card-foreground hover:bg-secondary"
              >
                <X className="h-4 w-4" strokeWidth={2.5} />
              </button>
              {children}
            </aside>
          </div>
        )}
      </>
    );
  }
);
Sidebar.displayName = "Sidebar";

/**
 * Button to toggle Sidebar expanded/collapsed state.
 */
export const SidebarTrigger = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, onClick, ...rest }, ref) => {
    const { toggleSidebar } = useSidebar();

    return (
      <Button
        ref={ref}
        type="button"
        variant="outline"
        size="icon"
        noShadow
        aria-label="Toggle Sidebar"
        onClick={(event) => {
          onClick?.(event);
          toggleSidebar();
        }}
        className={cn("h-8 w-8 shrink-0", className)}
        {...rest}
      >
        <PanelLeft className="h-4 w-4" strokeWidth={2.5} />
      </Button>
    );
  }
);
SidebarTrigger.displayName = "SidebarTrigger";

/**
 * Main content container paired with Sidebar.
 */
export const SidebarInset = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...rest }, ref) => (
  <main
    ref={ref}
    className={cn(
      "flex min-w-0 flex-1 flex-col bg-background text-foreground",
      "peer-data-[variant=inset]/sidebar:m-2 peer-data-[variant=inset]/sidebar:rounded-md peer-data-[variant=inset]/sidebar:border-2 peer-data-[variant=inset]/sidebar:border-border peer-data-[variant=inset]/sidebar:bg-card peer-data-[variant=inset]/sidebar:shadow-brutal",
      className
    )}
    {...rest}
  />
));
SidebarInset.displayName = "SidebarInset";

export const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...rest }, ref) => (
  <div
    ref={ref}
    data-sidebar="header"
    className={cn(
      "flex flex-col gap-2 border-b-2 border-border p-3",
      className
    )}
    {...rest}
  />
));
SidebarHeader.displayName = "SidebarHeader";

export const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...rest }, ref) => (
  <div
    ref={ref}
    data-sidebar="footer"
    className={cn(
      "mt-auto flex flex-col gap-2 border-t-2 border-border p-3",
      className
    )}
    {...rest}
  />
));
SidebarFooter.displayName = "SidebarFooter";

export const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...rest }, ref) => (
  <div
    ref={ref}
    data-sidebar="content"
    className={cn(
      "flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto p-2.5",
      className
    )}
    {...rest}
  />
));
SidebarContent.displayName = "SidebarContent";

export const SidebarSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Separator>
>(({ className, ...rest }, ref) => (
  <Separator ref={ref} className={cn("my-1", className)} {...rest} />
));
SidebarSeparator.displayName = "SidebarSeparator";

export const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...rest }, ref) => (
  <div
    ref={ref}
    data-sidebar="group"
    className={cn("relative flex w-full min-w-0 flex-col py-1", className)}
    {...rest}
  />
));
SidebarGroup.displayName = "SidebarGroup";

export const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { asChild?: boolean }
>(({ className, asChild = false, ...rest }, ref) => {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      ref={ref}
      data-sidebar="group-label"
      className={cn(
        "flex h-7 shrink-0 items-center px-2 font-mono text-[11px] font-bold uppercase tracking-wider text-muted-foreground",
        "group-data-[collapsible=icon]/sidebar:hidden",
        className
      )}
      {...rest}
    />
  );
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";

export const SidebarGroupAction = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }
>(({ className, asChild = false, ...rest }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      ref={ref}
      data-sidebar="group-action"
      className={cn(
        "absolute right-2 top-1.5 flex h-6 w-6 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
        "group-data-[collapsible=icon]/sidebar:hidden",
        className
      )}
      {...rest}
    />
  );
});
SidebarGroupAction.displayName = "SidebarGroupAction";

export const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...rest }, ref) => (
  <div
    ref={ref}
    data-sidebar="group-content"
    className={cn("w-full text-sm", className)}
    {...rest}
  />
));
SidebarGroupContent.displayName = "SidebarGroupContent";

export const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...rest }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu"
    className={cn("flex w-full min-w-0 flex-col gap-1", className)}
    {...rest}
  />
));
SidebarMenu.displayName = "SidebarMenu";

export const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...rest }, ref) => (
  <li
    ref={ref}
    data-sidebar="menu-item"
    className={cn("group/menu-item relative", className)}
    {...rest}
  />
));
SidebarMenuItem.displayName = "SidebarMenuItem";

const sidebarMenuButtonVariants = cva(
  [
    "peer/menu-button flex w-full items-center gap-2.5 overflow-hidden rounded-md border-2 border-transparent px-2.5 py-2 text-left text-xs font-bold transition-all",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&>svg]:h-4 [&>svg]:w-4 [&>svg]:shrink-0",
    "group-data-[collapsible=icon]/sidebar:h-9 group-data-[collapsible=icon]/sidebar:w-9 group-data-[collapsible=icon]/sidebar:justify-center group-data-[collapsible=icon]/sidebar:p-0",
    "group-data-[collapsible=icon]/sidebar:[&>span]:hidden",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "hover:border-border hover:bg-muted",
        outline:
          "border-border bg-card shadow-brutal-sm hover:bg-secondary hover:text-secondary-foreground",
      },
      size: {
        sm: "h-8 text-xs",
        default: "h-9 text-xs",
        lg: "h-11 text-sm",
      },
      isActive: {
        true: "border-border bg-primary text-primary-foreground shadow-brutal-sm hover:bg-primary hover:text-primary-foreground",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      isActive: false,
    },
  }
);

export interface SidebarMenuButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof sidebarMenuButtonVariants> {
  asChild?: boolean;
  isActive?: boolean;
  tooltip?: string;
}

export const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  SidebarMenuButtonProps
>(
  (
    {
      asChild = false,
      isActive = false,
      variant = "default",
      size = "default",
      tooltip,
      className,
      ...rest
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const { state } = useSidebar();

    return (
      <Comp
        ref={ref}
        data-sidebar="menu-button"
        data-active={isActive}
        title={state === "collapsed" ? tooltip : undefined}
        className={cn(
          sidebarMenuButtonVariants({ variant, size, isActive }),
          className
        )}
        {...rest}
      />
    );
  }
);
SidebarMenuButton.displayName = "SidebarMenuButton";

export const SidebarMenuBadge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...rest }, ref) => (
  <div
    ref={ref}
    data-sidebar="menu-badge"
    className={cn(
      "pointer-events-none ml-auto flex h-5 min-w-5 items-center justify-center rounded-sm border-2 border-border bg-secondary px-1.5 font-mono text-[10px] font-extrabold text-secondary-foreground",
      "group-data-[collapsible=icon]/sidebar:hidden",
      className
    )}
    {...rest}
  />
));
SidebarMenuBadge.displayName = "SidebarMenuBadge";

export const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }
>(({ className, asChild = false, ...rest }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        "absolute right-1.5 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-card hover:text-foreground",
        "group-data-[collapsible=icon]/sidebar:hidden",
        className
      )}
      {...rest}
    />
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";

export const SidebarMenuSub = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...rest }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu-sub"
    className={cn(
      "ml-4 mt-1 flex min-w-0 flex-col gap-1 border-l-2 border-border pl-3",
      "group-data-[collapsible=icon]/sidebar:hidden",
      className
    )}
    {...rest}
  />
));
SidebarMenuSub.displayName = "SidebarMenuSub";

export const SidebarMenuSubItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...rest }, ref) => (
  <li
    ref={ref}
    data-sidebar="menu-sub-item"
    className={cn("relative", className)}
    {...rest}
  />
));
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";

export interface SidebarMenuSubButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  asChild?: boolean;
  isActive?: boolean;
  size?: "sm" | "md";
}

export const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  SidebarMenuSubButtonProps
>(
  (
    { asChild = false, isActive = false, size = "md", className, ...rest },
    ref
  ) => {
    const Comp = asChild ? Slot : "a";

    return (
      <Comp
        ref={ref}
        data-sidebar="menu-sub-button"
        data-active={isActive}
        className={cn(
          "flex w-full items-center gap-2 rounded-sm px-2.5 py-1.5 text-xs font-semibold transition-colors",
          size === "sm" ? "text-[11px]" : "text-xs",
          isActive
            ? "bg-secondary font-bold text-secondary-foreground"
            : "text-muted-foreground hover:bg-muted hover:text-foreground",
          className
        )}
        {...rest}
      />
    );
  }
);
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";
