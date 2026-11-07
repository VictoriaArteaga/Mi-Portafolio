"use client";

import { useEffect } from "react";

/**
 * Los enlaces internos (#seccion) centran la sección en el área visible bajo la barra.
 * Si la sección es más alta que esa área, queda alineada justo debajo de la barra.
 */
export default function AnchorScroll() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
      const id = link?.getAttribute("href")?.slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();
      const navH = document.querySelector("header")?.offsetHeight ?? 0;
      const free = window.innerHeight - navH;
      const { top, height } = target.getBoundingClientRect();
      const offset = height >= free ? 0 : (free - height) / 2;
      window.scrollTo({ top: Math.max(0, window.scrollY + top - navH - offset) });
      history.pushState(null, "", `#${id}`);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
