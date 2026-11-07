export type Achievement = {
  title: string;
  issuer: string;
  date: string;
  description?: string;
  url?: string;
};

// Agrega aquí logros, certificaciones o reconocimientos cuando tengas la información.
export const achievements: Achievement[] = [
  {
    date: "Octubre 2026",
    title: "Entre los 25 mejores investigadores de Colombia",
    issuer: "REDCOLSI 2026 · ENISI, Universidad del Sinú, Montería",
    description: "Reconocimiento obtenido en el XXIX Encuentro Nacional y XXIII Internacional de Semilleros de Investigación.",
  },
  {
    date: "Octubre 2026",
    title: "Certificado de ponente · ENISI 2026",
    issuer: "XXIX Encuentro Nacional y XXIII Internacional de Semilleros · Universidad del Sinú, Montería",
    description: "Ponencia de MEDIEVAL, aplicativo de IA para evaluar competencias clínicas en simulación médica.",
  },
  {
    date: "Mayo 2026",
    title: "Ponente Sobresaliente",
    issuer: "XXIII Encuentro Departamental y III Binacional de Semilleros",
  },
  {
    date: "Marzo - mayo 2026",
    title: "Ciberguardianas",
    issuer: "Universidad Cooperativa de Colombia · 70 horas",
  },
  {
    date: "Mayo 2025",
    title: "Ponente Meritorio",
    issuer: "XXII Encuentro Departamental y II Binacional de Semilleros",
  },
];
