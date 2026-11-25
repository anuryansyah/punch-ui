import fs from "node:fs/promises";
import path from "node:path";
import { codeToHtml } from "shiki";
import { PreviewTabs } from "@/components/docs/preview-tabs";
import {
  ButtonDemo,
  ButtonDefaultDemo,
  ButtonDisabledDemo,
  ButtonGhostDemo,
  ButtonIconDemo,
  ButtonNoShadowDemo,
  ButtonOutlineDemo,
  ButtonSecondaryDemo,
  ButtonSizeDemo,
  ButtonSpinnerDemo,
  ButtonStatusDemo,
  ButtonWithIconDemo,
} from "@/examples/button-demo";
import {
  BadgeCounterDemo,
  BadgeDemo,
  BadgeDotDemo,
  BadgeLinkDemo,
  BadgeNoShadowDemo,
  BadgeSizeDemo,
  BadgeStatusDemo,
  BadgeVariantDemo,
  BadgeWithIconDemo,
} from "@/examples/badge-demo";
import {
  CardAccentHeaderDemo,
  CardBasicDemo,
  CardCompositionDemo,
  CardDemo,
  CardFormDemo,
  CardImageDemo,
  CardInteractiveDemo,
  CardKpiDemo,
  CardNoShadowDemo,
  CardStatusDemo,
  CardVariantDemo,
} from "@/examples/card-demo";
import {
  InputAddonDemo,
  InputBasicDemo,
  InputDemo,
  InputDisabledDemo,
  InputFileDemo,
  InputNoShadowDemo,
  InputSizeDemo,
  InputTextareaDemo,
  InputValidationDemo,
  InputWithButtonDemo,
  InputWithIconDemo,
  InputWithLabelDemo,
} from "@/examples/input-demo";
import {
  AvatarBadgeDemo,
  AvatarBasicDemo,
  AvatarColorDemo,
  AvatarDemo,
  AvatarGroupDemo,
  AvatarNoShadowDemo,
  AvatarProfileDemo,
  AvatarShapeDemo,
  AvatarSizeDemo,
} from "@/examples/avatar-demo";
import {
  SeparatorBasicDemo,
  SeparatorDemo,
  SeparatorLabelDemo,
  SeparatorListDemo,
  SeparatorThicknessDemo,
  SeparatorVariantDemo,
} from "@/examples/separator-demo";
import {
  ScrollAreaBothDemo,
  ScrollAreaDemo,
  ScrollAreaGhostDemo,
  ScrollAreaHorizontalDemo,
  ScrollAreaScrollbarVariantDemo,
  ScrollAreaSizeDemo,
  ScrollAreaVerticalDemo,
} from "@/examples/scroll-area-demo";
import {
  PaginationBasicDemo,
  PaginationCompactDemo,
  PaginationDemo,
  PaginationEllipsisDemo,
  PaginationNoShadowDemo,
  PaginationRowsPerPageDemo,
  PaginationSizeDemo,
} from "@/examples/pagination-demo";
import {
  TableActionsDemo,
  TableBasicDemo,
  TableCompactDemo,
  TableDemo,
  TableGridStripedDemo,
  TableHeaderVariantsDemo,
  TableHoverableDemo,
} from "@/examples/table-demo";
import {
  DataTableBasicDemo,
  DataTableColumnsDemo,
  DataTableCompactDemo,
  DataTableDemo,
  DataTablePaginationDemo,
  DataTableSelectionDemo,
  DataTableSortingSearchDemo,
} from "@/examples/data-table-demo";
import {
  SidebarBasicDemo,
  SidebarCollapsibleDemo,
  SidebarDemo,
  SidebarFloatingDemo,
  SidebarRightDemo,
  SidebarSubmenuDemo,
} from "@/examples/sidebar-demo";
import {
  SelectAlignDemo,
  SelectBasicDemo,
  SelectClearableDemo,
  SelectDemo,
  SelectFormCardDemo,
  SelectGroupedDemo,
  SelectSizeDemo,
  SelectStatesDemo,
} from "@/examples/select-demo";
import {
  CheckboxBasicDemo,
  CheckboxCardDemo,
  CheckboxDemo,
  CheckboxIndeterminateDemo,
  CheckboxSizeDemo,
  CheckboxStatesDemo,
  CheckboxVariantDemo,
} from "@/examples/checkbox-demo";
import {
  RadioGroupBasicDemo,
  RadioGroupCardDemo,
  RadioGroupDemo,
  RadioGroupShapeDemo,
  RadioGroupSizeDemo,
  RadioGroupStatesDemo,
  RadioGroupVariantDemo,
} from "@/examples/radio-group-demo";
import {
  SwitchBasicDemo,
  SwitchDemo,
  SwitchSettingsCardDemo,
  SwitchShapeDemo,
  SwitchSizeDemo,
  SwitchStatesDemo,
  SwitchVariantDemo,
} from "@/examples/switch-demo";
import {
  SliderBasicDemo,
  SliderDemo,
  SliderRangeDemo,
  SliderSizeShapeDemo,
  SliderStatesDemo,
  SliderSteppedVerticalDemo,
  SliderVariantDemo,
} from "@/examples/slider-demo";
import {
  FormBasicDemo,
  FormControlsDemo,
  FormDemo,
} from "@/examples/form-demo";
import {
  DatePickerBasicDemo,
  DatePickerCalendarDemo,
  DatePickerDemo,
  DatePickerDropdownDemo,
  DatePickerPresetsDemo,
  DatePickerRangeDemo,
  DatePickerSizeDemo,
  DatePickerStatesDemo,
} from "@/examples/date-picker-demo";
import {
  CommandBasicDemo,
  CommandDialogDemo,
  CommandStatesDemo,
} from "@/examples/command-demo";
import {
  ComboboxBasicDemo,
  ComboboxGroupedDemo,
  ComboboxMultiDemo,
  ComboboxSizesDemo,
  ComboboxStatesDemo,
} from "@/examples/combobox-demo";
import {
  InputOTPBasicDemo,
  InputOTPCardDemo,
  InputOTPPatternDemo,
  InputOTPSizeDemo,
  InputOTPStatesDemo,
} from "@/examples/input-otp-demo";
import {
  DialogBasicDemo,
  DialogFormDemo,
  DialogHeaderVariantDemo,
  DialogScrollableDemo,
  DialogSizeDemo,
} from "@/examples/dialog-demo";
import {
  AlertDialogAsyncDemo,
  AlertDialogBasicDemo,
  AlertDialogDestructiveDemo,
} from "@/examples/alert-dialog-demo";
import {
  SheetBasicDemo,
  SheetFilterDemo,
  SheetNavigationDemo,
  SheetScrollableDemo,
  SheetSidesDemo,
} from "@/examples/sheet-demo";
import {
  DropdownMenuBasicDemo,
  DropdownMenuCheckboxesDemo,
  DropdownMenuRadioDemo,
  DropdownMenuSubmenuDemo,
} from "@/examples/dropdown-menu-demo";
import {
  PopoverBasicDemo,
  PopoverNoShadowDemo,
  PopoverPlacementDemo,
  PopoverProfileDemo,
} from "@/examples/popover-demo";
import {
  TooltipBasicDemo,
  TooltipPlacementDemo,
  TooltipToolbarDemo,
  TooltipVariantsDemo,
} from "@/examples/tooltip-demo";
import {
  TabsBasicDemo,
  TabsFolderDemo,
  TabsSizesDemo,
  TabsStatesDemo,
  TabsUnderlineDemo,
  TabsVerticalDemo,
} from "@/examples/tabs-demo";
import {
  ButtonGroupBasicDemo,
  ButtonGroupInputDemo,
  ButtonGroupNoShadowDemo,
  ButtonGroupSizeDemo,
  ButtonGroupSplitDemo,
  ButtonGroupVerticalDemo,
} from "@/examples/button-group-demo";
import {
  BreadcrumbBasicDemo,
  BreadcrumbDropdownDemo,
  BreadcrumbSeparatorDemo,
  BreadcrumbVariantsDemo,
} from "@/examples/breadcrumb-demo";
import {
  AlertBasicDemo,
  AlertDismissibleDemo,
  AlertNoShadowDemo,
  AlertVariantsDemo,
} from "@/examples/alert-demo";
import {
  SonnerActionDemo,
  SonnerBasicDemo,
  SonnerPositionDemo,
  SonnerPromiseDemo,
  SonnerVariantsDemo,
} from "@/examples/sonner-demo";
import {
  ChartAreaDemo,
  ChartBarDemo,
  ChartDonutDemo,
  ChartInteractiveDemo,
  ChartLineDemo,
  ChartStackedBarDemo,
  ChartTreemapDemo,
} from "@/examples/chart-demo";
import {
  ProgressAnimatedDemo,
  ProgressBasicDemo,
  ProgressNoShadowDemo,
  ProgressQuotaCardDemo,
  ProgressSizeDemo,
  ProgressStripedDemo,
  ProgressVariantsDemo,
} from "@/examples/progress-demo";
import {
  SkeletonBasicDemo,
  SkeletonCardDemo,
  SkeletonInteractiveDemo,
  SkeletonTableDemo,
} from "@/examples/skeleton-demo";
import {
  AccordionBasicDemo,
  AccordionMultipleDemo,
  AccordionRichDemo,
  AccordionVariantsDemo,
} from "@/examples/accordion-demo";
import {
  ToggleGroupBasicDemo,
  ToggleGroupSingleDemo,
  ToggleGroupSizeDemo,
  ToggleGroupStatesDemo,
  ToggleGroupVariantsDemo,
} from "@/examples/toggle-group-demo";
import {
  RichTextEditorBasicDemo,
  RichTextEditorDemo,
  RichTextEditorFormDemo,
  RichTextEditorMinimalDemo,
  RichTextEditorSizeDemo,
  RichTextEditorStatesDemo,
} from "@/examples/rich-text-editor-demo";
import {
  FileUploadBasicDemo,
  FileUploadCompactDemo,
  FileUploadDemo,
  FileUploadImageDemo,
  FileUploadStatesDemo,
  FileUploadValidationDemo,
} from "@/examples/file-upload-demo";
import {
  EmptyStateBasicDemo,
  EmptyStateContextualDemo,
  EmptyStateDemo,
  EmptyStateSizeDemo,
  EmptyStateVariantsDemo,
} from "@/examples/empty-state-demo";
import {
  KbdBasicDemo,
  KbdDemo,
  KbdInContextDemo,
  KbdSizeDemo,
  KbdVariantsDemo,
} from "@/examples/kbd-demo";
import {
  ColorPickerBasicDemo,
  ColorPickerCardDemo,
  ColorPickerDemo,
  ColorPickerPresetsDemo,
  ColorPickerSizeDemo,
  ColorPickerStatesDemo,
} from "@/examples/color-picker-demo";
import {
  NavigationMenuBasicDemo,
  NavigationMenuDemo,
  NavigationMenuSimpleDemo,
  NavigationMenuTopbarDemo,
} from "@/examples/navigation-menu-demo";
import {
  MarqueeBasicDemo,
  MarqueeDemo,
  MarqueeDualDemo,
  MarqueeNoShadowDemo,
  MarqueeVariantsDemo,
} from "@/examples/marquee-demo";

const DEMO_REGISTRY: Record<
  string,
  {
    title: string;
    filePath: string;
    codeSnippet?: string;
    Component: React.ComponentType;
  }
> = {
  "button-demo": {
    title: "Button Overview",
    filePath: "src/examples/button-demo.tsx",
    Component: ButtonDemo,
  },
  "button-status-demo": {
    title: "Variant",
    filePath: "src/examples/button-demo.tsx",
    codeSnippet: `import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle2, Info, Trash2 } from "lucide-react";

export function ButtonStatusDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="default">Default</Button>
      <Button variant="success">
        <CheckCircle2 className="h-4 w-4" strokeWidth={2.5} />
        Success
      </Button>
      <Button variant="info">
        <Info className="h-4 w-4" strokeWidth={2.5} />
        Info
      </Button>
      <Button variant="warning">
        <AlertTriangle className="h-4 w-4" strokeWidth={2.5} />
        Warning
      </Button>
      <Button variant="danger">
        <Trash2 className="h-4 w-4" strokeWidth={2.5} />
        Danger
      </Button>
    </div>
  );
}`,
    Component: ButtonStatusDemo,
  },
  "button-size-demo": {
    title: "Size",
    filePath: "src/examples/button-demo.tsx",
    codeSnippet: `import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function ButtonSizeDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" aria-label="Add item">
        <Plus className="h-4 w-4" strokeWidth={2.5} />
      </Button>
    </div>
  );
}`,
    Component: ButtonSizeDemo,
  },
  "button-default-demo": {
    title: "Default",
    filePath: "src/examples/button-demo.tsx",
    codeSnippet: `import { Button } from "@/components/ui/button";

export function ButtonDefaultDemo() {
  return <Button variant="default">Save Changes</Button>;
}`,
    Component: ButtonDefaultDemo,
  },
  "button-secondary-demo": {
    title: "Secondary",
    filePath: "src/examples/button-demo.tsx",
    codeSnippet: `import { Button } from "@/components/ui/button";

export function ButtonSecondaryDemo() {
  return <Button variant="secondary">Export Report</Button>;
}`,
    Component: ButtonSecondaryDemo,
  },
  "button-outline-demo": {
    title: "Outline",
    filePath: "src/examples/button-demo.tsx",
    codeSnippet: `import { Button } from "@/components/ui/button";

export function ButtonOutlineDemo() {
  return <Button variant="outline">Cancel</Button>;
}`,
    Component: ButtonOutlineDemo,
  },
  "button-noshadow-demo": {
    title: "No Shadow",
    filePath: "src/examples/button-demo.tsx",
    codeSnippet: `import { Button } from "@/components/ui/button";

export function ButtonNoShadowDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button noShadow>Apply Filter</Button>
      <Button variant="secondary" noShadow>Archive</Button>
      <Button variant="outline" noShadow>Dismiss</Button>
      <Button variant="danger" noShadow>Delete</Button>
    </div>
  );
}`,
    Component: ButtonNoShadowDemo,
  },
  "button-ghost-demo": {
    title: "Ghost",
    filePath: "src/examples/button-demo.tsx",
    codeSnippet: `import { Button } from "@/components/ui/button";

export function ButtonGhostDemo() {
  return <Button variant="ghost">Reset Filter</Button>;
}`,
    Component: ButtonGhostDemo,
  },
  "button-with-icon-demo": {
    title: "With Icon",
    filePath: "src/examples/button-demo.tsx",
    codeSnippet: `import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Send } from "lucide-react";

export function ButtonWithIconDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="default">
        <Download className="h-4 w-4" strokeWidth={2.5} />
        Download CSV
      </Button>
      <Button variant="secondary">
        Continue
        <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
      </Button>
      <Button variant="outline">
        <Send className="h-4 w-4" strokeWidth={2.5} />
        Send Message
        <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
      </Button>
    </div>
  );
}`,
    Component: ButtonWithIconDemo,
  },
  "button-icon-demo": {
    title: "Icon",
    filePath: "src/examples/button-demo.tsx",
    codeSnippet: `import { Button } from "@/components/ui/button";
import { Bell, Plus, Settings, Trash2 } from "lucide-react";

export function ButtonIconDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="icon" variant="default" aria-label="Add new">
        <Plus className="h-4 w-4" strokeWidth={2.5} />
      </Button>
      <Button size="icon" variant="secondary" aria-label="Notifications">
        <Bell className="h-4 w-4" strokeWidth={2.5} />
      </Button>
      <Button size="icon" variant="outline" aria-label="Settings">
        <Settings className="h-4 w-4" strokeWidth={2.5} />
      </Button>
      <Button size="icon" variant="danger" aria-label="Delete">
        <Trash2 className="h-4 w-4" strokeWidth={2.5} />
      </Button>
    </div>
  );
}`,
    Component: ButtonIconDemo,
  },
  "button-disabled-demo": {
    title: "Disable",
    filePath: "src/examples/button-demo.tsx",
    codeSnippet: `import { Button } from "@/components/ui/button";

export function ButtonDisabledDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="default" disabled>Save Changes</Button>
      <Button variant="secondary" disabled>Export Report</Button>
      <Button variant="outline" disabled>Cancel</Button>
    </div>
  );
}`,
    Component: ButtonDisabledDemo,
  },
  "button-spinner-demo": {
    title: "Spinner",
    filePath: "src/examples/button-demo.tsx",
    codeSnippet: `import { Button } from "@/components/ui/button";

export function ButtonSpinnerDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button isLoading>Processing...</Button>
      <Button variant="secondary" isLoading loadingText="Uploading...">
        Upload File
      </Button>
      <Button variant="success" isLoading loadingText="Saving..." />
    </div>
  );
}`,
    Component: ButtonSpinnerDemo,
  },
  "badge-demo": {
    title: "Badge Overview",
    filePath: "src/examples/badge-demo.tsx",
    Component: BadgeDemo,
  },
  "badge-variant-demo": {
    title: "Variant",
    filePath: "src/examples/badge-demo.tsx",
    codeSnippet: `import { Badge } from "@/components/ui/badge";

export function BadgeVariantDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="muted">Muted</Badge>
    </div>
  );
}`,
    Component: BadgeVariantDemo,
  },
  "badge-status-demo": {
    title: "Status Variant",
    filePath: "src/examples/badge-demo.tsx",
    codeSnippet: `import { Badge } from "@/components/ui/badge";

export function BadgeStatusDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge variant="success">Success • Paid</Badge>
      <Badge variant="info">Info • Processing</Badge>
      <Badge variant="warning">Warning • Pending</Badge>
      <Badge variant="danger">Danger • Failed</Badge>
    </div>
  );
}`,
    Component: BadgeStatusDemo,
  },
  "badge-size-demo": {
    title: "Size",
    filePath: "src/examples/badge-demo.tsx",
    codeSnippet: `import { Badge } from "@/components/ui/badge";

export function BadgeSizeDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge size="sm">Small (sm)</Badge>
      <Badge size="default">Default</Badge>
      <Badge size="lg">Large (lg)</Badge>
    </div>
  );
}`,
    Component: BadgeSizeDemo,
  },
  "badge-with-icon-demo": {
    title: "With Icon",
    filePath: "src/examples/badge-demo.tsx",
    codeSnippet: `import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Flame, Lock, TrendingUp } from "lucide-react";

export function BadgeWithIconDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge variant="success">
        <CheckCircle2 strokeWidth={2.5} />
        Verified
      </Badge>
      <Badge variant="secondary">
        <TrendingUp strokeWidth={2.5} />
        +24.8% Growth
      </Badge>
      <Badge variant="default">
        <Flame strokeWidth={2.5} />
        Trending
      </Badge>
      <Badge variant="outline">
        <Lock strokeWidth={2.5} />
        Read Only
      </Badge>
    </div>
  );
}`,
    Component: BadgeWithIconDemo,
  },
  "badge-dot-demo": {
    title: "With Status Dot",
    filePath: "src/examples/badge-demo.tsx",
    codeSnippet: `import { Badge } from "@/components/ui/badge";

export function BadgeDotDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge variant="success" dot>Online</Badge>
      <Badge variant="info" dot>Syncing</Badge>
      <Badge variant="warning" dot>Degraded</Badge>
      <Badge variant="danger" dot>Offline</Badge>
    </div>
  );
}`,
    Component: BadgeDotDemo,
  },
  "badge-counter-demo": {
    title: "Counter Badge",
    filePath: "src/examples/badge-demo.tsx",
    codeSnippet: `import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function BadgeCounterDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="outline" size="sm">
        Inbox
        <Badge variant="default" size="sm" noShadow className="font-mono">
          12
        </Badge>
      </Button>
      <Button variant="outline" size="sm">
        Pull Requests
        <Badge variant="secondary" size="sm" noShadow className="font-mono">
          4
        </Badge>
      </Button>
      <Button variant="outline" size="sm">
        Alerts
        <Badge variant="danger" size="sm" noShadow className="font-mono">
          99+
        </Badge>
      </Button>
    </div>
  );
}`,
    Component: BadgeCounterDemo,
  },
  "badge-link-demo": {
    title: "Clickable / Link Badge",
    filePath: "src/examples/badge-demo.tsx",
    codeSnippet: `import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Sparkles } from "lucide-react";

export function BadgeLinkDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge
        asChild
        variant="default"
        className="cursor-pointer active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
      >
        <a href="#release">
          <Sparkles strokeWidth={2.5} />
          Release v0.1
          <ArrowUpRight strokeWidth={2.5} />
        </a>
      </Badge>
      <Badge
        asChild
        variant="secondary"
        className="cursor-pointer active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
      >
        <a href="#changelog">
          Changelog
          <ArrowUpRight strokeWidth={2.5} />
        </a>
      </Badge>
    </div>
  );
}`,
    Component: BadgeLinkDemo,
  },
  "badge-noshadow-demo": {
    title: "No Shadow",
    filePath: "src/examples/badge-demo.tsx",
    codeSnippet: `import { Badge } from "@/components/ui/badge";

export function BadgeNoShadowDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge noShadow>Default Flat</Badge>
      <Badge variant="secondary" noShadow>Secondary Flat</Badge>
      <Badge variant="success" noShadow>Success Flat</Badge>
      <Badge variant="danger" noShadow>Danger Flat</Badge>
    </div>
  );
}`,
    Component: BadgeNoShadowDemo,
  },
  "card-demo": {
    title: "Card Overview",
    filePath: "src/examples/card-demo.tsx",
    Component: CardDemo,
  },
  "card-basic-demo": {
    title: "Basic Card",
    filePath: "src/examples/card-demo.tsx",
    codeSnippet: `import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CardBasicDemo() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Production Deployment</CardTitle>
        <CardDescription>
          Automated build pipeline for Southeast Asia edge cluster.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm">
        All 14 microservices passed integration checks and are ready to roll out
        to production traffic.
      </CardContent>
      <CardFooter className="justify-end gap-2.5">
        <Button variant="outline" size="sm">Cancel</Button>
        <Button size="sm">Deploy Now</Button>
      </CardFooter>
    </Card>
  );
}`,
    Component: CardBasicDemo,
  },
  "card-composition-demo": {
    title: "Composition",
    filePath: "src/examples/card-demo.tsx",
    codeSnippet: `import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";

export function CardCompositionDemo() {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader className="flex-row items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <Avatar className="bg-primary text-primary-foreground">
            <AvatarFallback className="bg-primary text-primary-foreground">PU</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>Punch UI Design System</CardTitle>
            <CardDescription>Updated 12 minutes ago by Alex</CardDescription>
          </div>
        </div>
        <CardAction>
          <Badge variant="success">Active</Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-4">
        <Separator />
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-md border-2 border-border bg-muted p-2.5">
            <p className="font-mono text-base font-bold">28</p>
            <p className="text-[11px] text-muted-foreground">Components</p>
          </div>
          <div className="rounded-md border-2 border-border bg-muted p-2.5">
            <p className="font-mono text-base font-bold">6</p>
            <p className="text-[11px] text-muted-foreground">Themes</p>
          </div>
          <div className="rounded-md border-2 border-border bg-muted p-2.5">
            <p className="font-mono text-base font-bold">100%</p>
            <p className="text-[11px] text-muted-foreground">TypeScript</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <span className="font-mono text-xs text-muted-foreground">v0.1.0 • MIT License</span>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">View Logs</Button>
          <Button size="sm">
            Open Repo
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}`,
    Component: CardCompositionDemo,
  },
  "card-variant-demo": {
    title: "Variant",
    filePath: "src/examples/card-demo.tsx",
    codeSnippet: `import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CardVariantDemo() {
  return (
    <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
      <Card variant="default">
        <CardHeader><CardTitle className="text-base">Default Card</CardTitle></CardHeader>
        <CardContent className="text-xs">Standard surface using --card token.</CardContent>
      </Card>
      <Card variant="primary">
        <CardHeader><CardTitle className="text-base">Primary Card</CardTitle></CardHeader>
        <CardContent className="text-xs">High-emphasis callout using --primary.</CardContent>
      </Card>
      <Card variant="secondary">
        <CardHeader><CardTitle className="text-base">Secondary Card</CardTitle></CardHeader>
        <CardContent className="text-xs">Accent surface using --secondary.</CardContent>
      </Card>
      <Card variant="muted">
        <CardHeader><CardTitle className="text-base">Muted Card</CardTitle></CardHeader>
        <CardContent className="text-xs">Subtle background using --muted.</CardContent>
      </Card>
    </div>
  );
}`,
    Component: CardVariantDemo,
  },
  "card-status-demo": {
    title: "Status Variant",
    filePath: "src/examples/card-demo.tsx",
    codeSnippet: `import { Card } from "@/components/ui/card";
import { CheckCircle2, Cpu, ShieldAlert, Zap } from "lucide-react";

export function CardStatusDemo() {
  return (
    <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
      <Card variant="success" className="p-4">
        <div className="flex items-center gap-2 text-sm font-bold">
          <CheckCircle2 className="h-4 w-4" strokeWidth={2.5} />
          All Systems Operational
        </div>
        <p className="mt-1 text-xs">Zero incidents reported in the last 30 days.</p>
      </Card>
      <Card variant="info" className="p-4">
        <div className="flex items-center gap-2 text-sm font-bold">
          <Cpu className="h-4 w-4" strokeWidth={2.5} />
          Database Migration Running
        </div>
        <p className="mt-1 text-xs">Replica sync is currently at 84% completion.</p>
      </Card>
      <Card variant="warning" className="p-4">
        <div className="flex items-center gap-2 text-sm font-bold">
          <Zap className="h-4 w-4" strokeWidth={2.5} />
          API Rate Limit Approaching
        </div>
        <p className="mt-1 text-xs">8,920 of 10,000 hourly requests consumed.</p>
      </Card>
      <Card variant="danger" className="p-4">
        <div className="flex items-center gap-2 text-sm font-bold">
          <ShieldAlert className="h-4 w-4" strokeWidth={2.5} />
          Webhook Delivery Failed
        </div>
        <p className="mt-1 text-xs">Endpoint returned HTTP 503 Service Unavailable.</p>
      </Card>
    </div>
  );
}`,
    Component: CardStatusDemo,
  },
  "card-accent-header-demo": {
    title: "Accent Header",
    filePath: "src/examples/card-demo.tsx",
    codeSnippet: `import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CardAccentHeaderDemo() {
  return (
    <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
      <Card>
        <CardHeader variant="secondary">
          <CardTitle className="text-base">Secondary Header Block</CardTitle>
        </CardHeader>
        <CardContent className="text-xs">
          Retro window header style with variant="secondary" on CardHeader.
        </CardContent>
      </Card>
      <Card>
        <CardHeader variant="primary">
          <CardTitle className="text-base">Primary Header Block</CardTitle>
        </CardHeader>
        <CardContent className="text-xs">
          Bold header bar with variant="primary" on CardHeader.
        </CardContent>
      </Card>
    </div>
  );
}`,
    Component: CardAccentHeaderDemo,
  },
  "card-kpi-demo": {
    title: "KPI & Metric Card",
    filePath: "src/examples/card-demo.tsx",
    codeSnippet: `import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

export function CardKpiDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <CardTitle className="text-xs uppercase tracking-wider">
          Monthly Revenue
        </CardTitle>
        <Badge variant="success">+18.4%</Badge>
      </CardHeader>
      <CardContent className="space-y-1">
        <p className="font-mono text-2xl font-bold">$84,250.00</p>
        <CardDescription>+$13,100.00 vs last month</CardDescription>
      </CardContent>
      <CardFooter className="justify-between">
        <span className="flex items-center gap-1 font-mono text-xs font-bold">
          <TrendingUp className="h-3.5 w-3.5" strokeWidth={2.5} />
          Target 92%
        </span>
        <Button size="sm" variant="outline">Report</Button>
      </CardFooter>
    </Card>
  );
}`,
    Component: CardKpiDemo,
  },
  "card-form-demo": {
    title: "Card with Form",
    filePath: "src/examples/card-demo.tsx",
    codeSnippet: `import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export function CardFormDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to access your dashboard
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="login-email">Email</Label>
          <Input id="login-email" type="email" placeholder="m@example.com" />
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="login-password">Password</Label>
            <a href="#" className="text-xs font-bold hover:underline">
              Forgot password?
            </a>
          </div>
          <Input id="login-password" type="password" placeholder="••••••••" />
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-3">
        <Button className="w-full">Login</Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
        <Separator className="my-0.5" />
        <p className="text-center text-xs text-muted-foreground">
          Don&apos;t have an account?{" "}
          <a href="#" className="font-bold text-card-foreground hover:underline">
            Sign Up
          </a>
        </p>
      </CardFooter>
    </Card>
  );
}`,
    Component: CardFormDemo,
  },
  "card-interactive-demo": {
    title: "Interactive Card",
    filePath: "src/examples/card-demo.tsx",
    codeSnippet: `import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

export function CardInteractiveDemo() {
  return (
    <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
      <Card interactive className="p-5">
        <div className="flex items-center justify-between">
          <Badge variant="default">Starter Plan</Badge>
          <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
        </div>
        <p className="mt-3 font-mono text-2xl font-bold">$19 / mo</p>
        <p className="mt-1 text-xs text-muted-foreground">
          Click this card to feel the mechanical press interaction.
        </p>
      </Card>
      <Card interactive variant="secondary" className="p-5">
        <div className="flex items-center justify-between">
          <Badge variant="outline">Pro Plan</Badge>
          <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
        </div>
        <p className="mt-3 font-mono text-2xl font-bold">$49 / mo</p>
        <p className="mt-1 text-xs opacity-80">
          Unlimited projects, custom registry, and priority builds.
        </p>
      </Card>
    </div>
  );
}`,
    Component: CardInteractiveDemo,
  },
  "card-noshadow-demo": {
    title: "No Shadow",
    filePath: "src/examples/card-demo.tsx",
    codeSnippet: `import { Card } from "@/components/ui/card";

export function CardNoShadowDemo() {
  return (
    <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
      <Card noShadow className="p-5">
        <h4 className="text-sm font-bold">Default No Shadow</h4>
        <p className="mt-1 text-xs text-muted-foreground">
          Flat 2px border card ideal for nested layouts or dense grids.
        </p>
      </Card>
      <Card variant="muted" noShadow className="p-5">
        <h4 className="text-sm font-bold">Muted No Shadow</h4>
        <p className="mt-1 text-xs text-muted-foreground">
          Combine variant="muted" with noShadow.
        </p>
      </Card>
    </div>
  );
}`,
    Component: CardNoShadowDemo,
  },
  "card-image-demo": {
    title: "Card with Image",
    filePath: "src/examples/card-demo.tsx",
    codeSnippet: `<Card className="w-full max-w-sm overflow-hidden">
  <div className="relative border-b-2 border-border">
    <Image
      src="/images/card-cover.jpg"
      alt="Punch UI Neobrutalist Design Kit cover"
      width={640}
      height={320}
      className="h-56 w-full object-cover"
    />
    <Badge size="sm" className="absolute left-3 top-3">Featured</Badge>
  </div>
  <CardHeader>
    <CardTitle>Neobrutalist Design Kit</CardTitle>
    <CardDescription>Bold 2px borders, hard offset shadows, and accessible Radix primitives.</CardDescription>
  </CardHeader>
  <CardFooter className="justify-between">
    <span className="font-mono text-sm font-extrabold">Free &amp; OSS</span>
    <Button size="sm">Explore Kit</Button>
  </CardFooter>
</Card>`,
    Component: CardImageDemo,
  },
  "input-demo": {
    title: "Input Overview",
    filePath: "src/examples/input-demo.tsx",
    Component: InputDemo,
  },
  "input-basic-demo": {
    title: "Basic Input",
    filePath: "src/examples/input-demo.tsx",
    codeSnippet: `import { Input } from "@/components/ui/input";

export function InputBasicDemo() {
  return (
    <div className="w-full max-w-sm">
      <Input type="email" placeholder="Enter your work email..." />
    </div>
  );
}`,
    Component: InputBasicDemo,
  },
  "input-label-demo": {
    title: "With Label & Helper Text",
    filePath: "src/examples/input-demo.tsx",
    codeSnippet: `import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputWithLabelDemo() {
  return (
    <div className="w-full max-w-sm space-y-1.5">
      <Label htmlFor="full-name">
        Full Name <span className="text-destructive">*</span>
      </Label>
      <Input id="full-name" placeholder="e.g. Alex Morgan" />
      <p className="text-xs text-muted-foreground">
        This name will be displayed on your public workspace profile.
      </p>
    </div>
  );
}`,
    Component: InputWithLabelDemo,
  },
  "input-size-demo": {
    title: "Size",
    filePath: "src/examples/input-demo.tsx",
    codeSnippet: `import { Input } from "@/components/ui/input";

export function InputSizeDemo() {
  return (
    <div className="w-full max-w-sm space-y-3">
      <Input inputSize="sm" placeholder="Small input (h-8)" />
      <Input inputSize="default" placeholder="Default input (h-10)" />
      <Input inputSize="lg" placeholder="Large input (h-12)" />
    </div>
  );
}`,
    Component: InputSizeDemo,
  },
  "input-icon-demo": {
    title: "With Icon & Password Toggle",
    filePath: "src/examples/input-demo.tsx",
    codeSnippet: `"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Search } from "lucide-react";

export function InputWithIconDemo() {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="w-full max-w-sm space-y-3">
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          strokeWidth={2.5}
        />
        <Input placeholder="Search deployments..." className="pl-9" />
      </div>

      <div className="relative">
        <Input
          type={showPass ? "text" : "password"}
          defaultValue="PunchUI_Secret_2026!"
          className="pr-10"
        />
        <button
          type="button"
          onClick={() => setShowPass((prev) => !prev)}
          aria-label={showPass ? "Hide password" : "Show password"}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-sm p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          {showPass ? (
            <EyeOff className="h-4 w-4" strokeWidth={2.5} />
          ) : (
            <Eye className="h-4 w-4" strokeWidth={2.5} />
          )}
        </button>
      </div>
    </div>
  );
}`,
    Component: InputWithIconDemo,
  },
  "input-button-demo": {
    title: "Input with Button",
    filePath: "src/examples/input-demo.tsx",
    codeSnippet: `import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Send } from "lucide-react";

export function InputWithButtonDemo() {
  return (
    <div className="flex w-full max-w-md items-center gap-2.5">
      <div className="relative flex-1">
        <Mail
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          strokeWidth={2.5}
        />
        <Input
          type="email"
          placeholder="teammate@company.com"
          className="pl-9"
        />
      </div>
      <Button type="submit">
        <Send className="h-4 w-4" strokeWidth={2.5} />
        Invite
      </Button>
    </div>
  );
}`,
    Component: InputWithButtonDemo,
  },
  "input-addon-demo": {
    title: "Prefix & Suffix Addon",
    filePath: "src/examples/input-demo.tsx",
    codeSnippet: `import { Input } from "@/components/ui/input";

export function InputAddonDemo() {
  return (
    <div className="w-full max-w-md space-y-3">
      <div className="flex overflow-hidden rounded-md border-2 border-border bg-card shadow-brutal-sm transition-shadow focus-within:shadow-brutal">
        <span className="flex items-center border-r-2 border-border bg-muted px-3 font-mono text-xs font-bold text-muted-foreground">
          https://
        </span>
        <Input
          noShadow
          placeholder="punch-ui.vercel.app"
          className="rounded-none border-0"
        />
      </div>

      <div className="flex overflow-hidden rounded-md border-2 border-border bg-card shadow-brutal-sm transition-shadow focus-within:shadow-brutal">
        <span className="flex items-center border-r-2 border-border bg-secondary px-3 font-mono text-xs font-bold text-secondary-foreground">
          $
        </span>
        <Input
          noShadow
          type="number"
          defaultValue="149.00"
          className="rounded-none border-0 font-mono"
        />
        <span className="flex items-center border-l-2 border-border bg-muted px-3 font-mono text-xs font-bold text-muted-foreground">
          USD
        </span>
      </div>
    </div>
  );
}`,
    Component: InputAddonDemo,
  },
  "input-file-demo": {
    title: "File Input",
    filePath: "src/examples/input-demo.tsx",
    codeSnippet: `import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputFileDemo() {
  return (
    <div className="w-full max-w-sm space-y-1.5">
      <Label htmlFor="upload-schema">Upload Registry JSON</Label>
      <Input id="upload-schema" type="file" />
    </div>
  );
}`,
    Component: InputFileDemo,
  },
  "input-validation-demo": {
    title: "Validation State",
    filePath: "src/examples/input-demo.tsx",
    codeSnippet: `import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export function InputValidationDemo() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-1.5">
        <Label htmlFor="valid-slug">Workspace Slug</Label>
        <Input id="valid-slug" state="success" defaultValue="punch-ui-core" />
        <p className="flex items-center gap-1 text-xs font-bold text-success">
          <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2.5} />
          Slug is available!
        </p>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="invalid-email">Admin Email</Label>
        <Input
          id="invalid-email"
          state="error"
          defaultValue="admin@invalid-domain"
        />
        <p className="flex items-center gap-1 text-xs font-bold text-destructive">
          <AlertCircle className="h-3.5 w-3.5" strokeWidth={2.5} />
          Please enter a valid domain address.
        </p>
      </div>
    </div>
  );
}`,
    Component: InputValidationDemo,
  },
  "input-disabled-demo": {
    title: "Disabled & Read-Only",
    filePath: "src/examples/input-demo.tsx",
    codeSnippet: `import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy } from "lucide-react";

export function InputDisabledDemo() {
  return (
    <div className="w-full max-w-sm space-y-3">
      <div className="space-y-1.5">
        <Label htmlFor="disabled-input">Disabled Input</Label>
        <Input id="disabled-input" disabled defaultValue="Locked environment variable" />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="readonly-key">Read-Only API Key</Label>
        <div className="flex items-center gap-2">
          <Input
            id="readonly-key"
            readOnly
            defaultValue="pk_live_98a7bc65d4e3f210"
            className="bg-muted font-mono text-xs"
          />
          <Button size="icon" variant="secondary" aria-label="Copy API Key">
            <Copy className="h-4 w-4" strokeWidth={2.5} />
          </Button>
        </div>
      </div>
    </div>
  );
}`,
    Component: InputDisabledDemo,
  },
  "input-textarea-demo": {
    title: "Textarea",
    filePath: "src/examples/input-demo.tsx",
    codeSnippet: `"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function InputTextareaDemo() {
  const [notes, setNotes] = useState(
    "Added 6 real-time color presets and mechanical button press tokens."
  );

  return (
    <div className="w-full max-w-md space-y-1.5">
      <div className="flex items-center justify-between">
        <Label htmlFor="release-notes">Release Changelog</Label>
        <span className="font-mono text-xs text-muted-foreground">
          {notes.length} / 200
        </span>
      </div>
      <Textarea
        id="release-notes"
        maxLength={200}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Describe what changed in this version..."
      />
    </div>
  );
}`,
    Component: InputTextareaDemo,
  },
  "input-noshadow-demo": {
    title: "No Shadow",
    filePath: "src/examples/input-demo.tsx",
    codeSnippet: `import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function InputNoShadowDemo() {
  return (
    <div className="w-full max-w-sm space-y-3">
      <Input noShadow placeholder="Flat input without shadow..." />
      <Textarea noShadow placeholder="Flat textarea without shadow..." />
    </div>
  );
}`,
    Component: InputNoShadowDemo,
  },
  "avatar-demo": {
    title: "Avatar Overview",
    filePath: "src/examples/avatar-demo.tsx",
    Component: AvatarDemo,
  },
  "avatar-basic-demo": {
    title: "Basic & Image Fallback",
    filePath: "src/examples/avatar-demo.tsx",
    codeSnippet: `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarBasicDemo() {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex flex-wrap items-center gap-4">
        <Avatar>
          <AvatarImage
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=128&h=128&fit=crop"
            alt="Sarah Connor"
          />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="/broken-avatar.png" alt="Alex Morgan" />
          <AvatarFallback>AM</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>PU</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Avatar shape="square">
          <AvatarImage
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=128&h=128&fit=crop"
            alt="Sarah Connor"
          />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
        <Avatar shape="square">
          <AvatarImage src="/broken-avatar.png" alt="Alex Morgan" />
          <AvatarFallback>AM</AvatarFallback>
        </Avatar>
        <Avatar shape="square">
          <AvatarFallback>PU</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}`,
    Component: AvatarBasicDemo,
  },
  "avatar-size-demo": {
    title: "Size",
    filePath: "src/examples/avatar-demo.tsx",
    codeSnippet: `import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function AvatarSizeDemo() {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex flex-wrap items-center gap-4">
        <Avatar size="sm"><AvatarFallback>SM</AvatarFallback></Avatar>
        <Avatar size="default"><AvatarFallback>MD</AvatarFallback></Avatar>
        <Avatar size="lg"><AvatarFallback>LG</AvatarFallback></Avatar>
        <Avatar size="xl"><AvatarFallback>XL</AvatarFallback></Avatar>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Avatar shape="square" size="sm"><AvatarFallback>SM</AvatarFallback></Avatar>
        <Avatar shape="square" size="default"><AvatarFallback>MD</AvatarFallback></Avatar>
        <Avatar shape="square" size="lg"><AvatarFallback>LG</AvatarFallback></Avatar>
        <Avatar shape="square" size="xl"><AvatarFallback>XL</AvatarFallback></Avatar>
      </div>
    </div>
  );
}`,
    Component: AvatarSizeDemo,
  },
  "avatar-shape-demo": {
    title: "Shape (Circle vs Square)",
    filePath: "src/examples/avatar-demo.tsx",
    codeSnippet: `import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function AvatarShapeDemo() {
  return (
    <div className="flex flex-wrap items-center gap-5">
      <Avatar shape="circle">
        <AvatarFallback>AM</AvatarFallback>
      </Avatar>

      <Avatar shape="square">
        <AvatarFallback className="bg-primary text-primary-foreground">
          PU
        </AvatarFallback>
      </Avatar>
    </div>
  );
}`,
    Component: AvatarShapeDemo,
  },
  "avatar-color-demo": {
    title: "Fallback Color",
    filePath: "src/examples/avatar-demo.tsx",
    codeSnippet: `import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function AvatarColorDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Avatar><AvatarFallback className="bg-primary text-primary-foreground">PR</AvatarFallback></Avatar>
      <Avatar><AvatarFallback className="bg-secondary text-secondary-foreground">SC</AvatarFallback></Avatar>
      <Avatar><AvatarFallback className="bg-card text-card-foreground">CD</AvatarFallback></Avatar>
      <Avatar><AvatarFallback className="bg-muted text-foreground">MT</AvatarFallback></Avatar>
    </div>
  );
}`,
    Component: AvatarColorDemo,
  },
  "avatar-badge-demo": {
    title: "With Status Badge",
    filePath: "src/examples/avatar-demo.tsx",
    codeSnippet: `import { Avatar, AvatarBadge, AvatarFallback } from "@/components/ui/avatar";

export function AvatarBadgeDemo() {
  return (
    <div className="flex flex-wrap items-center gap-5">
      <Avatar>
        <AvatarFallback>ON</AvatarFallback>
        <AvatarBadge status="online" />
      </Avatar>
      <Avatar>
        <AvatarFallback>AW</AvatarFallback>
        <AvatarBadge status="away" />
      </Avatar>
      <Avatar>
        <AvatarFallback>BS</AvatarFallback>
        <AvatarBadge status="busy" />
      </Avatar>
      <Avatar>
        <AvatarFallback>OF</AvatarFallback>
        <AvatarBadge status="offline" />
      </Avatar>
    </div>
  );
}`,
    Component: AvatarBadgeDemo,
  },
  "avatar-group-demo": {
    title: "Avatar Group",
    filePath: "src/examples/avatar-demo.tsx",
    codeSnippet: `import { Avatar, AvatarFallback, AvatarGroup } from "@/components/ui/avatar";

export function AvatarGroupDemo() {
  return (
    <div className="flex flex-col items-center gap-5">
      <AvatarGroup>
        <Avatar noShadow><AvatarFallback className="bg-primary text-primary-foreground">AM</AvatarFallback></Avatar>
        <Avatar noShadow><AvatarFallback className="bg-secondary text-secondary-foreground">JD</AvatarFallback></Avatar>
        <Avatar noShadow><AvatarFallback className="bg-card text-card-foreground">KL</AvatarFallback></Avatar>
        <Avatar noShadow><AvatarFallback className="bg-muted text-foreground">+4</AvatarFallback></Avatar>
      </AvatarGroup>

      <AvatarGroup>
        <Avatar shape="square" noShadow><AvatarFallback className="bg-primary text-primary-foreground">AM</AvatarFallback></Avatar>
        <Avatar shape="square" noShadow><AvatarFallback className="bg-secondary text-secondary-foreground">JD</AvatarFallback></Avatar>
        <Avatar shape="square" noShadow><AvatarFallback className="bg-card text-card-foreground">KL</AvatarFallback></Avatar>
        <Avatar shape="square" noShadow><AvatarFallback className="bg-muted text-foreground">+4</AvatarFallback></Avatar>
      </AvatarGroup>
    </div>
  );
}`,
    Component: AvatarGroupDemo,
  },
  "avatar-profile-demo": {
    title: "User Profile Row",
    filePath: "src/examples/avatar-demo.tsx",
    codeSnippet: `import { Avatar, AvatarBadge, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function AvatarProfileDemo() {
  return (
    <div className="flex w-full max-w-xs items-center justify-between gap-3 rounded-lg border-2 border-border bg-card p-3.5 shadow-brutal-sm">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback className="bg-primary text-primary-foreground">AM</AvatarFallback>
          <AvatarBadge status="online" badgeSize="sm" />
        </Avatar>
        <div>
          <p className="text-sm font-bold leading-tight">Alex Morgan</p>
          <p className="font-mono text-xs text-muted-foreground">alex@punch-ui.dev</p>
        </div>
      </div>
      <Badge variant="secondary" size="sm" noShadow>Admin</Badge>
    </div>
  );
}`,
    Component: AvatarProfileDemo,
  },
  "avatar-noshadow-demo": {
    title: "No Shadow",
    filePath: "src/examples/avatar-demo.tsx",
    codeSnippet: `import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function AvatarNoShadowDemo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Avatar noShadow>
        <AvatarFallback>AM</AvatarFallback>
      </Avatar>
      <Avatar shape="square" noShadow>
        <AvatarFallback className="bg-primary text-primary-foreground">PU</AvatarFallback>
      </Avatar>
    </div>
  );
}`,
    Component: AvatarNoShadowDemo,
  },
  "separator-demo": {
    title: "Separator Overview",
    filePath: "src/examples/separator-demo.tsx",
    Component: SeparatorDemo,
  },
  "separator-basic-demo": {
    title: "Horizontal & Vertical",
    filePath: "src/examples/separator-demo.tsx",
    codeSnippet: `import { Separator } from "@/components/ui/separator";

export function SeparatorBasicDemo() {
  return (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-1">
        <h4 className="text-sm font-bold">Punch UI Registry</h4>
        <p className="text-xs text-muted-foreground">
          Neobrutalist shadcn/ui component distribution.
        </p>
      </div>
      <Separator />
      <div className="flex h-5 items-center space-x-4 text-xs font-bold">
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>Themes</span>
        <Separator orientation="vertical" />
        <span>Registry</span>
      </div>
    </div>
  );
}`,
    Component: SeparatorBasicDemo,
  },
  "separator-variant-demo": {
    title: "Variant",
    filePath: "src/examples/separator-demo.tsx",
    codeSnippet: `import { Separator } from "@/components/ui/separator";

export function SeparatorVariantDemo() {
  return (
    <div className="w-full max-w-md space-y-5">
      <Separator variant="solid" />
      <Separator variant="dashed" />
      <Separator variant="dotted" />
      <Separator variant="muted" />
    </div>
  );
}`,
    Component: SeparatorVariantDemo,
  },
  "separator-thickness-demo": {
    title: "Thickness",
    filePath: "src/examples/separator-demo.tsx",
    codeSnippet: `import { Separator } from "@/components/ui/separator";

export function SeparatorThicknessDemo() {
  return (
    <div className="w-full max-w-md space-y-5">
      <Separator thickness="thin" />
      <Separator thickness="default" />
      <Separator thickness="thick" />
    </div>
  );
}`,
    Component: SeparatorThicknessDemo,
  },
  "separator-label-demo": {
    title: "With Label",
    filePath: "src/examples/separator-demo.tsx",
    codeSnippet: `import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function SeparatorLabelDemo() {
  return (
    <div className="w-full max-w-md space-y-6">
      <Separator label="OR" />
      <Separator variant="dashed" label="Recent Activity" />
      <Separator>
        <Badge variant="secondary" size="sm" noShadow>
          Today
        </Badge>
      </Separator>
    </div>
  );
}`,
    Component: SeparatorLabelDemo,
  },
  "separator-list-demo": {
    title: "Inside List / Menu",
    filePath: "src/examples/separator-demo.tsx",
    codeSnippet: `import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function SeparatorListDemo() {
  return (
    <Card className="w-full max-w-sm p-4">
      <div className="flex items-center justify-between py-2 text-xs">
        <span className="font-bold">API Gateway</span>
        <Badge variant="success" size="sm" noShadow>99.99%</Badge>
      </div>
      <Separator variant="muted" thickness="thin" />
      <div className="flex items-center justify-between py-2 text-xs">
        <span className="font-bold">Worker Queue</span>
        <Badge variant="info" size="sm" noShadow>Syncing</Badge>
      </div>
      <Separator variant="muted" thickness="thin" />
      <div className="flex items-center justify-between py-2 text-xs">
        <span className="font-bold">Webhook Relay</span>
        <Badge variant="warning" size="sm" noShadow>Degraded</Badge>
      </div>
    </Card>
  );
}`,
    Component: SeparatorListDemo,
  },
  "scroll-area-demo": {
    title: "ScrollArea Overview",
    filePath: "src/examples/scroll-area-demo.tsx",
    Component: ScrollAreaDemo,
  },
  "scroll-area-vertical-demo": {
    title: "Vertical Scroll",
    filePath: "src/examples/scroll-area-demo.tsx",
    codeSnippet: `import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

export function ScrollAreaVerticalDemo() {
  return (
    <ScrollArea className="h-60 w-full max-w-sm p-4">
      <h4 className="mb-3 text-xs font-bold uppercase tracking-wider">
        Deployment History
      </h4>
      <div className="space-y-3">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="flex items-center justify-between text-xs">
            <span className="font-mono font-bold">REL-10{i + 1}</span>
            <Badge variant="success" size="sm" noShadow>Active</Badge>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}`,
    Component: ScrollAreaVerticalDemo,
  },
  "scroll-area-horizontal-demo": {
    title: "Horizontal Scroll",
    filePath: "src/examples/scroll-area-demo.tsx",
    codeSnippet: `import { ScrollArea } from "@/components/ui/scroll-area";

export function ScrollAreaHorizontalDemo() {
  return (
    <ScrollArea orientation="horizontal" className="w-full max-w-lg p-4">
      <div className="flex w-max items-center gap-3 pb-1">
        {["Lint", "Test", "Build", "Docker", "Canary", "Production"].map((stage) => (
          <div
            key={stage}
            className="shrink-0 rounded-md border-2 border-border bg-secondary px-3.5 py-3 font-mono text-xs font-bold shadow-brutal-sm"
          >
            {stage}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}`,
    Component: ScrollAreaHorizontalDemo,
  },
  "scroll-area-both-demo": {
    title: "Both Directions",
    filePath: "src/examples/scroll-area-demo.tsx",
    codeSnippet: `import { ScrollArea } from "@/components/ui/scroll-area";

export function ScrollAreaBothDemo() {
  return (
    <ScrollArea orientation="both" className="h-56 w-full max-w-md p-4">
      <div className="w-[560px] space-y-2.5">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between gap-6 rounded-sm border-2 border-border bg-muted px-3 py-2 font-mono text-xs"
          >
            <span className="font-bold">REL-10{i + 1}</span>
            <span>service.punch-ui.internal</span>
            <span>region: ap-southeast-1</span>
            <span>24ms</span>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}`,
    Component: ScrollAreaBothDemo,
  },
  "scroll-area-size-demo": {
    title: "Scrollbar Size",
    filePath: "src/examples/scroll-area-demo.tsx",
    codeSnippet: `import { ScrollArea } from "@/components/ui/scroll-area";

export function ScrollAreaSizeDemo() {
  return (
    <ScrollArea scrollbarSize="sm" className="h-52 w-full max-w-md p-4">
      {/* Options: "sm" (8px), "md" (10px), "lg" (14px), or custom pixel number like 6 */}
    </ScrollArea>
  );
}`,
    Component: ScrollAreaSizeDemo,
  },
  "scroll-area-ghost-demo": {
    title: "Ghost & No Shadow",
    filePath: "src/examples/scroll-area-demo.tsx",
    codeSnippet: `import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ScrollAreaGhostDemo() {
  return (
    <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
      <Card>
        <CardHeader variant="secondary" className="py-3">
          <CardTitle className="text-sm">Ghost Inside Card</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea variant="ghost" className="h-44 p-4">
            {/* Scrollable items */}
          </ScrollArea>
        </CardContent>
      </Card>

      <ScrollArea noShadow className="h-[222px] p-4">
        {/* Flat ScrollArea without shadow */}
      </ScrollArea>
    </div>
  );
}`,
    Component: ScrollAreaGhostDemo,
  },
  "scroll-area-variant-demo": {
    title: "Scrollbar Variant",
    filePath: "src/examples/scroll-area-demo.tsx",
    codeSnippet: `<ScrollArea scrollbarVariant="default" className="h-44">...</ScrollArea>
<ScrollArea scrollbarVariant="auto" className="h-44">...</ScrollArea>
<ScrollArea scrollbarVariant="bordered" className="h-44">...</ScrollArea>`,
    Component: ScrollAreaScrollbarVariantDemo,
  },
  "pagination-demo": {
    title: "Pagination Overview",
    filePath: "src/examples/pagination-demo.tsx",
    Component: PaginationDemo,
  },
  "pagination-basic-demo": {
    title: "Basic Pagination",
    filePath: "src/examples/pagination-demo.tsx",
    codeSnippet: `"use client";

import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationBasicDemo() {
  const [page, setPage] = useState(2);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#prev"
            disabled={page === 1}
            onClick={(e) => {
              e.preventDefault();
              setPage((p) => Math.max(1, p - 1));
            }}
          />
        </PaginationItem>
        {[1, 2, 3, 4].map((num) => (
          <PaginationItem key={num}>
            <PaginationLink
              href={\`#page-\${num}\`}
              isActive={page === num}
              onClick={(e) => {
                e.preventDefault();
                setPage(num);
              }}
            >
              {num}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href="#next"
            disabled={page === 4}
            onClick={(e) => {
              e.preventDefault();
              setPage((p) => Math.min(4, p + 1));
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}`,
    Component: PaginationBasicDemo,
  },
  "pagination-ellipsis-demo": {
    title: "With Ellipsis",
    filePath: "src/examples/pagination-demo.tsx",
    codeSnippet: `import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationEllipsisDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem><PaginationPrevious href="#prev" /></PaginationItem>
        <PaginationItem><PaginationLink href="#p1">1</PaginationLink></PaginationItem>
        <PaginationItem><PaginationEllipsis /></PaginationItem>
        <PaginationItem><PaginationLink href="#p4">4</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#p5" isActive>5</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#p6">6</PaginationLink></PaginationItem>
        <PaginationItem><PaginationEllipsis /></PaginationItem>
        <PaginationItem><PaginationLink href="#p12">12</PaginationLink></PaginationItem>
        <PaginationItem><PaginationNext href="#next" /></PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}`,
    Component: PaginationEllipsisDemo,
  },
  "pagination-size-demo": {
    title: "Size",
    filePath: "src/examples/pagination-demo.tsx",
    codeSnippet: `import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationSizeDemo() {
  return (
    <div className="flex flex-col items-center gap-5">
      <Pagination>
        <PaginationContent>
          <PaginationItem><PaginationPrevious href="#prev" size="sm" /></PaginationItem>
          <PaginationItem><PaginationLink href="#1" size="sm" isActive className="w-8 px-0">1</PaginationLink></PaginationItem>
          <PaginationItem><PaginationLink href="#2" size="sm" className="w-8 px-0">2</PaginationLink></PaginationItem>
          <PaginationItem><PaginationNext href="#next" size="sm" /></PaginationItem>
        </PaginationContent>
      </Pagination>

      <Pagination>
        <PaginationContent>
          <PaginationItem><PaginationPrevious href="#prev" size="default" /></PaginationItem>
          <PaginationItem><PaginationLink href="#1" size="icon" isActive>1</PaginationLink></PaginationItem>
          <PaginationItem><PaginationLink href="#2" size="icon">2</PaginationLink></PaginationItem>
          <PaginationItem><PaginationNext href="#next" size="default" /></PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}`,
    Component: PaginationSizeDemo,
  },
  "pagination-compact-demo": {
    title: "Compact & First/Last Controls",
    filePath: "src/examples/pagination-demo.tsx",
    codeSnippet: `"use client";

import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationCompactDemo() {
  const [page, setPage] = useState(2);
  const totalPages = 10;

  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-xs font-bold text-muted-foreground">
        Page {page} of {totalPages}
      </span>
      <Pagination className="mx-0 w-auto">
        <PaginationContent>
          <PaginationItem><PaginationFirst href="#first" disabled={page === 1} onClick={(e) => { e.preventDefault(); setPage(1); }} /></PaginationItem>
          <PaginationItem><PaginationPrevious href="#prev" iconOnly disabled={page === 1} onClick={(e) => { e.preventDefault(); setPage((p) => Math.max(1, p - 1)); }} /></PaginationItem>
          <PaginationItem><PaginationNext href="#next" iconOnly disabled={page === totalPages} onClick={(e) => { e.preventDefault(); setPage((p) => Math.min(totalPages, p + 1)); }} /></PaginationItem>
          <PaginationItem><PaginationLast href="#last" disabled={page === totalPages} onClick={(e) => { e.preventDefault(); setPage(totalPages); }} /></PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}`,
    Component: PaginationCompactDemo,
  },
  "pagination-noshadow-demo": {
    title: "No Shadow",
    filePath: "src/examples/pagination-demo.tsx",
    codeSnippet: `import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationNoShadowDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem><PaginationPrevious href="#prev" noShadow /></PaginationItem>
        <PaginationItem><PaginationLink href="#1" noShadow>1</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#2" noShadow isActive>2</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#3" noShadow>3</PaginationLink></PaginationItem>
        <PaginationItem><PaginationNext href="#next" noShadow /></PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}`,
    Component: PaginationNoShadowDemo,
  },
  "pagination-rows-demo": {
    title: "Rows Per Page",
    filePath: "src/examples/pagination-demo.tsx",
    codeSnippet: `"use client";

import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationRowsPerPageDemo() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const totalItems = 95;
  const totalPages = Math.ceil(totalItems / pageSize);
  const start = (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, totalItems);

  return (
    <div className="flex w-full max-w-2xl flex-wrap items-center justify-between gap-4 rounded-lg border-2 border-border bg-card p-4 shadow-brutal-sm">
      <div className="flex items-center gap-2.5">
        <label htmlFor="rows-per-page" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Rows per page
        </label>
        <Select
          value={String(pageSize)}
          onValueChange={(value) => {
            setPageSize(Number(value));
            setPage(1);
          }}
        >
          <SelectTrigger id="rows-per-page" selectSize="sm" className="w-16 px-2 font-mono">
            <SelectValue />
          </SelectTrigger>
          <SelectContent align="start">
            {[10, 25, 50].map((size) => (
              <SelectItem key={size} value={String(size)} className="py-1.5 pl-7 pr-2 font-mono text-xs">
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <span className="font-mono text-xs font-bold text-muted-foreground">
        {start}–{end} of {totalItems}
      </span>

      <Pagination className="mx-0 w-auto">
        <PaginationContent>
          <PaginationItem><PaginationFirst href="#first" disabled={page === 1} onClick={(e) => { e.preventDefault(); setPage(1); }} /></PaginationItem>
          <PaginationItem><PaginationPrevious href="#prev" iconOnly disabled={page === 1} onClick={(e) => { e.preventDefault(); setPage((p) => Math.max(1, p - 1)); }} /></PaginationItem>
          <PaginationItem><PaginationNext href="#next" iconOnly disabled={page === totalPages} onClick={(e) => { e.preventDefault(); setPage((p) => Math.min(totalPages, p + 1)); }} /></PaginationItem>
          <PaginationItem><PaginationLast href="#last" disabled={page === totalPages} onClick={(e) => { e.preventDefault(); setPage(totalPages); }} /></PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}`,
    Component: PaginationRowsPerPageDemo,
  },
  "table-demo": {
    title: "Table Overview",
    filePath: "src/examples/table-demo.tsx",
    Component: TableDemo,
  },
  "table-basic-demo": {
    title: "Basic Table",
    filePath: "src/examples/table-demo.tsx",
    codeSnippet: `import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const INVOICES = [
  { id: "INV-001", method: "Credit Card", status: "Paid", amount: "$250.00" },
  { id: "INV-002", method: "Bank Transfer", status: "Pending", amount: "$150.00" },
  { id: "INV-003", method: "PayPal", status: "Failed", amount: "$350.00" },
  { id: "INV-004", method: "Credit Card", status: "Paid", amount: "$450.00" },
];

export function TableBasicDemo() {
  return (
    <Table>
      <TableCaption>Recent workspace billing invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[110px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {INVOICES.map((inv) => (
          <TableRow key={inv.id}>
            <TableCell className="font-mono font-bold">{inv.id}</TableCell>
            <TableCell>
              <Badge size="sm" noShadow variant={inv.status === "Paid" ? "success" : inv.status === "Pending" ? "warning" : "danger"}>
                {inv.status}
              </Badge>
            </TableCell>
            <TableCell>{inv.method}</TableCell>
            <TableCell className="text-right font-mono font-bold">{inv.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right font-mono">$1,200.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}`,
    Component: TableBasicDemo,
  },
  "table-header-demo": {
    title: "Header Variants",
    filePath: "src/examples/table-demo.tsx",
    codeSnippet: `import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function TableHeaderVariantsDemo() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {(["secondary", "primary", "muted", "default"] as const).map((variant) => (
        <Table key={variant} headerVariant={variant}>
          <TableHeader>
            <TableRow>
              <TableHead>headerVariant</TableHead>
              <TableHead className="text-right">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-mono font-bold">{variant}</TableCell>
              <TableCell className="text-right font-mono">100%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ))}
    </div>
  );
}`,
    Component: TableHeaderVariantsDemo,
  },
  "table-grid-demo": {
    title: "Grid & Striped",
    filePath: "src/examples/table-demo.tsx",
    codeSnippet: `import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function TableGridStripedDemo() {
  return (
    <Table grid striped>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-mono font-bold">INV-001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right font-mono font-bold">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}`,
    Component: TableGridStripedDemo,
  },
  "table-hoverable-demo": {
    title: "Hoverable",
    filePath: "src/examples/table-demo.tsx",
    codeSnippet: `import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function TableHoverableDemo() {
  return (
    <Table hoverable>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-mono font-bold">INV-001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right font-mono font-bold">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}`,
    Component: TableHoverableDemo,
  },
  "table-compact-demo": {
    title: "Compact & No Shadow",
    filePath: "src/examples/table-demo.tsx",
    codeSnippet: `import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function TableCompactDemo() {
  return (
    <Card className="w-full max-w-xl">
      <CardHeader variant="muted" className="py-3">
        <CardTitle className="text-sm">Compact Billing Summary</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table compact noShadow headerVariant="default" containerClassName="rounded-none border-0">
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-mono font-bold">INV-001</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right font-mono font-bold">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}`,
    Component: TableCompactDemo,
  },
  "table-actions-demo": {
    title: "With Avatar & Actions",
    filePath: "src/examples/table-demo.tsx",
    codeSnippet: `import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";

export function TableActionsDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Member</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-3">
              <Avatar size="sm" noShadow><AvatarFallback>AM</AvatarFallback></Avatar>
              <div>
                <p className="font-bold leading-tight">Alex Morgan</p>
                <p className="font-mono text-[11px] text-muted-foreground">alex@punch-ui.dev</p>
              </div>
            </div>
          </TableCell>
          <TableCell className="font-mono text-xs font-bold">Owner</TableCell>
          <TableCell><Badge size="sm" noShadow variant="success">Active</Badge></TableCell>
          <TableCell className="text-right">
            <Button size="icon" variant="ghost" className="h-8 w-8" aria-label="Actions">
              <MoreHorizontal className="h-4 w-4" strokeWidth={2.5} />
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}`,
    Component: TableActionsDemo,
  },
  "data-table-demo": {
    title: "Data Table",
    filePath: "src/examples/data-table-demo.tsx",
    codeSnippet: `import type { ColumnDef } from "@tanstack/react-table";
import { DataTable, DataTableColumnHeader } from "@/components/ui/data-table";

const columns: ColumnDef<PaymentRecord>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Invoice" />,
  },
  {
    accessorKey: "customer",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Customer" />,
  },
  {
    accessorKey: "amount",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Amount" />,
  },
];

export function DataTableDemo() {
  return (
    <DataTable
      columns={columns}
      data={PAYMENTS}
      searchKey="customer"
      searchPlaceholder="Filter invoices by customer..."
      paginated
      pageSize={4}
      pageSizeOptions={[4, 6, 12]}
      hoverable
    />
  );
}`,
    Component: DataTableDemo,
  },
  "data-table-basic-demo": {
    title: "Basic Data Table",
    filePath: "src/examples/data-table-demo.tsx",
    codeSnippet: `export function DataTableBasicDemo() {
  return <DataTable columns={BASIC_COLUMNS} data={PAYMENTS.slice(0, 4)} />;
}`,
    Component: DataTableBasicDemo,
  },
  "data-table-sorting-demo": {
    title: "Search & Sorting",
    filePath: "src/examples/data-table-demo.tsx",
    codeSnippet: `export function DataTableSortingSearchDemo() {
  return (
    <DataTable
      columns={SORTABLE_COLUMNS}
      data={PAYMENTS.slice(0, 5)}
      searchKey="customer"
      searchPlaceholder="Search customer..."
      hoverable
    />
  );
}`,
    Component: DataTableSortingSearchDemo,
  },
  "data-table-pagination-demo": {
    title: "With Pagination",
    filePath: "src/examples/data-table-demo.tsx",
    codeSnippet: `export function DataTablePaginationDemo() {
  return (
    <DataTable
      columns={SORTABLE_COLUMNS}
      data={PAYMENTS}
      searchKey="customer"
      searchPlaceholder="Filter invoices by customer..."
      paginated
      pageSize={4}
      pageSizeOptions={[4, 6, 12]}
      hoverable
    />
  );
}`,
    Component: DataTablePaginationDemo,
  },
  "data-table-selection-demo": {
    title: "Row Selection & Actions",
    filePath: "src/examples/data-table-demo.tsx",
    codeSnippet: `export function DataTableSelectionDemo() {
  return (
    <DataTable
      columns={SELECTION_COLUMNS}
      data={PAYMENTS.slice(0, 8)}
      enableRowSelection
      paginated
      pageSize={4}
      pageSizeOptions={[4, 8]}
      hoverable
    />
  );
}`,
    Component: DataTableSelectionDemo,
  },
  "data-table-columns-demo": {
    title: "Column Visibility & Grid",
    filePath: "src/examples/data-table-demo.tsx",
    codeSnippet: `export function DataTableColumnsDemo() {
  return (
    <DataTable
      columns={SORTABLE_COLUMNS}
      data={PAYMENTS.slice(0, 6)}
      searchKey="customer"
      searchPlaceholder="Search customer..."
      enableColumnVisibility
      grid
      striped
      hoverable
    />
  );
}`,
    Component: DataTableColumnsDemo,
  },
  "data-table-compact-demo": {
    title: "Compact & No Shadow",
    filePath: "src/examples/data-table-demo.tsx",
    codeSnippet: `export function DataTableCompactDemo() {
  return (
    <DataTable
      columns={BASIC_COLUMNS}
      data={PAYMENTS.slice(0, 8)}
      paginated
      pageSize={4}
      pageSizeOptions={[4, 8]}
      headerVariant="primary"
      compact
      noShadow
      striped
    />
  );
}`,
    Component: DataTableCompactDemo,
  },
  "sidebar-demo": {
    title: "Sidebar",
    filePath: "src/examples/sidebar-demo.tsx",
    codeSnippet: `import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export function SidebarDemo() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>Punch Studio</SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive>Overview</SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>Alex Morgan</SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <SidebarTrigger />
      </SidebarInset>
    </SidebarProvider>
  );
}`,
    Component: SidebarDemo,
  },
  "sidebar-basic-demo": {
    title: "Basic Sidebar",
    filePath: "src/examples/sidebar-demo.tsx",
    codeSnippet: `<SidebarProvider>
  <Sidebar>
    <SidebarHeader>...</SidebarHeader>
    <SidebarContent>...</SidebarContent>
    <SidebarFooter>...</SidebarFooter>
  </Sidebar>
  <SidebarInset>
    <header>
      <SidebarTrigger />
    </header>
  </SidebarInset>
</SidebarProvider>`,
    Component: SidebarBasicDemo,
  },
  "sidebar-collapsible-demo": {
    title: "Collapsible Icon Mode",
    filePath: "src/examples/sidebar-demo.tsx",
    codeSnippet: `<SidebarProvider defaultOpen={false}>
  <Sidebar collapsible="icon">
    <SidebarContent>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton tooltip="Dashboard" isActive>
            <Home strokeWidth={2.5} />
            <span>Dashboard</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarContent>
  </Sidebar>
  <SidebarInset>
    <SidebarTrigger />
  </SidebarInset>
</SidebarProvider>`,
    Component: SidebarCollapsibleDemo,
  },
  "sidebar-submenu-demo": {
    title: "Submenu & Badges",
    filePath: "src/examples/sidebar-demo.tsx",
    codeSnippet: `<Sidebar collapsible="icon">
  <SidebarContent>
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          isActive={activeMenu === "components"}
          onClick={() => setComponentsOpen((prev) => !prev)}
        >
          <Layers strokeWidth={2.5} />
          <span>Components</span>
          <SidebarMenuBadge>NEW</SidebarMenuBadge>
        </SidebarMenuButton>
        {componentsOpen && (
          <SidebarMenuSub>
            <SidebarMenuSubItem>
              <SidebarMenuSubButton
                isActive={activeSub === "buttons"}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSub("buttons");
                }}
              >
                Button & Badge
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          </SidebarMenuSub>
        )}
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarContent>
  <SidebarFooter>...</SidebarFooter>
</Sidebar>`,
    Component: SidebarSubmenuDemo,
  },
  "sidebar-floating-demo": {
    title: "Floating Variant",
    filePath: "src/examples/sidebar-demo.tsx",
    codeSnippet: `<SidebarProvider>
  <Sidebar variant="floating">
    <SidebarHeader>Floating Panel</SidebarHeader>
    <SidebarContent>...</SidebarContent>
  </Sidebar>
  <SidebarInset>...</SidebarInset>
</SidebarProvider>`,
    Component: SidebarFloatingDemo,
  },
  "sidebar-right-demo": {
    title: "Right Side Panel",
    filePath: "src/examples/sidebar-demo.tsx",
    codeSnippet: `<SidebarProvider>
  <Sidebar side="right">
    <SidebarHeader>Inspector Panel</SidebarHeader>
    <SidebarContent>...</SidebarContent>
  </Sidebar>
  <SidebarInset>
    <SidebarTrigger />
  </SidebarInset>
</SidebarProvider>`,
    Component: SidebarRightDemo,
  },
  "select-demo": {
    title: "Select",
    filePath: "src/examples/select-demo.tsx",
    codeSnippet: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo() {
  return (
    <Select defaultValue="tangerine">
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Choose a preset..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="tangerine">Tangerine</SelectItem>
        <SelectItem value="soft-blue">Soft Blue</SelectItem>
        <SelectItem value="cyber-yellow">Cyber Yellow</SelectItem>
      </SelectContent>
    </Select>
  );
}`,
    Component: SelectDemo,
  },
  "select-basic-demo": {
    title: "Basic Select",
    filePath: "src/examples/select-demo.tsx",
    codeSnippet: `<Select defaultValue="tangerine">
  <SelectTrigger>
    <SelectValue placeholder="Choose a preset..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="tangerine">Tangerine</SelectItem>
    <SelectItem value="soft-blue">Soft Blue</SelectItem>
    <SelectItem value="cyber-yellow">Cyber Yellow</SelectItem>
  </SelectContent>
</Select>`,
    Component: SelectBasicDemo,
  },
  "select-size-demo": {
    title: "Size",
    filePath: "src/examples/select-demo.tsx",
    codeSnippet: `<SelectTrigger selectSize="sm">...</SelectTrigger>
<SelectTrigger selectSize="default">...</SelectTrigger>
<SelectTrigger selectSize="lg">...</SelectTrigger>`,
    Component: SelectSizeDemo,
  },
  "select-grouped-demo": {
    title: "Grouped & Scrollable",
    filePath: "src/examples/select-demo.tsx",
    codeSnippet: `<SelectContent>
  <SelectGroup>
    <SelectLabel>Asia</SelectLabel>
    <SelectItem value="wib">Western Indonesia Time (WIB)</SelectItem>
    <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
  </SelectGroup>
  <SelectSeparator />
  <SelectGroup>
    <SelectLabel>Europe</SelectLabel>
    <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
  </SelectGroup>
</SelectContent>`,
    Component: SelectGroupedDemo,
  },
  "select-states-demo": {
    title: "Validation & Disabled",
    filePath: "src/examples/select-demo.tsx",
    codeSnippet: `<SelectTrigger state="success">...</SelectTrigger>
<SelectTrigger state="error">...</SelectTrigger>
<Select defaultValue="owner" disabled>...</Select>`,
    Component: SelectStatesDemo,
  },
  "select-form-demo": {
    title: "No Shadow & Form Card",
    filePath: "src/examples/select-demo.tsx",
    codeSnippet: `<Card>
  <CardContent>
    <Label htmlFor="invite-role">Workspace Role</Label>
    <Select value={role} onValueChange={setRole}>
      <SelectTrigger id="invite-role" noShadow>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>...</SelectContent>
    </Select>
  </CardContent>
</Card>`,
    Component: SelectFormCardDemo,
  },
  "select-align-demo": {
    title: "Align Items",
    filePath: "src/examples/select-demo.tsx",
    codeSnippet: `<Select defaultValue="banana">
  <SelectTrigger>
    <SelectValue />
  </SelectTrigger>
  <SelectContent position="item-aligned">
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana (Aligned)</SelectItem>
  </SelectContent>
</Select>

<Select defaultValue="md">
  <SelectTrigger>
    <SelectValue />
  </SelectTrigger>
  <SelectContent position="popper" align="end" className="w-52 min-w-0">
    <SelectItem value="sm">Small (320px)</SelectItem>
    <SelectItem value="md">Medium (640px)</SelectItem>
  </SelectContent>
</Select>`,
    Component: SelectAlignDemo,
  },
  "select-clearable-demo": {
    title: "Clearable",
    filePath: "src/examples/select-demo.tsx",
    codeSnippet: `<Select value={preset} onValueChange={setPreset}>
  <SelectTrigger clearable={Boolean(preset)} onClear={() => setPreset("")}>
    <SelectValue placeholder="Choose a preset..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="tangerine">Tangerine</SelectItem>
    <SelectItem value="soft-blue">Soft Blue</SelectItem>
    <SelectItem value="cyber-yellow">Cyber Yellow</SelectItem>
  </SelectContent>
</Select>`,
    Component: SelectClearableDemo,
  },
  "checkbox-demo": {
    title: "Checkbox",
    filePath: "src/examples/checkbox-demo.tsx",
    codeSnippet: `import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function CheckboxDemo() {
  return (
    <div className="flex items-center gap-2.5">
      <Checkbox id="terms" defaultChecked />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  );
}`,
    Component: CheckboxDemo,
  },
  "checkbox-basic-demo": {
    title: "Basic Checkbox",
    filePath: "src/examples/checkbox-demo.tsx",
    codeSnippet: `<div className="flex items-center gap-2.5">
  <Checkbox id="terms-basic" defaultChecked />
  <Label htmlFor="terms-basic">Accept terms and conditions</Label>
</div>`,
    Component: CheckboxBasicDemo,
  },
  "checkbox-size-demo": {
    title: "Size",
    filePath: "src/examples/checkbox-demo.tsx",
    codeSnippet: `<Checkbox checkboxSize="sm" defaultChecked />
<Checkbox checkboxSize="default" defaultChecked />
<Checkbox checkboxSize="lg" defaultChecked />`,
    Component: CheckboxSizeDemo,
  },
  "checkbox-variant-demo": {
    title: "Variants",
    filePath: "src/examples/checkbox-demo.tsx",
    codeSnippet: `<Checkbox variant="primary" defaultChecked />
<Checkbox variant="secondary" defaultChecked />
<Checkbox variant="success" defaultChecked />
<Checkbox variant="info" defaultChecked />
<Checkbox variant="warning" defaultChecked />
<Checkbox variant="destructive" defaultChecked />`,
    Component: CheckboxVariantDemo,
  },
  "checkbox-indeterminate-demo": {
    title: "Indeterminate (Select All)",
    filePath: "src/examples/checkbox-demo.tsx",
    codeSnippet: `<Checkbox
  id="perm-all"
  checked={allChecked ? true : someChecked ? "indeterminate" : false}
  onCheckedChange={toggleAll}
/>`,
    Component: CheckboxIndeterminateDemo,
  },
  "checkbox-card-demo": {
    title: "With Description & Card",
    filePath: "src/examples/checkbox-demo.tsx",
    codeSnippet: `<label className="flex items-start gap-3 rounded-md border-2 border-border bg-card p-3.5 shadow-brutal-sm">
  <Checkbox id="opt-emails" noShadow defaultChecked />
  <div>
    <p className="text-sm font-bold">Product Updates</p>
    <p className="text-xs text-muted-foreground">Receive release notes.</p>
  </div>
</label>`,
    Component: CheckboxCardDemo,
  },
  "checkbox-states-demo": {
    title: "Validation, Disabled & No Shadow",
    filePath: "src/examples/checkbox-demo.tsx",
    codeSnippet: `<Checkbox state="error" />
<Checkbox disabled defaultChecked />
<Checkbox noShadow defaultChecked />`,
    Component: CheckboxStatesDemo,
  },
  "radio-group-demo": {
    title: "Radio Group",
    filePath: "src/examples/radio-group-demo.tsx",
    codeSnippet: `import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center gap-2.5">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default Density</Label>
      </div>
      <div className="flex items-center gap-2.5">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
    </RadioGroup>
  );
}`,
    Component: RadioGroupDemo,
  },
  "radio-group-basic-demo": {
    title: "Basic Radio Group",
    filePath: "src/examples/radio-group-demo.tsx",
    codeSnippet: `<RadioGroup defaultValue="comfortable">
  <div className="flex items-center gap-2.5">
    <RadioGroupItem value="default" id="rg-default" />
    <Label htmlFor="rg-default">Default Density</Label>
  </div>
  <div className="flex items-center gap-2.5">
    <RadioGroupItem value="comfortable" id="rg-comfortable" />
    <Label htmlFor="rg-comfortable">Comfortable</Label>
  </div>
</RadioGroup>`,
    Component: RadioGroupBasicDemo,
  },
  "radio-group-shape-demo": {
    title: "Shape & Horizontal",
    filePath: "src/examples/radio-group-demo.tsx",
    codeSnippet: `<RadioGroup orientation="horizontal" defaultValue="monthly">
  <RadioGroupItem value="monthly" shape="circle" />
  <RadioGroupItem value="yearly" shape="circle" />
</RadioGroup>

<RadioGroup orientation="horizontal" defaultValue="daily">
  <RadioGroupItem value="daily" shape="square" />
  <RadioGroupItem value="weekly" shape="square" />
</RadioGroup>`,
    Component: RadioGroupShapeDemo,
  },
  "radio-group-size-demo": {
    title: "Size",
    filePath: "src/examples/radio-group-demo.tsx",
    codeSnippet: `<RadioGroup orientation="horizontal" defaultValue="default">
  <RadioGroupItem value="sm" radioSize="sm" />
  <RadioGroupItem value="default" radioSize="default" />
  <RadioGroupItem value="lg" radioSize="lg" />
</RadioGroup>`,
    Component: RadioGroupSizeDemo,
  },
  "radio-group-variant-demo": {
    title: "Variants",
    filePath: "src/examples/radio-group-demo.tsx",
    codeSnippet: `<RadioGroupItem value="primary" variant="primary" />
<RadioGroupItem value="secondary" variant="secondary" />
<RadioGroupItem value="success" variant="success" />
<RadioGroupItem value="info" variant="info" />
<RadioGroupItem value="warning" variant="warning" />
<RadioGroupItem value="destructive" variant="destructive" />`,
    Component: RadioGroupVariantDemo,
  },
  "radio-group-card-demo": {
    title: "Card Selection",
    filePath: "src/examples/radio-group-demo.tsx",
    codeSnippet: `<RadioGroup value={plan} onValueChange={setPlan}>
  <label className="flex items-start justify-between rounded-md border-2 border-border p-3.5">
    <RadioGroupItem value="pro" noShadow />
    <span>Pro Studio — $19/mo</span>
  </label>
</RadioGroup>`,
    Component: RadioGroupCardDemo,
  },
  "radio-group-states-demo": {
    title: "Validation, Disabled & No Shadow",
    filePath: "src/examples/radio-group-demo.tsx",
    codeSnippet: `<RadioGroupItem value="required" state="error" />
<RadioGroupItem value="locked" disabled />
<RadioGroupItem value="flat" noShadow />`,
    Component: RadioGroupStatesDemo,
  },
  "switch-demo": {
    title: "Switch",
    filePath: "src/examples/switch-demo.tsx",
    codeSnippet: `import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function SwitchDemo() {
  return (
    <div className="flex items-center gap-3">
      <Switch id="airplane-mode" defaultChecked />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}`,
    Component: SwitchDemo,
  },
  "switch-basic-demo": {
    title: "Basic Switch",
    filePath: "src/examples/switch-demo.tsx",
    codeSnippet: `<div className="flex items-center gap-3">
  <Switch id="airplane-mode" defaultChecked />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`,
    Component: SwitchBasicDemo,
  },
  "switch-shape-demo": {
    title: "Shape (Square vs Pill)",
    filePath: "src/examples/switch-demo.tsx",
    codeSnippet: `<Switch shape="square" defaultChecked />
<Switch shape="pill" defaultChecked />`,
    Component: SwitchShapeDemo,
  },
  "switch-size-demo": {
    title: "Size",
    filePath: "src/examples/switch-demo.tsx",
    codeSnippet: `<Switch switchSize="sm" defaultChecked />
<Switch switchSize="default" defaultChecked />
<Switch switchSize="lg" defaultChecked />`,
    Component: SwitchSizeDemo,
  },
  "switch-variant-demo": {
    title: "Variants",
    filePath: "src/examples/switch-demo.tsx",
    codeSnippet: `<Switch variant="primary" defaultChecked />
<Switch variant="secondary" defaultChecked />
<Switch variant="success" defaultChecked />
<Switch variant="info" defaultChecked />
<Switch variant="warning" defaultChecked />
<Switch variant="destructive" defaultChecked />`,
    Component: SwitchVariantDemo,
  },
  "switch-card-demo": {
    title: "Settings Card",
    filePath: "src/examples/switch-demo.tsx",
    codeSnippet: `<Card>
  <CardContent className="space-y-4">
    <div className="flex items-center justify-between">
      <Label htmlFor="pref-2fa">Two-Factor Authentication</Label>
      <Switch id="pref-2fa" variant="success" noShadow checked={twoFactor} onCheckedChange={setTwoFactor} />
    </div>
  </CardContent>
</Card>`,
    Component: SwitchSettingsCardDemo,
  },
  "switch-states-demo": {
    title: "Disabled & No Shadow",
    filePath: "src/examples/switch-demo.tsx",
    codeSnippet: `<Switch disabled />
<Switch disabled defaultChecked />
<Switch noShadow defaultChecked />`,
    Component: SwitchStatesDemo,
  },
  "slider-demo": {
    title: "Slider",
    filePath: "src/examples/slider-demo.tsx",
    codeSnippet: `import { Slider } from "@/components/ui/slider";

export function SliderDemo() {
  const [volume, setVolume] = React.useState([65]);
  return (
    <Slider
      value={volume}
      onValueChange={setVolume}
      max={100}
      step={1}
    />
  );
}`,
    Component: SliderDemo,
  },
  "slider-basic-demo": {
    title: "Basic Slider",
    filePath: "src/examples/slider-demo.tsx",
    codeSnippet: `<Slider
  value={volume}
  onValueChange={setVolume}
  max={100}
  step={1}
/>`,
    Component: SliderBasicDemo,
  },
  "slider-range-demo": {
    title: "Range Slider (Dual Thumb)",
    filePath: "src/examples/slider-demo.tsx",
    codeSnippet: `<Slider
  value={range}
  onValueChange={setRange}
  min={0}
  max={100}
  step={5}
/>`,
    Component: SliderRangeDemo,
  },
  "slider-size-demo": {
    title: "Size & Shape",
    filePath: "src/examples/slider-demo.tsx",
    codeSnippet: `<Slider sliderSize="sm" defaultValue={[40]} />
<Slider sliderSize="default" defaultValue={[60]} />
<Slider sliderSize="lg" defaultValue={[80]} />
<Slider shape="circle" defaultValue={[55]} />`,
    Component: SliderSizeShapeDemo,
  },
  "slider-variant-demo": {
    title: "Variants",
    filePath: "src/examples/slider-demo.tsx",
    codeSnippet: `<Slider variant="primary" defaultValue={[75]} />
<Slider variant="secondary" defaultValue={[65]} />
<Slider variant="success" defaultValue={[85]} />
<Slider variant="info" defaultValue={[55]} />
<Slider variant="warning" defaultValue={[45]} />
<Slider variant="destructive" defaultValue={[30]} />`,
    Component: SliderVariantDemo,
  },
  "slider-stepped-demo": {
    title: "Stepped & Vertical",
    filePath: "src/examples/slider-demo.tsx",
    codeSnippet: `<Slider value={stepVal} onValueChange={setStepVal} step={25} />
<div className="h-36">
  <Slider orientation="vertical" defaultValue={[70]} />
</div>`,
    Component: SliderSteppedVerticalDemo,
  },
  "slider-states-demo": {
    title: "Disabled & No Shadow",
    filePath: "src/examples/slider-demo.tsx",
    codeSnippet: `<Slider defaultValue={[40]} disabled />
<Slider defaultValue={[65]} noShadow />`,
    Component: SliderStatesDemo,
  },
  "form-demo": {
    title: "Form",
    filePath: "src/examples/form-demo.tsx",
    codeSnippet: `const schema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters."),
  email: z.string().email("Please enter a valid email address."),
});

export function FormDemo() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { username: "", email: "" },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(console.log)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input state={fieldState.error ? "error" : "default"} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Save Profile</Button>
      </form>
    </Form>
  );
}`,
    Component: FormDemo,
  },
  "form-basic-demo": {
    title: "Basic Form",
    filePath: "src/examples/form-demo.tsx",
    codeSnippet: `<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
    <FormField
      control={form.control}
      name="username"
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input state={fieldState.error ? "error" : "default"} {...field} />
          </FormControl>
          <FormDescription>Your public handle across the workspace.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
    <Button type="submit" size="sm">Save Profile</Button>
  </form>
</Form>`,
    Component: FormBasicDemo,
  },
  "form-controls-demo": {
    title: "All Tier 2 Controls",
    filePath: "src/examples/form-demo.tsx",
    codeSnippet: `<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
    <FormField control={form.control} name="projectName" render={...} />
    <FormField control={form.control} name="framework" render={...} />
    <FormField control={form.control} name="launchDate" render={...} />
    <FormField control={form.control} name="visibility" render={...} />
    <FormField control={form.control} name="bio" render={...} />
    <FormField control={form.control} name="concurrency" render={...} />
    <FormField control={form.control} name="autoDeploy" render={...} />
    <FormField control={form.control} name="acceptTerms" render={...} />
    <Button type="submit" className="w-full">Create Project</Button>
  </form>
</Form>`,
    Component: FormControlsDemo,
  },
  "date-picker-demo": {
    title: "Date Picker & Calendar",
    filePath: "src/examples/date-picker-demo.tsx",
    codeSnippet: `import { DatePicker } from "@/components/ui/date-picker";

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return <DatePicker value={date} onSelect={setDate} />;
}`,
    Component: DatePickerDemo,
  },
  "date-picker-basic-demo": {
    title: "Basic Date Picker",
    filePath: "src/examples/date-picker-demo.tsx",
    codeSnippet: `<DatePicker
  value={date}
  onSelect={setDate}
  placeholder="Select launch date"
/>`,
    Component: DatePickerBasicDemo,
  },
  "date-picker-calendar-demo": {
    title: "Standalone Calendar",
    filePath: "src/examples/date-picker-demo.tsx",
    codeSnippet: `<Calendar mode="single" selected={date} onSelect={setDate} />`,
    Component: DatePickerCalendarDemo,
  },
  "date-picker-range-demo": {
    title: "Date Range Picker",
    filePath: "src/examples/date-picker-demo.tsx",
    codeSnippet: `<DateRangePicker value={range} onSelect={setRange} clearable />`,
    Component: DatePickerRangeDemo,
  },
  "date-picker-dropdown-demo": {
    title: "Month & Year Dropdown",
    filePath: "src/examples/date-picker-demo.tsx",
    codeSnippet: `<DatePicker
  value={dob}
  onSelect={setDob}
  captionLayout="dropdown"
  clearable
/>`,
    Component: DatePickerDropdownDemo,
  },
  "date-picker-presets-demo": {
    title: "Clearable, Presets & Disabled",
    filePath: "src/examples/date-picker-demo.tsx",
    codeSnippet: `<DatePicker
  value={date}
  onSelect={setDate}
  clearable
  disabledDays={{ before: today }}
  presets={[
    { label: "Today", date: today },
    { label: "Tomorrow", date: addDays(today, 1) },
  ]}
/>`,
    Component: DatePickerPresetsDemo,
  },
  "date-picker-size-demo": {
    title: "Size",
    filePath: "src/examples/date-picker-demo.tsx",
    codeSnippet: `<DatePicker triggerSize="sm" placeholder="Small (sm)" />
<DatePicker triggerSize="default" placeholder="Default size" />
<DatePicker triggerSize="lg" placeholder="Large (lg)" />`,
    Component: DatePickerSizeDemo,
  },
  "date-picker-states-demo": {
    title: "Validation, Disabled & No Shadow",
    filePath: "src/examples/date-picker-demo.tsx",
    codeSnippet: `<DatePicker state="success" defaultValue={new Date()} />
<DatePicker state="error" placeholder="Date is required..." />
<DatePicker disabled placeholder="Disabled date picker" />
<DatePicker noShadow defaultValue={new Date()} />`,
    Component: DatePickerStatesDemo,
  },
  "command-demo": {
    title: "Command Overview",
    filePath: "src/examples/command-demo.tsx",
    Component: CommandBasicDemo,
  },
  "command-basic-demo": {
    title: "Basic Command Menu",
    filePath: "src/examples/command-demo.tsx",
    codeSnippet: `<Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem onSelect={() => run("Calendar")}>
        <Calendar strokeWidth={2.5} />
        <span>Calendar</span>
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem onSelect={() => run("Profile")}>
        <User strokeWidth={2.5} />
        <span>Profile</span>
        <CommandShortcut>⌘P</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
    Component: CommandBasicDemo,
  },
  "command-dialog-demo": {
    title: "Command Dialog (⌘K)",
    filePath: "src/examples/command-demo.tsx",
    codeSnippet: `<CommandDialog open={open} onOpenChange={setOpen} title="Punch Command">
  <CommandInput placeholder="Jump to page or run an action..." />
  <CommandList>
    <CommandEmpty>No matching commands.</CommandEmpty>
    <CommandGroup heading="Quick Actions">
      <CommandItem onSelect={() => runCommand("Deploy to Production")}>
        <Rocket strokeWidth={2.5} />
        <span>Deploy to Production</span>
        <CommandShortcut>⌘D</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</CommandDialog>`,
    Component: CommandDialogDemo,
  },
  "command-states-demo": {
    title: "Badges, Disabled & No Shadow",
    filePath: "src/examples/command-demo.tsx",
    codeSnippet: `<Command noShadow>
  <CommandInput placeholder="Filter workspace tools..." />
  <CommandList>
    <CommandGroup heading="Workspace Tools">
      <CommandItem>
        <LayoutDashboard strokeWidth={2.5} />
        <span className="flex-1">Analytics Engine</span>
        <Badge variant="success" noShadow>LIVE</Badge>
      </CommandItem>
      <CommandItem disabled>
        <CreditCard strokeWidth={2.5} />
        <span className="flex-1">Audit Log Export</span>
        <Badge variant="outline" noShadow>LOCKED</Badge>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
    Component: CommandStatesDemo,
  },
  "combobox-demo": {
    title: "Combobox Overview",
    filePath: "src/examples/combobox-demo.tsx",
    Component: ComboboxBasicDemo,
  },
  "combobox-basic-demo": {
    title: "Basic Combobox",
    filePath: "src/examples/combobox-demo.tsx",
    codeSnippet: `<Combobox
  options={frameworkOptions}
  value={framework}
  onValueChange={setFramework}
  placeholder="Select a framework..."
  searchPlaceholder="Search framework..."
  clearable
/>`,
    Component: ComboboxBasicDemo,
  },
  "combobox-multi-demo": {
    title: "Multi-Select Combobox",
    filePath: "src/examples/combobox-demo.tsx",
    codeSnippet: `<MultiCombobox
  options={stackOptions}
  value={skills}
  onValueChange={setSkills}
  placeholder="Select technologies..."
  maxDisplay={3}
  clearable
/>`,
    Component: ComboboxMultiDemo,
  },
  "combobox-grouped-demo": {
    title: "Grouped, Icons & Descriptions",
    filePath: "src/examples/combobox-demo.tsx",
    codeSnippet: `<Combobox
  options={[
    {
      value: "api-gateway",
      label: "API Gateway",
      description: "Rate-limited REST & RPC routes",
      group: "Backend",
      badge: "CORE",
      icon: <Server className="h-4 w-4" strokeWidth={2.5} />,
    },
  ]}
  value={service}
  onValueChange={setService}
  clearable
/>`,
    Component: ComboboxGroupedDemo,
  },
  "combobox-size-demo": {
    title: "Size",
    filePath: "src/examples/combobox-demo.tsx",
    codeSnippet: `<Combobox options={options} triggerSize="sm" placeholder="Small combobox..." />
<Combobox options={options} triggerSize="default" placeholder="Default combobox..." />
<Combobox options={options} triggerSize="lg" placeholder="Large combobox..." />`,
    Component: ComboboxSizesDemo,
  },
  "combobox-states-demo": {
    title: "Validation, Disabled & No Shadow",
    filePath: "src/examples/combobox-demo.tsx",
    codeSnippet: `<Combobox options={options} defaultValue="nextjs" state="success" />
<Combobox options={options} state="error" placeholder="Selection is required..." />
<Combobox options={options} defaultValue="astro" disabled />
<Combobox options={options} defaultValue="vite" noShadow />`,
    Component: ComboboxStatesDemo,
  },
  "input-otp-demo": {
    title: "Input OTP Overview",
    filePath: "src/examples/input-otp-demo.tsx",
    Component: InputOTPBasicDemo,
  },
  "input-otp-basic-demo": {
    title: "Basic 6-Digit OTP",
    filePath: "src/examples/input-otp-demo.tsx",
    codeSnippet: `<InputOTP maxLength={6} value={value} onChange={setValue} pattern={REGEXP_ONLY_DIGITS}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`,
    Component: InputOTPBasicDemo,
  },
  "input-otp-pattern-demo": {
    title: "Pattern & Masked PIN",
    filePath: "src/examples/input-otp-demo.tsx",
    codeSnippet: `<InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>

<InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS} masked>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
  </InputOTPGroup>
</InputOTP>`,
    Component: InputOTPPatternDemo,
  },
  "input-otp-size-demo": {
    title: "Size",
    filePath: "src/examples/input-otp-demo.tsx",
    codeSnippet: `<InputOTP maxLength={4} otpSize="sm">...</InputOTP>
<InputOTP maxLength={4} otpSize="default">...</InputOTP>
<InputOTP maxLength={4} otpSize="lg">...</InputOTP>`,
    Component: InputOTPSizeDemo,
  },
  "input-otp-states-demo": {
    title: "Validation, Disabled & No Shadow",
    filePath: "src/examples/input-otp-demo.tsx",
    codeSnippet: `<InputOTP maxLength={4} defaultValue="2026" state="success">...</InputOTP>
<InputOTP maxLength={4} defaultValue="00" state="error">...</InputOTP>
<InputOTP maxLength={4} defaultValue="8842" disabled>...</InputOTP>
<InputOTP maxLength={4} defaultValue="4096" noShadow>...</InputOTP>`,
    Component: InputOTPStatesDemo,
  },
  "input-otp-card-demo": {
    title: "Verification Card",
    filePath: "src/examples/input-otp-demo.tsx",
    codeSnippet: `<Card className="w-full max-w-md">
  <CardHeader>
    <CardTitle>Verify Login Code</CardTitle>
  </CardHeader>
  <CardContent>
    <InputOTP maxLength={6} value={code} onChange={setCode} state={state}>
      <InputOTPGroup>...</InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>...</InputOTPGroup>
    </InputOTP>
  </CardContent>
  <CardFooter>
    <Button type="submit">Verify Code</Button>
  </CardFooter>
</Card>`,
    Component: InputOTPCardDemo,
  },
  "dialog-demo": {
    title: "Dialog Overview",
    filePath: "src/examples/dialog-demo.tsx",
    Component: DialogBasicDemo,
  },
  "dialog-basic-demo": {
    title: "Basic Dialog",
    filePath: "src/examples/dialog-demo.tsx",
    codeSnippet: `<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Welcome to Punch UI</DialogTitle>
      <DialogDescription>Bold 2px borders and hard offset shadows.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild><Button variant="outline">Close</Button></DialogClose>
      <DialogClose asChild><Button>Got It</Button></DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
    Component: DialogBasicDemo,
  },
  "dialog-form-demo": {
    title: "Form Dialog",
    filePath: "src/examples/dialog-demo.tsx",
    codeSnippet: `<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <Button variant="secondary">Edit Profile</Button>
  </DialogTrigger>
  <DialogContent>
    <form onSubmit={handleSave} className="space-y-4">
      <DialogHeader>
        <DialogTitle>Edit Member Profile</DialogTitle>
      </DialogHeader>
      <Input value={name} onChange={(e) => setName(e.target.value)} />
      <DialogFooter>
        <DialogClose asChild><Button type="button" variant="outline">Cancel</Button></DialogClose>
        <Button type="submit">Save Changes</Button>
      </DialogFooter>
    </form>
  </DialogContent>
</Dialog>`,
    Component: DialogFormDemo,
  },
  "dialog-size-demo": {
    title: "Size",
    filePath: "src/examples/dialog-demo.tsx",
    codeSnippet: `<DialogContent size="sm">...</DialogContent>
<DialogContent size="default">...</DialogContent>
<DialogContent size="lg">...</DialogContent>
<DialogContent size="xl">...</DialogContent>`,
    Component: DialogSizeDemo,
  },
  "dialog-scrollable-demo": {
    title: "Scrollable Content",
    filePath: "src/examples/dialog-demo.tsx",
    codeSnippet: `<DialogContent className="flex max-h-[80vh] flex-col">
  <DialogHeader>
    <DialogTitle>Release Changelog</DialogTitle>
  </DialogHeader>
  <div className="min-h-0 flex-1 space-y-4 overflow-y-auto pr-2">...</div>
  <DialogFooter className="border-t-2 border-border pt-4">...</DialogFooter>
</DialogContent>`,
    Component: DialogScrollableDemo,
  },
  "dialog-header-demo": {
    title: "Accent Header",
    filePath: "src/examples/dialog-demo.tsx",
    codeSnippet: `<DialogHeader variant="primary">
  <DialogTitle>Deploy to Production</DialogTitle>
</DialogHeader>

<DialogHeader variant="secondary">
  <DialogTitle>Pro Workspace Unlocked</DialogTitle>
</DialogHeader>`,
    Component: DialogHeaderVariantDemo,
  },
  "alert-dialog-demo": {
    title: "Alert Dialog Overview",
    filePath: "src/examples/alert-dialog-demo.tsx",
    Component: AlertDialogBasicDemo,
  },
  "alert-dialog-basic-demo": {
    title: "Basic Confirmation",
    filePath: "src/examples/alert-dialog-demo.tsx",
    codeSnippet: `<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Publish Registry</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Publish v1.0.0 to Registry?</AlertDialogTitle>
      <AlertDialogDescription>Downstream projects will receive the update immediately.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
    Component: AlertDialogBasicDemo,
  },
  "alert-dialog-destructive-demo": {
    title: "Destructive Action",
    filePath: "src/examples/alert-dialog-demo.tsx",
    codeSnippet: `<AlertDialogFooter>
  <AlertDialogCancel>Keep Workspace</AlertDialogCancel>
  <AlertDialogAction variant="danger" onClick={handleDelete}>
    Yes, Delete Everything
  </AlertDialogAction>
</AlertDialogFooter>`,
    Component: AlertDialogDestructiveDemo,
  },
  "alert-dialog-async-demo": {
    title: "Async / Loading Action",
    filePath: "src/examples/alert-dialog-demo.tsx",
    codeSnippet: `<AlertDialog open={open} onOpenChange={setOpen}>
  <AlertDialogContent>
    <AlertDialogFooter>
      <AlertDialogCancel disabled={loading}>Cancel</AlertDialogCancel>
      <AlertDialogAction
        variant="danger"
        isLoading={loading}
        onClick={(e) => {
          e.preventDefault();
          handleConfirm();
        }}
      >
        Revoke Sessions
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
    Component: AlertDialogAsyncDemo,
  },
  "sheet-demo": {
    title: "Sheet Overview",
    filePath: "src/examples/sheet-demo.tsx",
    Component: SheetBasicDemo,
  },
  "sheet-basic-demo": {
    title: "Basic Sheet",
    filePath: "src/examples/sheet-demo.tsx",
    codeSnippet: `<Sheet>
  <SheetTrigger asChild>
    <Button>Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Quick Inspector</SheetTitle>
      <SheetDescription>Slide-over panel for secondary details.</SheetDescription>
    </SheetHeader>
    <SheetFooter>
      <SheetClose asChild><Button variant="outline">Close</Button></SheetClose>
      <SheetClose asChild><Button>Done</Button></SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`,
    Component: SheetBasicDemo,
  },
  "sheet-sides-demo": {
    title: "Four Sides",
    filePath: "src/examples/sheet-demo.tsx",
    codeSnippet: `<SheetContent side="top">...</SheetContent>
<SheetContent side="right">...</SheetContent>
<SheetContent side="bottom">...</SheetContent>
<SheetContent side="left">...</SheetContent>`,
    Component: SheetSidesDemo,
  },
  "sheet-filter-demo": {
    title: "Filter & Form Drawer",
    filePath: "src/examples/sheet-demo.tsx",
    codeSnippet: `<Sheet open={open} onOpenChange={setOpen}>
  <SheetTrigger asChild>
    <Button variant="secondary">Filter Data</Button>
  </SheetTrigger>
  <SheetContent>
    <form onSubmit={handleApply} className="flex h-full flex-col gap-5">
      <SheetHeader><SheetTitle>Filter Deployments</SheetTitle></SheetHeader>
      {/* Input, Switch, Checkbox */}
      <SheetFooter>
        <SheetClose asChild><Button type="button" variant="outline">Cancel</Button></SheetClose>
        <Button type="submit">Apply Filters</Button>
      </SheetFooter>
    </form>
  </SheetContent>
</Sheet>`,
    Component: SheetFilterDemo,
  },
  "sheet-navigation-demo": {
    title: "Mobile Navigation Drawer",
    filePath: "src/examples/sheet-demo.tsx",
    codeSnippet: `<SheetContent side="left" size="sm">
  <SheetHeader variant="primary">
    <SheetTitle>Punch UI</SheetTitle>
    <SheetDescription>Workspace Navigation</SheetDescription>
  </SheetHeader>
  {/* Navigation links */}
</SheetContent>`,
    Component: SheetNavigationDemo,
  },
  "sheet-scrollable-demo": {
    title: "Scrollable Content",
    filePath: "src/examples/sheet-demo.tsx",
    codeSnippet: `<SheetContent>
  <SheetHeader><SheetTitle>Audit Activity Feed</SheetTitle></SheetHeader>
  <ScrollArea variant="ghost" scrollbarVariant="auto" className="min-h-0 flex-1">
    ...
  </ScrollArea>
  <SheetFooter className="border-t-2 border-border pt-4">...</SheetFooter>
</SheetContent>`,
    Component: SheetScrollableDemo,
  },
  "dropdown-menu-demo": {
    title: "Dropdown Menu Overview",
    filePath: "src/examples/dropdown-menu-demo.tsx",
    Component: DropdownMenuBasicDemo,
  },
  "dropdown-menu-basic-demo": {
    title: "Basic Action Menu",
    filePath: "src/examples/dropdown-menu-demo.tsx",
    codeSnippet: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">My Account</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuLabel>Workspace Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <User strokeWidth={2.5} />
      <span>Profile</span>
      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="danger">
      <LogOut strokeWidth={2.5} />
      <span>Log out</span>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
    Component: DropdownMenuBasicDemo,
  },
  "dropdown-menu-checkboxes-demo": {
    title: "Checkbox Items",
    filePath: "src/examples/dropdown-menu-demo.tsx",
    codeSnippet: `<DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
  Status Bar
</DropdownMenuCheckboxItem>`,
    Component: DropdownMenuCheckboxesDemo,
  },
  "dropdown-menu-radio-demo": {
    title: "Radio Group Items",
    filePath: "src/examples/dropdown-menu-demo.tsx",
    codeSnippet: `<DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
  <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
  <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
  <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
</DropdownMenuRadioGroup>`,
    Component: DropdownMenuRadioDemo,
  },
  "dropdown-menu-submenu-demo": {
    title: "Nested Submenu",
    filePath: "src/examples/dropdown-menu-demo.tsx",
    codeSnippet: `<DropdownMenuSub>
  <DropdownMenuSubTrigger>Invite Users</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent>
      <DropdownMenuItem>Invite via Email</DropdownMenuItem>
      <DropdownMenuItem>Copy Invite Link</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>`,
    Component: DropdownMenuSubmenuDemo,
  },
  "popover-demo": {
    title: "Popover Overview",
    filePath: "src/examples/popover-demo.tsx",
    Component: PopoverBasicDemo,
  },
  "popover-basic-demo": {
    title: "Basic Popover",
    filePath: "src/examples/popover-demo.tsx",
    codeSnippet: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Dimensions</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    {/* Mini form controls */}
  </PopoverContent>
</Popover>`,
    Component: PopoverBasicDemo,
  },
  "popover-placement-demo": {
    title: "Placement",
    filePath: "src/examples/popover-demo.tsx",
    codeSnippet: `<PopoverContent side="top">...</PopoverContent>
<PopoverContent side="right">...</PopoverContent>
<PopoverContent side="bottom">...</PopoverContent>
<PopoverContent side="left">...</PopoverContent>`,
    Component: PopoverPlacementDemo,
  },
  "popover-profile-demo": {
    title: "Rich Profile Card",
    filePath: "src/examples/popover-demo.tsx",
    codeSnippet: `<PopoverContent align="start" className="w-72">
  <Avatar><AvatarFallback>AM</AvatarFallback></Avatar>
  ...
</PopoverContent>`,
    Component: PopoverProfileDemo,
  },
  "popover-no-shadow-demo": {
    title: "No Shadow",
    filePath: "src/examples/popover-demo.tsx",
    codeSnippet: `<PopoverContent noShadow className="w-64">...</PopoverContent>`,
    Component: PopoverNoShadowDemo,
  },
  "tooltip-demo": {
    title: "Tooltip Overview",
    filePath: "src/examples/tooltip-demo.tsx",
    Component: TooltipBasicDemo,
  },
  "tooltip-basic-demo": {
    title: "Basic Tooltip",
    filePath: "src/examples/tooltip-demo.tsx",
    codeSnippet: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover or Focus Me</Button>
    </TooltipTrigger>
    <TooltipContent showArrow>
      <p>High-contrast Neobrutalist tooltip</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
    Component: TooltipBasicDemo,
  },
  "tooltip-placement-demo": {
    title: "Placement",
    filePath: "src/examples/tooltip-demo.tsx",
    codeSnippet: `<TooltipContent side="top" showArrow>side="top"</TooltipContent>
<TooltipContent side="right" showArrow>side="right"</TooltipContent>
<TooltipContent side="bottom" showArrow>side="bottom"</TooltipContent>
<TooltipContent side="left" showArrow>side="left"</TooltipContent>`,
    Component: TooltipPlacementDemo,
  },
  "tooltip-variants-demo": {
    title: "Variants & No Shadow",
    filePath: "src/examples/tooltip-demo.tsx",
    codeSnippet: `<TooltipContent variant="default">Default</TooltipContent>
<TooltipContent variant="card">Card</TooltipContent>
<TooltipContent variant="primary">Primary</TooltipContent>
<TooltipContent variant="secondary">Secondary</TooltipContent>
<TooltipContent variant="card" noShadow>No Shadow</TooltipContent>`,
    Component: TooltipVariantsDemo,
  },
  "tooltip-toolbar-demo": {
    title: "Icon Toolbar & Shortcuts",
    filePath: "src/examples/tooltip-demo.tsx",
    codeSnippet: `<TooltipProvider delayDuration={0}>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="ghost" size="icon" aria-label="Bold">
        <Bold className="h-4 w-4" strokeWidth={2.5} />
      </Button>
    </TooltipTrigger>
    <TooltipContent className="flex items-center gap-2">
      <span>Bold</span>
      <kbd>⌘B</kbd>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
    Component: TooltipToolbarDemo,
  },
  "tabs-demo": {
    title: "Tabs Overview",
    filePath: "src/examples/tabs-demo.tsx",
    Component: TabsBasicDemo,
  },
  "tabs-basic-demo": {
    title: "Basic Tabs",
    filePath: "src/examples/tabs-demo.tsx",
    codeSnippet: `<Tabs defaultValue="account" className="max-w-md">
  <TabsList className="grid w-full grid-cols-2">
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">...</TabsContent>
  <TabsContent value="password">...</TabsContent>
</Tabs>`,
    Component: TabsBasicDemo,
  },
  "tabs-folder-demo": {
    title: "Physical Folder Style",
    filePath: "src/examples/tabs-demo.tsx",
    codeSnippet: `<Tabs defaultValue="overview" variant="folder">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="specs">Token Specs</TabsTrigger>
    <TabsTrigger value="cli">CLI Install</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">...</TabsContent>
</Tabs>`,
    Component: TabsFolderDemo,
  },
  "tabs-underline-demo": {
    title: "Underline, Icons & Badges",
    filePath: "src/examples/tabs-demo.tsx",
    codeSnippet: `<Tabs defaultValue="dashboard" variant="underline">
  <TabsList>
    <TabsTrigger value="dashboard"><LayoutDashboard /> Overview</TabsTrigger>
    <TabsTrigger value="alerts"><Bell /> Alerts <Badge>4</Badge></TabsTrigger>
  </TabsList>
  <TabsContent value="dashboard">...</TabsContent>
</Tabs>`,
    Component: TabsUnderlineDemo,
  },
  "tabs-vertical-demo": {
    title: "Vertical Orientation",
    filePath: "src/examples/tabs-demo.tsx",
    codeSnippet: `<Tabs defaultValue="profile" orientation="vertical">
  <TabsList className="sm:w-44">
    <TabsTrigger value="profile">Profile</TabsTrigger>
    <TabsTrigger value="security">Security</TabsTrigger>
  </TabsList>
  <TabsContent value="profile">...</TabsContent>
</Tabs>`,
    Component: TabsVerticalDemo,
  },
  "tabs-sizes-demo": {
    title: "Size",
    filePath: "src/examples/tabs-demo.tsx",
    codeSnippet: `<Tabs defaultValue="a" size="sm">...</Tabs>
<Tabs defaultValue="a" size="default">...</Tabs>
<Tabs defaultValue="a" size="lg">...</Tabs>`,
    Component: TabsSizesDemo,
  },
  "tabs-states-demo": {
    title: "Disabled & No Shadow",
    filePath: "src/examples/tabs-demo.tsx",
    codeSnippet: `<Tabs defaultValue="active">
  <TabsList>
    <TabsTrigger value="active">Active</TabsTrigger>
    <TabsTrigger value="archived" disabled>Archived (Disabled)</TabsTrigger>
  </TabsList>
</Tabs>

<Tabs defaultValue="flat-a" noShadow>
  <TabsList>
    <TabsTrigger value="flat-a">Flat Tab A</TabsTrigger>
    <TabsTrigger value="flat-b">Flat Tab B</TabsTrigger>
  </TabsList>
</Tabs>`,
    Component: TabsStatesDemo,
  },
  "button-group-demo": {
    title: "Button Group Overview",
    filePath: "src/examples/button-group-demo.tsx",
    Component: ButtonGroupBasicDemo,
  },
  "button-group-basic-demo": {
    title: "Basic Button Group",
    filePath: "src/examples/button-group-demo.tsx",
    codeSnippet: `<ButtonGroup>
  <Button variant="outline">Archive</Button>
  <Button variant="outline">Report</Button>
  <Button variant="outline">Snooze</Button>
</ButtonGroup>`,
    Component: ButtonGroupBasicDemo,
  },
  "button-group-vertical-demo": {
    title: "Vertical Orientation",
    filePath: "src/examples/button-group-demo.tsx",
    codeSnippet: `<ButtonGroup orientation="vertical">
  <Button variant="outline" size="icon"><Plus /></Button>
  <Button variant="outline" size="icon"><Minus /></Button>
  <Button variant="outline" size="icon"><RotateCcw /></Button>
</ButtonGroup>`,
    Component: ButtonGroupVerticalDemo,
  },
  "button-group-split-demo": {
    title: "Split Button",
    filePath: "src/examples/button-group-demo.tsx",
    codeSnippet: `<ButtonGroup>
  <Button>Deploy to Production</Button>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button size="icon"><ChevronDown /></Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">...</DropdownMenuContent>
  </DropdownMenu>
</ButtonGroup>`,
    Component: ButtonGroupSplitDemo,
  },
  "button-group-input-demo": {
    title: "With Input & Text Addon",
    filePath: "src/examples/button-group-demo.tsx",
    codeSnippet: `<ButtonGroup className="w-full">
  <ButtonGroupText>https://</ButtonGroupText>
  <Input placeholder="punch-ui.dev" className="flex-1" />
  <Button variant="secondary">Visit</Button>
</ButtonGroup>`,
    Component: ButtonGroupInputDemo,
  },
  "button-group-size-demo": {
    title: "Size",
    filePath: "src/examples/button-group-demo.tsx",
    codeSnippet: `<ButtonGroup><Button variant="outline" size="sm">Small</Button>...</ButtonGroup>
<ButtonGroup><Button variant="outline" size="default">Default</Button>...</ButtonGroup>
<ButtonGroup><Button variant="outline" size="lg">Large</Button>...</ButtonGroup>`,
    Component: ButtonGroupSizeDemo,
  },
  "button-group-noshadow-demo": {
    title: "No Shadow & Toggle Toolbar",
    filePath: "src/examples/button-group-demo.tsx",
    codeSnippet: `<ButtonGroup noShadow>
  <Button variant="default" size="icon"><AlignLeft /></Button>
  <Button variant="outline" size="icon"><AlignCenter /></Button>
  <Button variant="outline" size="icon"><AlignRight /></Button>
</ButtonGroup>`,
    Component: ButtonGroupNoShadowDemo,
  },
  "breadcrumb-demo": {
    title: "Breadcrumb Overview",
    filePath: "src/examples/breadcrumb-demo.tsx",
    Component: BreadcrumbBasicDemo,
  },
  "breadcrumb-basic-demo": {
    title: "Basic Breadcrumb",
    filePath: "src/examples/breadcrumb-demo.tsx",
    codeSnippet: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink href="#home">Home</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbLink href="#docs">Docs</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>Breadcrumb</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
    Component: BreadcrumbBasicDemo,
  },
  "breadcrumb-variants-demo": {
    title: "Variants",
    filePath: "src/examples/breadcrumb-demo.tsx",
    codeSnippet: `<Breadcrumb variant="contained">...</Breadcrumb>
<Breadcrumb variant="pills">...</Breadcrumb>
<Breadcrumb variant="contained" noShadow>...</Breadcrumb>`,
    Component: BreadcrumbVariantsDemo,
  },
  "breadcrumb-separator-demo": {
    title: "Custom Separator",
    filePath: "src/examples/breadcrumb-demo.tsx",
    codeSnippet: `<BreadcrumbSeparator>
  <Slash strokeWidth={2.5} />
</BreadcrumbSeparator>`,
    Component: BreadcrumbSeparatorDemo,
  },
  "breadcrumb-dropdown-demo": {
    title: "Collapsed with Dropdown",
    filePath: "src/examples/breadcrumb-demo.tsx",
    codeSnippet: `<DropdownMenu>
  <DropdownMenuTrigger>
    <BreadcrumbEllipsis />
  </DropdownMenuTrigger>
  <DropdownMenuContent align="start">
    <DropdownMenuItem>Documentation</DropdownMenuItem>
    <DropdownMenuItem>Registry</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
    Component: BreadcrumbDropdownDemo,
  },
  "alert-demo": {
    title: "Alert Overview",
    filePath: "src/examples/alert-demo.tsx",
    Component: AlertBasicDemo,
  },
  "alert-basic-demo": {
    title: "Basic Alert",
    filePath: "src/examples/alert-demo.tsx",
    codeSnippet: `<Alert>
  <Terminal strokeWidth={2.5} />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>You can add Neobrutalist components via the Punch UI CLI.</AlertDescription>
</Alert>`,
    Component: AlertBasicDemo,
  },
  "alert-variants-demo": {
    title: "Semantic Status Variants",
    filePath: "src/examples/alert-demo.tsx",
    codeSnippet: `<Alert variant="success">...</Alert>
<Alert variant="info">...</Alert>
<Alert variant="warning">...</Alert>
<Alert variant="danger">...</Alert>`,
    Component: AlertVariantsDemo,
  },
  "alert-dismissible-demo": {
    title: "Dismissible Alert",
    filePath: "src/examples/alert-demo.tsx",
    codeSnippet: `<Alert variant="secondary" dismissible onDismiss={() => setVisible(false)}>
  <Info strokeWidth={2.5} />
  <AlertTitle>New Registry Release</AlertTitle>
  <AlertDescription>Tier 3 components are now available.</AlertDescription>
</Alert>`,
    Component: AlertDismissibleDemo,
  },
  "alert-noshadow-demo": {
    title: "No Shadow",
    filePath: "src/examples/alert-demo.tsx",
    codeSnippet: `<Alert noShadow>...</Alert>
<Alert variant="primary" noShadow>...</Alert>`,
    Component: AlertNoShadowDemo,
  },
  "sonner-demo": {
    title: "Sonner Toast Overview",
    filePath: "src/examples/sonner-demo.tsx",
    Component: SonnerBasicDemo,
  },
  "sonner-basic-demo": {
    title: "Basic Toast",
    filePath: "src/examples/sonner-demo.tsx",
    codeSnippet: `toast("Deployment Triggered", {
  description: "Build #508 has been queued for ap-southeast-1.",
});`,
    Component: SonnerBasicDemo,
  },
  "sonner-variants-demo": {
    title: "Semantic Status Toasts",
    filePath: "src/examples/sonner-demo.tsx",
    codeSnippet: `toast.success("Registry Published", { description: "All artifacts are live." });
toast.info("New Preset Available");
toast.warning("API Rate Limit Near");
toast.error("Connection Failed");`,
    Component: SonnerVariantsDemo,
  },
  "sonner-action-demo": {
    title: "With Action Button",
    filePath: "src/examples/sonner-demo.tsx",
    codeSnippet: `toast("Component Archived", {
  description: "legacy-banner.tsx was moved to archive.",
  action: {
    label: "Undo",
    onClick: () => toast.success("Restored"),
  },
});`,
    Component: SonnerActionDemo,
  },
  "sonner-promise-demo": {
    title: "Async Promise Toast",
    filePath: "src/examples/sonner-demo.tsx",
    codeSnippet: `toast.promise(deployPromise, {
  loading: "Building Punch UI registry...",
  success: (data) => \`Published \${data.version} successfully!\`,
  error: "Registry build failed.",
});`,
    Component: SonnerPromiseDemo,
  },
  "sonner-position-demo": {
    title: "Position",
    filePath: "src/examples/sonner-demo.tsx",
    codeSnippet: `toast("Position: Top Right", {
  description: "Rendered at top-right.",
  position: "top-right",
});`,
    Component: SonnerPositionDemo,
  },
  "chart-demo": {
    title: "Charts Overview",
    filePath: "src/examples/chart-demo.tsx",
    Component: ChartBarDemo,
  },
  "chart-bar-demo": {
    title: "Bar Chart (Grouped)",
    filePath: "src/examples/chart-demo.tsx",
    codeSnippet: `<ChartContainer config={BAR_CONFIG} className="h-[280px]">
  <BarChart data={MONTHLY_TRAFFIC}>
    <CartesianGrid vertical={false} strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
    <Bar dataKey="desktop" fill="var(--color-desktop)" stroke="var(--border)" strokeWidth={2} />
    <Bar dataKey="mobile" fill="var(--color-mobile)" stroke="var(--border)" strokeWidth={2} />
  </BarChart>
</ChartContainer>`,
    Component: ChartBarDemo,
  },
  "chart-stacked-demo": {
    title: "Stacked Bar Chart",
    filePath: "src/examples/chart-demo.tsx",
    codeSnippet: `<Bar dataKey="subscriptions" stackId="rev" fill="var(--color-subscriptions)" stroke="var(--border)" strokeWidth={2} />
<Bar dataKey="addons" stackId="rev" fill="var(--color-addons)" stroke="var(--border)" strokeWidth={2} />
<Bar dataKey="services" stackId="rev" fill="var(--color-services)" stroke="var(--border)" strokeWidth={2} />`,
    Component: ChartStackedBarDemo,
  },
  "chart-line-demo": {
    title: "Line Chart (Multi-Series)",
    filePath: "src/examples/chart-demo.tsx",
    codeSnippet: `<LineChart data={LINE_DATA}>
  <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
  <Line type="linear" dataKey="sessions" stroke="var(--color-sessions)" strokeWidth={3} />
  <Line type="linear" dataKey="conversions" stroke="var(--color-conversions)" strokeWidth={3} />
</LineChart>`,
    Component: ChartLineDemo,
  },
  "chart-area-demo": {
    title: "Area Chart (Solid)",
    filePath: "src/examples/chart-demo.tsx",
    codeSnippet: `<AreaChart data={AREA_DATA}>
  <Area
    type="monotone"
    dataKey="users"
    fill="var(--color-users)"
    fillOpacity={0.85}
    stroke="var(--border)"
    strokeWidth={2.5}
  />
</AreaChart>`,
    Component: ChartAreaDemo,
  },
  "chart-donut-demo": {
    title: "Donut / Pie Chart",
    filePath: "src/examples/chart-demo.tsx",
    codeSnippet: `<PieChart>
  <ChartTooltip content={<ChartTooltipContent nameKey="source" hideLabel />} />
  <Pie data={PIE_DATA} dataKey="visitors" innerRadius={58} outerRadius={94} stroke="var(--border)" strokeWidth={2.5} />
</PieChart>`,
    Component: ChartDonutDemo,
  },
  "chart-treemap-demo": {
    title: "Treemap",
    filePath: "src/examples/chart-demo.tsx",
    codeSnippet: `<ChartContainer config={TREEMAP_CONFIG} className="h-[300px]">
  <Treemap
    data={TREEMAP_DATA}
    dataKey="size"
    stroke="var(--border)"
    content={<NeobrutalTreemapCell />}
  >
    <ChartTooltip content={<ChartTooltipContent hideLabel />} />
  </Treemap>
</ChartContainer>`,
    Component: ChartTreemapDemo,
  },
  "chart-interactive-demo": {
    title: "Interactive Dashboard Chart",
    filePath: "src/examples/chart-demo.tsx",
    codeSnippet: `<Card>
  <CardHeader>
    <CardTitle>API Request Volume</CardTitle>
    {/* 7D / 30D / 90D range toggle buttons */}
  </CardHeader>
  <CardContent>
    <ChartContainer config={INTERACTIVE_CONFIG} className="h-[240px]">
      <BarChart data={data}>...</BarChart>
    </ChartContainer>
  </CardContent>
</Card>`,
    Component: ChartInteractiveDemo,
  },
  "progress-demo": {
    title: "Progress Overview",
    filePath: "src/examples/progress-demo.tsx",
    Component: ProgressBasicDemo,
  },
  "progress-basic-demo": {
    title: "Basic & Interactive Progress",
    filePath: "src/examples/progress-demo.tsx",
    codeSnippet: `<Progress value={progress} showValue aria-label="Build progress" />`,
    Component: ProgressBasicDemo,
  },
  "progress-variants-demo": {
    title: "Semantic Variants",
    filePath: "src/examples/progress-demo.tsx",
    codeSnippet: `<Progress variant="default" value={78} />
<Progress variant="secondary" value={65} />
<Progress variant="success" value={92} />
<Progress variant="info" value={54} />
<Progress variant="warning" value={72} />
<Progress variant="danger" value={38} />`,
    Component: ProgressVariantsDemo,
  },
  "progress-size-demo": {
    title: "Size",
    filePath: "src/examples/progress-demo.tsx",
    codeSnippet: `<Progress size="sm" value={45} showValue />
<Progress size="default" value={68} showValue />
<Progress size="lg" value={82} showValue />`,
    Component: ProgressSizeDemo,
  },
  "progress-striped-demo": {
    title: "Striped & Indeterminate",
    filePath: "src/examples/progress-demo.tsx",
    codeSnippet: `<Progress value={74} size="lg" striped showValue />
<Progress indeterminate variant="info" striped />`,
    Component: ProgressStripedDemo,
  },
  "progress-noshadow-demo": {
    title: "No Shadow",
    filePath: "src/examples/progress-demo.tsx",
    codeSnippet: `<Progress value={60} noShadow />
<Progress value={85} variant="success" noShadow showValue />`,
    Component: ProgressNoShadowDemo,
  },
  "progress-card-demo": {
    title: "Workspace Quota Card",
    filePath: "src/examples/progress-demo.tsx",
    codeSnippet: `<Card>
  <CardHeader><CardTitle>Workspace Quotas</CardTitle></CardHeader>
  <CardContent className="space-y-4">
    <Progress value={82} variant="warning" noShadow />
    <Progress value={42} variant="success" noShadow />
    <Progress value={94} variant="danger" noShadow />
  </CardContent>
</Card>`,
    Component: ProgressQuotaCardDemo,
  },
  "progress-animated-demo": {
    title: "Animated (0% – 100%)",
    filePath: "src/examples/progress-demo.tsx",
    codeSnippet: `<Progress
  value={value}
  size="lg"
  variant={value >= 100 ? "success" : "default"}
  striped={value < 100}
  showValue
/>`,
    Component: ProgressAnimatedDemo,
  },
  "skeleton-demo": {
    title: "Skeleton Overview",
    filePath: "src/examples/skeleton-demo.tsx",
    Component: SkeletonBasicDemo,
  },
  "skeleton-basic-demo": {
    title: "Basic Shapes",
    filePath: "src/examples/skeleton-demo.tsx",
    codeSnippet: `<div className="flex items-center gap-4">
  <Skeleton shape="circle" className="h-12 w-12" />
  <div className="flex-1 space-y-2.5">
    <Skeleton className="h-4 w-3/4" />
    <Skeleton className="h-3.5 w-1/2" />
  </div>
</div>`,
    Component: SkeletonBasicDemo,
  },
  "skeleton-card-demo": {
    title: "Card Skeleton",
    filePath: "src/examples/skeleton-demo.tsx",
    codeSnippet: `<Card className="w-full max-w-sm">
  <div className="border-b-2 border-border p-4">
    <Skeleton variant="flat" className="h-36 w-full" />
  </div>
  <CardHeader>
    <Skeleton variant="flat" className="h-5 w-2/3" />
    <Skeleton variant="flat" className="h-3.5 w-full" />
  </CardHeader>
</Card>`,
    Component: SkeletonCardDemo,
  },
  "skeleton-table-demo": {
    title: "Table Rows Skeleton",
    filePath: "src/examples/skeleton-demo.tsx",
    codeSnippet: `<div className="grid grid-cols-4 items-center gap-3 px-4 py-3">
  <Skeleton variant="flat" className="h-4 w-16" />
  <Skeleton variant="flat" className="h-4 w-24" />
  <Skeleton variant="flat" className="h-4 w-20" />
  <Skeleton variant="flat" className="h-5 w-14" />
</div>`,
    Component: SkeletonTableDemo,
  },
  "skeleton-interactive-demo": {
    title: "Loading to Loaded Toggle",
    filePath: "src/examples/skeleton-demo.tsx",
    codeSnippet: `{loading ? (
  <Skeleton shape="circle" variant="flat" className="h-11 w-11" />
) : (
  <Avatar><AvatarFallback>AM</AvatarFallback></Avatar>
)}`,
    Component: SkeletonInteractiveDemo,
  },
  "accordion-demo": {
    title: "Accordion Overview",
    filePath: "src/examples/accordion-demo.tsx",
    Component: AccordionBasicDemo,
  },
  "accordion-basic-demo": {
    title: "Basic Accordion",
    filePath: "src/examples/accordion-demo.tsx",
    codeSnippet: `<Accordion type="single" collapsible defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is Punch UI accessible?</AccordionTrigger>
    <AccordionContent>Yes, built on Radix UI primitives.</AccordionContent>
  </AccordionItem>
</Accordion>`,
    Component: AccordionBasicDemo,
  },
  "accordion-multiple-demo": {
    title: "Multiple Open",
    filePath: "src/examples/accordion-demo.tsx",
    codeSnippet: `<Accordion type="multiple" defaultValue={["deploy", "tokens"]}>
  <AccordionItem value="deploy">...</AccordionItem>
  <AccordionItem value="tokens">...</AccordionItem>
</Accordion>`,
    Component: AccordionMultipleDemo,
  },
  "accordion-variants-demo": {
    title: "Variants",
    filePath: "src/examples/accordion-demo.tsx",
    codeSnippet: `<Accordion type="single" collapsible variant="separated">...</Accordion>
<Accordion type="single" collapsible variant="flush">...</Accordion>`,
    Component: AccordionVariantsDemo,
  },
  "accordion-rich-demo": {
    title: "Icons, Badges, Disabled & No Shadow",
    filePath: "src/examples/accordion-demo.tsx",
    codeSnippet: `<Accordion type="single" collapsible noShadow>
  <AccordionItem value="cli">
    <AccordionTrigger>
      <Terminal className="h-4 w-4" strokeWidth={2.5} />
      <span>CLI &amp; Registry</span>
      <Badge variant="success" size="sm" noShadow className="ml-auto">READY</Badge>
    </AccordionTrigger>
    <AccordionContent>...</AccordionContent>
  </AccordionItem>
</Accordion>`,
    Component: AccordionRichDemo,
  },
  "toggle-group-demo": {
    title: "Toggle Group Overview",
    filePath: "src/examples/toggle-group-demo.tsx",
    Component: ToggleGroupBasicDemo,
  },
  "toggle-group-basic-demo": {
    title: "Multiple Formatting",
    filePath: "src/examples/toggle-group-demo.tsx",
    codeSnippet: `<ToggleGroup type="multiple" value={formats} onValueChange={setFormats}>
  <ToggleGroupItem value="bold" aria-label="Toggle bold"><Bold /></ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic"><Italic /></ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Toggle underline"><Underline /></ToggleGroupItem>
</ToggleGroup>`,
    Component: ToggleGroupBasicDemo,
  },
  "toggle-group-single-demo": {
    title: "Single Selection",
    filePath: "src/examples/toggle-group-demo.tsx",
    codeSnippet: `<ToggleGroup type="single" value={align} onValueChange={(v) => v && setAlign(v)}>
  <ToggleGroupItem value="left"><AlignLeft /></ToggleGroupItem>
  <ToggleGroupItem value="center"><AlignCenter /></ToggleGroupItem>
  <ToggleGroupItem value="right"><AlignRight /></ToggleGroupItem>
</ToggleGroup>`,
    Component: ToggleGroupSingleDemo,
  },
  "toggle-group-variants-demo": {
    title: "Variants",
    filePath: "src/examples/toggle-group-demo.tsx",
    codeSnippet: `<ToggleGroup type="single" variant="outline">...</ToggleGroup>
<ToggleGroup type="multiple" variant="secondary">...</ToggleGroup>`,
    Component: ToggleGroupVariantsDemo,
  },
  "toggle-group-size-demo": {
    title: "Size",
    filePath: "src/examples/toggle-group-demo.tsx",
    codeSnippet: `<ToggleGroup type="single" size="sm" variant="outline">...</ToggleGroup>
<ToggleGroup type="single" size="default" variant="outline">...</ToggleGroup>
<ToggleGroup type="single" size="lg" variant="outline">...</ToggleGroup>`,
    Component: ToggleGroupSizeDemo,
  },
  "toggle-group-states-demo": {
    title: "Disabled & No Shadow",
    filePath: "src/examples/toggle-group-demo.tsx",
    codeSnippet: `<ToggleGroupItem value="kanban" disabled>Kanban (Pro)</ToggleGroupItem>
<ToggleGroup type="multiple" variant="outline" noShadow>...</ToggleGroup>`,
    Component: ToggleGroupStatesDemo,
  },
  "rich-text-editor-demo": {
    title: "Rich Text Editor",
    filePath: "src/examples/rich-text-editor-demo.tsx",
    Component: RichTextEditorDemo,
  },
  "rich-text-editor-basic-demo": {
    title: "Basic (Full Toolbar)",
    filePath: "src/examples/rich-text-editor-demo.tsx",
    codeSnippet: `const [html, setHtml] = useState("<h2>Punch UI Release Notes</h2><p>...</p>");

<RichTextEditor
  value={html}
  onChange={setHtml}
  showCharacterCount
  placeholder="Start writing your announcement..."
/>`,
    Component: RichTextEditorBasicDemo,
  },
  "rich-text-editor-minimal-demo": {
    title: "Minimal Toolbar",
    filePath: "src/examples/rich-text-editor-demo.tsx",
    codeSnippet: `<RichTextEditor
  variant="minimal"
  size="sm"
  value={comment}
  onChange={setComment}
  maxLength={280}
  showCharacterCount
  placeholder="Write a concise reply..."
/>`,
    Component: RichTextEditorMinimalDemo,
  },
  "rich-text-editor-size-demo": {
    title: "Size",
    filePath: "src/examples/rich-text-editor-demo.tsx",
    codeSnippet: `<RichTextEditor size="sm" variant="minimal" defaultValue="<p>Compact...</p>" />
<RichTextEditor size="default" defaultValue="<p>Standard...</p>" />
<RichTextEditor size="lg" defaultValue="<p>Spacious...</p>" />`,
    Component: RichTextEditorSizeDemo,
  },
  "rich-text-editor-states-demo": {
    title: "Read-Only, Disabled, No Shadow & Error",
    filePath: "src/examples/rich-text-editor-demo.tsx",
    codeSnippet: `<RichTextEditor readOnly defaultValue={html} />
<RichTextEditor disabled size="sm" variant="minimal" defaultValue="<p>Locked</p>" />
<RichTextEditor noShadow size="sm" variant="minimal" defaultValue="<p>Flat</p>" />
<RichTextEditor error size="sm" variant="minimal" placeholder="Required..." />`,
    Component: RichTextEditorStatesDemo,
  },
  "rich-text-editor-form-demo": {
    title: "Form Integration",
    filePath: "src/examples/rich-text-editor-demo.tsx",
    codeSnippet: `<Card>
  <form onSubmit={handlePublish}>
    <CardContent className="space-y-4">
      <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      <RichTextEditor
        value={body}
        onChange={setBody}
        error={hasError}
        showCharacterCount
        maxLength={500}
      />
    </CardContent>
    <CardFooter>
      <Button type="submit" size="sm">Publish Update</Button>
    </CardFooter>
  </form>
</Card>`,
    Component: RichTextEditorFormDemo,
  },
  "file-upload-demo": {
    title: "File Upload",
    filePath: "src/examples/file-upload-demo.tsx",
    Component: FileUploadDemo,
  },
  "file-upload-basic-demo": {
    title: "Basic Dropzone",
    filePath: "src/examples/file-upload-demo.tsx",
    codeSnippet: `const [files, setFiles] = useState<File[]>([]);

<FileUpload value={files} onChange={setFiles} />`,
    Component: FileUploadBasicDemo,
  },
  "file-upload-image-demo": {
    title: "Image Upload with Preview",
    filePath: "src/examples/file-upload-demo.tsx",
    codeSnippet: `<FileUpload
  value={images}
  onChange={setImages}
  accept={{ "image/*": [".png", ".jpg", ".jpeg", ".webp"] }}
  maxSize={5 * 1024 * 1024}
  maxFiles={4}
  showPreview
  title="Drop product images here"
/>`,
    Component: FileUploadImageDemo,
  },
  "file-upload-validation-demo": {
    title: "Validation (Type, Max Size & Max Files)",
    filePath: "src/examples/file-upload-demo.tsx",
    codeSnippet: `<FileUpload
  value={docs}
  onChange={setDocs}
  accept={{
    "application/pdf": [".pdf"],
    "text/csv": [".csv"],
  }}
  maxSize={2 * 1024 * 1024}
  maxFiles={2}
/>`,
    Component: FileUploadValidationDemo,
  },
  "file-upload-compact-demo": {
    title: "Compact Variant",
    filePath: "src/examples/file-upload-demo.tsx",
    codeSnippet: `<FileUpload
  variant="compact"
  multiple={false}
  accept={{ "text/csv": [".csv"] }}
  maxSize={5 * 1024 * 1024}
  value={files}
  onChange={setFiles}
/>`,
    Component: FileUploadCompactDemo,
  },
  "file-upload-states-demo": {
    title: "Disabled, No Shadow & Error",
    filePath: "src/examples/file-upload-demo.tsx",
    codeSnippet: `<FileUpload disabled variant="compact" title="Uploads locked" />
<FileUpload noShadow variant="compact" title="Flat dropzone surface" />
<FileUpload error variant="compact" title="Please attach at least 1 file" />`,
    Component: FileUploadStatesDemo,
  },
  "empty-state-demo": {
    title: "Empty State",
    filePath: "src/examples/empty-state-demo.tsx",
    Component: EmptyStateDemo,
  },
  "empty-state-basic-demo": {
    title: "Basic Empty State",
    filePath: "src/examples/empty-state-demo.tsx",
    codeSnippet: `<EmptyState>
  <EmptyStateIcon><Inbox strokeWidth={2.5} /></EmptyStateIcon>
  <EmptyStateTitle>No projects created yet</EmptyStateTitle>
  <EmptyStateDescription>
    Kick off your workspace by creating a new project or importing a repository.
  </EmptyStateDescription>
  <EmptyStateActions>
    <Button size="sm">New Project</Button>
    <Button variant="outline" size="sm">Import CSV</Button>
  </EmptyStateActions>
</EmptyState>`,
    Component: EmptyStateBasicDemo,
  },
  "empty-state-variants-demo": {
    title: "Variants",
    filePath: "src/examples/empty-state-demo.tsx",
    codeSnippet: `<EmptyState variant="default">...</EmptyState>
<EmptyState variant="dashed">...</EmptyState>
<EmptyState variant="muted">...</EmptyState>
<EmptyState variant="ghost">...</EmptyState>`,
    Component: EmptyStateVariantsDemo,
  },
  "empty-state-size-demo": {
    title: "Size",
    filePath: "src/examples/empty-state-demo.tsx",
    codeSnippet: `<EmptyState size="sm" variant="dashed" noShadow>...</EmptyState>
<EmptyState size="default" variant="dashed" noShadow>...</EmptyState>
<EmptyState size="lg" variant="dashed" noShadow>...</EmptyState>`,
    Component: EmptyStateSizeDemo,
  },
  "empty-state-contextual-demo": {
    title: "No Shadow & Contextual",
    filePath: "src/examples/empty-state-demo.tsx",
    codeSnippet: `<EmptyState noShadow size="sm">
  <EmptyStateIcon variant="destructive" noShadow><AlertTriangle /></EmptyStateIcon>
  <EmptyStateTitle>Failed to load analytics</EmptyStateTitle>
  <EmptyStateActions>
    <Button variant="destructive" size="sm" noShadow>Retry</Button>
  </EmptyStateActions>
</EmptyState>`,
    Component: EmptyStateContextualDemo,
  },
  "kbd-demo": {
    title: "Kbd",
    filePath: "src/examples/kbd-demo.tsx",
    Component: KbdDemo,
  },
  "kbd-basic-demo": {
    title: "Basic & Key Combinations",
    filePath: "src/examples/kbd-demo.tsx",
    codeSnippet: `<KbdGroup>
  <Kbd>⌘</Kbd>
  <Kbd>K</Kbd>
</KbdGroup>

<Kbd>Esc</Kbd>`,
    Component: KbdBasicDemo,
  },
  "kbd-variants-demo": {
    title: "Variants",
    filePath: "src/examples/kbd-demo.tsx",
    codeSnippet: `<Kbd variant="default">⌘K</Kbd>
<Kbd variant="secondary">⌘S</Kbd>
<Kbd variant="primary">Enter</Kbd>
<Kbd variant="muted">Esc</Kbd>`,
    Component: KbdVariantsDemo,
  },
  "kbd-size-demo": {
    title: "Size",
    filePath: "src/examples/kbd-demo.tsx",
    codeSnippet: `<Kbd size="sm">⌘</Kbd>
<Kbd size="default">⌘</Kbd>
<Kbd size="lg">⌘</Kbd>`,
    Component: KbdSizeDemo,
  },
  "kbd-context-demo": {
    title: "Inside UI & Shortcut Cheat Sheet",
    filePath: "src/examples/kbd-demo.tsx",
    codeSnippet: `<Button variant="outline" className="justify-between">
  <span>Search documentation...</span>
  <KbdGroup>
    <Kbd size="sm" variant="secondary" noShadow>⌘</Kbd>
    <Kbd size="sm" variant="secondary" noShadow>K</Kbd>
  </KbdGroup>
</Button>`,
    Component: KbdInContextDemo,
  },
  "color-picker-demo": {
    title: "Color Picker",
    filePath: "src/examples/color-picker-demo.tsx",
    Component: ColorPickerDemo,
  },
  "color-picker-basic-demo": {
    title: "Basic Color Picker",
    filePath: "src/examples/color-picker-demo.tsx",
    codeSnippet: `const [color, setColor] = useState("#ff8a00");

<ColorPicker value={color} onChange={setColor} />`,
    Component: ColorPickerBasicDemo,
  },
  "color-picker-presets-demo": {
    title: "Custom Presets & Swatch-Only",
    filePath: "src/examples/color-picker-demo.tsx",
    codeSnippet: `<ColorPicker
  value={brandColor}
  onChange={setBrandColor}
  presets={["#3b82f6", "#06b6d4", "#10b981", "#facc15", "#ff8a00", "#dc2626"]}
/>

<ColorPicker value={tagColor} onChange={setTagColor} showHex={false} />`,
    Component: ColorPickerPresetsDemo,
  },
  "color-picker-size-demo": {
    title: "Size",
    filePath: "src/examples/color-picker-demo.tsx",
    codeSnippet: `<ColorPicker size="sm" defaultValue="#ff8a00" />
<ColorPicker size="default" defaultValue="#3b82f6" />
<ColorPicker size="lg" defaultValue="#10b981" />`,
    Component: ColorPickerSizeDemo,
  },
  "color-picker-states-demo": {
    title: "Disabled, No Shadow & Error",
    filePath: "src/examples/color-picker-demo.tsx",
    codeSnippet: `<ColorPicker disabled defaultValue="#141923" />
<ColorPicker noShadow defaultValue="#facc15" />
<ColorPicker error defaultValue="#be123c" />`,
    Component: ColorPickerStatesDemo,
  },
  "color-picker-card-demo": {
    title: "Workspace Branding Preview",
    filePath: "src/examples/color-picker-demo.tsx",
    codeSnippet: `<ColorPicker size="sm" value={accent} onChange={setAccent} className="w-full" />
<ColorPicker size="sm" value={surface} onChange={setSurface} className="w-full" />`,
    Component: ColorPickerCardDemo,
  },
  "navigation-menu-demo": {
    title: "Navigation Menu",
    filePath: "src/examples/navigation-menu-demo.tsx",
    Component: NavigationMenuDemo,
  },
  "navigation-menu-basic-demo": {
    title: "Mega Menu (Featured Card + Grid Links)",
    filePath: "src/examples/navigation-menu-demo.tsx",
    codeSnippet: `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
      <NavigationMenuContent>...</NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        Changelog
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
    Component: NavigationMenuBasicDemo,
  },
  "navigation-menu-simple-demo": {
    title: "Simple List with Icons & Badges",
    filePath: "src/examples/navigation-menu-demo.tsx",
    codeSnippet: `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="w-[240px] space-y-1">...</ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
    Component: NavigationMenuSimpleDemo,
  },
  "navigation-menu-topbar-demo": {
    title: "Topbar Context & No Shadow",
    filePath: "src/examples/navigation-menu-demo.tsx",
    codeSnippet: `<header className="flex items-center justify-between rounded-lg border-2 border-border bg-card px-4 py-2.5">
  <span>Punch Admin</span>
  <NavigationMenu noShadow>...</NavigationMenu>
  <Button size="sm" noShadow>Get Started</Button>
</header>`,
    Component: NavigationMenuTopbarDemo,
  },
  "marquee-demo": {
    title: "Marquee",
    filePath: "src/examples/marquee-demo.tsx",
    Component: MarqueeDemo,
  },
  "marquee-basic-demo": {
    title: "Basic Marquee Ticker",
    filePath: "src/examples/marquee-demo.tsx",
    codeSnippet: `<Marquee variant="secondary">
  <span>47 COMPONENTS</span>
  <span>✦</span>
  <span>6 LIVE PRESETS</span>
  <span>✦</span>
</Marquee>`,
    Component: MarqueeBasicDemo,
  },
  "marquee-variants-demo": {
    title: "Variants",
    filePath: "src/examples/marquee-demo.tsx",
    codeSnippet: `<Marquee variant="default">...</Marquee>
<Marquee variant="primary">...</Marquee>
<Marquee variant="secondary">...</Marquee>
<Marquee variant="muted">...</Marquee>`,
    Component: MarqueeVariantsDemo,
  },
  "marquee-dual-demo": {
    title: "Dual Opposite-Direction & Speed",
    filePath: "src/examples/marquee-demo.tsx",
    codeSnippet: `<Marquee variant="primary" direction="left" speed="fast">...</Marquee>
<Marquee variant="default" direction="right" speed="slow">...</Marquee>`,
    Component: MarqueeDualDemo,
  },
  "marquee-no-shadow-demo": {
    title: "No Shadow",
    filePath: "src/examples/marquee-demo.tsx",
    codeSnippet: `<Marquee variant="muted" noShadow pauseOnHover>...</Marquee>`,
    Component: MarqueeNoShadowDemo,
  },
};

export interface ComponentPreviewProps {
  name: keyof typeof DEMO_REGISTRY | string;
}

export async function ComponentPreview({ name }: ComponentPreviewProps) {
  const entry = DEMO_REGISTRY[name];

  if (!entry) {
    return (
      <div className="rounded-md border-2 border-border bg-destructive p-4 font-mono text-xs font-bold text-destructive-foreground">
        Demo &quot;{name}&quot; not found in DEMO_REGISTRY.
      </div>
    );
  }

  let rawCode = entry.codeSnippet || "";
  if (!rawCode) {
    const absolutePath = path.join(process.cwd(), entry.filePath);
    try {
      rawCode = await fs.readFile(absolutePath, "utf-8");
    } catch {
      rawCode = `// File not found: ${entry.filePath}`;
    }
  }

  const highlightedHtml = await codeToHtml(rawCode, {
    lang: "tsx",
    theme: "github-dark",
  });

  const DemoComponent = entry.Component;

  return (
    <PreviewTabs
      title={entry.title}
      filePath={entry.filePath}
      rawCode={rawCode}
      highlightedHtml={highlightedHtml}
    >
      <DemoComponent />
    </PreviewTabs>
  );
}
