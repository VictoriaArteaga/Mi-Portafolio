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
    contact: "¡Contáctame!",
    cv: "Descargar CV",
  },
  about: {
    sectionTitle: "Sobre mí",
    stackTitle: "Mi stack",
    stack: ["Nest.js", "SpringBoot", "FastAPI", "Next.js", "React", "Unity", "PostgreSQL", "Realidad virtual", "AWS"],
  },
  experience: {
    title: "Trayectoria",
    workTitle: "Experiencia laboral",
    academicTitle: "Experiencia académica",
    workEmpty: "La experiencia laboral se añadirá próximamente.",
    academicEmpty: "La experiencia académica se añadirá próximamente.",
  },
  projects: {
    title: "Proyectos",
    description: "Descripción breve del proyecto y del problema que resuelve.",
    demo: "Ver demo",
    repo: (title: string) => `Repositorio de ${title}`,
    shot: (title: string) => `Captura de ${title}`,
  },
  testimonials: {
    title: "Testimonios",
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
    contact: "Contact me!",
    cv: "Download CV",
  },
  about: {
    sectionTitle: "About me",
    stackTitle: "My stack",
    stack: ["Nest.js", "SpringBoot", "FastAPI", "Next.js", "React", "Unity", "PostgreSQL", "Virtual reality", "AWS"],
  },
  experience: {
    title: "Career",
    workTitle: "Work experience",
    academicTitle: "Academic experience",
    workEmpty: "Work experience will be added soon.",
    academicEmpty: "Academic experience will be added soon.",
  },
  projects: {
    title: "Projects",
    description: "Short description of the project and the problem it solves.",
    demo: "View Demo",
    repo: (title) => `${title} repository`,
    shot: (title) => `Screenshot of ${title}`,
  },
  testimonials: {
    title: "Testimonials",
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
