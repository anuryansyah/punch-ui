"use client";

import * as React from "react";
import * as NavMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const NavigationMenuContext = React.createContext<{
  noShadow: boolean;
  noBorder: boolean;
}>({
  noShadow: false,
  noBorder: false,
});

export interface NavigationMenuProps extends React.ComponentPropsWithoutRef<
  typeof NavMenuPrimitive.Root
> {
  /** Renders the floating Radix viewport below the trigger bar */
  viewport?: boolean;
  /** Removes hard offset shadows on triggers and dropdown panel */
  noShadow?: boolean;
  /** Removes borders & card fill on triggers (can be overridden per trigger) */
  noBorder?: boolean;
}

export const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavMenuPrimitive.Root>,
  NavigationMenuProps
>(
  (
    {
      className,
      children,
      viewport = true,
      noShadow = false,
      noBorder = false,
      ...props
    },
    ref
  ) => (
    <NavigationMenuContext.Provider value={{ noShadow, noBorder }}>
      <NavMenuPrimitive.Root
        ref={ref}
        className={cn(
          "relative z-20 flex max-w-max flex-1 items-center justify-center",
          className
        )}
        {...props}
      >
        {children}
        {viewport && <NavigationMenuViewport />}
      </NavMenuPrimitive.Root>
    </NavigationMenuContext.Provider>
  )
);
NavigationMenu.displayName = "NavigationMenu";

export const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center gap-1.5",
      className
    )}
    {...props}
  />
));
NavigationMenuList.displayName = "NavigationMenuList";

export const NavigationMenuItem = NavMenuPrimitive.Item;

export const navigationMenuTriggerStyle = cva(
  [
    "group inline-flex h-10 w-max cursor-pointer items-center justify-center gap-1.5 rounded-md border-2 px-3.5 py-2 text-xs font-bold text-card-foreground transition-all",
    "hover:bg-secondary hover:text-secondary-foreground",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    "disabled:pointer-events-none disabled:opacity-50",
    "data-[active]:bg-primary data-[active]:text-primary-foreground",
    "data-[state=open]:bg-secondary data-[state=open]:text-secondary-foreground",
  ].join(" "),
  {
    variants: {
      noBorder: {
        true: "border-transparent bg-transparent shadow-none",
        false: "border-border bg-card",
      },
    },
    defaultVariants: {
      noBorder: false,
    },
  }
);

export interface NavigationMenuTriggerProps extends React.ComponentPropsWithoutRef<
  typeof NavMenuPrimitive.Trigger
> {
  noBorder?: boolean;
  noShadow?: boolean;
}

export const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavMenuPrimitive.Trigger>,
  NavigationMenuTriggerProps
>(
  (
    {
      className,
      children,
      noBorder: noBorderProp,
      noShadow: noShadowProp,
      ...props
    },
    ref
  ) => {
    const ctx = React.useContext(NavigationMenuContext);
    const resolvedNoBorder = noBorderProp ?? ctx.noBorder;
    const resolvedNoShadow = noShadowProp ?? ctx.noShadow;

    return (
      <NavMenuPrimitive.Trigger
        ref={ref}
        className={cn(
          navigationMenuTriggerStyle({ noBorder: resolvedNoBorder }),
          !resolvedNoShadow &&
            !resolvedNoBorder &&
            "shadow-brutal-sm data-[state=open]:translate-x-[2px] data-[state=open]:translate-y-[2px] data-[state=open]:shadow-none",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown
          aria-hidden="true"
          strokeWidth={2.5}
          className="h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180"
        />
      </NavMenuPrimitive.Trigger>
    );
  }
);
NavigationMenuTrigger.displayName = "NavigationMenuTrigger";

export const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full p-3 md:absolute md:w-auto",
      "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out",
      "data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out",
      "data-[motion=from-end]:slide-in-from-right-12 data-[motion=from-start]:slide-in-from-left-12",
      "data-[motion=to-end]:slide-out-to-right-12 data-[motion=to-start]:slide-out-to-left-12",
      className
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = "NavigationMenuContent";

export const NavigationMenuLink = NavMenuPrimitive.Link;

export interface NavigationMenuViewportProps extends React.ComponentPropsWithoutRef<
  typeof NavMenuPrimitive.Viewport
> {
  noBorder?: boolean;
}

export const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavMenuPrimitive.Viewport>,
  NavigationMenuViewportProps
>(({ className, noBorder = false, ...props }, ref) => {
  const { noShadow } = React.useContext(NavigationMenuContext);
  return (
    <div className="absolute left-0 top-full flex justify-center">
      <NavMenuPrimitive.Viewport
        ref={ref}
        className={cn(
          "origin-top-center relative mt-2 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-lg bg-card text-card-foreground transition-[width,height] duration-200 md:w-[var(--radix-navigation-menu-viewport-width)]",
          noBorder ? "border-0" : "border-2 border-border",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          !noShadow && "shadow-brutal-lg",
          className
        )}
        {...props}
      />
    </div>
  );
});
NavigationMenuViewport.displayName = "NavigationMenuViewport";

export const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-10 flex h-2 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2.5 w-2.5 rotate-45 border-l-2 border-t-2 border-border bg-card" />
  </NavMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName = "NavigationMenuIndicator";
