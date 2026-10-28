import Reveal from "./Reveal";
import { ArrowRight, Heart, Pencil, Spark } from "./Icons";

const values = [
  { icon: Pencil, label: "Estética limpia y juguetona" },
  { icon: Heart, label: "Detallista y confiable" },
  { icon: Spark, label: "Comunicación clara y a tiempo" },
];

export default function About() {
  return (
    <section id="sobre-mi" className="bg-[#fff1e2] py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 md:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          {/* Polaroid. Sustituye el degradado por <Image src="/about.jpg" fill ... /> */}
          <div className="relative mx-auto w-full max-w-xs -rotate-3 rounded-sm bg-white p-3 pb-10 shadow-xl transition-transform duration-300 ease-out-strong hover:rotate-0">
            <div aria-hidden className="absolute -left-6 -top-3 h-8 w-20 -rotate-45 bg-butter/80" />
            <div className="aspect-[4/5] bg-gradient-to-br from-sand to-tangerine" />
            <span className="font-hand absolute bottom-2 left-0 right-0 text-center text-2xl text-cocoa">
              Victoria Arteaga
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-xs font-bold tracking-[0.2em] text-terracota">SOBRE MÍ</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
            El diseño es la forma en que comunico ideas y emociones.
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-ink/75">
            Creo que una buena interfaz es más que algo bonito: es claridad, conexión y propósito. Me gusta
            unir código y diseño para que cada proyecto se vea cuidado, funcione con fluidez y se sienta
            humano.
          </p>

          <ul className="mt-8 grid gap-5 sm:grid-cols-3">
            {values.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 sm:flex-col sm:items-start">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-sand text-terracota">
                  <Icon className="size-5" />
                </span>
                <span className="text-sm font-medium text-ink/80">{label}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contacto"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-terracota px-6 py-3 text-sm font-semibold text-white transition-[transform,background-color] duration-150 ease-out-strong hover:bg-[#d4660f] active:scale-[0.97]"
          >
            Conoce más
            <ArrowRight className="size-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
