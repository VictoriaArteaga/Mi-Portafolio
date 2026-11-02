"use client";

import { useT } from "@/lib/prefs";
import { Logo, sections } from "./Navbar";
import { ArrowRight, Github, Instagram, Linkedin, Mail, Plane } from "./Icons";

// TODO: reemplaza por tus enlaces y correo reales.
const EMAIL = "hola@tudominio.com";

const socials = [
  { href: "#", label: "Instagram", icon: Instagram },
  { href: "#", label: "GitHub", icon: Github },
  { href: "#", label: "LinkedIn", icon: Linkedin },
];

export default function Footer() {
  const t = useT();
  const f = t.footer;
  const quick = sections.map((href, i) => ({ href, label: t.nav.links[i] }));
  return (
    <footer>
      <section id="contacto" className="relative overflow-hidden bg-terracota text-white">
        <div aria-hidden className="absolute -right-16 -top-20 size-64 rounded-full bg-tangerine/60" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <Plane className="hidden size-12 -rotate-12 text-white/70 sm:block" />
            <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              {f.titleStart}
              <br />
              {f.titleEnd}
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-sm text-white/90">{f.text}</p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-terracota transition-transform duration-150 ease-out-strong hover:scale-[1.03] active:scale-[0.97]"
            >
              {f.cta}
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <div className="bg-ink text-cream dark:border-t dark:border-cream/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 text-xs text-cream/60">{f.rights}</p>
          </div>

          <nav aria-label={f.quickLabel}>
            <h3 className="text-sm font-semibold">{f.quickLabel}</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-cream/70">
              {quick.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors duration-150 hover:text-terracota">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold">{f.follow}</h3>
            <ul className="mt-4 flex gap-3">
              {socials.map(({ href, label, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="grid size-10 place-items-center rounded-full border border-cream/20 transition-[transform,background-color,color] duration-150 ease-out-strong hover:bg-terracota hover:text-white active:scale-90"
                  >
                    <Icon className="size-[1.15rem]" />
                  </a>
                </li>
              ))}
            </ul>
            <a href={`mailto:${EMAIL}`} className="mt-5 inline-flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-terracota">
              <Mail className="size-4" />
              {EMAIL}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
