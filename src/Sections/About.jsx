import React from 'react';
import { motion } from 'framer-motion';
import me from '../assets/Images/Me.jpg'; 
import resume from '../assets/Nilesh Sen.pdf';

const About = () => {
  return (
    <section id="about" className="py-24 bg-cinema-black">
      <div className="container px-6 mx-auto max-w-7xl">
        
        {/* Scene Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-black md:text-5xl text-cinema-red">
            BEHIND THE SCENES
          </h2>
          <div className="w-24 h-1 mx-auto mt-4 bg-zinc-800"></div>
        </motion.div>

        {/* Content Layout */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          
          {/* Left Column: The Director's Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex justify-center w-full lg:w-1/2"
          >
            {/* The Glowing Cinematic Ring */}
            <div className="absolute inset-0 rounded-full bg-cinema-red blur-2xl opacity-20 animate-pulse w-72 h-72 md:w-96 md:h-96 m-auto"></div>
            
            {/* The Circular Image Container */}
            <div className="relative z-10 w-64 h-64 overflow-hidden border-4 border-zinc-800 rounded-full shadow-2xl md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* REPLACE THIS SRC WITH YOUR ACTUAL IMAGE LATER */}
              <img 
                src={me} 
                alt="Director Portrait" 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* Right Column: The Script (Your Bio) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full text-lg leading-relaxed text-zinc-400 lg:w-1/2 space-y-6"
          >
            <h3 className="text-2xl font-bold text-white tracking-widest uppercase">
              Get to know me
            </h3>
            
            <p>
              As a Computer Science Engineering student, my journey is driven by a passion for building robust digital experiences from the ground up. I specialize in crafting seamless user interfaces with <span className="text-white font-semibold">React.js</span> and architecting scalable backends with <span className="text-white font-semibold">Node.js</span>. 
            </p>

            <p>
              Under the hood, my foundation is built on solid logic. I have a deep-rooted preference for <span className="text-white font-semibold">C++</span> when tackling complex Data Structures and Algorithms. My recent web development traineeship at Acmegrade further sharpened my ability to deliver production-ready code in real-world environments, and I am currently expanding my backend toolkit by diving into Laravel.
            </p>

            <p>
              But my screen time isn't just about code. I'm also a visual storyteller, creating YouTube vlogs and shorts. This creative outlet heavily influences my frontend work—teaching me pacing, visual hierarchy, and audience engagement—ensuring every application I build isn't just functional, but genuinely captivating.
            </p>
            <a href={resume} target="_blank" rel="noopener noreferrer">
              <button 
                className=" px-8 py-4 text-sm font-bold tracking-widest text-white transition-colors duration-300 rounded bg-cinema-red hover:bg-red-800 uppercase disabled:opacity-50 disabled:cursor-not-allowed"
              >
                View Resume
              </button>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;