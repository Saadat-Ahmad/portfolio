import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MacWindow from "@/components/ui/MacWindow";
import Reveal from "@/components/site/Reveal";
import CopyEmail from "@/components/site/CopyEmail";
import GlitchPortrait from "@/components/site/GlitchPortrait";
import { SectionLabel, AsciiArt } from "@/components/site/bits";
import { profile } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative scroll-mt-24 px-6 pb-20 pt-20 sm:px-10 lg:px-16 lg:pb-24 lg:pt-24"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* ── left ─────────────────────────────────────────────── */}
        <Reveal>
          <SectionLabel>Hello, World</SectionLabel>

          <h1 className="mt-6 font-serif font-light leading-[0.85] tracking-tight">
            <span className="block text-7xl sm:text-8xl lg:text-[7.5rem] xl:text-[9rem]">
              Saadat<span className="text-orange">.</span>
            </span>
          </h1>

          <p className="mt-6 max-w-md font-mono text-sm uppercase tracking-[0.12em] text-ink-soft">
            {profile.role}{" "}
            <span className="text-orange">·</span> {profile.location}
          </p>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink/85">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#work"
              className="inline-flex items-center gap-2 border border-ink bg-ink px-5 py-2.5 font-mono text-xs uppercase tracking-[0.12em] text-paper transition-colors hover:bg-orange"
            >
              View work <ArrowRight className="h-4 w-4" />
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

        {/* ── right ────────────────────────────────────────────── */}
        <Reveal delay={120} className="relative">
          <AsciiArt className="pointer-events-none absolute -top-14 right-0 hidden rotate-3 text-[10px] leading-[1.04] text-ink-soft/75 lg:block" />

          <MacWindow
            title="~/saadat/portrait.jpg"
            className="relative mx-auto max-w-sm lg:ml-auto lg:mr-0"
            bodyClassName="p-0"
          >
            <GlitchPortrait />
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
