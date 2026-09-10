import "./globals.css";

import StarBackground from "@/app/components/StarBackground";
import Navbar from "@/app/components/Navbar";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio of a web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-neon-blue selection:text-white">
        {/* <CustomCursor /> */}
        <StarBackground />
        <Navbar />         
          <main className="relative z-10">
            {children}
          </main>
      </body>
    </html>
  );
}
