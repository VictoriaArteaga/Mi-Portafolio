"use client";

import { useSyncExternalStore } from "react";
import { copy, type Lang } from "./copy";

export type Theme = "light" | "dark";

const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

const notify = () => listeners.forEach((cb) => cb());

function save(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {}
}

export function useTheme() {
  const theme = useSyncExternalStore<Theme>(
    subscribe,
    () => (document.documentElement.classList.contains("dark") ? "dark" : "light"),
    () => "light",
  );
  const setTheme = (next: Theme) => {
    document.documentElement.classList.toggle("dark", next === "dark");
    save("theme", next);
    notify();
  };
  return { theme, setTheme };
}

export function useLang() {
  const lang = useSyncExternalStore<Lang>(
    subscribe,
    () => (document.documentElement.lang === "en" ? "en" : "es"),
    () => "es",
  );
  const setLang = (next: Lang) => {
    document.documentElement.lang = next;
    document.title = copy[next].meta.title;
    save("lang", next);
    notify();
  };
  return { lang, setLang };
}

/** Textos de la interfaz en el idioma activo. */
export function useT() {
  return copy[useLang().lang];
}
