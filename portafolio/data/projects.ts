export type ProjectTone =
  | "blush"
  | "crimson"
  | "tangerine"
  | "butter"
  | "terracota"
  | "cocoa";

export type Project = {
  title: string;
  description: string;
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
    description: "Descripción breve del proyecto y del problema que resuelve.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    tone: "blush",
    repo: "#",
    demo: "#",
  },
  {
    title: "Respira",
    description: "Descripción breve del proyecto y del problema que resuelve.",
    tags: ["React", "CSS", "API"],
    tone: "crimson",
    repo: "#",
    demo: "#",
  },
  {
    title: "Coco",
    description: "Descripción breve del proyecto y del problema que resuelve.",
    tags: ["Next.js", "Tailwind"],
    tone: "tangerine",
    repo: "#",
    demo: "#",
  },
  {
    title: "Teñas",
    description: "Descripción breve del proyecto y del problema que resuelve.",
    tags: ["React", "Node", "SQL"],
    tone: "butter",
    repo: "#",
    demo: "#",
  },
  {
    title: "Ar 3D",
    description: "Descripción breve del proyecto y del problema que resuelve.",
    tags: ["Three.js", "WebXR", "JS"],
    tone: "terracota",
    repo: "#",
    demo: "#",
  },
  {
    title: "Hope Link",
    description: "Descripción breve del proyecto y del problema que resuelve.",
    tags: ["Next.js", "Prisma", "TS"],
    tone: "cocoa",
    repo: "#",
    demo: "#",
  },
];
