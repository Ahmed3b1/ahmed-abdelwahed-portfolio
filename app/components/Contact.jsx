"use client";
import {useState} from "react";
import {motion} from "framer-motion";
import {Send , CheckCircle2 , MessageSquare , Mail , Phone , MapPin} from "lucide-react";

const Contact = () => {

  const [isSubmitting , setIsSubmitting] = useState(false); 
  const [isSuccess , setIsSuccess] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(()=>{
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(()=> setIsSuccess(false) , 5000)
    } , 2000)
  };

  const contactInfo = [
    {
      icon:<Mail className="text-[#D4AF37]"/>, 
      label: "Email",
      value: "hello@cosmic.dev"
    },
    {
      icon:<Phone className="text-[#D4AF37]"/>, 
      label: "Phone",
      value: "+1 (555) 123-4567"
    },
    {
      icon:<MapPin className="text-[#D4AF37]"/>, 
      label: "Location",
      value: "Cyberspace , Earth"
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-10">
                <div>
                  <motion.h2 initial={{opacity:0 , y:20}} whileInView={{opacity:1 , y:0}}
                              viewport={{once:true}}
                              className="text-[#D4AF37] text-3xl md:text-5xl font-bold mb-6">
                        Lets <span className="text-gradient">Connect</span>
                  </motion.h2>

                  <motion.p initial={{opacity:0 , y:20}} whileInView={{opacity:1 , y:0}}
                              transition={{delay:0.1}}
                              className="text-slate-400 text-lg max-w-md">
                        Ready to blast off your next project? Drop me a message and lets craft
                        something legendary together .
                  </motion.p>
                </div>

                <div className="flex flex-col gap-6">
                    {contactInfo.map((info , i) => (
                      <motion.div key={info.label} initial={{opacity:0 , x: -20}} whileInView={{opacity:1 , x:0}}
                                  viewport={{once:true}}
                                  transition={{delay:0.2 * i * 0.1}}
                                  className="flex items-center gap-5">

                            <div className="w-12 h-12 rounded-xl glassmorphism flex items-center
                                            justify-center group-hover:bg-white/10 transition-colors">
                                  {info.icon}
                            </div>

                            <div>
                               <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">
                                  {info.label}
                               </p>

                               <p className="text-white font-medium">
                                  {info.value}
                               </p>
                            </div>

                      </motion.div>
                    ))}
                </div>

                <motion.div initial={{opacity:0 , scale:0.8}}
                  whileInView={{opacity:1 , scale:1}}
                  viewport={{once:true}}
                  className="w-full h-48 rounded-3xl overflow-hidden relative glassmorphism border border-white/5">

                      <div className="absolute inset-0 bg-linear-to-tr from-[#D4AF37]/20 to-[#D4AF37]/20"/>

                      <div className="absolute inset-0 flex items-center justify-center">
                          <MessageSquare size={64} className="text-white/10 animate-pulse"/>
                      </div>

                      {Array.from({ length: 5 }).map((_ , i) => (
                        <motion.div 
                        key={i}
                        animate={{
                          y:[0 , -20 , 0],
                          x:[0 , 10 , 0],
                        }}
                        transition={{
                          duration: 3 + i,
                          repeat:Infinity,
                          ease:"easeInOut"
                        }}
                        className="absolute w-4 h-4 rounded-full bg-white/10"
                        style={{
                          top: 20 + i * 15 + "%",
                          left: 20 + i * 20 + "%"
                        }}/>
                      ))}

                </motion.div>

            </div>

            <motion.div initial={{opacity:0 , x:20}} whileInView={{opacity:1 , x:0}}
                        viewport={{once:true}}
                        className="glassmorphism p-8 md:p-12 rounded-4xl border border-white/5 relative overflow-hidden">

                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#D4AF37]/10 blur-[80px] rounded-full"/>

                      <form onSubmit={handleSubmit}
                            className="relative z-10 flex flex-col gap-6">

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <motion.div initial={{opacity:0 , y:10}} whileInView={{opacity:1 , y:0}}
                                        viewport={{once:true}}
                                        transition={{delay:0.3}}
                                        className="flex flex-col gap-2">

                                  <label className="text-sm font-medium text-slate-300 ml-1">
                                    Your Name
                                  </label>

                                  <input type="text" required placeholder="John Doe" 
                                          className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4
                                                     text-white placeholder:text-slate-600 focus:outline-none
                                                     focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/50 transition-all"/>

                            </motion.div>

                            <motion.div initial={{opacity:0 , y:10}} whileInView={{opacity:1 , y:0}}
                                        viewport={{once:true}}
                                        transition={{delay:0.3}}
                                        className="flex flex-col gap-2">

                                  <label className="text-sm font-medium text-slate-300 ml-1">
                                    Your Email
                                  </label>

                                  <input type="email" required placeholder="JohnDoe@gmail.com" 
                                          className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4
                                                     text-white placeholder:text-slate-600 focus:outline-none
                                                     focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/50 transition-all"/>

                            </motion.div>

                          </div>

                            <motion.div initial={{opacity:0 , y:10}} whileInView={{opacity:1 , y:0}}
                                        viewport={{once:true}}
                                        transition={{delay:0.3}}
                                        className="flex flex-col gap-2">

                                  <label className="text-sm font-medium text-slate-300 ml-1">
                                    subject
                                  </label>

                                  <input type="text" required placeholder="John Doe" 
                                          className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4
                                                     text-white placeholder:text-slate-600 focus:outline-none
                                                     focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/50 transition-all"/>

                            </motion.div>

                            <motion.div initial={{opacity:0 , y:10}} whileInView={{opacity:1 , y:0}}
                                        viewport={{once:true}}
                                        transition={{delay:0.3}}
                                        className="flex flex-col gap-2">

                                  <label className="text-sm font-medium text-slate-300 ml-1">
                                    Message
                                  </label>

                                  <textarea rows={4} required placeholder="Tell me about your vision" 
                                          className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4
                                                     text-white placeholder:text-slate-600 focus:outline-none
                                                     focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/50 transition-all resize-none"/>

                            </motion.div>

                            <motion.button disabled={isSubmitting} whileHover={{ scale: 1.02}} whileTap={{scale: 0.98}}
                                            className={`mt-2 py-4 rounded-2xl font-bold flex items-center justify-center
                                                      gap-2 transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] 
                                              ${isSuccess
                                                ? "bg-[#D4AF37] text-white shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                                                : "bg-[#D4AF37] text-white hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
                                              }`}>

                                  {isSuccess ? (
                                    <>
                                      <CheckCircle2 size={20}/>
                                      Message Sent !
                                    </>
                                  ) : isSubmitting ? (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"/>
                                  ) : (
                                    <>
                                      <Send size={18}/>
                                      Transmit Message 
                                    </>
                                  )}

                            </motion.button>

                      </form>

            </motion.div>

        </div>
    </section>   
  );
};

export default Contact;