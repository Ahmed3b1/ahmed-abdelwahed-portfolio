"use client";

import {useEffect , useState , useRef} from "react" ; 
import {motion , useInView , animate} from "framer-motion" ; 
import {Code2 , Globe , Cpu , Layout , Layers , Zap } from "lucide-react" ; 


const SkillCircle = ({percentage , icon: Icon , title , index}) => {

  const [count , setCount] = useState(0) ;
  const ref = useRef(null) ;
  const isInView = useInView(ref , {once: true , margin: "-100px"}) ;

  useEffect(() => {
    if(isInView) {
      const controls = animate(0 , percentage , {
        duration: 2 ,
        onUpdate: (value) => setCount(Math.floor(value)) , 
        ease: "easeOut"       
      }) ;
      return () => controls.stop() ;
    } 
  } , [isInView , percentage]) ;

  const radius = 40 ;
  const circumference = 2 * Math.PI * radius ;
  const offset = circumference - (count / 100) * circumference ;


  return (
    <motion.div initial={{opacity:0 , scale:0.8}}
                animate={ isInView ? {opacity:1 , scale:1} : {}}
                transition={{delay: index * 0.1 , duration: 0.5 }}
                whileHover={{y: -5  , scale: 1.05}}
                className="flex flex-col items-center gap-4 group">
        <div className="w-24 h-24 relative md:w-32 md:h-32 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">

              <circle cx="50%" cy="50%" r={radius} stroke="currentColor" strokeWidth="6" fill="transparent" />
              <motion.circle cx="50%" cy="50%" r={radius} stroke="currentColor" strokeWidth="6" fill="transparent"
                             strokeDasharray={circumference}
                             initial ={{ strokeDashoffset: circumference }}
                              animate ={isInView ? { strokeDashoffset: offset } : {}}
                             transition={{duration: 2 , ease: "easeOut"}}
                             className="text-neon-blue drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]"/>

          </svg>
        </div>
      </motion.div>   
  );
};

const Skills = () => {

    const skills = [
      {title: "JavaScript" , percentage: 56 , icon: Code2},
      {title: "React" , percentage: 70 , icon: Layout},
      {title: "Next.js" , percentage: 80 , icon: Layers},
      {title: "Node.js" , percentage: 60 , icon: Cpu},
      {title: "Express.js" , percentage: 50 , icon: Zap},
      {title: "MongoDB" , percentage: 40 , icon: Globe}
    ] ;

    return(

      <section className="max-w-7xl mx-auto py-20 relative">

        <div className="mb-16 text-center">

          <motion.h2 initial={{opacity:0 , y: 20}} 
                      whileInView={{opacity:1 , y: 0}} 
                      viewport={{once: true}}
                      className="text-3xl md:text-5xl font-bold mb-4">
                        My Specialized <span className="text-gradient">Skillset</span>
          </motion.h2>

          <motion.p initial={{opacity:0 , y: 20}}
                    whileInView={{opacity:1 , y: 0}} 
                    viewport={{once: true}}
                    transition={{delay: 0.1}}
                    className="text-slate-400 max-w-2xl mx-auto">

          </motion.p>

        </div>

      </section>

    ) ;

};

export default Skills;