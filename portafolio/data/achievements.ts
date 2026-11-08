export type Achievement = {
  title: string;
  issuer: string;
  date: string;
  description?: string;
  url?: string;
  /** Imagen del certificado (ruta en /public o URL). Se muestra en una ventana, sin botón de descarga. */
  image?: string;
  /** Texto del botón si no es "Ver certificado" (p. ej. "Ver artículo"). */
  linkLabel?: { es: string; en: string };
};

// Agrega aquí logros, certificaciones o reconocimientos cuando tengas la información.
export const achievements: Achievement[] = [
  {
    date: "Octubre 2026",
    title: "Reconocimiento al Mérito Investigativo – MEDIEVAL",
    issuer: "Universidad Cooperativa de Colombia",
    description:
      "Reconocimiento por parte del Programa de Ingeniería de Software y el Consejo de Facultad por la dedicación, rigor y aporte a la innovación tecnológica en salud.",
  },
  {
    date: "Octubre 2026",
    title: "Entre los 25 mejores investigadores de Colombia",
    issuer: "REDCOLSI 2026 · ENISI, Universidad del Sinú, Montería",
    description: "Reconocimiento obtenido en el XXIX Encuentro Nacional y XXIII Internacional de Semilleros de Investigación.",
    url: "https://drive.google.com/file/d/1iL1_aWV-WwtO9RqhiOPmsDkeYFrzrR9Y/view?usp=sharing",
    linkLabel: { es: "Ver artículo", en: "View article" },
  },
  {
    date: "Octubre 2026",
    title: "Certificado de ponente · ENISI 2026",
    issuer: "XXIX Encuentro Nacional y XXIII Internacional de Semilleros · Universidad del Sinú, Montería",
    description: "Ponencia de MEDIEVAL, aplicativo de IA para evaluar competencias clínicas.",
  },
  {
    date: "Marzo - mayo 2026",
    title: "Ciberguardianas",
    issuer: "Universidad Cooperativa de Colombia · 70 horas - Formación en Ciberseguridad para Mujeres en STEM",
  },
  {
    date: "Mayo 2026",
    title: "Ponente Sobresaliente",
    issuer: "XXIII Encuentro Departamental y III Binacional de Semilleros - ponencia MEDIEVAL",
  },
  {
    date: "Mayo 2025",
    title: "Ponente Meritorio",
    issuer: "XXII Encuentro Departamental y II Binacional de Semilleros - ponencia estrategia de la enseñanza de la anatomía dental con realidad virtual",
  },
];
