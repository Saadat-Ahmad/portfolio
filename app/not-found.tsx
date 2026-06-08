import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import MacWindow from "@/components/ui/MacWindow";
import { AsciiArt } from "@/components/site/bits";
import { SAD_MAC } from "@/lib/ascii";

export const metadata = {
  title: "404 · Not found",
};

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 py-16">
      <div className="w-full max-w-md text-center">
        <MacWindow title="~/404" className="text-left">
          <AsciiArt
            art={SAD_MAC}
            className="mx-auto w-fit text-[12px] leading-[1.05] text-ink-soft"
          />
          <div className="mt-6 border-t border-line pt-5 text-center">
            <p className="font-serif text-5xl leading-none">404</p>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-ink-soft">
              file not found
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink/80">
              This page wandered off the grid. Let&apos;s get you back home.
            </p>
          </div>
        </MacWindow>

        <Link
          href="/"
          className="mt-7 inline-flex items-center gap-2 border border-ink bg-ink px-5 py-2.5 font-mono text-xs uppercase tracking-[0.12em] text-paper transition-colors hover:bg-orange"
        >
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>
      </div>
    </main>
  );
}
