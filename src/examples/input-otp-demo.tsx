"use client";

import * as React from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  REGEXP_ONLY_DIGITS,
  REGEXP_ONLY_DIGITS_AND_CHARS,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";

export function InputOTPBasicDemo() {
  const [value, setValue] = React.useState("482910");

  return (
    <div className="mx-auto flex flex-col items-center gap-3">
      <InputOTP
        maxLength={6}
        value={value}
        onChange={setValue}
        pattern={REGEXP_ONLY_DIGITS}
      >
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
      </InputOTP>
      <p className="font-mono text-xs text-muted-foreground">
        Entered code:{" "}
        <span className="font-bold text-foreground">{value || "empty"}</span>
      </p>
    </div>
  );
}

export function InputOTPPatternDemo() {
  const [voucher, setVoucher] = React.useState("PNCH26");
  const [pin, setPin] = React.useState("7391");

  return (
    <div className="mx-auto flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Label>Alphanumeric Code (REGEXP_ONLY_DIGITS_AND_CHARS)</Label>
        <InputOTP
          maxLength={6}
          value={voucher}
          onChange={(next) => setVoucher(next.toUpperCase())}
          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <div className="flex flex-col items-center gap-2">
        <Label>Masked 4-Digit Security PIN</Label>
        <InputOTP
          maxLength={4}
          value={pin}
          onChange={setPin}
          pattern={REGEXP_ONLY_DIGITS}
          masked
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </div>
  );
}

export function InputOTPSizeDemo() {
  return (
    <div className="mx-auto flex flex-col items-center gap-5">
      <div className="flex flex-col items-center gap-1.5">
        <Label>Small (sm)</Label>
        <InputOTP maxLength={4} defaultValue="1234" otpSize="sm">
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <div className="flex flex-col items-center gap-1.5">
        <Label>Default</Label>
        <InputOTP maxLength={4} defaultValue="5678" otpSize="default">
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <div className="flex flex-col items-center gap-1.5">
        <Label>Large (lg)</Label>
        <InputOTP maxLength={4} defaultValue="9012" otpSize="lg">
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </div>
  );
}

export function InputOTPStatesDemo() {
  return (
    <div className="mx-auto flex flex-col items-center gap-5">
      <div className="flex flex-col items-center gap-1.5">
        <Label>Success</Label>
        <InputOTP maxLength={4} defaultValue="2026" state="success">
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <div className="flex flex-col items-center gap-1.5">
        <Label>Error</Label>
        <InputOTP maxLength={4} defaultValue="00" state="error">
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <div className="flex flex-col items-center gap-1.5">
        <Label>Disabled</Label>
        <InputOTP maxLength={4} defaultValue="8842" disabled>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <div className="flex flex-col items-center gap-1.5">
        <Label>No Shadow (Flat)</Label>
        <InputOTP maxLength={4} defaultValue="4096" noShadow>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </div>
  );
}

export function InputOTPCardDemo() {
  const [code, setCode] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "error" | "verified">(
    "idle"
  );

  function handleVerify(event: React.FormEvent) {
    event.preventDefault();
    if (code.length < 6) {
      setStatus("error");
      return;
    }
    setStatus("verified");
  }

  return (
    <Card className="mx-auto w-full max-w-md">
      <form onSubmit={handleVerify}>
        <CardHeader>
          <div className="flex items-center justify-between gap-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <ShieldCheck className="h-5 w-5" strokeWidth={2.5} />
              Verify Login Code
            </CardTitle>
            {status === "verified" && (
              <Badge variant="success" noShadow>
                VERIFIED
              </Badge>
            )}
          </div>
          <CardDescription>
            Enter the 6-digit verification code sent to alex@punch-ui.dev.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col items-center gap-3">
          <InputOTP
            maxLength={6}
            value={code}
            onChange={(next) => {
              setCode(next);
              if (status !== "idle") setStatus("idle");
            }}
            pattern={REGEXP_ONLY_DIGITS}
            state={
              status === "error"
                ? "error"
                : status === "verified"
                  ? "success"
                  : "default"
            }
          >
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
          </InputOTP>

          {status === "error" && (
            <p className="font-mono text-xs font-bold text-destructive">
              Please enter all 6 digits before continuing.
            </p>
          )}
          {status === "verified" && (
            <p className="flex items-center gap-1.5 font-mono text-xs font-bold text-success">
              <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2.5} />
              Code {code} verified successfully.
            </p>
          )}
        </CardContent>

        <CardFooter className="flex items-center justify-between gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => {
              setCode("123456");
              setStatus("idle");
            }}
          >
            Fill Demo Code
          </Button>
          <Button type="submit" size="sm">
            Verify Code
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
