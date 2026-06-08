"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ArrowDownToLine,
  PanelLeftOpen,
  PanelLeftClose,
} from "lucide-react";
import { nav, socials, profile } from "@/lib/content";
import PixelMac from "@/components/site/PixelMac";
import { cn } from "@/lib/utils";

/** Logo square only (used in the collapsed rail). */
function LogoMark() {
  return (
    <Link
      href="#top"
      aria-label={profile.shortName}
      className="group grid h-9 w-9 place-items-center border border-ink bg-paper-2 text-ink transition-colors hover:bg-orange hover:text-paper"
    >
      <PixelMac size={20} />
    </Link>
  );
}

function Wordmark() {
  return (
    <Link href="#top" className="group flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center border border-ink bg-paper-2 text-ink transition-colors group-hover:bg-orange group-hover:text-paper">
        <PixelMac size={20} />
      </span>
      <span className="leading-tight">
        <span className="block font-serif text-base">{profile.shortName}</span>
        <span className="block font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink-soft">
          {profile.role}
        </span>
      </span>
    </Link>
  );
}

function ToggleBtn({
  collapsed,
  onClick,
}: {
  collapsed: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      aria-expanded={!collapsed}
      className="grid h-8 w-8 shrink-0 place-items-center border border-ink bg-paper-2 text-ink transition-colors hover:bg-orange hover:text-paper"
    >
      {collapsed ? (
        <PanelLeftOpen className="h-4 w-4" />
      ) : (
        <PanelLeftClose className="h-4 w-4" />
      )}
    </button>
  );
}

/** Full text nav (expanded sidebar + mobile drawer). */
function NavList({ active, onNavigate }: { active: string; onNavigate?: () => void }) {
  return (
    <ul className="space-y-1">
      {nav.map((item, i) => {
        const isActive = active === item.id;
        return (
          <li key={item.id}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "group flex items-center gap-3 border border-transparent px-2 py-1.5 font-mono text-sm transition-colors",
                isActive
                  ? "border-ink bg-ink text-paper"
                  : "text-ink hover:border-line hover:bg-paper-2"
              )}
            >
              <span
                className={cn(
                  "text-xs",
                  isActive ? "text-orange" : "text-ink-soft group-hover:text-orange"
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="tracking-wide">{item.label}</span>
              {isActive && <span className="ml-auto text-orange">←</span>}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

/** Compact numbered nav with hover labels (collapsed rail). */
function NavRail({ active }: { active: string }) {
  return (
    <ul className="flex flex-col items-center gap-1.5">
      {nav.map((item, i) => {
        const isActive = active === item.id;
        return (
          <li key={item.id}>
            <Link
              href={item.href}
              aria-label={item.label}
              className={cn(
                "group/navitem relative grid h-9 w-9 place-items-center border font-mono text-xs transition-colors",
                isActive
                  ? "border-ink bg-ink text-orange"
                  : "border-transparent text-ink-soft hover:border-line hover:bg-paper-2 hover:text-orange"
              )}
            >
              {String(i + 1).padStart(2, "0")}
              <span className="pointer-events-none absolute left-full ml-2 hidden whitespace-nowrap border border-ink bg-paper-2 px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink shadow-[3px_3px_0_0_var(--color-ink)] group-hover/navitem:block">
                {item.label}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function Footer() {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-x-3 gap-y-1.5">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-ink-soft underline-offset-4 transition-colors hover:text-orange hover:underline"
          >
            {s.short}
          </a>
        ))}
      </div>
      <a
        href={profile.resume}
        download
        className="inline-flex w-full items-center justify-center gap-2 border border-ink bg-paper-2 px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] transition-colors hover:bg-orange hover:text-paper"
      >
        <ArrowDownToLine className="h-3.5 w-3.5" /> Résumé
      </a>
    </div>
  );
}

export default function Sidebar() {
  const [active, setActive] = useState("top");
  const [open, setOpen] = useState(false); // mobile drawer
  const [collapsed, setCollapsed] = useState(true); // desktop rail, default collapsed

  // Drive the main content offset (consumed by <main> in app/page.tsx).
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--sidebar-w",
      collapsed ? "4rem" : "16rem"
    );
  }, [collapsed]);

  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => !!el);

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // lock scroll while mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Desktop sidebar (collapsible) */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 hidden flex-col justify-between border-r border-ink bg-paper py-7 transition-[width] duration-300 ease-out lg:flex",
          collapsed ? "w-16 items-center px-2" : "w-64 px-5"
        )}
      >
        {/* top: brand + toggle */}
        {collapsed ? (
          <div className="flex flex-col items-center gap-3">
            <LogoMark />
            <ToggleBtn collapsed onClick={() => setCollapsed(false)} />
          </div>
        ) : (
          <div className="flex items-start justify-between gap-2">
            <Wordmark />
            <ToggleBtn collapsed={false} onClick={() => setCollapsed(true)} />
          </div>
        )}

        {/* nav */}
        <nav className={collapsed ? "" : "flex-1 pt-10"}>
          {collapsed ? (
            <NavRail active={active} />
          ) : (
            <>
              <p className="eyebrow mb-3 px-2">Index</p>
              <NavList active={active} />
            </>
          )}
        </nav>

        {/* footer */}
        {collapsed ? (
          <a
            href={profile.resume}
            download
            aria-label="Résumé"
            className="group/navitem relative grid h-9 w-9 place-items-center border border-ink bg-paper-2 text-ink transition-colors hover:bg-orange hover:text-paper"
          >
            <ArrowDownToLine className="h-4 w-4" />
            <span className="pointer-events-none absolute left-full ml-2 hidden whitespace-nowrap border border-ink bg-paper-2 px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink shadow-[3px_3px_0_0_var(--color-ink)] group-hover/navitem:block">
              Résumé
            </span>
          </a>
        ) : (
          <Footer />
        )}
      </aside>

      {/* Mobile top bar */}
      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-ink bg-paper px-4 py-3 lg:hidden">
        <Wordmark />
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="grid h-9 w-9 cursor-grow place-items-center border border-ink bg-paper-2 hover:bg-orange hover:text-paper"
        >
          <Menu className="h-5 w-5" />
        </button>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            aria-label="Close menu"
            className="absolute inset-0 bg-ink/40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 flex w-[80%] max-w-xs flex-col justify-between border-l border-ink bg-paper px-5 py-7">
            <div>
              <div className="flex items-center justify-between">
                <p className="eyebrow">Index</p>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="grid h-9 w-9 place-items-center border border-ink bg-paper-2 hover:bg-orange hover:text-paper"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="pt-6">
                <NavList active={active} onNavigate={() => setOpen(false)} />
              </nav>
            </div>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}
