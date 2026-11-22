"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <div
      role="group"
      aria-label="Language Switcher"
      className="inline-flex h-8 items-center gap-1 rounded-md border-2 border-border bg-card p-0.5 shadow-brutal-sm"
    >
      <span className="flex items-center px-1.5 text-muted-foreground">
        <Globe className="h-3.5 w-3.5" strokeWidth={2.5} />
      </span>
      <Button
        type="button"
        size="sm"
        noShadow
        variant={lang === "id" ? "default" : "ghost"}
        onClick={() => setLang("id")}
        className="h-full rounded-sm border-0 px-2.5 py-0 font-mono text-xs"
      >
        ID
      </Button>
      <Button
        type="button"
        size="sm"
        noShadow
        variant={lang === "en" ? "default" : "ghost"}
        onClick={() => setLang("en")}
        className="h-full rounded-sm border-0 px-2.5 py-0 font-mono text-xs"
      >
        EN
      </Button>
    </div>
  );
}
