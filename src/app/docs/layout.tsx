import Link from "next/link";
import { Home, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DocsSidebarNav } from "@/components/docs/docs-sidebar-nav";
import { DocsTableOfContents } from "@/components/docs/docs-toc";
import { DocsPager } from "@/components/docs/docs-pager";
import { ThemeCustomizer } from "@/components/docs/theme-customizer";
import { LanguageSwitcher, T } from "@/lib/i18n";
import { siteConfig } from "@/lib/config";
import { dictionaries } from "@/locales";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Topbar Dokumentasi (Tinggi tetap h-16 = 64px) */}
      <header className="sticky top-0 z-30 flex h-16 items-center border-b-2 border-border bg-card text-card-foreground">
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-3">
            <Button asChild size="sm">
              <Link href="/">
                <Layers className="h-4 w-4" strokeWidth={2.5} />
                {siteConfig.name.toUpperCase()}
              </Link>
            </Button>
            <Badge variant="secondary" className="hidden font-mono sm:inline-flex">
              DOCS {siteConfig.version}
            </Badge>
          </div>

          <div className="flex items-center gap-2.5">
            <LanguageSwitcher />
            <Button asChild variant="outline" size="sm">
              <Link href="/">
                <Home className="h-3.5 w-3.5" strokeWidth={2.5} />
                <span className="hidden sm:inline">
                  <T
                    text={{
                      id: dictionaries.id.common.topbar.homeAndCustomizer,
                      en: dictionaries.en.common.topbar.homeAndCustomizer,
                    }}
                  />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content + Left Sidebar + Right "On This Page" */}
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-8 px-4 py-8 sm:px-6 md:grid-cols-[260px_minmax(0,1fr)] lg:px-10 xl:grid-cols-[260px_minmax(0,1fr)_240px]">
        <aside className="space-y-6 md:sticky md:top-24 md:self-start">
          <DocsSidebarNav />
        </aside>

        <main data-docs-content className="min-w-0 space-y-8">
          {children}
          <DocsPager />
        </main>

        <aside className="hidden xl:sticky xl:top-24 xl:block xl:self-start">
          <DocsTableOfContents />
        </aside>
      </div>

      {/* Floating Button + Drawer Theme Customizer khusus di halaman Docs */}
      <ThemeCustomizer variant="drawer" />
    </div>
  );
}
