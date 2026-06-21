"use client";

import { useEffect, useRef } from "react";

// Same brand stripe palette as the cursor trail (top → bottom).
const COLORS = ["#c12d0d", "#9e1d03", "#221c15"]; //orange, brick, ink

/** Top scroll-progress bar — a stripe of brand colours that fills with scroll. */
export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      const p = max > 0 ? el.scrollTop / max : 0;
      // Write straight to the DOM — no React re-render per scroll frame.
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[65] h-[12px]"
    >
      <div
        ref={barRef}
        className="flex h-full w-full origin-left flex-col"
        style={{ transform: "scaleX(0)" }}
      >
        {COLORS.map((c, i) => (
          <span key={i} className="block w-full flex-1" style={{ backgroundColor: c }} />
        ))}
      </div>
    </div>
  );
}
