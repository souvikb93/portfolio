import type { Metadata } from "next";
import { Inter, Familjen_Grotesk, Antonio } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { AskSouvik } from "@/components/AskSouvik";
import { SmoothScroll } from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Free stand-in for the licensed "BDO Grotesk" used in the Framer project.
const heading = Familjen_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading-fallback",
  display: "swap",
});

// Big display word in the hero ("designer").
const antonio = Antonio({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-antonio",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.souvikb.net"),
  title: "Souvik B — Designer building AI-powered products",
  description:
    "Berlin-based product designer building AI-powered products people can understand, trust, and use.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${heading.variable} ${antonio.variable}`}
    >
      <body>
        <SmoothScroll />
        <Nav />
        {children}
        <AskSouvik />
      </body>
    </html>
  );
}
