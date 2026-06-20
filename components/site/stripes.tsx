import { cn } from "@/lib/utils";

/* ──────────────────────────────────────────────────────────────────────
   Retro 70s-poster stripe motif. Colors are the brand tokens, so the
   film-grain overlay (z-60, multiply) lands on top and gives them the
   printed-poster texture from the references. All decorative: aria-hidden
   + pointer-events-none, placed in negative space only.
   ────────────────────────────────────────────────────────────────────── */

/** Warm→cool order for light (paper) surfaces. */
const ON_PAPER = [
  "var(--color-orange-deep)", // gold
  "var(--color-orange)",
  "var(--color-brick)",
  "var(--color-ink)",
  "var(--color-sage)",
];

/** For dark surfaces (brick Contact): drop ink, use cream so stripes read. */
const ON_DARK = [
  "var(--color-orange-deep)",
  "var(--color-orange)",
  "var(--color-paper)",
  "var(--color-sage)",
];

type Corner = "tr" | "tl" | "br" | "bl";

/** Sweeping concentric arcs anchored to a corner (the "923" treatment). */
export function StripeArc({
  className,
  corner = "tr",
  tone = "paper",
  band = 26,
  gap = 9,
  drawIn = false,
}: {
  className?: string;
  corner?: Corner;
  tone?: "paper" | "dark";
  band?: number;
  gap?: number;
  drawIn?: boolean;
}) {
  const seq = tone === "dark" ? ON_DARK : ON_PAPER;
  const S = 400;
  const cx = corner === "tr" || corner === "br" ? S : 0;
  const cy = corner === "br" || corner === "bl" ? S : 0;
  const outer = S * 0.96;

  return (
    <svg
      viewBox={`0 0 ${S} ${S}`}
      className={cn("stripe-arc", drawIn && "stripe-arc--draw", className)}
      fill="none"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
    >
      {seq.map((c, i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={outer - i * (band + gap)}
          stroke={c}
          strokeWidth={band}
          pathLength={1}
          style={{ ["--i" as string]: i }}
        />
      ))}
    </svg>
  );
}

/** Parallel lines that run horizontally and bend down once (the "Sunny" treatment). */
export function StripeFlow({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "paper" | "dark";
}) {
  const seq = tone === "dark" ? ON_DARK : ON_PAPER;
  const W = 1200;
  const H = 320;
  const sw = 18;
  const gap = 8;
  const baseY = 70;
  const drop = 92;
  const x1 = 620;
  const r = 26;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={cn("stripe-flow", className)}
      fill="none"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
    >
      {seq.map((c, i) => {
        const y0 = baseY + i * (sw + gap);
        const y1 = y0 + drop;
        const d = `M -40 ${y0} H ${x1 - r} Q ${x1} ${y0} ${x1} ${y0 + r} V ${y1 - r} Q ${x1} ${y1} ${x1 + r} ${y1} H ${W + 40}`;
        return (
          <path
            key={i}
            d={d}
            stroke={c}
            strokeWidth={sw}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

/** Slim stacked multi-stripe band for section dividers (restrained). */
export function StripeRule({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("flex w-full flex-col", className)}>
      {ON_PAPER.map((c, i) => (
        <span key={i} className="h-[1.5px] w-full" style={{ background: c }} />
      ))}
    </div>
  );
}
