"use client";

import { useState, type FormEvent } from "react";
import { useT } from "@/lib/prefs";
import { Logo, sections } from "./Navbar";
import { Github, Linkedin, Mail, Plane } from "./Icons";

const EMAIL = "mrvctrarteaga@gmail.com";

const socials = [
  { href: "#", label: "GitHub", icon: Github },
  { href: "#", label: "LinkedIn", icon: Linkedin },
];

export default function Footer() {
  const t = useT();
  const f = t.footer;
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "unconfigured">("idle");
  const quick = sections.map((href, i) => ({ href, label: t.nav.links[i] }));

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    if (!endpoint) {
      setStatus("unconfigured");
      return;
    }

    setStatus("sending");
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <footer>
      <section id="contacto" className="relative overflow-hidden bg-terracota text-white dark:bg-dusk dark:text-moon">
        <div aria-hidden className="absolute -right-16 -top-20 size-64 rounded-full bg-tangerine/60" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:items-start md:gap-16">
          <div>
            <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl">{f.contactTitle}</h2>
            <div className="flex items-center gap-5">
              <Plane className="hidden size-12 -rotate-12 text-white/70 sm:block" />
              <p className="mt-5 font-serif text-2xl font-medium leading-tight">
                {f.titleStart} {f.titleEnd}
              </p>
            </div>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-white/90">{f.text}</p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-5" aria-label={f.submit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold" htmlFor="contact-name">
                {f.name}
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="min-h-12 rounded-lg bg-white px-4 text-base font-normal text-ink outline-none focus-visible:ring-2 focus-visible:ring-tangerine"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold" htmlFor="contact-email">
                {f.email}
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-h-12 rounded-lg bg-white px-4 text-base font-normal text-ink outline-none focus-visible:ring-2 focus-visible:ring-tangerine"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-semibold" htmlFor="contact-message">
              {f.message}
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                className="resize-y rounded-lg bg-white px-4 py-3 text-base font-normal text-ink outline-none focus-visible:ring-2 focus-visible:ring-tangerine"
              />
            </label>

            <div className="flex flex-col items-start gap-3">
              <button
                type="submit"
                disabled={status === "sending"}
                className="min-h-12 rounded-full bg-white px-6 py-3 text-sm font-semibold text-terracota transition-transform duration-150 ease-out-strong hover:scale-[1.03] active:scale-[0.97] disabled:cursor-wait disabled:opacity-70 dark:bg-terracota dark:text-night dark:hover:bg-tangerine"
              >
                {status === "sending" ? f.sending : f.submit}
              </button>
              {status !== "idle" && status !== "sending" && (
                <div
                  role={status === "success" ? "status" : "alert"}
                  className="flex items-center gap-3 text-sm leading-relaxed"
                  aria-live={status === "success" ? "polite" : "assertive"}
                >
                  <span>{status === "success" ? f.success : status === "error" ? f.error : f.unconfigured}</span>
                </div>
              )}
            </div>
          </form>
        </div>
      </section>

      <div className="bg-ink text-cream dark:border-t dark:border-cream/10 dark:bg-night dark:text-moon">
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
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  aria-label={f.emailLinkLabel}
                  title={f.emailLinkLabel}
                  className="grid size-10 place-items-center rounded-full border border-cream/20 text-cream/70 transition-colors hover:bg-terracota hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tangerine"
                >
                  <Mail className="size-[1.15rem]" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
