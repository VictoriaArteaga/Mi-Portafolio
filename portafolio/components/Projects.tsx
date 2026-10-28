import Image from "next/image";
import Reveal from "./Reveal";
import { Github } from "./Icons";
import { projects, type ProjectTone } from "@/data/projects";

type Style = { card: string; frame: string; title: string; text: string; tag: string; btn: string; gh: string };

const tones: Record<ProjectTone, Style> = {
  blush: { card: "bg-blush", frame: "border-crimson", title: "text-crimson", text: "text-crimson", tag: "border-white/80 text-white", btn: "bg-crimson text-white", gh: "text-crimson" },
  crimson: { card: "bg-crimson", frame: "border-white", title: "text-white", text: "text-white", tag: "border-white/80 text-white", btn: "bg-white text-crimson", gh: "text-white" },
  tangerine: { card: "bg-tangerine", frame: "border-white", title: "text-white", text: "text-white", tag: "border-white/80 text-white", btn: "bg-white text-terracota", gh: "text-white" },
  butter: { card: "bg-butter", frame: "border-crimson", title: "text-crimson", text: "text-crimson", tag: "border-crimson/70 text-crimson", btn: "bg-crimson text-white", gh: "text-crimson" },
  terracota: { card: "bg-terracota", frame: "border-cocoa", title: "text-cocoa", text: "text-cocoa", tag: "border-cocoa/70 text-cocoa", btn: "bg-cocoa text-terracota", gh: "text-cocoa" },
  cocoa: { card: "bg-cocoa", frame: "border-butter", title: "text-white", text: "text-white", tag: "border-white/80 text-white", btn: "bg-white text-cocoa", gh: "text-white" },
};

// Inclinaciones alternas, como cartas esparcidas sobre una mesa.
const tilts = ["-rotate-[8deg]", "rotate-[6deg]", "-rotate-[5deg]", "rotate-[9deg]", "rotate-[5deg]", "-rotate-[7deg]"];

export default function Projects() {
  return (
    <section id="proyectos" className="overflow-hidden bg-sand py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.2em] text-terracota">FEATURED WORK</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">Selected Projects</h2>
        </Reveal>

        <ul className="mt-14 grid gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 lg:grid-cols-3">
          {projects.map((p, i) => {
            const s = tones[p.tone];
            return (
              <li key={p.title} className="flex justify-center">
                <Reveal delay={(i % 3) * 80}>
                  <article
                    className={`relative w-72 max-w-full rounded-[2rem] p-3 shadow-lg shadow-cocoa/20 transition-transform duration-300 ease-out-strong hover:-translate-y-2 hover:rotate-0 ${tilts[i % tilts.length]} ${s.card}`}
                  >
                    <div className={`flex h-full flex-col rounded-[1.6rem] border-[1.5px] p-4 ${s.frame}`}>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#c7d0da]">
                        {p.image && <Image src={p.image} alt={`Captura de ${p.title}`} fill sizes="288px" className="object-cover" />}
                      </div>

                      <h3 className={`font-script mt-3 text-4xl leading-none ${s.title}`}>{p.title}</h3>
                      <p className={`mt-2 text-sm leading-snug ${s.text}`}>{p.description}</p>

                      <ul className="mt-3 flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <li key={t} className={`rounded-md border px-2 py-0.5 text-[0.7rem] font-semibold ${s.tag}`}>
                            {t}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 flex items-center justify-end gap-3">
                        <a
                          href={p.repo}
                          aria-label={`Repositorio de ${p.title}`}
                          className={`grid size-9 place-items-center rounded-full transition-transform duration-150 ease-out-strong hover:scale-110 active:scale-90 ${s.gh}`}
                        >
                          <Github className="size-6" />
                        </a>
                        <a
                          href={p.demo}
                          className={`rounded-md px-4 py-2 text-sm font-bold transition-transform duration-150 ease-out-strong active:scale-[0.96] ${s.btn}`}
                        >
                          Ver Demo
                        </a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
