import { ArrowRight, Download, Heart } from "./Icons";

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-gradient-to-b from-[#fff1e2] to-cream">
      {/* Manchas orgánicas de fondo */}
      <div aria-hidden className="absolute -left-24 top-1/2 -z-10 size-72 rounded-[45%_55%_60%_40%] bg-terracota/90" />
      <div aria-hidden className="absolute -right-20 -top-16 -z-10 size-72 rounded-[55%_45%_40%_60%] bg-tangerine/90" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:py-24">
        <div>
          <p className="font-hand flex items-center gap-2 text-3xl text-ink/80">
            Hola, soy Victoria <Heart className="size-5 text-terracota" />
          </p>
          <h1 className="mt-3 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Construyo interfaces que{" "}
            <span className="font-hand relative inline-block text-6xl font-bold text-terracota sm:text-7xl">
              cuentan historias.
              <svg aria-hidden viewBox="0 0 300 12" className="absolute -bottom-2 left-0 w-full text-terracota" fill="none">
                <path d="M2 8c60-8 120-8 296-2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-ink/75">
            Soy María Victoria Arteaga. Desarrollo frontend y diseño de interfaces con cariño por el detalle:
            ideas que se vuelven experiencias claras, cálidas y memorables.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-3 rounded-full bg-terracota py-3 pl-6 pr-4 text-sm font-semibold text-white shadow-[0_8px_20px_-8px] shadow-terracota transition-[transform,background-color] duration-150 ease-out-strong hover:bg-[#d4660f] active:scale-[0.97]"
            >
              Ver mis proyectos
              <span className="grid size-6 place-items-center rounded-full bg-white text-terracota">
                <ArrowRight className="size-3.5" />
              </span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-3 rounded-full border border-ink/10 bg-white/70 px-6 py-3 text-sm font-semibold text-ink transition-[transform,background-color] duration-150 ease-out-strong hover:bg-white active:scale-[0.97]"
            >
              Descargar CV
              <Download className="size-4" />
            </a>
          </div>
        </div>

        {/* Retrato: sustituye el bloque interior por <Image src="/victoria.png" ... /> */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-gradient-to-br from-tangerine to-terracota shadow-2xl shadow-terracota/30">
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-cocoa/90" />
            <span className="font-script absolute inset-0 grid place-items-center pb-10 text-[9rem] leading-none text-cream/90">
              V
            </span>
          </div>

          <div className="font-hand absolute -right-2 -top-4 w-32 rotate-6 rounded-md bg-cream p-3 text-center text-xl leading-5 text-ink shadow-lg transition-transform duration-300 ease-out-strong hover:rotate-2 sm:-right-8">
            CREATE
            <br />
            INSPIRE
            <br />
            REPEAT
          </div>

          <div aria-hidden className="absolute -right-3 top-1/2 flex flex-col gap-1.5 sm:-right-8">
            <span className="size-7 rounded-md bg-terracota shadow" />
            <span className="size-7 rounded-md bg-tangerine shadow" />
            <span className="size-7 rounded-md bg-cocoa shadow" />
          </div>
        </div>
      </div>
    </section>
  );
}
