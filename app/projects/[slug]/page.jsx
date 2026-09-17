import Link from "next/link";
import { ArrowLeft, CodeXml, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import {projects} from "@/app/data/projects" ;



export default async function ProjectDetails({ params }) {

  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">

      {/* Back Button */}
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-slate-400 hover:text-[#D4AF37] transition-colors mb-10"
      >
        <ArrowLeft size={18} />
        Back to Projects
      </Link>


      {/* Header */}
      <div className="max-w-4xl mb-12">

        <span className="inline-block text-sm font-bold text-[#D4AF37] uppercase tracking-wider mb-4">
          {project.category}
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          {project.title}
        </h1>

        <p className="text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
          {project.description}
        </p>

      </div>


      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mb-16">

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                       bg-[#D4AF37] text-white font-semibold
                       hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]
                       transition-shadow"
          >
            <CodeXml size={18} />
            GitHub
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                       bg-white/10 border border-white/10 text-white font-semibold
                       hover:bg-[#D4AF37] hover:border-[#D4AF37]
                       transition-colors"
          >
            <ExternalLink size={18} />
            Live Demo
          </a>
        )}

      </div>


      {/* Main Image */}
      <div className="relative overflow-hidden rounded-3xl glassmorphism border border-white/10 mb-8">

        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full aspect-video object-cover"
        />

        <div className="absolute inset-0 bg-cosmic-black/10 pointer-events-none" />

      </div>


      {/* Project Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {project.images.slice(1).map((image, index) => (

          <div
            key={image}
            className="relative overflow-hidden rounded-2xl glassmorphism border border-white/10 group"
          >

            <img
              src={image}
              alt={`${project.title} screenshot ${index + 2}`}
              className="w-full aspect-video object-cover
                         transition-transform duration-700
                         group-hover:scale-105"
            />

          </div>

        ))}

      </div>

    </main>
  );
}