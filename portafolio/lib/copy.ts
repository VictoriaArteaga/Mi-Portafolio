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
    links: ["Inicio", "Sobre mí", "Proyectos", "Experiencia", "Testimonios", "Logros y Certificados", "Contacto"],
    toLight: "Cambiar a modo claro",
    toDark: "Cambiar a modo oscuro",
    toLang: "Cambiar el idioma a inglés",
  },
  hero: {
    greeting: "Hola, soy María Victoria",
    titleStart: "Construyo interfaces que",
    titleAccent: "cuentan historias.",
    intro:
      "Soy María Victoria Arteaga. Desarrollo frontend y diseño de interfaces con cariño por el detalle: ideas que se vuelven experiencias claras, cálidas y memorables.",
    contact: "¡Contáctame!",
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
    title: "Trayectoria",
    workTitle: "Experiencia laboral",
    academicTitle: "Experiencia académica",
    workEmpty: "La experiencia laboral se añadirá próximamente.",
    academicEmpty: "La experiencia académica se añadirá próximamente.",
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
    eyebrow: "TESTIMONIOS",
    items: [
      { name: "Ing. Daniel Arteaga", quote: "Aquí va un testimonio real sobre el cuidado por el detalle y la atención al cliente." },
    ],
  },
  achievements: {
    title: "Logros y Certificados",
    empty: "Aquí aparecerán mis logros, reconocimientos y certificados.",
    viewCertificate: "Ver certificado",
  },
  footer: {
    contactTitle: "Contacto",
    titleStart: "¿Tienes un proyecto",
    titleEnd: "en mente?",
    text: "Me encantará escuchar tus ideas y ayudarte a hacerlas realidad.",
    emailLinkLabel: "Enviar correo a mrvctrarteaga@gmail.com",
    name: "Nombre",
    email: "Correo electrónico",
    message: "Descripción",
    submit: "Enviar mensaje",
    sending: "Enviando...",
    success: "Mensaje enviado. Gracias por escribirme.",
    error: "No se pudo enviar el mensaje. Inténtalo de nuevo más tarde.",
    unconfigured: "El formulario aún no está conectado. Inténtalo de nuevo más tarde.",
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
    links: ["Home", "About me", "Projects", "Experience", "Testimonials", "Achievements & Certificates", "Contact"],
    toLight: "Switch to light mode",
    toDark: "Switch to dark mode",
    toLang: "Cambiar el idioma a español",
  },
  hero: {
    greeting: "Hi, I'm María Victoria",
    titleStart: "I build interfaces that",
    titleAccent: "tell stories.",
    intro:
      "I'm María Victoria Arteaga. I do frontend development and interface design with a love for detail: ideas that turn into clear, warm and memorable experiences.",
    contact: "Contact me!",
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
    title: "Career",
    workTitle: "Work experience",
    academicTitle: "Academic experience",
    workEmpty: "Work experience will be added soon.",
    academicEmpty: "Academic experience will be added soon.",
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
    eyebrow: "TESTIMONIALS",
    items: [
      { name: "Ing. Daniel Arteaga", quote: "A real testimonial goes here about attention to detail and client care." },
    ],
  },
  achievements: {
    title: "Achievements & Certificates",
    empty: "My achievements, awards, and certificates will appear here.",
    viewCertificate: "View certificate",
  },
  footer: {
    contactTitle: "Contact",
    titleStart: "Got a project",
    titleEnd: "in mind?",
    text: "I'd love to hear your ideas and help bring them to life.",
    emailLinkLabel: "Email mrvctrarteaga@gmail.com",
    name: "Name",
    email: "Email address",
    message: "Description",
    submit: "Send message",
    sending: "Sending...",
    success: "Message sent. Thanks for reaching out.",
    error: "The message couldn't be sent. Please try again later.",
    unconfigured: "The form isn't connected yet. Please try again later.",
    rights: "© 2026 María Victoria Arteaga. All rights reserved.",
    quickLabel: "Quick links",
    follow: "Follow me",
  },
};

export const copy: Record<Lang, Copy> = { es, en };
