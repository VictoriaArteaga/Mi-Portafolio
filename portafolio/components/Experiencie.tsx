"use client";

import { useT } from "@/lib/prefs";
import Reveal from "./Reveal";

// TODO: ajusta herramientas y niveles (0 a 1) a la realidad. Los textos viven en lib/copy.ts.
const tools = ["Next.js", "React", "TypeScript", "Tailwind", "Figma", "Git", "Node"];

// Mismo orden que experience.skills en lib/copy.ts.
const levels = [0.9, 0.85, 0.8, 0.75, 0.65];

export default function Experiencie() {
  const t = useT().experience;

  return (
    <section id="experiencia" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.2em] text-terracota">{t.eyebrow}</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">{t.title}</h2>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <ol className="relative ml-3 space-y-8 border-l-2 border-dashed border-terracota/40">
              {t.timeline.map((item) => (
                <li key={item.period} className="relative pl-8">
                  <span aria-hidden className="absolute -left-[0.6rem] top-1 size-4 rounded-full border-4 border-cream bg-terracota dark:border-night" />
                  <p className="text-xs font-semibold tracking-wide text-terracota">{item.period}</p>
                  <h3 className="mt-1 font-serif text-xl font-semibold">{item.role}</h3>
                  <p className="text-sm font-medium text-cocoa dark:text-linen">{item.place}</p>
                  <p className="mt-1 max-w-sm text-sm text-ink/70 dark:text-moon/70">{item.note}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={100} passive className="reveal">
            <ul className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-2xl border border-sand bg-white px-4 dark:border-dusk dark:bg-bark py-3 text-sm font-semibold shadow-sm transition-transform duration-200 ease-out-strong hover:-translate-y-1"
                >
                  {tool}
                </li>
              ))}
            </ul>

            <ul className="mt-10 space-y-5">
              {t.skills.map((name, i) => (
                <li key={name}>
                  <div className="mb-1.5 text-sm font-medium">{name}</div>
                  <div className="h-2 overflow-hidden rounded-full bg-sand/70 dark:bg-dusk">
                    <div
                      className="skill-bar h-full rounded-full bg-terracota"
                      style={{ "--level": levels[i], "--bar-delay": `${200 + i * 90}ms` } as React.CSSProperties}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
