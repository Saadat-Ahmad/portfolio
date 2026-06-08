"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * The hero portrait: a warm duotone photo that corrupts into ASCII renders.
 * Bursts once every 5s, and glitches continuously while hovered.
 */
export default function GlitchPortrait() {
  const [burst, setBurst] = useState(false); // one-shot, on the 5s timer
  const [hovering, setHovering] = useState(false); // continuous, while hovered

  useEffect(() => {
    if (prefersReduced()) return;
    let out: ReturnType<typeof setTimeout>;
    const iv = setInterval(() => {
      setBurst(true);
      out = setTimeout(() => setBurst(false), 720);
    }, 5000);
    return () => {
      clearInterval(iv);
      clearTimeout(out);
    };
  }, []);

  const glitching = burst || hovering;

  return (
    <div
      onMouseEnter={() => !prefersReduced() && setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={cn(
        "gp cursor-grow relative aspect-[4/5] overflow-hidden bg-paper-deep",
        glitching && "is-glitching",
        hovering && "is-glitching--loop"
      )}
    >
      {/* base duotone photo */}
      <Image
        src="/profile.jpg"
        alt="Syed Saadat Ahmad"
        fill
        priority
        sizes="(max-width: 1024px) 90vw, 420px"
        className="gp-photo object-cover object-top grayscale contrast-[1.08] sepia-[0.18]"
      />
      <div className="pointer-events-none absolute inset-0 bg-orange/20 mix-blend-multiply" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brick/35 via-transparent to-transparent mix-blend-multiply" />

      {/* torn-slice copy (glitch only) */}
      <Image
        src="/profile.jpg"
        alt=""
        aria-hidden
        fill
        sizes="420px"
        className="gp-tear object-cover object-top grayscale contrast-[1.25]"
      />

      {/* ascii renders (glitch only) */}
      <Image
        src="/asciiProfile.png"
        alt=""
        aria-hidden
        fill
        sizes="420px"
        className="gp-ascii object-cover object-top"
      />
      <Image
        src="/asciiProfileInverted.png"
        alt=""
        aria-hidden
        fill
        sizes="420px"
        className="gp-ascii gp-ascii--inv object-cover object-top"
      />

      {/* scanlines */}
      <div className="gp-scan pointer-events-none absolute inset-0" />
    </div>
  );
}
