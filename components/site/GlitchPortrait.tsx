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

  return (
    <div
      className={cn(
        "gp cursor-grow relative aspect-[4/5] overflow-hidden bg-paper-deep"
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

      
      
    </div>
  );
}
