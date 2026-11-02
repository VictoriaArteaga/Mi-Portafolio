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
    tags: ["Next.js", "Tailwind", "TypeScript"],
    tone: "blush",
    repo: "#",
    demo: "#",
  },
  {
    title: "Respira",
    tags: ["React", "CSS", "API"],
    tone: "crimson",
    repo: "#",
    demo: "#",
  },
  {
    title: "Coco",
    tags: ["Next.js", "Tailwind"],
    tone: "tangerine",
    repo: "#",
    demo: "#",
  },
  {
    title: "Teñas",
    tags: ["React", "Node", "SQL"],
    tone: "butter",
    repo: "#",
    demo: "#",
  },
  {
    title: "Ar 3D",
    tags: ["Three.js", "WebXR", "JS"],
    tone: "terracota",
    repo: "#",
    demo: "#",
  },
  {
    title: "Hope Link",
    tags: ["Next.js", "Prisma", "TS"],
    tone: "cocoa",
    repo: "#",
    demo: "#",
  },
];
