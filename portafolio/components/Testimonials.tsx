"use client";

import { useLang, useT } from "@/lib/prefs";
import { testimonios } from "@/data/testimonios";
import Reveal from "./Reveal";
import { Star } from "./Icons";

const avatars = [
  { bg: "#6ea5ff", skin: "#fbd2bd", hair: "#1c1c2b", shirt: "#e8505b", long: false },
  { bg: "#ff9a6c", skin: "#fbd2bd", hair: "#0b2f6b", shirt: "#0b6aa8", long: true },
  { bg: "#6ea5ff", skin: "#fbd2bd", hair: "#1c1c2b", shirt: "#1f3a6e", long: false },
];

function Avatar({ bg, skin, hair, shirt, long }: (typeof avatars)[number]) {
  return (
    <svg viewBox="0 0 80 80" aria-hidden className="size-[4.5rem] rounded-full">
      <rect width="80" height="80" fill={bg} />
      {long && <rect x="22" y="22" width="36" height="40" rx="16" fill={hair} />}
      <path d="M10 80c2-16 14-22 30-22s28 6 30 22z" fill={shirt} />
      <rect x="35" y="48" width="10" height="12" rx="4" fill={skin} />
      <ellipse cx="40" cy="34" rx="12" ry="14" fill={skin} />
      <path
        d={long
          ? "M27 34c0-12 6-18 13-18s13 6 13 18c-4-4-8-8-13-8s-9 4-13 8z"
          : "M28 32c-2-12 5-17 12-17s14 5 12 17c-3-5-7-7-12-7s-9 2-12 7z"}
        fill={hair}
      />
    </svg>
  );
}

export default function Testimonials() {
  const t = useT().testimonials;
  const { lang } = useLang();
  const items = [
    ...testimonios.map((item) => ({
      name: item.name,
      paragraphs: item.paragraphs[lang],
    })),
    ...t.items.map((item) => ({ name: item.name, paragraphs: [item.quote] })),
  ];

  return (
    <section id="testimonios" aria-labelledby="testimonios-title" className="py-20 sm:py-24">
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8">
        <Reveal className="text-center">
          <h2 id="testimonios-title" className="font-serif text-4xl font-semibold sm:text-5xl">
            {t.title}
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-8 md:grid-cols-2">
          {items.map((item, i) => (
            <li key={item.name} className={i === items.length - 1 ? "md:col-span-2" : ""}>
              <Reveal delay={i * 90} className="h-full">
                <figure className="flex h-full flex-col rounded-[2rem] bg-terracota p-6 shadow-sm transition-[transform,box-shadow] duration-300 ease-out-strong hover:-translate-y-1 hover:shadow-lg hover:shadow-terracota/30 dark:bg-bark dark:shadow-black/25 dark:hover:shadow-black/35 sm:p-8">
                  <figcaption className="flex flex-col items-center text-center">
                    <Avatar {...avatars[i % avatars.length]} />
                    <span className="mt-4 font-serif text-xl font-bold leading-tight text-cocoa dark:text-linen">
                      {item.name}
                    </span>
                    <span
                      className="mt-3 flex gap-1 text-amber-300"
                      role="img"
                      aria-label={lang === "es" ? "5 de 5 estrellas" : "5 out of 5 stars"}
                    >
                      {Array.from({ length: 5 }, (_, star) => (
                        <Star key={star} className="size-6" />
                      ))}
                    </span>
                  </figcaption>
                  <blockquote className="mt-5 flex-1 space-y-4 text-justify text-base leading-relaxed text-cocoa dark:text-moon">
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
