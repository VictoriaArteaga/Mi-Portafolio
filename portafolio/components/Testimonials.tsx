"use client";

import { useT } from "@/lib/prefs";
import Reveal from "./Reveal";
import { Star } from "./Icons";

// Avatares ilustrados provisionales. Para usar fotos reales, cambia <Avatar /> por <Image src="/..." />.
const avatars = [
  { bg: "#6ea5ff", skin: "#fbd2bd", hair: "#1c1c2b", shirt: "#e8505b", long: false },
  { bg: "#ff9a6c", skin: "#fbd2bd", hair: "#0b2f6b", shirt: "#0b6aa8", long: true },
  { bg: "#6ea5ff", skin: "#fbd2bd", hair: "#1c1c2b", shirt: "#1f3a6e", long: false },
];

function Avatar({ bg, skin, hair, shirt, long }: (typeof avatars)[number]) {
  return (
    <svg viewBox="0 0 80 80" aria-hidden className="size-[4.5rem] shrink-0 rounded-full">
      <rect width="80" height="80" fill={bg} />
      {long && <rect x="22" y="22" width="36" height="40" rx="16" fill={hair} />}
      <path d="M10 80c2-16 14-22 30-22s28 6 30 22z" fill={shirt} />
      <rect x="35" y="48" width="10" height="12" rx="4" fill={skin} />
      <ellipse cx="40" cy="34" rx="12" ry="14" fill={skin} />
      <path d={long ? "M27 34c0-12 6-18 13-18s13 6 13 18c-4-4-8-8-13-8s-9 4-13 8z" : "M28 32c-2-12 5-17 12-17s14 5 12 17c-3-5-7-7-12-7s-9 2-12 7z"} fill={hair} />
    </svg>
  );
}

export default function Testimonials() {
  const t = useT().testimonials;

  return (
    <section id="testimonios" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-terracota dark:text-tangerine">{t.eyebrow}</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">{t.title}</h2>
        </Reveal>

        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {t.items.map((item, i) => (
            <li key={item.name}>
              <Reveal delay={i * 90} className="h-full">
                <figure className="flex h-full flex-col rounded-[2rem] bg-terracota p-5 shadow-sm transition-[transform,box-shadow] duration-300 ease-out-strong hover:-translate-y-1 hover:shadow-lg hover:shadow-terracota/30 dark:bg-bark dark:shadow-black/25 dark:hover:shadow-black/35">
                  <figcaption className="flex items-center gap-4">
                    <Avatar {...avatars[i % avatars.length]} />
                    <span className="font-script text-4xl leading-none text-cocoa dark:text-linen">{item.name}</span>
                  </figcaption>
                  <blockquote className="mt-5 flex-1 text-center text-base font-bold leading-snug text-cocoa dark:text-moon">
                    {item.quote}
                  </blockquote>
                  <div className="mt-4 flex justify-center gap-1.5" role="img" aria-label="5/5">
                    {Array.from({ length: 5 }, (_, n) => (
                      <Star key={n} className="size-7 text-amber-300" />
                    ))}
                  </div>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
