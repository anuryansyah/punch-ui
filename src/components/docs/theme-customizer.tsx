"use client";

import React, { useEffect, useState } from "react";
import { Check, Copy, Moon, Palette, RotateCcw, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
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
    secondary: "#fde047",
    background: "#fef9c3",
    card: "#fefce8",
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
    secondary: "#fce7f3",
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

const STORAGE_KEYS = {
  theme: "neobrutal-theme",
  dark: "neobrutal-dark",
  radius: "neobrutal-radius",
} as const;

export interface ThemeCustomizerProps {
  /**
   * "inline" = Ditampilkan sebagai kartu penuh di halaman utama (Homepage)
   * "drawer" = Ditampilkan sebagai tombol mengambang kanan bawah + slide-over drawer di halaman Docs
   */
  variant?: "inline" | "drawer";
}

export function ThemeCustomizer({ variant = "inline" }: ThemeCustomizerProps) {
  const { dict } = useLanguage();
  const tc = dict.common.themeCustomizer;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeTheme, setActiveTheme] = useState<string>("tangerine");
  const [isDark, setIsDark] = useState<boolean>(false);
  const [radius, setRadius] = useState<string>("0px");
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.theme) || "tangerine";
    const savedDark = localStorage.getItem(STORAGE_KEYS.dark) === "true";
    const savedRadius = localStorage.getItem(STORAGE_KEYS.radius) || "0px";

    setActiveTheme(savedTheme);
    setIsDark(savedDark);
    setRadius(savedRadius);

    const html = document.documentElement;
    html.setAttribute("data-theme", savedTheme);
    if (savedDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    html.style.setProperty("--radius", savedRadius);
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

  const applyTheme = (themeId: string) => {
    setActiveTheme(themeId);
    localStorage.setItem(STORAGE_KEYS.theme, themeId);
    document.documentElement.setAttribute("data-theme", themeId);
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
    const preset =
      THEME_PRESETS.find((p) => p.id === activeTheme) ?? THEME_PRESETS[0];
    const cssText = `:root {
  /* Theme: ${preset.name} */
  --background: ${preset.background};
  --foreground: #000000;
  --card: ${preset.card};
  --card-foreground: #000000;
  --primary: ${preset.primary};
  --primary-foreground: ${preset.primaryForeground};
  --secondary: ${preset.secondary};
  --secondary-foreground: #000000;
  --success: #10b981;
  --success-foreground: #000000;
  --info: #06b6d4;
  --info-foreground: #000000;
  --warning: #eab308;
  --warning-foreground: #000000;
  --destructive: #be123c;
  --destructive-foreground: #ffffff;
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

        {/* 1. Preset Warna */}
        <div className="space-y-2.5">
          <Label className="block">{tc.step1Presets}</Label>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
            {THEME_PRESETS.map((preset) => {
              const isSelected = activeTheme === preset.id;
              return (
                <Button
                  key={preset.id}
                  type="button"
                  variant={isSelected ? "default" : "outline"}
                  noShadow={isSelected}
                  onClick={() => applyTheme(preset.id)}
                  className={`justify-start gap-2.5 px-2.5 py-2.5 text-xs ${
                    isSelected ? "translate-x-[2px] translate-y-[2px]" : ""
                  }`}
                >
                  <span
                    className="h-5 w-5 shrink-0 rounded-sm border-2 border-border"
                    style={{ backgroundColor: preset.primary }}
                  />
                  <span className="truncate">{preset.label}</span>
                </Button>
              );
            })}
          </div>
        </div>

        {/* 2. Border Radius & Mode */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2.5">
            <Label className="block">
              {tc.step2Radius} (<code className="font-mono">{radius}</code>)
            </Label>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {RADIUS_OPTIONS.map((opt) => {
                const isSelected = radius === opt.value;
                return (
                  <Button
                    key={opt.value}
                    type="button"
                    size="sm"
                    variant={isSelected ? "default" : "outline"}
                    noShadow={isSelected}
                    onClick={() => applyRadius(opt.value)}
                    className={`font-mono text-xs ${
                      isSelected ? "translate-x-[2px] translate-y-[2px]" : ""
                    }`}
                  >
                    {opt.label}
                  </Button>
                );
              })}
            </div>
          </div>

          <div className="space-y-2.5">
            <Label className="block">{tc.step3Mode}</Label>
            <div className="grid grid-cols-2 gap-2.5">
              <Button
                type="button"
                size="sm"
                variant={!isDark ? "default" : "outline"}
                noShadow={!isDark}
                onClick={() => applyDark(false)}
                className={!isDark ? "translate-x-[2px] translate-y-[2px]" : ""}
              >
                <Sun className="h-4 w-4" strokeWidth={2.5} />
                {tc.lightMode}
              </Button>
              <Button
                type="button"
                size="sm"
                variant={isDark ? "default" : "outline"}
                noShadow={isDark}
                onClick={() => applyDark(true)}
                className={isDark ? "translate-x-[2px] translate-y-[2px]" : ""}
              >
                <Moon className="h-4 w-4" strokeWidth={2.5} />
                {tc.darkMode}
              </Button>
            </div>
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
              {/* 1. Preset Warna */}
              <div className="space-y-2.5">
                <Label className="block">{tc.step1Presets}</Label>
                <div className="grid grid-cols-2 gap-2.5">
                  {THEME_PRESETS.map((preset) => {
                    const isSelected = activeTheme === preset.id;
                    return (
                      <Button
                        key={preset.id}
                        type="button"
                        variant={isSelected ? "default" : "outline"}
                        noShadow={isSelected}
                        onClick={() => applyTheme(preset.id)}
                        className={`justify-start gap-2.5 px-2.5 py-2.5 text-xs ${
                          isSelected
                            ? "translate-x-[2px] translate-y-[2px]"
                            : ""
                        }`}
                      >
                        <span
                          className="h-5 w-5 shrink-0 rounded-sm border-2 border-border"
                          style={{ backgroundColor: preset.primary }}
                        />
                        <span className="truncate">{preset.label}</span>
                      </Button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Border Radius */}
              <div className="space-y-2.5">
                <Label className="block">
                  {tc.step2Radius} (<code className="font-mono">{radius}</code>)
                </Label>
                <div className="grid grid-cols-2 gap-2.5">
                  {RADIUS_OPTIONS.map((opt) => {
                    const isSelected = radius === opt.value;
                    return (
                      <Button
                        key={opt.value}
                        type="button"
                        variant={isSelected ? "default" : "outline"}
                        noShadow={isSelected}
                        onClick={() => applyRadius(opt.value)}
                        className={`font-mono text-xs ${
                          isSelected
                            ? "translate-x-[2px] translate-y-[2px]"
                            : ""
                        }`}
                      >
                        {opt.label}
                      </Button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Mode Tampilan (Light / Dark) */}
              <div className="space-y-2.5">
                <Label className="block">{tc.step3Mode}</Label>
                <div className="grid grid-cols-2 gap-2.5">
                  <Button
                    type="button"
                    variant={!isDark ? "default" : "outline"}
                    noShadow={!isDark}
                    onClick={() => applyDark(false)}
                    className={
                      !isDark ? "translate-x-[2px] translate-y-[2px]" : ""
                    }
                  >
                    <Sun className="h-4 w-4" strokeWidth={2.5} />
                    {tc.lightMode}
                  </Button>
                  <Button
                    type="button"
                    variant={isDark ? "default" : "outline"}
                    noShadow={isDark}
                    onClick={() => applyDark(true)}
                    className={
                      isDark ? "translate-x-[2px] translate-y-[2px]" : ""
                    }
                  >
                    <Moon className="h-4 w-4" strokeWidth={2.5} />
                    {tc.darkMode}
                  </Button>
                </div>
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
