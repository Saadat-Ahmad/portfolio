"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import PixelMac from "@/components/site/PixelMac";
import { StripeRule } from "@/components/site/stripes";

export default function Disclosure({
  id,
  name,
  title,
  defaultOpen = false,
  tintOnHover = true,
  divider = "line",
  children,
}: {
  id: string;
  name: string;
  title: string;
  defaultOpen?: boolean;
  tintOnHover?: boolean;
  divider?: "line" | "stripe";
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  // id of whichever section is currently hovered (broadcast globally), so only
  // one section is ever tinted sage at a time.
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const ref = useRef<HTMLElement>(null);

  const isHovered = hoveredId === id;

  // Experience runs its content edge-to-edge (its rows manage their own
  // padding for the full-bleed hover); every other section keeps the standard
  // inset. The header stays inset in all cases so the titles stay aligned.
  const contentPad =
    id === "experience" ? "px-0" : "px-6 sm:px-10 lg:px-16";

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
    const onSectionOpen = (e: Event) => {
      if ((e as CustomEvent<string>).detail === id) reveal();
    };
    const onSectionHover = (e: Event) => {
      setHoveredId((e as CustomEvent<string | null>).detail);
    };
    openIfTargeted();
    window.addEventListener("hashchange", openIfTargeted);
    window.addEventListener("section:open", onSectionOpen);
    window.addEventListener("section:hover", onSectionHover);
    return () => {
      window.removeEventListener("hashchange", openIfTargeted);
      window.removeEventListener("section:open", onSectionOpen);
      window.removeEventListener("section:hover", onSectionHover);
    };
  }, [id]);

  return (
    <section
      ref={ref}
      id={id}
      onMouseEnter={() =>
        window.dispatchEvent(new CustomEvent("section:hover", { detail: id }))
      }
      onMouseLeave={() =>
        window.dispatchEvent(new CustomEvent("section:hover", { detail: null }))
      }
      className={cn(
        "scroll-mt-24 transition-colors duration-300",
        divider === "line" && "border-t border-line",
        tintOnHover && isHovered && "bg-sage"
      )}
    >
      {divider === "stripe" && <StripeRule />}

      {/* header — always inset so section titles align across the page */}
      <div className="px-6 sm:px-10 lg:px-16 hover:bg-sage">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          className="group flex w-full cursor-grow items-center justify-between gap-6 py-7 text-left lg:py-9"
        >
          <span className="block">
            <span className="eyebrow flex items-center gap-1.5">
              <PixelMac size={18} className="text-orange mr-4" />
              <span className="text-orange">[</span>
              <span>{name}</span>
              <span className="text-orange">]</span>
            </span>
            <span className="mt-3 block text-balance font-serif text-3xl font-light leading-tight transition-colors group-hover:text-orange sm:text-4xl">
              {title}
            </span>
          </span>
          <span
            aria-hidden
            className="shrink-0 font-mono text-xl leading-none text-orange transition-transform duration-300 group-hover:scale-110 group-active:scale-90"
          >
            {open ? "[ - ]" : "[ + ]"}
          </span>
        </button>
      </div>

      {/* content — px-0 for experience (full-bleed rows), inset otherwise */}
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
              contentPad,
              "pb-16 transition-opacity duration-500 lg:pb-24",
              open ? "opacity-100" : "opacity-0"
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
