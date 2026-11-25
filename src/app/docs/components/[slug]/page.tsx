import { notFound } from "next/navigation";
import { ComponentPreview } from "@/components/docs/component-preview";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { COMPONENT_DOCS, type CompositionTreeNode } from "@/lib/docs-data";
import { siteConfig } from "@/lib/config";
import { T } from "@/lib/i18n";
import { dictionaries } from "@/locales";
import { Layers, Package, Terminal } from "lucide-react";

function RenderTreeBranch({ nodes }: { nodes: CompositionTreeNode[] }) {
  return (
    <ul className="ml-4">
      {nodes.map((node, index) => {
        const isLast = index === nodes.length - 1;
        const badgeStyle =
          node.role === "section"
            ? "bg-secondary text-secondary-foreground shadow-brutal-sm"
            : "bg-card text-card-foreground";

        return (
          <li key={`${node.name}-${index}`} className="relative pl-6 pt-2.5">
            {/* Garis Vertikal 2px Presisi */}
            <span
              aria-hidden="true"
              className={`absolute left-0 top-0 w-[2px] bg-border ${
                isLast ? "h-[27px]" : "bottom-0"
              }`}
            />
            {/* Garis Cabang Horizontal 2px Presisi */}
            <span
              aria-hidden="true"
              className="absolute left-0 top-[25px] h-[2px] w-6 bg-border"
            />

            <span
              className={`inline-flex h-8 items-center rounded-md border-2 border-border px-3 font-mono text-xs font-bold md:text-sm ${badgeStyle}`}
            >
              &lt;{node.name} /&gt;
            </span>

            {node.children && node.children.length > 0 && (
              <RenderTreeBranch nodes={node.children} />
            )}
          </li>
        );
      })}
    </ul>
  );
}

const idDetail = dictionaries.id.docs.detailPage;
const enDetail = dictionaries.en.docs.detailPage;

export function generateStaticParams() {
  return Object.keys(COMPONENT_DOCS).map((slug) => ({ slug }));
}

export default async function ComponentDocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = COMPONENT_DOCS[slug];

  if (!doc) {
    notFound();
  }

  return (
    <div className="space-y-10">
      {/* Header Komponen */}
      <Card className="p-6 md:p-8">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge variant="secondary">
            <T text={doc.tier} />
          </Badge>
          <Badge variant="muted" className="font-mono lowercase">
            {doc.sourceFile}
          </Badge>
        </div>
        <h1 className="text-2xl font-bold tracking-tight md:text-4xl">
          <T text={doc.title} />
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground md:text-base">
          <T text={doc.description} />
        </p>

        {/* Perintah CLI Custom Registry */}
        <div className="mt-5 inline-flex items-center gap-2 rounded-md border-2 border-border bg-muted px-3.5 py-2 font-mono text-xs font-bold text-card-foreground shadow-brutal-sm">
          <Terminal className="h-4 w-4 shrink-0" strokeWidth={2.5} />
          <span>
            npx shadcn@latest add {siteConfig.url}/r/{doc.registryItem}
          </span>
        </div>
      </Card>

      {/* Panduan Dependensi / Instalasi Manual (Jika tersedia) */}
      {doc.installGuide && (
        <Card className="space-y-4 p-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2
              id="instalasi-dependensi"
              className="flex scroll-mt-24 items-center gap-2 text-base font-bold uppercase tracking-wider"
            >
              <Package className="h-4 w-4 shrink-0" strokeWidth={2.5} />
              <T
                text={{
                  id: "Kebutuhan Instalasi (Dependencies)",
                  en: "Installation Requirements (Dependencies)",
                }}
              />
            </h2>
            <Badge variant="secondary" className="font-mono text-[11px]">
              {doc.installGuide.packages.length} npm packages
            </Badge>
          </div>

          {doc.installGuide.note && (
            <p className="text-sm text-muted-foreground">
              <T text={doc.installGuide.note} />
            </p>
          )}

          {/* Perintah npm install */}
          <div className="overflow-x-auto rounded-md border-2 border-border bg-[#141923] px-4 py-3 font-mono text-xs text-[#f8fafc] shadow-brutal-sm">
            <code>{doc.installGuide.npmCommand}</code>
          </div>

          {/* Rincian Paket NPM */}
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {doc.installGuide.packages.map((pkg) => (
              <div
                key={pkg.name}
                className="flex flex-col gap-1 rounded-md border-2 border-border bg-muted/40 p-3"
              >
                <code className="font-mono text-xs font-bold text-foreground">
                  {pkg.name}
                </code>
                <span className="text-xs text-muted-foreground">
                  <T text={pkg.purpose} />
                </span>
              </div>
            ))}
          </div>

          {/* Komponen Punch UI yang digunakan */}
          {doc.installGuide.registryDependencies &&
            doc.installGuide.registryDependencies.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 border-t-2 border-border pt-3">
                <span className="font-mono text-xs font-bold uppercase text-muted-foreground">
                  <T
                    text={{
                      id: "Komponen Punch UI:",
                      en: "Punch UI Components:",
                    }}
                  />
                </span>
                {doc.installGuide.registryDependencies.map((dep) => (
                  <Badge
                    key={dep}
                    variant="outline"
                    size="sm"
                    noShadow
                    className="font-mono lowercase"
                  >
                    {dep}
                  </Badge>
                ))}
              </div>
            )}
        </Card>
      )}

      {/* Daftar Section Terpisah (seperti pada Button & Card) atau Preview Tunggal */}
      {doc.sections && doc.sections.length > 0 ? (
        <div className="space-y-10">
          {doc.sections.map((sec) => (
            <section key={sec.id} className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 id={sec.id} className="scroll-mt-24 text-lg font-bold">
                  <T text={sec.title} />
                </h2>
                {sec.propsUsed && (
                  <Badge variant="secondary" className="font-mono lowercase">
                    {sec.propsUsed}
                  </Badge>
                )}
              </div>

              {sec.tree && (
                <Card className="p-5 md:p-6">
                  {/* Root Node */}
                  <div className="inline-flex h-9 items-center gap-2 rounded-md border-2 border-border bg-primary px-3.5 font-mono text-xs font-bold text-primary-foreground shadow-brutal-sm md:text-sm">
                    <Layers className="h-4 w-4" strokeWidth={2.5} />
                    &lt;{sec.tree.name} /&gt;
                  </div>

                  {/* Children Branches */}
                  {sec.tree.children && sec.tree.children.length > 0 && (
                    <RenderTreeBranch nodes={sec.tree.children} />
                  )}
                </Card>
              )}

              {sec.demoName && <ComponentPreview name={sec.demoName} />}
            </section>
          ))}
        </div>
      ) : (
        <section className="space-y-3">
          <h2 id="live-preview" className="scroll-mt-24 text-lg font-bold">
            <T
              text={{
                id: idDetail.livePreviewHeading,
                en: enDetail.livePreviewHeading,
              }}
            />
          </h2>
          <ComponentPreview name={doc.demoName} />
        </section>
      )}

      {/* Tabel Referensi Props (Jika tersedia) */}
      {doc.propsTable && doc.propsTable.length > 0 && (
        <section className="space-y-3">
          <h2 id="referensi-props" className="scroll-mt-24 text-lg font-bold">
            <T
              text={{
                id: idDetail.propsReferenceHeading,
                en: enDetail.propsReferenceHeading,
              }}
            />
          </h2>
          <Card className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-xs">
              <thead>
                <tr className="border-b-2 border-border bg-secondary text-secondary-foreground">
                  <th className="border-r-2 border-border px-4 py-3 font-mono font-bold uppercase">
                    <T
                      text={{
                        id: idDetail.tableHeaders.prop,
                        en: enDetail.tableHeaders.prop,
                      }}
                    />
                  </th>
                  <th className="border-r-2 border-border px-4 py-3 font-mono font-bold uppercase">
                    <T
                      text={{
                        id: idDetail.tableHeaders.type,
                        en: enDetail.tableHeaders.type,
                      }}
                    />
                  </th>
                  <th className="border-r-2 border-border px-4 py-3 font-mono font-bold uppercase">
                    <T
                      text={{
                        id: idDetail.tableHeaders.default,
                        en: enDetail.tableHeaders.default,
                      }}
                    />
                  </th>
                  <th className="px-4 py-3 font-bold uppercase">
                    <T
                      text={{
                        id: idDetail.tableHeaders.description,
                        en: enDetail.tableHeaders.description,
                      }}
                    />
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-border">
                {doc.propsTable.map((row) => (
                  <tr key={row.prop} className="hover:bg-muted/50">
                    <td className="border-r-2 border-border px-4 py-3 font-mono font-bold text-foreground">
                      {row.prop}
                    </td>
                    <td className="border-r-2 border-border px-4 py-3 font-mono text-[11px] text-muted-foreground">
                      {row.type}
                    </td>
                    <td className="border-r-2 border-border px-4 py-3 font-mono font-bold">
                      {row.defaultValue}
                    </td>
                    <td className="px-4 py-3 text-card-foreground">
                      <T text={row.description} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </section>
      )}

      {/* Catatan Penggunaan */}
      <Card className="p-6">
        <h2
          id="catatan-desain"
          className="mb-3 scroll-mt-24 text-base font-bold uppercase tracking-wider"
        >
          <T
            text={{
              id: idDetail.designNotesHeading,
              en: enDetail.designNotesHeading,
            }}
          />
        </h2>
        <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
          {doc.usageNotes.id.map((noteId, idx) => (
            <li key={noteId}>
              <T
                text={{
                  id: noteId,
                  en: doc.usageNotes.en[idx] ?? noteId,
                }}
              />
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
