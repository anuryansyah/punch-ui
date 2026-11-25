"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { siteConfig } from "@/lib/config";
import { dictionaries, type Dictionary } from "@/locales";

export type Locale = "id" | "en";

export interface Bilingual {
  id: string;
  en: string;
}

interface LanguageContextValue {
  lang: Locale;
  setLang: (locale: Locale) => void;
  dict: Dictionary;
  t: (text: Bilingual) => string;
}

const STORAGE_KEY = "neobrutal-lang";

const LanguageContext = createContext<LanguageContextValue>({
  lang: "id",
  setLang: () => {},
  dict: dictionaries.id,
  t: (text) => text.id,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Locale>(siteConfig.defaultLocale);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "id" || saved === "en") {
      setLangState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLang = (locale: Locale) => {
    setLangState(locale);
    localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  };

  const dict = dictionaries[lang];
  const t = (text: Bilingual) => text[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, dict, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

/**
 * Helper komponen kecil untuk merender teks dua bahasa dari file JSON
 * di dalam Server Component (misal halaman Docs yang memanggil Shiki).
 */
export function T({ text }: { text: Bilingual }) {
  const { lang } = useLanguage();
  return <>{text[lang]}</>;
}

/**
 * Tombol Switcher Bahasa (ID | EN) bergaya Neobrutalism untuk dipasang di Topbar
 */
export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="inline-flex items-center gap-1.5">
      {/* <Globe
        className="h-4 w-4 text-muted-foreground"
        strokeWidth={2.5}
        aria-hidden="true"
      /> */}
      <ToggleGroup
        type="single"
        variant="outline"
        size="sm"
        value={lang}
        onValueChange={(value) => {
          if (value === "id" || value === "en") {
            setLang(value);
          }
        }}
        aria-label="Language Switcher"
      >
        <ToggleGroupItem value="id" className="font-mono">
          ID
        </ToggleGroupItem>
        <ToggleGroupItem value="en" className="font-mono">
          EN
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
