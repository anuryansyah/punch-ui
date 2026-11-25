import * as React from "react";
import { cn } from "@/lib/utils";

export interface PunchLogoProps extends React.SVGProps<SVGSVGElement> {
  /** Use fixed brand colors (#ff8a00 / #ffe566) instead of live CSS theme variables */
  fixedColors?: boolean;
}

/**
 * Punch UI Stacked Offset "P" Neobrutalist SVG brand mark.
 * Automatically adapts to active theme presets, Custom Color Builder, and Dark Mode.
 */
export function PunchLogo({
  className,
  fixedColors = false,
  ...props
}: PunchLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn("h-5 w-5 shrink-0", className)}
      {...props}
    >
      <rect
        x="7"
        y="7"
        width="23"
        height="23"
        fill={fixedColors ? "#ffe566" : "var(--secondary)"}
        stroke={fixedColors ? "#000000" : "var(--border)"}
        strokeWidth="2.5"
      />
      <rect
        x="2"
        y="2"
        width="23"
        height="23"
        fill={fixedColors ? "#ff8a00" : "var(--primary)"}
        stroke={fixedColors ? "#000000" : "var(--border)"}
        strokeWidth="2.5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 6.5H19.5V15.5H11.5V20.5H7.5V6.5ZM11.5 9.75V12.25H15.75V9.75H11.5Z"
        fill={fixedColors ? "#000000" : "var(--primary-foreground)"}
      />
    </svg>
  );
}
