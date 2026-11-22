import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CATALOG_LIST } from "@/lib/docs-data";
import { T } from "@/lib/i18n";
import { dictionaries } from "@/locales";
import { ArrowUpRight } from "lucide-react";

const idCatalog = dictionaries.id.docs.catalog;
const enCatalog = dictionaries.en.docs.catalog;

export default function DocsIndexPage() {
  return (
    <div className="space-y-8">
      {/* Header Pengenalan */}
      <Card className="p-6 md:p-8">
        <Badge variant="secondary" className="mb-3">
          <T text={{ id: idCatalog.badge, en: enCatalog.badge }} />
        </Badge>
        <h1 className="text-2xl font-bold tracking-tight md:text-4xl">
          <T text={{ id: idCatalog.title, en: enCatalog.title }} />
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
          <T text={{ id: idCatalog.description, en: enCatalog.description }} />
        </p>
      </Card>

      {/* Daftar Katalog Komponen (2 Kolom, Tanpa Preview) */}
      <section className="space-y-4">
        <h2
          id="daftar-komponen"
          className="scroll-mt-24 text-lg font-bold uppercase tracking-wider"
        >
          <T
            text={{
              id: "Daftar Komponen",
              en: "Components List",
            }}
          />
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {CATALOG_LIST.map((item) => (
            <Link
              key={item.slug}
              href={`/docs/components/${item.slug}`}
              className="group block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <Card className="flex items-center justify-between gap-4 p-5 transition-all group-hover:bg-secondary group-hover:text-secondary-foreground group-active:translate-x-[3px] group-active:translate-y-[3px] group-active:shadow-none">
                <div className="min-w-0 space-y-1">
                  <h3 className="text-base font-bold leading-tight">
                    <T text={item.title} />
                  </h3>
                  <p className="line-clamp-1 text-xs text-muted-foreground group-hover:text-secondary-foreground/80">
                    <T text={item.description} />
                  </p>
                </div>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground shadow-brutal-sm">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
