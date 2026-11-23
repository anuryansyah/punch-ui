"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export type TabsVariant = "default" | "folder" | "underline";
export type TabsSize = "sm" | "default" | "lg";

interface TabsStyleContextValue {
  variant: TabsVariant;
  size: TabsSize;
  noShadow: boolean;
  orientation: "horizontal" | "vertical";
}

const TabsStyleContext = React.createContext<TabsStyleContextValue>({
  variant: "default",
  size: "default",
  noShadow: false,
  orientation: "horizontal",
});

export interface TabsProps extends React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Root
> {
  variant?: TabsVariant;
  size?: TabsSize;
  noShadow?: boolean;
}

/**
 * Neobrutalist Tabs root powered by @radix-ui/react-tabs supporting default, folder, and underline variants.
 */
export const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsProps
>(
  (
    {
      className,
      variant = "default",
      size = "default",
      noShadow = false,
      orientation = "horizontal",
      ...props
    },
    ref
  ) => (
    <TabsStyleContext.Provider value={{ variant, size, noShadow, orientation }}>
      <TabsPrimitive.Root
        ref={ref}
        orientation={orientation}
        className={cn(
          orientation === "vertical"
            ? "flex flex-col gap-4 sm:flex-row sm:items-start"
            : "w-full",
          className
        )}
        {...props}
      />
    </TabsStyleContext.Provider>
  )
);
Tabs.displayName = TabsPrimitive.Root.displayName;

const tabsListVariants = cva("inline-flex items-center", {
  variants: {
    variant: {
      default:
        "gap-1.5 rounded-md border-2 border-border bg-muted p-1.5 text-muted-foreground",
      folder: "items-end gap-1.5 bg-transparent p-0",
      underline:
        "w-full gap-2 border-b-2 border-border bg-transparent p-0 text-muted-foreground",
    },
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col items-stretch",
    },
  },
  compoundVariants: [
    {
      variant: "underline",
      orientation: "vertical",
      className: "w-auto border-b-0 border-r-2 pr-0",
    },
  ],
  defaultVariants: {
    variant: "default",
    orientation: "horizontal",
  },
});

export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => {
  const { variant, noShadow, orientation } = React.useContext(TabsStyleContext);

  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        tabsListVariants({ variant, orientation }),
        variant === "default" && !noShadow && "shadow-brutal-sm",
        className
      )}
      {...props}
    />
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;

const tabsTriggerVariants = cva(
  [
    "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap font-bold transition-all",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    "disabled:pointer-events-none disabled:opacity-45",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "rounded-sm border-2 border-transparent text-muted-foreground hover:text-foreground data-[state=active]:border-border data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
        folder:
          "rounded-b-none rounded-t-md border-2 border-b-0 border-border bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground data-[state=active]:relative data-[state=active]:z-10 data-[state=active]:-mb-[2px] data-[state=active]:bg-card data-[state=active]:pb-2.5 data-[state=active]:text-card-foreground",
        underline:
          "-mb-[2px] rounded-none border-b-[3px] border-transparent text-muted-foreground hover:text-foreground data-[state=active]:border-primary data-[state=active]:text-foreground",
      },
      size: {
        sm: "px-2.5 py-1 text-xs",
        default: "px-3.5 py-1.5 text-sm",
        lg: "px-5 py-2.5 text-base",
      },
      orientation: {
        horizontal: "",
        vertical: "w-full justify-start text-left",
      },
    },
    compoundVariants: [
      {
        variant: "underline",
        orientation: "vertical",
        className:
          "-mb-0 -mr-[2px] border-b-0 border-r-[3px] data-[state=active]:border-primary",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      orientation: "horizontal",
    },
  }
);

export type TabsTriggerProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Trigger
> &
  Partial<VariantProps<typeof tabsTriggerVariants>>;

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, variant: variantProp, size: sizeProp, ...props }, ref) => {
  const ctx = React.useContext(TabsStyleContext);
  const variant = variantProp ?? ctx.variant;
  const size = sizeProp ?? ctx.size;

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        tabsTriggerVariants({ variant, size, orientation: ctx.orientation }),
        variant === "default" &&
          !ctx.noShadow &&
          "data-[state=active]:shadow-brutal-sm",
        className
      )}
      {...props}
    />
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => {
  const { variant, noShadow, orientation } = React.useContext(TabsStyleContext);

  return (
    <TabsPrimitive.Content
      ref={ref}
      className={cn(
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        variant === "folder"
          ? cn(
              "mt-0 rounded-b-md rounded-tr-md border-2 border-border bg-card p-5 text-card-foreground",
              !noShadow && "shadow-brutal"
            )
          : orientation === "vertical"
            ? "flex-1"
            : "mt-3",
        className
      )}
      {...props}
    />
  );
});
TabsContent.displayName = TabsPrimitive.Content.displayName;
