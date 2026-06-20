"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { profile } from "@/lib/content";
import { cn } from "@/lib/utils";

export default function CopyEmail({
  className,
  variant = "outline",
}: {
  className?: string;
  variant?: "outline" | "solid";
}) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  const flash = (next: "copied" | "error") => {
    setStatus(next);
    setTimeout(() => setStatus("idle"), next === "copied" ? 1800 : 5000);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      flash("copied");
      return;
    } catch {
      /* fall through to legacy path below */
    }
    // Fallback for non-secure contexts where the async clipboard API is blocked.
    try {
      const ta = document.createElement("textarea");
      ta.value = profile.email;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      flash(ok ? "copied" : "error");
    } catch {
      // Last resort: surface the address so the visitor can copy it by hand.
      flash("error");
    }
  };

  return (
    <button
      onClick={copy}
      aria-live="polite"
      className={cn(
        "press inline-flex items-center gap-2 border border-ink px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] transition",
        variant === "solid"
          ? "bg-ink text-paper hover:bg-orange"
          : "bg-transparent text-ink hover:bg-ink hover:text-paper",
        className
      )}
    >
      {status === "copied" ? (
        <>
          <Check className="copy-pop h-3.5 w-3.5" /> Copied
        </>
      ) : status === "error" ? (
        // Clipboard blocked: show the address so it can still be copied by hand.
        <span className="lowercase tracking-normal">{profile.email}</span>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">{profile.email}</span>
          <span className="sm:hidden">Copy email</span>
        </>
      )}
    </button>
  );
}
