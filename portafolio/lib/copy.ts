export type Lang = "es" | "en";

const es = {
  meta: {
    title: "María Victoria Arteaga | Portafolio",
  },
  nav: {
    label: "Principal",
    home: "Victoria Arteaga, inicio",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    cta: "Trabajemos juntos",
    links: ["Inicio", "Sobre mí", "Experiencia", "Proyectos", "Testimonios", "Contacto"],
    toLight: "Cambiar a modo claro",
    toDark: "Cambiar a modo oscuro",
    toLang: "Cambiar el idioma a inglés",
  },
  hero: {
    greeting: "Hola, soy Victoria",
    titleStart: "Construyo interfaces que",
    titleAccent: "cuentan historias.",
    intro:
      "Soy María Victoria Arteaga. Desarrollo frontend y diseño de interfaces con cariño por el detalle: ideas que se vuelven experiencias claras, cálidas y memorables.",
    projects: "Ver mis proyectos",
    cv: "Descargar CV",
  },
  about: {
    eyebrow: "SOBRE MÍ",
    title: "El diseño es la forma en que comunico ideas y emociones.",
    text: "Creo que una buena interfaz es más que algo bonito: es claridad, conexión y propósito. Me gusta unir código y diseño para que cada proyecto se vea cuidado, funcione con fluidez y se sienta humano.",
    values: ["Estética limpia y juguetona", "Detallista y confiable", "Comunicación clara y a tiempo"],
    more: "Conoce más",
  },
  experience: {
    eyebrow: "TRAYECTORIA",
    title: "Experiencia y herramientas",
    // TODO: ajusta tu trayectoria, herramientas y niveles a la realidad.
    timeline: [
      { period: "2025 — Actualidad", role: "Tu cargo actual", place: "Empresa o proyecto", note: "Una línea sobre lo que construyes y el impacto que tiene." },
      { period: "2024 — 2025", role: "Cargo anterior", place: "Empresa o proyecto", note: "Una línea sobre responsabilidades y logros." },
      { period: "2022 — 2024", role: "Formación", place: "Universidad o programa", note: "Qué estudiaste y qué te llevaste." },
    ],
    skills: ["Frontend", "Diseño de interfaces", "Animación y microinteracciones", "Accesibilidad", "Backend y datos"],
  },
  projects: {
    eyebrow: "TRABAJO DESTACADO",
    title: "Proyectos seleccionados",
    description: "Descripción breve del proyecto y del problema que resuelve.",
    demo: "Ver demo",
    repo: (title: string) => `Repositorio de ${title}`,
    shot: (title: string) => `Captura de ${title}`,
  },
  testimonials: {
    eyebrow: "PALABRAS AMABLES",
    title: "Lo que dicen mis clientes",
    // TODO: reemplaza por testimonios reales (con permiso de quien los dio).
    items: [
      { quote: "Aquí va un testimonio real sobre la calidad del trabajo y la experiencia de colaborar contigo.", name: "Nombre Apellido", role: "Cargo, Empresa" },
      { quote: "Aquí va un testimonio real sobre la comunicación, los tiempos y el resultado final.", name: "Nombre Apellido", role: "Cargo, Empresa" },
      { quote: "Aquí va un testimonio real sobre el cuidado por el detalle y la atención al cliente.", name: "Nombre Apellido", role: "Cargo, Empresa" },
    ],
  },
  footer: {
    titleStart: "¿Tienes un proyecto",
    titleEnd: "en mente?",
    text: "Me encantará escuchar tus ideas y ayudarte a hacerlas realidad.",
    cta: "Escríbeme",
    rights: "© 2026 María Victoria Arteaga. Todos los derechos reservados.",
    quickLabel: "Enlaces rápidos",
    follow: "Sígueme",
  },
};

export type Copy = typeof es;

const en: Copy = {
  meta: {
    title: "María Victoria Arteaga | Portfolio",
  },
  nav: {
    label: "Main",
    home: "Victoria Arteaga, home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    cta: "Let's Work Together",
    links: ["Home", "About me", "Experience", "Projects", "Testimonials", "Contact"],
    toLight: "Switch to light mode",
    toDark: "Switch to dark mode",
    toLang: "Cambiar el idioma a español",
  },
  hero: {
    greeting: "Hi, I'm Victoria",
    titleStart: "I build interfaces that",
    titleAccent: "tell stories.",
    intro:
      "I'm María Victoria Arteaga. I do frontend development and interface design with a love for detail: ideas that turn into clear, warm and memorable experiences.",
    projects: "See my projects",
    cv: "Download CV",
  },
  about: {
    eyebrow: "ABOUT ME",
    title: "Design is how I communicate ideas and emotions.",
    text: "I believe a good interface is more than something pretty: it's clarity, connection and purpose. I like to blend code and design so every project looks polished, runs smoothly and feels human.",
    values: ["Clean, playful aesthetics", "Detail-oriented and reliable", "Clear, on-time communication"],
    more: "Learn more",
  },
  experience: {
    eyebrow: "JOURNEY",
    title: "Experience & tools",
    timeline: [
      { period: "2025 — Present", role: "Your current role", place: "Company or project", note: "One line about what you build and the impact it has." },
      { period: "2024 — 2025", role: "Previous role", place: "Company or project", note: "One line about responsibilities and achievements." },
      { period: "2022 — 2024", role: "Education", place: "University or program", note: "What you studied and what you took away." },
    ],
    skills: ["Frontend", "Interface design", "Animation & microinteractions", "Accessibility", "Backend & data"],
  },
  projects: {
    eyebrow: "FEATURED WORK",
    title: "Selected Projects",
    description: "Short description of the project and the problem it solves.",
    demo: "View Demo",
    repo: (title) => `${title} repository`,
    shot: (title) => `Screenshot of ${title}`,
  },
  testimonials: {
    eyebrow: "KIND WORDS",
    title: "What Clients Say",
    items: [
      { quote: "A real testimonial goes here about the quality of the work and what it's like to collaborate with you.", name: "First Last", role: "Role, Company" },
      { quote: "A real testimonial goes here about communication, timing and the final result.", name: "First Last", role: "Role, Company" },
      { quote: "A real testimonial goes here about the attention to detail and client care.", name: "First Last", role: "Role, Company" },
    ],
  },
  footer: {
    titleStart: "Got a project",
    titleEnd: "in mind?",
    text: "I'd love to hear your ideas and help bring them to life.",
    cta: "Get in touch",
    rights: "© 2026 María Victoria Arteaga. All rights reserved.",
    quickLabel: "Quick links",
    follow: "Follow me",
  },
};

export const copy: Record<Lang, Copy> = { es, en };
