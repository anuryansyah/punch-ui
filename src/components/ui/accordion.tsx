"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type AccordionVariant = "default" | "separated" | "flush";

interface AccordionStyleContextValue {
  variant: AccordionVariant;
  noShadow: boolean;
}

const AccordionStyleContext = React.createContext<AccordionStyleContextValue>({
  variant: "default",
  noShadow: false,
});

export type AccordionProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Root
> & {
  variant?: AccordionVariant;
  noShadow?: boolean;
};

/**
 * Neobrutalist Accordion root powered by @radix-ui/react-accordion
 * supporting default (boxed), separated (cards), and flush variants.
 */
export const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(({ className, variant = "default", noShadow = false, ...props }, ref) => (
  <AccordionStyleContext.Provider value={{ variant, noShadow }}>
    <AccordionPrimitive.Root
      ref={ref}
      className={cn(
        "w-full",
        variant === "default" &&
          cn(
            "overflow-hidden rounded-md border-2 border-border bg-card text-card-foreground",
            !noShadow && "shadow-brutal"
          ),
        variant === "separated" && "flex flex-col gap-3",
        variant === "flush" && "border-y-2 border-border",
        className
      )}
      {...props}
    />
  </AccordionStyleContext.Provider>
));
Accordion.displayName = "Accordion";

export const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => {
  const { variant, noShadow } = React.useContext(AccordionStyleContext);

  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn(
        variant === "default" && "border-b-2 border-border last:border-b-0",
        variant === "separated" &&
          cn(
            "overflow-hidden rounded-md border-2 border-border bg-card text-card-foreground",
            !noShadow && "shadow-brutal-sm"
          ),
        variant === "flush" && "border-b-2 border-border last:border-b-0",
        className
      )}
      {...props}
    />
  );
});
AccordionItem.displayName = "AccordionItem";

export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const { variant } = React.useContext(AccordionStyleContext);

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 cursor-pointer items-center justify-between gap-3 py-3.5 text-left text-sm font-extrabold transition-colors",
          "focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring",
          "disabled:cursor-not-allowed disabled:opacity-45",
          "[&[data-state=open]>svg]:rotate-180",
          variant === "flush"
            ? "px-1 hover:text-primary"
            : "px-4 hover:bg-muted data-[state=open]:border-b-2 data-[state=open]:border-border data-[state=open]:bg-secondary data-[state=open]:text-secondary-foreground",
          className
        )}
        {...props}
      >
        <span className="flex min-w-0 flex-1 items-center gap-2.5">
          {children}
        </span>
        <ChevronDown
          className="h-4 w-4 shrink-0 transition-transform duration-200"
          strokeWidth={2.5}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

export const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const { variant } = React.useContext(AccordionStyleContext);

  return (
    <AccordionPrimitive.Content
      ref={ref}
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div
        className={cn(
          "text-sm leading-relaxed text-muted-foreground",
          variant === "flush" ? "px-1 pb-4 pt-1" : "bg-card p-4",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
});
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
