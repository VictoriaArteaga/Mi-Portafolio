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
