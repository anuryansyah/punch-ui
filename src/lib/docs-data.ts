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

function getSelectSectionTitle(
  secId: keyof typeof dictionaries.id.docs.components.select.sections
): Bilingual {
  return {
    id: dictionaries.id.docs.components.select.sections[secId],
    en: dictionaries.en.docs.components.select.sections[secId],
  };
}

function getSelectPropDesc(
  propName: keyof typeof dictionaries.id.docs.components.select.props
): Bilingual {
  return {
    id: dictionaries.id.docs.components.select.props[propName],
    en: dictionaries.en.docs.components.select.props[propName],
  };
}

function getCheckboxSectionTitle(
  secId: keyof typeof dictionaries.id.docs.components.checkbox.sections
): Bilingual {
  return {
    id: dictionaries.id.docs.components.checkbox.sections[secId],
    en: dictionaries.en.docs.components.checkbox.sections[secId],
  };
}

function getCheckboxPropDesc(
  propName: keyof typeof dictionaries.id.docs.components.checkbox.props
): Bilingual {
  return {
    id: dictionaries.id.docs.components.checkbox.props[propName],
    en: dictionaries.en.docs.components.checkbox.props[propName],
  };
}

function getRadioGroupSectionTitle(
  secId: keyof (typeof dictionaries.id.docs.components)["radio-group"]["sections"]
): Bilingual {
  return {
    id: dictionaries.id.docs.components["radio-group"].sections[secId],
    en: dictionaries.en.docs.components["radio-group"].sections[secId],
  };
}

function getRadioGroupPropDesc(
  propName: keyof (typeof dictionaries.id.docs.components)["radio-group"]["props"]
): Bilingual {
  return {
    id: dictionaries.id.docs.components["radio-group"].props[propName],
    en: dictionaries.en.docs.components["radio-group"].props[propName],
  };
}

function getSwitchSectionTitle(
  secId: keyof typeof dictionaries.id.docs.components.switch.sections
): Bilingual {
  return {
    id: dictionaries.id.docs.components.switch.sections[secId],
    en: dictionaries.en.docs.components.switch.sections[secId],
  };
}

function getSwitchPropDesc(
  propName: keyof typeof dictionaries.id.docs.components.switch.props
): Bilingual {
  return {
    id: dictionaries.id.docs.components.switch.props[propName],
    en: dictionaries.en.docs.components.switch.props[propName],
  };
}

function getSliderSectionTitle(
  secId: keyof typeof dictionaries.id.docs.components.slider.sections
): Bilingual {
  return {
    id: dictionaries.id.docs.components.slider.sections[secId],
    en: dictionaries.en.docs.components.slider.sections[secId],
  };
}

function getSliderPropDesc(
  propName: keyof typeof dictionaries.id.docs.components.slider.props
): Bilingual {
  return {
    id: dictionaries.id.docs.components.slider.props[propName],
    en: dictionaries.en.docs.components.slider.props[propName],
  };
}

function getFormSectionTitle(
  secId: keyof typeof dictionaries.id.docs.components.form.sections
): Bilingual {
  return {
    id: dictionaries.id.docs.components.form.sections[secId],
    en: dictionaries.en.docs.components.form.sections[secId],
  };
}

function getFormPropDesc(
  propName: keyof typeof dictionaries.id.docs.components.form.props
): Bilingual {
  return {
    id: dictionaries.id.docs.components.form.props[propName],
    en: dictionaries.en.docs.components.form.props[propName],
  };
}

function getDatePickerSectionTitle(
  secId: keyof (typeof dictionaries.id.docs.components)["date-picker"]["sections"]
): Bilingual {
  return {
    id: dictionaries.id.docs.components["date-picker"].sections[secId],
    en: dictionaries.en.docs.components["date-picker"].sections[secId],
  };
}

function getDatePickerPropDesc(
  propName: keyof (typeof dictionaries.id.docs.components)["date-picker"]["props"]
): Bilingual {
  return {
    id: dictionaries.id.docs.components["date-picker"].props[propName],
    en: dictionaries.en.docs.components["date-picker"].props[propName],
  };
}

function getCommandSectionTitle(
  secId: keyof typeof dictionaries.id.docs.components.command.sections
): Bilingual {
  return {
    id: dictionaries.id.docs.components.command.sections[secId],
    en: dictionaries.en.docs.components.command.sections[secId],
  };
}

function getCommandPropDesc(
  propName: keyof typeof dictionaries.id.docs.components.command.props
): Bilingual {
  return {
    id: dictionaries.id.docs.components.command.props[propName],
    en: dictionaries.en.docs.components.command.props[propName],
  };
}

function getComboboxSectionTitle(
  secId: keyof typeof dictionaries.id.docs.components.combobox.sections
): Bilingual {
  return {
    id: dictionaries.id.docs.components.combobox.sections[secId],
    en: dictionaries.en.docs.components.combobox.sections[secId],
  };
}

function getComboboxPropDesc(
  propName: keyof typeof dictionaries.id.docs.components.combobox.props
): Bilingual {
  return {
    id: dictionaries.id.docs.components.combobox.props[propName],
    en: dictionaries.en.docs.components.combobox.props[propName],
  };
}

function getInputOtpSectionTitle(
  secId: keyof (typeof dictionaries.id.docs.components)["input-otp"]["sections"]
): Bilingual {
  return {
    id: dictionaries.id.docs.components["input-otp"].sections[secId],
    en: dictionaries.en.docs.components["input-otp"].sections[secId],
  };
}

function getInputOtpPropDesc(
  propName: keyof (typeof dictionaries.id.docs.components)["input-otp"]["props"]
): Bilingual {
  return {
    id: dictionaries.id.docs.components["input-otp"].props[propName],
    en: dictionaries.en.docs.components["input-otp"].props[propName],
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
      {
        id: "image",
        title: getCardSectionTitle("image"),
        demoName: "card-image-demo",
        propsUsed: "Card + Image + Badge + Button",
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
  select: {
    slug: "select",
    ...getComponentText("select"),
    demoName: "select-demo",
    sourceFile: "src/components/ui/select.tsx",
    registryItem: "select",
    sections: [
      {
        id: "basic",
        title: getSelectSectionTitle("basic"),
        demoName: "select-basic-demo",
        propsUsed: "Select SelectTrigger SelectValue SelectContent SelectItem",
      },
      {
        id: "composition",
        title: getSelectSectionTitle("composition"),
        tree: {
          name: "Select",
          role: "root",
          children: [
            {
              name: "SelectTrigger",
              role: "section",
              children: [{ name: "SelectValue", role: "leaf" }],
            },
            {
              name: "SelectContent",
              role: "section",
              children: [
                {
                  name: "SelectGroup",
                  role: "section",
                  children: [
                    { name: "SelectLabel", role: "leaf" },
                    { name: "SelectItem", role: "leaf" },
                    { name: "SelectSeparator", role: "leaf" },
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        id: "size",
        title: getSelectSectionTitle("size"),
        demoName: "select-size-demo",
        propsUsed: 'selectSize="sm | default | lg"',
      },
      {
        id: "align",
        title: getSelectSectionTitle("align"),
        demoName: "select-align-demo",
        propsUsed: 'position="item-aligned" align="end"',
      },
      {
        id: "grouped",
        title: getSelectSectionTitle("grouped"),
        demoName: "select-grouped-demo",
        propsUsed: "SelectGroup SelectLabel SelectSeparator",
      },
      {
        id: "clearable",
        title: getSelectSectionTitle("clearable"),
        demoName: "select-clearable-demo",
        propsUsed: "clearable onClear",
      },
      {
        id: "states",
        title: getSelectSectionTitle("states"),
        demoName: "select-states-demo",
        propsUsed: 'state="success | error" disabled',
      },
      {
        id: "form",
        title: getSelectSectionTitle("form"),
        demoName: "select-form-demo",
        propsUsed: "noShadow Label Card",
      },
    ],
    propsTable: [
      {
        prop: "selectSize",
        type: '"sm" | "default" | "lg"',
        defaultValue: '"default"',
        description: getSelectPropDesc("selectSize"),
      },
      {
        prop: "state",
        type: '"default" | "error" | "success"',
        defaultValue: '"default"',
        description: getSelectPropDesc("state"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getSelectPropDesc("noShadow"),
      },
      {
        prop: "clearable",
        type: "boolean",
        defaultValue: "false",
        description: getSelectPropDesc("clearable"),
      },
      {
        prop: "onClear",
        type: "() => void",
        defaultValue: "undefined",
        description: getSelectPropDesc("onClear"),
      },
      {
        prop: "position",
        type: '"popper" | "item-aligned"',
        defaultValue: '"popper"',
        description: getSelectPropDesc("position"),
      },
      {
        prop: "align",
        type: '"start" | "center" | "end"',
        defaultValue: '"center"',
        description: getSelectPropDesc("align"),
      },
      {
        prop: "defaultValue",
        type: "string",
        defaultValue: "undefined",
        description: getSelectPropDesc("defaultValue"),
      },
      {
        prop: "value",
        type: "string",
        defaultValue: "undefined",
        description: getSelectPropDesc("value"),
      },
      {
        prop: "disabled",
        type: "boolean",
        defaultValue: "false",
        description: getSelectPropDesc("disabled"),
      },
    ],
  },
  checkbox: {
    slug: "checkbox",
    ...getComponentText("checkbox"),
    demoName: "checkbox-demo",
    sourceFile: "src/components/ui/checkbox.tsx",
    registryItem: "checkbox",
    sections: [
      {
        id: "basic",
        title: getCheckboxSectionTitle("basic"),
        demoName: "checkbox-basic-demo",
        propsUsed: "Checkbox Label defaultChecked",
      },
      {
        id: "size",
        title: getCheckboxSectionTitle("size"),
        demoName: "checkbox-size-demo",
        propsUsed: 'checkboxSize="sm | default | lg"',
      },
      {
        id: "variants",
        title: getCheckboxSectionTitle("variants"),
        demoName: "checkbox-variant-demo",
        propsUsed:
          'variant="primary | secondary | success | info | warning | destructive"',
      },
      {
        id: "indeterminate",
        title: getCheckboxSectionTitle("indeterminate"),
        demoName: "checkbox-indeterminate-demo",
        propsUsed: 'checked="indeterminate" onCheckedChange',
      },
      {
        id: "card",
        title: getCheckboxSectionTitle("card"),
        demoName: "checkbox-card-demo",
        propsUsed: "noShadow variant",
      },
      {
        id: "states",
        title: getCheckboxSectionTitle("states"),
        demoName: "checkbox-states-demo",
        propsUsed: 'state="error" disabled noShadow',
      },
    ],
    propsTable: [
      {
        prop: "variant",
        type: '"primary" | "secondary" | "success" | "info" | "warning" | "danger" | "destructive"',
        defaultValue: '"primary"',
        description: getCheckboxPropDesc("variant"),
      },
      {
        prop: "checkboxSize",
        type: '"sm" | "default" | "lg"',
        defaultValue: '"default"',
        description: getCheckboxPropDesc("checkboxSize"),
      },
      {
        prop: "state",
        type: '"default" | "error"',
        defaultValue: '"default"',
        description: getCheckboxPropDesc("state"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getCheckboxPropDesc("noShadow"),
      },
      {
        prop: "checked",
        type: 'boolean | "indeterminate"',
        defaultValue: "undefined",
        description: getCheckboxPropDesc("checked"),
      },
      {
        prop: "defaultChecked",
        type: 'boolean | "indeterminate"',
        defaultValue: "false",
        description: getCheckboxPropDesc("defaultChecked"),
      },
      {
        prop: "disabled",
        type: "boolean",
        defaultValue: "false",
        description: getCheckboxPropDesc("disabled"),
      },
    ],
  },
  "radio-group": {
    slug: "radio-group",
    ...getComponentText("radio-group"),
    demoName: "radio-group-demo",
    sourceFile: "src/components/ui/radio-group.tsx",
    registryItem: "radio-group",
    sections: [
      {
        id: "basic",
        title: getRadioGroupSectionTitle("basic"),
        demoName: "radio-group-basic-demo",
        propsUsed: "RadioGroup RadioGroupItem Label",
      },
      {
        id: "shape",
        title: getRadioGroupSectionTitle("shape"),
        demoName: "radio-group-shape-demo",
        propsUsed: 'shape="circle | square" orientation="horizontal"',
      },
      {
        id: "size",
        title: getRadioGroupSectionTitle("size"),
        demoName: "radio-group-size-demo",
        propsUsed: 'radioSize="sm | default | lg"',
      },
      {
        id: "variants",
        title: getRadioGroupSectionTitle("variants"),
        demoName: "radio-group-variant-demo",
        propsUsed:
          'variant="primary | secondary | success | info | warning | destructive"',
      },
      {
        id: "card",
        title: getRadioGroupSectionTitle("card"),
        demoName: "radio-group-card-demo",
        propsUsed: "noShadow value onValueChange",
      },
      {
        id: "states",
        title: getRadioGroupSectionTitle("states"),
        demoName: "radio-group-states-demo",
        propsUsed: 'state="error" disabled noShadow',
      },
    ],
    propsTable: [
      {
        prop: "orientation",
        type: '"vertical" | "horizontal"',
        defaultValue: '"vertical"',
        description: getRadioGroupPropDesc("orientation"),
      },
      {
        prop: "shape",
        type: '"circle" | "square"',
        defaultValue: '"circle"',
        description: getRadioGroupPropDesc("shape"),
      },
      {
        prop: "radioSize",
        type: '"sm" | "default" | "lg"',
        defaultValue: '"default"',
        description: getRadioGroupPropDesc("radioSize"),
      },
      {
        prop: "variant",
        type: '"primary" | "secondary" | "success" | "info" | "warning" | "danger" | "destructive"',
        defaultValue: '"primary"',
        description: getRadioGroupPropDesc("variant"),
      },
      {
        prop: "state",
        type: '"default" | "error"',
        defaultValue: '"default"',
        description: getRadioGroupPropDesc("state"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getRadioGroupPropDesc("noShadow"),
      },
      {
        prop: "defaultValue",
        type: "string",
        defaultValue: "undefined",
        description: getRadioGroupPropDesc("defaultValue"),
      },
      {
        prop: "value",
        type: "string",
        defaultValue: "undefined",
        description: getRadioGroupPropDesc("value"),
      },
      {
        prop: "disabled",
        type: "boolean",
        defaultValue: "false",
        description: getRadioGroupPropDesc("disabled"),
      },
    ],
  },
  switch: {
    slug: "switch",
    ...getComponentText("switch"),
    demoName: "switch-demo",
    sourceFile: "src/components/ui/switch.tsx",
    registryItem: "switch",
    sections: [
      {
        id: "basic",
        title: getSwitchSectionTitle("basic"),
        demoName: "switch-basic-demo",
        propsUsed: "Switch Label defaultChecked",
      },
      {
        id: "shape",
        title: getSwitchSectionTitle("shape"),
        demoName: "switch-shape-demo",
        propsUsed: 'shape="pill | square"',
      },
      {
        id: "size",
        title: getSwitchSectionTitle("size"),
        demoName: "switch-size-demo",
        propsUsed: 'switchSize="sm | default | lg"',
      },
      {
        id: "variants",
        title: getSwitchSectionTitle("variants"),
        demoName: "switch-variant-demo",
        propsUsed:
          'variant="primary | secondary | success | info | warning | destructive"',
      },
      {
        id: "card",
        title: getSwitchSectionTitle("card"),
        demoName: "switch-card-demo",
        propsUsed: "Card noShadow checked onCheckedChange",
      },
      {
        id: "states",
        title: getSwitchSectionTitle("states"),
        demoName: "switch-states-demo",
        propsUsed: "disabled noShadow",
      },
    ],
    propsTable: [
      {
        prop: "variant",
        type: '"primary" | "secondary" | "success" | "info" | "warning" | "danger" | "destructive"',
        defaultValue: '"primary"',
        description: getSwitchPropDesc("variant"),
      },
      {
        prop: "switchSize",
        type: '"sm" | "default" | "lg"',
        defaultValue: '"default"',
        description: getSwitchPropDesc("switchSize"),
      },
      {
        prop: "shape",
        type: '"square" | "pill"',
        defaultValue: '"square"',
        description: getSwitchPropDesc("shape"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getSwitchPropDesc("noShadow"),
      },
      {
        prop: "checked",
        type: "boolean",
        defaultValue: "undefined",
        description: getSwitchPropDesc("checked"),
      },
      {
        prop: "defaultChecked",
        type: "boolean",
        defaultValue: "false",
        description: getSwitchPropDesc("defaultChecked"),
      },
      {
        prop: "disabled",
        type: "boolean",
        defaultValue: "false",
        description: getSwitchPropDesc("disabled"),
      },
    ],
  },
  slider: {
    slug: "slider",
    ...getComponentText("slider"),
    demoName: "slider-demo",
    sourceFile: "src/components/ui/slider.tsx",
    registryItem: "slider",
    sections: [
      {
        id: "basic",
        title: getSliderSectionTitle("basic"),
        demoName: "slider-basic-demo",
        propsUsed: "Slider value onValueChange max step",
      },
      {
        id: "range",
        title: getSliderSectionTitle("range"),
        demoName: "slider-range-demo",
        propsUsed: "value={[25, 75]} step={5}",
      },
      {
        id: "size",
        title: getSliderSectionTitle("size"),
        demoName: "slider-size-demo",
        propsUsed: 'sliderSize="sm | default | lg" shape="square | circle"',
      },
      {
        id: "variants",
        title: getSliderSectionTitle("variants"),
        demoName: "slider-variant-demo",
        propsUsed:
          'variant="primary | secondary | success | info | warning | destructive"',
      },
      {
        id: "stepped",
        title: getSliderSectionTitle("stepped"),
        demoName: "slider-stepped-demo",
        propsUsed: 'step={25} orientation="vertical"',
      },
      {
        id: "states",
        title: getSliderSectionTitle("states"),
        demoName: "slider-states-demo",
        propsUsed: "disabled noShadow",
      },
    ],
    propsTable: [
      {
        prop: "variant",
        type: '"primary" | "secondary" | "success" | "info" | "warning" | "danger" | "destructive"',
        defaultValue: '"primary"',
        description: getSliderPropDesc("variant"),
      },
      {
        prop: "sliderSize",
        type: '"sm" | "default" | "lg"',
        defaultValue: '"default"',
        description: getSliderPropDesc("sliderSize"),
      },
      {
        prop: "shape",
        type: '"square" | "circle"',
        defaultValue: '"square"',
        description: getSliderPropDesc("shape"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getSliderPropDesc("noShadow"),
      },
      {
        prop: "defaultValue",
        type: "number[]",
        defaultValue: "undefined",
        description: getSliderPropDesc("defaultValue"),
      },
      {
        prop: "value",
        type: "number[]",
        defaultValue: "undefined",
        description: getSliderPropDesc("value"),
      },
      {
        prop: "min",
        type: "number",
        defaultValue: "0",
        description: getSliderPropDesc("min"),
      },
      {
        prop: "max",
        type: "number",
        defaultValue: "100",
        description: getSliderPropDesc("max"),
      },
      {
        prop: "step",
        type: "number",
        defaultValue: "1",
        description: getSliderPropDesc("step"),
      },
      {
        prop: "orientation",
        type: '"horizontal" | "vertical"',
        defaultValue: '"horizontal"',
        description: getSliderPropDesc("orientation"),
      },
    ],
  },
  form: {
    slug: "form",
    ...getComponentText("form"),
    demoName: "form-demo",
    sourceFile: "src/components/ui/form.tsx",
    registryItem: "form",
    sections: [
      {
        id: "basic",
        title: getFormSectionTitle("basic"),
        demoName: "form-basic-demo",
        propsUsed: "Form FormField FormItem FormLabel FormControl FormMessage",
      },
      {
        id: "composition",
        title: getFormSectionTitle("composition"),
        tree: {
          name: "Form (FormProvider)",
          role: "root",
          children: [
            {
              name: "FormField (Controller)",
              role: "section",
              children: [
                {
                  name: "FormItem",
                  role: "section",
                  children: [
                    { name: "FormLabel", role: "leaf" },
                    { name: "FormControl (Slot)", role: "leaf" },
                    { name: "FormDescription", role: "leaf" },
                    { name: "FormMessage", role: "leaf" },
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        id: "controls",
        title: getFormSectionTitle("controls"),
        demoName: "form-controls-demo",
        propsUsed:
          "Input + Select + DatePicker + RadioGroup + Textarea + Slider + Switch + Checkbox",
      },
    ],
    propsTable: [
      {
        prop: "control",
        type: "Control<TFieldValues>",
        defaultValue: "required",
        description: getFormPropDesc("control"),
      },
      {
        prop: "name",
        type: "FieldPath<TFieldValues>",
        defaultValue: "required",
        description: getFormPropDesc("name"),
      },
      {
        prop: "render",
        type: "({ field, fieldState, formState }) => ReactElement",
        defaultValue: "required",
        description: getFormPropDesc("render"),
      },
      {
        prop: "useFormField()",
        type: "() => { error, formItemId, formDescriptionId, formMessageId }",
        defaultValue: "hook",
        description: getFormPropDesc("useFormField"),
      },
    ],
  },
  "date-picker": {
    slug: "date-picker",
    ...getComponentText("date-picker"),
    demoName: "date-picker-demo",
    sourceFile: "src/components/ui/date-picker.tsx",
    registryItem: "date-picker",
    sections: [
      {
        id: "basic",
        title: getDatePickerSectionTitle("basic"),
        demoName: "date-picker-basic-demo",
        propsUsed: "DatePicker value onSelect",
      },
      {
        id: "calendar",
        title: getDatePickerSectionTitle("calendar"),
        demoName: "date-picker-calendar-demo",
        propsUsed: 'Calendar mode="single"',
      },
      {
        id: "range",
        title: getDatePickerSectionTitle("range"),
        demoName: "date-picker-range-demo",
        propsUsed: "DateRangePicker clearable",
      },
      {
        id: "dropdown",
        title: getDatePickerSectionTitle("dropdown"),
        demoName: "date-picker-dropdown-demo",
        propsUsed: 'captionLayout="dropdown"',
      },
      {
        id: "presets",
        title: getDatePickerSectionTitle("presets"),
        demoName: "date-picker-presets-demo",
        propsUsed: "presets disabledDays clearable",
      },
      {
        id: "size",
        title: getDatePickerSectionTitle("size"),
        demoName: "date-picker-size-demo",
        propsUsed: 'triggerSize="sm | default | lg"',
      },
      {
        id: "states",
        title: getDatePickerSectionTitle("states"),
        demoName: "date-picker-states-demo",
        propsUsed: 'state="success | error" disabled noShadow',
      },
    ],
    propsTable: [
      {
        prop: "value",
        type: "Date | DateRange | undefined",
        defaultValue: "undefined",
        description: getDatePickerPropDesc("value"),
      },
      {
        prop: "onSelect",
        type: "(value) => void",
        defaultValue: "undefined",
        description: getDatePickerPropDesc("onSelect"),
      },
      {
        prop: "triggerSize",
        type: '"sm" | "default" | "lg"',
        defaultValue: '"default"',
        description: getDatePickerPropDesc("triggerSize"),
      },
      {
        prop: "state",
        type: '"default" | "error" | "success"',
        defaultValue: '"default"',
        description: getDatePickerPropDesc("state"),
      },
      {
        prop: "clearable",
        type: "boolean",
        defaultValue: "false",
        description: getDatePickerPropDesc("clearable"),
      },
      {
        prop: "captionLayout",
        type: '"label" | "dropdown"',
        defaultValue: '"label"',
        description: getDatePickerPropDesc("captionLayout"),
      },
      {
        prop: "presets",
        type: "DatePickerPreset[]",
        defaultValue: "undefined",
        description: getDatePickerPropDesc("presets"),
      },
      {
        prop: "disabledDays",
        type: "Matcher | Matcher[]",
        defaultValue: "undefined",
        description: getDatePickerPropDesc("disabledDays"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getDatePickerPropDesc("noShadow"),
      },
    ],
  },
  command: {
    slug: "command",
    ...getComponentText("command"),
    demoName: "command-demo",
    sourceFile: "src/components/ui/command.tsx",
    registryItem: "command",
    sections: [
      {
        id: "basic",
        title: getCommandSectionTitle("basic"),
        demoName: "command-basic-demo",
        propsUsed: "Command CommandInput CommandGroup CommandShortcut",
      },
      {
        id: "composition",
        title: getCommandSectionTitle("composition"),
        tree: {
          name: "Command / CommandDialog",
          role: "root",
          children: [
            { name: "CommandInput", role: "leaf" },
            {
              name: "CommandList",
              role: "section",
              children: [
                { name: "CommandEmpty", role: "leaf" },
                {
                  name: "CommandGroup",
                  role: "section",
                  children: [
                    {
                      name: "CommandItem",
                      role: "section",
                      children: [{ name: "CommandShortcut", role: "leaf" }],
                    },
                  ],
                },
                { name: "CommandSeparator", role: "leaf" },
              ],
            },
          ],
        },
      },
      {
        id: "dialog",
        title: getCommandSectionTitle("dialog"),
        demoName: "command-dialog-demo",
        propsUsed: "CommandDialog open onOpenChange ⌘K",
      },
      {
        id: "states",
        title: getCommandSectionTitle("states"),
        demoName: "command-states-demo",
        propsUsed: "noShadow disabled Badge",
      },
    ],
    propsTable: [
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getCommandPropDesc("noShadow"),
      },
      {
        prop: "open",
        type: "boolean",
        defaultValue: "false",
        description: getCommandPropDesc("open"),
      },
      {
        prop: "onOpenChange",
        type: "(open: boolean) => void",
        defaultValue: "undefined",
        description: getCommandPropDesc("onOpenChange"),
      },
      {
        prop: "title",
        type: "string",
        defaultValue: '"Command Palette"',
        description: getCommandPropDesc("title"),
      },
      {
        prop: "heading",
        type: "React.ReactNode",
        defaultValue: "undefined",
        description: getCommandPropDesc("heading"),
      },
      {
        prop: "onSelect",
        type: "(value: string) => void",
        defaultValue: "undefined",
        description: getCommandPropDesc("onSelect"),
      },
      {
        prop: "disabled",
        type: "boolean",
        defaultValue: "false",
        description: getCommandPropDesc("disabled"),
      },
    ],
  },
  combobox: {
    slug: "combobox",
    ...getComponentText("combobox"),
    demoName: "combobox-demo",
    sourceFile: "src/components/ui/combobox.tsx",
    registryItem: "combobox",
    sections: [
      {
        id: "basic",
        title: getComboboxSectionTitle("basic"),
        demoName: "combobox-basic-demo",
        propsUsed: "Combobox options value onValueChange clearable",
      },
      {
        id: "multi",
        title: getComboboxSectionTitle("multi"),
        demoName: "combobox-multi-demo",
        propsUsed: "MultiCombobox maxDisplay clearable",
      },
      {
        id: "grouped",
        title: getComboboxSectionTitle("grouped"),
        demoName: "combobox-grouped-demo",
        propsUsed: "group icon description badge disabled",
      },
      {
        id: "size",
        title: getComboboxSectionTitle("size"),
        demoName: "combobox-size-demo",
        propsUsed: 'triggerSize="sm | default | lg"',
      },
      {
        id: "states",
        title: getComboboxSectionTitle("states"),
        demoName: "combobox-states-demo",
        propsUsed: 'state="success | error" disabled noShadow',
      },
    ],
    propsTable: [
      {
        prop: "options",
        type: "ComboboxOption[]",
        defaultValue: "required",
        description: getComboboxPropDesc("options"),
      },
      {
        prop: "value",
        type: "string | string[]",
        defaultValue: "undefined",
        description: getComboboxPropDesc("value"),
      },
      {
        prop: "onValueChange",
        type: "(value) => void",
        defaultValue: "undefined",
        description: getComboboxPropDesc("onValueChange"),
      },
      {
        prop: "maxDisplay",
        type: "number",
        defaultValue: "3",
        description: getComboboxPropDesc("maxDisplay"),
      },
      {
        prop: "clearable",
        type: "boolean",
        defaultValue: "false",
        description: getComboboxPropDesc("clearable"),
      },
      {
        prop: "triggerSize",
        type: '"sm" | "default" | "lg"',
        defaultValue: '"default"',
        description: getComboboxPropDesc("triggerSize"),
      },
      {
        prop: "state",
        type: '"default" | "error" | "success"',
        defaultValue: '"default"',
        description: getComboboxPropDesc("state"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getComboboxPropDesc("noShadow"),
      },
    ],
  },
  "input-otp": {
    slug: "input-otp",
    ...getComponentText("input-otp"),
    demoName: "input-otp-demo",
    sourceFile: "src/components/ui/input-otp.tsx",
    registryItem: "input-otp",
    sections: [
      {
        id: "basic",
        title: getInputOtpSectionTitle("basic"),
        demoName: "input-otp-basic-demo",
        propsUsed: "InputOTP InputOTPGroup InputOTPSlot InputOTPSeparator",
      },
      {
        id: "composition",
        title: getInputOtpSectionTitle("composition"),
        tree: {
          name: "InputOTP",
          role: "root",
          children: [
            {
              name: "InputOTPGroup",
              role: "section",
              children: [{ name: "InputOTPSlot (index 0..2)", role: "leaf" }],
            },
            { name: "InputOTPSeparator", role: "leaf" },
            {
              name: "InputOTPGroup",
              role: "section",
              children: [{ name: "InputOTPSlot (index 3..5)", role: "leaf" }],
            },
          ],
        },
      },
      {
        id: "pattern",
        title: getInputOtpSectionTitle("pattern"),
        demoName: "input-otp-pattern-demo",
        propsUsed: "pattern masked REGEXP_ONLY_DIGITS_AND_CHARS",
      },
      {
        id: "size",
        title: getInputOtpSectionTitle("size"),
        demoName: "input-otp-size-demo",
        propsUsed: 'otpSize="sm | default | lg"',
      },
      {
        id: "states",
        title: getInputOtpSectionTitle("states"),
        demoName: "input-otp-states-demo",
        propsUsed: 'state="success | error" disabled noShadow',
      },
      {
        id: "card",
        title: getInputOtpSectionTitle("card"),
        demoName: "input-otp-card-demo",
        propsUsed: "Card InputOTP Button Badge",
      },
    ],
    propsTable: [
      {
        prop: "maxLength",
        type: "number",
        defaultValue: "required",
        description: getInputOtpPropDesc("maxLength"),
      },
      {
        prop: "value",
        type: "string",
        defaultValue: "undefined",
        description: getInputOtpPropDesc("value"),
      },
      {
        prop: "onChange",
        type: "(value: string) => void",
        defaultValue: "undefined",
        description: getInputOtpPropDesc("onChange"),
      },
      {
        prop: "pattern",
        type: "string",
        defaultValue: "undefined",
        description: getInputOtpPropDesc("pattern"),
      },
      {
        prop: "otpSize",
        type: '"sm" | "default" | "lg"',
        defaultValue: '"default"',
        description: getInputOtpPropDesc("otpSize"),
      },
      {
        prop: "state",
        type: '"default" | "error" | "success"',
        defaultValue: '"default"',
        description: getInputOtpPropDesc("state"),
      },
      {
        prop: "masked",
        type: "boolean",
        defaultValue: "false",
        description: getInputOtpPropDesc("masked"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getInputOtpPropDesc("noShadow"),
      },
    ],
  },
};

export const CATALOG_LIST = Object.values(COMPONENT_DOCS);
