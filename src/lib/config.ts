export const siteConfig = {
  url: (
    process.env.NEXT_PUBLIC_APP_URL || "https://punch-ui-seven.vercel.app"
  ).replace(/\/$/, ""),
  name: process.env.NEXT_PUBLIC_APP_NAME || "Punch UI",
  version: process.env.NEXT_PUBLIC_APP_VERSION || "v1.0",
  githubUrl:
    process.env.NEXT_PUBLIC_GITHUB_URL ||
    "https://github.com/anuryansyah/punch-ui",
  defaultTheme: process.env.NEXT_PUBLIC_DEFAULT_THEME || "tangerine",
  defaultLocale: (process.env.NEXT_PUBLIC_DEFAULT_LOCALE === "en"
    ? "en"
    : "id") as "id" | "en",
} as const;
