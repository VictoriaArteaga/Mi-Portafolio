"use client";

import { useState } from "react";
import { useT } from "@/lib/prefs";
import { ArrowRight } from "./Icons";
import Controls from "./Controls";

export const sections = ["#inicio", "#sobre-mi", "#experiencia", "#proyectos", "#testimonios", "#contacto"];

export function Logo({ className = "" }: { className?: string }) {
  const t = useT();
  return (
    <a href="#inicio" className={`group inline-flex flex-col leading-none ${className}`} aria-label={t.nav.home}>
      <span className="font-script text-4xl text-terracota transition-transform duration-200 ease-out-strong group-active:scale-95 dark:text-tangerine">
        Victoria
      </span>
      <span className="-mt-1 self-end text-[0.6rem] font-semibold tracking-[0.35em] text-cream/80">ARTEAGA</span>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const t = useT();
  const links = sections.map((href, i) => ({ href, label: t.nav.links[i] }));

  return (
    <header className="sticky top-0 z-50 bg-ink text-cream dark:border-b dark:border-cream/10 dark:bg-night dark:text-moon">
      <nav className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-6 px-5 sm:px-8" aria-label={t.nav.label}>
        <Logo />

        <ul className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative py-2 text-cream/85 transition-colors duration-150 hover:text-terracota dark:text-moon/85 dark:hover:text-tangerine after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-terracota after:transition-transform after:duration-200 after:ease-out-strong hover:after:scale-x-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden items-center gap-2 rounded-full bg-terracota px-5 py-2.5 text-sm font-semibold text-white transition-[transform,background-color] duration-150 ease-out-strong hover:bg-tangerine active:scale-[0.97] lg:inline-flex"
        >
          {t.nav.cta}
          <ArrowRight className="size-4" />
        </a>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
        <Controls />
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          className="relative grid size-11 place-items-center rounded-full transition-transform duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tangerine active:scale-90 lg:hidden"
        >
          <span className={`absolute h-0.5 w-5 rounded-full bg-cream transition-transform duration-200 ease-out-strong ${open ? "rotate-45" : "-translate-y-1.5"}`} />
          <span className={`absolute h-0.5 w-5 rounded-full bg-cream transition-opacity duration-150 ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`absolute h-0.5 w-5 rounded-full bg-cream transition-transform duration-200 ease-out-strong ${open ? "-rotate-45" : "translate-y-1.5"}`} />
        </button>
        </div>
      </nav>

      <div
        id="menu-movil"
        className={`absolute inset-x-0 top-full origin-top border-t border-cream/10 bg-ink px-5 pb-6 pt-2 shadow-xl transition-[opacity,transform] duration-200 ease-out-strong dark:bg-night lg:hidden ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <ul className="flex flex-col">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-lg font-medium text-cream/90 transition-colors hover:text-terracota dark:text-moon/90 dark:hover:text-tangerine"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contacto"
          onClick={() => setOpen(false)}
          className="mt-3 inline-flex items-center gap-2 rounded-full bg-terracota px-5 py-3 text-sm font-semibold text-white active:scale-[0.97]"
        >
          {t.nav.cta}
          <ArrowRight className="size-4" />
        </a>
      </div>
    </header>
  );
}
