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

export interface InstallRequirementItem {
  name: string;
  purpose: Bilingual;
}

export interface InstallGuideData {
  npmCommand: string;
  packages: InstallRequirementItem[];
  registryDependencies?: string[];
  note?: Bilingual;
}

export interface ComponentDocData {
  slug: ComponentSlug;
  title: Bilingual;
  tier: Bilingual;
  description: Bilingual;
  demoName: string;
  sourceFile: string;
  registryItem: string;
  installGuide?: InstallGuideData;
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

function getDialogSectionTitle(
  secId: keyof typeof dictionaries.id.docs.components.dialog.sections
): Bilingual {
  return {
    id: dictionaries.id.docs.components.dialog.sections[secId],
    en: dictionaries.en.docs.components.dialog.sections[secId],
  };
}

function getDialogPropDesc(
  propName: keyof typeof dictionaries.id.docs.components.dialog.props
): Bilingual {
  return {
    id: dictionaries.id.docs.components.dialog.props[propName],
    en: dictionaries.en.docs.components.dialog.props[propName],
  };
}

function getAlertDialogSectionTitle(
  secId: keyof (typeof dictionaries.id.docs.components)["alert-dialog"]["sections"]
): Bilingual {
  return {
    id: dictionaries.id.docs.components["alert-dialog"].sections[secId],
    en: dictionaries.en.docs.components["alert-dialog"].sections[secId],
  };
}

function getAlertDialogPropDesc(
  propName: keyof (typeof dictionaries.id.docs.components)["alert-dialog"]["props"]
): Bilingual {
  return {
    id: dictionaries.id.docs.components["alert-dialog"].props[propName],
    en: dictionaries.en.docs.components["alert-dialog"].props[propName],
  };
}

function getSheetSectionTitle(
  secId: keyof typeof dictionaries.id.docs.components.sheet.sections
): Bilingual {
  return {
    id: dictionaries.id.docs.components.sheet.sections[secId],
    en: dictionaries.en.docs.components.sheet.sections[secId],
  };
}

function getSheetPropDesc(
  propName: keyof typeof dictionaries.id.docs.components.sheet.props
): Bilingual {
  return {
    id: dictionaries.id.docs.components.sheet.props[propName],
    en: dictionaries.en.docs.components.sheet.props[propName],
  };
}

function getDropdownMenuSectionTitle(
  secId: keyof (typeof dictionaries.id.docs.components)["dropdown-menu"]["sections"]
): Bilingual {
  return {
    id: dictionaries.id.docs.components["dropdown-menu"].sections[secId],
    en: dictionaries.en.docs.components["dropdown-menu"].sections[secId],
  };
}

function getDropdownMenuPropDesc(
  propName: keyof (typeof dictionaries.id.docs.components)["dropdown-menu"]["props"]
): Bilingual {
  return {
    id: dictionaries.id.docs.components["dropdown-menu"].props[propName],
    en: dictionaries.en.docs.components["dropdown-menu"].props[propName],
  };
}

function getPopoverSectionTitle(
  secId: keyof typeof dictionaries.id.docs.components.popover.sections
): Bilingual {
  return {
    id: dictionaries.id.docs.components.popover.sections[secId],
    en: dictionaries.en.docs.components.popover.sections[secId],
  };
}

function getPopoverPropDesc(
  propName: keyof typeof dictionaries.id.docs.components.popover.props
): Bilingual {
  return {
    id: dictionaries.id.docs.components.popover.props[propName],
    en: dictionaries.en.docs.components.popover.props[propName],
  };
}

function getTooltipSectionTitle(
  secId: keyof typeof dictionaries.id.docs.components.tooltip.sections
): Bilingual {
  return {
    id: dictionaries.id.docs.components.tooltip.sections[secId],
    en: dictionaries.en.docs.components.tooltip.sections[secId],
  };
}

function getTooltipPropDesc(
  propName: keyof typeof dictionaries.id.docs.components.tooltip.props
): Bilingual {
  return {
    id: dictionaries.id.docs.components.tooltip.props[propName],
    en: dictionaries.en.docs.components.tooltip.props[propName],
  };
}

function getTabsSectionTitle(
  secId: keyof typeof dictionaries.id.docs.components.tabs.sections
): Bilingual {
  return {
    id: dictionaries.id.docs.components.tabs.sections[secId],
    en: dictionaries.en.docs.components.tabs.sections[secId],
  };
}

function getTabsPropDesc(
  propName: keyof typeof dictionaries.id.docs.components.tabs.props
): Bilingual {
  return {
    id: dictionaries.id.docs.components.tabs.props[propName],
    en: dictionaries.en.docs.components.tabs.props[propName],
  };
}

function getButtonGroupSectionTitle(
  secId: keyof (typeof dictionaries.id.docs.components)["button-group"]["sections"]
): Bilingual {
  return {
    id: dictionaries.id.docs.components["button-group"].sections[secId],
    en: dictionaries.en.docs.components["button-group"].sections[secId],
  };
}

function getButtonGroupPropDesc(
  propName: keyof (typeof dictionaries.id.docs.components)["button-group"]["props"]
): Bilingual {
  return {
    id: dictionaries.id.docs.components["button-group"].props[propName],
    en: dictionaries.en.docs.components["button-group"].props[propName],
  };
}

function getBreadcrumbSectionTitle(
  secId: keyof typeof dictionaries.id.docs.components.breadcrumb.sections
): Bilingual {
  return {
    id: dictionaries.id.docs.components.breadcrumb.sections[secId],
    en: dictionaries.en.docs.components.breadcrumb.sections[secId],
  };
}

function getBreadcrumbPropDesc(
  propName: keyof typeof dictionaries.id.docs.components.breadcrumb.props
): Bilingual {
  return {
    id: dictionaries.id.docs.components.breadcrumb.props[propName],
    en: dictionaries.en.docs.components.breadcrumb.props[propName],
  };
}

function getAlertSectionTitle(
  secId: keyof typeof dictionaries.id.docs.components.alert.sections
): Bilingual {
  return {
    id: dictionaries.id.docs.components.alert.sections[secId],
    en: dictionaries.en.docs.components.alert.sections[secId],
  };
}

function getAlertPropDesc(
  propName: keyof typeof dictionaries.id.docs.components.alert.props
): Bilingual {
  return {
    id: dictionaries.id.docs.components.alert.props[propName],
    en: dictionaries.en.docs.components.alert.props[propName],
  };
}

function getSonnerSectionTitle(
  secId: keyof typeof dictionaries.id.docs.components.sonner.sections
): Bilingual {
  return {
    id: dictionaries.id.docs.components.sonner.sections[secId],
    en: dictionaries.en.docs.components.sonner.sections[secId],
  };
}

function getSonnerPropDesc(
  propName: keyof typeof dictionaries.id.docs.components.sonner.props
): Bilingual {
  return {
    id: dictionaries.id.docs.components.sonner.props[propName],
    en: dictionaries.en.docs.components.sonner.props[propName],
  };
}

function getChartSectionTitle(
  secId: keyof typeof dictionaries.id.docs.components.chart.sections
): Bilingual {
  return {
    id: dictionaries.id.docs.components.chart.sections[secId],
    en: dictionaries.en.docs.components.chart.sections[secId],
  };
}

function getChartPropDesc(
  propName: keyof typeof dictionaries.id.docs.components.chart.props
): Bilingual {
  return {
    id: dictionaries.id.docs.components.chart.props[propName],
    en: dictionaries.en.docs.components.chart.props[propName],
  };
}

function getProgressSectionTitle(
  secId: keyof typeof dictionaries.id.docs.components.progress.sections
): Bilingual {
  return {
    id: dictionaries.id.docs.components.progress.sections[secId],
    en: dictionaries.en.docs.components.progress.sections[secId],
  };
}

function getProgressPropDesc(
  propName: keyof typeof dictionaries.id.docs.components.progress.props
): Bilingual {
  return {
    id: dictionaries.id.docs.components.progress.props[propName],
    en: dictionaries.en.docs.components.progress.props[propName],
  };
}

function getSkeletonSectionTitle(
  secId: keyof typeof dictionaries.id.docs.components.skeleton.sections
): Bilingual {
  return {
    id: dictionaries.id.docs.components.skeleton.sections[secId],
    en: dictionaries.en.docs.components.skeleton.sections[secId],
  };
}

function getSkeletonPropDesc(
  propName: keyof typeof dictionaries.id.docs.components.skeleton.props
): Bilingual {
  return {
    id: dictionaries.id.docs.components.skeleton.props[propName],
    en: dictionaries.en.docs.components.skeleton.props[propName],
  };
}

function getAccordionSectionTitle(
  secId: keyof typeof dictionaries.id.docs.components.accordion.sections
): Bilingual {
  return {
    id: dictionaries.id.docs.components.accordion.sections[secId],
    en: dictionaries.en.docs.components.accordion.sections[secId],
  };
}

function getAccordionPropDesc(
  propName: keyof typeof dictionaries.id.docs.components.accordion.props
): Bilingual {
  return {
    id: dictionaries.id.docs.components.accordion.props[propName],
    en: dictionaries.en.docs.components.accordion.props[propName],
  };
}

function getToggleGroupSectionTitle(
  secId: keyof (typeof dictionaries.id.docs.components)["toggle-group"]["sections"]
): Bilingual {
  return {
    id: dictionaries.id.docs.components["toggle-group"].sections[secId],
    en: dictionaries.en.docs.components["toggle-group"].sections[secId],
  };
}

function getToggleGroupPropDesc(
  propName: keyof (typeof dictionaries.id.docs.components)["toggle-group"]["props"]
): Bilingual {
  return {
    id: dictionaries.id.docs.components["toggle-group"].props[propName],
    en: dictionaries.en.docs.components["toggle-group"].props[propName],
  };
}

function getRichTextEditorSectionTitle(
  secId: keyof (typeof dictionaries.id.docs.components)["rich-text-editor"]["sections"]
): Bilingual {
  return {
    id: dictionaries.id.docs.components["rich-text-editor"].sections[secId],
    en: dictionaries.en.docs.components["rich-text-editor"].sections[secId],
  };
}

function getRichTextEditorPropDesc(
  propName: keyof (typeof dictionaries.id.docs.components)["rich-text-editor"]["props"]
): Bilingual {
  return {
    id: dictionaries.id.docs.components["rich-text-editor"].props[propName],
    en: dictionaries.en.docs.components["rich-text-editor"].props[propName],
  };
}

function getFileUploadSectionTitle(
  secId: keyof (typeof dictionaries.id.docs.components)["file-upload"]["sections"]
): Bilingual {
  return {
    id: dictionaries.id.docs.components["file-upload"].sections[secId],
    en: dictionaries.en.docs.components["file-upload"].sections[secId],
  };
}

function getFileUploadPropDesc(
  propName: keyof (typeof dictionaries.id.docs.components)["file-upload"]["props"]
): Bilingual {
  return {
    id: dictionaries.id.docs.components["file-upload"].props[propName],
    en: dictionaries.en.docs.components["file-upload"].props[propName],
  };
}

function getEmptyStateSectionTitle(
  secId: keyof (typeof dictionaries.id.docs.components)["empty-state"]["sections"]
): Bilingual {
  return {
    id: dictionaries.id.docs.components["empty-state"].sections[secId],
    en: dictionaries.en.docs.components["empty-state"].sections[secId],
  };
}

function getEmptyStatePropDesc(
  propName: keyof (typeof dictionaries.id.docs.components)["empty-state"]["props"]
): Bilingual {
  return {
    id: dictionaries.id.docs.components["empty-state"].props[propName],
    en: dictionaries.en.docs.components["empty-state"].props[propName],
  };
}

function getKbdSectionTitle(
  secId: keyof typeof dictionaries.id.docs.components.kbd.sections
): Bilingual {
  return {
    id: dictionaries.id.docs.components.kbd.sections[secId],
    en: dictionaries.en.docs.components.kbd.sections[secId],
  };
}

function getKbdPropDesc(
  propName: keyof typeof dictionaries.id.docs.components.kbd.props
): Bilingual {
  return {
    id: dictionaries.id.docs.components.kbd.props[propName],
    en: dictionaries.en.docs.components.kbd.props[propName],
  };
}

function getColorPickerSectionTitle(
  secId: keyof (typeof dictionaries.id.docs.components)["color-picker"]["sections"]
): Bilingual {
  return {
    id: dictionaries.id.docs.components["color-picker"].sections[secId],
    en: dictionaries.en.docs.components["color-picker"].sections[secId],
  };
}

function getColorPickerPropDesc(
  propName: keyof (typeof dictionaries.id.docs.components)["color-picker"]["props"]
): Bilingual {
  return {
    id: dictionaries.id.docs.components["color-picker"].props[propName],
    en: dictionaries.en.docs.components["color-picker"].props[propName],
  };
}

function getNavigationMenuSectionTitle(
  secId: keyof (typeof dictionaries.id.docs.components)["navigation-menu"]["sections"]
): Bilingual {
  return {
    id: dictionaries.id.docs.components["navigation-menu"].sections[secId],
    en: dictionaries.en.docs.components["navigation-menu"].sections[secId],
  };
}

function getNavigationMenuPropDesc(
  propName: keyof (typeof dictionaries.id.docs.components)["navigation-menu"]["props"]
): Bilingual {
  return {
    id: dictionaries.id.docs.components["navigation-menu"].props[propName],
    en: dictionaries.en.docs.components["navigation-menu"].props[propName],
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
      {
        id: "scrollbar-variant",
        title: getScrollAreaSectionTitle("scrollbar-variant"),
        demoName: "scroll-area-variant-demo",
        propsUsed: 'scrollbarVariant="default | auto | bordered"',
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
        prop: "scrollbarVariant",
        type: '"default" | "auto" | "bordered"',
        defaultValue: '"default"',
        description: getScrollAreaPropDesc("scrollbarVariant"),
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
    installGuide: {
      npmCommand: "npm install @tanstack/react-table lucide-react",
      note: {
        id: "Perintah CLI shadcn di atas otomatis memasang semua paket dan komponen Punch UI berikut. Jika copy-paste manual, pastikan semua dependensi ini tersedia:",
        en: "The shadcn CLI command above installs all packages and Punch UI components below automatically. If copying manually, ensure these dependencies are installed:",
      },
      packages: [
        {
          name: "@tanstack/react-table",
          purpose: {
            id: "Engine headless untuk sorting, filtering, row selection, column visibility, dan pagination.",
            en: "Headless table engine for sorting, filtering, row selection, column visibility, and pagination.",
          },
        },
        {
          name: "lucide-react",
          purpose: {
            id: "Ikon sort, search, dan kontrol kolom.",
            en: "Icons for sorting, search, and column controls.",
          },
        },
      ],
      registryDependencies: [
        "button",
        "checkbox",
        "input",
        "table",
        "pagination",
        "select",
      ],
    },
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
    installGuide: {
      npmCommand:
        "npm install react-hook-form zod @hookform/resolvers @radix-ui/react-slot lucide-react",
      note: {
        id: "Perintah CLI shadcn di atas otomatis memasang semua paket dan komponen Punch UI berikut. Jika copy-paste manual, pastikan semua paket ini sudah terpasang:",
        en: "The shadcn CLI command above installs all packages and Punch UI components below automatically. If copying manually, install these packages:",
      },
      packages: [
        {
          name: "react-hook-form",
          purpose: {
            id: "Manajemen state form performa tinggi dengan Controller & FormProvider.",
            en: "High-performance form state management via Controller & FormProvider.",
          },
        },
        {
          name: "zod",
          purpose: {
            id: "Validasi skema TypeScript-first untuk pesan error yang aman secara tipe.",
            en: "TypeScript-first schema validation for type-safe form error messages.",
          },
        },
        {
          name: "@hookform/resolvers",
          purpose: {
            id: "Penghubung zodResolver ke useForm pada react-hook-form.",
            en: "Bridges zodResolver into react-hook-form's useForm.",
          },
        },
        {
          name: "@radix-ui/react-slot",
          purpose: {
            id: "Meneruskan atribut aksesibilitas (aria-invalid, id) ke kontrol input anak.",
            en: "Forwards accessibility attributes (aria-invalid, id) to child form controls.",
          },
        },
        {
          name: "lucide-react",
          purpose: {
            id: "Ikon peringatan pada pesan error validasi.",
            en: "Alert icon displayed alongside validation error messages.",
          },
        },
      ],
      registryDependencies: ["label"],
    },
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
    installGuide: {
      npmCommand:
        "npm install date-fns react-day-picker class-variance-authority lucide-react",
      note: {
        id: "Perintah CLI shadcn di atas otomatis memasang semua paket dan komponen Punch UI berikut. Jika copy-paste manual, pastikan paket dan komponen berikut tersedia:",
        en: "The shadcn CLI command above installs all packages and Punch UI components below automatically. If copying manually, install these dependencies:",
      },
      packages: [
        {
          name: "react-day-picker",
          purpose: {
            id: "Engine kalender interaktif untuk pemilihan tanggal tunggal maupun rentang (range).",
            en: "Interactive calendar engine for single and date-range selection.",
          },
        },
        {
          name: "date-fns",
          purpose: {
            id: "Utilitas pemformatan tanggal (format) yang ringan dan modular.",
            en: "Lightweight, modular date formatting utilities.",
          },
        },
        {
          name: "class-variance-authority",
          purpose: {
            id: "Pengaturan variasi ukuran dan status trigger DatePicker.",
            en: "Size and state variant styling for the DatePicker trigger.",
          },
        },
        {
          name: "lucide-react",
          purpose: {
            id: "Ikon kalender dan navigasi bulan.",
            en: "Calendar and month navigation icons.",
          },
        },
      ],
      registryDependencies: ["button", "calendar", "popover"],
    },
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
    installGuide: {
      npmCommand: "npm install cmdk @radix-ui/react-dialog lucide-react",
      note: {
        id: "Perintah CLI shadcn di atas otomatis memasang semua paket berikut. Jika copy-paste manual, install paket-paket ini:",
        en: "The shadcn CLI command above installs all packages below automatically. If copying manually, install these packages:",
      },
      packages: [
        {
          name: "cmdk",
          purpose: {
            id: "Engine command palette dengan pencarian cepat dan navigasi keyboard penuh.",
            en: "Fast, composable command palette engine with full keyboard navigation.",
          },
        },
        {
          name: "@radix-ui/react-dialog",
          purpose: {
            id: "Overlay modal aksesibel untuk CommandDialog (Cmd+K / Ctrl+K).",
            en: "Accessible modal dialog overlay for CommandDialog (Cmd+K / Ctrl+K).",
          },
        },
        {
          name: "lucide-react",
          purpose: {
            id: "Ikon pencarian dan tombol tutup dialog.",
            en: "Search icon and dialog close button.",
          },
        },
      ],
    },
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
    installGuide: {
      npmCommand:
        "npm install cmdk @radix-ui/react-popover @radix-ui/react-dialog class-variance-authority lucide-react",
      note: {
        id: "Combobox dibangun di atas komponen Command, Popover, dan Badge milik Punch UI. Perintah CLI shadcn di atas otomatis memasang semuanya.",
        en: "Combobox is composed from Punch UI's Command, Popover, and Badge components. The shadcn CLI command above installs everything automatically.",
      },
      packages: [
        {
          name: "cmdk",
          purpose: {
            id: "Mesin pencarian opsi secara real-time di dalam daftar dropdown.",
            en: "Real-time option filtering inside the dropdown list.",
          },
        },
        {
          name: "@radix-ui/react-popover",
          purpose: {
            id: "Kontainer mengambang yang diposisikan otomatis terhadap trigger Combobox.",
            en: "Auto-positioned floating panel anchored to the Combobox trigger.",
          },
        },
        {
          name: "class-variance-authority",
          purpose: {
            id: "Variasi ukuran dan status validasi pada trigger.",
            en: "Size and validation variant styling on the trigger.",
          },
        },
        {
          name: "lucide-react",
          purpose: {
            id: "Ikon chevron, centang, dan tombol clear.",
            en: "Chevron, check, and clear button icons.",
          },
        },
      ],
      registryDependencies: ["badge", "command", "popover"],
    },
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
    installGuide: {
      npmCommand: "npm install input-otp class-variance-authority lucide-react",
      note: {
        id: "Perintah CLI shadcn di atas otomatis memasang semua paket berikut. Jika copy-paste manual, install paket-paket ini:",
        en: "The shadcn CLI command above installs all packages below automatically. If copying manually, install these packages:",
      },
      packages: [
        {
          name: "input-otp",
          purpose: {
            id: "Primitif input OTP aksesibel dengan dukungan paste otomatis, caret aktif, dan autofill SMS.",
            en: "Accessible OTP input primitive with auto-paste, active caret, and SMS autofill.",
          },
        },
        {
          name: "class-variance-authority",
          purpose: {
            id: "Variasi ukuran slot (sm, default, lg) dan status validasi.",
            en: "Slot size (sm, default, lg) and validation state variants.",
          },
        },
        {
          name: "lucide-react",
          purpose: {
            id: "Ikon pemisah bawaan untuk InputOTPSeparator.",
            en: "Default separator icon for InputOTPSeparator.",
          },
        },
      ],
    },
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
  dialog: {
    slug: "dialog",
    ...getComponentText("dialog"),
    demoName: "dialog-demo",
    sourceFile: "src/components/ui/dialog.tsx",
    registryItem: "dialog",
    sections: [
      {
        id: "basic",
        title: getDialogSectionTitle("basic"),
        demoName: "dialog-basic-demo",
        propsUsed: "Dialog DialogTrigger DialogContent DialogFooter",
      },
      {
        id: "composition",
        title: getDialogSectionTitle("composition"),
        tree: {
          name: "Dialog",
          role: "root",
          children: [
            { name: "DialogTrigger", role: "leaf" },
            {
              name: "DialogContent",
              role: "section",
              children: [
                {
                  name: "DialogHeader",
                  role: "section",
                  children: [
                    { name: "DialogTitle", role: "leaf" },
                    { name: "DialogDescription", role: "leaf" },
                  ],
                },
                { name: "Body Content", role: "leaf" },
                {
                  name: "DialogFooter",
                  role: "section",
                  children: [{ name: "DialogClose", role: "leaf" }],
                },
              ],
            },
          ],
        },
      },
      {
        id: "form",
        title: getDialogSectionTitle("form"),
        demoName: "dialog-form-demo",
        propsUsed: "open onOpenChange Input Select",
      },
      {
        id: "size",
        title: getDialogSectionTitle("size"),
        demoName: "dialog-size-demo",
        propsUsed: 'size="sm | default | lg | xl"',
      },
      {
        id: "scrollable",
        title: getDialogSectionTitle("scrollable"),
        demoName: "dialog-scrollable-demo",
        propsUsed: "max-h-[80vh] overflow-y-auto",
      },
      {
        id: "header",
        title: getDialogSectionTitle("header"),
        demoName: "dialog-header-demo",
        propsUsed: 'DialogHeader variant="primary | secondary | muted"',
      },
    ],
    propsTable: [
      {
        prop: "size",
        type: '"sm" | "default" | "lg" | "xl"',
        defaultValue: '"default"',
        description: getDialogPropDesc("size"),
      },
      {
        prop: "variant",
        type: '"default" | "primary" | "secondary" | "muted"',
        defaultValue: '"default"',
        description: getDialogPropDesc("variant"),
      },
      {
        prop: "hideCloseButton",
        type: "boolean",
        defaultValue: "false",
        description: getDialogPropDesc("hideCloseButton"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getDialogPropDesc("noShadow"),
      },
      {
        prop: "open",
        type: "boolean",
        defaultValue: "undefined",
        description: getDialogPropDesc("open"),
      },
    ],
  },
  "alert-dialog": {
    slug: "alert-dialog",
    ...getComponentText("alert-dialog"),
    demoName: "alert-dialog-demo",
    sourceFile: "src/components/ui/alert-dialog.tsx",
    registryItem: "alert-dialog",
    sections: [
      {
        id: "basic",
        title: getAlertDialogSectionTitle("basic"),
        demoName: "alert-dialog-basic-demo",
        propsUsed: "AlertDialog AlertDialogCancel AlertDialogAction",
      },
      {
        id: "composition",
        title: getAlertDialogSectionTitle("composition"),
        tree: {
          name: "AlertDialog",
          role: "root",
          children: [
            { name: "AlertDialogTrigger", role: "leaf" },
            {
              name: "AlertDialogContent",
              role: "section",
              children: [
                {
                  name: "AlertDialogHeader",
                  role: "section",
                  children: [
                    { name: "AlertDialogTitle", role: "leaf" },
                    { name: "AlertDialogDescription", role: "leaf" },
                  ],
                },
                {
                  name: "AlertDialogFooter",
                  role: "section",
                  children: [
                    { name: "AlertDialogCancel", role: "leaf" },
                    { name: "AlertDialogAction", role: "leaf" },
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        id: "destructive",
        title: getAlertDialogSectionTitle("destructive"),
        demoName: "alert-dialog-destructive-demo",
        propsUsed: 'AlertDialogAction variant="danger"',
      },
      {
        id: "async",
        title: getAlertDialogSectionTitle("async"),
        demoName: "alert-dialog-async-demo",
        propsUsed: "open onOpenChange isLoading",
      },
    ],
    propsTable: [
      {
        prop: "variant",
        type: 'ButtonProps["variant"]',
        defaultValue: '"default" / "outline"',
        description: getAlertDialogPropDesc("variant"),
      },
      {
        prop: "isLoading",
        type: "boolean",
        defaultValue: "false",
        description: getAlertDialogPropDesc("isLoading"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getAlertDialogPropDesc("noShadow"),
      },
      {
        prop: "open",
        type: "boolean",
        defaultValue: "undefined",
        description: getAlertDialogPropDesc("open"),
      },
    ],
  },
  sheet: {
    slug: "sheet",
    ...getComponentText("sheet"),
    demoName: "sheet-demo",
    sourceFile: "src/components/ui/sheet.tsx",
    registryItem: "sheet",
    sections: [
      {
        id: "basic",
        title: getSheetSectionTitle("basic"),
        demoName: "sheet-basic-demo",
        propsUsed: "Sheet SheetTrigger SheetContent SheetFooter",
      },
      {
        id: "composition",
        title: getSheetSectionTitle("composition"),
        tree: {
          name: "Sheet",
          role: "root",
          children: [
            { name: "SheetTrigger", role: "leaf" },
            {
              name: "SheetContent",
              role: "section",
              children: [
                {
                  name: "SheetHeader",
                  role: "section",
                  children: [
                    { name: "SheetTitle", role: "leaf" },
                    { name: "SheetDescription", role: "leaf" },
                  ],
                },
                { name: "Body / ScrollArea", role: "leaf" },
                {
                  name: "SheetFooter",
                  role: "section",
                  children: [{ name: "SheetClose", role: "leaf" }],
                },
              ],
            },
          ],
        },
      },
      {
        id: "sides",
        title: getSheetSectionTitle("sides"),
        demoName: "sheet-sides-demo",
        propsUsed: 'side="top | right | bottom | left"',
      },
      {
        id: "filter",
        title: getSheetSectionTitle("filter"),
        demoName: "sheet-filter-demo",
        propsUsed: "open onOpenChange Input Switch Checkbox",
      },
      {
        id: "navigation",
        title: getSheetSectionTitle("navigation"),
        demoName: "sheet-navigation-demo",
        propsUsed: 'side="left" size="sm" SheetHeader variant="primary"',
      },
      {
        id: "scrollable",
        title: getSheetSectionTitle("scrollable"),
        demoName: "sheet-scrollable-demo",
        propsUsed: 'ScrollArea variant="ghost" scrollbarVariant="auto"',
      },
    ],
    propsTable: [
      {
        prop: "side",
        type: '"right" | "left" | "top" | "bottom"',
        defaultValue: '"right"',
        description: getSheetPropDesc("side"),
      },
      {
        prop: "size",
        type: '"sm" | "default" | "lg" | "full"',
        defaultValue: '"default"',
        description: getSheetPropDesc("size"),
      },
      {
        prop: "variant",
        type: '"default" | "primary" | "secondary" | "muted"',
        defaultValue: '"default"',
        description: getSheetPropDesc("variant"),
      },
      {
        prop: "hideCloseButton",
        type: "boolean",
        defaultValue: "false",
        description: getSheetPropDesc("hideCloseButton"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getSheetPropDesc("noShadow"),
      },
    ],
  },
  "dropdown-menu": {
    slug: "dropdown-menu",
    ...getComponentText("dropdown-menu"),
    demoName: "dropdown-menu-demo",
    sourceFile: "src/components/ui/dropdown-menu.tsx",
    registryItem: "dropdown-menu",
    sections: [
      {
        id: "basic",
        title: getDropdownMenuSectionTitle("basic"),
        demoName: "dropdown-menu-basic-demo",
        propsUsed: "DropdownMenu DropdownMenuItem variant DropdownMenuShortcut",
      },
      {
        id: "composition",
        title: getDropdownMenuSectionTitle("composition"),
        tree: {
          name: "DropdownMenu",
          role: "root",
          children: [
            { name: "DropdownMenuTrigger", role: "leaf" },
            {
              name: "DropdownMenuContent",
              role: "section",
              children: [
                { name: "DropdownMenuLabel", role: "leaf" },
                { name: "DropdownMenuSeparator", role: "leaf" },
                {
                  name: "DropdownMenuGroup",
                  role: "section",
                  children: [
                    { name: "DropdownMenuItem", role: "leaf" },
                    { name: "DropdownMenuCheckboxItem", role: "leaf" },
                  ],
                },
                {
                  name: "DropdownMenuSub",
                  role: "section",
                  children: [
                    { name: "DropdownMenuSubTrigger", role: "leaf" },
                    { name: "DropdownMenuSubContent", role: "leaf" },
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        id: "checkboxes",
        title: getDropdownMenuSectionTitle("checkboxes"),
        demoName: "dropdown-menu-checkboxes-demo",
        propsUsed: "DropdownMenuCheckboxItem checked onCheckedChange",
      },
      {
        id: "radio",
        title: getDropdownMenuSectionTitle("radio"),
        demoName: "dropdown-menu-radio-demo",
        propsUsed: "DropdownMenuRadioGroup DropdownMenuRadioItem",
      },
      {
        id: "submenu",
        title: getDropdownMenuSectionTitle("submenu"),
        demoName: "dropdown-menu-submenu-demo",
        propsUsed: "DropdownMenuSub DropdownMenuSubTrigger disabled",
      },
    ],
    propsTable: [
      {
        prop: "variant",
        type: '"default" | "danger" | "destructive"',
        defaultValue: '"default"',
        description: getDropdownMenuPropDesc("variant"),
      },
      {
        prop: "inset",
        type: "boolean",
        defaultValue: "false",
        description: getDropdownMenuPropDesc("inset"),
      },
      {
        prop: "sideOffset",
        type: "number",
        defaultValue: "6",
        description: getDropdownMenuPropDesc("sideOffset"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getDropdownMenuPropDesc("noShadow"),
      },
    ],
  },
  popover: {
    slug: "popover",
    ...getComponentText("popover"),
    demoName: "popover-demo",
    sourceFile: "src/components/ui/popover.tsx",
    registryItem: "popover",
    sections: [
      {
        id: "basic",
        title: getPopoverSectionTitle("basic"),
        demoName: "popover-basic-demo",
        propsUsed: "Popover PopoverTrigger PopoverContent",
      },
      {
        id: "placement",
        title: getPopoverSectionTitle("placement"),
        demoName: "popover-placement-demo",
        propsUsed: 'side="top | right | bottom | left"',
      },
      {
        id: "profile",
        title: getPopoverSectionTitle("profile"),
        demoName: "popover-profile-demo",
        propsUsed: 'align="start" Avatar Badge',
      },
      {
        id: "no-shadow",
        title: getPopoverSectionTitle("no-shadow"),
        demoName: "popover-no-shadow-demo",
        propsUsed: "noShadow",
      },
    ],
    propsTable: [
      {
        prop: "side",
        type: '"top" | "right" | "bottom" | "left"',
        defaultValue: '"bottom"',
        description: getPopoverPropDesc("side"),
      },
      {
        prop: "align",
        type: '"start" | "center" | "end"',
        defaultValue: '"center"',
        description: getPopoverPropDesc("align"),
      },
      {
        prop: "sideOffset",
        type: "number",
        defaultValue: "6",
        description: getPopoverPropDesc("sideOffset"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getPopoverPropDesc("noShadow"),
      },
    ],
  },
  tooltip: {
    slug: "tooltip",
    ...getComponentText("tooltip"),
    demoName: "tooltip-demo",
    sourceFile: "src/components/ui/tooltip.tsx",
    registryItem: "tooltip",
    sections: [
      {
        id: "basic",
        title: getTooltipSectionTitle("basic"),
        demoName: "tooltip-basic-demo",
        propsUsed: "TooltipProvider Tooltip TooltipContent showArrow",
      },
      {
        id: "placement",
        title: getTooltipSectionTitle("placement"),
        demoName: "tooltip-placement-demo",
        propsUsed: 'side="top | right | bottom | left"',
      },
      {
        id: "variants",
        title: getTooltipSectionTitle("variants"),
        demoName: "tooltip-variants-demo",
        propsUsed: 'variant="default | card | primary | secondary" noShadow',
      },
      {
        id: "toolbar",
        title: getTooltipSectionTitle("toolbar"),
        demoName: "tooltip-toolbar-demo",
        propsUsed: "delayDuration={0} Button size=icon",
      },
    ],
    propsTable: [
      {
        prop: "variant",
        type: '"default" | "card" | "primary" | "secondary"',
        defaultValue: '"default"',
        description: getTooltipPropDesc("variant"),
      },
      {
        prop: "side",
        type: '"top" | "right" | "bottom" | "left"',
        defaultValue: '"top"',
        description: getTooltipPropDesc("side"),
      },
      {
        prop: "showArrow",
        type: "boolean",
        defaultValue: "false",
        description: getTooltipPropDesc("showArrow"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getTooltipPropDesc("noShadow"),
      },
      {
        prop: "delayDuration",
        type: "number",
        defaultValue: "200",
        description: getTooltipPropDesc("delayDuration"),
      },
    ],
  },
  tabs: {
    slug: "tabs",
    ...getComponentText("tabs"),
    demoName: "tabs-demo",
    sourceFile: "src/components/ui/tabs.tsx",
    registryItem: "tabs",
    sections: [
      {
        id: "basic",
        title: getTabsSectionTitle("basic"),
        demoName: "tabs-basic-demo",
        propsUsed: "Tabs TabsList TabsTrigger TabsContent",
      },
      {
        id: "folder",
        title: getTabsSectionTitle("folder"),
        demoName: "tabs-folder-demo",
        propsUsed: 'variant="folder"',
      },
      {
        id: "underline",
        title: getTabsSectionTitle("underline"),
        demoName: "tabs-underline-demo",
        propsUsed: 'variant="underline" Badge',
      },
      {
        id: "vertical",
        title: getTabsSectionTitle("vertical"),
        demoName: "tabs-vertical-demo",
        propsUsed: 'orientation="vertical"',
      },
      {
        id: "sizes",
        title: getTabsSectionTitle("sizes"),
        demoName: "tabs-sizes-demo",
        propsUsed: 'size="sm | default | lg"',
      },
      {
        id: "states",
        title: getTabsSectionTitle("states"),
        demoName: "tabs-states-demo",
        propsUsed: "disabled noShadow",
      },
    ],
    propsTable: [
      {
        prop: "variant",
        type: '"default" | "folder" | "underline"',
        defaultValue: '"default"',
        description: getTabsPropDesc("variant"),
      },
      {
        prop: "orientation",
        type: '"horizontal" | "vertical"',
        defaultValue: '"horizontal"',
        description: getTabsPropDesc("orientation"),
      },
      {
        prop: "size",
        type: '"sm" | "default" | "lg"',
        defaultValue: '"default"',
        description: getTabsPropDesc("size"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getTabsPropDesc("noShadow"),
      },
      {
        prop: "defaultValue",
        type: "string",
        defaultValue: "undefined",
        description: getTabsPropDesc("defaultValue"),
      },
    ],
  },
  "button-group": {
    slug: "button-group",
    ...getComponentText("button-group"),
    demoName: "button-group-demo",
    sourceFile: "src/components/ui/button-group.tsx",
    registryItem: "button-group",
    sections: [
      {
        id: "basic",
        title: getButtonGroupSectionTitle("basic"),
        demoName: "button-group-basic-demo",
        propsUsed: "ButtonGroup Button",
      },
      {
        id: "vertical",
        title: getButtonGroupSectionTitle("vertical"),
        demoName: "button-group-vertical-demo",
        propsUsed: 'orientation="vertical"',
      },
      {
        id: "split",
        title: getButtonGroupSectionTitle("split"),
        demoName: "button-group-split-demo",
        propsUsed: "ButtonGroup Button DropdownMenu",
      },
      {
        id: "input",
        title: getButtonGroupSectionTitle("input"),
        demoName: "button-group-input-demo",
        propsUsed: "ButtonGroupText Input Button",
      },
      {
        id: "size",
        title: getButtonGroupSectionTitle("size"),
        demoName: "button-group-size-demo",
        propsUsed: 'Button size="sm | default | lg"',
      },
      {
        id: "no-shadow",
        title: getButtonGroupSectionTitle("no-shadow"),
        demoName: "button-group-noshadow-demo",
        propsUsed: "noShadow",
      },
    ],
    propsTable: [
      {
        prop: "orientation",
        type: '"horizontal" | "vertical"',
        defaultValue: '"horizontal"',
        description: getButtonGroupPropDesc("orientation"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getButtonGroupPropDesc("noShadow"),
      },
      {
        prop: "asChild",
        type: "boolean",
        defaultValue: "false",
        description: getButtonGroupPropDesc("asChild"),
      },
    ],
  },
  breadcrumb: {
    slug: "breadcrumb",
    ...getComponentText("breadcrumb"),
    demoName: "breadcrumb-demo",
    sourceFile: "src/components/ui/breadcrumb.tsx",
    registryItem: "breadcrumb",
    sections: [
      {
        id: "basic",
        title: getBreadcrumbSectionTitle("basic"),
        demoName: "breadcrumb-basic-demo",
        propsUsed: "Breadcrumb BreadcrumbLink BreadcrumbPage",
      },
      {
        id: "variants",
        title: getBreadcrumbSectionTitle("variants"),
        demoName: "breadcrumb-variants-demo",
        propsUsed: 'variant="default | contained | pills" noShadow',
      },
      {
        id: "separator",
        title: getBreadcrumbSectionTitle("separator"),
        demoName: "breadcrumb-separator-demo",
        propsUsed: "BreadcrumbSeparator Slash",
      },
      {
        id: "dropdown",
        title: getBreadcrumbSectionTitle("dropdown"),
        demoName: "breadcrumb-dropdown-demo",
        propsUsed: "BreadcrumbEllipsis DropdownMenu",
      },
    ],
    propsTable: [
      {
        prop: "variant",
        type: '"default" | "contained" | "pills"',
        defaultValue: '"default"',
        description: getBreadcrumbPropDesc("variant"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getBreadcrumbPropDesc("noShadow"),
      },
      {
        prop: "asChild",
        type: "boolean",
        defaultValue: "false",
        description: getBreadcrumbPropDesc("asChild"),
      },
    ],
  },
  alert: {
    slug: "alert",
    ...getComponentText("alert"),
    demoName: "alert-demo",
    sourceFile: "src/components/ui/alert.tsx",
    registryItem: "alert",
    sections: [
      {
        id: "basic",
        title: getAlertSectionTitle("basic"),
        demoName: "alert-basic-demo",
        propsUsed: "Alert AlertTitle AlertDescription",
      },
      {
        id: "variants",
        title: getAlertSectionTitle("variants"),
        demoName: "alert-variants-demo",
        propsUsed: 'variant="success | info | warning | danger"',
      },
      {
        id: "dismissible",
        title: getAlertSectionTitle("dismissible"),
        demoName: "alert-dismissible-demo",
        propsUsed: "dismissible onDismiss",
      },
      {
        id: "no-shadow",
        title: getAlertSectionTitle("no-shadow"),
        demoName: "alert-noshadow-demo",
        propsUsed: "noShadow",
      },
    ],
    propsTable: [
      {
        prop: "variant",
        type: '"default" | "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "destructive"',
        defaultValue: '"default"',
        description: getAlertPropDesc("variant"),
      },
      {
        prop: "dismissible",
        type: "boolean",
        defaultValue: "false",
        description: getAlertPropDesc("dismissible"),
      },
      {
        prop: "onDismiss",
        type: "() => void",
        defaultValue: "undefined",
        description: getAlertPropDesc("onDismiss"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getAlertPropDesc("noShadow"),
      },
    ],
  },
  sonner: {
    slug: "sonner",
    ...getComponentText("sonner"),
    demoName: "sonner-demo",
    sourceFile: "src/components/ui/sonner.tsx",
    registryItem: "sonner",
    installGuide: {
      npmCommand: "npm install sonner lucide-react",
      note: {
        id: "Setelah instalasi, jangan lupa pasang <Toaster /> sekali di root layout (misal src/app/layout.tsx) agar pemanggilan toast() tampil di seluruh halaman.",
        en: "After installing, mount <Toaster /> once in your root layout (e.g. src/app/layout.tsx) so toast() notifications render across all pages.",
      },
      packages: [
        {
          name: "sonner",
          purpose: {
            id: "Library notifikasi toast yang ringan dengan dukungan stacking, promise, dan swipe-to-dismiss.",
            en: "Lightweight toast notification library with stacking, promises, and swipe-to-dismiss.",
          },
        },
        {
          name: "lucide-react",
          purpose: {
            id: "Ikon status (success, info, warning, error) dan spinner loading ber-stroke tegas.",
            en: "Bold status icons (success, info, warning, error) and loading spinner.",
          },
        },
      ],
    },
    sections: [
      {
        id: "basic",
        title: getSonnerSectionTitle("basic"),
        demoName: "sonner-basic-demo",
        propsUsed: "Toaster toast()",
      },
      {
        id: "variants",
        title: getSonnerSectionTitle("variants"),
        demoName: "sonner-variants-demo",
        propsUsed: "toast.success | info | warning | error",
      },
      {
        id: "action",
        title: getSonnerSectionTitle("action"),
        demoName: "sonner-action-demo",
        propsUsed: "toast(title, { action })",
      },
      {
        id: "promise",
        title: getSonnerSectionTitle("promise"),
        demoName: "sonner-promise-demo",
        propsUsed: "toast.promise()",
      },
      {
        id: "position",
        title: getSonnerSectionTitle("position"),
        demoName: "sonner-position-demo",
        propsUsed: 'position="top-left | top-center | top-right | bottom-*"',
      },
    ],
    propsTable: [
      {
        prop: "position",
        type: '"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"',
        defaultValue: '"bottom-right"',
        description: getSonnerPropDesc("position"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getSonnerPropDesc("noShadow"),
      },
      {
        prop: "toast()",
        type: "(message, options?) => string | number",
        defaultValue: "function",
        description: getSonnerPropDesc("toast()"),
      },
    ],
  },
  chart: {
    slug: "chart",
    ...getComponentText("chart"),
    demoName: "chart-demo",
    sourceFile: "src/components/ui/chart.tsx",
    registryItem: "chart",
    installGuide: {
      npmCommand: "npm install recharts",
      note: {
        id: "Perintah CLI shadcn di atas otomatis memasang recharts. Komponen chart Punch UI membungkus primitif Recharts (BarChart, LineChart, AreaChart, PieChart, Treemap) agar tampil dengan stroke 2px, warna preset, dan tooltip Neobrutalism.",
        en: "The shadcn CLI command above installs recharts automatically. Punch UI chart wrappers style Recharts primitives (BarChart, LineChart, AreaChart, PieChart, Treemap) with 2px strokes, theme tokens, and Neobrutalist tooltips.",
      },
      packages: [
        {
          name: "recharts",
          purpose: {
            id: "Library grafik React berbasis SVG (BarChart, LineChart, AreaChart, PieChart, Treemap, ResponsiveContainer).",
            en: "Composable SVG charting library for React (BarChart, LineChart, AreaChart, PieChart, Treemap, ResponsiveContainer).",
          },
        },
      ],
    },
    sections: [
      {
        id: "bar",
        title: getChartSectionTitle("bar"),
        demoName: "chart-bar-demo",
        propsUsed: "ChartContainer BarChart ChartTooltip ChartLegend",
      },
      {
        id: "composition",
        title: getChartSectionTitle("composition"),
        tree: {
          name: "ChartContainer (config)",
          role: "root",
          children: [
            {
              name: "BarChart / LineChart / AreaChart / PieChart / Treemap",
              role: "section",
              children: [
                { name: "CartesianGrid / XAxis / YAxis", role: "leaf" },
                {
                  name: "ChartTooltip",
                  role: "section",
                  children: [{ name: "ChartTooltipContent", role: "leaf" }],
                },
                {
                  name: "ChartLegend",
                  role: "section",
                  children: [{ name: "ChartLegendContent", role: "leaf" }],
                },
                { name: "Bar / Line / Area / Pie", role: "leaf" },
              ],
            },
          ],
        },
      },
      {
        id: "stacked",
        title: getChartSectionTitle("stacked"),
        demoName: "chart-stacked-demo",
        propsUsed: 'Bar stackId="rev" valueFormatter',
      },
      {
        id: "line",
        title: getChartSectionTitle("line"),
        demoName: "chart-line-demo",
        propsUsed: 'LineChart indicator="line" activeDot',
      },
      {
        id: "area",
        title: getChartSectionTitle("area"),
        demoName: "chart-area-demo",
        propsUsed: "AreaChart fillOpacity strokeWidth",
      },
      {
        id: "donut",
        title: getChartSectionTitle("donut"),
        demoName: "chart-donut-demo",
        propsUsed: "PieChart innerRadius outerRadius",
      },
      {
        id: "treemap",
        title: getChartSectionTitle("treemap"),
        demoName: "chart-treemap-demo",
        propsUsed: "Treemap custom content ChartTooltip",
      },
      {
        id: "interactive",
        title: getChartSectionTitle("interactive"),
        demoName: "chart-interactive-demo",
        propsUsed: "Card Button ChartContainer",
      },
    ],
    propsTable: [
      {
        prop: "config",
        type: "ChartConfig",
        defaultValue: "required",
        description: getChartPropDesc("config"),
      },
      {
        prop: "indicator",
        type: '"dot" | "line" | "dashed"',
        defaultValue: '"dot"',
        description: getChartPropDesc("indicator"),
      },
      {
        prop: "hideLabel",
        type: "boolean",
        defaultValue: "false",
        description: getChartPropDesc("hideLabel"),
      },
      {
        prop: "valueFormatter",
        type: "(value) => React.ReactNode",
        defaultValue: "undefined",
        description: getChartPropDesc("valueFormatter"),
      },
    ],
  },
  progress: {
    slug: "progress",
    ...getComponentText("progress"),
    demoName: "progress-demo",
    sourceFile: "src/components/ui/progress.tsx",
    registryItem: "progress",
    sections: [
      {
        id: "basic",
        title: getProgressSectionTitle("basic"),
        demoName: "progress-basic-demo",
        propsUsed: "Progress value showValue",
      },
      {
        id: "variants",
        title: getProgressSectionTitle("variants"),
        demoName: "progress-variants-demo",
        propsUsed:
          'variant="default | secondary | success | info | warning | danger"',
      },
      {
        id: "size",
        title: getProgressSectionTitle("size"),
        demoName: "progress-size-demo",
        propsUsed: 'size="sm | default | lg" showValue',
      },
      {
        id: "striped",
        title: getProgressSectionTitle("striped"),
        demoName: "progress-striped-demo",
        propsUsed: "striped indeterminate",
      },
      {
        id: "no-shadow",
        title: getProgressSectionTitle("no-shadow"),
        demoName: "progress-noshadow-demo",
        propsUsed: "noShadow",
      },
      {
        id: "animated",
        title: getProgressSectionTitle("animated"),
        demoName: "progress-animated-demo",
        propsUsed: "value (0–100) striped variant showValue",
      },
      {
        id: "card",
        title: getProgressSectionTitle("card"),
        demoName: "progress-card-demo",
        propsUsed: "Card Badge Progress noShadow",
      },
    ],
    propsTable: [
      {
        prop: "value",
        type: "number",
        defaultValue: "0",
        description: getProgressPropDesc("value"),
      },
      {
        prop: "max",
        type: "number",
        defaultValue: "100",
        description: getProgressPropDesc("max"),
      },
      {
        prop: "variant",
        type: '"default" | "secondary" | "success" | "info" | "warning" | "danger" | "destructive"',
        defaultValue: '"default"',
        description: getProgressPropDesc("variant"),
      },
      {
        prop: "size",
        type: '"sm" | "default" | "lg"',
        defaultValue: '"default"',
        description: getProgressPropDesc("size"),
      },
      {
        prop: "striped",
        type: "boolean",
        defaultValue: "false",
        description: getProgressPropDesc("striped"),
      },
      {
        prop: "showValue",
        type: "boolean",
        defaultValue: "false",
        description: getProgressPropDesc("showValue"),
      },
      {
        prop: "indeterminate",
        type: "boolean",
        defaultValue: "false",
        description: getProgressPropDesc("indeterminate"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getProgressPropDesc("noShadow"),
      },
    ],
  },
  skeleton: {
    slug: "skeleton",
    ...getComponentText("skeleton"),
    demoName: "skeleton-demo",
    sourceFile: "src/components/ui/skeleton.tsx",
    registryItem: "skeleton",
    sections: [
      {
        id: "basic",
        title: getSkeletonSectionTitle("basic"),
        demoName: "skeleton-basic-demo",
        propsUsed: 'Skeleton shape="circle | rectangle"',
      },
      {
        id: "card",
        title: getSkeletonSectionTitle("card"),
        demoName: "skeleton-card-demo",
        propsUsed: 'Card Skeleton variant="flat"',
      },
      {
        id: "table",
        title: getSkeletonSectionTitle("table"),
        demoName: "skeleton-table-demo",
        propsUsed: 'Skeleton variant="flat"',
      },
      {
        id: "interactive",
        title: getSkeletonSectionTitle("interactive"),
        demoName: "skeleton-interactive-demo",
        propsUsed: "Loading ↔ Loaded toggle",
      },
    ],
    propsTable: [
      {
        prop: "variant",
        type: '"default" | "flat"',
        defaultValue: '"default"',
        description: getSkeletonPropDesc("variant"),
      },
      {
        prop: "shape",
        type: '"rectangle" | "circle"',
        defaultValue: '"rectangle"',
        description: getSkeletonPropDesc("shape"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getSkeletonPropDesc("noShadow"),
      },
    ],
  },
  accordion: {
    slug: "accordion",
    ...getComponentText("accordion"),
    demoName: "accordion-demo",
    sourceFile: "src/components/ui/accordion.tsx",
    registryItem: "accordion",
    sections: [
      {
        id: "basic",
        title: getAccordionSectionTitle("basic"),
        demoName: "accordion-basic-demo",
        propsUsed: 'Accordion type="single" collapsible',
      },
      {
        id: "composition",
        title: getAccordionSectionTitle("composition"),
        tree: {
          name: "Accordion",
          role: "root",
          children: [
            {
              name: "AccordionItem",
              role: "section",
              children: [
                { name: "AccordionTrigger", role: "leaf" },
                { name: "AccordionContent", role: "leaf" },
              ],
            },
          ],
        },
      },
      {
        id: "multiple",
        title: getAccordionSectionTitle("multiple"),
        demoName: "accordion-multiple-demo",
        propsUsed: 'type="multiple" defaultValue',
      },
      {
        id: "variants",
        title: getAccordionSectionTitle("variants"),
        demoName: "accordion-variants-demo",
        propsUsed: 'variant="default | separated | flush"',
      },
      {
        id: "rich",
        title: getAccordionSectionTitle("rich"),
        demoName: "accordion-rich-demo",
        propsUsed: "Badge disabled noShadow",
      },
    ],
    propsTable: [
      {
        prop: "type",
        type: '"single" | "multiple"',
        defaultValue: "required",
        description: getAccordionPropDesc("type"),
      },
      {
        prop: "collapsible",
        type: "boolean",
        defaultValue: "false",
        description: getAccordionPropDesc("collapsible"),
      },
      {
        prop: "variant",
        type: '"default" | "separated" | "flush"',
        defaultValue: '"default"',
        description: getAccordionPropDesc("variant"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getAccordionPropDesc("noShadow"),
      },
      {
        prop: "disabled",
        type: "boolean",
        defaultValue: "false",
        description: getAccordionPropDesc("disabled"),
      },
    ],
  },
  "toggle-group": {
    slug: "toggle-group",
    ...getComponentText("toggle-group"),
    demoName: "toggle-group-demo",
    sourceFile: "src/components/ui/toggle-group.tsx",
    registryItem: "toggle-group",
    sections: [
      {
        id: "basic",
        title: getToggleGroupSectionTitle("basic"),
        demoName: "toggle-group-basic-demo",
        propsUsed: 'ToggleGroup type="multiple"',
      },
      {
        id: "single",
        title: getToggleGroupSectionTitle("single"),
        demoName: "toggle-group-single-demo",
        propsUsed: 'ToggleGroup type="single"',
      },
      {
        id: "variants",
        title: getToggleGroupSectionTitle("variants"),
        demoName: "toggle-group-variants-demo",
        propsUsed: 'variant="default | outline | secondary"',
      },
      {
        id: "size",
        title: getToggleGroupSectionTitle("size"),
        demoName: "toggle-group-size-demo",
        propsUsed: 'size="sm | default | lg"',
      },
      {
        id: "states",
        title: getToggleGroupSectionTitle("states"),
        demoName: "toggle-group-states-demo",
        propsUsed: "disabled noShadow",
      },
    ],
    propsTable: [
      {
        prop: "type",
        type: '"single" | "multiple"',
        defaultValue: "required",
        description: getToggleGroupPropDesc("type"),
      },
      {
        prop: "variant",
        type: '"default" | "outline" | "secondary"',
        defaultValue: '"default"',
        description: getToggleGroupPropDesc("variant"),
      },
      {
        prop: "size",
        type: '"sm" | "default" | "lg"',
        defaultValue: '"default"',
        description: getToggleGroupPropDesc("size"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getToggleGroupPropDesc("noShadow"),
      },
      {
        prop: "disabled",
        type: "boolean",
        defaultValue: "false",
        description: getToggleGroupPropDesc("disabled"),
      },
    ],
  },
  "rich-text-editor": {
    slug: "rich-text-editor",
    ...getComponentText("rich-text-editor"),
    demoName: "rich-text-editor-demo",
    sourceFile: "src/components/ui/rich-text-editor.tsx",
    registryItem: "rich-text-editor",
    installGuide: {
      npmCommand:
        "npm install @tiptap/react @tiptap/pm @tiptap/starter-kit @tiptap/extension-placeholder @tiptap/extension-text-align @tiptap/extension-character-count lucide-react",
      note: {
        id: "Jika memakai perintah CLI shadcn di atas, semua paket NPM dan komponen Punch UI di bawah ini akan otomatis terpasang. Jika copy-paste manual, pastikan semua paket berikut sudah di-install serta salin gaya .punch-editor-content dari globals.css:",
        en: "Running the shadcn CLI command above installs all NPM packages and Punch UI components below automatically. If copying manually, install these packages and include the .punch-editor-content styles from globals.css:",
      },
      packages: [
        {
          name: "@tiptap/react",
          purpose: {
            id: "Binding React utama (useEditor & EditorContent).",
            en: "Core React bindings (useEditor & EditorContent).",
          },
        },
        {
          name: "@tiptap/pm",
          purpose: {
            id: "Peer dependency inti ProseMirror yang dibutuhkan Tiptap.",
            en: "Core ProseMirror peer dependency required by Tiptap.",
          },
        },
        {
          name: "@tiptap/starter-kit",
          purpose: {
            id: "Paket inti Tiptap v3: Paragraph & Heading (H1–H4), Bold, Italic, Underline, Strike, Link, List, Blockquote, Code, HR, Undo/Redo.",
            en: "Tiptap v3 core bundle: Paragraph & Headings (H1–H4), Bold, Italic, Underline, Strike, Link, Lists, Blockquote, Code, HR, Undo/Redo.",
          },
        },
        {
          name: "@tiptap/extension-placeholder",
          purpose: {
            id: "Menampilkan teks placeholder saat kanvas editor masih kosong.",
            en: "Displays placeholder text when the editor canvas is empty.",
          },
        },
        {
          name: "@tiptap/extension-text-align",
          purpose: {
            id: "Dukungan perataan teks (Align Left, Center, Right) pada paragraf & heading.",
            en: "Text alignment support (Left, Center, Right) for paragraphs & headings.",
          },
        },
        {
          name: "@tiptap/extension-character-count",
          purpose: {
            id: "Menghitung jumlah kata/karakter secara live dan menegakkan batas maxLength.",
            en: "Live word/character counting and maxLength enforcement.",
          },
        },
        {
          name: "lucide-react",
          purpose: {
            id: "Ikon toolbar ber-stroke tegas (strokeWidth 2.5).",
            en: "Bold stroke (2.5) toolbar icons.",
          },
        },
      ],
      registryDependencies: [
        "button",
        "dropdown-menu",
        "input",
        "popover",
        "separator",
        "toggle-group",
        "tooltip",
      ],
    },
    sections: [
      {
        id: "basic",
        title: getRichTextEditorSectionTitle("basic"),
        demoName: "rich-text-editor-basic-demo",
        propsUsed: "value onChange showCharacterCount",
      },
      {
        id: "minimal",
        title: getRichTextEditorSectionTitle("minimal"),
        demoName: "rich-text-editor-minimal-demo",
        propsUsed: 'variant="minimal" size="sm" maxLength',
      },
      {
        id: "size",
        title: getRichTextEditorSectionTitle("size"),
        demoName: "rich-text-editor-size-demo",
        propsUsed: 'size="sm | default | lg"',
      },
      {
        id: "states",
        title: getRichTextEditorSectionTitle("states"),
        demoName: "rich-text-editor-states-demo",
        propsUsed: "readOnly disabled noShadow error",
      },
      {
        id: "form",
        title: getRichTextEditorSectionTitle("form"),
        demoName: "rich-text-editor-form-demo",
        propsUsed: "Card Input RichTextEditor error",
      },
    ],
    propsTable: [
      {
        prop: "value",
        type: "string",
        defaultValue: "undefined",
        description: getRichTextEditorPropDesc("value"),
      },
      {
        prop: "defaultValue",
        type: "string",
        defaultValue: '""',
        description: getRichTextEditorPropDesc("defaultValue"),
      },
      {
        prop: "onChange",
        type: "(html: string) => void",
        defaultValue: "undefined",
        description: getRichTextEditorPropDesc("onChange"),
      },
      {
        prop: "placeholder",
        type: "string",
        defaultValue: '"Write something bold..."',
        description: getRichTextEditorPropDesc("placeholder"),
      },
      {
        prop: "variant",
        type: '"default" | "minimal"',
        defaultValue: '"default"',
        description: getRichTextEditorPropDesc("variant"),
      },
      {
        prop: "size",
        type: '"sm" | "default" | "lg"',
        defaultValue: '"default"',
        description: getRichTextEditorPropDesc("size"),
      },
      {
        prop: "readOnly",
        type: "boolean",
        defaultValue: "false",
        description: getRichTextEditorPropDesc("readOnly"),
      },
      {
        prop: "disabled",
        type: "boolean",
        defaultValue: "false",
        description: getRichTextEditorPropDesc("disabled"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getRichTextEditorPropDesc("noShadow"),
      },
      {
        prop: "error",
        type: "boolean",
        defaultValue: "false",
        description: getRichTextEditorPropDesc("error"),
      },
      {
        prop: "showCharacterCount",
        type: "boolean",
        defaultValue: "false",
        description: getRichTextEditorPropDesc("showCharacterCount"),
      },
      {
        prop: "maxLength",
        type: "number",
        defaultValue: "undefined",
        description: getRichTextEditorPropDesc("maxLength"),
      },
    ],
  },
  "file-upload": {
    slug: "file-upload",
    ...getComponentText("file-upload"),
    demoName: "file-upload-demo",
    sourceFile: "src/components/ui/file-upload.tsx",
    registryItem: "file-upload",
    installGuide: {
      npmCommand: "npm install react-dropzone lucide-react",
      note: {
        id: "Perintah CLI shadcn di atas otomatis memasang react-dropzone beserta komponen Badge & Button Punch UI. Jika copy-paste manual, install paket-paket berikut:",
        en: "The shadcn CLI command above installs react-dropzone along with Punch UI's Badge & Button components automatically. If copying manually, install these packages:",
      },
      packages: [
        {
          name: "react-dropzone",
          purpose: {
            id: "Hook useDropzone untuk drag-and-drop lintas browser, validasi accept/maxSize/maxFiles, dan status isDragAccept/isDragReject real-time.",
            en: "useDropzone hook for cross-browser drag-and-drop, accept/maxSize/maxFiles validation, and real-time isDragAccept/isDragReject states.",
          },
        },
        {
          name: "lucide-react",
          purpose: {
            id: "Ikon upload, tipe berkas (gambar/CSV/PDF), peringatan error, dan tombol hapus.",
            en: "Icons for upload, file types (image/CSV/PDF), error alert, and remove actions.",
          },
        },
      ],
      registryDependencies: ["badge", "button"],
    },
    sections: [
      {
        id: "basic",
        title: getFileUploadSectionTitle("basic"),
        demoName: "file-upload-basic-demo",
        propsUsed: "FileUpload value onChange",
      },
      {
        id: "image",
        title: getFileUploadSectionTitle("image"),
        demoName: "file-upload-image-demo",
        propsUsed: "accept maxSize maxFiles showPreview",
      },
      {
        id: "validation",
        title: getFileUploadSectionTitle("validation"),
        demoName: "file-upload-validation-demo",
        propsUsed: "accept maxSize maxFiles",
      },
      {
        id: "compact",
        title: getFileUploadSectionTitle("compact"),
        demoName: "file-upload-compact-demo",
        propsUsed: 'variant="compact" multiple={false}',
      },
      {
        id: "states",
        title: getFileUploadSectionTitle("states"),
        demoName: "file-upload-states-demo",
        propsUsed: "disabled noShadow error",
      },
    ],
    propsTable: [
      {
        prop: "value",
        type: "File[]",
        defaultValue: "undefined",
        description: getFileUploadPropDesc("value"),
      },
      {
        prop: "defaultValue",
        type: "File[]",
        defaultValue: "[]",
        description: getFileUploadPropDesc("defaultValue"),
      },
      {
        prop: "onChange",
        type: "(files: File[]) => void",
        defaultValue: "undefined",
        description: getFileUploadPropDesc("onChange"),
      },
      {
        prop: "onReject",
        type: "(rejections: FileRejection[]) => void",
        defaultValue: "undefined",
        description: getFileUploadPropDesc("onReject"),
      },
      {
        prop: "accept",
        type: "Accept (Record<string, string[]>)",
        defaultValue: "undefined",
        description: getFileUploadPropDesc("accept"),
      },
      {
        prop: "multiple",
        type: "boolean",
        defaultValue: "true",
        description: getFileUploadPropDesc("multiple"),
      },
      {
        prop: "maxFiles",
        type: "number",
        defaultValue: "undefined",
        description: getFileUploadPropDesc("maxFiles"),
      },
      {
        prop: "maxSize",
        type: "number",
        defaultValue: "undefined",
        description: getFileUploadPropDesc("maxSize"),
      },
      {
        prop: "variant",
        type: '"default" | "compact"',
        defaultValue: '"default"',
        description: getFileUploadPropDesc("variant"),
      },
      {
        prop: "showPreview",
        type: "boolean",
        defaultValue: "true",
        description: getFileUploadPropDesc("showPreview"),
      },
      {
        prop: "disabled",
        type: "boolean",
        defaultValue: "false",
        description: getFileUploadPropDesc("disabled"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getFileUploadPropDesc("noShadow"),
      },
      {
        prop: "error",
        type: "boolean",
        defaultValue: "false",
        description: getFileUploadPropDesc("error"),
      },
    ],
  },
  "empty-state": {
    slug: "empty-state",
    ...getComponentText("empty-state"),
    demoName: "empty-state-demo",
    sourceFile: "src/components/ui/empty-state.tsx",
    registryItem: "empty-state",
    sections: [
      {
        id: "basic",
        title: getEmptyStateSectionTitle("basic"),
        demoName: "empty-state-basic-demo",
        propsUsed: "EmptyState EmptyStateIcon EmptyStateActions",
      },
      {
        id: "composition",
        title: getEmptyStateSectionTitle("composition"),
        propsUsed: "EmptyState anatomy",
        tree: {
          name: "EmptyState",
          role: "root",
          children: [
            { name: "EmptyStateIcon", role: "leaf" },
            { name: "EmptyStateTitle", role: "leaf" },
            { name: "EmptyStateDescription", role: "leaf" },
            { name: "EmptyStateActions", role: "section" },
          ],
        },
      },
      {
        id: "variants",
        title: getEmptyStateSectionTitle("variants"),
        demoName: "empty-state-variants-demo",
        propsUsed: 'variant="default | dashed | muted | ghost"',
      },
      {
        id: "size",
        title: getEmptyStateSectionTitle("size"),
        demoName: "empty-state-size-demo",
        propsUsed: 'size="sm | default | lg"',
      },
      {
        id: "contextual",
        title: getEmptyStateSectionTitle("contextual"),
        demoName: "empty-state-contextual-demo",
        propsUsed: 'noShadow EmptyStateIcon variant="destructive"',
      },
    ],
    propsTable: [
      {
        prop: "variant",
        type: '"default" | "dashed" | "muted" | "ghost"',
        defaultValue: '"default"',
        description: getEmptyStatePropDesc("variant"),
      },
      {
        prop: "size",
        type: '"sm" | "default" | "lg"',
        defaultValue: '"default"',
        description: getEmptyStatePropDesc("size"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getEmptyStatePropDesc("noShadow"),
      },
      {
        prop: "EmptyStateIcon.variant",
        type: '"default" | "primary" | "muted" | "destructive" | "danger"',
        defaultValue: '"default"',
        description: getEmptyStatePropDesc("iconVariant"),
      },
    ],
  },
  kbd: {
    slug: "kbd",
    ...getComponentText("kbd"),
    demoName: "kbd-demo",
    sourceFile: "src/components/ui/kbd.tsx",
    registryItem: "kbd",
    sections: [
      {
        id: "basic",
        title: getKbdSectionTitle("basic"),
        demoName: "kbd-basic-demo",
        propsUsed: "Kbd KbdGroup",
      },
      {
        id: "variants",
        title: getKbdSectionTitle("variants"),
        demoName: "kbd-variants-demo",
        propsUsed: 'variant="default | secondary | primary | muted"',
      },
      {
        id: "size",
        title: getKbdSectionTitle("size"),
        demoName: "kbd-size-demo",
        propsUsed: 'size="sm | default | lg"',
      },
      {
        id: "context",
        title: getKbdSectionTitle("context"),
        demoName: "kbd-context-demo",
        propsUsed: "Button Card KbdGroup noShadow",
      },
    ],
    propsTable: [
      {
        prop: "variant",
        type: '"default" | "secondary" | "primary" | "muted"',
        defaultValue: '"default"',
        description: getKbdPropDesc("variant"),
      },
      {
        prop: "size",
        type: '"sm" | "default" | "lg"',
        defaultValue: '"default"',
        description: getKbdPropDesc("size"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getKbdPropDesc("noShadow"),
      },
    ],
  },
  "color-picker": {
    slug: "color-picker",
    ...getComponentText("color-picker"),
    demoName: "color-picker-demo",
    sourceFile: "src/components/ui/color-picker.tsx",
    registryItem: "color-picker",
    sections: [
      {
        id: "basic",
        title: getColorPickerSectionTitle("basic"),
        demoName: "color-picker-basic-demo",
        propsUsed: "ColorPicker value onChange",
      },
      {
        id: "presets",
        title: getColorPickerSectionTitle("presets"),
        demoName: "color-picker-presets-demo",
        propsUsed: "presets showHex={false}",
      },
      {
        id: "size",
        title: getColorPickerSectionTitle("size"),
        demoName: "color-picker-size-demo",
        propsUsed: 'size="sm | default | lg"',
      },
      {
        id: "states",
        title: getColorPickerSectionTitle("states"),
        demoName: "color-picker-states-demo",
        propsUsed: "disabled noShadow error",
      },
      {
        id: "card",
        title: getColorPickerSectionTitle("card"),
        demoName: "color-picker-card-demo",
        propsUsed: "Card ColorPicker live branding",
      },
    ],
    propsTable: [
      {
        prop: "value",
        type: "string",
        defaultValue: "undefined",
        description: getColorPickerPropDesc("value"),
      },
      {
        prop: "defaultValue",
        type: "string",
        defaultValue: '"#ff8a00"',
        description: getColorPickerPropDesc("defaultValue"),
      },
      {
        prop: "onChange",
        type: "(hex: string) => void",
        defaultValue: "undefined",
        description: getColorPickerPropDesc("onChange"),
      },
      {
        prop: "presets",
        type: "string[]",
        defaultValue: "12 colors",
        description: getColorPickerPropDesc("presets"),
      },
      {
        prop: "showHex",
        type: "boolean",
        defaultValue: "true",
        description: getColorPickerPropDesc("showHex"),
      },
      {
        prop: "size",
        type: '"sm" | "default" | "lg"',
        defaultValue: '"default"',
        description: getColorPickerPropDesc("size"),
      },
      {
        prop: "disabled",
        type: "boolean",
        defaultValue: "false",
        description: getColorPickerPropDesc("disabled"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getColorPickerPropDesc("noShadow"),
      },
      {
        prop: "error",
        type: "boolean",
        defaultValue: "false",
        description: getColorPickerPropDesc("error"),
      },
    ],
  },
  "navigation-menu": {
    slug: "navigation-menu",
    ...getComponentText("navigation-menu"),
    demoName: "navigation-menu-demo",
    sourceFile: "src/components/ui/navigation-menu.tsx",
    registryItem: "navigation-menu",
    installGuide: {
      npmCommand:
        "npm install @radix-ui/react-navigation-menu class-variance-authority lucide-react",
      note: {
        id: "Perintah CLI shadcn di atas otomatis memasang semua paket berikut. Jika copy-paste manual, pastikan paket-paket ini terpasang:",
        en: "The shadcn CLI command above installs all packages below automatically. If copying manually, install these packages:",
      },
      packages: [
        {
          name: "@radix-ui/react-navigation-menu",
          purpose: {
            id: "Primitif navigasi & mega-menu aksesibel dengan hover intent, viewport dinamis, dan navigasi keyboard.",
            en: "Accessible navigation and mega-menu primitive with hover intent, dynamic viewport, and keyboard navigation.",
          },
        },
        {
          name: "class-variance-authority",
          purpose: {
            id: "Helper navigationMenuTriggerStyle() untuk menyeragamkan gaya trigger dan link langsung.",
            en: "Powers navigationMenuTriggerStyle() to keep triggers and standalone links visually consistent.",
          },
        },
        {
          name: "lucide-react",
          purpose: {
            id: "Ikon ChevronDown yang berputar otomatis saat dropdown menu terbuka.",
            en: "Rotating ChevronDown indicator icon on NavigationMenuTrigger.",
          },
        },
      ],
    },
    sections: [
      {
        id: "basic",
        title: getNavigationMenuSectionTitle("basic"),
        demoName: "navigation-menu-basic-demo",
        propsUsed: "NavigationMenu NavigationMenuTrigger NavigationMenuContent",
      },
      {
        id: "composition",
        title: getNavigationMenuSectionTitle("composition"),
        propsUsed: "NavigationMenu anatomy",
        tree: {
          name: "NavigationMenu",
          role: "root",
          children: [
            {
              name: "NavigationMenuList",
              role: "section",
              children: [
                {
                  name: "NavigationMenuItem",
                  role: "section",
                  children: [
                    { name: "NavigationMenuTrigger", role: "leaf" },
                    { name: "NavigationMenuContent", role: "leaf" },
                    { name: "NavigationMenuLink", role: "leaf" },
                  ],
                },
              ],
            },
            { name: "NavigationMenuViewport", role: "leaf" },
          ],
        },
      },
      {
        id: "simple",
        title: getNavigationMenuSectionTitle("simple"),
        demoName: "navigation-menu-simple-demo",
        propsUsed: "NavigationMenuLink Badge Icons",
      },
      {
        id: "topbar",
        title: getNavigationMenuSectionTitle("topbar"),
        demoName: "navigation-menu-topbar-demo",
        propsUsed: "NavigationMenu noBorder noShadow",
      },
    ],
    propsTable: [
      {
        prop: "viewport",
        type: "boolean",
        defaultValue: "true",
        description: getNavigationMenuPropDesc("viewport"),
      },
      {
        prop: "noShadow",
        type: "boolean",
        defaultValue: "false",
        description: getNavigationMenuPropDesc("noShadow"),
      },
      {
        prop: "noBorder",
        type: "boolean",
        defaultValue: "false",
        description: getNavigationMenuPropDesc("noBorder"),
      },
      {
        prop: "delayDuration",
        type: "number",
        defaultValue: "200",
        description: getNavigationMenuPropDesc("delayDuration"),
      },
      {
        prop: "NavigationMenuLink.asChild",
        type: "boolean",
        defaultValue: "false",
        description: getNavigationMenuPropDesc("asChild"),
      },
    ],
  },
};

export const CATALOG_LIST = Object.values(COMPONENT_DOCS).sort((a, b) =>
  a.title.en.localeCompare(b.title.en)
);
