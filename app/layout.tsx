import type { Metadata } from "next";
import { Fraunces, Space_Mono, Inter } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/site/Cursor";
import CursorTrail from "@/components/site/CursorTrail";
import ScrollProgress from "@/components/site/ScrollProgress";
import Easters from "@/components/site/Easters";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saadatahmad.com"),
  title: "Syed Saadat Ahmad · Full-Stack Engineer",
  description:
    "Syed Saadat Ahmad is a full-stack engineer in New Delhi, India, building a privacy-first desktop AI product at Recklabs, with past work on satellite imaging payloads, FastAPI services, and CI/CD infrastructure.",
  keywords: [
    "Syed Saadat Ahmad",
    "Full-Stack Engineer",
    "Next.js",
    "FastAPI",
    "Satellite Payload",
    "Aligarh Muslim University",
  ],
  openGraph: {
    title: "Syed Saadat Ahmad · Full-Stack Engineer",
    description:
      "Full-stack engineer: privacy-first desktop AI, satellite payloads, FastAPI services, CI/CD.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${spaceMono.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <div className="grain" aria-hidden />
        <ScrollProgress />
        <CursorTrail />
        <Cursor />
        <Easters />
        {children}
      </body>
    </html>
  );
}
