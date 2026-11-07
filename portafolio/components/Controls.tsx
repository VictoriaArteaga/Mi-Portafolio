"use client";

import { useLang, useT, useTheme } from "@/lib/prefs";
import { Moon, Sun } from "./Icons";

const btn =
  "grid size-10 place-items-center rounded-full border border-cream/20 text-cream transition-[transform,background-color,color] duration-150 ease-out-strong hover:bg-terracota hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tangerine active:scale-90";

export default function Controls() {
  const t = useT();
  const { lang, setLang } = useLang();
  const { theme, setTheme } = useTheme();
  const dark = theme === "dark";

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => setLang(lang === "es" ? "en" : "es")}
        aria-label={t.nav.toLang}
        className={`${btn} text-xs font-bold tracking-wide`}
      >
        {lang === "es" ? "EN" : "ES"}
      </button>
      <button
        type="button"
        onClick={() => setTheme(dark ? "light" : "dark")}
        aria-label={dark ? t.nav.toLight : t.nav.toDark}
        aria-pressed={dark}
        className={btn}
      >
        {dark ? <Sun className="size-[1.1rem]" /> : <Moon className="size-[1.1rem]" />}
      </button>
    </div>
  );
}
