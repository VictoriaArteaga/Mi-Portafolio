import type { Lang } from "@/lib/copy";

type ProfileContent = {
  hero: {
    titleStart: string;
    titleAccent: string;
    name: string;
    paragraphs: [string, string];
  };
  about: {
    paragraphs: [string, string, string];
  };
};

export const profileContent: Record<Lang, ProfileContent> = {
  es: {
    hero: {
      name: "Hola, soy Victoria Arteaga",
      titleStart: "Construyo sistemas que",
      titleAccent: "cuentan historias",
      paragraphs: [
        "Desarrolladora de software con enfoque en Backend. Me apasiona diseñar arquitecturas, desarrollar soluciones robustas e integrar tecnologías como inteligencia artificial y computación en la nube.",
        "Complemento mi experiencia en desarrollo backend con conocimientos de frontend, lo que me permite comprender y construir soluciones de software de manera integral. Me motiva explorar nuevas tecnologías, participar en iniciativas de innovación y convertir ideas en proyectos con propósito.",
      ],
    },
    about: {
      paragraphs: [
        "Soy estudiante de Ingeniería de Software, con especial interés en el desarrollo backend, la arquitectura de software y la exploración de nuevas tecnologías. Durante mi formación he participado en proyectos que abarcan el desarrollo de API, aplicaciones de software e integración de inteligencia artificial. También me interesa el desarrollo de experiencias con realidad virtual y tecnologías inmersivas.",
        "He orientado parte de mi trayectoria hacia la investigación, participando en semilleros, proyectos relacionados con tecnologías inmersivas e inteligencia artificial aplicada a la educación médica, así como en ponencias y espacios de divulgación académica. Disfruto participar en competencias tecnológicas, donde encuentro oportunidades para aprender, experimentar y trabajar en equipo.",
        "Me considero una persona autodidacta, curiosa y abierta a nuevas experiencias. Fuera del ámbito tecnológico, me interesan las danzas tradicionales, que he aprendido de manera empírica y en las que tuve la oportunidad de participar en una agrupación cultural. También disfruto el modelaje, una actividad que he explorado de forma autónoma.",
      ],
    },
  },
  en: {
    hero: {
      titleStart: "I build systems that",
      titleAccent: "tell stories",
      name: "Hi, I'm María Victoria Arteaga",
      paragraphs: [
        "A software developer focused on backend engineering. I'm passionate about designing architectures, building robust solutions, and integrating technologies such as artificial intelligence and cloud computing.",
        "I complement my backend development experience with frontend knowledge, which helps me understand and build software solutions from end to end. I'm motivated by exploring new technologies, taking part in innovative initiatives, and turning ideas into purposeful projects.",
      ],
    },
    about: {
      paragraphs: [
        "I'm a Software Engineering student with a special interest in backend development, software architecture, and exploring new technologies. During my studies, I've taken part in projects involving API development, database design, software applications, and artificial intelligence integration. I'm also interested in creating virtual reality and immersive technology experiences.",
        "I've devoted part of my journey to research, participating in research groups, projects involving immersive technologies and artificial intelligence applied to medical education, as well as presentations and academic outreach. I enjoy hackathons and technology competitions, where I find opportunities to learn, experiment, and work as part of a team.",
        "I consider myself self-taught, curious, and open to new experiences. Outside of technology, I'm interested in traditional dance, which I've learned through practice and had the opportunity to perform as part of a cultural group. I also enjoy modeling, an activity I've explored independently.",
      ],
    },
  },
};
