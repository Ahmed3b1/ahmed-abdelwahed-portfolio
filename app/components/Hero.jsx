"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link" ;

const Hero = () => {
  const containerRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [-300, 300], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      x.set(clientX - innerWidth / 2);
      y.set(clientY - innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [x, y]);

  const sphereStars = Array.from({ length: 20 }, (_, index) => ({
    width: (index * 7) % 16 + 5,
    height: (index * 11) % 16 + 5,
    top: (index * 37) % 100,
    left: (index * 53) % 100,
  }));

  const buttonRef = useRef(null);
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });

  const handleBtnMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const offsetX = (clientX - centerX) * 0.4;
    const offsetY = (clientY - centerY) * 0.4;
    setBtnPos({ x: offsetX, y: offsetY });
  };

  const handleBtnMouseLeave = () => {
    setBtnPos({ x: 0, y: 0 });
  };

  const headline = "Architecting the Future of Digital Experience";
  const words = headline.split(" ");

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center pt-28 md:pt-25 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div className="flex flex-col gap-5 md:gap-6 z-10">
          {/* left : text-content */}

          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#D9D9D9] font-semibold tracking-widest text-xs sm:text-sm uppercase flex items-center gap-2"
            >
              <span className="w-8 h-[1px] bg-[#D9D9D9]" />
              Web Developer
            </motion.div>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl text-[#F5CC27] font-bold leading-[1.15] md:leading-[1.1] tracking-tight"
              >
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                className="inline-block mr-[0.2em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-slate-400 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed"
          >
            Feel the premonition you go to space , falling on different stars   
            what an ingrossing feeling seeing such a glory features there 
            You do not have to go there , I brought all that here . Just decide to
            Make your unique web or application and let it on me . My goal is to
            combine innovative design with seamless functionality to deliver impactful
            solutions that leave a lasting impression
          </motion.p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="#projects">
              <motion.div
                ref={buttonRef}
                onMouseMove={handleBtnMouseMove}
                onMouseLeave={handleBtnMouseLeave}
                animate={{ x: btnPos.x, y: btnPos.y }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-[#D4AF37] overflow-hidden group py-3 px-6 sm:py-4 sm:px-8 text-white text-sm font-bold
                          hover:shadow-[0_0_15px_rgba(212,175,55,0.5)]
                          rounded-full transition-shadow shadow-[0_0_15px_rgba(212,175,55,0.5)]"
              >
                <span className="relative z-10">View My Work</span>
                <div
                  className="absolute inset-0 bg-linear-to-r from-[#D4AF37] to-[#FFD700] opacity-0
                            group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            </Link>

            <Link href="#contact">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="py-3 px-6 sm:py-4 sm:px-8 border border-white/10 text-white font-bold text-sm
                          hover:bg-white/5
                          rounded-full transition-colors"
              >
                Lets Talk
              </motion.div>
            </Link>
          </div>
        </div>

        <motion.div
          style={{ rotateX, rotateY, perspective: 1000 }}
          className="relative flex justify-center items-center"
        >
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 2, -2, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="w-56 h-56 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full relative"
          >
            <div
              className="absolute inset-0 bg-linear-to-br from-yellow-400 via-amber-500 to-yellow-600
                         rounded-full opacity-40 blur-3xl animate-pulse"
            />

            <div
              className="absolute inset-4 bg-cosmic-blue/80 backdrop-blur-3xl
                         rounded-full border border-white/10
                         shadow-[inner_0_0_20px_rgba(0,255,255,0.5)] overflow-hidden"
            >
              {sphereStars.map((star, index) => (
                <div
                  key={index}
                  className="absolute bg-white/20 rounded-full"
                  style={{
                    width: `${star.width}px`,
                    height: `${star.height}px`,
                    top: `${star.top}%`,
                    left: `${star.left}%`,
                  }}
                />
              ))}
            </div>

            <div className="absolute inset-0 flex justify-center items-center">
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-[url('https://png.pngtree.com/png-vector/20230302/ourmid/png-tree-3d-astronaut-floating-in-space-png-image_6626605.png')]
                           bg-center bg-contain bg-no-repeat drop-shadow-[0_0_20px_rgba(0,255,255,0.5)]"
              />
            </div>
          </motion.div>

          <div className="absolute inset-0 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10 + i * 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-12.5 rounded-full border border-white/5"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;