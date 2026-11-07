"use client";

import { achievements } from "@/data/achievements";
import { useT } from "@/lib/prefs";
import Reveal from "./Reveal";

export default function Achievements() {
  const t = useT().achievements;

  return (
    <section id="logros" className="bg-sand/40 py-20 dark:bg-dusk sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">{t.title}</h2>
        </Reveal>

        {achievements.length === 0 ? (
          <p className="mt-10 text-center leading-relaxed text-ink/70 dark:text-moon/70">{t.empty}</p>
        ) : (
          <ul className="mt-10 grid gap-8 sm:grid-cols-2">
            {achievements.map((achievement) => (
              <li key={`${achievement.title}-${achievement.issuer}-${achievement.date}`}>
                <Reveal className="h-full">
                  <article className="h-full rounded-3xl bg-white p-6 dark:bg-bark sm:p-8">
                    <p className="text-sm font-semibold text-terracota dark:text-tangerine">{achievement.date}</p>
                    <h3 className="mt-2 font-serif text-xl font-semibold">{achievement.title}</h3>
                    <p className="mt-1 text-cocoa dark:text-linen">{achievement.issuer}</p>
                    {achievement.description && <p className="mt-4 leading-relaxed">{achievement.description}</p>}
                    {achievement.url && (
                      <a
                        href={achievement.url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-block font-semibold text-terracota underline underline-offset-4 dark:text-tangerine"
                      >
                        {t.viewCertificate}
                      </a>
                    )}
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
