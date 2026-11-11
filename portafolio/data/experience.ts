export type ExperienceEntry = {
  /** Rango de fechas, por ejemplo: "2023 — 2025". */
  period?: string;
  /** Cargo laboral o título de la formación. */
  title: string;
  /** Empresa, institución educativa u organización. */
  organization: string;
  /** Responsabilidades, logros o detalles relevantes. */
  description: string;
  /** Responsabilidades o contribuciones puntuales. */
  highlights?: string[];
};

export const workExperience: ExperienceEntry[] = [
  {
    period: "Septiembre - noviembre 2026",
    title: "Desarrolladora Full Stack (Freelance)",
    organization: "Respira · Aplicación de escritorio para el monitoreo de infecciones respiratorias",
    description: "",
    highlights: [
      "Desarrollé el frontend de la aplicación.",
      "Desarrollé el backend y entrené el modelo de IA con scikit-learn.",
    ],
  },
  {
    period: "Septiembre - noviembre 2026",
    title: "Desarrolladora Full Stack (Freelance)",
    organization: "COCO · Registro y consulta de hábitos de conejos domésticos",
    description: "",
    highlights: ["Me encargué del desarrollo del frontend y del backend."],
  },
  {
    period: "Septiembre - noviembre 2026",
    title: "Desarrolladora Backend y 3D (Freelance)",
    organization: "Señas · Videojuego educativo 3D de Lengua de Señas Colombiana",
    description: "",
    highlights: [
      "Desarrollé el backend por completo, incluyendo el registro y la autenticación de usuarios.",
      "Me encargué del renderizado de los modelos y las escenas 3D en Unity.",
    ],
  },
  {
    period: "Abril - mayo 2026",
    title: "Scrum Master y Desarrolladora Backend (Freelance)",
    organization: "KashiApp · Billetera digital",
    description: "",
    highlights: [
      "Ejercí como Scrum Master del equipo.",
      "Desarrollé módulos del backend y escribí pruebas unitarias y de integración.",
      "Construí la vista del historial de transacciones en el frontend.",
    ],
  },
  {
    period: "Marzo - mayo 2026",
    title: "Desarrolladora Full Stack (Freelance)",
    organization: "Arq 3D · Diseños arquitectónicos generados con IA",
    description: "",
    highlights: [
      "Desarrollé el backend de la aplicación.",
      "Integré la IA de Tripo AI para generar imágenes.",
      "Implementé en el frontend el renderizado del visor 3D de las casas.",
    ],
  },
  {
    period: "Marzo - mayo 2026",
    title: "Desarrolladora Frontend (Freelance)",
    organization: "VADGR · Plataforma open-source de agentes de IA con integración MCP",
    description: "",
    highlights: [
      "Contribuí al desarrollo con React, TypeScript y FastAPI.",
      "Diseñé e implementé componentes de UI/UX accesibles e intuitivos.",
      "Corregí bugs en la CLI y mejoré su compatibilidad con Windows y Linux.",
    ],
  },
];

// Agrega aquí la experiencia académica cuando tengas la información.
export const academicExperience: ExperienceEntry[] = [
  {
    period: "Noviembre 2026",
    title: "Ponente",
    organization: "I Encuentro Nacional e Internacional de Semilleros · UDENAR",
    description:
      "Presenté MEDIEVAL, aplicativo de IA para evaluar competencias clínicas en estudiantes de medicina mediante simulación.",
  },
  {
    period: "Octubre 2026",
    title: "Ponente",
    organization:
      "ENISI 2026 · XXIX Encuentro Nacional y XXIII Internacional de Semilleros",
    description:
      "Presenté MEDIEVAL, aplicativo de IA para evaluar competencias clínicas en simulación médica. Universidad del Sinú, Montería.",
  },
  {
    period: "Mayo 2026",
    title: "Ponente Sobresaliente",
    organization: "XXIII Encuentro Departamental y III Binacional de Semilleros",
    description:
      "Reconocimiento Sobresaliente por MEDIEVAL, aplicativo de IA para evaluar competencias clínicas mediante simulación médica.",
  },
  {
    period: "Marzo - mayo 2026",
    title: "Ciberguardianas",
    organization: "Universidad Cooperativa de Colombia",
    description:
      "Certificación en ciberseguridad para mujeres en STEM: 70 horas de formación teórico-práctica.",
  },
  {
    period: "Marzo 2026",
    title: "Ponente",
    organization: "III Encuentro Institucional de Semilleros · UCC–REDCOLSI",
    description:
      "Presenté MediEval en San Juan de Pasto, el 26 de marzo de 2026.",
  },
  {
    period: "Mayo 2025",
    title: "Ponente Meritorio",
    organization: "XXII Encuentro Departamental y II Binacional de Semilleros",
    description:
      "Reconocimiento Meritorio por el proyecto de realidad virtual y aumentada para la enseñanza de anatomía dental en la UCC.",
  },
  {
    period: "Abril 2025",
    title: "Ponente",
    organization: "II Encuentro Institucional de Semilleros · UCC–REDCOLSI",
    description:
      "Presenté una estrategia de enseñanza de anatomía dental con realidad virtual y aumentada para la Facultad de Odontología, Campus Pasto.",
  },
];
