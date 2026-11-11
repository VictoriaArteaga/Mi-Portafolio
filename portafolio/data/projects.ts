export type ProjectTone =
  | "blush"
  | "crimson"
  | "tangerine"
  | "butter"
  | "terracota"
  | "cocoa";

export type Project = {
  title: string;
  /** Descripción por idioma. Si falta se usa el texto provisional de lib/copy.ts. */
  description?: { es: string; en: string };
  tags: string[];
  tone: ProjectTone;
  repo: string;
  demo: string;
  /** Imagen del proyecto en /public, con sus dimensiones intrínsecas. */
  image?: { src: string; width: number; height: number };
  /** Si es true, la miniatura de la tarjeta se recorta a lo ancho para ocupar el mismo alto que la de Arq 3D. */
  cropToArq?: boolean;
};

/** Proporción de la imagen de Arq 3D, usada como referencia para el alto de las miniaturas. */
export const ARQ_THUMB_RATIO = 1546 / 768;

// TODO: reemplazar descripciones, tags y enlaces por los reales de cada proyecto.
export const projects: Project[] = [
  {
    title: "Ñawi Nariño",
    description: {
      es: "Aplicación de aprendizaje móvil y API para explorar el patrimonio lingüístico de Nariño.",
      en: "Mobile learning app and API to explore the linguistic heritage of Nariño.",
    },
    tags: ["Next.js", "Tailwind", "TypeScript", "PostgreSQL"],
    tone: "terracota",
    repo: "https://github.com/VictoriaArteaga/NawiNarino.git",
    demo: "#",
    image: { src: "/projects/nawi-narino.svg", width: 759, height: 496 },
  },
  {
    title: "Respira",
    description: {
      es: "Aplicación de escritorio para apoyar el monitoreo de infecciones respiratorias agudas en menores de cinco años en Nariño.",
      en: "Desktop application to support the monitoring of acute respiratory infections in children under five in Nariño.",
    },
    tags: ["React", "CSS", "API", "PostgreSQL"],
    tone: "crimson",
    repo: "https://github.com/VictoriaArteaga/RESPIRA.git",
    demo: "https://respira-eta.vercel.app/",
    image: { src: "/projects/respira.svg", width: 1901, height: 986 },
  },
  {
    title: "Coco",
    description: {
      es: "Aplicación smartwatch y web: COCO registra y consulta hábitos de conejos domésticos. No diagnostica ni reemplaza la valoración veterinaria.",
      en: "COCO records and looks up the habits of pet rabbits. It does not diagnose or replace a veterinary assessment.",
    },
    tags: ["Next.js", "Tailwind", "PostgreSQL"],
    tone: "tangerine",
    repo: "https://github.com/VictoriaArteaga/COCO.git",
    demo: "https://coco-murex-omega.vercel.app/",
    image: { src: "/projects/coco.svg", width: 920, height: 713 },
  },
  {
    title: "Señas",
    description: {
      es: "Videojuego educativo 3D para aprender y practicar la Lengua de Señas Colombiana (LSC) con retroalimentación en tiempo real mediante visión artificial.",
      en: "3D educational video game to learn and practice Colombian Sign Language (LSC) with real-time feedback through computer vision.",
    },
    tags: ["Nest.js", "TypeScript","Unity", "C#", "MediaPipe", "PostgreSQL"],
    tone: "butter",
    repo: "https://github.com/VictoriaArteaga/SENAS.git",
    demo: "#",
    image: { src: "/projects/senas.svg", width: 890, height: 505 },
  },
  {
    title: "Arq 3D",
    description: {
      es: "Generación asistida por IA de diseños arquitectónicos y mobiliario, que transforma una fotografía de un terreno o espacio en un render 2D realista y, finalmente, en un modelo 3D navegable.",
      en: "AI-assisted generation of architectural and furniture designs that turns a photo of a plot or space into a realistic 2D render and, finally, a navigable 3D model.",
    },
    tags: ["Java", "SpringBoot", "TypeScript", "React", "TripoIA", "PostgreSQL"],
    tone: "blush",
    repo: "https://github.com/VictoriaArteaga/Proyecto-Final-Patrones-Backend.git",
    demo: "https://modelo-conceptual-3d.vercel.app/",
    image: { src: "/projects/arq-3d.svg", width: 1546, height: 768 },
  },
  {
    title: "KashiApp",
    description: {
      es: "Billetera digital diseñada bajo los principios de Arquitectura Hexagonal. El proyecto está enfocado en la modularidad, la seguridad y el cumplimiento de estándares de calidad ISO 25010.",
      en: "Digital wallet designed under Hexagonal Architecture principles. The project focuses on modularity, security and compliance with ISO 25010 quality standards.",
    },
    tags: ["Java", "SpringBoot", "TypeScript", "React", "PostgreSQL"],
    tone: "cocoa",
    repo: "https://github.com/VictoriaArteaga/hopeLink.git",
    demo: "https://kashiapp.vercel.app/",
    image: { src: "/projects/kashiapp.svg", width: 1600, height: 641 },
    cropToArq: true,
  },
];
