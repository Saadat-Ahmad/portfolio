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
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <button
      onClick={copy}
      className={cn(
        "inline-flex items-center gap-2 border border-ink px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] transition-colors",
        variant === "solid"
          ? "bg-ink text-paper hover:bg-orange"
          : "bg-transparent text-ink hover:bg-ink hover:text-paper",
        className
      )}
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5" /> Copied
        </>
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
