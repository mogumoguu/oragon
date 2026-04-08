import type { Metadata } from "next";
import { Bricolage_Grotesque, Space_Grotesk, JetBrains_Mono, Russo_One } from "next/font/google";
import Nav from "@/components/layout/Nav";
import Cursor from "@/components/ui/Cursor";
import SmoothScroll from "@/components/providers/SmoothScroll";
import ThemeProvider from "@/components/providers/ThemeProvider";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["200", "400", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const russoOne = Russo_One({
  variable: "--font-russo",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "ORAGON — We solve the problems holding you back.",
  description:
    "ORAGON is a Filipino automation & AI agency. We diagnose inefficiencies and build workflows that free your team to focus on people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${russoOne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Cursor />
          <Nav />
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
