"use client";

import { useEffect, useRef } from "react";

/**
 * Minimal editorial cursor: an ink ring that lags behind a precise orange dot.
 * Grows + tints over interactive elements. Desktop / fine-pointer only.
 */
export default function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    document.body.classList.add("has-cursor");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const ring = ringRef.current;
    const dot = dotRef.current;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot) {
        dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
        dot.style.opacity = "1";
      }
      if (ring) ring.style.opacity = "1";

      const target = e.target as Element | null;
      const interactive = !!target?.closest?.(
        'a, button, [role="button"], input, textarea, select, .cursor-grow'
      );
      ring?.classList.toggle("is-hover", interactive);
    };

    const onLeave = () => {
      if (ring) ring.style.opacity = "0";
      if (dot) dot.style.opacity = "0";
    };

    const tick = () => {
      rx += (mx - rx) * 0.2;
      ry += (my - ry) * 0.2;
      if (ring) {
        ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
      document.body.classList.remove("has-cursor");
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" style={{ opacity: 0 }} aria-hidden />
      <div ref={dotRef} className="cursor-dot" style={{ opacity: 0 }} aria-hidden />
    </>
  );
}
