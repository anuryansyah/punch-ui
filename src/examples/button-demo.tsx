import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  ArrowRight,
  Bell,
  CheckCircle2,
  Download,
  Info,
  Plus,
  Send,
  Settings,
  Trash2,
} from "lucide-react";

/**
 * Overview preview for /docs catalog page
 */
export function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="noShadow">No Shadow</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="success">Success</Button>
      <Button variant="info">Info</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
    </div>
  );
}

/**
 * 1. Variant (Default, Success, Info, Warning, Danger)
 */
export function ButtonStatusDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
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
}

/**
 * 2. Size (sm, default, lg, icon)
 */
export function ButtonSizeDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" aria-label="Add item">
        <Plus className="h-4 w-4" strokeWidth={2.5} />
      </Button>
    </div>
  );
}

/**
 * 3. Default
 */
export function ButtonDefaultDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button variant="default">Save Changes</Button>
    </div>
  );
}

/**
 * 4. Secondary
 */
export function ButtonSecondaryDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button variant="secondary">Export Report</Button>
    </div>
  );
}

/**
 * 5. Outline
 */
export function ButtonOutlineDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button variant="outline">Cancel</Button>
    </div>
  );
}

/**
 * 6. No Shadow
 */
export function ButtonNoShadowDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button noShadow>Apply Filter</Button>
      <Button variant="secondary" noShadow>
        Archive
      </Button>
      <Button variant="outline" noShadow>
        Dismiss
      </Button>
      <Button variant="danger" noShadow>
        Delete
      </Button>
    </div>
  );
}

/**
 * 7. Ghost
 */
export function ButtonGhostDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button variant="ghost">Reset Filter</Button>
    </div>
  );
}

/**
 * 8. With Icon (Left, Right, Both)
 */
export function ButtonWithIconDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
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
}

/**
 * 9. Icon
 */
export function ButtonIconDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
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
}

/**
 * 10. Disable
 */
export function ButtonDisabledDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button variant="default" disabled>
        Save Changes
      </Button>
      <Button variant="secondary" disabled>
        Export Report
      </Button>
      <Button variant="outline" disabled>
        Cancel
      </Button>
    </div>
  );
}

/**
 * 11. Spinner
 */
export function ButtonSpinnerDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button isLoading>Processing...</Button>
      <Button variant="secondary" isLoading loadingText="Uploading...">
        Upload File
      </Button>
      <Button variant="success" isLoading loadingText="Saving..." />
    </div>
  );
}
