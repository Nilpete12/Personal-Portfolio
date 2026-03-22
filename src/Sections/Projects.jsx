import React from 'react';
import { motion } from 'framer-motion';
import Lobby from '../assets/Images/Lobby.png';
import Portfolio from '../assets/Images/Portfolio.png';
import VolunTrack from '../assets/Images/VolunTrack.png';

const Projects = () => {
  // The Data: Your actual project slate
  const projects = [
    {
      title: "The LOBBY",
      tagline: "Full-Stack Ride-Hailing Platform",
      description: "A comprehensive ride-hailing application featuring real-time tracking, secure user routing, and a dynamic backend architecture.",
      techStack: ["React.js", "Node.js", "Express", "MongoDB"],
      image: Lobby,
      githubLink: "N/A - Private Repo",
      liveLink: "https://lobby-peach.vercel.app/"
    },
    {
      title: "Portfolio",
      tagline: "Personal Portfolio Website",
      description: "A personal portfolio website showcasing my projects and skills. Built with a focus on cinematic design and smooth user experience.",
      techStack: ["React.js", "Tailwind CSS", "Framer Motion"],
      image: Portfolio,
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Volunteer Management",
      tagline: "Donation Tracking System",
      description: "An organized platform designed to seamlessly track volunteer hours, manage community events, and process incoming donations.",
      techStack: ["React.js", "Tailwind CSS", "Node.js", "REST APIs"],
      image: VolunTrack,
      githubLink: "https://github.com/Nilpete12/Volunteer-Manage-System",
      liveLink: "#"
    }
  ];

  // Animation variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="py-24 bg-cinema-black">
      <div className="container px-6 mx-auto max-w-7xl">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-black md:text-5xl text-cinema-red">
            FEATURE PRESENTATIONS
          </h2>
          <div className="w-24 h-1 mx-auto mt-4 bg-zinc-800"></div>
          <p className="max-w-2xl mx-auto mt-6 text-zinc-400">
            A curated selection of my latest builds, from scalable full-stack platforms to core algorithmic systems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={cardVariant}
              className="flex flex-col overflow-hidden transition-all duration-300 border border-zinc-800 bg-zinc-950 group hover:border-zinc-600 hover:shadow-2xl hover:shadow-cinema-red/10"
            >
              {/* Thumbnail Image Container */}
              <div className="relative h-48 overflow-hidden md:h-56">
                <div className="absolute inset-0 z-10 bg-linear-to-t from-zinc-950 to-transparent"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 group-hover:opacity-75"
                />
              </div>

              {/* Project Content */}
              <div className="flex flex-col grow p-6">
                <p className="mb-1 text-xs font-bold tracking-widest text-cinema-red uppercase">
                  {project.tagline}
                </p>
                <h3 className="mb-3 text-2xl font-black text-white">
                  {project.title}
                </h3>
                <p className="mb-6 text-sm grow text-zinc-400 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack (The Cast) */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 text-xs font-medium bg-zinc-900 text-zinc-300 border border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-auto">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 text-sm font-bold text-center text-white transition-colors duration-300 rounded bg-cinema-red hover:bg-red-800"
                  >
                    Watch Live
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 text-sm font-bold text-center text-white transition-colors duration-300 bg-transparent border rounded border-zinc-600 hover:bg-zinc-800"
                  >
                    Script (GitHub)
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;