"use client";

import Image from "next/image";
import { useT } from "@/lib/prefs";
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
  const t = useT().about;
  return (
    <section id="sobre-mi" className="bg-[#fff1e2] py-20 dark:bg-umber sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[504px_minmax(0,1fr)]">
        <Reveal>
          {/* Polaroid */}
          <div className="relative mx-auto w-full max-w-[504px] -rotate-3 rounded-sm bg-white p-3 pb-10 shadow-xl transition-transform duration-300 ease-out-strong hover:rotate-0 dark:bg-bark dark:shadow-black/35">
            <div aria-hidden className="absolute -left-6 -top-3 h-8 w-20 -rotate-45 bg-butter/80" />
            <div className="relative aspect-[463/614] overflow-hidden bg-[#f1eee5] dark:bg-bark">
              <Image src="/about-vector.svg" alt="Ilustración vectorial de María Victoria Arteaga en un encuentro de investigación" fill unoptimized sizes="(min-width: 1024px) 480px, min(480px, calc(100vw - 64px))" className="object-cover object-center" />
            </div>
            <span className="font-hand absolute bottom-2 left-0 right-0 text-center text-2xl text-cocoa dark:text-linen">
              Victoria Arteaga
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-serif text-4xl font-semibold sm:text-5xl">
            {t.sectionTitle}
          </h2>
          <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight sm:text-3xl">
            {t.title}
          </h3>
          <p className="mt-5 max-w-lg leading-relaxed text-ink/75 dark:text-moon/75">
            {t.text}
          </p>

          <div className="mt-8">
            <h3 className="font-serif text-2xl font-semibold">{t.stackTitle}</h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4">
              {t.stack.map((name, i) => (
                <li key={name} className="flex items-center gap-2 text-sm font-medium text-ink dark:text-moon">
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
