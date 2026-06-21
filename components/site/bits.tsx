"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { HAPPY_MAC, WINKING_MAC } from "@/lib/ascii";

/** Monospace eyebrow, e.g. [ 01 · EXPERIENCE ] */
export function SectionLabel({
  index,
  children,
  className,
}: {
  index?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("eyebrow flex items-center gap-1.5", className)}>
      <span className="text-orange">[</span>
      {index && <span className="text-orange">{index}</span>}
      {index && <span aria-hidden>·</span>}
      <span>{children}</span>
      <span className="text-orange">]</span>
    </p>
  );
}

/** Friendly ASCII machine. Pass any art; caller controls colour via className. */
export function AsciiArt({
  art = HAPPY_MAC,
  className,
}: {
  art?: string;
  className?: string;
}) {
  return (
    <pre
      aria-hidden
      className={cn(
        "select-none whitespace-pre font-mono leading-[1.05]",
        className
      )}
    >
      {art}
    </pre>
  );
}

/** Happy Mac that blinks (a quick wink) on an interval. Static under reduced motion. */
export function WinkingMac({
  className,
  interval = 3000,
}: {
  className?: string;
  interval?: number;
}) {
  const [winking, setWinking] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let off: ReturnType<typeof setTimeout>;
    const blink = setInterval(() => {
      setWinking(true);
      off = setTimeout(() => setWinking(false), 200);
    }, interval);
    return () => {
      clearInterval(blink);
      clearTimeout(off);
    };
  }, [interval]);

  return <AsciiArt art={winking ? WINKING_MAC : HAPPY_MAC} className={className} />;
}
