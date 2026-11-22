import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

/**
 * Overview demo
 */
export function SeparatorDemo() {
  return <SeparatorBasicDemo />;
}

/**
 * 1. Horizontal & Vertical
 */
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
}

/**
 * 2. Variant (solid, dashed, dotted, muted)
 */
export function SeparatorVariantDemo() {
  return (
    <div className="w-full max-w-md space-y-5">
      <div className="space-y-1.5">
        <span className="font-mono text-xs font-bold">solid (default)</span>
        <Separator variant="solid" />
      </div>
      <div className="space-y-1.5">
        <span className="font-mono text-xs font-bold">dashed</span>
        <Separator variant="dashed" />
      </div>
      <div className="space-y-1.5">
        <span className="font-mono text-xs font-bold">dotted</span>
        <Separator variant="dotted" />
      </div>
      <div className="space-y-1.5">
        <span className="font-mono text-xs font-bold">muted</span>
        <Separator variant="muted" />
      </div>
    </div>
  );
}

/**
 * 3. Thickness (thin, default, thick)
 */
export function SeparatorThicknessDemo() {
  return (
    <div className="w-full max-w-md space-y-5">
      <div className="space-y-1.5">
        <span className="font-mono text-xs font-bold">thin (1px)</span>
        <Separator thickness="thin" />
      </div>
      <div className="space-y-1.5">
        <span className="font-mono text-xs font-bold">default (2px)</span>
        <Separator thickness="default" />
      </div>
      <div className="space-y-1.5">
        <span className="font-mono text-xs font-bold">thick (4px)</span>
        <Separator thickness="thick" />
      </div>
    </div>
  );
}

/**
 * 4. With Label
 */
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
}

/**
 * 5. Inside List / Menu
 */
export function SeparatorListDemo() {
  return (
    <Card className="w-full max-w-sm p-4">
      <div className="flex items-center justify-between py-2 text-xs">
        <span className="font-bold">API Gateway</span>
        <Badge variant="success" size="sm" noShadow>
          99.99%
        </Badge>
      </div>
      <Separator variant="muted" thickness="thin" />
      <div className="flex items-center justify-between py-2 text-xs">
        <span className="font-bold">Worker Queue</span>
        <Badge variant="info" size="sm" noShadow>
          Syncing
        </Badge>
      </div>
      <Separator variant="muted" thickness="thin" />
      <div className="flex items-center justify-between py-2 text-xs">
        <span className="font-bold">Webhook Relay</span>
        <Badge variant="warning" size="sm" noShadow>
          Degraded
        </Badge>
      </div>
    </Card>
  );
}
