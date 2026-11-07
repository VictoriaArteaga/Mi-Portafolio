"use client";

import { achievements } from "@/data/achievements";
import { useLang, useT } from "@/lib/prefs";
import Reveal from "./Reveal";

const badgeTones = [
  "bg-butter text-ink dark:bg-butter/20 dark:text-butter",
  "bg-blush text-ink dark:bg-blush/20 dark:text-blush",
  "bg-terracota text-ink dark:bg-terracota/25 dark:text-tangerine",
];

export default function Achievements() {
  const t = useT().achievements;
  const { lang } = useLang();
  const eyebrow = lang === "es" ? "05 · reconocimientos" : "05 · recognitions";

  return (
    <section id="logros" className="relative isolate flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden bg-sand/40 py-12 dark:bg-dusk sm:py-14">
      <svg aria-hidden viewBox="0 0 24 24" className="absolute left-[7%] top-12 -z-10 size-[34px] fill-terracota">
        <path d="M12 0C12 7 17 12 24 12C17 12 12 17 12 24C12 17 7 12 0 12C7 12 12 7 12 0Z" />
      </svg>
      <svg aria-hidden viewBox="0 0 24 24" className="absolute bottom-10 right-[8%] -z-10 size-7 fill-crimson/70">
        <path d="M12 0C12 7 17 12 24 12C17 12 12 17 12 24C12 17 7 12 0 12C7 12 12 7 12 0Z" />
      </svg>

      <div className="mx-auto w-full max-w-[1264px] px-5 sm:px-8">
        <Reveal className="flex flex-col items-center text-center">
          <p className="font-hand text-3xl font-bold text-[#a8430a] dark:text-tangerine">{eyebrow}</p>
          <h2 className="mt-1 font-serif text-4xl font-semibold leading-[1.05] sm:text-[52px]">{t.title}</h2>
          <svg aria-hidden viewBox="0 0 200 12" fill="none" className="mt-2 w-40 text-terracota dark:text-tangerine">
            <path d="M2 8c20-8 40 6 60 0s40-8 60-2 60 6 76 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </Reveal>

        {achievements.length === 0 ? (
          <p className="mt-10 text-center leading-relaxed text-ink/70 dark:text-moon/70">{t.empty}</p>
        ) : (
          <ul className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, i) => (
              <li key={`${achievement.title}-${achievement.issuer}-${achievement.date}`}>
                <Reveal className="h-full" delay={(i % 3) * 80}>
                  <article className="flex h-full flex-col gap-2.5 rounded-3xl border-2 border-[#f0cfae] bg-white p-7 dark:border-dusk dark:bg-bark">
                    <span
                      aria-hidden
                      className={`grid size-[52px] place-items-center rounded-full ${badgeTones[i % badgeTones.length]}`}
                    >
                      <svg viewBox="0 0 24 24" className="size-[26px]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="9" r="6" />
                        <path d="m8.5 14-1.5 8 5-3 5 3-1.5-8" />
                      </svg>
                    </span>
                    <p className="mt-2 text-sm font-bold text-[#a8430a] dark:text-tangerine">{achievement.date}</p>
                    <h3 className="font-serif text-2xl font-semibold leading-tight">{achievement.title}</h3>
                    <p className="leading-normal text-cocoa dark:text-linen">{achievement.issuer}</p>
                    {achievement.description && <p className="leading-relaxed">{achievement.description}</p>}
                    {achievement.url && (
                      <a
                        href={achievement.url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-auto inline-block pt-3 font-bold text-[#a8430a] underline underline-offset-4 dark:text-tangerine"
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
