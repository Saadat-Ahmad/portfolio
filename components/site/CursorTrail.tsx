"use client";

import { useEffect, useRef } from "react";

/**
 * Rainbow cursor trail — a port of tholman/cursor-effects `rainbowCursor`,
 * recolored to the brand palette and made chunky. A chain of points
 * spring-follows the cursor; each color is drawn as a band offset along the
 * stack. Desktop / fine-pointer only, disabled under prefers-reduced-motion.
 */

const COLORS = ["#b85a05", "#c12d0d", "#9e1d03", "#221c15", "#9dbeb7"]; // gold, orange, brick, ink, teal
const LENGTH = 20; // points in the trailing chain
const SIZE = 7; // band thickness — chunky/blocky

type Pt = { x: number; y: number };

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const cursor = { x: width / 2, y: height / 2 };
    const particles: Pt[] = [];
    let raf = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
    };
    resize();

    for (let i = 0; i < LENGTH; i++) particles.push({ x: cursor.x, y: cursor.y });

    const onMove = (e: MouseEvent) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    };

    // Center the stacked bands on the chain so the ribbon isn't lopsided.
    const center = ((COLORS.length - 1) * (SIZE - 1)) / 2;

    const update = () => {
      ctx.clearRect(0, 0, width, height);

      // Spring the chain toward the cursor (head leads, tail lags).
      let x = cursor.x;
      let y = cursor.y;
      particles.forEach((p, i) => {
        const next = particles[i + 1] || particles[0];
        p.x = x;
        p.y = y;
        x += (next.x - p.x) * 0.4;
        y += (next.y - p.y) * 0.4;
      });

      // Draw each color as a band offset down the stack.
      COLORS.forEach((color, index) => {
        const off = index * (SIZE - 1) - center;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = SIZE;
        ctx.moveTo(particles[0].x, particles[0].y + off);
        for (let i = 1; i < particles.length; i++) {
          ctx.lineTo(particles[i].x, particles[i].y + off);
        }
        ctx.stroke();
      });

      raf = requestAnimationFrame(update);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[69]"
    />
  );
}
