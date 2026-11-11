export type Testimonio = {
  name: string;
  paragraphs: {
    es: string[];
    en: string[];
  };
};

export const testimonios: Testimonio[] = [
  {
    name: "Nicolás García",
    paragraphs: {
      es: [
        "He tenido la oportunidad de trabajar y compartir escenarios de exposición con María Victoria, y si algo he aprendido de Mavi es que su fortaleza va más allá de lo técnico. Su disciplina, pensamiento lógico y curiosidad la llevan a abordar cada reto con profundidad, criterio y atención al detalle. Como ingeniera de software, destaca por su conocimiento en desarrollo backend y su interés constante por investigar y explorar nuevas soluciones.",
        "También he podido apreciar su capacidad para desenvolverse en espacios de ponencia, donde su dominio de los temas y facilidad para transmitir ideas reflejan un potencial enorme. Estoy seguro de que esa combinación de rigor técnico, curiosidad y comunicación seguirá abriéndole camino y dejando huella en cada proyecto del que haga parte.",
      ],
      en: [
        "I have had the opportunity to work with María Victoria and share presentation stages with her. If there is one thing I have learned about Mavi, it is that her strengths go beyond technical skills. Her discipline, logical thinking, and curiosity lead her to approach every challenge with depth, sound judgment, and attention to detail. As a software engineer, she stands out for her backend development knowledge and her ongoing interest in researching and exploring new solutions.",
        "I have also seen how well she presents and shares her ideas. Her command of the subject and ability to communicate clearly reflect tremendous potential. I am sure that this combination of technical rigor, curiosity, and communication will continue to open doors and make a lasting impact on every project she joins.",
      ],
    },
  },
  {
    name: "Ing. Ivonne Barco",
    paragraphs: {
      es: [
        "En mi experiencia como docente de María Victoria, he podido reconocer cualidades que sobresalen en su desempeño académico y en su formación profesional. Es una estudiante comprometida, disciplinada y con una genuina disposición por aprender, que demuestra interés por profundizar en sus conocimientos y asumir cada actividad académica con responsabilidad.",
        "Se caracteriza por su atención, respeto y participación en los espacios de clase, así como por el cuidado, la dedicación y el sentido de responsabilidad que refleja en cada uno de sus trabajos y entregas. Destaco especialmente su pensamiento lógico, su capacidad de análisis y su curiosidad por explorar nuevas ideas y soluciones, cualidades que considero fundamentales en su formación como futura ingeniera de software.",
      ],
      en: [
        "As María Victoria's teacher, I have recognized qualities that stand out in her academic performance and professional development. She is a committed, disciplined student with a genuine willingness to learn. She is eager to deepen her knowledge and approaches every academic task responsibly.",
        "She is attentive, respectful, and engaged in class, and brings care, dedication, and a strong sense of responsibility to every assignment. I especially value her logical thinking, analytical skills, and curiosity about exploring new ideas and solutions—qualities that are essential to her development as a future software engineer.",
      ],
    },
  },
  {
    name: "Ing. Daniel Arteaga",
    paragraphs: {
      es: [
        "He acompañado a María Victoria en diferentes etapas de su formación académica, tanto desde mi experiencia como docente como en su proceso de investigación y desarrollo de su trabajo de grado. Durante este tiempo, he podido reconocer su compromiso, responsabilidad y disposición para aprender, así como su interés por profundizar en sus conocimientos y mantener un buen desempeño académico.",
        "Se caracteriza por ser una estudiante dedicada, juiciosa y constante en sus actividades académicas. Ha demostrado responsabilidad y compromiso en el desarrollo de su proyecto de investigación, destacándose por la dedicación y el trabajo que ha realizado a lo largo de este proceso. Considero que estas características son fortalezas importantes que contribuirán a su crecimiento profesional."
      ],
      en: [
        "I have accompanied María Victoria through different stages of her academic training, both as her teacher and during the research and development of her thesis project. During this time, I have come to recognize her commitment, responsibility, and willingness to learn, as well as her interest in deepening her knowledge and maintaining strong academic performance.",
        "She is a dedicated, diligent, and consistent student. She has shown responsibility and commitment in developing her research project, standing out for the dedication and work she has put in throughout the process. I consider these traits important strengths that will contribute to her professional growth.",
      ],
    },
  },
];
