"use client";

import { useState, type FormEvent } from "react";
import { useLang, useT } from "@/lib/prefs";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/data/socials";
import { Logo, sections } from "./Navbar";
import { Github, Linkedin, Mail, Plane } from "./Icons";


const socials = [
  { href: GITHUB_URL, label: "GitHub", icon: Github },
  { href: LINKEDIN_URL, label: "LinkedIn", icon: Linkedin },
].filter((item) => item.href);

export default function Footer() {
  const t = useT();
  const { lang } = useLang();
  const f = t.footer;
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "unconfigured">("idle");
  const quick = sections.map((href, i) => ({ href, label: t.nav.links[i] }));

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Si defines NEXT_PUBLIC_FORMSPREE_ENDPOINT se usa Formspree; si no, FormSubmit envía a tu correo.
    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || `https://formsubmit.co/ajax/${EMAIL}`;

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
          _subject: `Nuevo mensaje de ${data.get("name")} desde tu portafolio`,
          _replyto: data.get("email"),
          _template: "table",
          _captcha: "false",
        }),
      });

      const result = await response.json().catch(() => null);
      if (!response.ok || result?.success === "false" || result?.success === false) {
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
      <section id="contacto" className="relative flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden bg-terracota py-20 text-ink dark:bg-dusk dark:text-moon sm:py-28">
        <div aria-hidden className="absolute -right-16 -top-20 size-64 rounded-full bg-tangerine/60 dark:bg-terracota/20" />
        <div
          aria-hidden
          className="absolute bottom-10 left-8 h-24 w-36 opacity-60 dark:opacity-25"
          style={{ backgroundImage: "radial-gradient(#fff6ec 2.5px, transparent 2.5px)", backgroundSize: "18px 18px" }}
        />
        <div className="relative mx-auto grid w-full max-w-[1440px] items-center gap-12 px-5 sm:px-8 md:grid-cols-2 md:gap-16 lg:gap-24 lg:px-12">
          <div className="flex flex-col gap-6">
            <p className="font-hand text-3xl font-bold lg:text-4xl">{lang === "es" ? "06 · hablemos" : "06 · let's talk"}</p>
            <h2 className="font-serif text-5xl font-semibold leading-[1.05] sm:text-[60px] lg:text-[84px]">
              {f.titleStart}{" "}
              <span className="font-hand text-6xl font-bold text-cream sm:text-7xl lg:text-[104px] dark:text-tangerine">{f.titleEnd}</span>
            </h2>
            <p className="max-w-xl text-lg leading-relaxed lg:text-2xl">{f.text}</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative grid gap-6 rounded-[28px] bg-cream p-7 lg:p-12 text-ink shadow-[10px_10px_0_#5a3720] dark:border-2 dark:border-cream/20 dark:bg-bark dark:text-moon dark:shadow-[10px_10px_0_#e87524] sm:p-8"
            aria-label={f.submit}
          >
            <span aria-hidden className="absolute -top-3.5 right-7 h-[26px] w-20 rotate-[4deg] bg-butter/95" />
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold lg:text-base" htmlFor="contact-name">
                {f.name}
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="min-h-12 rounded-xl lg:min-h-14 border-2 border-[#f0cfae] bg-white px-4 text-base font-normal text-ink outline-none focus-visible:ring-2 focus-visible:ring-terracota dark:border-cream/25 dark:bg-night dark:text-moon"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold lg:text-base" htmlFor="contact-email">
                {f.email}
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-h-12 rounded-xl lg:min-h-14 border-2 border-[#f0cfae] bg-white px-4 text-base font-normal text-ink outline-none focus-visible:ring-2 focus-visible:ring-terracota dark:border-cream/25 dark:bg-night dark:text-moon"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-bold lg:text-base" htmlFor="contact-message">
              {f.message}
              <textarea
                id="contact-message"
                name="message"
                rows={7}
                required
                className="resize-y rounded-xl border-2 border-[#f0cfae] bg-white px-4 py-3 text-base font-normal text-ink outline-none focus-visible:ring-2 focus-visible:ring-terracota dark:border-cream/25 dark:bg-night dark:text-moon"
              />
            </label>

            <div className="flex flex-col items-start gap-3">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex min-h-12 items-center gap-2.5 rounded-2xl bg-cocoa px-7 py-3 text-base lg:min-h-14 lg:px-9 lg:text-lg font-bold text-sand transition-[transform,background-color] duration-150 ease-out-strong hover:bg-[#6b4328] active:scale-[0.97] disabled:cursor-wait disabled:opacity-70 dark:bg-terracota dark:text-night dark:hover:bg-tangerine"
              >
                {status === "sending" ? f.sending : f.submit}
                <Plane className="size-5" />
              </button>
              {status !== "idle" && status !== "sending" && (
                <div
                  role={status === "success" ? "status" : "alert"}
                  aria-live={status === "success" ? "polite" : "assertive"}
                  className={`flex w-full items-center gap-3 rounded-2xl border-2 px-4 py-3 text-base font-semibold leading-snug ${
                    status === "success"
                      ? "border-cocoa bg-butter text-ink dark:border-butter/40 dark:bg-butter/15 dark:text-butter"
                      : "border-crimson bg-[#ffd9dd] text-ink dark:border-blush/50 dark:bg-crimson/20 dark:text-moon"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`grid size-8 shrink-0 place-items-center rounded-full ${
                      status === "success" ? "bg-cocoa text-butter dark:bg-butter dark:text-night" : "bg-crimson text-white"
                    }`}
                  >
                    {status === "success" ? (
                      <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m5 12 5 5 9-10" />
                      </svg>
                    ) : (
                      <span className="text-lg font-bold leading-none">!</span>
                    )}
                  </span>
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
                    target="_blank"
                    rel="noopener noreferrer"
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
