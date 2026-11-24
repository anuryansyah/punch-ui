import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { ArrowUpRight, Palette, Rocket, Wrench } from "lucide-react";
import { CodeBlock } from "@/components/docs/code-block";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";
import { CATALOG_LIST } from "@/lib/docs-data";
import { T } from "@/lib/i18n";
import { dictionaries } from "@/locales";

const idCatalog = dictionaries.id.docs.catalog;
const enCatalog = dictionaries.en.docs.catalog;

async function readProjectFile(relPath: string): Promise<string> {
  try {
    return await fs.readFile(path.join(process.cwd(), relPath), "utf-8");
  } catch {
    return `// File not found: ${relPath}`;
  }
}

export default async function DocsIndexPage() {
  const [tailwindConfigCode, globalsCssCode] = await Promise.all([
    readProjectFile("tailwind.config.ts"),
    readProjectFile("src/styles/globals.css"),
  ]);

  const initCommands = `# 1. Create a new Next.js project (App Router + Tailwind + TypeScript)
npx create-next-app@latest my-admin --typescript --tailwind --eslint --app --src-dir
cd my-admin

# 2. Initialize shadcn/ui (creates components.json & src/lib/utils.ts)
npx shadcn@latest init

# 3. Install core styling & icon helpers
npm install lucide-react tailwindcss-animate`;

  const cliInstallCommands = `# Install a single component from Punch UI Custom Registry
npx shadcn@latest add ${siteConfig.url}/r/button.json

# Or install a starter set for an Admin Dashboard at once
npx shadcn@latest add \\
  ${siteConfig.url}/r/button.json \\
  ${siteConfig.url}/r/card.json \\
  ${siteConfig.url}/r/badge.json \\
  ${siteConfig.url}/r/sidebar.json \\
  ${siteConfig.url}/r/data-table.json \\
  ${siteConfig.url}/r/chart.json`;

  return (
    <div className="space-y-10">
      {/* Header Pengenalan */}
      <Card className="p-6 md:p-8">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge variant="secondary">
            <T text={{ id: idCatalog.badge, en: enCatalog.badge }} />
          </Badge>
          <Badge variant="outline" noShadow className="font-mono">
            {CATALOG_LIST.length} Components
          </Badge>
          <Badge variant="muted" noShadow className="font-mono">
            shadcn/ui Custom Registry
          </Badge>
        </div>

        <h1 className="text-2xl font-bold tracking-tight md:text-4xl">
          <T text={{ id: idCatalog.title, en: enCatalog.title }} />
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground md:text-base">
          <T text={{ id: idCatalog.description, en: enCatalog.description }} />
        </p>
      </Card>

      {/* Panduan Instalasi & Setup Proyek Baru */}
      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2
            id="instalasi-proyek-baru"
            className="flex scroll-mt-24 items-center gap-2 text-lg font-bold uppercase tracking-wider"
          >
            <Rocket className="h-5 w-5 shrink-0" strokeWidth={2.5} />
            <T
              text={{
                id: "Panduan Setup Proyek Baru",
                en: "New Project Setup Guide",
              }}
            />
          </h2>
          <Badge variant="secondary" className="font-mono text-[11px]">
            Next.js + Tailwind CSS v3
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground">
          <T
            text={{
              id: "Ikuti 4 langkah berikut untuk memakai komponen Punch UI di proyek terpisah (seperti Admin Dashboard atau SaaS App) tanpa perlu install paket NPM tambahan — cukup lewat Custom Registry CLI.",
              en: "Follow these 4 steps to consume Punch UI components in any separate project (such as an Admin Dashboard or SaaS app) directly via the shadcn Custom Registry CLI.",
            }}
          />
        </p>

        {/* Step 1 */}
        <Card className="space-y-3 p-5 md:p-6">
          <div className="flex items-center gap-2.5">
            <Badge className="font-mono">01</Badge>
            <h3
              id="step-1-init"
              className="scroll-mt-24 text-base font-bold leading-tight"
            >
              <T
                text={{
                  id: "Inisialisasi Next.js & shadcn/ui",
                  en: "Initialize Next.js & shadcn/ui",
                }}
              />
            </h3>
          </div>
          <p className="text-xs text-muted-foreground md:text-sm">
            <T
              text={{
                id: "Buat proyek Next.js baru, jalankan shadcn init untuk membuat components.json serta helper cn(), lalu pasang lucide-react dan tailwindcss-animate.",
                en: "Scaffold a Next.js app, run shadcn init to generate components.json and the cn() helper, then install lucide-react and tailwindcss-animate.",
              }}
            />
          </p>
          <CodeBlock title="Terminal" language="bash" code={initCommands} />
        </Card>

        {/* Step 2 */}
        <Card className="space-y-3 p-5 md:p-6">
          <div className="flex items-center gap-2.5">
            <Badge className="font-mono">02</Badge>
            <h3
              id="step-2-tailwind"
              className="scroll-mt-24 text-base font-bold leading-tight"
            >
              <T
                text={{
                  id: "Konfigurasi tailwind.config.ts",
                  en: "Configure tailwind.config.ts",
                }}
              />
            </h3>
          </div>
          <p className="text-xs text-muted-foreground md:text-sm">
            <T
              text={{
                id: "Daftarkan token warna semantik (primary, secondary, success, info, warning, destructive), borderRadius dinamis, dan boxShadow Neobrutalism (shadow-brutal, shadow-brutal-sm, shadow-brutal-lg).",
                en: "Register semantic color tokens (primary, secondary, success, info, warning, destructive), dynamic borderRadius, and Neobrutalist hard shadows (shadow-brutal, shadow-brutal-sm, shadow-brutal-lg).",
              }}
            />
          </p>
          <CodeBlock
            title="tailwind.config.ts"
            language="ts"
            code={tailwindConfigCode}
          />
        </Card>

        {/* Step 3 */}
        <Card className="space-y-3 p-5 md:p-6">
          <div className="flex items-center gap-2.5">
            <Badge className="font-mono">03</Badge>
            <h3
              id="step-3-globals-css"
              className="scroll-mt-24 text-base font-bold leading-tight"
            >
              <T
                text={{
                  id: "Salin CSS Tokens & Animasi (globals.css)",
                  en: "Add CSS Tokens & Animations (globals.css)",
                }}
              />
            </h3>
          </div>
          <p className="text-xs text-muted-foreground md:text-sm">
            <T
              text={{
                id: "Salin token warna Light & Dark Mode, custom scrollbar, animasi Accordion/Progress/Skeleton, serta gaya prose .punch-editor-content ke dalam src/app/globals.css proyekmu.",
                en: "Copy the Light & Dark Mode CSS variables, custom scrollbar, Accordion/Progress/Skeleton animations, and .punch-editor-content styles into your project's src/app/globals.css.",
              }}
            />
          </p>
          <div className="flex items-start gap-2 rounded-md border-2 border-border bg-secondary/50 px-3.5 py-2.5 text-xs text-card-foreground">
            <Palette className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.5} />
            <span>
              <T
                text={{
                  id: "Tip Tema: Ingin langsung pakai Soft Blue, Cyber Yellow, Deep Ink, Soft Pink, atau Crimson Red? Klik tombol Palet di pojok kanan bawah lalu tekan Copy Theme CSS untuk mengganti blok :root secara instan.",
                  en: "Theme Tip: Want Soft Blue, Cyber Yellow, Deep Ink, Soft Pink, or Crimson Red instead? Open the Palette button in the bottom-right corner and click Copy Theme CSS to swap the :root block instantly.",
                }}
              />
            </span>
          </div>
          <CodeBlock
            title="src/app/globals.css"
            language="css"
            code={globalsCssCode}
          />
        </Card>

        {/* Step 4 */}
        <Card className="space-y-3 p-5 md:p-6">
          <div className="flex items-center gap-2.5">
            <Badge className="font-mono">04</Badge>
            <h3
              id="step-4-cli"
              className="scroll-mt-24 text-base font-bold leading-tight"
            >
              <T
                text={{
                  id: "Pasang Komponen via Custom Registry CLI",
                  en: "Add Components via Custom Registry CLI",
                }}
              />
            </h3>
          </div>
          <p className="text-xs text-muted-foreground md:text-sm">
            <T
              text={{
                id: "Jalankan perintah berikut untuk mengunduh komponen beserta seluruh dependensi NPM dan sub-komponen Punch UI yang dibutuhkan secara otomatis:",
                en: "Run the CLI below to download any component along with all required NPM packages and Punch UI sub-components automatically:",
              }}
            />
          </p>
          <CodeBlock
            title="Terminal"
            language="bash"
            code={cliInstallCommands}
          />
          <div className="flex items-start gap-2 rounded-md border-2 border-border bg-muted/60 px-3.5 py-2.5 text-xs text-muted-foreground">
            <Wrench className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.5} />
            <span>
              <T
                text={{
                  id: "Catatan Toast (Sonner): Jika memasang sonner.json, tambahkan <Toaster /> sekali di src/app/layout.tsx agar pemanggilan toast() aktif di seluruh halaman.",
                  en: "Toast (Sonner) Note: If you install sonner.json, mount <Toaster /> once inside src/app/layout.tsx so toast() notifications work globally.",
                }}
              />
            </span>
          </div>
        </Card>
      </section>

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
