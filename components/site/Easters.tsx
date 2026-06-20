"use client";

import { useEffect, useState } from "react";
import { HAPPY_MAC } from "@/lib/ascii";
import { profile } from "@/lib/content";

// Module-level guard so the console greeting prints once, not twice under
// React StrictMode's double-invoked effects in development.
let greeted = false;

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

/**
 * Quiet discovery rewards: a console hello for the curious, a tab-away title
 * nudge, and a Konami-code CRT sweep. None of it touches the visible layout.
 */
export default function Easters() {
  const [crt, setCrt] = useState(false);

  useEffect(() => {
    // 1. Console hello — for the engineers who open devtools on a portfolio.
    if (!greeted) {
      greeted = true;
      console.log(
        `%c${HAPPY_MAC}`,
        "color:#c12d0d;font:11px/1.15 ui-monospace,monospace"
      );
      console.log(
        "%cyou found the console.%c\nbuilt by Syed Saadat Ahmad — full-stack & systems engineer.\nif you're hiring (or just curious), say hi:",
        "color:#c12d0d;font:600 14px ui-monospace,monospace",
        "color:#9a8f7d;font:13px/1.6 ui-monospace,monospace"
      );
      console.log(
        `%c  ${profile.email}   ·   github.com/Saadat-Ahmad`,
        "color:#c12d0d;font:600 13px ui-monospace,monospace"
      );
    }

    // 2. Tab-away title nudge — restores on return and on unmount.
    const original = document.title;
    const onVis = () => {
      document.title = document.hidden ? "← come back" : original;
    };
    document.addEventListener("visibilitychange", onVis);

    // 3. Konami code → a brief retro CRT sweep over the page.
    let pos = 0;
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (k === KONAMI[pos]) {
        pos += 1;
        if (pos === KONAMI.length) {
          pos = 0;
          setCrt(true);
        }
      } else {
        pos = k === KONAMI[0] ? 1 : 0;
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("keydown", onKey);
      document.title = original;
    };
  }, []);

  if (!crt) return null;
  return (
    <div className="crt-sweep" aria-hidden onAnimationEnd={() => setCrt(false)} />
  );
}
