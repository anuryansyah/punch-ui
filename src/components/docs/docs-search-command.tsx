"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, Layers, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { CATALOG_LIST } from "@/lib/docs-data";
import { useLanguage } from "@/lib/i18n";

export function DocsSearchCommand() {
  const router = useRouter();
  const { lang } = useLanguage();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => setOpen(true)}
        className="h-8 gap-2 px-2.5 text-muted-foreground shadow-brutal-sm active:translate-x-[2px] active:translate-y-[2px] md:shadow-brutal-sm"
      >
        <Search className="h-3.5 w-3.5" strokeWidth={2.5} />
        <span className="hidden text-xs sm:inline">
          {lang === "id" ? "Cari komponen..." : "Search components..."}
        </span>
        <KbdGroup className="hidden sm:inline-flex">
          <Kbd size="sm" variant="muted" noShadow>
            ⌘K
          </Kbd>
        </KbdGroup>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder={
            lang === "id"
              ? "Cari komponen Punch UI (mis. chart, table, editor)..."
              : "Search Punch UI components (e.g. chart, table, editor)..."
          }
        />
        <CommandList>
          <CommandEmpty>
            {lang === "id"
              ? "Komponen tidak ditemukan."
              : "No components found."}
          </CommandEmpty>
          <CommandGroup heading={lang === "id" ? "Panduan" : "Getting Started"}>
            <CommandItem
              value="docs setup installation panduan instalasi"
              onSelect={() => {
                setOpen(false);
                router.push("/docs");
              }}
            >
              <BookOpen className="h-4 w-4" strokeWidth={2.5} />
              <span>
                {lang === "id"
                  ? "Panduan Setup & Katalog"
                  : "Setup Guide & Catalog"}
              </span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup
            heading={
              lang === "id"
                ? "Katalog Komponen (A–Z)"
                : "Component Catalog (A–Z)"
            }
          >
            {CATALOG_LIST.map((item) => (
              <CommandItem
                key={item.slug}
                value={`${item.title.en} ${item.title.id} ${item.slug}`}
                onSelect={() => {
                  setOpen(false);
                  router.push(`/docs/components/${item.slug}`);
                }}
              >
                <Layers className="h-4 w-4" strokeWidth={2.5} />
                <span>{item.title[lang]}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
