export type ExperienceEntry = {
  /** Rango de fechas, por ejemplo: "2023 — 2025". */
  period: string;
  /** Cargo laboral o título de la formación. */
  title: string;
  /** Empresa, institución educativa u organización. */
  organization: string;
  /** Responsabilidades, logros o detalles relevantes. */
  description: string;
};

// Agrega aquí la experiencia laboral cuando tengas la información.
export const workExperience: ExperienceEntry[] = [];

// Agrega aquí la experiencia académica cuando tengas la información.
export const academicExperience: ExperienceEntry[] = [
  {
    period: "Noviembre 2026",
    title: "Ponente",
    organization: "I Encuentro Nacional e Internacional de Semilleros · U. de Nariño",
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
