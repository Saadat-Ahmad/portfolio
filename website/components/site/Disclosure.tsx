"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * A collapsible section. Turns sage when it is the active viewport section
 * or when the user hovers over it. Hero (#top) is excluded by the sidebar.
 */
export default function Disclosure({
  id,
  index,
  name,
  title,
  defaultOpen = false,
  children,
}: {
  id: string;
  index: string;
  name: string;
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const sage = isActive || isHovered;

  useEffect(() => {
    const reveal = () => {
      setOpen(true);
      setTimeout(
        () => ref.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
        80
      );
    };
    const openIfTargeted = () => {
      if (window.location.hash === `#${id}`) reveal();
    };
    // Fired by the sidebar/nav so re-clicking the current section still expands it.
    const onSectionOpen = (e: Event) => {
      if ((e as CustomEvent<string>).detail === id) reveal();
    };
    const onSectionActive = (e: Event) => {
      setIsActive((e as CustomEvent<string>).detail === id);
    };
    openIfTargeted();
    window.addEventListener("hashchange", openIfTargeted);
    window.addEventListener("section:open", onSectionOpen);
    window.addEventListener("section:active", onSectionActive);
    return () => {
      window.removeEventListener("hashchange", openIfTargeted);
      window.removeEventListener("section:open", onSectionOpen);
      window.removeEventListener("section:active", onSectionActive);
    };
  }, [id]);

  return (
    <section
      ref={ref}
      id={id}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-sage={sage || undefined}
      className={cn(
        "scroll-mt-24 border-t transition-colors duration-300",
        sage ? "border-ink bg-sage text-paper" : "border-line"
      )}
    >
      <div className="px-6 sm:px-10 lg:px-16">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          className="group flex w-full cursor-grow items-center justify-between gap-6 py-7 text-left lg:py-9"
        >
          <span className="block">
            <span
              className={cn(
                "eyebrow flex items-center gap-1.5",
                sage ? "text-paper/80" : "text-ink-soft"
              )}
            >
              <span className={sage ? "text-paper" : "text-orange"}>[</span>
              <span className={sage ? "text-paper" : "text-orange"}>{index}</span>
              <span aria-hidden>·</span>
              <span>{name}</span>
              <span className={sage ? "text-paper" : "text-orange"}>]</span>
            </span>
            <span className="mt-3 block font-serif text-3xl font-light leading-tight transition-colors group-hover:text-orange sm:text-4xl">
              {title}
            </span>
          </span>
          <span
            aria-hidden
            className={cn(
              "shrink-0 font-mono text-xl leading-none transition-transform duration-300 group-hover:scale-110",
              sage ? "text-paper" : "text-orange"
            )}
          >
            {open ? "[ - ]" : "[ + ]"}
          </span>
        </button>

        <div
          id={`${id}-panel`}
          className={cn(
            "grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
        >
          <div className="overflow-hidden">
            <div
              className={cn(
                "pb-16 pr-1 transition-opacity duration-500 lg:pb-24",
                open ? "opacity-100" : "opacity-0"
              )}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
