import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  // Idea 2: High-Velocity "Sword Slash" Animations
  // Slashes in from the left with a motion blur effect
  const slashFromLeft = {
    hidden: { opacity: 0, x: -150, skewX: 25, filter: "blur(8px)" },
    visible: { 
      opacity: 1, 
      x: 0, 
      skewX: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.5, type: "spring", stiffness: 250, damping: 20 } 
    }
  };

  // Slashes in from the right
  const slashFromRight = {
    hidden: { opacity: 0, x: 150, skewX: -25, filter: "blur(8px)" },
    visible: { 
      opacity: 1, 
      x: 0, 
      skewX: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.5, type: "spring", stiffness: 250, damping: 20 } 
    }
  };

  // A heavy, high-impact drop for the button
  const impactDrop = {
    hidden: { opacity: 0, y: -80, scale: 1.5 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 300, damping: 15, delay: 0.4 } 
    }
  };

  return (
    <section 
      id="home" 
      className="relative flex flex-col items-center justify-center h-screen px-6 text-center overflow-hidden bg-cinema-black"
    >
      {/* Idea 3: The Aura Background */}
      {/* This creates a glowing, breathing red orb behind the text that pulses softly */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.12)_0%,rgba(5,5,5,1)_50%)] animate-pulse pointer-events-none"></div>
      
      {/* A secondary static gradient to ensure text readability */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-cinema-black/50 to-cinema-black pointer-events-none"></div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
        className="relative z-10 w-full max-w-5xl mx-auto"
      >
        {/* Studio Intro - Slashing in from the right */}
        <motion.p 
          variants={slashFromRight}
          className="mb-4 font-semibold tracking-[0.3em] text-cinema-red uppercase text-sm md:text-base"
        >
          Entering The Portfolio
        </motion.p>

        {/* Main Title - Slashing in from the left */}
        <motion.h1 
          variants={slashFromLeft}
          className="text-6xl font-black leading-none tracking-tight text-transparent md:text-8xl lg:text-9xl bg-clip-text bg-linear-to-r from-white via-zinc-300 to-zinc-600 drop-shadow-2xl"
        >
          Nilesh Sen
        </motion.h1>

        {/* Idea 1: The Arc Progression Typewriter */}
        <motion.div 
          variants={slashFromRight}
          className="h-24 max-w-3xl mx-auto mt-8 text-xl font-medium md:text-3xl text-zinc-400"
        >
          <span className="text-white">Constantly breaking limits by </span>
          <span className="font-bold text-cinema-red drop-shadow-[0_0_8px_rgba(229,9,20,0.8)]">
            <Typewriter
              words={[
                'mastering core forms in C++.',
                'slaying complex bugs in React & Node.',
                'optimizing heavy algorithms.',
                'architecting full-stack systems.',
                'leveling up my production UI.',
                'Improving my storytelling through code.'
              ]}
              loop={0} // 0 means infinite loop
              cursor
              cursorStyle='|'
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </span>
        </motion.div>

        {/* Call to Action - High impact drop */}
        <motion.div variants={impactDrop} className="mt-8">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative px-10 py-4 text-sm font-black tracking-[0.2em] text-white uppercase transition-all duration-300 border-2 border-cinema-red bg-cinema-red/10 hover:bg-cinema-red hover:shadow-[0_0_30px_rgba(229,9,20,0.6)] group overflow-hidden"
          >
            {/* A sharp glare effect that sweeps across the button on hover */}
            <span className="absolute inset-0 w-full h-full -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_0.7s_forwards]"></span>
            View The Projects
          </button>
        </motion.div>
      </motion.div>

      {/* Add a custom animation for the button shimmer effect in standard Tailwind format */}
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;