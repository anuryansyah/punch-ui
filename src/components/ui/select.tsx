"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cva, type VariantProps } from "class-variance-authority";
import { Check, ChevronDown, ChevronUp, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Select = SelectPrimitive.Root;
export const SelectGroup = SelectPrimitive.Group;
export const SelectValue = SelectPrimitive.Value;

const selectTriggerVariants = cva(
  [
    "group flex w-full items-center justify-between gap-2 rounded-md border-2 bg-card font-semibold text-card-foreground outline-none transition-[box-shadow,border-color]",
    "data-[placeholder]:text-muted-foreground",
    "focus-visible:outline-none",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "[&>span]:line-clamp-1",
  ].join(" "),
  {
    variants: {
      selectSize: {
        sm: "h-8 px-2.5 py-1 text-xs",
        default: "h-10 px-3.5 py-2 text-sm",
        lg: "h-12 px-4 py-2.5 text-base",
      },
      state: {
        default:
          "border-border shadow-brutal-sm focus-visible:shadow-brutal data-[state=open]:shadow-brutal",
        error:
          "shadow-brutal-error-sm focus-visible:shadow-brutal-error border-destructive",
        success:
          "shadow-brutal-success-sm focus-visible:shadow-brutal-success border-success",
      },
      noShadow: {
        true: "!shadow-none focus-visible:!shadow-none data-[state=open]:!shadow-none",
        false: "",
      },
    },
    defaultVariants: {
      selectSize: "default",
      state: "default",
      noShadow: false,
    },
  }
);

export interface SelectTriggerProps
  extends
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>,
    VariantProps<typeof selectTriggerVariants> {
  noShadow?: boolean;
  clearable?: boolean;
  onClear?: () => void;
}

/**
 * Neobrutalist Select trigger button with size, validation state, and noShadow variants.
 */
export const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(
  (
    {
      className,
      selectSize,
      state,
      noShadow = false,
      clearable = false,
      onClear,
      children,
      ...rest
    },
    ref
  ) => {
    const showClear = Boolean(clearable && onClear && !rest.disabled);

    const trigger = (
      <SelectPrimitive.Trigger
        ref={ref}
        aria-invalid={state === "error" || undefined}
        className={cn(
          selectTriggerVariants({ selectSize, state, noShadow }),
          showClear && "[&>span:first-child]:pr-7",
          className
        )}
        {...rest}
      >
        {children}
        <SelectPrimitive.Icon asChild>
          <ChevronDown
            className="h-4 w-4 shrink-0 opacity-80 transition-transform duration-150 group-data-[state=open]:rotate-180"
            strokeWidth={2.5}
          />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
    );

    if (!clearable) {
      return trigger;
    }

    return (
      <div className="relative flex w-full items-center">
        {trigger}
        {showClear && (
          <button
            type="button"
            aria-label="Clear selection"
            onClick={onClear}
            className="absolute right-9 top-1/2 -translate-y-1/2 rounded-sm p-0.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-3.5 w-3.5" strokeWidth={2.5} />
          </button>
        )}
      </div>
    );
  }
);
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

export const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...rest }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center border-b-2 border-border bg-card py-1 text-foreground",
      className
    )}
    {...rest}
  >
    <ChevronUp className="h-4 w-4" strokeWidth={2.5} />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

export const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...rest }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center border-t-2 border-border bg-card py-1 text-foreground",
      className
    )}
    {...rest}
  >
    <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

export const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...rest }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      position={position}
      className={cn(
        "relative z-50 max-h-80 overflow-hidden rounded-md border-2 border-border bg-card text-card-foreground shadow-brutal",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        position === "popper"
          ? "min-w-[var(--radix-select-trigger-width)] data-[side=bottom]:translate-y-1.5 data-[side=left]:-translate-x-1.5 data-[side=right]:translate-x-1.5 data-[side=top]:-translate-y-1.5"
          : "min-w-[8rem]",
        className
      )}
      {...rest}
    >
      <SelectPrimitive.Viewport className="max-h-56 w-full overflow-y-auto p-1.5">
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

export const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...rest }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(
      "px-2.5 py-1.5 font-mono text-[11px] font-extrabold uppercase tracking-wider text-muted-foreground",
      className
    )}
    {...rest}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...rest }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-pointer select-none items-center rounded-sm py-2 pl-8 pr-2.5 text-sm font-semibold outline-none transition-colors",
      "focus:bg-secondary focus:text-secondary-foreground",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-45",
      className
    )}
    {...rest}
  >
    <span className="absolute left-2.5 flex h-4 w-4 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" strokeWidth={3} />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

export const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...rest }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1.5 my-1.5 h-[2px] bg-border", className)}
    {...rest}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
