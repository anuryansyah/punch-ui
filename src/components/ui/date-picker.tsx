"use client";

import * as React from "react";
import { format } from "date-fns";
import type { DateRange, Matcher } from "react-day-picker";
import { cva, type VariantProps } from "class-variance-authority";
import { Calendar as CalendarIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar, type CalendarProps } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const datePickerTriggerVariants = cva(
  [
    "flex w-full cursor-pointer items-center justify-between gap-2 rounded-md border-2 bg-card font-semibold text-card-foreground outline-none transition-[box-shadow,border-color]",
    "focus-visible:outline-none",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      triggerSize: {
        sm: "h-8 px-2.5 py-1 text-xs",
        default: "h-10 px-3.5 py-2 text-sm",
        lg: "h-12 px-4 py-2.5 text-base",
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

export interface DatePickerPreset {
  label: string;
  date: Date;
}

export interface DatePickerProps extends VariantProps<
  typeof datePickerTriggerVariants
> {
  value?: Date;
  defaultValue?: Date;
  onSelect?: (date: Date | undefined) => void;
  placeholder?: string;
  dateFormat?: string;
  disabled?: boolean;
  disabledDays?: Matcher | Matcher[];
  captionLayout?: CalendarProps["captionLayout"];
  presets?: DatePickerPreset[];
  clearable?: boolean;
  noShadow?: boolean;
  id?: string;
  className?: string;
  "aria-label"?: string;
}

/**
 * Neobrutalist DatePicker combining Popover and Calendar.
 */
export function DatePicker({
  value: valueProp,
  defaultValue,
  onSelect,
  placeholder = "Pick a date",
  dateFormat = "PPP",
  triggerSize,
  state,
  noShadow = false,
  clearable = false,
  disabled = false,
  disabledDays,
  captionLayout,
  presets,
  id,
  className,
  "aria-label": ariaLabel,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);
  const [internalDate, setInternalDate] = React.useState<Date | undefined>(
    defaultValue
  );

  const selectedDate = valueProp !== undefined ? valueProp : internalDate;
  const showClear = Boolean(clearable && selectedDate && !disabled);

  function handleSelect(nextDate: Date | undefined) {
    if (valueProp === undefined) {
      setInternalDate(nextDate);
    }
    onSelect?.(nextDate);
    if (nextDate) {
      setOpen(false);
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <div className={cn("relative w-full", className)}>
        <PopoverTrigger asChild>
          <button
            id={id}
            type="button"
            disabled={disabled}
            aria-label={ariaLabel}
            aria-invalid={state === "error" || undefined}
            className={cn(
              datePickerTriggerVariants({ triggerSize, state, noShadow }),
              "text-left"
            )}
          >
            <span
              className={cn(
                "truncate",
                showClear && "pr-7",
                !selectedDate && "text-muted-foreground"
              )}
            >
              {selectedDate ? format(selectedDate, dateFormat) : placeholder}
            </span>
            <CalendarIcon
              className="h-4 w-4 shrink-0 opacity-80"
              strokeWidth={2.5}
            />
          </button>
        </PopoverTrigger>

        {showClear && (
          <button
            type="button"
            aria-label="Clear date"
            onClick={() => handleSelect(undefined)}
            className="absolute right-9 top-1/2 -translate-y-1/2 rounded-sm p-0.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-3.5 w-3.5" strokeWidth={2.5} />
          </button>
        )}
      </div>

      <PopoverContent align="start" noShadow={noShadow} className="w-auto p-0">
        {presets && presets.length > 0 && (
          <div className="flex flex-wrap gap-1.5 border-b-2 border-border p-2.5">
            {presets.map((preset) => (
              <Button
                key={preset.label}
                type="button"
                size="sm"
                variant="outline"
                noShadow
                onClick={() => handleSelect(preset.date)}
                className="h-7 px-2 font-mono text-[11px]"
              >
                {preset.label}
              </Button>
            ))}
          </div>
        )}
        <Calendar
          mode="single"
          defaultMonth={selectedDate}
          selected={selectedDate}
          onSelect={handleSelect}
          disabled={disabledDays}
          captionLayout={captionLayout}
          noShadow
          className="border-0 shadow-none"
        />
      </PopoverContent>
    </Popover>
  );
}

export interface DateRangePickerProps extends VariantProps<
  typeof datePickerTriggerVariants
> {
  value?: DateRange;
  defaultValue?: DateRange;
  onSelect?: (range: DateRange | undefined) => void;
  placeholder?: string;
  numberOfMonths?: number;
  disabled?: boolean;
  disabledDays?: Matcher | Matcher[];
  clearable?: boolean;
  noShadow?: boolean;
  id?: string;
  className?: string;
  "aria-label"?: string;
}

/**
 * Neobrutalist DateRangePicker for selecting a start and end date.
 */
export function DateRangePicker({
  value: valueProp,
  defaultValue,
  onSelect,
  placeholder = "Pick a date range",
  numberOfMonths = 2,
  triggerSize,
  state,
  noShadow = false,
  clearable = false,
  disabled = false,
  disabledDays,
  id,
  className,
  "aria-label": ariaLabel,
}: DateRangePickerProps) {
  const [open, setOpen] = React.useState(false);
  const [internalRange, setInternalRange] = React.useState<
    DateRange | undefined
  >(defaultValue);

  const selectedRange = valueProp !== undefined ? valueProp : internalRange;
  const showClear = Boolean(clearable && selectedRange?.from && !disabled);

  function handleSelect(nextRange: DateRange | undefined) {
    if (valueProp === undefined) {
      setInternalRange(nextRange);
    }
    onSelect?.(nextRange);
  }

  const label = selectedRange?.from
    ? selectedRange.to
      ? `${format(selectedRange.from, "LLL dd, y")} – ${format(selectedRange.to, "LLL dd, y")}`
      : format(selectedRange.from, "LLL dd, y")
    : placeholder;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <div className={cn("relative w-full", className)}>
        <PopoverTrigger asChild>
          <button
            id={id}
            type="button"
            disabled={disabled}
            aria-label={ariaLabel}
            aria-invalid={state === "error" || undefined}
            className={cn(
              datePickerTriggerVariants({ triggerSize, state, noShadow }),
              "text-left"
            )}
          >
            <span
              className={cn(
                "truncate",
                showClear && "pr-7",
                !selectedRange?.from && "text-muted-foreground"
              )}
            >
              {label}
            </span>
            <CalendarIcon
              className="h-4 w-4 shrink-0 opacity-80"
              strokeWidth={2.5}
            />
          </button>
        </PopoverTrigger>

        {showClear && (
          <button
            type="button"
            aria-label="Clear date range"
            onClick={() => handleSelect(undefined)}
            className="absolute right-9 top-1/2 -translate-y-1/2 rounded-sm p-0.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-3.5 w-3.5" strokeWidth={2.5} />
          </button>
        )}
      </div>

      <PopoverContent align="start" noShadow={noShadow} className="w-auto p-0">
        <Calendar
          mode="range"
          defaultMonth={selectedRange?.from}
          selected={selectedRange}
          onSelect={handleSelect}
          numberOfMonths={numberOfMonths}
          disabled={disabledDays}
          noShadow
          className="border-0 shadow-none"
        />
      </PopoverContent>
    </Popover>
  );
}
