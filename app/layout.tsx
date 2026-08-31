import type { Metadata } from "next";
import { Inter, Antonio } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { SmoothScroll } from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// BDO Grotesk — the typeface the Framer site uses, self-hosted so the site has
// no runtime dependency on framerusercontent.com. Single variable file, 400-1000.
const bdo = localFont({
  src: "./fonts/BDOGrotesk-Variable.woff2",
  variable: "--font-bdo",
  weight: "400 1000",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

// Big display words in the hero ("UX / UI" + "DESIGNER").
const antonio = Antonio({
  subsets: ["latin"],
  weight: ["400", "700"],
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
      className={`${inter.variable} ${bdo.variable} ${antonio.variable}`}
    >
      <body>
        <SmoothScroll />
        <Nav />
        {children}
      </body>
    </html>
  );
}
