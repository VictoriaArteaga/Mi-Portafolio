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
    tone: "blush",
    repo: "https://github.com/VictoriaArteaga/NawiNarino.git",
    demo: "#",
  },
  {
    title: "Respira",
    tags: ["React", "CSS", "API", "PostgreSQL"],
    tone: "crimson",
    repo: "https://github.com/VictoriaArteaga/RESPIRA.git",
    demo: "#",
  },
  {
    title: "Coco",
    tags: ["Next.js", "Tailwind", "PostgreSQL"],
    tone: "tangerine",
    repo: "https://github.com/VictoriaArteaga/COCO.git",
    demo: "#",
  },
  {
    title: "Señas",
    tags: ["Nest.js", "TypeScript","Unity", "C#", "MediaPipe", "PostgreSQL"],
    tone: "butter",
    repo: "https://github.com/VictoriaArteaga/SENAS.git",
    demo: "#",
  },
  {
    title: "Arq 3D",
    tags: ["Java", "SpringBoot", "TypeScript", "React", "TripoIA", "PostgreSQL"],
    tone: "terracota",
    repo: "#",
    demo: "#",
  },
  {
    title: "Hope Link",
    tags: ["Nest.js", "TypeScript","PostgreSQL"],
    tone: "cocoa",
    repo: "https://github.com/VictoriaArteaga/hopeLink.git",
    demo: "#",
  },
];
