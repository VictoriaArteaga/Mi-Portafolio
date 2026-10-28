import Reveal from "./Reveal";

// TODO: ajusta tu trayectoria, herramientas y niveles (0 a 1) a la realidad.
const timeline = [
  { period: "2025 — Actualidad", role: "Tu cargo actual", place: "Empresa o proyecto", note: "Una línea sobre lo que construyes y el impacto que tiene." },
  { period: "2024 — 2025", role: "Cargo anterior", place: "Empresa o proyecto", note: "Una línea sobre responsabilidades y logros." },
  { period: "2022 — 2024", role: "Formación", place: "Universidad o programa", note: "Qué estudiaste y qué te llevaste." },
];

const tools = ["Next.js", "React", "TypeScript", "Tailwind", "Figma", "Git", "Node"];

const skills = [
  { name: "Frontend", level: 0.9 },
  { name: "Diseño de interfaces", level: 0.85 },
  { name: "Animación y microinteracciones", level: 0.8 },
  { name: "Accesibilidad", level: 0.75 },
  { name: "Backend y datos", level: 0.65 },
];

export default function Experiencie() {
  return (
    <section id="experiencia" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.2em] text-terracota">TRAYECTORIA</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">Experiencia y herramientas</h2>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <ol className="relative ml-3 space-y-8 border-l-2 border-dashed border-terracota/40">
              {timeline.map((t) => (
                <li key={t.period} className="relative pl-8">
                  <span aria-hidden className="absolute -left-[0.6rem] top-1 size-4 rounded-full border-4 border-cream bg-terracota" />
                  <p className="text-xs font-semibold tracking-wide text-terracota">{t.period}</p>
                  <h3 className="mt-1 font-serif text-xl font-semibold">{t.role}</h3>
                  <p className="text-sm font-medium text-cocoa">{t.place}</p>
                  <p className="mt-1 max-w-sm text-sm text-ink/70">{t.note}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={100} passive className="reveal">
            <ul className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-2xl border border-sand bg-white px-4 py-3 text-sm font-semibold shadow-sm transition-transform duration-200 ease-out-strong hover:-translate-y-1"
                >
                  {tool}
                </li>
              ))}
            </ul>

            <ul className="mt-10 space-y-5">
              {skills.map((s, i) => (
                <li key={s.name}>
                  <div className="mb-1.5 text-sm font-medium">{s.name}</div>
                  <div className="h-2 overflow-hidden rounded-full bg-sand/70">
                    <div
                      className="skill-bar h-full rounded-full bg-terracota"
                      style={{ "--level": s.level, "--bar-delay": `${200 + i * 90}ms` } as React.CSSProperties}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
