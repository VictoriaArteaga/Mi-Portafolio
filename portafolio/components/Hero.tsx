"use client";

import Image from "next/image";
import { useT } from "@/lib/prefs";
import { Download, Heart } from "./Icons";

export default function Hero() {
  const t = useT().hero;
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-gradient-to-b from-[#fff1e2] to-cream dark:from-umber dark:to-night">
      {/* Manchas orgánicas de fondo */}
      <div aria-hidden className="absolute -left-24 top-1/2 -z-10 size-72 rounded-[45%_55%_60%_40%] bg-terracota/90 dark:opacity-20" />
      <div aria-hidden className="absolute -right-20 -top-16 -z-10 size-72 rounded-[55%_45%_40%_60%] bg-tangerine/90 dark:opacity-20" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:py-24">
        <div>
          <p className="font-hand flex items-center gap-2 text-3xl text-ink/80 dark:text-moon/80">
            {t.greeting} <Heart className="size-5 text-terracota" />
          </p>
          <h1 className="mt-3 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl dark:text-moon">
            {t.titleStart}{" "}
            <span className="font-hand relative inline-block text-6xl font-bold text-terracota sm:text-7xl">
              {t.titleAccent}
              <svg aria-hidden viewBox="0 0 300 12" className="absolute -bottom-2 left-0 w-full text-terracota" fill="none">
                <path d="M2 8c60-8 120-8 296-2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-ink/75 dark:text-moon/75">
            {t.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-3 rounded-2xl bg-cocoa py-2.5 pl-2.5 pr-6 text-lg font-bold text-sand shadow-lg shadow-cocoa/25 transition-[transform,background-color] duration-150 ease-out-strong hover:bg-[#6b4328] active:scale-[0.97] dark:bg-terracota dark:text-night dark:shadow-none dark:hover:bg-tangerine"
            >
              <span className="grid size-10 place-items-center rounded-full bg-sand text-cocoa dark:bg-night dark:text-tangerine">
                <Download className="size-5" />
              </span>
              {t.cv}
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center rounded-2xl bg-cocoa px-8 py-2.5 text-lg font-bold text-sand shadow-lg shadow-cocoa/25 transition-[transform,background-color] duration-150 ease-out-strong hover:bg-[#6b4328] active:scale-[0.97] dark:bg-terracota dark:text-night dark:shadow-none dark:hover:bg-tangerine"
            >
              {t.contact}
            </a>
          </div>
        </div>

        {/* Retrato */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-gradient-to-br from-tangerine to-terracota shadow-2xl shadow-terracota/30">
            <Image src="/hero.png" alt="María Victoria Arteaga" fill priority sizes="(min-width: 768px) 384px, 90vw" className="object-cover object-top" />
          </div>

          <div className="font-hand absolute -right-2 -top-4 w-32 rotate-6 rounded-md bg-cream p-3 text-center text-xl leading-5 text-ink shadow-lg transition-transform duration-300 ease-out-strong hover:rotate-2 dark:bg-bark dark:text-moon dark:shadow-black/30 sm:-right-8">
            CREATE
            <br />
            INSPIRE
            <br />
            REPEAT
          </div>

          <div aria-hidden className="absolute -right-3 top-1/2 flex flex-col gap-1.5 sm:-right-8">
            <span className="size-7 rounded-md bg-terracota shadow" />
            <span className="size-7 rounded-md bg-tangerine shadow" />
            <span className="size-7 rounded-md bg-cocoa shadow" />
          </div>
        </div>
      </div>
    </section>
  );
}
