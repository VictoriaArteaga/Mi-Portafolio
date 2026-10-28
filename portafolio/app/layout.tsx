import type { Metadata } from "next";
import { DM_Sans, Fraunces, Caveat, Mrs_Saint_Delafield } from "next/font/google";
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${dmSans.variable} ${fraunces.variable} ${caveat.variable} ${delafield.variable} antialiased`}
    >
      <body className="min-h-screen bg-cream text-ink">{children}</body>
    </html>
  );
}
