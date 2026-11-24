"use client";

import * as React from "react";
import { addDays } from "date-fns";
import type { DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import { DatePicker, DateRangePicker } from "@/components/ui/date-picker";
import { Label } from "@/components/ui/label";

/**
 * Overview demo
 */
export function DatePickerDemo() {
  return <DatePickerBasicDemo />;
}

/**
 * 1. Basic Date Picker
 */
export function DatePickerBasicDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="w-full max-w-xs space-y-2">
      <Label htmlFor="dp-basic">Launch Date</Label>
      <DatePicker
        id="dp-basic"
        value={date}
        onSelect={setDate}
        placeholder="Select launch date"
      />
    </div>
  );
}

/**
 * 2. Standalone Calendar
 */
export function DatePickerCalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return <Calendar mode="single" selected={date} onSelect={setDate} />;
}

/**
 * 3. Date Range Picker
 */
export function DatePickerRangeDemo() {
  const today = new Date();
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: today,
    to: addDays(today, 6),
  });

  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="dp-range">Sprint Window</Label>
      <DateRangePicker
        id="dp-range"
        value={range}
        onSelect={setRange}
        clearable
      />
    </div>
  );
}

/**
 * 4. Month & Year Dropdown
 */
export function DatePickerDropdownDemo() {
  const [dob, setDob] = React.useState<Date | undefined>(new Date(1998, 4, 15));

  return (
    <div className="w-full max-w-xs space-y-2">
      <Label htmlFor="dp-dob">Date of Birth</Label>
      <DatePicker
        id="dp-dob"
        value={dob}
        onSelect={setDob}
        captionLayout="dropdown"
        clearable
      />
    </div>
  );
}

/**
 * 5. Clearable, Presets & Disabled Dates
 */
export function DatePickerPresetsDemo() {
  const today = new Date();
  const [date, setDate] = React.useState<Date | undefined>(addDays(today, 1));

  return (
    <div className="w-full max-w-xs space-y-2">
      <Label htmlFor="dp-presets">Schedule Reminder</Label>
      <DatePicker
        id="dp-presets"
        value={date}
        onSelect={setDate}
        clearable
        disabledDays={{ before: today }}
        presets={[
          { label: "Today", date: today },
          { label: "Tomorrow", date: addDays(today, 1) },
          { label: "Next Week", date: addDays(today, 7) },
        ]}
      />
      <p className="font-mono text-[11px] font-bold text-muted-foreground">
        Past dates are disabled.
      </p>
    </div>
  );
}

/**
 * 6. Size
 */
export function DatePickerSizeDemo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3.5">
      <DatePicker triggerSize="sm" placeholder="Small (sm)" />
      <DatePicker triggerSize="default" placeholder="Default size" />
      <DatePicker triggerSize="lg" placeholder="Large (lg)" />
    </div>
  );
}

/**
 * 7. Validation, Disabled & No Shadow
 */
export function DatePickerStatesDemo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3.5">
      <DatePicker state="success" defaultValue={new Date()} />
      <DatePicker state="error" placeholder="Date is required..." />
      <DatePicker disabled placeholder="Disabled date picker" />
      <DatePicker noShadow defaultValue={new Date()} />
    </div>
  );
}
