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
    <section id="logros" className="relative isolate flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden bg-sand/40 py-8 dark:bg-dusk sm:py-10">
      {/* Fondo decorativo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 size-64 rounded-full border-[3px] border-terracota/40" />
        <div className="absolute -left-10 top-24 size-64 rounded-full border-[3px] border-cream/80 dark:border-tangerine/20" />
        <div className="absolute -right-20 -top-16 size-72 rounded-full bg-tangerine/35 dark:bg-terracota/10" />
        <div className="absolute -bottom-20 left-[18%] size-60 rounded-full bg-butter/60 dark:bg-butter/10" />
        <div className="absolute bottom-16 right-[6%] size-28 rounded-full border-[3px] border-crimson/30 dark:border-blush/15" />
        <div className="absolute right-[30%] top-6 size-10 rounded-full bg-blush/70 dark:bg-blush/15" />
        <div
          className="absolute right-10 top-28 hidden h-28 w-36 opacity-70 dark:opacity-30 sm:block"
          style={{ backgroundImage: "radial-gradient(#e87524 2.5px, transparent 2.5px)", backgroundSize: "18px 18px" }}
        />
        <div
          className="absolute bottom-10 left-8 hidden h-24 w-32 opacity-60 dark:opacity-25 sm:block"
          style={{ backgroundImage: "radial-gradient(#5a3720 2.5px, transparent 2.5px)", backgroundSize: "18px 18px" }}
        />
        <svg viewBox="0 0 200 12" fill="none" className="absolute bottom-24 right-[18%] w-32 text-terracota/50">
          <path d="M2 8c20-8 40 6 60 0s40-8 60-2 60 6 76 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
        {[
          "left-[7%] top-12 size-9 fill-terracota",
          "left-[24%] top-[38%] size-5 fill-crimson",
          "right-[10%] top-[44%] size-8 fill-crimson/70",
          "right-[38%] bottom-10 size-6 fill-terracota",
          "left-[4%] bottom-[30%] size-7 fill-cream dark:fill-tangerine/40",
          "right-[4%] top-20 size-10 fill-cream dark:fill-tangerine/40",
        ].map((cls) => (
          <svg key={cls} viewBox="0 0 24 24" className={`absolute ${cls}`}>
            <path d="M12 0C12 7 17 12 24 12C17 12 12 17 12 24C12 17 7 12 0 12C7 12 12 7 12 0Z" />
          </svg>
        ))}
      </div>

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
          <ul className="mt-8 flex flex-wrap justify-center gap-7">
            {achievements.map((achievement, i) => (
              <li
                key={`${achievement.title}-${achievement.issuer}-${achievement.date}`}
                className="w-full sm:w-[calc(50%-14px)] lg:w-[calc(33.333%-18.67px)]"
              >
                <Reveal className="h-full" delay={(i % 3) * 80}>
                  <article className="relative flex h-full flex-col gap-2 rounded-3xl border-2 border-[#f0cfae] bg-white p-6 shadow-[0_8px_0_#fbd0a6] transition-transform duration-300 ease-out-strong hover:-translate-y-1.5 dark:border-dusk dark:bg-bark dark:shadow-[0_8px_0_#100e0c]">
                    <span aria-hidden className="absolute -top-3 right-7 h-6 w-16 rotate-[5deg] bg-butter/90 dark:bg-butter/30" />
                    <svg aria-hidden viewBox="0 0 24 24" className="absolute bottom-5 right-5 size-6 fill-terracota/30 dark:fill-tangerine/25">
                      <path d="M12 0C12 7 17 12 24 12C17 12 12 17 12 24C12 17 7 12 0 12C7 12 12 7 12 0Z" />
                    </svg>
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden
                        className={`grid size-[52px] place-items-center rounded-full ${badgeTones[i % badgeTones.length]}`}
                      >
                        <svg viewBox="0 0 24 24" className="size-[26px]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="9" r="6" />
                          <path d="m8.5 14-1.5 8 5-3 5 3-1.5-8" />
                        </svg>
                      </span>
                      {(() => {
                        const btn =
                          "inline-flex min-h-10 items-center gap-2 rounded-xl px-3.5 text-sm font-bold transition-transform duration-150 ease-out-strong";
                        const eye = (
                          <svg aria-hidden viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        );
                        return achievement.url ? (
                          <a
                            href={achievement.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${btn} bg-cocoa text-sand hover:scale-105 active:scale-95 dark:bg-terracota dark:text-night`}
                          >
                            {eye}
                            {achievement.linkLabel?.[lang] ?? t.viewCertificate}
                          </a>
                        ) : (
                          <span
                            aria-disabled="true"
                            title={lang === "es" ? "Próximamente" : "Coming soon"}
                            className={`${btn} cursor-not-allowed border-2 border-cocoa/45 text-cocoa dark:border-linen/40 dark:text-linen`}
                          >
                            {eye}
                            {achievement.linkLabel?.[lang] ?? t.viewCertificate}
                          </span>
                        );
                      })()}
                    </div>
                    <p className="mt-2 text-sm font-bold text-[#a8430a] dark:text-tangerine">{achievement.date}</p>
                    <h3 className="font-serif text-2xl font-semibold leading-tight">{achievement.title}</h3>
                    <p className="text-left leading-normal text-cocoa dark:text-linen sm:text-justify">{achievement.issuer}</p>
                    {achievement.description && <p className="whitespace-pre-line text-left leading-relaxed sm:text-justify">{achievement.description}</p>}
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
