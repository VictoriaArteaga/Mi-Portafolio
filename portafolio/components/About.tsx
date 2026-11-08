"use client";

import Image from "next/image";
import { useLang, useT } from "@/lib/prefs";
import { profileContent } from "@/data/profile";
import Reveal from "./Reveal";
const stackIcons = ["nest", "spring", "fastapi", "next", "react", "unity", "postgres", "vr", "aws"] as const;

function StackIcon({ kind }: { kind: (typeof stackIcons)[number] }) {
  if (kind === "unity" || kind === "postgres") {
    return (
      <Image
        src={`/stack/${kind}.svg`}
        alt=""
        aria-hidden="true"
        width={28}
        height={28}
        className={`size-7 shrink-0 ${kind === "unity" ? "dark:invert" : ""}`}
      />
    );
  }

  const colors = {
    nest: "#e0234e",
    spring: "#6db33f",
    fastapi: "#009688",
    next: "currentColor",
    react: "#61dafb",
    unity: "currentColor",
    postgres: "#4169e1",
    vr: "#c75b39",
    aws: "#ff9900",
  };

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="size-7 shrink-0" fill="none" stroke={colors[kind]} strokeWidth="2">
      {kind === "nest" && (
        <>
          <path d="M16 3 28 10v12l-12 7L4 22V10z" />
          <path d="M12 22V11l9 11V11" />
        </>
      )}
      {kind === "spring" && (
        <>
          <path d="M27 5C16 5 7 9 7 19c0 5 4 8 8 8 9 0 12-10 12-22Z" />
          <path d="M5 28c4-7 9-11 17-16" />
        </>
      )}
      {kind === "fastapi" && <path d="m18 3-12 16h9l-1 10 12-17h-9z" fill={colors.fastapi} stroke="none" />}
      {kind === "next" && (
        <>
          <circle cx="16" cy="16" r="13" />
          <path d="M10 22V10l12 13M19 10v7" />
        </>
      )}
      {kind === "react" && (
        <>
          <circle cx="16" cy="16" r="2.5" fill={colors.react} stroke="none" />
          <ellipse cx="16" cy="16" rx="13" ry="5" />
          <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(60 16 16)" />
          <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(120 16 16)" />
        </>
      )}
      {kind === "vr" && (
        <>
          <path d="M4 11c0-2 2-4 4-4h16c2 0 4 2 4 4l-2 12c-.3 2-2 3-4 2l-5-4h-2l-5 4c-2 1-3.7 0-4-2z" />
          <circle cx="11" cy="15" r="2" />
          <circle cx="21" cy="15" r="2" />
          <path d="M8 19h6m-3-3v6" />
        </>
      )}
      {kind === "aws" && (
        <>
          <path d="M8 12.5c0-1.6 1.2-2.6 3.1-2.6h2.3v-.5c0-.9-.6-1.4-1.5-1.4-.8 0-1.3.3-1.5.9H8.3c.3-2 1.7-3.1 3.8-3.1 2.4 0 3.8 1.3 3.8 3.5v5h-2.5l-.1-1.1c-.6.9-1.5 1.3-2.7 1.3-1.7 0-2.8-.8-2.8-2zm5.4-.7v-.3h-1.9c-.8 0-1.2.3-1.2.9s.4.9 1.1.9c1.2 0 2-.6 2-1.5z" fill={colors.aws} stroke="none" />
          <path d="M6 19c5.5 2.8 12.2 2.7 17.5-.3M20 17.8l3.5.9-1 3.3" />
        </>
      )}
    </svg>
  );
}

export default function About() {
  const { lang } = useLang();
  const t = useT().about;
  const paragraphs = profileContent[lang].about.paragraphs;
  const extra =
    lang === "es"
      ? { eyebrow: "01 · conóceme", stamp: ["backend", "e IA", "aplicada"], beyond: "Fuera del código:" }
      : { eyebrow: "01 · get to know me", stamp: ["backend", "& applied", "AI"], beyond: "Beyond the code:" };
  const mainParagraphs = paragraphs.length > 1 ? paragraphs.slice(0, -1) : paragraphs;
  const beyondParagraph = paragraphs.length > 1 ? paragraphs[paragraphs.length - 1] : null;

  return (
    <section id="sobre-mi" className="relative overflow-hidden bg-[#fff1e2] py-12 dark:bg-umber sm:py-14">
      {/* Anillos decorativos */}
      <div aria-hidden className="absolute right-10 top-5 hidden size-36 rounded-full sm:block border-[3px] border-tangerine/60" />
      <div aria-hidden className="absolute right-20 top-14 hidden size-36 rounded-full sm:block border-[3px] border-terracota/40" />

      <div className="relative mx-auto grid max-w-[1264px] items-center gap-8 px-5 sm:px-8 lg:grid-cols-[460px_minmax(0,1fr)] lg:gap-x-16 lg:gap-y-0">
        {/* En celular: título primero, luego la imagen y luego el resto. En escritorio: imagen a la izquierda. */}
        <Reveal className="relative order-2 px-4 sm:px-0 lg:order-none lg:col-start-1 lg:row-span-2 lg:row-start-1">
          {/* Polaroid */}
          <div className="relative mx-auto w-full max-w-[460px] -rotate-2 rounded-sm sm:-rotate-3 bg-white p-3 pb-10 shadow-xl transition-transform duration-300 ease-out-strong hover:rotate-0 dark:bg-bark dark:shadow-black/35">
            <div aria-hidden className="absolute -left-3 -top-3 h-8 w-20 sm:-left-6 -rotate-45 bg-butter/80" />
            <div aria-hidden className="absolute -right-3 -top-2 h-8 w-20 sm:-right-6 rotate-[40deg] bg-blush/80" />
            <div className="relative aspect-[463/614] overflow-hidden bg-[#f1eee5] dark:bg-bark">
              <Image src="/about-vector.svg" alt="Ilustración vectorial de María Victoria Arteaga en un encuentro de investigación" fill unoptimized sizes="(min-width: 1024px) 480px, min(480px, calc(100vw - 64px))" className="object-cover object-center" />
            </div>
            <span className="font-hand absolute bottom-2 left-0 right-0 text-center text-2xl text-cocoa dark:text-linen">
              Victoria Arteaga
            </span>
          </div>

          {/* Sello */}
          <div
            aria-hidden
            className="font-hand absolute bottom-14 -right-1 grid size-20 rotate-[10deg] place-items-center rounded-full border-[3px] border-dashed border-cocoa bg-butter text-center text-base sm:-bottom-5 sm:right-0 sm:size-[6.5rem] sm:text-[1.35rem] lg:-right-3 font-bold leading-none text-ink dark:border-linen dark:bg-terracota dark:text-night sm:-right-3"
          >
            <span>
              {extra.stamp[0]}
              <br />
              {extra.stamp[1]}
              <br />
              {extra.stamp[2]}
            </span>
          </div>
        </Reveal>

        <Reveal delay={100} className="order-1 flex flex-col items-center text-center lg:order-none lg:col-start-2 lg:row-start-1 lg:block lg:self-end lg:text-left">
          <p className="font-hand text-3xl font-bold text-[#a8430a] dark:text-tangerine">{extra.eyebrow}</p>
          <h2 className="mt-1 font-serif text-4xl font-semibold sm:text-5xl">
            {t.sectionTitle}
          </h2>
          <svg aria-hidden viewBox="0 0 200 12" fill="none" className="mt-2 w-40 text-terracota dark:text-tangerine">
            <path d="M2 8c20-8 40 6 60 0s40-8 60-2 60 6 76 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </Reveal>

        <Reveal delay={150} className="order-3 lg:order-none lg:col-start-2 lg:row-start-2 lg:self-start">
          <div className="space-y-4 text-left lg:mt-5 leading-relaxed sm:text-justify text-ink/75 dark:text-moon/75">
            {mainParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {beyondParagraph && (
            <div className="mt-6 flex items-start gap-3.5 rounded-[1.25rem] border-2 border-dashed border-terracota bg-cream px-5 py-4 dark:border-tangerine dark:bg-night">
              <svg aria-hidden viewBox="0 0 24 24" className="mt-0.5 size-7 shrink-0 fill-terracota dark:fill-tangerine">
                <path d="M12 0C12 7 17 12 24 12C17 12 12 17 12 24C12 17 7 12 0 12C7 12 12 7 12 0Z" />
              </svg>
              <p className="text-base leading-relaxed text-ink dark:text-moon">
                <strong>{extra.beyond}</strong> {beyondParagraph}
              </p>
            </div>
          )}

          <div className="mt-6">
            <h3 className="font-serif text-2xl font-semibold">{t.stackTitle}</h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {t.stack.map((name, i) => (
                <li
                  key={name}
                  className="inline-flex items-center gap-2.5 rounded-[0.875rem] border-2 border-[#f0cfae] bg-white py-2 pl-2.5 pr-3.5 text-[0.95rem] font-medium text-ink dark:border-dusk dark:bg-bark dark:text-moon"
                >
                  <StackIcon kind={stackIcons[i]} />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
