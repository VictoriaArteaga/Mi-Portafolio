"use client";

import { useState } from "react";
import { useLang, useT } from "@/lib/prefs";
import { academicExperience, workExperience } from "@/data/experience";
import Reveal from "./Reveal";

function Timeline({
  entries,
  emptyMessage,
  label,
}: {
  entries: typeof workExperience;
  emptyMessage: string;
  label: string;
}) {
  const cardTones = [
    "bg-white shadow-[6px_6px_0_#e87524] dark:bg-bark dark:shadow-[6px_6px_0_#ffa048]",
    "bg-butter shadow-[6px_6px_0_#dc0032] dark:bg-terracota/20 dark:shadow-[6px_6px_0_#dc0032]",
    "bg-[#ffd9dd] shadow-[6px_6px_0_#5a3720] dark:bg-crimson/20 dark:shadow-[6px_6px_0_#e9c9a9]",
  ];
  const markerTones = [
    "bg-terracota dark:bg-tangerine",
    "bg-crimson dark:bg-blush",
    "bg-cocoa dark:bg-butter",
  ];

  return (
    <div
      role="region"
      aria-label={label}
      tabIndex={0}
      className="mt-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracota"
    >
      {entries.length === 0 ? (
        <div className="relative mx-auto max-w-none py-8 pl-12">
          <span
            aria-hidden
            className="absolute bottom-0 left-[1.6rem] top-0 w-1 rounded-full bg-terracota/35 dark:bg-tangerine/35"
          />
          <span
            aria-hidden
            className="absolute left-[0.95rem] top-12 size-5 rounded-full border-4 border-cream bg-terracota dark:border-night dark:bg-tangerine"
          />
          <p className="relative rounded-xl bg-sand/70 p-6 text-base leading-relaxed text-ink dark:bg-dusk dark:text-moon">
            {emptyMessage}
          </p>
        </div>
      ) : (
        <div className="relative mx-auto max-w-none py-2">
          <span
            aria-hidden
            className="absolute bottom-6 left-[11px] top-6 border-l-[3px] border-dashed border-terracota/55 dark:border-tangerine/55"
          />
          <ol className="relative space-y-6" aria-label={label}>
            {entries.map((item, index) => (
              <li key={`${item.period}-${item.title}-${item.organization}`} className="relative pl-12">
                <span
                  aria-hidden
                  className={`absolute left-0.5 top-[30px] size-5 rounded-full border-4 border-cream dark:border-night ${
                    markerTones[index % markerTones.length]
                  }`}
                />
                <article
                  className={`flex flex-col items-start gap-2 rounded-[22px] border-2 border-ink px-6 py-6 text-ink dark:border-moon/70 dark:text-moon sm:px-8 ${
                    cardTones[index % cardTones.length]
                  }`}
                >
                  {item.period && (
                    <p className="rounded-full bg-ink px-3.5 py-1 text-sm font-bold text-cream dark:bg-tangerine dark:text-night">{item.period}</p>
                  )}
                  <h4 className="font-serif text-xl font-semibold sm:text-2xl">{item.title}</h4>
                  <p className="text-base font-bold text-cocoa dark:text-linen">{item.organization}</p>
                  {item.description && (
                    <p className="mt-1 text-base leading-relaxed text-ink dark:text-moon">
                      {item.description}
                    </p>
                  )}
                  {item.highlights && (
                    <ul className="mt-1 list-disc space-y-1 pl-5 text-base leading-relaxed text-ink dark:text-moon">
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                </article>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default function Experiencie() {
  const t = useT().experience;
  const { lang } = useLang();
  const extra =
    lang === "es"
      ? { eyebrow: "03 · mi camino" }
      : { eyebrow: "03 · my path" };
  const [selected, setSelected] = useState<"work" | "academic">("work");
  const isWork = selected === "work";
  const activeTitle = isWork ? t.workTitle : t.academicTitle;

  return (
    <section id="experiencia" className="py-20 sm:py-24">
      <div className="mx-auto max-w-[1264px] px-5 sm:px-8">
        <Reveal className="flex flex-col items-center text-center">
          <p className="font-hand text-3xl font-bold text-[#a8430a] dark:text-tangerine">{extra.eyebrow}</p>
          <h2 className="mt-1 font-serif text-4xl font-semibold leading-[1.05] sm:text-[56px]">{t.title}</h2>
          <svg aria-hidden viewBox="0 0 200 12" fill="none" className="mt-2 w-40 text-terracota dark:text-tangerine">
            <path d="M2 8c20-8 40 6 60 0s40-8 60-2 60 6 76 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </Reveal>

        <Reveal className="mt-10">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3" role="group" aria-label={t.title}>
            <button
              type="button"
              onClick={() => setSelected("work")}
              aria-pressed={isWork}
              className={`font-serif text-xl font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracota sm:text-2xl ${
                isWork
                  ? "text-terracota dark:text-tangerine"
                  : "text-ink/65 hover:text-terracota dark:text-moon/65 dark:hover:text-tangerine"
              }`}
            >
              {t.workTitle}
            </button>
            <button
              type="button"
              onClick={() => setSelected("academic")}
              aria-pressed={!isWork}
              className={`font-serif text-xl font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracota sm:text-2xl ${
                !isWork
                  ? "text-terracota dark:text-tangerine"
                  : "text-ink/65 hover:text-terracota dark:text-moon/65 dark:hover:text-tangerine"
              }`}
            >
              {t.academicTitle}
            </button>
          </div>

          <section className="mt-6" aria-live="polite" aria-label={activeTitle}>
            <Timeline
              key={selected}
              entries={isWork ? workExperience : academicExperience}
              emptyMessage={isWork ? t.workEmpty : t.academicEmpty}
              label={activeTitle}
            />
          </section>
        </Reveal>
      </div>
    </section>
  );
}
