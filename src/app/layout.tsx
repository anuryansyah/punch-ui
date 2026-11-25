import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import { siteConfig } from "@/lib/config";
import { Toaster } from "@/components/ui/sonner";
import "@/styles/globals.css";
import "@/styles/themes.css";

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

const SITE_DESCRIPTION =
  "Neobrutalist shadcn/ui component library & custom registry featuring 47 components, 6 color presets + live Custom Theme Builder, Light/Dark mode, and bilingual docs.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Neobrutalist Component Library`,
    template: `%s — ${siteConfig.name}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Punch UI",
    "Neobrutalism",
    "Neobrutalist UI",
    "shadcn/ui",
    "Tailwind CSS",
    "Radix UI",
    "React Components",
    "Next.js",
    "Component Registry",
  ],
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Neobrutalist Component Library`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Neobrutalist Component Library`,
    description: SITE_DESCRIPTION,
  },
};

const THEME_INIT_SCRIPT = `
(function() {
  try {
    var theme = localStorage.getItem("neobrutal-theme") || "${siteConfig.defaultTheme}";
    var dark = localStorage.getItem("neobrutal-dark") === "true";
    var radius = localStorage.getItem("neobrutal-radius") || "0px";
    var root = document.documentElement;
    root.setAttribute("data-theme", theme);
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    root.style.setProperty("--radius", radius);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={siteConfig.defaultLocale}
      data-theme={siteConfig.defaultTheme}
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <LanguageProvider>
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
