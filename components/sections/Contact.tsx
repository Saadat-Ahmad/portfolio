import Link from "next/link";
import { ArrowDownToLine, ArrowUpRight, ArrowUp } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import CopyEmail from "@/components/site/CopyEmail";
import { PROMPT } from "@/lib/ascii";
import PixelMac from "@/components/site/PixelMac";
import { profile, socials } from "@/lib/content";

export default function Contact() {
  const year = 2026;
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-ink bg-brick text-paper"
    >
      <div className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <PixelMac
          size={220}
          className="pointer-events-none absolute -right-8 -top-8 z-0 hidden text-paper/10 sm:block"
        />
        <Reveal className="relative z-10">
          {/* <SectionLabel index="05" className="text-paper">
            Contact
          </SectionLabel> */}
          <h2 className="mt-6 max-w-3xl font-serif text-5xl font-light leading-[0.95] sm:text-6xl lg:text-7xl">
            Let&apos;s{" "}
            <span className="italic text-paper">build</span> together.
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-paper/85">
            Open to internships, full-time roles, and the occasional weird
            side project. Email reaches me the fastest. : &#10223;
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <CopyEmail
              variant="solid"
              className="border-paper bg-paper text-ink hover:bg-transparent hover:text-paper"
            />
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 border border-paper px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              <ArrowDownToLine className="h-3.5 w-3.5" /> Résumé
            </a>
          </div>

          {/* socials */}
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-paper/30 pt-8">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-serif text-2xl text-paper/90 transition-colors hover:text-paper sm:text-3xl"
              >
                {s.label}
                <ArrowUpRight className="h-4 w-4 -translate-y-1 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100" />
              </a>
            ))}
          </div>

          {/* ascii sign-off */}
          <pre
            aria-hidden
            className="mt-12 bg-brick select-none overflow-x-auto font-mono text-xs text-paper/80"
          >
            {PROMPT}
            <span className="term-cursor"/>
          </pre>
        </Reveal>
      </div>

      {/* footer bar */}
      <footer className="border-t border-paper/30 px-6 py-6 sm:px-10 lg:px-16">
        <div className="flex flex-col items-center justify-between gap-3 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-paper/70 sm:flex-row">
          <span className="inline-flex items-center gap-1.5 text-m">
              <PixelMac size={25} /> {profile.name} · {year} 
            </span>
          <span className="hidden sm:inline">React · Next.js ·  Tailwind</span>
          <Link href="#top" className="inline-flex items-center gap-1.5 hover:text-paper">
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </Link>
        </div>
      </footer>
    </section>
  );
}
