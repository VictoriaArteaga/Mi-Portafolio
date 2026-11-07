"use client";

import Image from "next/image";
import { useLang, useT } from "@/lib/prefs";
import { profileContent } from "@/data/profile";
import { Download, Heart } from "./Icons";

const chipTones = [
  "bg-butter -rotate-2",
  "bg-blush rotate-[1.5deg]",
  "bg-sand -rotate-1",
  "bg-tangerine rotate-2",
];

export default function Hero() {
  const { lang } = useLang();
  const t = useT().hero;
  const profile = profileContent[lang].hero;
  const extra =
    lang === "es"
      ? { chips: ["Backend", "Inteligencia artificial", "Cloud", "Realidad virtual"], badge: "Ingeniería de Software" }
      : { chips: ["Backend", "Artificial intelligence", "Cloud", "Virtual reality"], badge: "Software Engineering" };

  return (
    <section id="inicio" className="relative isolate min-h-[calc(100svh-4.5rem)] overflow-hidden bg-gradient-to-b from-[#fff1e2] to-cream dark:from-umber dark:to-night">
      {/* Manchas orgánicas de fondo */}
      <div aria-hidden className="absolute -left-24 top-1/2 -z-10 size-72 rounded-[45%_55%_60%_40%] bg-terracota/90 dark:opacity-20" />
      <div aria-hidden className="absolute -right-20 -top-16 -z-10 size-72 rounded-[55%_45%_40%_60%] bg-tangerine/90 dark:opacity-20" />
      <svg aria-hidden viewBox="0 0 24 24" className="absolute left-[6%] top-16 -z-10 size-[34px] fill-crimson dark:opacity-60">
        <path d="M12 0C12 7 17 12 24 12C17 12 12 17 12 24C12 17 7 12 0 12C7 12 12 7 12 0Z" />
      </svg>

      <div className="mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-[1360px] items-center gap-14 px-5 py-16 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:py-24 lg:grid-cols-[minmax(0,1fr)_470px] lg:gap-16">
        <div className="flex flex-col gap-5 xl:pl-[110px]">
          <p className="font-hand flex items-center gap-2.5 text-3xl text-ink dark:text-moon sm:text-[2.125rem]">
            {profile.name} <Heart className="size-6 text-terracota" />
          </p>
          <h1 className="font-serif text-5xl font-semibold leading-[1.04] tracking-tight text-ink sm:text-6xl lg:text-[68px] dark:text-moon">
            {profile.titleStart}{" "}
            <span className="font-hand relative inline-block text-6xl font-bold text-[#a8430a] sm:text-7xl lg:text-[84px] dark:text-terracota">
              {profile.titleAccent}
              <svg aria-hidden viewBox="0 0 300 12" className="absolute -bottom-1.5 left-0 w-full text-terracota" fill="none">
                <path d="M2 8c40-8 80 4 120-2s100-6 176 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <div className="space-y-4 text-lg leading-[1.7] text-cocoa dark:text-moon/75">
            {profile.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className="flex flex-wrap gap-2.5">
            {extra.chips.map((chip, i) => (
              <li key={chip} className={`rounded-full px-4 py-2 text-sm font-bold text-ink ${chipTones[i % chipTones.length]}`}>
                {chip}
              </li>
            ))}
          </ul>

          <div className="mt-2 flex flex-wrap justify-center gap-4">
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
              className="inline-flex items-center rounded-2xl border-[3px] border-cocoa px-8 py-2.5 text-lg font-bold text-cocoa transition-[transform,background-color,color] duration-150 ease-out-strong hover:bg-cocoa hover:text-sand active:scale-[0.97] dark:border-terracota dark:text-terracota dark:hover:bg-terracota dark:hover:text-night"
            >
              {t.contact}
            </a>
          </div>
        </div>

        {/* Retrato */}
        <div className="relative mx-auto w-full max-w-[470px]">
          {/* Marco punteado en arco */}
          <div aria-hidden className="absolute -right-[22px] bottom-[22px] left-[22px] -top-[22px] rounded-t-[999px] rounded-b-[2.5rem] border-[3px] border-dashed border-terracota" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-gradient-to-br from-tangerine to-terracota shadow-2xl shadow-terracota/30">
            <Image src="/hero.png" alt="María Victoria Arteaga" fill priority sizes="(min-width: 1024px) 470px, (min-width: 768px) 384px, 90vw" className="object-cover object-top" />
          </div>

          <div aria-hidden className="absolute -right-3 top-1/2 flex flex-col gap-2 sm:-right-7">
            <span className="size-[30px] rounded-lg bg-terracota shadow" />
            <span className="size-[30px] rounded-lg bg-tangerine shadow" />
            <span className="size-[30px] rounded-lg bg-cocoa shadow" />
          </div>

          <div className="absolute -left-3 bottom-9 -rotate-[5deg] rounded-2xl bg-crimson px-[18px] py-3 text-[0.9375rem] font-bold text-cream shadow-[0_10px_0_rgba(42,26,18,0.2)] sm:-left-9">
            {extra.badge}
          </div>

          <svg aria-hidden viewBox="0 0 90 60" fill="none" className="absolute -left-16 bottom-[100px] hidden w-[70px] text-cocoa dark:text-linen lg:block">
            <path d="M4 8c30-6 62 4 70 40M64 40l10 10 8-12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
