"use client";

import { useLang, useT } from "@/lib/prefs";
import Image from "next/image";
import Reveal from "./Reveal";
import { Github } from "./Icons";
import { projects, type ProjectTone } from "@/data/projects";

type Style = { card: string; frame: string; title: string; text: string; tag: string; btn: string; gh: string };

const tones: Record<ProjectTone, Style> = {
  blush: { card: "bg-blush", frame: "border-crimson", title: "text-crimson", text: "text-crimson", tag: "border-white/80 text-white", btn: "bg-crimson text-white", gh: "text-crimson" },
  crimson: { card: "bg-crimson", frame: "border-white", title: "text-white", text: "text-white", tag: "border-white/80 text-white", btn: "bg-white text-crimson", gh: "text-white" },
  tangerine: { card: "bg-tangerine", frame: "border-white", title: "text-white", text: "text-white", tag: "border-white/80 text-white", btn: "bg-white text-terracota", gh: "text-white" },
  butter: { card: "bg-butter", frame: "border-crimson", title: "text-crimson", text: "text-crimson", tag: "border-crimson/70 text-crimson", btn: "bg-crimson text-white", gh: "text-crimson" },
  terracota: { card: "bg-terracota", frame: "border-cocoa", title: "text-cocoa", text: "text-cocoa", tag: "border-cocoa/70 text-cocoa", btn: "bg-cocoa text-terracota", gh: "text-cocoa" },
  cocoa: { card: "bg-cocoa", frame: "border-butter", title: "text-white", text: "text-white", tag: "border-white/80 text-white", btn: "bg-white text-cocoa", gh: "text-white" },
};

// Inclinaciones alternas, como cartas esparcidas sobre una mesa.
const tilts = ["-rotate-[8deg]", "rotate-[6deg]", "-rotate-[5deg]", "rotate-[9deg]", "rotate-[5deg]", "-rotate-[7deg]"];

export default function Projects() {
  const t = useT().projects;
  const { lang } = useLang();
  return (
    <section id="proyectos" className="relative isolate overflow-hidden bg-sand py-20 dark:bg-dusk sm:py-24">
      {/* Fondo decorativo: círculos, puntos y estrellitas */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-24 size-64 rounded-full border-[3px] border-terracota/40" />
        <div className="absolute -left-8 top-36 size-64 rounded-full border-[3px] border-cream/70 dark:border-tangerine/20" />
        <div className="absolute -right-24 top-1/3 size-72 rounded-full bg-tangerine/40 dark:bg-terracota/10" />
        <div className="absolute -top-20 left-[32%] size-56 rounded-full border-[3px] border-crimson/25 dark:border-blush/15" />
        <div className="absolute bottom-24 right-[8%] size-24 rounded-full bg-butter/70 dark:bg-butter/10" />
        <div
          className="absolute left-6 top-16 h-32 w-32 opacity-70 dark:opacity-30"
          style={{ backgroundImage: "radial-gradient(var(--color-terracota) 2.5px, transparent 2.5px)", backgroundSize: "18px 18px" }}
        />
        <div
          className="absolute bottom-16 right-10 h-28 w-36 opacity-60 dark:opacity-25"
          style={{ backgroundImage: "radial-gradient(var(--color-cocoa) 2.5px, transparent 2.5px)", backgroundSize: "18px 18px" }}
        />
        {[
          "left-[7%] top-[45%] size-8 fill-crimson",
          "right-[9%] top-20 size-10 fill-cream dark:fill-tangerine/40",
          "left-[46%] top-10 size-6 fill-terracota",
          "right-[22%] bottom-14 size-7 fill-crimson/70",
          "left-[14%] bottom-20 size-9 fill-cream dark:fill-tangerine/40",
        ].map((cls) => (
          <svg key={cls} viewBox="0 0 24 24" className={`absolute ${cls}`}>
            <path d="M12 0C12 7 17 12 24 12C17 12 12 17 12 24C12 17 7 12 0 12C7 12 12 7 12 0Z" />
          </svg>
        ))}
      </div>

      <div className="mx-auto max-w-[1264px] px-5 sm:px-8">
        <Reveal className="flex flex-col items-center text-center">
          <p className="font-hand text-3xl font-bold text-cocoa dark:text-tangerine">{lang === "es" ? "02 · lo que he construido" : "02 · what I've built"}</p>
          <h2 className="mt-1 font-serif text-4xl font-semibold sm:text-5xl">{t.title}</h2>
          <svg aria-hidden viewBox="0 0 200 12" fill="none" className="mt-2 w-40 text-terracota dark:text-tangerine">
            <path d="M2 8c20-8 40 6 60 0s40-8 60-2 60 6 76 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </Reveal>

        <ul className="mt-14 grid gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 lg:grid-cols-3">
          {projects.map((p, i) => {
            const s = tones[p.tone];
            return (
              <li key={p.title} className="flex justify-center">
                <Reveal delay={(i % 3) * 80} className="flex w-full justify-center">
                  <article
                    className={`relative w-full max-w-[340px] rounded-[2rem] p-3 shadow-lg shadow-cocoa/20 transition-transform duration-300 ease-out-strong hover:-translate-y-2 hover:rotate-0 ${tilts[i % tilts.length]} ${s.card}`}
                  >
                    <div className={`flex h-full flex-col rounded-[1.6rem] border-[1.5px] p-4 ${s.frame}`}>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#c7d0da]">
                        {p.image && <Image src={p.image} alt={t.shot(p.title)} fill sizes="340px" className="object-cover" />}
                      </div>

                      <h3 className={`font-serif mt-3 text-center text-[2.125rem] font-semibold leading-[1.1] ${s.title}`}>{p.title}</h3>
                      <p className={`mt-2 text-center text-sm leading-snug ${s.text}`}>{p.description?.[lang] ?? t.description}</p>

                      <ul className="mt-3 flex flex-wrap justify-center gap-1.5">
                        {p.tags.map((tag) => (
                          <li key={tag} className={`rounded-md border px-2 py-0.5 text-[0.7rem] font-semibold ${s.tag}`}>
                            {tag}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 flex items-center justify-center gap-3">
                        <a
                          href={p.repo}
                          aria-label={t.repo(p.title)}
                          className={`grid size-9 place-items-center rounded-full transition-transform duration-150 ease-out-strong hover:scale-110 active:scale-90 ${s.gh}`}
                        >
                          <Github className="size-6" />
                        </a>
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`rounded-md px-4 py-2 text-sm font-bold transition-transform duration-150 ease-out-strong active:scale-[0.96] ${s.btn}`}
                        >
                          {t.demo}
                        </a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
