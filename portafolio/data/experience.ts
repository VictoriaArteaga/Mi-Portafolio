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
export const academicExperience: ExperienceEntry[] = [];
