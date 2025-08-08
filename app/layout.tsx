import type { Metadata } from "next";
import { Figtree, ABeeZee } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { DarkModeProvider } from "@/components/DarkModeContext";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const abeeZee = ABeeZee({
  variable: "--font-abeezee",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Misato Seki",
  description: "Japanese Full-Stack Developer based in Finland",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} ${abeeZee.variable} antialiased`}>
        <DarkModeProvider>
          <NavBar />
          {children}
        </DarkModeProvider>
      </body>
    </html>
  );
}
