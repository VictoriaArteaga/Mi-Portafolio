"use client";

import { useLang, useT } from "@/lib/prefs";
import { testimonios } from "@/data/testimonios";
import Reveal from "./Reveal";

const cardTones = [
  "-rotate-1 bg-butter shadow-[8px_8px_0_#e87524] dark:bg-terracota/20 dark:shadow-[8px_8px_0_#ffa048]",
  "rotate-1 bg-[#ffd9dd] shadow-[8px_8px_0_#dc0032] dark:bg-crimson/20 dark:shadow-[8px_8px_0_#dc0032]",
  "bg-sand shadow-[8px_8px_0_#5a3720] dark:bg-butter/10 dark:shadow-[8px_8px_0_#e9c9a9]",
];

export default function Testimonials() {
  const t = useT().testimonials;
  const { lang } = useLang();
  const eyebrow = lang === "es" ? "04 · lo que dicen" : "04 · what they say";
  const items = [
    ...testimonios.map((item) => ({
      name: item.name,
      paragraphs: item.paragraphs[lang],
    })),
    ...t.items.map((item) => ({ name: item.name, paragraphs: [item.quote] })),
  ];

  return (
    <section id="testimonios" aria-labelledby="testimonios-title" className="flex min-h-[calc(100svh-4.5rem)] items-center py-10 sm:py-12">
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-10">
        <Reveal className="flex flex-col items-center text-center">
          <p className="font-hand text-3xl font-bold text-[#a8430a] dark:text-tangerine">{eyebrow}</p>
          <h2 id="testimonios-title" className="mt-1 font-serif text-4xl font-semibold leading-[1.05] sm:text-[56px]">
            {t.title}
          </h2>
          <svg aria-hidden viewBox="0 0 200 12" fill="none" className="mt-2 w-40 text-terracota dark:text-tangerine">
            <path d="M2 8c20-8 40 6 60 0s40-8 60-2 60 6 76 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </Reveal>

        <ul className="mt-8 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {items.map((item, i) => (
            <li key={item.name}>
              <Reveal delay={i * 90} className="h-full">
                <figure
                  className={`flex h-full flex-col items-center gap-4 rounded-[28px] p-7 text-center text-ink dark:text-moon ${cardTones[i % cardTones.length]}`}
                >
                  <figcaption className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                    <svg aria-hidden viewBox="0 0 48 36" className="h-8 w-11 fill-current opacity-35">
                      <path d="M0 36V20C0 8 6 2 18 0l2 6c-6 2-8 6-8 10h8v20Zm28 0V20c0-12 6-18 18-20l2 6c-6 2-8 6-8 10h8v20Z" />
                    </svg>
                    <span className="flex items-center justify-center gap-3.5">
                      <span
                        aria-hidden
                        className="grid size-12 shrink-0 place-items-center rounded-full bg-ink font-serif text-xl font-semibold text-cream dark:bg-tangerine dark:text-night"
                      >
                        {item.name.replace("Ing. ", "").charAt(0)}
                      </span>
                      <span className="font-hand text-3xl font-bold leading-none">{item.name}</span>
                    </span>
                  </figcaption>
                  <blockquote className="my-auto space-y-3 text-[15px] leading-[1.6]">
                    {item.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </blockquote>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
