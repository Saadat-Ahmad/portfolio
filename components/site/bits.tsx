import { cn } from "@/lib/utils";
import { HAPPY_MAC } from "@/lib/ascii";

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

/** Hairline rule with terminal-style end caps and an optional center label. */
export function Rule({
  label,
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3 text-ink-soft", className)}>
      <span className="font-mono text-xs text-orange">+</span>
      <span className="h-px flex-1 bg-line" />
      {label && (
        <span className="eyebrow whitespace-nowrap px-1">{label}</span>
      )}
      {label && <span className="h-px flex-1 bg-line" />}
      <span className="font-mono text-xs text-orange">+</span>
    </div>
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
