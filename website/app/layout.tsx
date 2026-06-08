import type { Metadata } from "next";
import { Fraunces, Space_Mono, Inter } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/site/Cursor";
import ScrollProgress from "@/components/site/ScrollProgress";

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
  title: "Syed Saadat Ahmad · Full-Stack & Systems Engineer",
  description:
    "Syed Saadat Ahmad is a full-stack and systems engineer in New Delhi, India, building privacy-first desktop AI at Recklabs, satellite imaging payloads, FastAPI services, and CI/CD infrastructure.",
  keywords: [
    "Syed Saadat Ahmad",
    "Full-Stack Developer",
    "Next.js",
    "FastAPI",
    "Satellite Payload",
    "Aligarh Muslim University",
  ],
  openGraph: {
    title: "Syed Saadat Ahmad · Full-Stack & Systems Engineer",
    description:
      "Full-stack & systems engineer: privacy-first desktop AI, satellite payloads, FastAPI services, CI/CD.",
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
    >
      <body className="antialiased">
        <div className="grain" aria-hidden />
        <ScrollProgress />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
