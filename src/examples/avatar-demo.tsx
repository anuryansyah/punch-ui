"use client";

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

/**
 * Overview demo
 */
export function AvatarDemo() {
  return <AvatarBasicDemo />;
}

/**
 * 1. Basic & Image Fallback
 */
export function AvatarBasicDemo() {
  return (
    <div className="flex flex-col items-center gap-5">
      {/* Circle */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Avatar>
          <AvatarImage
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=128&h=128&fit=crop"
            alt="Sarah Connor"
          />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>

        {/* Fallback when image URL fails */}
        <Avatar>
          <AvatarImage src="/broken-avatar.png" alt="Alex Morgan" />
          <AvatarFallback>AM</AvatarFallback>
        </Avatar>

        {/* Initials only */}
        <Avatar>
          <AvatarFallback>PU</AvatarFallback>
        </Avatar>
      </div>

      {/* Square */}
      <div className="flex flex-wrap items-center justify-center gap-4">
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
}

/**
 * 2. Size (sm, default, lg, xl)
 */
export function AvatarSizeDemo() {
  return (
    <div className="flex flex-col items-center gap-5">
      {/* Circle */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Avatar size="sm">
          <AvatarFallback>SM</AvatarFallback>
        </Avatar>
        <Avatar size="default">
          <AvatarFallback>MD</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>LG</AvatarFallback>
        </Avatar>
        <Avatar size="xl">
          <AvatarFallback>XL</AvatarFallback>
        </Avatar>
      </div>

      {/* Square */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Avatar shape="square" size="sm">
          <AvatarFallback>SM</AvatarFallback>
        </Avatar>
        <Avatar shape="square" size="default">
          <AvatarFallback>MD</AvatarFallback>
        </Avatar>
        <Avatar shape="square" size="lg">
          <AvatarFallback>LG</AvatarFallback>
        </Avatar>
        <Avatar shape="square" size="xl">
          <AvatarFallback>XL</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

/**
 * 3. Shape (Circle vs Square)
 */
export function AvatarShapeDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5">
      <div className="flex items-center gap-2.5">
        <Avatar shape="circle">
          <AvatarFallback>AM</AvatarFallback>
        </Avatar>
        <span className="font-mono text-xs font-bold">circle (User)</span>
      </div>

      <div className="flex items-center gap-2.5">
        <Avatar shape="square">
          <AvatarFallback className="bg-primary text-primary-foreground">
            PU
          </AvatarFallback>
        </Avatar>
        <span className="font-mono text-xs font-bold">square (Workspace)</span>
      </div>
    </div>
  );
}

/**
 * 4. Fallback Color
 */
export function AvatarColorDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Avatar>
        <AvatarFallback className="bg-primary text-primary-foreground">
          PR
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-secondary text-secondary-foreground">
          SC
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-card text-card-foreground">
          CD
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-muted text-foreground">MT</AvatarFallback>
      </Avatar>
    </div>
  );
}

/**
 * 5. With Status Badge
 */
export function AvatarBadgeDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5">
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
}

/**
 * 6. Avatar Group
 */
export function AvatarGroupDemo() {
  return (
    <div className="flex flex-col items-center gap-5">
      {/* Circle Group */}
      <AvatarGroup>
        <Avatar noShadow>
          <AvatarFallback className="bg-primary text-primary-foreground">
            AM
          </AvatarFallback>
        </Avatar>
        <Avatar noShadow>
          <AvatarFallback className="bg-secondary text-secondary-foreground">
            JD
          </AvatarFallback>
        </Avatar>
        <Avatar noShadow>
          <AvatarFallback className="bg-card text-card-foreground">
            KL
          </AvatarFallback>
        </Avatar>
        <Avatar noShadow>
          <AvatarFallback className="bg-muted text-foreground">
            +4
          </AvatarFallback>
        </Avatar>
      </AvatarGroup>

      {/* Square Group */}
      <AvatarGroup>
        <Avatar shape="square" noShadow>
          <AvatarFallback className="bg-primary text-primary-foreground">
            AM
          </AvatarFallback>
        </Avatar>
        <Avatar shape="square" noShadow>
          <AvatarFallback className="bg-secondary text-secondary-foreground">
            JD
          </AvatarFallback>
        </Avatar>
        <Avatar shape="square" noShadow>
          <AvatarFallback className="bg-card text-card-foreground">
            KL
          </AvatarFallback>
        </Avatar>
        <Avatar shape="square" noShadow>
          <AvatarFallback className="bg-muted text-foreground">
            +4
          </AvatarFallback>
        </Avatar>
      </AvatarGroup>
    </div>
  );
}

/**
 * 7. User Profile Row
 */
export function AvatarProfileDemo() {
  return (
    <div className="flex w-full max-w-xs items-center justify-between gap-3 rounded-lg border-2 border-border bg-card p-3.5 shadow-brutal-sm">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback className="bg-primary text-primary-foreground">
            AM
          </AvatarFallback>
          <AvatarBadge status="online" badgeSize="sm" />
        </Avatar>
        <div>
          <p className="text-sm font-bold leading-tight">Alex Morgan</p>
          <p className="font-mono text-xs text-muted-foreground">
            alex@punch-ui.dev
          </p>
        </div>
      </div>
      <Badge variant="secondary" size="sm" noShadow>
        Admin
      </Badge>
    </div>
  );
}

/**
 * 8. No Shadow
 */
export function AvatarNoShadowDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Avatar noShadow>
        <AvatarFallback>AM</AvatarFallback>
      </Avatar>
      <Avatar shape="square" noShadow>
        <AvatarFallback className="bg-primary text-primary-foreground">
          PU
        </AvatarFallback>
      </Avatar>
    </div>
  );
}
