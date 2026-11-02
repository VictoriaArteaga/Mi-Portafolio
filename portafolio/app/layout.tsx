import type { Metadata } from "next";
import { DM_Sans, Fraunces, Caveat, Mrs_Saint_Delafield } from "next/font/google";
import { copy } from "@/lib/copy";
import "./globals.css";

const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"] });
const caveat = Caveat({ variable: "--font-caveat", subsets: ["latin"] });
const delafield = Mrs_Saint_Delafield({
  variable: "--font-delafield",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "María Victoria Arteaga | Portafolio",
  description:
    "Portafolio de Victoria Arteaga: desarrollo frontend y diseño de interfaces con carácter.",
};

// Aplica tema e idioma guardados (o el tema del sistema) antes del primer pintado, sin destello.
const initPrefs = `try{var d=document.documentElement,s=localStorage,t=s.getItem("theme");if(t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches)d.classList.add("dark");if(s.getItem("lang")==="en"){d.lang="en";document.title=${JSON.stringify(copy.en.meta.title)}}}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${dmSans.variable} ${fraunces.variable} ${caveat.variable} ${delafield.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: initPrefs }} />
      </head>
      <body className="min-h-screen bg-cream text-ink dark:bg-night dark:text-moon">{children}</body>
    </html>
  );
}
