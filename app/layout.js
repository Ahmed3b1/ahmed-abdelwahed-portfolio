import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import CustomCursor from "@/components/CustomCursor";
import StarBackground from "@/components/StarBackground";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio of a web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-neon-blue selection:text-white">
        <CustomCursor />
        <StarBackground />
        <Navbar />         
          <main className="relative z-10">
            {children}
          </main>
      </body>
    </html>
  );
}
