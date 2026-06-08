import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, ArrowDownToLine, Check } from "lucide-react";
import MacWindow from "@/components/ui/MacWindow";
import PixelMac from "@/components/site/PixelMac";
import { projects, profile } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.title} · Syed Saadat Ahmad`,
    description: p.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  const idx = projects.findIndex((x) => x.slug === slug);
  const tone = idx % 2 === 0 ? "sage" : "brick";
  const panelBg = tone === "sage" ? "bg-sage" : "bg-brick";
  const external = p.links.filter((l) => l.label !== "About");

  return (
    <main className="min-h-screen pb-0">
      {/* slim header */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-ink bg-paper px-5 py-3 sm:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center border border-ink bg-paper-2 transition-colors group-hover:bg-orange group-hover:text-paper">
            <PixelMac size={18} />
          </span>
          <span className="font-serif text-base">{profile.shortName}</span>
        </Link>
        <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.12em]">
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 text-ink-soft hover:text-orange"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All work
          </Link>
          <a
            href={profile.resume}
            download
            className="hidden items-center gap-1.5 border border-ink px-3 py-1.5 hover:bg-orange hover:text-paper sm:inline-flex"
          >
            <ArrowDownToLine className="h-3.5 w-3.5" /> Résumé
          </a>
        </div>
      </header>

      {/* intro */}
      <article className="mx-auto max-w-5xl px-6 py-14 sm:px-8 lg:py-20">
        <nav className="font-mono text-xs uppercase tracking-[0.12em] text-ink-soft">
          <Link href="/" className="hover:text-orange">
            home
          </Link>{" "}
          <span className="text-line">/</span>{" "}
          <Link href="/#work" className="hover:text-orange">
            work
          </Link>{" "}
          <span className="text-line">/</span>{" "}
          <span className="text-orange">{p.slug}</span>
        </nav>

        <h1 className="mt-6 font-serif text-5xl font-light leading-none sm:text-7xl">
          {p.title}
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.1em] text-ink-soft">
          <span>{p.year}</span>
          <span className="text-line">·</span>
          {p.tags.map((t, i) => (
            <span key={t}>
              {t}
              {i < p.tags.length - 1 && <span className="ml-3 text-line">·</span>}
            </span>
          ))}
        </div>

        <p className="mt-8 max-w-2xl font-serif text-xl font-light leading-relaxed text-ink/85 sm:text-2xl">
          {p.overview}
        </p>

        <MacWindow
          title={p.window}
          bodyClassName="p-0"
          className="mt-12"
          titleRight={
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-soft">
              screenshot
            </span>
          }
        >
          <div className="relative aspect-[4/3] bg-paper-deep">
            <Image
              src={p.image}
              alt={`${p.title} screenshot`}
              fill
              sizes="(max-width: 1024px) 92vw, 880px"
              className="object-contain"
            />
          </div>
        </MacWindow>
      </article>

      {/* colored highlight panel */}
      <section className={`${panelBg} border-y border-ink text-paper`}>
        <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-paper/70">
            [ highlights ]
          </p>

          <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {p.highlights.map((h) => (
              <div key={h.n} className="border-t border-paper/30 pt-4">
                <span className="font-serif text-3xl text-paper/60">{h.n}</span>
                <h3 className="mt-2 font-serif text-xl">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/80">
                  {h.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-10 border-t border-paper/30 pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-paper/70">
                What it does
              </p>
              <ul className="mt-4 space-y-2.5">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-paper/90">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-paper" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              {external.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-paper bg-paper px-5 py-2.5 font-mono text-xs uppercase tracking-[0.12em] text-ink transition-colors hover:bg-transparent hover:text-paper"
                >
                  {l.label} <ArrowUpRight className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* footer back */}
      <div className="mx-auto max-w-5xl px-6 py-12 sm:px-8">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-ink-soft hover:text-orange"
        >
          <ArrowLeft className="h-4 w-4" /> Back to all work
        </Link>
      </div>
    </main>
  );
}
