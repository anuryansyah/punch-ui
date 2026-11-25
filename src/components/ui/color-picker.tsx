"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Check, Copy, Pipette } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const DEFAULT_COLOR_PRESETS = [
  "#ff8a00",
  "#facc15",
  "#10b981",
  "#06b6d4",
  "#3b82f6",
  "#6366f1",
  "#a855f7",
  "#f46b86",
  "#dc2626",
  "#141923",
  "#f5efe6",
  "#ffffff",
];

interface HsvColor {
  h: number; // 0..360
  s: number; // 0..100
  v: number; // 0..100
}

function clamp(n: number, min: number, max: number) {
  return Math.min(Math.max(n, min), max);
}

function isValidHex(hex: string): boolean {
  return /^#[0-9a-fA-F]{6}$/.test(hex);
}

function normalizeHex(input: string): string | null {
  const cleaned = input.trim().replace(/^#/, "");
  if (/^[0-9a-fA-F]{3}$/.test(cleaned)) {
    const expanded = cleaned
      .split("")
      .map((c) => c + c)
      .join("");
    return `#${expanded.toLowerCase()}`;
  }
  if (/^[0-9a-fA-F]{6}$/.test(cleaned)) {
    return `#${cleaned.toLowerCase()}`;
  }
  return null;
}

function hexToHsv(hex: string): HsvColor {
  const normalized = normalizeHex(hex) ?? "#ff8a00";
  const r = parseInt(normalized.slice(1, 3), 16) / 255;
  const g = parseInt(normalized.slice(3, 5), 16) / 255;
  const b = parseInt(normalized.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;

  let h = 0;
  if (d !== 0) {
    if (max === r) h = ((g - b) / d) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h = Math.round(h * 60);
    if (h < 0) h += 360;
  }

  const s = max === 0 ? 0 : Math.round((d / max) * 100);
  const v = Math.round(max * 100);
  return { h, s, v };
}

function hsvToHex({ h, s, v }: HsvColor): string {
  const sNorm = clamp(s, 0, 100) / 100;
  const vNorm = clamp(v, 0, 100) / 100;
  const c = vNorm * sNorm;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = vNorm - c;

  let r = 0;
  let g = 0;
  let b = 0;
  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];

  const toHex = (val: number) =>
    Math.round((val + m) * 255)
      .toString(16)
      .padStart(2, "0");

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

const colorPickerTriggerVariants = cva(
  [
    "inline-flex cursor-pointer items-center gap-2 rounded-md border-2 border-border bg-card font-mono font-bold text-card-foreground transition-all",
    "hover:bg-muted/60",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "h-8 px-2 text-xs",
        default: "h-10 px-2.5 text-xs",
        lg: "h-12 px-3 text-sm",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export interface ColorPickerProps extends VariantProps<
  typeof colorPickerTriggerVariants
> {
  /** Controlled 6-digit hex color (e.g. "#ff8a00") */
  value?: string;
  /** Uncontrolled initial hex color */
  defaultValue?: string;
  /** Callback fired with the updated lowercase hex color */
  onChange?: (hex: string) => void;
  /** Preset swatch colors displayed inside the popover (pass [] to hide) */
  presets?: string[];
  /** Show hex label beside the swatch inside the trigger button */
  showHex?: boolean;
  /** Disables opening the picker */
  disabled?: boolean;
  /** Removes hard Neobrutalist shadow on the trigger */
  noShadow?: boolean;
  /** Highlights trigger with destructive error border & shadow */
  error?: boolean;
  /** Popover horizontal alignment */
  align?: "start" | "center" | "end";
  className?: string;
  "aria-label"?: string;
}

interface EyeDropperResult {
  sRGBHex: string;
}

interface EyeDropperConstructor {
  new (): { open: () => Promise<EyeDropperResult> };
}

/**
 * Zero-dependency Neobrutalist Color Picker powered by Punch UI Popover.
 * Features a 2D saturation/brightness canvas, hue slider, preset swatches,
 * hex input, copy button, and optional native EyeDropper support.
 */
export function ColorPicker({
  value,
  defaultValue = "#ff8a00",
  onChange,
  presets = DEFAULT_COLOR_PRESETS,
  size = "default",
  showHex = true,
  disabled = false,
  noShadow = false,
  error = false,
  align = "start",
  className,
  "aria-label": ariaLabel = "Pick a color",
}: ColorPickerProps) {
  const [internalHex, setInternalHex] = React.useState<string>(
    normalizeHex(defaultValue) ?? "#ff8a00"
  );
  const currentHex =
    value !== undefined ? (normalizeHex(value) ?? internalHex) : internalHex;

  const [hsv, setHsv] = React.useState<HsvColor>(() => hexToHsv(currentHex));
  const [hexDraft, setHexDraft] = React.useState<string>(currentHex);
  const [copied, setCopied] = React.useState(false);
  const [hasEyeDropper, setHasEyeDropper] = React.useState(false);

  const svRef = React.useRef<HTMLDivElement>(null);
  const hueRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setHasEyeDropper(typeof window !== "undefined" && "EyeDropper" in window);
  }, []);

  // Keep local HSV & draft synced when controlled value changes externally
  React.useEffect(() => {
    if (value === undefined) return;
    const norm = normalizeHex(value);
    if (norm && norm !== hsvToHex(hsv)) {
      setHsv((prev) => {
        const next = hexToHsv(norm);
        // Preserve hue when color is achromatic (s === 0 or v === 0)
        return next.s === 0 || next.v === 0 ? { ...next, h: prev.h } : next;
      });
    }
    setHexDraft(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const commitHex = React.useCallback(
    (nextHex: string, nextHsv?: HsvColor) => {
      if (value === undefined) {
        setInternalHex(nextHex);
      }
      if (nextHsv) {
        setHsv(nextHsv);
      }
      setHexDraft(nextHex);
      onChange?.(nextHex);
    },
    [onChange, value]
  );

  const updateSvFromPointer = (clientX: number, clientY: number) => {
    const rect = svRef.current?.getBoundingClientRect();
    if (!rect) return;
    const s = Math.round(clamp((clientX - rect.left) / rect.width, 0, 1) * 100);
    const v = Math.round(
      (1 - clamp((clientY - rect.top) / rect.height, 0, 1)) * 100
    );
    const nextHsv = { h: hsv.h, s, v };
    commitHex(hsvToHex(nextHsv), nextHsv);
  };

  const updateHueFromPointer = (clientX: number) => {
    const rect = hueRef.current?.getBoundingClientRect();
    if (!rect) return;
    const h = Math.round(clamp((clientX - rect.left) / rect.width, 0, 1) * 360);
    const nextHsv = { ...hsv, h: h === 360 ? 0 : h };
    commitHex(hsvToHex(nextHsv), nextHsv);
  };

  const handleSvPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    updateSvFromPointer(e.clientX, e.clientY);
  };

  const handleSvPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.buttons !== 1) return;
    updateSvFromPointer(e.clientX, e.clientY);
  };

  const handleHuePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    updateHueFromPointer(e.clientX);
  };

  const handleHuePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.buttons !== 1) return;
    updateHueFromPointer(e.clientX);
  };

  const handleHexInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setHexDraft(raw);
    const norm = normalizeHex(raw);
    if (norm && isValidHex(norm)) {
      commitHex(norm, hexToHsv(norm));
    }
  };

  const handleHexInputBlur = () => {
    const norm = normalizeHex(hexDraft);
    if (!norm) {
      setHexDraft(currentHex);
    } else {
      setHexDraft(norm);
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(currentHex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleEyeDropper = async () => {
    const EyeDropperApi = (
      window as unknown as { EyeDropper?: EyeDropperConstructor }
    ).EyeDropper;
    if (!EyeDropperApi) return;
    try {
      const result = await new EyeDropperApi().open();
      const norm = normalizeHex(result.sRGBHex);
      if (norm) {
        commitHex(norm, hexToHsv(norm));
      }
    } catch {
      // User cancelled eyedropper
    }
  };

  const swatchSizeClass =
    size === "sm" ? "h-4 w-4" : size === "lg" ? "h-6 w-6" : "h-5 w-5";

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          disabled={disabled}
          aria-label={ariaLabel}
          className={cn(
            colorPickerTriggerVariants({ size }),
            !showHex && "px-1.5",
            error && "border-destructive",
            !noShadow &&
              !disabled &&
              (error ? "shadow-brutal-error-sm" : "shadow-brutal-sm"),
            className
          )}
        >
          <span
            className={cn(
              "shrink-0 rounded-sm border-2 border-border",
              swatchSizeClass
            )}
            style={{ backgroundColor: currentHex }}
          />
          {showHex && <span className="uppercase">{currentHex}</span>}
        </button>
      </PopoverTrigger>

      <PopoverContent align={align} className="w-64 space-y-3 p-3">
        {/* 2D Saturation / Brightness Canvas */}
        <div
          ref={svRef}
          onPointerDown={handleSvPointerDown}
          onPointerMove={handleSvPointerMove}
          role="slider"
          aria-label="Saturation and brightness"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={hsv.s}
          aria-valuetext={`Saturation ${hsv.s}%, Brightness ${hsv.v}%`}
          tabIndex={0}
          className="relative h-36 w-full cursor-crosshair touch-none select-none overflow-hidden rounded-sm border-2 border-border"
          style={{
            backgroundColor: `hsl(${hsv.h}, 100%, 50%)`,
            backgroundImage:
              "linear-gradient(to top, #000000, transparent), linear-gradient(to right, #ffffff, transparent)",
          }}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-sm border-2 border-black bg-white shadow-[0_0_0_1px_#ffffff]"
            style={{
              left: `${hsv.s}%`,
              top: `${100 - hsv.v}%`,
            }}
          />
        </div>

        {/* Hue Rainbow Slider */}
        <div
          ref={hueRef}
          onPointerDown={handleHuePointerDown}
          onPointerMove={handleHuePointerMove}
          role="slider"
          aria-label="Hue"
          aria-valuemin={0}
          aria-valuemax={360}
          aria-valuenow={hsv.h}
          tabIndex={0}
          className="relative h-4 w-full cursor-ew-resize touch-none select-none rounded-sm border-2 border-border"
          style={{
            background:
              "linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)",
          }}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 h-5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-sm border-2 border-black bg-white"
            style={{ left: `${(hsv.h / 360) * 100}%` }}
          />
        </div>

        {/* Hex Input + Actions */}
        <div className="flex items-center gap-1.5">
          <div
            className="h-8 w-8 shrink-0 rounded-sm border-2 border-border"
            style={{ backgroundColor: currentHex }}
          />
          <Input
            type="text"
            noShadow
            value={hexDraft}
            onChange={handleHexInputChange}
            onBlur={handleHexInputBlur}
            spellCheck={false}
            aria-label="Hex color value"
            className="h-8 flex-1 px-2 font-mono text-xs uppercase"
          />
          {hasEyeDropper && (
            <Button
              type="button"
              variant="outline"
              size="icon"
              noShadow
              onClick={handleEyeDropper}
              aria-label="Pick color from screen"
              title="Eyedropper"
              className="h-8 w-8 shrink-0"
            >
              <Pipette className="h-3.5 w-3.5" strokeWidth={2.5} />
            </Button>
          )}
          <Button
            type="button"
            variant="secondary"
            size="icon"
            noShadow
            onClick={handleCopy}
            aria-label={copied ? "Copied hex" : "Copy hex"}
            title={copied ? "Copied!" : "Copy hex"}
            className="h-8 w-8 shrink-0"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
            ) : (
              <Copy className="h-3.5 w-3.5" strokeWidth={2.5} />
            )}
          </Button>
        </div>

        {/* Preset Swatches */}
        {presets.length > 0 && (
          <div className="grid grid-cols-6 gap-1.5 border-t-2 border-border pt-2.5">
            {presets.map((preset) => {
              const normPreset = normalizeHex(preset) ?? preset;
              const isSelected = currentHex === normPreset;
              return (
                <button
                  key={preset}
                  type="button"
                  onClick={() => commitHex(normPreset, hexToHsv(normPreset))}
                  aria-label={`Select color ${normPreset}`}
                  title={normPreset}
                  className={cn(
                    "relative h-7 w-full cursor-pointer rounded-sm border-2 border-border transition-transform hover:scale-105",
                    isSelected && "ring-2 ring-ring ring-offset-1"
                  )}
                  style={{ backgroundColor: normPreset }}
                />
              );
            })}
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
