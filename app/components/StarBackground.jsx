"use client";

import { useEffect, useState } from "react";

// Move these INSIDE functions so they only run when called (i.e. after mount),
// never at module-evaluation time on the server.
const generateStars = () =>
  Array.from({ length: 60 }).map(() => ({
    size: Math.random() * 2 + 1,
    top: Math.random() * 100,
    left: Math.random() * 100,
    Delay: Math.random() * 5,
    Duration: Math.random() * 3 + 2,
    opacity: Math.random() * 0.8 + 0.2,
  }));

const generateShootingStars = () =>
  Array.from({ length: 8 }).map(() => ({
    top: Math.random() * 50,
    left: Math.random() * 100,
    Delay: Math.random() * 20,
  }));

const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Runs only on the client, after the first (hydration) render.
    setStars(generateStars());
    setShootingStars(generateShootingStars());
    setMounted(true);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Everything random is only rendered after mount, so server HTML
          and the first client render are identical (both empty) — no
          hydration mismatch. Stars just "pop in" a frame later, which is
          invisible in practice. */}
      {mounted && (
        <>
          {/* stars */}
          <div className="absolute inset-0">
            {stars.map((star, index) => (
              <div
                key={`star-1-${index}`}
                className="absolute animate-plus bg-white rounded-full"
                style={{
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  top: `${star.top}%`,
                  left: `${star.left}%`,
                  animationDelay: `${star.Delay}s`,
                  animationDuration: `${star.Duration}s`,
                }}
              />
            ))}
          </div>

          {/* shooting stars */}
          <div className="absolute inset-0">
            {shootingStars.map((star, index) => (
              <div
                key={`shooting-${index}`}
                className="absolute w-0.5 h-25 bg-linear-to-t from-transparent via-white to-transparent rotate-45
                            transform -translate-y-full animate-shooting-star"
                style={{
                  top: `${star.top}%`,
                  left: `${star.left}%`,
                  animationDelay: `${star.Delay}s`,
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default StarBackground;