import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import MacWindow from "@/components/ui/MacWindow";
import Disclosure from "@/components/site/Disclosure";
import { projects } from "@/lib/content";

export default function Work() {
  return (
    <Disclosure id="work" index="03" name="Work" title="Things I've built.">
      <div className="mb-8 flex justify-end">
        <a
          href="https://github.com/Saadat-Ahmad"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-ink-soft underline-offset-4 hover:text-orange hover:underline"
        >
          <Github className="h-4 w-4" /> See all on GitHub
        </a>
      </div>

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => {
          const external = p.links.find((l) => l.label !== "About");
          return (
            <MacWindow
              key={p.slug}
              title={p.window}
              bodyClassName="p-0"
              className="flex h-full flex-col transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_var(--color-orange)]"
            >
              <Link
                href={`/work/${p.slug}`}
                className="group relative block aspect-square overflow-hidden border-b border-ink bg-paper-deep"
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 360px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center border border-ink bg-paper text-ink opacity-0 transition-opacity group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>

              <div className="flex flex-1 flex-col p-4">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-serif text-2xl leading-none">{p.title}</h3>
                  <span className="font-mono text-[0.65rem] text-ink-soft">
                    {p.year}
                  </span>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-ink/75">
                  {p.tagline}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-line px-1.5 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.08em] text-ink-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-4 border-t border-line pt-3 font-mono text-xs">
                  <Link
                    href={`/work/${p.slug}`}
                    className="text-ink underline-offset-4 hover:text-orange hover:underline"
                  >
                    Case study →
                  </Link>
                  {external && (
                    <a
                      href={external.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto inline-flex items-center gap-1 text-ink-soft underline-offset-4 hover:text-orange hover:underline"
                    >
                      {external.label} <ArrowUpRight className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            </MacWindow>
          );
        })}
      </div>
    </Disclosure>
  );
}
