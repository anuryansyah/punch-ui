import { dictionaries } from "@/locales";
import type { Bilingual } from "@/lib/i18n";

export type ComponentSlug = keyof typeof dictionaries.id.docs.components;

export interface PropRowData {
  prop: string;
  type: string;
  defaultValue: string;
  description: Bilingual;
}

export interface CompositionTreeNode {
  name: string;
  role?: "root" | "section" | "leaf";
  children?: CompositionTreeNode[];
}

export interface DemoSectionData {
  id: string;
  title: Bilingual;
  demoName?: string;
  propsUsed?: string;
  tree?: CompositionTreeNode;
}

export interface ComponentDocData {
  slug: ComponentSlug;
  title: Bilingual;
  tier: Bilingual;
  description: Bilingual;
  demoName: string;
  sourceFile: string;
  registryItem: string;
  sections?: DemoSectionData[];
  propsTable?: PropRowData[];
  usageNotes: {
    id: string[];
    en: string[];
  };
}

function getComponentText(slug: ComponentSlug) {
  const idComp = dictionaries.id.docs.components[slug];
  const enComp = dictionaries.en.docs.components[slug];
  return {
    title: { id: idComp.title, en: enComp.title },
    tier: { id: idComp.tier, en: enComp.tier },
    description: { id: idComp.description, en: enComp.description },
    usageNotes: { id: idComp.usageNotes, en: enComp.usageNotes },
  };
}

function getButtonSectionTitle(
  secId: keyof typeof dictionaries.id.docs.components.button.sections
): Bilingual {
  return {
    id: dictionaries.id.docs.components.button.sections[secId],
    en: dictionaries.en.docs.components.button.sections[secId],
  };
}

function getButtonPropDesc(
  propName: keyof typeof dictionaries.id.docs.components.button.props
): Bilingual {
  return {
    id: dictionaries.id.docs.components.button.props[propName],
    en: dictionaries.en.docs.components.button.props[propName],
  };
}

function getCardSectionTitle(
  secId: keyof typeof dictionaries.id.docs.components.card.sections
): Bilingual {
  return {
    id: dictionaries.id.docs.components.card.sections[secId],
    en: dictionaries.en.docs.components.card.sections[secId],
  };
}

function getCardPropDesc(
  propName: keyof typeof dictionaries.id.docs.components.card.props
): Bilingual {
  return {
    id: dictionaries.id.docs.components.card.props[propName],
    en: dictionaries.en.docs.components.card.props[propName],
  };
}

function getBadgeSectionTitle(
  secId: keyof typeof dictionaries.id.docs.components.badge.sections
): Bilingual {
  return {
    id: dictionaries.id.docs.components.badge.sections[secId],
    en: dictionaries.en.docs.components.badge.sections[secId],
  };
}

function getBadgePropDesc(
  propName: keyof typeof dictionaries.id.docs.components.badge.props
): Bilingual {
  return {
    id: dictionaries.id.docs.components.badge.props[propName],
    en: dictionaries.en.docs.components.badge.props[propName],
  };
}

function getInputSectionTitle(
  secId: keyof typeof dictionaries.id.docs.components.input.sections
): Bilingual {
  return {
    id: dictionaries.id.docs.components.input.sections[secId],
    en: dictionaries.en.docs.components.input.sections[secId],
  };
}

function getInputPropDesc(
  propName: keyof typeof dictionaries.id.docs.components.input.props
): Bilingual {
  return {
    id: dictionaries.id.docs.components.input.props[propName],
    en: dictionaries.en.docs.components.input.props[propName],
  };
}

function getAvatarSectionTitle(
  secId: keyof typeof dictionaries.id.docs.components.avatar.sections
): Bilingual {
  return {
    id: dictionaries.id.docs.components.avatar.sections[secId],
    en: dictionaries.en.docs.components.avatar.sections[secId],
  };
}

function getAvatarPropDesc(
  propName: keyof typeof dictionaries.id.docs.components.avatar.props
): Bilingual {
  return {
    id: dictionaries.id.docs.components.avatar.props[propName],
    en: dictionaries.en.docs.components.avatar.props[propName],
  };
}

function getSeparatorSectionTitle(
  secId: keyof typeof dictionaries.id.docs.components.separator.sections
): Bilingual {
  return {
    id: dictionaries.id.docs.components.separator.sections[secId],
    en: dictionaries.en.docs.components.separator.sections[secId],
  };
}

function getSeparatorPropDesc(
  propName: keyof typeof dictionaries.id.docs.components.separator.props
): Bilingual {
  return {
    id: dictionaries.id.docs.components.separator.props[propName],
    en: dictionaries.en.docs.components.separator.props[propName],
  };
}

function getScrollAreaSectionTitle(
  secId: keyof (typeof dictionaries.id.docs.components)["scroll-area"]["sections"]
): Bilingual {
  return {
    id: dictionaries.id.docs.components["scroll-area"].sections[secId],
    en: dictionaries.en.docs.components["scroll-area"].sections[secId],
  };
}

function getScrollAreaPropDesc(
  propName: keyof (typeof dictionaries.id.docs.components)["scroll-area"]["props"]
): Bilingual {
  return {
    id: dictionaries.id.docs.components["scroll-area"].props[propName],
    en: dictionaries.en.docs.components["scroll-area"].props[propName],
  };
}

function getPaginationSectionTitle(
  secId: keyof typeof dictionaries.id.docs.components.pagination.sections
): Bilingual {
  return {
    id: dictionaries.id.docs.components.pagination.sections[secId],
    en: dictionaries.en.docs.components.pagination.sections[secId],
  };
}

function getPaginationPropDesc(
  propName: keyof typeof dictionaries.id.docs.components.pagination.props
): Bilingual {
  return {
    id: dictionaries.id.docs.components.pagination.props[propName],
    en: dictionaries.en.docs.components.pagination.props[propName],
  };
}

function getTableSectionTitle(
  secId: keyof typeof dictionaries.id.docs.components.table.sections
): Bilingual {
  return {
    id: dictionaries.id.docs.components.table.sections[secId],
    en: dictionaries.en.docs.components.table.sections[secId],
  };
}

function getTablePropDesc(
  propName: keyof typeof dictionaries.id.docs.components.table.props
): Bilingual {
  return {
    id: dictionaries.id.docs.components.table.props[propName],
    en: dictionaries.en.docs.components.table.props[propName],
  };
}

function getDataTableSectionTitle(
  secId: keyof (typeof dictionaries.id.docs.components)["data-table"]["sections"]
): Bilingual {
  return {
    id: dictionaries.id.docs.components["data-table"].sections[secId],
    en: dictionaries.en.docs.components["data-table"].sections[secId],
  };
}

function getDataTablePropDesc(
  propName: keyof (typeof dictionaries.id.docs.components)["data-table"]["props"]
): Bilingual {
  return {
    id: dictionaries.id.docs.components["data-table"].props[propName],
    en: dictionaries.en.docs.components["data-table"].props[propName],
  };
}

function getSidebarSectionTitle(
  secId: keyof typeof dictionaries.id.docs.components.sidebar.sections
): Bilingual {
  return {
    id: dictionaries.id.docs.components.sidebar.sections[secId],
    en: dictionaries.en.docs.components.sidebar.sections[secId],
  };
}

function getSidebarPropDesc(
  propName: keyof typeof dictionaries.id.docs.components.sidebar.props
): Bilingual {
  return {
    id: dictionaries.id.docs.components.sidebar.props[propName],
    en: dictionaries.en.docs.components.sidebar.props[propName],
  };
}

export const COMPONENT_DOCS: Record<string, ComponentDocData> = {
  button: {
    slug: "button",
    ...getComponentText("button"),
    demoName: "button-demo",
    sourceFile: "src/components/ui/button.tsx",
    registryItem: "button.json",
    sections: [
      {
        id: "status-semantik",
        title: getButtonSectionTitle("status-semantik"),
        demoName: "button-status-demo",
        propsUsed:
          'variant="default" | "success" | "info" | "warning" | "danger"',
      },
      {
        id: "size",
        title: getButtonSectionTitle("size"),
        demoName: "button-size-demo",
        propsUsed: 'size="sm" | "default" | "lg" | "icon"',
      },
      {
        id: "default",
        title: getButtonSectionTitle("default"),
        demoName: "button-default-demo",
        propsUsed: 'variant="default"',
      },
      {
        id: "secondary",
        title: getButtonSectionTitle("secondary"),
        demoName: "button-secondary-demo",
        propsUsed: 'variant="secondary"',
      },
      {
        id: "outline",
        title: getButtonSectionTitle("outline"),
        demoName: "button-outline-demo",
        propsUsed: 'variant="outline"',
      },
      {
        id: "no-shadow",
        title: getButtonSectionTitle("no-shadow"),
        demoName: "button-noshadow-demo",
        propsUsed: 'noShadow | variant="..." noShadow',
      },
      {
        id: "ghost",
        title: getButtonSectionTitle("ghost"),
        demoName: "button-ghost-demo",
        propsUsed: 'variant="ghost"',
      },
      {
        id: "with-icon",
        title: getButtonSectionTitle("with-icon"),
        demoName: "button-with-icon-demo",
        propsUsed: "children (<Icon />)",
      },
      {
        id: "icon-only",
        title: getButtonSectionTitle("icon-only"),
        demoName: "button-icon-demo",
        propsUsed: 'size="icon" aria-label="..."',
      },
      {
        id: "disable",
        title: getButtonSectionTitle("disable"),
        demoName: "button-disabled-demo",
        propsUsed: "disabled",
      },
      {
        id: "spinner",
        title: getButtonSectionTitle("spinner"),
        demoName: "button-spinner-demo",
        propsUsed: 'isLoading loadingText="..."',
      },
    ],
    propsTable: [
      {
        prop: "variant",
        type: '"default" | "secondary" | "outline" | "noShadow" | "ghost" | "success" | "info" | "warning" | "danger" | "destructive"',
        defaultValue: '"default"',
        description: getButtonPropDesc("variant"),
      },
      {
        prop: "size",
        type: '"default" | "sm" | "lg" | "icon"',
        defaultValue: '"default"',
        description: getButtonPropDesc("size"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getButtonPropDesc("noShadow"),
      },
      {
        prop: "isLoading",
        type: "boolean",
        defaultValue: "false",
        description: getButtonPropDesc("isLoading"),
      },
      {
        prop: "loadingText",
        type: "string",
        defaultValue: "undefined",
        description: getButtonPropDesc("loadingText"),
      },
      {
        prop: "disabled",
        type: "boolean",
        defaultValue: "false",
        description: getButtonPropDesc("disabled"),
      },
      {
        prop: "asChild",
        type: "boolean",
        defaultValue: "false",
        description: getButtonPropDesc("asChild"),
      },
    ],
  },
  card: {
    slug: "card",
    ...getComponentText("card"),
    demoName: "card-demo",
    sourceFile: "src/components/ui/card.tsx",
    registryItem: "card.json",
    sections: [
      {
        id: "basic",
        title: getCardSectionTitle("basic"),
        demoName: "card-basic-demo",
        propsUsed: "Card + CardHeader + CardContent + CardFooter",
      },
      {
        id: "composition",
        title: getCardSectionTitle("composition"),
        demoName: "card-composition-demo",
        propsUsed: "CardAction + Avatar + Badge + Separator + Button",
        tree: {
          name: "Card",
          role: "root",
          children: [
            {
              name: "CardHeader",
              role: "section",
              children: [
                { name: "CardTitle", role: "leaf" },
                { name: "CardDescription", role: "leaf" },
                { name: "CardAction", role: "leaf" },
              ],
            },
            { name: "CardContent", role: "section" },
            { name: "CardFooter", role: "section" },
          ],
        },
      },
      {
        id: "variant",
        title: getCardSectionTitle("variant"),
        demoName: "card-variant-demo",
        propsUsed: 'variant="default" | "primary" | "secondary" | "muted"',
      },
      {
        id: "status",
        title: getCardSectionTitle("status"),
        demoName: "card-status-demo",
        propsUsed: 'variant="success" | "info" | "warning" | "danger"',
      },
      {
        id: "accent-header",
        title: getCardSectionTitle("accent-header"),
        demoName: "card-accent-header-demo",
        propsUsed: 'CardHeader variant="secondary" | "primary"',
      },
      {
        id: "kpi",
        title: getCardSectionTitle("kpi"),
        demoName: "card-kpi-demo",
        propsUsed: "KPI Metric + font-mono + Badge",
      },
      {
        id: "form",
        title: getCardSectionTitle("form"),
        demoName: "card-form-demo",
        propsUsed: "Card + Label + Input + Button",
      },
      {
        id: "interactive",
        title: getCardSectionTitle("interactive"),
        demoName: "card-interactive-demo",
        propsUsed: "interactive",
      },
      {
        id: "no-shadow",
        title: getCardSectionTitle("no-shadow"),
        demoName: "card-noshadow-demo",
        propsUsed: 'noShadow | variant="muted" noShadow',
      },
    ],
    propsTable: [
      {
        prop: "variant",
        type: '"default" | "primary" | "secondary" | "muted" | "success" | "info" | "warning" | "danger"',
        defaultValue: '"default"',
        description: getCardPropDesc("variant"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getCardPropDesc("noShadow"),
      },
      {
        prop: "interactive",
        type: "boolean",
        defaultValue: "false",
        description: getCardPropDesc("interactive"),
      },
      {
        prop: "CardHeader.variant",
        type: '"default" | "primary" | "secondary" | "muted"',
        defaultValue: '"default"',
        description: getCardPropDesc("headerVariant"),
      },
      {
        prop: "Sub-components",
        type: "CardHeader | CardTitle | CardDescription | CardAction | CardContent | CardFooter",
        defaultValue: "—",
        description: getCardPropDesc("subComponents"),
      },
    ],
  },
  badge: {
    slug: "badge",
    ...getComponentText("badge"),
    demoName: "badge-demo",
    sourceFile: "src/components/ui/badge.tsx",
    registryItem: "badge.json",
    sections: [
      {
        id: "variant",
        title: getBadgeSectionTitle("variant"),
        demoName: "badge-variant-demo",
        propsUsed: 'variant="default" | "secondary" | "outline" | "muted"',
      },
      {
        id: "status",
        title: getBadgeSectionTitle("status"),
        demoName: "badge-status-demo",
        propsUsed: 'variant="success" | "info" | "warning" | "danger"',
      },
      {
        id: "size",
        title: getBadgeSectionTitle("size"),
        demoName: "badge-size-demo",
        propsUsed: 'size="sm" | "default" | "lg"',
      },
      {
        id: "with-icon",
        title: getBadgeSectionTitle("with-icon"),
        demoName: "badge-with-icon-demo",
        propsUsed: "children (<Icon />)",
      },
      {
        id: "dot",
        title: getBadgeSectionTitle("dot"),
        demoName: "badge-dot-demo",
        propsUsed: "dot",
      },
      {
        id: "counter",
        title: getBadgeSectionTitle("counter"),
        demoName: "badge-counter-demo",
        propsUsed: 'size="sm" noShadow className="font-mono"',
      },
      {
        id: "link",
        title: getBadgeSectionTitle("link"),
        demoName: "badge-link-demo",
        propsUsed: "asChild",
      },
      {
        id: "no-shadow",
        title: getBadgeSectionTitle("no-shadow"),
        demoName: "badge-noshadow-demo",
        propsUsed: 'noShadow | variant="..." noShadow',
      },
    ],
    propsTable: [
      {
        prop: "variant",
        type: '"default" | "secondary" | "outline" | "muted" | "success" | "info" | "warning" | "danger" | "destructive"',
        defaultValue: '"default"',
        description: getBadgePropDesc("variant"),
      },
      {
        prop: "size",
        type: '"sm" | "default" | "lg"',
        defaultValue: '"default"',
        description: getBadgePropDesc("size"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getBadgePropDesc("noShadow"),
      },
      {
        prop: "dot",
        type: "boolean",
        defaultValue: "false",
        description: getBadgePropDesc("dot"),
      },
      {
        prop: "asChild",
        type: "boolean",
        defaultValue: "false",
        description: getBadgePropDesc("asChild"),
      },
    ],
  },
  input: {
    slug: "input",
    ...getComponentText("input"),
    demoName: "input-demo",
    sourceFile: "src/components/ui/input.tsx",
    registryItem: "input.json",
    sections: [
      {
        id: "basic",
        title: getInputSectionTitle("basic"),
        demoName: "input-basic-demo",
        propsUsed: 'type="email" placeholder="..."',
      },
      {
        id: "label",
        title: getInputSectionTitle("label"),
        demoName: "input-label-demo",
        propsUsed: "Label + Input + Helper Text",
      },
      {
        id: "size",
        title: getInputSectionTitle("size"),
        demoName: "input-size-demo",
        propsUsed: 'inputSize="sm" | "default" | "lg"',
      },
      {
        id: "with-icon",
        title: getInputSectionTitle("with-icon"),
        demoName: "input-icon-demo",
        propsUsed: 'className="pl-9" | type="password"',
      },
      {
        id: "with-button",
        title: getInputSectionTitle("with-button"),
        demoName: "input-button-demo",
        propsUsed: "Input + Button",
      },
      {
        id: "addon",
        title: getInputSectionTitle("addon"),
        demoName: "input-addon-demo",
        propsUsed: 'noShadow className="border-0 rounded-none"',
      },
      {
        id: "file",
        title: getInputSectionTitle("file"),
        demoName: "input-file-demo",
        propsUsed: 'type="file"',
      },
      {
        id: "validation",
        title: getInputSectionTitle("validation"),
        demoName: "input-validation-demo",
        propsUsed: 'state="success" | "error"',
      },
      {
        id: "disabled",
        title: getInputSectionTitle("disabled"),
        demoName: "input-disabled-demo",
        propsUsed: "disabled | readOnly",
      },
      {
        id: "textarea",
        title: getInputSectionTitle("textarea"),
        demoName: "input-textarea-demo",
        propsUsed: "<Textarea /> + maxLength",
      },
      {
        id: "no-shadow",
        title: getInputSectionTitle("no-shadow"),
        demoName: "input-noshadow-demo",
        propsUsed: "noShadow",
      },
    ],
    propsTable: [
      {
        prop: "inputSize",
        type: '"sm" | "default" | "lg"',
        defaultValue: '"default"',
        description: getInputPropDesc("inputSize"),
      },
      {
        prop: "state",
        type: '"default" | "success" | "error"',
        defaultValue: '"default"',
        description: getInputPropDesc("state"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getInputPropDesc("noShadow"),
      },
      {
        prop: "type",
        type: '"text" | "email" | "password" | "number" | "file" | "search" | ...',
        defaultValue: '"text"',
        description: getInputPropDesc("type"),
      },
      {
        prop: "disabled",
        type: "boolean",
        defaultValue: "false",
        description: getInputPropDesc("disabled"),
      },
      {
        prop: "Textarea",
        type: "TextareaProps (state, noShadow, rows, maxLength)",
        defaultValue: "—",
        description: getInputPropDesc("Textarea"),
      },
    ],
  },
  avatar: {
    slug: "avatar",
    ...getComponentText("avatar"),
    demoName: "avatar-demo",
    sourceFile: "src/components/ui/avatar.tsx",
    registryItem: "avatar.json",
    sections: [
      {
        id: "basic",
        title: getAvatarSectionTitle("basic"),
        demoName: "avatar-basic-demo",
        propsUsed: "Avatar + AvatarImage + AvatarFallback",
      },
      {
        id: "size",
        title: getAvatarSectionTitle("size"),
        demoName: "avatar-size-demo",
        propsUsed: 'size="sm" | "default" | "lg" | "xl"',
      },
      {
        id: "shape",
        title: getAvatarSectionTitle("shape"),
        demoName: "avatar-shape-demo",
        propsUsed: 'shape="circle" | "square"',
      },
      {
        id: "color",
        title: getAvatarSectionTitle("color"),
        demoName: "avatar-color-demo",
        propsUsed: 'AvatarFallback className="bg-..."',
      },
      {
        id: "badge",
        title: getAvatarSectionTitle("badge"),
        demoName: "avatar-badge-demo",
        propsUsed: 'AvatarBadge status="online" | "away" | "busy" | "offline"',
      },
      {
        id: "group",
        title: getAvatarSectionTitle("group"),
        demoName: "avatar-group-demo",
        propsUsed: "<AvatarGroup /> + noShadow",
      },
      {
        id: "profile",
        title: getAvatarSectionTitle("profile"),
        demoName: "avatar-profile-demo",
        propsUsed: "Avatar + AvatarBadge + Badge",
      },
      {
        id: "no-shadow",
        title: getAvatarSectionTitle("no-shadow"),
        demoName: "avatar-noshadow-demo",
        propsUsed: "noShadow",
      },
    ],
    propsTable: [
      {
        prop: "size",
        type: '"sm" | "default" | "lg" | "xl"',
        defaultValue: '"default"',
        description: getAvatarPropDesc("size"),
      },
      {
        prop: "shape",
        type: '"circle" | "square"',
        defaultValue: '"circle"',
        description: getAvatarPropDesc("shape"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getAvatarPropDesc("noShadow"),
      },
      {
        prop: "AvatarBadge",
        type: 'status ("online" | "away" | "busy" | "offline"), badgeSize ("sm" | "default" | "lg")',
        defaultValue: '"online"',
        description: getAvatarPropDesc("AvatarBadge"),
      },
      {
        prop: "AvatarGroup",
        type: "React.HTMLAttributes<HTMLDivElement>",
        defaultValue: "—",
        description: getAvatarPropDesc("AvatarGroup"),
      },
    ],
  },
  separator: {
    slug: "separator",
    ...getComponentText("separator"),
    demoName: "separator-demo",
    sourceFile: "src/components/ui/separator.tsx",
    registryItem: "separator.json",
    sections: [
      {
        id: "basic",
        title: getSeparatorSectionTitle("basic"),
        demoName: "separator-basic-demo",
        propsUsed: 'orientation="horizontal" | "vertical"',
      },
      {
        id: "variant",
        title: getSeparatorSectionTitle("variant"),
        demoName: "separator-variant-demo",
        propsUsed: 'variant="solid" | "dashed" | "dotted" | "muted"',
      },
      {
        id: "thickness",
        title: getSeparatorSectionTitle("thickness"),
        demoName: "separator-thickness-demo",
        propsUsed: 'thickness="thin" | "default" | "thick"',
      },
      {
        id: "label",
        title: getSeparatorSectionTitle("label"),
        demoName: "separator-label-demo",
        propsUsed: 'label="OR" | children',
      },
      {
        id: "list",
        title: getSeparatorSectionTitle("list"),
        demoName: "separator-list-demo",
        propsUsed: 'variant="muted" thickness="thin"',
      },
    ],
    propsTable: [
      {
        prop: "orientation",
        type: '"horizontal" | "vertical"',
        defaultValue: '"horizontal"',
        description: getSeparatorPropDesc("orientation"),
      },
      {
        prop: "variant",
        type: '"solid" | "dashed" | "dotted" | "muted"',
        defaultValue: '"solid"',
        description: getSeparatorPropDesc("variant"),
      },
      {
        prop: "thickness",
        type: '"thin" | "default" | "thick"',
        defaultValue: '"default"',
        description: getSeparatorPropDesc("thickness"),
      },
      {
        prop: "label",
        type: "React.ReactNode",
        defaultValue: "undefined",
        description: getSeparatorPropDesc("label"),
      },
      {
        prop: "decorative",
        type: "boolean",
        defaultValue: "true",
        description: getSeparatorPropDesc("decorative"),
      },
    ],
  },
  "scroll-area": {
    slug: "scroll-area",
    ...getComponentText("scroll-area"),
    demoName: "scroll-area-demo",
    sourceFile: "src/components/ui/scroll-area.tsx",
    registryItem: "scroll-area.json",
    sections: [
      {
        id: "vertical",
        title: getScrollAreaSectionTitle("vertical"),
        demoName: "scroll-area-vertical-demo",
        propsUsed: 'orientation="vertical" className="h-60"',
      },
      {
        id: "horizontal",
        title: getScrollAreaSectionTitle("horizontal"),
        demoName: "scroll-area-horizontal-demo",
        propsUsed: 'orientation="horizontal"',
      },
      {
        id: "both",
        title: getScrollAreaSectionTitle("both"),
        demoName: "scroll-area-both-demo",
        propsUsed: 'orientation="both"',
      },
      {
        id: "size",
        title: getScrollAreaSectionTitle("size"),
        demoName: "scroll-area-size-demo",
        propsUsed: 'scrollbarSize="sm" | "md" | "lg" | number',
      },
      {
        id: "ghost",
        title: getScrollAreaSectionTitle("ghost"),
        demoName: "scroll-area-ghost-demo",
        propsUsed: 'variant="ghost" | noShadow',
      },
    ],
    propsTable: [
      {
        prop: "orientation",
        type: '"vertical" | "horizontal" | "both"',
        defaultValue: '"vertical"',
        description: getScrollAreaPropDesc("orientation"),
      },
      {
        prop: "scrollbarSize",
        type: '"sm" | "md" | "lg" | number',
        defaultValue: '"sm"',
        description: getScrollAreaPropDesc("scrollbarSize"),
      },
      {
        prop: "variant",
        type: '"default" | "ghost"',
        defaultValue: '"default"',
        description: getScrollAreaPropDesc("variant"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getScrollAreaPropDesc("noShadow"),
      },
      {
        prop: "viewportClassName",
        type: "string",
        defaultValue: "undefined",
        description: getScrollAreaPropDesc("viewportClassName"),
      },
    ],
  },
  pagination: {
    slug: "pagination",
    ...getComponentText("pagination"),
    demoName: "pagination-demo",
    sourceFile: "src/components/ui/pagination.tsx",
    registryItem: "pagination.json",
    sections: [
      {
        id: "basic",
        title: getPaginationSectionTitle("basic"),
        demoName: "pagination-basic-demo",
        propsUsed: "Pagination + PaginationLink + Previous/Next",
      },
      {
        id: "composition",
        title: getPaginationSectionTitle("composition"),
        tree: {
          name: "Pagination",
          role: "root",
          children: [
            {
              name: "PaginationContent",
              role: "section",
              children: [
                {
                  name: "PaginationItem",
                  role: "leaf",
                  children: [{ name: "PaginationPrevious", role: "leaf" }],
                },
                {
                  name: "PaginationItem",
                  role: "leaf",
                  children: [{ name: "PaginationLink", role: "leaf" }],
                },
                {
                  name: "PaginationItem",
                  role: "leaf",
                  children: [{ name: "PaginationEllipsis", role: "leaf" }],
                },
                {
                  name: "PaginationItem",
                  role: "leaf",
                  children: [{ name: "PaginationNext", role: "leaf" }],
                },
              ],
            },
          ],
        },
      },
      {
        id: "ellipsis",
        title: getPaginationSectionTitle("ellipsis"),
        demoName: "pagination-ellipsis-demo",
        propsUsed: "<PaginationEllipsis />",
      },
      {
        id: "size",
        title: getPaginationSectionTitle("size"),
        demoName: "pagination-size-demo",
        propsUsed: 'size="sm" | "default" | "icon"',
      },
      {
        id: "compact",
        title: getPaginationSectionTitle("compact"),
        demoName: "pagination-compact-demo",
        propsUsed: "PaginationFirst/Last + iconOnly",
      },
      {
        id: "no-shadow",
        title: getPaginationSectionTitle("no-shadow"),
        demoName: "pagination-noshadow-demo",
        propsUsed: "noShadow",
      },
      {
        id: "rows-per-page",
        title: getPaginationSectionTitle("rows-per-page"),
        demoName: "pagination-rows-demo",
        propsUsed: "Rows per page + First/Prev/Next/Last",
      },
    ],
    propsTable: [
      {
        prop: "isActive",
        type: "boolean",
        defaultValue: "false",
        description: getPaginationPropDesc("isActive"),
      },
      {
        prop: "size",
        type: '"sm" | "default" | "lg" | "icon"',
        defaultValue: '"icon"',
        description: getPaginationPropDesc("size"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getPaginationPropDesc("noShadow"),
      },
      {
        prop: "disabled",
        type: "boolean",
        defaultValue: "false",
        description: getPaginationPropDesc("disabled"),
      },
      {
        prop: "iconOnly",
        type: "boolean",
        defaultValue: "false",
        description: getPaginationPropDesc("iconOnly"),
      },
      {
        prop: "asChild",
        type: "boolean",
        defaultValue: "false",
        description: getPaginationPropDesc("asChild"),
      },
    ],
  },
  table: {
    slug: "table",
    ...getComponentText("table"),
    demoName: "table-demo",
    sourceFile: "src/components/ui/table.tsx",
    registryItem: "table.json",
    sections: [
      {
        id: "basic",
        title: getTableSectionTitle("basic"),
        demoName: "table-basic-demo",
        propsUsed: "Table + TableHeader + TableBody + TableFooter",
      },
      {
        id: "composition",
        title: getTableSectionTitle("composition"),
        tree: {
          name: "Table",
          role: "root",
          children: [
            {
              name: "TableHeader",
              role: "section",
              children: [
                {
                  name: "TableRow",
                  role: "leaf",
                  children: [{ name: "TableHead", role: "leaf" }],
                },
              ],
            },
            {
              name: "TableBody",
              role: "section",
              children: [
                {
                  name: "TableRow",
                  role: "leaf",
                  children: [{ name: "TableCell", role: "leaf" }],
                },
              ],
            },
            {
              name: "TableFooter",
              role: "section",
              children: [
                {
                  name: "TableRow",
                  role: "leaf",
                  children: [{ name: "TableCell", role: "leaf" }],
                },
              ],
            },
            { name: "TableCaption", role: "leaf" },
          ],
        },
      },
      {
        id: "header",
        title: getTableSectionTitle("header"),
        demoName: "table-header-demo",
        propsUsed:
          'headerVariant="secondary" | "primary" | "muted" | "default"',
      },
      {
        id: "grid",
        title: getTableSectionTitle("grid"),
        demoName: "table-grid-demo",
        propsUsed: "grid striped",
      },
      {
        id: "hoverable",
        title: getTableSectionTitle("hoverable"),
        demoName: "table-hoverable-demo",
        propsUsed: "hoverable",
      },
      {
        id: "compact",
        title: getTableSectionTitle("compact"),
        demoName: "table-compact-demo",
        propsUsed: "compact noShadow",
      },
      {
        id: "actions",
        title: getTableSectionTitle("actions"),
        demoName: "table-actions-demo",
        propsUsed: "Table + Avatar + Badge + Button",
      },
    ],
    propsTable: [
      {
        prop: "headerVariant",
        type: '"secondary" | "primary" | "muted" | "default"',
        defaultValue: '"secondary"',
        description: getTablePropDesc("headerVariant"),
      },
      {
        prop: "grid",
        type: "boolean",
        defaultValue: "false",
        description: getTablePropDesc("grid"),
      },
      {
        prop: "striped",
        type: "boolean",
        defaultValue: "false",
        description: getTablePropDesc("striped"),
      },
      {
        prop: "hoverable",
        type: "boolean",
        defaultValue: "false",
        description: getTablePropDesc("hoverable"),
      },
      {
        prop: "compact",
        type: "boolean",
        defaultValue: "false",
        description: getTablePropDesc("compact"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getTablePropDesc("noShadow"),
      },
      {
        prop: "containerClassName",
        type: "string",
        defaultValue: "undefined",
        description: getTablePropDesc("containerClassName"),
      },
    ],
  },
  "data-table": {
    slug: "data-table",
    ...getComponentText("data-table"),
    demoName: "data-table-demo",
    sourceFile: "src/components/ui/data-table.tsx",
    registryItem: "data-table",
    sections: [
      {
        id: "basic",
        title: getDataTableSectionTitle("basic"),
        demoName: "data-table-basic-demo",
        propsUsed: "columns data",
      },
      {
        id: "composition",
        title: getDataTableSectionTitle("composition"),
        tree: {
          name: "DataTable",
          role: "root",
          children: [
            {
              name: "Toolbar",
              role: "section",
              children: [
                { name: "Input (searchKey)", role: "leaf" },
                { name: "Button (enableColumnVisibility)", role: "leaf" },
              ],
            },
            {
              name: "Table",
              role: "section",
              children: [
                {
                  name: "TableHeader",
                  role: "section",
                  children: [{ name: "DataTableColumnHeader", role: "leaf" }],
                },
                { name: "TableBody", role: "leaf" },
              ],
            },
            {
              name: "DataTablePagination (paginated)",
              role: "section",
              children: [
                { name: "Rows Per Page Select", role: "leaf" },
                { name: "Pagination", role: "leaf" },
              ],
            },
          ],
        },
      },
      {
        id: "sorting",
        title: getDataTableSectionTitle("sorting"),
        demoName: "data-table-sorting-demo",
        propsUsed: "searchKey DataTableColumnHeader hoverable",
      },
      {
        id: "pagination",
        title: getDataTableSectionTitle("pagination"),
        demoName: "data-table-pagination-demo",
        propsUsed: "paginated pageSize pageSizeOptions",
      },
      {
        id: "selection",
        title: getDataTableSectionTitle("selection"),
        demoName: "data-table-selection-demo",
        propsUsed: "enableRowSelection paginated",
      },
      {
        id: "columns",
        title: getDataTableSectionTitle("columns"),
        demoName: "data-table-columns-demo",
        propsUsed: "enableColumnVisibility grid striped",
      },
      {
        id: "compact",
        title: getDataTableSectionTitle("compact"),
        demoName: "data-table-compact-demo",
        propsUsed: 'compact noShadow headerVariant="primary"',
      },
    ],
    propsTable: [
      {
        prop: "columns",
        type: "ColumnDef<TData, TValue>[]",
        defaultValue: "required",
        description: getDataTablePropDesc("columns"),
      },
      {
        prop: "data",
        type: "TData[]",
        defaultValue: "required",
        description: getDataTablePropDesc("data"),
      },
      {
        prop: "searchKey",
        type: "string",
        defaultValue: "undefined",
        description: getDataTablePropDesc("searchKey"),
      },
      {
        prop: "searchPlaceholder",
        type: "string",
        defaultValue: '"Search..."',
        description: getDataTablePropDesc("searchPlaceholder"),
      },
      {
        prop: "paginated",
        type: "boolean",
        defaultValue: "false",
        description: getDataTablePropDesc("paginated"),
      },
      {
        prop: "pageSize",
        type: "number",
        defaultValue: "5",
        description: getDataTablePropDesc("pageSize"),
      },
      {
        prop: "pageSizeOptions",
        type: "number[]",
        defaultValue: "[5, 10, 20]",
        description: getDataTablePropDesc("pageSizeOptions"),
      },
      {
        prop: "enableColumnVisibility",
        type: "boolean",
        defaultValue: "false",
        description: getDataTablePropDesc("enableColumnVisibility"),
      },
      {
        prop: "enableRowSelection",
        type: "boolean",
        defaultValue: "false",
        description: getDataTablePropDesc("enableRowSelection"),
      },
      {
        prop: "headerVariant",
        type: '"secondary" | "primary" | "muted" | "default"',
        defaultValue: '"secondary"',
        description: getDataTablePropDesc("headerVariant"),
      },
      {
        prop: "grid",
        type: "boolean",
        defaultValue: "false",
        description: getDataTablePropDesc("grid"),
      },
      {
        prop: "striped",
        type: "boolean",
        defaultValue: "false",
        description: getDataTablePropDesc("striped"),
      },
      {
        prop: "hoverable",
        type: "boolean",
        defaultValue: "false",
        description: getDataTablePropDesc("hoverable"),
      },
      {
        prop: "compact",
        type: "boolean",
        defaultValue: "false",
        description: getDataTablePropDesc("compact"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getDataTablePropDesc("noShadow"),
      },
    ],
  },
  sidebar: {
    slug: "sidebar",
    ...getComponentText("sidebar"),
    demoName: "sidebar-demo",
    sourceFile: "src/components/ui/sidebar.tsx",
    registryItem: "sidebar",
    sections: [
      {
        id: "basic",
        title: getSidebarSectionTitle("basic"),
        demoName: "sidebar-basic-demo",
        propsUsed: "SidebarProvider Sidebar SidebarTrigger SidebarInset",
      },
      {
        id: "composition",
        title: getSidebarSectionTitle("composition"),
        tree: {
          name: "SidebarProvider",
          role: "root",
          children: [
            {
              name: "Sidebar",
              role: "section",
              children: [
                { name: "SidebarHeader", role: "leaf" },
                {
                  name: "SidebarContent",
                  role: "section",
                  children: [
                    {
                      name: "SidebarGroup",
                      role: "section",
                      children: [
                        { name: "SidebarGroupLabel", role: "leaf" },
                        { name: "SidebarGroupAction", role: "leaf" },
                        {
                          name: "SidebarGroupContent",
                          role: "section",
                          children: [
                            {
                              name: "SidebarMenu",
                              role: "section",
                              children: [
                                {
                                  name: "SidebarMenuItem",
                                  role: "section",
                                  children: [
                                    { name: "SidebarMenuButton", role: "leaf" },
                                    { name: "SidebarMenuBadge", role: "leaf" },
                                    {
                                      name: "SidebarMenuSub",
                                      role: "section",
                                      children: [
                                        {
                                          name: "SidebarMenuSubItem",
                                          role: "section",
                                          children: [
                                            {
                                              name: "SidebarMenuSubButton",
                                              role: "leaf",
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                { name: "SidebarFooter", role: "leaf" },
              ],
            },
            {
              name: "SidebarInset",
              role: "section",
              children: [{ name: "SidebarTrigger", role: "leaf" }],
            },
          ],
        },
      },
      {
        id: "collapsible",
        title: getSidebarSectionTitle("collapsible"),
        demoName: "sidebar-collapsible-demo",
        propsUsed: 'collapsible="icon" defaultOpen={false}',
      },
      {
        id: "submenu",
        title: getSidebarSectionTitle("submenu"),
        demoName: "sidebar-submenu-demo",
        propsUsed: "SidebarMenuSub SidebarMenuBadge SidebarGroupAction",
      },
      {
        id: "floating",
        title: getSidebarSectionTitle("floating"),
        demoName: "sidebar-floating-demo",
        propsUsed: 'variant="floating"',
      },
      {
        id: "right",
        title: getSidebarSectionTitle("right"),
        demoName: "sidebar-right-demo",
        propsUsed: 'side="right"',
      },
    ],
    propsTable: [
      {
        prop: "defaultOpen",
        type: "boolean",
        defaultValue: "true",
        description: getSidebarPropDesc("defaultOpen"),
      },
      {
        prop: "side",
        type: '"left" | "right"',
        defaultValue: '"left"',
        description: getSidebarPropDesc("side"),
      },
      {
        prop: "variant",
        type: '"sidebar" | "floating" | "inset"',
        defaultValue: '"sidebar"',
        description: getSidebarPropDesc("variant"),
      },
      {
        prop: "collapsible",
        type: '"offcanvas" | "icon" | "none"',
        defaultValue: '"offcanvas"',
        description: getSidebarPropDesc("collapsible"),
      },
      {
        prop: "isActive",
        type: "boolean",
        defaultValue: "false",
        description: getSidebarPropDesc("isActive"),
      },
      {
        prop: "tooltip",
        type: "string",
        defaultValue: "undefined",
        description: getSidebarPropDesc("tooltip"),
      },
    ],
  },
};

export const CATALOG_LIST = Object.values(COMPONENT_DOCS);
