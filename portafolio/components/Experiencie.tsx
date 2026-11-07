"use client";

import { useT } from "@/lib/prefs";
import { academicExperience, workExperience } from "@/data/experience";
import Reveal from "./Reveal";

function Timeline({
  entries,
  emptyMessage,
}: {
  entries: typeof workExperience;
  emptyMessage: string;
}) {
  return (
    <ol className="relative mt-8 ml-3 space-y-8 border-l-2 border-dashed border-terracota/40">
      {entries.length === 0 ? (
        <li className="relative pl-8">
          <span
            aria-hidden
            className="absolute -left-[0.6rem] top-1 size-4 rounded-full border-4 border-cream bg-terracota dark:border-night"
          />
          <p className="text-base leading-relaxed text-ink/70 dark:text-moon/70">{emptyMessage}</p>
        </li>
      ) : (
        entries.map((item) => (
          <li key={`${item.period}-${item.title}-${item.organization}`} className="relative pl-8">
            <span
              aria-hidden
              className="absolute -left-[0.6rem] top-1 size-4 rounded-full border-4 border-cream bg-terracota dark:border-night"
            />
            <p className="text-sm font-semibold tracking-wide text-terracota dark:text-tangerine">{item.period}</p>
            <h4 className="mt-1 font-serif text-xl font-semibold">{item.title}</h4>
            <p className="text-base font-medium text-cocoa dark:text-linen">{item.organization}</p>
            <p className="mt-2 leading-relaxed text-ink/75 dark:text-moon/75">{item.description}</p>
          </li>
        ))
      )}
    </ol>
  );
}

export default function Experiencie() {
  const t = useT().experience;

  return (
    <section id="experiencia" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-terracota dark:text-tangerine">{t.eyebrow}</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">{t.title}</h2>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="h-full">
            <section aria-labelledby="experiencia-laboral">
              <h3 id="experiencia-laboral" className="font-serif text-2xl font-semibold">{t.workTitle}</h3>
              <Timeline entries={workExperience} emptyMessage={t.workEmpty} />
            </section>
          </Reveal>

          <Reveal delay={100} className="h-full">
            <section aria-labelledby="experiencia-academica">
              <h3 id="experiencia-academica" className="font-serif text-2xl font-semibold">{t.academicTitle}</h3>
              <Timeline entries={academicExperience} emptyMessage={t.academicEmpty} />
            </section>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
