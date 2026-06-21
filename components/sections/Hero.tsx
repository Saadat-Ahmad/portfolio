import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MacWindow from "@/components/ui/MacWindow";
import Reveal from "@/components/site/Reveal";
import CopyEmail from "@/components/site/CopyEmail";
import Portrait from "@/components/site/Portrait";
import PixelMac from "@/components/site/PixelMac";
import { SectionLabel, WinkingMac } from "@/components/site/bits";
import { profile } from "@/lib/content";

const WORDMARK = "it's saadat";

export default function Hero() {
  // Per-letter stagger. Each word is an unbreakable flex item, so the phrase
  // wraps word-by-word (never mid-word) and never overflows narrow screens.
  let k = 0;
  const wordmark = WORDMARK.split(" ").map((word, wi, arr) => {
    const isLast = wi === arr.length - 1;
    return (
      <span key={wi} className="whitespace-nowrap">
        {word.split("").map((ch, ci) => (
          <span
            key={ci}
            className="hero-char inline-block"
            style={{ animationDelay: `${(k++) * 55}ms` }}
          >
            {ch}
          </span>
        ))}
        {isLast && (
          <span
            className="hero-dot inline-block text-orange"
            style={{ animationDelay: `${k * 55 + 60}ms` }}
          >
            .
          </span>
        )}
      </span>
    );
  });

  return (
    <section
      id="top"
      className="relative scroll-mt-24 px-6 pb-20 pt-20 sm:px-10 lg:px-16 lg:pb-24 lg:pt-24"
    >
      {/* ── masthead ─────────────────────────────────────────── */}
      <Reveal className="relative z-10">
        <div className="mb-12 flex items-center justify-between gap-4 pb-4 lg:mb-16">

            <span className="inline-flex items-center gap-1 -mt-10">
              <PixelMac size={35} className="text-orange" />
              <SectionLabel className="text-xl">Hello, World</SectionLabel>
            </span>
        </div>
      </Reveal>

      <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* ── left ─────────────────────────────────────────────── */}
        <div className="min-w-0">
          <h1 className="font-serif font-light leading-[0.85] tracking-tight">
            <span className="flex flex-wrap items-baseline gap-x-[0.2em] text-[clamp(4.5rem,2rem+9vw,9rem)]">
              {wordmark}
            </span>
          </h1>

          <Reveal delay={150} className="mt-6">
            <p className="max-w-md font-mono text-sm uppercase tracking-[0.12em] text-ink-soft">
              {profile.role}{" "}
              <span className="text-orange">·</span> {profile.location}
            </p>

            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink/85">
              {profile.intro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#work"
              className="press group inline-flex items-center gap-2 border border-ink bg-ink px-5 py-2.5 font-mono text-xs uppercase tracking-[0.12em] text-paper transition hover:bg-orange"
            >
              View work{" "}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <CopyEmail />
          </div>

          <div className="mt-8 flex items-center gap-2.5 font-mono text-xs text-ink-soft">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange" />
            </span>
            Currently building @{" "}
            <a
              href={profile.current.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline-offset-4 hover:text-orange hover:underline"
            >
              {profile.current.label}
            </a>
          </div>
          </Reveal>
        </div>

        {/* ── right ────────────────────────────────────────────── */}
        <Reveal delay={120} className="relative">
          <WinkingMac className="pointer-events-none absolute -top-14 right-0 hidden rotate-3 text-[10px] leading-[1.04] text-orange/75 lg:block" />

          <MacWindow
            title="~/saadat/portrait.jpg"
            tone="inset"
            className="relative mx-auto max-w-sm lg:ml-auto lg:mr-0"
            bodyClassName="p-0"
          >
            <Portrait />
            <div className="flex items-center justify-between border-t border-ink bg-paper-2 px-3 py-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-soft">
              <span>{profile.name}</span>
              <span className="text-orange">{profile.location}</span>
            </div>
          </MacWindow>
        </Reveal>
      </div>
    </section>
  );
}
