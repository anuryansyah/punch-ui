"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const comboboxTriggerVariants = cva(
  [
    "flex w-full cursor-pointer items-center justify-between gap-2 rounded-md border-2 bg-card font-semibold text-card-foreground outline-none transition-[box-shadow,border-color]",
    "focus-visible:outline-none",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      triggerSize: {
        sm: "min-h-8 px-2.5 py-1 text-xs",
        default: "min-h-10 px-3.5 py-1.5 text-sm",
        lg: "min-h-12 px-4 py-2 text-base",
      },
      state: {
        default: "border-border shadow-brutal-sm focus-visible:shadow-brutal",
        error:
          "shadow-brutal-error-sm focus-visible:shadow-brutal-error border-destructive",
        success:
          "shadow-brutal-success-sm focus-visible:shadow-brutal-success border-success",
      },
      noShadow: {
        true: "!shadow-none focus-visible:!shadow-none",
        false: "",
      },
    },
    defaultVariants: {
      triggerSize: "default",
      state: "default",
      noShadow: false,
    },
  }
);

export interface ComboboxOption {
  value: string;
  label: string;
  description?: string;
  group?: string;
  icon?: React.ReactNode;
  badge?: string;
  disabled?: boolean;
  keywords?: string[];
}

function groupOptions(options: ComboboxOption[]) {
  const groups = new Map<string, ComboboxOption[]>();
  for (const option of options) {
    const key = option.group ?? "";
    const existing = groups.get(key);
    if (existing) {
      existing.push(option);
    } else {
      groups.set(key, [option]);
    }
  }
  return Array.from(groups.entries());
}

export interface ComboboxProps extends VariantProps<
  typeof comboboxTriggerVariants
> {
  options: ComboboxOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: string;
  clearable?: boolean;
  disabled?: boolean;
  noShadow?: boolean;
  id?: string;
  className?: string;
  contentClassName?: string;
  "aria-label"?: string;
}

/**
 * Neobrutalist single-select Combobox combining Popover and Command.
 */
export function Combobox({
  options,
  value: valueProp,
  defaultValue = "",
  onValueChange,
  placeholder = "Select option...",
  searchPlaceholder = "Search...",
  emptyText = "No results found.",
  clearable = false,
  triggerSize,
  state,
  noShadow = false,
  disabled = false,
  id,
  className,
  contentClassName,
  "aria-label": ariaLabel,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const listboxId = React.useId();

  const currentValue = valueProp !== undefined ? valueProp : internalValue;
  const selectedOption = options.find((opt) => opt.value === currentValue);
  const showClear = Boolean(clearable && selectedOption && !disabled);
  const grouped = React.useMemo(() => groupOptions(options), [options]);

  function handleSelect(nextValue: string) {
    const resolved = nextValue === currentValue ? "" : nextValue;
    if (valueProp === undefined) {
      setInternalValue(resolved);
    }
    onValueChange?.(resolved);
    setOpen(false);
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <div className={cn("relative w-full", className)}>
        <PopoverTrigger asChild>
          <button
            id={id}
            type="button"
            role="combobox"
            aria-expanded={open}
            aria-controls={listboxId}
            aria-label={ariaLabel}
            aria-invalid={state === "error" || undefined}
            disabled={disabled}
            className={cn(
              comboboxTriggerVariants({ triggerSize, state, noShadow }),
              "text-left"
            )}
          >
            <span
              className={cn(
                "flex min-w-0 items-center gap-2 truncate",
                showClear && "pr-7",
                !selectedOption && "text-muted-foreground"
              )}
            >
              {selectedOption?.icon && (
                <span className="shrink-0">{selectedOption.icon}</span>
              )}
              <span className="truncate">
                {selectedOption ? selectedOption.label : placeholder}
              </span>
            </span>
            <ChevronsUpDown
              className="h-4 w-4 shrink-0 opacity-80"
              strokeWidth={2.5}
            />
          </button>
        </PopoverTrigger>

        {showClear && (
          <button
            type="button"
            aria-label="Clear selection"
            onClick={() => handleSelect(currentValue)}
            className="absolute right-9 top-1/2 -translate-y-1/2 rounded-sm p-0.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-3.5 w-3.5" strokeWidth={2.5} />
          </button>
        )}
      </div>

      <PopoverContent
        align="start"
        noShadow={noShadow}
        className={cn(
          "w-[--radix-popover-trigger-width] min-w-[220px] p-0",
          contentClassName
        )}
      >
        <Command noShadow className="border-0">
          <CommandInput placeholder={searchPlaceholder} />
          <CommandList id={listboxId}>
            <CommandEmpty>{emptyText}</CommandEmpty>
            {grouped.map(([groupName, groupItems], groupIndex) => (
              <React.Fragment key={groupName || "__default"}>
                {groupIndex > 0 && <CommandSeparator />}
                <CommandGroup heading={groupName || undefined}>
                  {groupItems.map((option) => {
                    const isSelected = option.value === currentValue;
                    return (
                      <CommandItem
                        key={option.value}
                        value={option.label}
                        keywords={[
                          option.value,
                          ...(option.description ? [option.description] : []),
                          ...(option.keywords ?? []),
                        ]}
                        disabled={option.disabled}
                        onSelect={() => handleSelect(option.value)}
                      >
                        {option.icon && (
                          <span className="shrink-0">{option.icon}</span>
                        )}
                        <div className="min-w-0 flex-1">
                          <div className="truncate">{option.label}</div>
                          {option.description && (
                            <div className="truncate text-xs font-normal opacity-75">
                              {option.description}
                            </div>
                          )}
                        </div>
                        {option.badge && (
                          <span className="rounded-sm border-2 border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase text-foreground">
                            {option.badge}
                          </span>
                        )}
                        <Check
                          className={cn(
                            "ml-auto h-4 w-4 shrink-0",
                            isSelected ? "opacity-100" : "opacity-0"
                          )}
                          strokeWidth={2.5}
                        />
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              </React.Fragment>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export interface MultiComboboxProps extends VariantProps<
  typeof comboboxTriggerVariants
> {
  options: ComboboxOption[];
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (values: string[]) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: string;
  maxDisplay?: number;
  clearable?: boolean;
  disabled?: boolean;
  noShadow?: boolean;
  id?: string;
  className?: string;
  contentClassName?: string;
  "aria-label"?: string;
}

/**
 * Neobrutalist multi-select Combobox with removable Badge pills.
 */
export function MultiCombobox({
  options,
  value: valueProp,
  defaultValue = [],
  onValueChange,
  placeholder = "Select options...",
  searchPlaceholder = "Search...",
  emptyText = "No results found.",
  maxDisplay = 3,
  clearable = false,
  triggerSize,
  state,
  noShadow = false,
  disabled = false,
  id,
  className,
  contentClassName,
  "aria-label": ariaLabel,
}: MultiComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [internalValues, setInternalValues] =
    React.useState<string[]>(defaultValue);
  const listboxId = React.useId();

  const selectedValues = valueProp !== undefined ? valueProp : internalValues;
  const selectedOptions = options.filter((opt) =>
    selectedValues.includes(opt.value)
  );
  const showClear = Boolean(
    clearable && selectedValues.length > 0 && !disabled
  );
  const grouped = React.useMemo(() => groupOptions(options), [options]);

  function updateValues(next: string[]) {
    if (valueProp === undefined) {
      setInternalValues(next);
    }
    onValueChange?.(next);
  }

  function toggleOption(optionValue: string) {
    const exists = selectedValues.includes(optionValue);
    const next = exists
      ? selectedValues.filter((v) => v !== optionValue)
      : [...selectedValues, optionValue];
    updateValues(next);
  }

  const visibleBadges = selectedOptions.slice(0, maxDisplay);
  const overflowCount = selectedOptions.length - visibleBadges.length;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <div className={cn("relative w-full", className)}>
        <PopoverTrigger asChild>
          <div
            id={id}
            role="combobox"
            tabIndex={disabled ? -1 : 0}
            aria-expanded={open}
            aria-controls={listboxId}
            aria-label={ariaLabel}
            aria-disabled={disabled || undefined}
            aria-invalid={state === "error" || undefined}
            onKeyDown={(event) => {
              if (disabled) return;
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setOpen((prev) => !prev);
              }
            }}
            className={cn(
              comboboxTriggerVariants({ triggerSize, state, noShadow }),
              "text-left",
              disabled && "pointer-events-none opacity-50"
            )}
          >
            <div
              className={cn(
                "flex min-w-0 flex-1 flex-wrap items-center gap-1.5",
                showClear && "pr-7"
              )}
            >
              {selectedOptions.length === 0 ? (
                <span className="truncate text-muted-foreground">
                  {placeholder}
                </span>
              ) : (
                <>
                  {visibleBadges.map((option) => (
                    <Badge
                      key={option.value}
                      variant="secondary"
                      noShadow
                      className="gap-1 px-2 py-0.5 text-xs"
                    >
                      <span>{option.label}</span>
                      <button
                        type="button"
                        aria-label={`Remove ${option.label}`}
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleOption(option.value);
                        }}
                        className="rounded-sm hover:text-destructive focus-visible:outline-none"
                      >
                        <X className="h-3 w-3" strokeWidth={2.5} />
                      </button>
                    </Badge>
                  ))}
                  {overflowCount > 0 && (
                    <Badge
                      variant="outline"
                      noShadow
                      className="px-2 py-0.5 font-mono text-xs"
                    >
                      +{overflowCount}
                    </Badge>
                  )}
                </>
              )}
            </div>
            <ChevronsUpDown
              className="h-4 w-4 shrink-0 opacity-80"
              strokeWidth={2.5}
            />
          </div>
        </PopoverTrigger>

        {showClear && (
          <button
            type="button"
            aria-label="Clear all selections"
            onClick={() => updateValues([])}
            className="absolute right-9 top-1/2 -translate-y-1/2 rounded-sm p-0.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-3.5 w-3.5" strokeWidth={2.5} />
          </button>
        )}
      </div>

      <PopoverContent
        align="start"
        noShadow={noShadow}
        className={cn(
          "w-[--radix-popover-trigger-width] min-w-[220px] p-0",
          contentClassName
        )}
      >
        <Command noShadow className="border-0">
          <CommandInput placeholder={searchPlaceholder} />
          <CommandList id={listboxId}>
            <CommandEmpty>{emptyText}</CommandEmpty>
            {grouped.map(([groupName, groupItems], groupIndex) => (
              <React.Fragment key={groupName || "__default"}>
                {groupIndex > 0 && <CommandSeparator />}
                <CommandGroup heading={groupName || undefined}>
                  {groupItems.map((option) => {
                    const isSelected = selectedValues.includes(option.value);
                    return (
                      <CommandItem
                        key={option.value}
                        value={option.label}
                        keywords={[
                          option.value,
                          ...(option.description ? [option.description] : []),
                          ...(option.keywords ?? []),
                        ]}
                        disabled={option.disabled}
                        onSelect={() => toggleOption(option.value)}
                      >
                        {option.icon && (
                          <span className="shrink-0">{option.icon}</span>
                        )}
                        <span className="min-w-0 flex-1 truncate">
                          {option.label}
                        </span>
                        <span
                          className={cn(
                            "flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border-2 border-border",
                            isSelected
                              ? "bg-card text-foreground"
                              : "bg-transparent"
                          )}
                        >
                          {isSelected && (
                            <Check className="h-3 w-3" strokeWidth={3} />
                          )}
                        </span>
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              </React.Fragment>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
