"use client";

import React, { useEffect, useState } from "react";
import {
  Check,
  Copy,
  Moon,
  Palette,
  RotateCcw,
  SlidersHorizontal,
  Sun,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ColorPicker } from "@/components/ui/color-picker";
import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useLanguage } from "@/lib/i18n";

export interface ThemePreset {
  id: string;
  name: string;
  label: string;
  primary: string;
  secondary: string;
  background: string;
  card: string;
  primaryForeground: string;
}

export const THEME_PRESETS: ThemePreset[] = [
  {
    id: "tangerine",
    name: "Default Orange (Tangerine Punch)",
    label: "Tangerine",
    primary: "#ff8a00",
    secondary: "#ffe566",
    background: "#fffbf5",
    card: "#ffffff",
    primaryForeground: "#000000",
  },
  {
    id: "soft-blue",
    name: "Soft Blue",
    label: "Soft Blue",
    primary: "#3b82f6",
    secondary: "#bfdbfe",
    background: "#e2eaf2",
    card: "#f4f8fc",
    primaryForeground: "#ffffff",
  },
  {
    id: "cyber-yellow",
    name: "Cyber Yellow",
    label: "Cyber Yellow",
    primary: "#facc15",
    secondary: "#fef08a",
    background: "#fefdf5",
    card: "#ffffff",
    primaryForeground: "#000000",
  },
  {
    id: "deep-ink",
    name: "Deep Ink",
    label: "Deep Ink",
    primary: "#141923",
    secondary: "#a5b4fc",
    background: "#eef2f6",
    card: "#ffffff",
    primaryForeground: "#ffffff",
  },
  {
    id: "soft-pink",
    name: "Soft Pink",
    label: "Soft Pink",
    primary: "#f46b86",
    secondary: "#fbcfe8",
    background: "#fdf2f4",
    card: "#fff8f9",
    primaryForeground: "#ffffff",
  },
  {
    id: "crimson-red",
    name: "Crimson Red",
    label: "Crimson Red",
    primary: "#dc2626",
    secondary: "#fed7aa",
    background: "#fdf2ef",
    card: "#ffffff",
    primaryForeground: "#ffffff",
  },
];

export const RADIUS_OPTIONS = [
  { value: "0px", label: "0px (Sharp)" },
  { value: "4px", label: "4px (Crisp)" },
  { value: "8px", label: "8px (Smooth)" },
  { value: "12px", label: "12px (Playful)" },
];

type ColorTokenKey =
  | "primary"
  | "secondary"
  | "background"
  | "card"
  | "success"
  | "info"
  | "warning"
  | "destructive";

type CustomColorOverrides = Partial<Record<ColorTokenKey, string>>;

const COLOR_TOKENS: {
  key: ColorTokenKey;
  label: string;
  cssVar: string;
  fgCssVar?: string;
}[] = [
  {
    key: "primary",
    label: "Primary",
    cssVar: "--primary",
    fgCssVar: "--primary-foreground",
  },
  {
    key: "secondary",
    label: "Secondary",
    cssVar: "--secondary",
    fgCssVar: "--secondary-foreground",
  },
  {
    key: "background",
    label: "Background",
    cssVar: "--background",
    fgCssVar: "--foreground",
  },
  {
    key: "card",
    label: "Card",
    cssVar: "--card",
    fgCssVar: "--card-foreground",
  },
  {
    key: "success",
    label: "Success",
    cssVar: "--success",
    fgCssVar: "--success-foreground",
  },
  {
    key: "info",
    label: "Info",
    cssVar: "--info",
    fgCssVar: "--info-foreground",
  },
  {
    key: "warning",
    label: "Warning",
    cssVar: "--warning",
    fgCssVar: "--warning-foreground",
  },
  {
    key: "destructive",
    label: "Danger",
    cssVar: "--destructive",
    fgCssVar: "--destructive-foreground",
  },
];

const DEFAULT_SEMANTIC_COLORS = {
  success: "#10b981",
  info: "#06b6d4",
  warning: "#eab308",
  destructive: "#be123c",
} as const;

const STORAGE_KEYS = {
  theme: "neobrutal-theme",
  dark: "neobrutal-dark",
  radius: "neobrutal-radius",
  customColors: "neobrutal-custom-colors",
} as const;

function isValidHex(hex: string): boolean {
  return /^#[0-9a-fA-F]{6}$/.test(hex);
}

/**
 * Computes high-contrast foreground (#000000 or #ffffff) from a 6-digit hex color.
 */
function getContrastForeground(hex: string): "#000000" | "#ffffff" {
  if (!isValidHex(hex)) return "#000000";
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance >= 0.58 ? "#000000" : "#ffffff";
}

function applyCustomOverridesToDom(overrides: CustomColorOverrides) {
  const root = document.documentElement;
  COLOR_TOKENS.forEach(({ key, cssVar, fgCssVar }) => {
    const val = overrides[key];
    if (val && isValidHex(val)) {
      root.style.setProperty(cssVar, val);
      if (fgCssVar) {
        root.style.setProperty(fgCssVar, getContrastForeground(val));
      }
    } else {
      root.style.removeProperty(cssVar);
      if (fgCssVar) {
        root.style.removeProperty(fgCssVar);
      }
    }
  });
}

export interface ThemeCustomizerProps {
  /**
   * "inline" = Rendered as a full card on the Homepage
   * "drawer" = Rendered as a bottom-right floating button + slide-over drawer on Docs pages
   */
  variant?: "inline" | "drawer";
}

export function ThemeCustomizer({ variant = "inline" }: ThemeCustomizerProps) {
  const { dict } = useLanguage();
  const tc = dict.common.themeCustomizer;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [colorTab, setColorTab] = useState<"presets" | "custom">("presets");
  const [activeTheme, setActiveTheme] = useState<string>("tangerine");
  const [isDark, setIsDark] = useState<boolean>(false);
  const [radius, setRadius] = useState<string>("0px");
  const [customColors, setCustomColors] = useState<CustomColorOverrides>({});
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.theme) || "tangerine";
    const savedDark = localStorage.getItem(STORAGE_KEYS.dark) === "true";
    const savedRadius = localStorage.getItem(STORAGE_KEYS.radius) || "0px";
    let savedCustom: CustomColorOverrides = {};
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.customColors);
      if (raw) {
        savedCustom = JSON.parse(raw) as CustomColorOverrides;
      }
    } catch {
      savedCustom = {};
    }

    setActiveTheme(savedTheme);
    setIsDark(savedDark);
    setRadius(savedRadius);
    setCustomColors(savedCustom);

    const html = document.documentElement;
    html.setAttribute("data-theme", savedTheme);
    if (savedDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    html.style.setProperty("--radius", savedRadius);
    applyCustomOverridesToDom(savedCustom);
  }, []);

  useEffect(() => {
    if (!isOpen || variant !== "drawer") return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, variant]);

  const activePreset =
    THEME_PRESETS.find((p) => p.id === activeTheme) ?? THEME_PRESETS[0];

  const resolvedColors: Record<ColorTokenKey, string> = {
    primary: customColors.primary ?? activePreset.primary,
    secondary: customColors.secondary ?? activePreset.secondary,
    background: customColors.background ?? activePreset.background,
    card: customColors.card ?? activePreset.card,
    success: customColors.success ?? DEFAULT_SEMANTIC_COLORS.success,
    info: customColors.info ?? DEFAULT_SEMANTIC_COLORS.info,
    warning: customColors.warning ?? DEFAULT_SEMANTIC_COLORS.warning,
    destructive:
      customColors.destructive ?? DEFAULT_SEMANTIC_COLORS.destructive,
  };

  const customCount = Object.keys(customColors).length;

  const applyTheme = (themeId: string) => {
    setActiveTheme(themeId);
    setCustomColors({});
    localStorage.setItem(STORAGE_KEYS.theme, themeId);
    localStorage.removeItem(STORAGE_KEYS.customColors);
    document.documentElement.setAttribute("data-theme", themeId);
    applyCustomOverridesToDom({});
  };

  const applyCustomColor = (key: ColorTokenKey, value: string) => {
    const next: CustomColorOverrides = { ...customColors, [key]: value };
    setCustomColors(next);
    if (isValidHex(value)) {
      localStorage.setItem(STORAGE_KEYS.customColors, JSON.stringify(next));
      applyCustomOverridesToDom(next);
    }
  };

  const applyDark = (darkValue: boolean) => {
    setIsDark(darkValue);
    localStorage.setItem(STORAGE_KEYS.dark, String(darkValue));
    if (darkValue) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const applyRadius = (radiusValue: string) => {
    setRadius(radiusValue);
    localStorage.setItem(STORAGE_KEYS.radius, radiusValue);
    document.documentElement.style.setProperty("--radius", radiusValue);
  };

  const handleReset = () => {
    applyTheme("tangerine");
    applyDark(false);
    applyRadius("0px");
  };

  const handleCopyCSS = async () => {
    const c = resolvedColors;
    const themeTitle =
      customCount > 0 ? `${activePreset.name} (Custom)` : activePreset.name;
    const cssText = `:root {
  /* Theme: ${themeTitle} */
  --background: ${c.background};
  --foreground: ${getContrastForeground(c.background)};
  --card: ${c.card};
  --card-foreground: ${getContrastForeground(c.card)};
  --primary: ${c.primary};
  --primary-foreground: ${getContrastForeground(c.primary)};
  --secondary: ${c.secondary};
  --secondary-foreground: ${getContrastForeground(c.secondary)};
  --success: ${c.success};
  --success-foreground: ${getContrastForeground(c.success)};
  --info: ${c.info};
  --info-foreground: ${getContrastForeground(c.info)};
  --warning: ${c.warning};
  --warning-foreground: ${getContrastForeground(c.warning)};
  --destructive: ${c.destructive};
  --destructive-foreground: ${getContrastForeground(c.destructive)};
  --border: #000000;
  --radius: ${radius};
  --shadow: 4px 4px 0px 0px var(--border);
  --shadow-sm: 2px 2px 0px 0px var(--border);
  --shadow-lg: 6px 6px 0px 0px var(--border);
}`;
    await navigator.clipboard.writeText(cssText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderColorSection = (layout: "inline" | "drawer") => (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Label className="block">{tc.step1Presets}</Label>
          {customCount > 0 && (
            <Badge variant="secondary" size="sm" noShadow className="font-mono">
              {customCount} custom
            </Badge>
          )}
        </div>

        <ToggleGroup
          type="single"
          variant="outline"
          size="sm"
          noShadow
          value={colorTab}
          onValueChange={(value) => {
            if (value === "presets" || value === "custom") {
              setColorTab(value);
            }
          }}
          aria-label="Color editor mode"
        >
          <ToggleGroupItem value="presets" className="text-xs">
            <Palette className="h-3.5 w-3.5" strokeWidth={2.5} />
            {tc.presetsTab}
          </ToggleGroupItem>
          <ToggleGroupItem value="custom" className="text-xs">
            <SlidersHorizontal className="h-3.5 w-3.5" strokeWidth={2.5} />
            {tc.customTab}
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {colorTab === "presets" ? (
        <ToggleGroup
          type="single"
          value={customCount === 0 ? activeTheme : ""}
          onValueChange={(value) => {
            if (value) applyTheme(value);
          }}
          aria-label={tc.step1Presets}
          className={
            layout === "inline"
              ? "grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6"
              : "grid grid-cols-2 gap-2.5"
          }
        >
          {THEME_PRESETS.map((preset) => (
            <ToggleGroupItem
              key={preset.id}
              value={preset.id}
              className="justify-start gap-2.5 px-2.5 text-xs"
            >
              <span
                className="h-5 w-5 shrink-0 rounded-sm border-2 border-border"
                style={{ backgroundColor: preset.primary }}
              />
              <span className="truncate">{preset.label}</span>
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      ) : (
        <div className="space-y-2.5">
          <p className="text-xs text-muted-foreground">{tc.customHint}</p>
          <div
            className={
              layout === "inline"
                ? "grid grid-cols-2 gap-2.5 sm:grid-cols-4"
                : "grid grid-cols-2 gap-2.5"
            }
          >
            {COLOR_TOKENS.map(({ key, label }) => {
              const currentHex = resolvedColors[key];

              return (
                <div
                  key={key}
                  className="flex flex-col gap-1.5 rounded-md border-2 border-border bg-card p-2.5 shadow-brutal-sm"
                >
                  <span className="truncate text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                    {label}
                  </span>
                  <ColorPicker
                    size="sm"
                    noShadow
                    value={currentHex}
                    onChange={(hex) => applyCustomColor(key, hex)}
                    aria-label={`Pick ${label} color`}
                    className="w-full"
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );

  // Mode 1: INLINE (Untuk Homepage)
  if (variant === "inline") {
    return (
      <Card className="space-y-6 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-border pb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground shadow-brutal-sm">
              <Palette className="h-5 w-5" strokeWidth={2.5} />
            </div>
            <h2 className="text-lg font-bold leading-tight">{tc.title}</h2>
          </div>

          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleReset}
            >
              <RotateCcw className="h-3.5 w-3.5" strokeWidth={2.5} />
              {tc.reset}
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={handleCopyCSS}
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  {tc.copiedCss}
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" strokeWidth={2.5} />
                  {tc.copyCss}
                </>
              )}
            </Button>
          </div>
        </div>

        {/* 1. Preset Warna & Custom Color Builder */}
        {renderColorSection("inline")}

        {/* 2. Border Radius & Mode */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2.5">
            <Label className="block">
              {tc.step2Radius} (<code className="font-mono">{radius}</code>)
            </Label>
            <ToggleGroup
              type="single"
              size="sm"
              value={radius}
              onValueChange={(value) => {
                if (value) applyRadius(value);
              }}
              aria-label={tc.step2Radius}
              className="grid grid-cols-2 gap-2 sm:grid-cols-4"
            >
              {RADIUS_OPTIONS.map((opt) => (
                <ToggleGroupItem
                  key={opt.value}
                  value={opt.value}
                  className="font-mono text-xs"
                >
                  {opt.label}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          <div className="space-y-2.5">
            <Label className="block">{tc.step3Mode}</Label>
            <ToggleGroup
              type="single"
              size="sm"
              value={isDark ? "dark" : "light"}
              onValueChange={(value) => {
                if (value === "light") applyDark(false);
                if (value === "dark") applyDark(true);
              }}
              aria-label={tc.step3Mode}
              className="grid grid-cols-2 gap-2.5"
            >
              <ToggleGroupItem value="light">
                <Sun className="h-4 w-4" strokeWidth={2.5} />
                {tc.lightMode}
              </ToggleGroupItem>
              <ToggleGroupItem value="dark">
                <Moon className="h-4 w-4" strokeWidth={2.5} />
                {tc.darkMode}
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </Card>
    );
  }

  // Mode 2: DRAWER (Untuk Halaman Docs)
  return (
    <>
      {/* Floating Trigger Button Icon di Kanan Bawah */}
      <Button
        type="button"
        size="icon"
        onClick={() => setIsOpen(true)}
        aria-label={tc.title}
        className="fixed bottom-6 right-6 z-40 h-11 w-11 shadow-brutal"
      >
        <Palette className="h-5 w-5" strokeWidth={2.5} />
      </Button>

      {/* Backdrop & Slide-over Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 transition-opacity"
          />

          <aside
            role="dialog"
            aria-modal="true"
            aria-label={tc.title}
            className="relative z-10 flex h-full w-full max-w-md flex-col justify-between border-l-2 border-border bg-card text-card-foreground shadow-brutal-lg"
          >
            {/* Header Drawer */}
            <div className="flex items-center justify-between gap-3 border-b-2 border-border bg-muted/50 p-5">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground shadow-brutal-sm">
                  <Palette className="h-5 w-5" strokeWidth={2.5} />
                </div>
                <h2 className="text-base font-bold leading-tight">
                  {tc.title}
                </h2>
              </div>

              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => setIsOpen(false)}
                aria-label="Close drawer"
                className="h-8 w-8 hover:bg-destructive hover:text-destructive-foreground"
              >
                <X className="h-4 w-4" strokeWidth={2.5} />
              </Button>
            </div>

            {/* Isi Pengaturan Drawer */}
            <div className="flex-1 space-y-6 overflow-y-auto p-5">
              {/* 1. Preset Warna & Custom Color Builder */}
              {renderColorSection("drawer")}

              {/* 2. Border Radius */}
              <div className="space-y-2.5">
                <Label className="block">
                  {tc.step2Radius} (<code className="font-mono">{radius}</code>)
                </Label>
                <ToggleGroup
                  type="single"
                  value={radius}
                  onValueChange={(value) => {
                    if (value) applyRadius(value);
                  }}
                  aria-label={tc.step2Radius}
                  className="grid grid-cols-2 gap-2.5"
                >
                  {RADIUS_OPTIONS.map((opt) => (
                    <ToggleGroupItem
                      key={opt.value}
                      value={opt.value}
                      className="font-mono text-xs"
                    >
                      {opt.label}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </div>

              {/* 3. Mode Tampilan (Light / Dark) */}
              <div className="space-y-2.5">
                <Label className="block">{tc.step3Mode}</Label>
                <ToggleGroup
                  type="single"
                  value={isDark ? "dark" : "light"}
                  onValueChange={(value) => {
                    if (value === "light") applyDark(false);
                    if (value === "dark") applyDark(true);
                  }}
                  aria-label={tc.step3Mode}
                  className="grid grid-cols-2 gap-2.5"
                >
                  <ToggleGroupItem value="light">
                    <Sun className="h-4 w-4" strokeWidth={2.5} />
                    {tc.lightMode}
                  </ToggleGroupItem>
                  <ToggleGroupItem value="dark">
                    <Moon className="h-4 w-4" strokeWidth={2.5} />
                    {tc.darkMode}
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>

            {/* Footer Drawer (Reset & Copy CSS) */}
            <div className="flex items-center gap-3 border-t-2 border-border bg-muted/50 p-5">
              <Button
                type="button"
                variant="outline"
                onClick={handleReset}
                className="flex-1"
              >
                <RotateCcw className="h-3.5 w-3.5" strokeWidth={2.5} />
                {tc.reset}
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={handleCopyCSS}
                className="flex-1"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                    {tc.copiedCss}
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" strokeWidth={2.5} />
                    {tc.copyCss}
                  </>
                )}
              </Button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
