"use client";

import React from "react";
import {
  AlertTriangle,
  FolderPlus,
  Inbox,
  RefreshCw,
  SearchX,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  EmptyState,
  EmptyStateActions,
  EmptyStateDescription,
  EmptyStateIcon,
  EmptyStateTitle,
} from "@/components/ui/empty-state";

/**
 * Overview demo
 */
export function EmptyStateDemo() {
  return <EmptyStateBasicDemo />;
}

/**
 * 1. Basic Empty State
 */
export function EmptyStateBasicDemo() {
  return (
    <div className="w-full max-w-lg">
      <EmptyState>
        <EmptyStateIcon>
          <Inbox strokeWidth={2.5} />
        </EmptyStateIcon>
        <EmptyStateTitle>No projects created yet</EmptyStateTitle>
        <EmptyStateDescription>
          Kick off your workspace by creating a new project or importing an
          existing repository.
        </EmptyStateDescription>
        <EmptyStateActions>
          <Button size="sm">
            <FolderPlus className="h-4 w-4" strokeWidth={2.5} />
            New Project
          </Button>
          <Button variant="outline" size="sm">
            <Upload className="h-4 w-4" strokeWidth={2.5} />
            Import CSV
          </Button>
        </EmptyStateActions>
      </EmptyState>
    </div>
  );
}

/**
 * 2. Variants (default, dashed, muted, ghost)
 */
export function EmptyStateVariantsDemo() {
  return (
    <div className="grid w-full max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2">
      <EmptyState variant="default" size="sm">
        <EmptyStateIcon>
          <Inbox strokeWidth={2.5} />
        </EmptyStateIcon>
        <EmptyStateTitle>Default</EmptyStateTitle>
        <EmptyStateDescription>
          Solid bordered card with hard shadow.
        </EmptyStateDescription>
      </EmptyState>

      <EmptyState variant="dashed" size="sm">
        <EmptyStateIcon variant="primary">
          <FolderPlus strokeWidth={2.5} />
        </EmptyStateIcon>
        <EmptyStateTitle>Dashed</EmptyStateTitle>
        <EmptyStateDescription>
          Dashed outline for placeholder slots.
        </EmptyStateDescription>
      </EmptyState>

      <EmptyState variant="muted" size="sm">
        <EmptyStateIcon variant="muted">
          <SearchX strokeWidth={2.5} />
        </EmptyStateIcon>
        <EmptyStateTitle>Muted</EmptyStateTitle>
        <EmptyStateDescription>
          Subtle tinted panel for secondary areas.
        </EmptyStateDescription>
      </EmptyState>

      <EmptyState variant="ghost" size="sm">
        <EmptyStateIcon noShadow>
          <Inbox strokeWidth={2.5} />
        </EmptyStateIcon>
        <EmptyStateTitle>Ghost</EmptyStateTitle>
        <EmptyStateDescription>
          Borderless, ideal inside tables or modals.
        </EmptyStateDescription>
      </EmptyState>
    </div>
  );
}

/**
 * 3. Size (sm, default, lg)
 */
export function EmptyStateSizeDemo() {
  return (
    <div className="w-full max-w-xl space-y-5">
      <EmptyState size="sm" variant="dashed" noShadow>
        <EmptyStateTitle>Small (sm)</EmptyStateTitle>
        <EmptyStateDescription>
          Compact spacing for table empty rows or sidebars.
        </EmptyStateDescription>
      </EmptyState>

      <EmptyState size="default" variant="dashed" noShadow>
        <EmptyStateIcon>
          <Inbox strokeWidth={2.5} />
        </EmptyStateIcon>
        <EmptyStateTitle>Default</EmptyStateTitle>
        <EmptyStateDescription>
          Balanced vertical rhythm for dashboard sections.
        </EmptyStateDescription>
      </EmptyState>

      <EmptyState size="lg" variant="dashed" noShadow>
        <EmptyStateIcon variant="primary">
          <FolderPlus strokeWidth={2.5} />
        </EmptyStateIcon>
        <EmptyStateTitle>Large (lg)</EmptyStateTitle>
        <EmptyStateDescription>
          Generous canvas for full-page zero states.
        </EmptyStateDescription>
      </EmptyState>
    </div>
  );
}

/**
 * 4. Contextual States (No Results & Error)
 */
export function EmptyStateContextualDemo() {
  return (
    <div className="grid w-full max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2">
      <EmptyState variant="default" noShadow size="sm">
        <EmptyStateIcon variant="muted" noShadow>
          <SearchX strokeWidth={2.5} />
        </EmptyStateIcon>
        <EmptyStateTitle>No matching records</EmptyStateTitle>
        <EmptyStateDescription>
          Try clearing active filters or searching a different keyword.
        </EmptyStateDescription>
        <EmptyStateActions>
          <Button variant="outline" size="sm" noShadow>
            Reset Filters
          </Button>
        </EmptyStateActions>
      </EmptyState>

      <EmptyState variant="default" noShadow size="sm">
        <EmptyStateIcon variant="destructive" noShadow>
          <AlertTriangle strokeWidth={2.5} />
        </EmptyStateIcon>
        <EmptyStateTitle>Failed to load analytics</EmptyStateTitle>
        <EmptyStateDescription>
          The server timed out while fetching workspace metrics.
        </EmptyStateDescription>
        <EmptyStateActions>
          <Button variant="destructive" size="sm" noShadow>
            <RefreshCw className="h-3.5 w-3.5" strokeWidth={2.5} />
            Retry
          </Button>
        </EmptyStateActions>
      </EmptyState>
    </div>
  );
}
