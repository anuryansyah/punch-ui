"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen, Compass, Home } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n";

const QUICK_LINKS = [
  { label: "Button", href: "/docs/components/button" },
  { label: "Card", href: "/docs/components/card" },
  { label: "Chart", href: "/docs/components/chart" },
  { label: "Data Table", href: "/docs/components/data-table" },
];

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-background px-4 py-12 text-foreground">
      <Card className="w-full max-w-lg">
        <CardHeader className="border-b-2 border-border bg-secondary text-secondary-foreground">
          <div className="flex items-center justify-between gap-2">
            <Badge variant="danger" size="sm" noShadow className="font-mono">
              ERROR 404
            </Badge>
            <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase">
              <Compass className="h-4 w-4" strokeWidth={2.5} />
              {t({ id: "Halaman Tidak Ditemukan", en: "Page Not Found" })}
            </span>
          </div>
        </CardHeader>

        <CardContent className="space-y-5 pt-6 text-center">
          <div className="inline-block rounded-md border-2 border-border bg-primary px-6 py-3 font-mono text-6xl font-black tracking-tighter text-primary-foreground shadow-brutal sm:text-7xl">
            404
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-black tracking-tight sm:text-3xl">
              {t({
                id: "Waduh, rute ini kosong!",
                en: "Oops, this route doesn't exist!",
              })}
            </h1>
            <p className="mx-auto max-w-md text-sm text-muted-foreground">
              {t({
                id: "Halaman atau komponen yang kamu cari mungkin sudah dipindahkan, diganti namanya, atau URL-nya salah ketik.",
                en: "The page or component you're looking for may have been moved, renamed, or the URL might have a typo.",
              })}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <Button asChild>
              <Link href="/">
                <Home className="h-4 w-4" strokeWidth={2.5} />
                {t({ id: "Kembali ke Beranda", en: "Back to Home" })}
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/docs">
                <BookOpen className="h-4 w-4" strokeWidth={2.5} />
                {t({ id: "Buka Dokumentasi", en: "Browse Docs" })}
              </Link>
            </Button>
          </div>
        </CardContent>

        <CardFooter className="bg-muted/50 flex-col items-center gap-2.5 border-t-2 border-border py-4">
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase text-muted-foreground">
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2.5} />
            {t({ id: "Komponen Populer", en: "Popular Components" })}
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {QUICK_LINKS.map((item) => (
              <Badge
                key={item.href}
                asChild
                variant="outline"
                size="sm"
                noShadow
                className="font-mono transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Link href={item.href}>{item.label}</Link>
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
