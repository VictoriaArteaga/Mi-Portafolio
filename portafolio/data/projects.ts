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
  technicalDetails?: {
    es: { label: string; value: string }[];
    en: { label: string; value: string }[];
  };
  note?: { es: string; en: string };
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
      es: "App móvil educativa y cultural para aprender y explorar las lenguas y los pueblos indígenas de Nariño. Incluye un explorador con IA que responde citando documentos reales.",
      en: "Educational and cultural mobile app to learn about and explore the languages and Indigenous peoples of Nariño. Includes an AI explorer that answers with citations from real documents.",
    },
    technicalDetails: {
      es: [
        { label: "Lenguajes", value: "TypeScript, Python" },
        { label: "Frameworks", value: "Expo / React Native, FastAPI" },
        { label: "Base de datos", value: "PostgreSQL (Supabase)" },
        { label: "IA aplicada", value: "RAG con citas, embeddings bge-m3 y gpt-oss-120b vía Groq" },
      ],
      en: [
        { label: "Languages", value: "TypeScript, Python" },
        { label: "Frameworks", value: "Expo / React Native, FastAPI" },
        { label: "Database", value: "PostgreSQL (Supabase)" },
        { label: "Applied AI", value: "Cited RAG with bge-m3 embeddings and gpt-oss-120b via Groq" },
      ],
    },
    note: {
      es: "Los textos educativos aún no han sido verificados por hablantes.",
      en: "The educational texts have not yet been verified by speakers.",
    },
    tags: ["App móvil", "React Native", "FastAPI", "RAG", "Supabase"],
    tone: "terracota",
    repo: "https://github.com/VictoriaArteaga/NawiNarino.git",
    demo: "#",
    image: { src: "/projects/nawi-narino.svg", width: 759, height: 496 },
  },
  {
    title: "Respira",
    description: {
      es: "Aplicación de escritorio para monitorear infecciones respiratorias agudas en menores de 5 años en Nariño, con indicadores por municipio y semana epidemiológica. No es una herramienta de diagnóstico.",
      en: "Desktop application for monitoring acute respiratory infections in children under 5 in Nariño, with indicators by municipality and epidemiological week. It is not a diagnostic tool.",
    },
    technicalDetails: {
      es: [
        { label: "Lenguajes", value: "Python, TypeScript" },
        { label: "Frameworks", value: "FastAPI, React, Electron" },
        { label: "Base de datos", value: "PostgreSQL" },
        { label: "IA aplicada", value: "Pronósticos experimentales de atenciones por IRA con HistGradientBoosting (scikit-learn)" },
      ],
      en: [
        { label: "Languages", value: "Python, TypeScript" },
        { label: "Frameworks", value: "FastAPI, React, Electron" },
        { label: "Database", value: "PostgreSQL" },
        { label: "Applied AI", value: "Experimental forecasts of ARI visits with HistGradientBoosting (scikit-learn)" },
      ],
    },
    tags: ["Python", "FastAPI", "React", "Electron", "PostgreSQL", "scikit-learn"],
    tone: "crimson",
    repo: "https://github.com/VictoriaArteaga/RESPIRA.git",
    demo: "https://respira-eta.vercel.app/",
    image: { src: "/projects/respira.svg", width: 1901, height: 986 },
  },
  {
    title: "Coco",
    description: {
      es: "Plataforma web y para smartwatch que registra hábitos de conejos domésticos (alimentación, agua, sueño, juego y comportamiento) y detecta cambios en su rutina. No reemplaza la valoración veterinaria.",
      en: "Web and smartwatch platform for tracking pet rabbits' habits (feeding, water, sleep, play, and behavior) and detecting changes in their routine. It does not replace veterinary assessment.",
    },
    technicalDetails: {
      es: [
        { label: "Lenguajes", value: "Java, TypeScript, Kotlin" },
        { label: "Frameworks", value: "Spring Boot, Next.js, Jetpack Compose (Wear OS)" },
        { label: "Base de datos", value: "PostgreSQL (H2 en desarrollo)" },
        { label: "IA aplicada", value: "Google Gemini para análisis preventivo y Vosk para dictado por voz sin conexión" },
      ],
      en: [
        { label: "Languages", value: "Java, TypeScript, Kotlin" },
        { label: "Frameworks", value: "Spring Boot, Next.js, Jetpack Compose (Wear OS)" },
        { label: "Database", value: "PostgreSQL (H2 in development)" },
        { label: "Applied AI", value: "Google Gemini for preventive analysis and Vosk for offline voice dictation" },
      ],
    },
    note: {
      es: "Gemini está integrado en el código; no se confirma que se hayan realizado llamadas reales al servicio.",
      en: "Gemini is integrated in the code; actual calls to the service have not been confirmed.",
    },
    tags: ["Java", "Next.js", "Wear OS", "PostgreSQL", "Gemini", "Vosk"],
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
