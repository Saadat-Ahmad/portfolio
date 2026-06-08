import * as React from "react";
import { cn } from "@/lib/utils";

type Tone = "paper" | "inset" | "sage" | "brick";

const tones: Record<Tone, string> = {
  paper: "bg-paper-2 text-ink",
  inset: "bg-paper-deep text-ink",
  sage: "bg-sage text-paper",
  brick: "bg-brick text-paper",
};

/** The three Susan-Kare-style window control squares. Inherit currentColor. */
function WindowControls() {
  const box = "grid h-3.5 w-3.5 place-items-center border border-current";
  return (
    <div className="flex items-center gap-1.5" aria-hidden>
      <span className={box}>
        <svg viewBox="0 0 10 10" className="h-2 w-2">
          <path d="M2 2 L8 8 M8 2 L2 8" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </span>
      <span className={box}>
        <span className="h-1.5 w-1.5 bg-current" />
      </span>
      <span className={box}>
        <span className="h-[1.4px] w-2 bg-current" />
      </span>
    </div>
  );
}

export default function MacWindow({
  title,
  tone = "paper",
  controls = true,
  className,
  bodyClassName,
  titleRight,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  title?: string;
  tone?: Tone;
  controls?: boolean;
  bodyClassName?: string;
  titleRight?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "border border-ink shadow-[5px_5px_0_0_var(--color-ink)]",
        tones[tone],
        className
      )}
      {...props}
    >
      {(title || controls) && (
        <div className="flex items-center gap-3 border-b border-ink px-3 py-2">
          {controls && <WindowControls />}
          {title && (
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] leading-none">
              {title}
            </span>
          )}
          {titleRight && <div className="ml-auto">{titleRight}</div>}
        </div>
      )}
      <div className={cn("p-4", bodyClassName)}>{children}</div>
    </div>
  );
}
