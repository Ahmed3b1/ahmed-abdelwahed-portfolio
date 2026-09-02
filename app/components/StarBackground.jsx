"use client";

import { useEffect , useState } from "react";

    const generateStars = Array.from({ length: 60 }).map(() => ({
        size: Math.random() * 2 + 1,
        top: Math.random() * 100,
        left: Math.random() * 100,
        Delay: Math.random() * 5,
        Duration: Math.random() * 3 + 2 , 
        opacity: Math.random() * 0.8 + 0.2 , 
      }));
      
    const generateShootingStars = Array.from({ length: 8 }).map(() => ({
        top: Math.random() * 50,
        left: Math.random() * 100,
        Delay: Math.random() * 20,
      }));

const StarBackground = () => {

  const [stars, setStars] = useState(generateStars);
  const [shootingStars, setShootingStars] = useState(generateShootingStars);



  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">

        {/* Background  */}

        <div className="absolute inset-0 bg-cosmic-black" />

          {/* stars */}

          <div className="absolute inset-0">

            {stars.map((star, index) => (
              <div key={`star-1-${index}`} 
                className="absolute animate-plus bg-white rounded-full" 
                style={{
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  top: `${star.top}%`,
                  left: `${star.left}%`,
                  animationDelay: `${star.Delay}s`,
                  animationDuration: `${star.Duration}s`
                }}/>


            ))} 

          </div>


          {/* stars layer 2 */}

          {/* <div className="stars-container opacity-30">

            {[...Array(30).map((_, index) => (
              <div 
                key={`star-2-${index}`} 
                className="absolute rounded-full bg-neon-blue shadow-[0_0_5px_rgba(59,130,246,0.5)]" 
                style={{
                  width: Math.random() * 3 + "px",
                  height: Math.random() * 3 + "px",
                  top: Math.random() * 100 + "%",
                  left: Math.random() * 100 + "%",
                  animationDelay: Math.random() * 10 + "s",
                  animationDuration: Math.random() * 5 + 5 + "s"
                }}/>


            ))]}

          </div> */}


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
                }}/>


            ))}

          </div>
            
        
    </div>   
  );
};

export default StarBackground;
