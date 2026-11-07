"use client";

import { useState } from "react";
import { useT } from "@/lib/prefs";
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
    "bg-blush text-ink dark:bg-crimson/20 dark:text-moon",
    "bg-butter text-ink dark:bg-terracota/20 dark:text-moon",
    "bg-sand text-ink dark:bg-butter/10 dark:text-moon",
  ];
  const markerTones = [
    "border-crimson bg-crimson dark:border-night dark:bg-tangerine",
    "border-terracota bg-terracota dark:border-night dark:bg-blush",
    "border-cocoa bg-cocoa dark:border-night dark:bg-butter",
  ];

  return (
    <div
      role="region"
      aria-label={label}
      tabIndex={0}
      className="mt-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracota"
    >
      {entries.length === 0 ? (
        <div className="relative mx-auto max-w-3xl py-8 pl-12">
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
        <div className="relative mx-auto max-w-3xl py-2 pl-12">
          <span
            aria-hidden
            className="absolute bottom-6 left-[1.6rem] top-6 w-1 rounded-full bg-terracota/35 dark:bg-tangerine/35"
          />
          <ol className="relative space-y-6" aria-label={label}>
            {entries.map((item, index) => (
              <li key={`${item.period}-${item.title}-${item.organization}`} className="relative">
                <span
                  aria-hidden
                  className={`absolute -left-[2rem] top-6 size-5 rounded-full border-4 border-cream dark:border-night ${
                    markerTones[index % markerTones.length]
                  }`}
                />
                <article
                  className={`rounded-2xl border-l-8 p-5 sm:p-6 ${
                    cardTones[index % cardTones.length]
                  } ${markerTones[index % markerTones.length].split(" ")[0]}`}
                >
                  {item.period && (
                    <p className="text-base font-bold text-crimson dark:text-tangerine">{item.period}</p>
                  )}
                  <h4 className="mt-1 font-serif text-xl font-semibold sm:text-2xl">{item.title}</h4>
                  <p className="mt-1 text-base font-semibold text-cocoa dark:text-linen">{item.organization}</p>
                  {item.description && (
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink dark:text-moon">
                      {item.description}
                    </p>
                  )}
                  {item.highlights && (
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-base leading-relaxed text-ink dark:text-moon">
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
  const [selected, setSelected] = useState<"work" | "academic">("work");
  const isWork = selected === "work";
  const activeTitle = isWork ? t.workTitle : t.academicTitle;

  return (
    <section id="experiencia" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center">
          <h2 className="font-serif text-4xl font-semibold sm:text-5xl">{t.title}</h2>
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
