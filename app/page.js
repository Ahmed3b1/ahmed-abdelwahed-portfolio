import Hero from "@/app/components/Hero";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 md:gap-40 pb-20">
      <section id="home" >
        <Hero /> 
      </section>
      <section id="skills" className="px-6">
        <Skills /> 
      </section>
      <section id="projects" className="px-6">
        <Projects /> 
      </section>
      <section id="contact" className="px-6">
        <Contact /> 
      </section>


      {/* footer  */}
      <footer className="w-full py-10 border-t border-white/5 text-center text-state-500 text-sm">
          <p>{new Date().getFullYear()} - All rights reserved Ahmed Abdelwahed portfolio</p>
      </footer>
    </div>
  );
}