import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { ArrowUpRight, Palette, Rocket, Wrench } from "lucide-react";
import { CodeBlock } from "@/components/docs/code-block";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

  const nextInitCommands = `# 1. Create a new Next.js project (App Router + Tailwind + TypeScript)
npx create-next-app@latest my-app --typescript --tailwind --eslint --app --src-dir
cd my-app

# 2. Ensure Tailwind CSS v3 + typography plugin (if create-next-app scaffolded v4)
npm install -D tailwindcss@^3.4.17 postcss autoprefixer @tailwindcss/typography

# 3. Initialize shadcn/ui (creates components.json & src/lib/utils.ts)
npx shadcn@latest init

# 4. Install core icon & animation helpers
npm install lucide-react tailwindcss-animate`;

  const viteInitCommands = `# 1. Create a new React + Vite TypeScript project
npm create vite@latest my-app -- --template react-ts
cd my-app

# 2. Install Tailwind CSS v3, typography plugin, and Node types (for @ alias)
npm install -D tailwindcss@^3.4.17 postcss autoprefixer @tailwindcss/typography @types/node
npx tailwindcss init -p

# 3. Install core icon & animation helpers
npm install lucide-react tailwindcss-animate

# 4. Configure @/* -> ./src/* alias in tsconfig.json & vite.config.ts, then init shadcn/ui
npx shadcn@latest init`;

  const viteAliasConfig = `// vite.config.ts
import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});`;

  const nextFontSnippet = `// src/app/layout.tsx
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={\`\${spaceGrotesk.variable} \${jetbrainsMono.variable}\`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}`;

  const viteFontSnippet = `<!-- index.html (inside <head>) -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>

/* Add inside :root in src/index.css */
:root {
  --font-sans: "Space Grotesk", sans-serif;
  --font-mono: "JetBrains Mono", monospace;
}`;

  const cliInstallCommands = `# Install a single component from Punch UI Custom Registry (works in Next.js & Vite)
npx shadcn@latest add ${siteConfig.url}/r/button.json

# Or install a starter set at once
npx shadcn@latest add \\
  ${siteConfig.url}/r/button.json \\
  ${siteConfig.url}/r/card.json \\
  ${siteConfig.url}/r/badge.json \\
  ${siteConfig.url}/r/sidebar.json \\
  ${siteConfig.url}/r/data-table.json \\
  ${siteConfig.url}/r/chart.json`;

  const usageExampleCode = `// src/app/page.tsx (Next.js) or src/App.tsx (React + Vite)
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <Badge variant="secondary" className="w-fit font-mono">
            READY
          </Badge>
          <CardTitle>Hello, Punch UI!</CardTitle>
          <CardDescription>
            Neobrutalist components installed via Custom Registry CLI.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex gap-3">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </CardContent>
      </Card>
    </main>
  );
}`;

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
            Next.js & React (Vite) • Tailwind v3
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground">
          <T
            text={{
              id: "Ikuti 5 langkah berikut untuk memakai komponen Punch UI di proyek Next.js maupun React (Vite) — seluruh 47 komponen murni React + Radix UI tanpa ketergantungan Next.js.",
              en: "Follow these 5 steps to use Punch UI components in any Next.js or React (Vite) project — all 47 components are pure React + Radix UI with zero Next.js lock-in.",
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
                  id: "Inisialisasi Proyek & shadcn/ui",
                  en: "Initialize Project & shadcn/ui",
                }}
              />
            </h3>
          </div>
          <p className="text-xs text-muted-foreground md:text-sm">
            <T
              text={{
                id: "Pilih framework proyekmu di bawah, jalankan shadcn init untuk membuat components.json serta helper cn(), lalu pasang lucide-react, tailwindcss-animate, dan @tailwindcss/typography.",
                en: "Pick your framework below, run shadcn init to generate components.json and the cn() helper, then install lucide-react, tailwindcss-animate, and @tailwindcss/typography.",
              }}
            />
          </p>
          <Tabs defaultValue="nextjs" className="w-full">
            <TabsList>
              <TabsTrigger value="nextjs">Next.js</TabsTrigger>
              <TabsTrigger value="vite">React (Vite)</TabsTrigger>
            </TabsList>
            <TabsContent value="nextjs" className="mt-3">
              <CodeBlock
                title="Terminal (Next.js)"
                language="bash"
                code={nextInitCommands}
              />
            </TabsContent>
            <TabsContent value="vite" className="mt-3 space-y-3">
              <CodeBlock
                title="Terminal (React + Vite)"
                language="bash"
                code={viteInitCommands}
              />
              <CodeBlock
                title="vite.config.ts"
                language="ts"
                code={viteAliasConfig}
              />
            </TabsContent>
          </Tabs>
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
                id: "Daftarkan token warna semantik (primary, secondary, success, info, warning, destructive), borderRadius dinamis, dan boxShadow Neobrutalism. Untuk React (Vite), cukup sesuaikan content menjadi [\"./index.html\", \"./src/**/*.{js,ts,jsx,tsx}\"].",
                en: "Register semantic color tokens (primary, secondary, success, info, warning, destructive), dynamic borderRadius, and Neobrutalist hard shadows. For React (Vite), set content to [\"./index.html\", \"./src/**/*.{js,ts,jsx,tsx}\"].",
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
                  id: "Pasang Font & CSS Tokens (globals.css / index.css)",
                  en: "Add Fonts & CSS Tokens (globals.css / index.css)",
                }}
              />
            </h3>
          </div>
          <p className="text-xs text-muted-foreground md:text-sm">
            <T
              text={{
                id: "Muat font Space Grotesk & JetBrains Mono agar tipografi Neobrutalism maksimal, lalu salin token CSS di bawah ke src/app/globals.css (Next.js) atau src/index.css (React + Vite).",
                en: "Load Space Grotesk & JetBrains Mono for crisp Neobrutalist typography, then copy the CSS tokens below into src/app/globals.css (Next.js) or src/index.css (React + Vite).",
              }}
            />
          </p>
          <Tabs defaultValue="nextjs" className="w-full">
            <TabsList>
              <TabsTrigger value="nextjs">Next.js (layout.tsx)</TabsTrigger>
              <TabsTrigger value="vite">React / Vite (index.html)</TabsTrigger>
            </TabsList>
            <TabsContent value="nextjs" className="mt-3">
              <CodeBlock
                title="src/app/layout.tsx"
                language="tsx"
                code={nextFontSnippet}
              />
            </TabsContent>
            <TabsContent value="vite" className="mt-3">
              <CodeBlock
                title="index.html + src/index.css"
                language="html"
                code={viteFontSnippet}
              />
            </TabsContent>
          </Tabs>
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
            title="src/app/globals.css (or src/index.css)"
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
                id: "Jalankan perintah berikut untuk mengunduh komponen beserta seluruh dependensi NPM dan sub-komponen Punch UI yang dibutuhkan secara otomatis (sama persis di Next.js maupun Vite):",
                en: "Run the CLI below to download any component along with all required NPM packages and Punch UI sub-components automatically (identical in Next.js and Vite):",
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
                  id: "Catatan Toast (Sonner): Jika memasang sonner.json, tambahkan <Toaster /> sekali di root layout (src/app/layout.tsx atau src/App.tsx) agar pemanggilan toast() aktif di seluruh halaman.",
                  en: "Toast (Sonner) Note: If you install sonner.json, mount <Toaster /> once in your root layout (src/app/layout.tsx or src/App.tsx) so toast() notifications work globally.",
                }}
              />
            </span>
          </div>
        </Card>

        {/* Step 5 */}
        <Card className="space-y-3 p-5 md:p-6">
          <div className="flex items-center gap-2.5">
            <Badge className="font-mono">05</Badge>
            <h3
              id="step-5-usage"
              className="scroll-mt-24 text-base font-bold leading-tight"
            >
              <T
                text={{
                  id: "Import & Gunakan Komponen",
                  en: "Import & Use Components",
                }}
              />
            </h3>
          </div>
          <p className="text-xs text-muted-foreground md:text-sm">
            <T
              text={{
                id: "Komponen yang sudah diunduh tersimpan di src/components/ui/ dan langsung siap dipakai serta dikustomisasi penuh di proyekmu:",
                en: "Installed components live directly in your src/components/ui/ folder — import and customize them right away:",
              }}
            />
          </p>
          <CodeBlock
            title="src/app/page.tsx (or src/App.tsx)"
            language="tsx"
            code={usageExampleCode}
          />
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
