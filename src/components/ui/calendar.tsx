"use client";

import * as React from "react";
import { DayPicker, type DropdownProps } from "react-day-picker";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  noShadow?: boolean;
};

function CalendarDropdown({
  value,
  onChange,
  options = [],
  "aria-label": ariaLabel,
}: DropdownProps) {
  const isYear = options.some((opt) => String(opt.value).length === 4);

  return (
    <Select
      value={value !== undefined ? String(value) : undefined}
      onValueChange={(nextValue) => {
        const syntheticEvent = {
          target: { value: nextValue },
          currentTarget: { value: nextValue },
        } as unknown as React.ChangeEvent<HTMLSelectElement>;
        onChange?.(syntheticEvent);
      }}
    >
      <SelectTrigger
        aria-label={ariaLabel}
        selectSize="sm"
        noShadow
        className={cn(
          "h-8 justify-between gap-1 px-2 font-mono text-xs font-bold",
          isYear ? "w-[76px]" : "w-[98px]"
        )}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="center" className="min-w-[84px]">
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={String(option.value)}
            disabled={option.disabled}
            className="py-1.5 pl-7 pr-2.5 font-mono text-xs"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

function CalendarChevron({ orientation }: { orientation?: string }) {
  if (orientation === "left") {
    return <ChevronLeft className="h-4 w-4" strokeWidth={2.5} />;
  }
  if (orientation === "down") {
    return <ChevronDown className="h-3.5 w-3.5" strokeWidth={2.5} />;
  }
  return <ChevronRight className="h-4 w-4" strokeWidth={2.5} />;
}

/**
 * Neobrutalist Calendar powered by react-day-picker.
 */
export function Calendar({
  className,
  classNames,
  components: customComponents,
  showOutsideDays = true,
  noShadow = false,
  ...rest
}: CalendarProps) {
  const calendarComponents = React.useMemo(
    () => ({
      Dropdown: CalendarDropdown,
      Chevron: CalendarChevron,
      ...customComponents,
    }),
    [customComponents]
  );

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "w-fit rounded-md border-2 border-border bg-card p-3 text-card-foreground",
        !noShadow && "shadow-brutal",
        className
      )}
      classNames={{
        months: "relative flex flex-col gap-4 sm:flex-row",
        month: "flex flex-col gap-3",
        month_caption:
          "relative flex h-8 items-center justify-center px-9 font-mono text-xs font-extrabold uppercase tracking-wider",
        caption_label: "flex items-center gap-1 text-xs font-extrabold",
        dropdowns: "flex items-center gap-1.5",
        dropdown_root:
          "relative inline-flex items-center rounded-sm border-2 border-border bg-card px-2 py-0.5 font-mono text-xs font-bold transition-colors hover:bg-secondary hover:text-secondary-foreground",
        dropdown:
          "absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0",
        nav: "pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between",
        button_previous: cn(
          "pointer-events-auto inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border-2 border-border bg-card text-card-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground",
          !noShadow && "shadow-brutal-sm"
        ),
        button_next: cn(
          "pointer-events-auto inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border-2 border-border bg-card text-card-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground",
          !noShadow && "shadow-brutal-sm"
        ),
        month_grid: "w-full border-collapse",
        weekdays: "flex",
        weekday:
          "w-9 pb-1.5 text-center font-mono text-[11px] font-extrabold uppercase text-muted-foreground",
        weeks: "flex flex-col gap-1",
        week: "flex w-full",
        day: "relative h-9 w-9 p-0 text-center text-xs focus-within:z-20",
        day_button:
          "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-sm border-2 border-transparent font-mono text-xs font-bold transition-colors hover:border-border hover:bg-muted focus-visible:outline-none",
        selected:
          "[&>button]:border-border [&>button]:bg-primary [&>button]:text-primary-foreground [&>button]:hover:bg-primary",
        today:
          "[&>button]:border-border [&>button]:bg-secondary [&>button]:text-secondary-foreground",
        outside: "text-muted-foreground opacity-45",
        disabled:
          "pointer-events-none text-muted-foreground opacity-35 [&>button]:cursor-not-allowed",
        range_start:
          "[&>button]:border-border [&>button]:bg-primary [&>button]:text-primary-foreground",
        range_end:
          "[&>button]:border-border [&>button]:bg-primary [&>button]:text-primary-foreground",
        range_middle:
          "bg-secondary text-secondary-foreground [&>button]:border-transparent [&>button]:bg-transparent [&>button]:text-secondary-foreground [&>button]:hover:bg-secondary",
        hidden: "invisible",
        ...classNames,
      }}
      components={calendarComponents}
      {...rest}
    />
  );
}
Calendar.displayName = "Calendar";
