import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
  // The Data: Your awards and milestones
  const achievements = [
    {
      title: "Gateway to SIH season 4",
      category: "Gateway Level Competitor",
      date: "2025",
      description: "Selected to compete at the university level, rapidly architecting and deploying agile software solutions under intense, real-world time constraints."
    },
    {
      title: "5K Marathon Finisher",
      category: "Endurance & Discipline",
      date: "February 2026",
      description: "Successfully trained for and completed a 5km marathon, demonstrating that focus, pacing, and long-term dedication extend well beyond the screen."
    },
    {
      title: "LeetCode Enthusiast",
      category: "Problem-Solving & Algorithmic Thinking",
      date: "Ongoing",
      description: "Consistently solving coding challenges on LeetCode (70+ Questions), enhancing problem-solving skills and algorithmic thinking."
    }
  ];

  // Animation variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const laurelVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="achievements" className="py-24 bg-cinema-black">
      <div className="container px-6 mx-auto max-w-5xl">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-black md:text-5xl text-cinema-red">
            Extra-Curricular Activities
          </h2>
          <div className="w-24 h-1 mx-auto mt-4 bg-zinc-800"></div>
          <p className="max-w-2xl mx-auto mt-6 text-zinc-400">
            Milestones, official selections, and moments of recognition both in and out of the studio.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div 
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-12 md:grid-cols-3"
        >
          {achievements.map((award, index) => (
            <motion.div 
              key={index}
              variants={laurelVariant}
              className="relative flex flex-col items-center p-8 text-center border transition-all duration-500 bg-zinc-950 border-zinc-800 hover:border-[#d4af37] group"
            >
              {/* Decorative Film Festival "Laurel" aesthetics */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 opacity-50 border-cinema-red group-hover:border-[#d4af37] transition-colors"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 opacity-50 border-cinema-red group-hover:border-[#d4af37] transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 opacity-50 border-cinema-red group-hover:border-[#d4af37] transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 opacity-50 border-cinema-red group-hover:border-[#d4af37] transition-colors"></div>

              {/* Year/Date Tag */}
              <p className="mb-4 text-sm font-bold tracking-widest text-[#d4af37]">
                {award.date}
              </p>

              {/* Award Title */}
              <h3 className="mb-2 text-2xl font-black text-white uppercase">
                {award.title}
              </h3>

              {/* Category */}
              <p className="mb-6 text-xs tracking-[0.2em] text-cinema-red uppercase">
                {award.category}
              </p>

              {/* Description */}
              <p className="text-sm leading-relaxed text-zinc-400">
                {award.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Achievements;