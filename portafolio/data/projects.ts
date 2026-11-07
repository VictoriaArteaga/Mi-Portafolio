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
  /** Ruta en /public, p. ej. "/projects/respira.png". Si falta se muestra un placeholder. */
  image?: string;
};

// TODO: reemplazar descripciones, tags y enlaces por los reales de cada proyecto.
export const projects: Project[] = [
  {
    title: "Ñawi Nariño",
    tags: ["Next.js", "Tailwind", "TypeScript", "PostgreSQL"],
    tone: "terracota",
    repo: "https://github.com/VictoriaArteaga/NawiNarino.git",
    demo: "#",
  },
  {
    title: "Respira",
    description: {
      es: "Aplicación de escritorio académica para apoyar el monitoreo de infecciones respiratorias agudas en menores de cinco años en Nariño.",
      en: "Academic desktop application to support the monitoring of acute respiratory infections in children under five in Nariño.",
    },
    tags: ["React", "CSS", "API", "PostgreSQL"],
    tone: "crimson",
    repo: "https://github.com/VictoriaArteaga/RESPIRA.git",
    demo: "#",
  },
  {
    title: "Coco",
    description: {
      es: "COCO registra y consulta hábitos de conejos domésticos. No diagnostica ni reemplaza la valoración veterinaria.",
      en: "COCO records and looks up the habits of pet rabbits. It does not diagnose or replace a veterinary assessment.",
    },
    tags: ["Next.js", "Tailwind", "PostgreSQL"],
    tone: "tangerine",
    repo: "https://github.com/VictoriaArteaga/COCO.git",
    demo: "#",
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
    image: "/projects/senas.svg",
  },
  {
    title: "Arq 3D",
    description: {
      es: "Generación asistida por IA de diseños arquitectónicos y mobiliario, que transforma una fotografía de un terreno o espacio en un render 2D realista y, finalmente, en un modelo 3D navegable.",
      en: "AI-assisted generation of architectural and furniture designs that turns a photo of a plot or space into a realistic 2D render and, finally, a navigable 3D model.",
    },
    tags: ["Java", "SpringBoot", "TypeScript", "React", "TripoIA", "PostgreSQL"],
    tone: "blush",
    repo: "#",
    demo: "https://modelo-conceptual-3d.vercel.app/",
    image: "/projects/arq-3d.svg",
  },
  {
    title: "Hope Link",
    description: {
      es: "Api para la gestión integral de emergencias y respuesta ante desastres naturales.",
      en: "API for comprehensive emergency management and response to natural disasters.",
    },
    tags: ["Nest.js", "TypeScript","PostgreSQL"],
    tone: "cocoa",
    repo: "https://github.com/VictoriaArteaga/hopeLink.git",
    demo: "#",
  },
];
