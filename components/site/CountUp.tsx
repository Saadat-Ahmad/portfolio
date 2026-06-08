"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts a numeric value up from zero when it scrolls into view.
 * Preserves the original string's width (e.g. "04" stays zero-padded).
 */
export default function CountUp({
  value,
  duration = 1300,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const digits = value.replace(/\D/g, "");
  const target = parseInt(digits || "0", 10);
  const pad = digits.length;
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(target);
      return;
    }
    let raf = 0;
    let started = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        io.disconnect();
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
          setN(Math.round(eased * target));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration]);

  return (
    <span ref={ref} className={className}>
      {String(n).padStart(pad, "0")}
    </span>
  );
}
