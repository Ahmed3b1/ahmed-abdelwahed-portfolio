"use client";

import React , {useState , useEffect} from "react" ;
import { motion } from "framer-motion" ;
import {Mail , Rocket , User , Briefcase} from "lucide-react" ;

const Navbar = () => {

  const [scrolled , setScrolled] = useState(false) ;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navlinks = [
    { name: "Home", href: "#home" , icon: <Rocket size={18} /> },
    { name: "Skills", href: "#skills" , icon: <User size={18} /> },
    { name: "Projects", href: "#projects" , icon: <Briefcase size={18} /> },
    { name: "Contact", href: "#contact" , icon: <Mail size={18} /> },
  ]

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  
                     ${scrolled ? "py-4 glassmorphism" : "py-6 bg-transparent"}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter">
            <span className="text-white">ِAhmed</span>
            <span className="text-neon-blue">portfolio</span>
        </motion.div>


        <div className="hidden md:flex gap-8">
          {navlinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative group text-slate-300 hover:text-white transition-colors 
                          flex items-center gap-2 font-medium text-sm"
            >
              {link.icon}
              {link.name}

              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-neon-blue transition-all duration-300 group-hover:w-full" />

            </motion.a>
          ))}

        </div>



      </div>
    </nav>   
  );
};

export default Navbar;