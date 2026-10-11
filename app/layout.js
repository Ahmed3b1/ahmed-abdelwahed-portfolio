import "./globals.css";

import StarBackground from "@/app/components/StarBackground";
import Navbar from "@/app/components/Navbar";

export const metadata = {
  title: "A-3b1 Portfolio",
  description: "It is not a portfolio , it is a galaxy including what you will not see at anywhere else",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
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
