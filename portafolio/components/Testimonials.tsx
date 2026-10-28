import Reveal from "./Reveal";
import { Quote } from "./Icons";

// TODO: reemplaza por testimonios reales (con permiso de quien los dio).
const testimonials = [
  { quote: "Aquí va un testimonio real sobre la calidad del trabajo y la experiencia de colaborar contigo.", name: "Nombre Apellido", role: "Cargo, Empresa" },
  { quote: "Aquí va un testimonio real sobre la comunicación, los tiempos y el resultado final.", name: "Nombre Apellido", role: "Cargo, Empresa" },
  { quote: "Aquí va un testimonio real sobre el cuidado por el detalle y la atención al cliente.", name: "Nombre Apellido", role: "Cargo, Empresa" },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.2em] text-terracota">KIND WORDS</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">What Clients Say</h2>
        </Reveal>

        <ul className="mt-14 grid gap-10 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <li key={i}>
              <Reveal delay={i * 90} className="h-full">
                <figure className="relative h-full rounded-3xl border border-sand bg-white p-7 pt-9 shadow-sm transition-[transform,box-shadow] duration-300 ease-out-strong hover:-translate-y-1 hover:shadow-lg hover:shadow-terracota/10">
                  <span className="absolute -top-5 left-6 grid size-10 place-items-center rounded-full bg-terracota text-white shadow-md">
                    <Quote className="size-4" />
                  </span>
                  <blockquote className="text-sm leading-relaxed text-ink/80">{t.quote}</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span aria-hidden className="grid size-10 place-items-center rounded-full bg-sand font-serif font-semibold text-cocoa">
                      {t.name[0]}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold">{t.name}</span>
                      <span className="block text-xs text-ink/60">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
