# PUNCH UI

A **Neobrutalist `shadcn/ui` component library & Custom Registry** built with Next.js 15, Tailwind CSS, and Radix UI — featuring crisp `2px` borders, hard offset shadows, 6 live color presets + a Custom Theme Builder, Light & Dark mode, and bilingual (`ID` | `EN`) documentation.

- **Live Demo & Docs:** [https://punch-ui-seven.vercel.app](https://punch-ui-seven.vercel.app)
- **Repository:** [https://github.com/anuryansyah/punch-ui](https://github.com/anuryansyah/punch-ui)

---

## Highlights

- **47 Registry Components** (`public/r/*.json`) — from core form primitives (`Button`, `Input`, `Select`, `Checkbox`, `RadioGroup`, `Switch`, `Slider`, `Form`) to rich interactive widgets (`DataTable`, `Chart`, `RichTextEditor`, `FileUpload`, `ColorPicker`, `NavigationMenu`, `Command`, `Combobox`, `DatePicker`, `Sidebar`, `Marquee`, and more).
- **6 Live Color Presets + Custom Theme Builder** — switch between `Tangerine`, `Soft Blue`, `Cyber Yellow`, `Deep Ink`, `Soft Pink`, and `Crimson Red`, or customize all 8 CSS tokens live with automatic WCAG contrast foregrounds and one-click CSS export.
- **Zero-Blur Neobrutalist System** — `border-2 border-border`, hard offset shadows (`shadow-brutal-sm`, `shadow-brutal`, `shadow-brutal-lg`), mechanical press interactions, and high-contrast keyboard focus outlines.
- **Bilingual Documentation (`ID` | `EN`)** — interactive component previews, Shiki-highlighted code tabs, `Cmd/Ctrl+K` quick search, and mobile drawer navigation.

---

## Quick Install via `shadcn` CLI

Pull any component directly from the hosted Custom Registry into your own Next.js / React project:

```bash
npx shadcn@latest add https://punch-ui-seven.vercel.app/r/button.json
```

Replace `button.json` with any component slug (for example: `card.json`, `data-table.json`, `rich-text-editor.json`, `color-picker.json`, `marquee.json`).

For the 4-step CSS token & Tailwind configuration setup, see the live guide at [https://punch-ui-seven.vercel.app/docs](https://punch-ui-seven.vercel.app/docs).

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Configure environment variables
cp .env.example .env

# 3. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Script                   | Description                                          |
| ------------------------ | ---------------------------------------------------- |
| `npm run dev`            | Start Next.js 15 development server                  |
| `npm run build`          | Build production bundle                              |
| `npm run check`          | Run TypeScript typecheck, ESLint, and Prettier check |
| `npm run format`         | Format source files with Prettier                    |
| `npm run registry:build` | Compile `registry.json` into `public/r/*.json`       |

---

## Tech Stack

- **Framework:** Next.js 15 (App Router) & React 19
- **Styling:** Tailwind CSS v3 + CSS Custom Properties (`--primary`, `--secondary`, `--background`, `--card`, `--radius`, `--shadow`)
- **Primitives:** Radix UI, CVA (`class-variance-authority`), Lucide Icons (`strokeWidth={2.5}`)
- **Specialized Widgets:** Recharts, TanStack Table v8, Tiptap v3, React Dropzone, React Hook Form + Zod, Sonner, `cmdk`, `react-day-picker`, `input-otp`
- **Docs & Registry:** Shiki syntax highlighting + `shadcn build` Custom Registry
