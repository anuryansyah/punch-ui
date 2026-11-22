import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  CheckCircle2,
  Flame,
  Lock,
  Sparkles,
  TrendingUp,
} from "lucide-react";

/**
 * Overview demo
 */
export function BadgeDemo() {
  return <BadgeVariantDemo />;
}

/**
 * 1. Variant (Theme Variants)
 */
export function BadgeVariantDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="muted">Muted</Badge>
    </div>
  );
}

/**
 * 2. Status Variant (Semantic Status)
 */
export function BadgeStatusDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge variant="success">Paid</Badge>
      <Badge variant="info">Processing</Badge>
      <Badge variant="warning">Pending</Badge>
      <Badge variant="danger">Failed</Badge>
    </div>
  );
}

/**
 * 3. Size (sm, default, lg)
 */
export function BadgeSizeDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge size="sm">Small</Badge>
      <Badge size="default">Default</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  );
}

/**
 * 4. With Icon
 */
export function BadgeWithIconDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
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
}

/**
 * 5. With Status Dot
 */
export function BadgeDotDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge variant="success" dot>
        Online
      </Badge>
      <Badge variant="info" dot>
        Syncing
      </Badge>
      <Badge variant="warning" dot>
        Degraded
      </Badge>
      <Badge variant="danger" dot>
        Offline
      </Badge>
    </div>
  );
}

/**
 * 6. Counter Badge
 */
export function BadgeCounterDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
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
}

/**
 * 7. Clickable / Link Badge (asChild)
 */
export function BadgeLinkDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
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
      <Badge
        asChild
        variant="outline"
        className="cursor-pointer hover:bg-muted active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
      >
        <a href="#docs">
          Documentation
          <ArrowUpRight strokeWidth={2.5} />
        </a>
      </Badge>
    </div>
  );
}

/**
 * 8. No Shadow
 */
export function BadgeNoShadowDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge noShadow>Default Flat</Badge>
      <Badge variant="secondary" noShadow>
        Secondary Flat
      </Badge>
      <Badge variant="success" noShadow>
        Success Flat
      </Badge>
      <Badge variant="danger" noShadow>
        Danger Flat
      </Badge>
    </div>
  );
}
