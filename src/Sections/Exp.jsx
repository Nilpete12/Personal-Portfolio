import React from 'react';
import { motion } from 'framer-motion';

const Exp = () => {
  // The Data: Your professional and academic timeline
  const experiences = [
    {
      role: "Web Development Trainee",
      studio: "Acmegrade",
      duration: "2 Months",
      description: "Engineered responsive web interfaces and refined frontend architecture, bridging the gap between design and functional, real-world production cycles."
    },
    {
      role: "Algorithms & C++ Trainee",
      studio: "Cipherschools",
      duration: "2 Months",
      description: "Deepened core computer science fundamentals, focusing on optimizing complex Data Structures and Algorithms natively in C++."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-zinc-950">
      <div className="container px-6 mx-auto max-w-5xl">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl font-black md:text-5xl text-cinema-red">
            Training & Experience
          </h2>
          <div className="w-24 h-1 mx-auto mt-4 bg-zinc-800"></div>
          <p className="max-w-2xl mx-auto mt-6 text-zinc-400">
            The studios I've worked with and the high-stakes environments where I honed my craft.
          </p>
        </motion.div>

        {/* The Timeline Container */}
        <div className="relative">
          {/* The glowing vertical "film strip" line */}
          <div className="absolute left-0 w-1 h-full md:left-1/2 bg-zinc-800 md:-translate-x-1/2">
            <div className="absolute top-0 w-full h-1/3 bg-linear-to-b from-cinema-red to-transparent"></div>
          </div>

          <div className="space-y-12 md:space-y-0">
            {experiences.map((exp, index) => {
              // Alternate sides for desktop view
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-center md:justify-between ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot (The clapperboard mark) */}
                  <div className="absolute -left-1.25 md:left-1/2 w-4 h-4 rounded-full bg-cinema-red md:-translate-x-1/2 shadow-[0_0_15px_#e50914] z-10"></div>

                  {/* Empty space for the opposite side on desktop */}
                  <div className="hidden w-5/12 md:block"></div>

                  {/* The Experience Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
                    className="w-full pl-8 mt-4 md:w-5/12 md:pl-0 md:mt-0"
                  >
                    <div className="p-6 transition-all duration-300 border border-zinc-800 bg-cinema-black hover:border-zinc-600 hover:-translate-y-1">
                      {/* Duration Tag */}
                      <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-white border rounded bg-zinc-900 border-zinc-700">
                        {exp.duration}
                      </span>
                      
                      {/* Role & Studio */}
                      <h3 className="text-2xl font-black text-white">
                        {exp.role}
                      </h3>
                      <h4 className="mb-4 text-sm tracking-widest text-cinema-red uppercase font-semibold">
                        @ {exp.studio}
                      </h4>
                      
                      {/* Description */}
                      <p className="text-zinc-400 leading-relaxed text-sm">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Exp;