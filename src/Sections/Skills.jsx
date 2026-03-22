import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  // The Data: Organized by cinematic departments
  const skillCategories = [
    {
      title: "Frontend",
      description: "The face of the production. Delivering the visual experience.",
      skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Responsive Web Design", "HTML5"]
    },
    {
      title: "Backend & Databases",
      description: "Handling the heavy lifting and dangerous logic behind the scenes.",
      skills: ["Node.js", "Express.js", "Laravel (in progress)", "RESTful APIs", "MongoDB", "MySQL"]
    },
    {
      title: "Core Engine",
      description: "The fundamental structure and logic that holds the story together.",
      skills: ["C++", "Data Structures", "Algorithms", "Object-Oriented Programming"]
    },
    {
      title: "Creative",
      description: "Adding the final polish, pacing, and visual storytelling.",
      skills: ["YouTube Content Creation", "Video Editing", "Vlog Production", "Photography", "UI/UX Principles"]
    },
    {
      title: "Tools & Technologies", 
      description: "The essential equipment and software in my toolkit.",
      skills: ["Git & GitHub", "VS Code", "Figma", "Capcut", "Adobe Photoshop", "Cloudinary"]
    },
    {
      title: "Soft Skills & languages",
      description: "The interpersonal and organizational skills that keep the production running smoothly.",
      skills: ["Effective Communication", "Team Collaboration", "Problem-Solving", "Time Management", "Adaptability", "English", "Hindi", "Bengali", "Japanese (Basic)"]
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="skills" className="py-24 bg-zinc-950">
      <div className="container px-6 mx-auto max-w-7xl">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-black md:text-5xl text-cinema-red">
            Skills
          </h2>
          <div className="w-24 h-1 mx-auto mt-4 bg-zinc-800"></div>
          <p className="max-w-2xl mx-auto mt-6 text-zinc-400">
            Every project requires a masterclass team. Here is the technical and creative arsenal I use to bring ideas to the screen.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={cardVariant}
              className="p-8 transition-colors duration-300 border bg-cinema-black border-zinc-800 hover:border-cinema-red group"
            >
              <h3 className="mb-2 text-xl font-bold tracking-widest text-white uppercase">
                {category.title}
              </h3>
              <p className="mb-6 text-sm text-zinc-500">
                {category.description}
              </p>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-4 py-2 text-sm font-medium transition-colors duration-300 bg-zinc-900 text-zinc-300 group-hover:bg-zinc-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;