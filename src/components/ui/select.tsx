"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cva, type VariantProps } from "class-variance-authority";
import { Check, ChevronDown, ChevronUp, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Select = SelectPrimitive.Root;
export const SelectGroup = SelectPrimitive.Group;
export const SelectValue = SelectPrimitive.Value;

const selectTriggerVariants = cva(
  [
    "flex w-full items-center justify-between gap-2 rounded-md border-2 bg-card font-semibold text-card-foreground outline-none transition-[box-shadow,border-color]",
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
            className="h-4 w-4 shrink-0 opacity-80 transition-transform duration-150 [[data-state=open]_&]:rotate-180"
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

export interface SearchableSelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SearchableSelectProps extends VariantProps<
  typeof selectTriggerVariants
> {
  options: SearchableSelectOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  disabled?: boolean;
  noShadow?: boolean;
  clearable?: boolean;
  id?: string;
  className?: string;
  "aria-label"?: string;
}

/**
 * Searchable Neobrutalist Select with built-in filter input and keyboard navigation.
 */
export function SearchableSelect({
  options,
  value: valueProp,
  defaultValue = "",
  onValueChange,
  placeholder = "Select an option...",
  searchPlaceholder = "Search...",
  emptyMessage = "No results found.",
  selectSize,
  state,
  noShadow = false,
  clearable = false,
  disabled = false,
  id,
  className,
  "aria-label": ariaLabel,
}: SearchableSelectProps) {
  const listboxId = React.useId();
  const [open, setOpen] = React.useState(false);
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const [query, setQuery] = React.useState("");
  const [highlightedIndex, setHighlightedIndex] = React.useState(0);
  const [dropdownRect, setDropdownRect] = React.useState<{
    top: number;
    left: number;
    width: number;
  } | null>(null);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const popoverRef = React.useRef<HTMLDivElement>(null);
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  const currentValue = valueProp !== undefined ? valueProp : internalValue;
  const selectedOption = options.find((opt) => opt.value === currentValue);

  const filteredOptions = React.useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return options;
    return options.filter((opt) => opt.label.toLowerCase().includes(trimmed));
  }, [options, query]);

  const updatePosition = React.useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setDropdownRect({
      top: rect.bottom + 6,
      left: rect.left,
      width: rect.width,
    });
  }, []);

  React.useEffect(() => {
    if (!open) return;

    setHighlightedIndex(0);
    updatePosition();

    const frame = requestAnimationFrame(() => {
      searchInputRef.current?.focus();
    });

    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      const inContainer = containerRef.current?.contains(target);
      const inPopover = popoverRef.current?.contains(target);
      if (!inContainer && !inPopover) {
        setOpen(false);
      }
    }

    function preventOutsideScroll(event: WheelEvent | TouchEvent) {
      if (
        popoverRef.current &&
        popoverRef.current.contains(event.target as Node)
      ) {
        return;
      }
      event.preventDefault();
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("wheel", preventOutsideScroll, {
      passive: false,
    });
    document.addEventListener("touchmove", preventOutsideScroll, {
      passive: false,
    });
    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("wheel", preventOutsideScroll);
      document.removeEventListener("touchmove", preventOutsideScroll);
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [open, updatePosition]);

  function selectOption(option: SearchableSelectOption) {
    if (option.disabled) return;
    if (valueProp === undefined) {
      setInternalValue(option.value);
    }
    onValueChange?.(option.value);
    setOpen(false);
    setQuery("");
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (!open) return;

    if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setHighlightedIndex((prev) =>
        filteredOptions.length === 0 ? 0 : (prev + 1) % filteredOptions.length
      );
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setHighlightedIndex((prev) =>
        filteredOptions.length === 0
          ? 0
          : (prev - 1 + filteredOptions.length) % filteredOptions.length
      );
    } else if (event.key === "Enter") {
      event.preventDefault();
      const target = filteredOptions[highlightedIndex];
      if (target) {
        selectOption(target);
      }
    }
  }

  return (
    <div
      ref={containerRef}
      onKeyDown={handleKeyDown}
      className={cn("relative w-full", className)}
    >
      <div className="relative w-full">
        <button
          ref={triggerRef}
          id={id}
          type="button"
          role="combobox"
          aria-controls={listboxId}
          aria-expanded={open}
          aria-label={ariaLabel}
          aria-invalid={state === "error" || undefined}
          disabled={disabled}
          data-state={open ? "open" : "closed"}
          onClick={() => setOpen((prev) => !prev)}
          className={cn(
            selectTriggerVariants({ selectSize, state, noShadow }),
            "text-left"
          )}
        >
          <span
            className={cn(
              "truncate",
              clearable && selectedOption && !disabled && "pr-7",
              !selectedOption && "text-muted-foreground"
            )}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDown
            className={cn(
              "h-4 w-4 shrink-0 opacity-80 transition-transform duration-150",
              open && "rotate-180"
            )}
            strokeWidth={2.5}
          />
        </button>

        {clearable && selectedOption && !disabled && (
          <button
            type="button"
            aria-label="Clear selection"
            onClick={() => {
              if (valueProp === undefined) {
                setInternalValue("");
              }
              onValueChange?.("");
              setQuery("");
            }}
            className="absolute right-9 top-1/2 -translate-y-1/2 rounded-sm p-0.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-3.5 w-3.5" strokeWidth={2.5} />
          </button>
        )}
      </div>

      {open &&
        dropdownRect &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            ref={popoverRef}
            onKeyDown={handleKeyDown}
            style={{
              top: dropdownRect.top,
              left: dropdownRect.left,
              width: dropdownRect.width,
            }}
            className={cn(
              "fixed z-50 overflow-hidden rounded-md border-2 border-border bg-card text-card-foreground",
              !noShadow && "shadow-brutal"
            )}
          >
            <div className="flex items-center gap-2 border-b-2 border-border bg-card px-2.5 py-2">
              <Search
                className="h-3.5 w-3.5 shrink-0 text-muted-foreground"
                strokeWidth={2.5}
              />
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setHighlightedIndex(0);
                }}
                placeholder={searchPlaceholder}
                className="w-full bg-transparent text-xs font-semibold text-card-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setQuery("")}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-3.5 w-3.5" strokeWidth={2.5} />
                </button>
              )}
            </div>

            <ul
              id={listboxId}
              role="listbox"
              className="max-h-56 overflow-y-auto p-1.5"
            >
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => {
                  const isSelected = option.value === currentValue;
                  const isHighlighted = index === highlightedIndex;

                  return (
                    <li
                      key={option.value}
                      role="option"
                      aria-selected={isSelected}
                    >
                      <button
                        type="button"
                        disabled={option.disabled}
                        onMouseEnter={() => setHighlightedIndex(index)}
                        onClick={() => selectOption(option)}
                        className={cn(
                          "relative flex w-full cursor-pointer select-none items-center rounded-sm py-2 pl-8 pr-2.5 text-left text-sm font-semibold transition-colors",
                          isHighlighted &&
                            "bg-secondary text-secondary-foreground",
                          option.disabled && "pointer-events-none opacity-45"
                        )}
                      >
                        <span className="absolute left-2.5 flex h-4 w-4 items-center justify-center">
                          {isSelected && (
                            <Check className="h-4 w-4" strokeWidth={3} />
                          )}
                        </span>
                        <span className="truncate">{option.label}</span>
                      </button>
                    </li>
                  );
                })
              ) : (
                <li className="py-5 text-center font-mono text-xs font-bold text-muted-foreground">
                  {emptyMessage}
                </li>
              )}
            </ul>
          </div>,
          document.body
        )}
    </div>
  );
}
