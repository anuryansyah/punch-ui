"use client";

import * as React from "react";
import {
  OTPInput,
  OTPInputContext,
  REGEXP_ONLY_CHARS,
  REGEXP_ONLY_DIGITS,
  REGEXP_ONLY_DIGITS_AND_CHARS,
} from "input-otp";
import { cva, type VariantProps } from "class-variance-authority";
import { Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export { REGEXP_ONLY_CHARS, REGEXP_ONLY_DIGITS, REGEXP_ONLY_DIGITS_AND_CHARS };

const inputOTPSlotVariants = cva(
  "relative flex select-none items-center justify-center rounded-md border-2 bg-card font-mono font-black text-card-foreground transition-[transform,box-shadow,background-color,border-color]",
  {
    variants: {
      otpSize: {
        sm: "h-9 w-9 text-sm",
        default: "h-11 w-11 text-base",
        lg: "h-14 w-14 text-xl",
      },
      state: {
        default: "border-border shadow-brutal-sm",
        error: "shadow-brutal-error-sm border-destructive",
        success: "shadow-brutal-success-sm border-success",
      },
      noShadow: {
        true: "!shadow-none",
        false: "",
      },
    },
    defaultVariants: {
      otpSize: "default",
      state: "default",
      noShadow: false,
    },
  }
);

interface InputOTPStyleContextValue extends VariantProps<
  typeof inputOTPSlotVariants
> {
  noShadow?: boolean;
  masked?: boolean;
}

const InputOTPStyleContext = React.createContext<InputOTPStyleContextValue>({
  otpSize: "default",
  state: "default",
  noShadow: false,
  masked: false,
});

export type InputOTPProps = React.ComponentPropsWithoutRef<typeof OTPInput> &
  VariantProps<typeof inputOTPSlotVariants> & {
    noShadow?: boolean;
    masked?: boolean;
  };

/**
 * Neobrutalist InputOTP root powered by input-otp with per-slot borders and hard shadows.
 */
export const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  InputOTPProps
>(
  (
    {
      className,
      containerClassName,
      otpSize = "default",
      state = "default",
      noShadow = false,
      masked = false,
      value: valueProp,
      defaultValue,
      onChange,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(() =>
      typeof defaultValue === "string" ? defaultValue : ""
    );

    const isControlled = valueProp !== undefined;
    const currentValue = isControlled ? valueProp : internalValue;

    function handleChange(nextValue: string) {
      if (!isControlled) {
        setInternalValue(nextValue);
      }
      onChange?.(nextValue);
    }

    return (
      <InputOTPStyleContext.Provider
        value={{ otpSize, state, noShadow, masked }}
      >
        <OTPInput
          ref={ref}
          value={currentValue}
          onChange={handleChange}
          containerClassName={cn(
            "flex items-center gap-2 has-[:disabled]:opacity-50",
            containerClassName
          )}
          className={cn("disabled:cursor-not-allowed", className)}
          {...props}
        />
      </InputOTPStyleContext.Provider>
    );
  }
);
InputOTP.displayName = "InputOTP";

/**
 * Grouping wrapper for InputOTPSlot boxes.
 */
export const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-2", className)}
    {...props}
  />
));
InputOTPGroup.displayName = "InputOTPGroup";

export interface InputOTPSlotProps extends React.ComponentPropsWithoutRef<"div"> {
  index: number;
}

/**
 * Individual Neobrutalist digit box with active lift, shadow, and blinking caret.
 */
export const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  InputOTPSlotProps
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { otpSize, state, noShadow, masked } =
    React.useContext(InputOTPStyleContext);
  const slot = inputOTPContext.slots[index];

  if (!slot) {
    return null;
  }

  const { char, hasFakeCaret, isActive } = slot;

  return (
    <div
      ref={ref}
      data-active={isActive || undefined}
      className={cn(
        inputOTPSlotVariants({ otpSize, state, noShadow }),
        isActive &&
          state === "default" &&
          "z-10 -translate-y-0.5 bg-secondary text-secondary-foreground shadow-brutal",
        isActive &&
          state === "error" &&
          "shadow-brutal-error z-10 -translate-y-0.5",
        isActive &&
          state === "success" &&
          "shadow-brutal-success z-10 -translate-y-0.5",
        className
      )}
      {...props}
    >
      {char ? (
        masked ? (
          <span
            aria-hidden="true"
            className="h-2.5 w-2.5 rounded-full bg-current"
          />
        ) : (
          char
        )
      ) : null}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-5 w-0.5 animate-pulse bg-current" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = "InputOTPSlot";

/**
 * Visual separator between InputOTPGroup blocks.
 */
export const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    role="separator"
    className={cn(
      "flex items-center justify-center text-foreground",
      className
    )}
    {...props}
  >
    <Minus className="h-4 w-4" strokeWidth={3} />
  </div>
));
InputOTPSeparator.displayName = "InputOTPSeparator";
