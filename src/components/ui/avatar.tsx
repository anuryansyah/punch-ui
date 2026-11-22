"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const brutalAvatarStyles = cva(
  "relative flex shrink-0 select-none items-center justify-center border-2 border-border bg-secondary text-secondary-foreground",
  {
    variants: {
      size: {
        sm: "h-8 w-8 text-[10px]",
        default: "h-10 w-10 text-xs",
        lg: "h-12 w-12 text-sm",
        xl: "h-16 w-16 text-base",
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-md",
      },
      noShadow: {
        true: "shadow-none",
        false: "shadow-brutal-sm",
      },
    },
    defaultVariants: {
      size: "default",
      shape: "circle",
      noShadow: false,
    },
  }
);

export interface AvatarProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof brutalAvatarStyles> {
  noShadow?: boolean;
}

/**
 * Avatar Neobrutalism — mendukung bentuk bulat (default) dan kotak (square)
 * untuk kebutuhan profil pengguna maupun logo workspace.
 */
export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, size, shape, noShadow = false, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn(brutalAvatarStyles({ size, shape, noShadow }), className)}
      {...rest}
    />
  )
);
Avatar.displayName = "Avatar";

export const AvatarImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, alt = "", onError, ...rest }, ref) => {
  const [hasError, setHasError] = React.useState(false);

  if (hasError) {
    return null;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      alt={alt}
      onError={(e) => {
        setHasError(true);
        onError?.(e);
      }}
      className={cn(
        "relative z-10 aspect-square h-full w-full rounded-[inherit] object-cover",
        className
      )}
      {...rest}
    />
  );
});
AvatarImage.displayName = "AvatarImage";

export const AvatarFallback = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...rest }, ref) => (
  <span
    ref={ref}
    className={cn(
      "absolute inset-0 flex h-full w-full items-center justify-center rounded-[inherit] bg-secondary font-mono font-bold uppercase text-secondary-foreground",
      className
    )}
    {...rest}
  />
));
AvatarFallback.displayName = "AvatarFallback";

const brutalAvatarBadgeStyles = cva(
  "absolute -bottom-0.5 -right-0.5 z-20 rounded-full border-2 border-border",
  {
    variants: {
      status: {
        online: "bg-success",
        busy: "bg-destructive",
        away: "bg-warning",
        offline: "bg-muted",
      },
      badgeSize: {
        sm: "h-2.5 w-2.5",
        default: "h-3.5 w-3.5",
        lg: "h-4 w-4",
      },
    },
    defaultVariants: {
      status: "online",
      badgeSize: "default",
    },
  }
);

export interface AvatarBadgeProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof brutalAvatarBadgeStyles> {}

export const AvatarBadge = React.forwardRef<HTMLSpanElement, AvatarBadgeProps>(
  ({ className, status, badgeSize, ...rest }, ref) => (
    <span
      ref={ref}
      aria-label={status || "status"}
      className={cn(brutalAvatarBadgeStyles({ status, badgeSize }), className)}
      {...rest}
    />
  )
);
AvatarBadge.displayName = "AvatarBadge";

export const AvatarGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...rest }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center -space-x-3", className)}
    {...rest}
  />
));
AvatarGroup.displayName = "AvatarGroup";

export { brutalAvatarStyles as avatarVariants };
