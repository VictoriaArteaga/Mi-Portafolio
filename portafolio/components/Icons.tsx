type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const ArrowRight = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const Download = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />
  </svg>
);

export const Pencil = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M4 20l1-4L16 5l3 3L8 19l-4 1zM14 7l3 3" />
  </svg>
);

export const Heart = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z" />
  </svg>
);

export const Spark = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M12 3v5M12 16v5M3 12h5M16 12h5M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" />
  </svg>
);

export const Quote = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
    <path d="M7.2 6C4.9 7.2 3.5 9.4 3.5 12.3V18h6v-6H6.3c.1-1.5.8-2.6 2.2-3.4L7.2 6zm9 0c-2.3 1.2-3.7 3.4-3.7 6.3V18h6v-6h-3.2c.1-1.5.8-2.6 2.2-3.4L16.2 6z" />
  </svg>
);

export const Github = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
    <path d="M12 .5a11.5 11.5 0 00-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 015.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.200v3.200c0 .3.2.7.8.6A11.5 11.5 0 0012 .5z" />
  </svg>
);

export const Instagram = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r=".6" fill="currentColor" />
  </svg>
);

export const Linkedin = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
    <path d="M4.5 9h3.8v11H4.5V9zm1.9-5.5a2.2 2.2 0 110 4.4 2.2 2.2 0 010-4.4zM10.5 9h3.6v1.5c.5-.9 1.7-1.8 3.5-1.8 3.7 0 4.4 2.4 4.4 5.600V20h-3.800v-5.100c0-1.2 0-2.8-1.7-2.800s-2 1.3-2 2.700V20h-3.800V9z" />
  </svg>
);

export const Mail = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="M4 7l8 6 8-6" />
  </svg>
);

export const Plane = ({ className }: IconProps) => (
  <svg {...base} strokeWidth={1.5} className={className}>
    <path d="M21 3L3 10.500l7 3 3 7L21 3zM10 13.500L21 3" />
  </svg>
);
