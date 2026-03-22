import React from 'react';
import { motion } from 'framer-motion';
import YT from '../assets/Images/YT.webp';
import Lalaland from '../assets/Images/Lalaland.jpg';
import OBAA from '../assets/Images/OBAA.jpg';

const SideQuests = () => {
  // The Data: Your Vlogs and Written Reviews
  const content = [
    {
      title: "Check out my YouTube Channel!",
      category: "Vlog & Thoughts",
      platform: "YouTube",
      image: "https://images.unsplash.com/photo-1612428978260-2b9c7df20150?q=80&w=800&auto=format&fit=crop", // Placeholder: Anime/Cinematic vibe
      link: "https://www.youtube.com/channel/UC_YbNMGl_v3KhZf7OOL3gLw",
      description: "A visual diary of my cinematic journey, where I share behind-the-scenes insights, film analysis, and my personal take on the art of storytelling.",
      rating: null, // Vlogs don't need star ratings
      type: "written"
    },
    {
      title: "La La Land",
      category: "Review",
      platform: "Letterboxd",
      image: Lalaland, // Placeholder: Desert/Sci-Fi
      link: "https://boxd.it/cgiAsh",
      description: "City of Stars, are you shining just for me? A deep dive into the bittersweet romance and dazzling visuals of Damien Chazelle's modern musical masterpiece.",
      rating: "★★★★★",
      type: "written"
    },
    {
      title: "One Battle After Another",
      category: "Critical Review",
      platform: "IMDb",
      image: OBAA, // Placeholder: Dark/Cinematic
      link: "https://www.imdb.com/title/tt30144839/reviews/?item=rw11319804&ref_=ext_shr_lnk",
      description: "A gripping exploration of the human cost of war and the resilience of the spirit.",
      rating: "★★★★½",
      type: "written"
    }
  ];

  // Animation variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section id="side-quests" className="py-24 bg-cinema-black">
      <div className="container px-6 mx-auto max-w-7xl">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-black md:text-5xl text-cinema-red">
            My Side Quests
          </h2>
          <div className="w-24 h-1 mx-auto mt-4 bg-zinc-800"></div>
          <p className="max-w-2xl mx-auto mt-6 text-zinc-400">
            A curated collection of my visual storytelling and critical analysis. Exploring narrative structure both on the screen and in the script.
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div 
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {content.map((item, index) => (
            <motion.a 
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariant}
              className="relative flex flex-col overflow-hidden transition-all duration-500 border border-zinc-800 bg-zinc-950 group hover:border-zinc-500 cursor-pointer h-112.5"
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                />
              </div>

              {/* Gradient Overlay for Readability */}
              <div className="absolute inset-0 z-10 bg-linear-to-t from-cinema-black via-cinema-black/80 to-transparent"></div>

              {/* Top Meta Tags */}
              <div className="relative z-20 flex items-start justify-between p-6">
                <span className="px-3 py-1 text-xs font-bold tracking-widest text-white uppercase bg-cinema-red/90 backdrop-blur-sm">
                  {item.platform}
                </span>
                {item.type === 'video' && (
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 backdrop-blur-md">
                    <svg className="w-4 h-4 text-white translate-x-px" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </span>
                )}
              </div>

              {/* Bottom Content Area */}
              <div className="relative z-20 flex flex-col justify-end grow p-6 transition-transform duration-500 translate-y-8 group-hover:translate-y-0">
                <p className="mb-2 text-xs font-bold tracking-widest text-cinema-red uppercase">
                  {item.category}
                </p>
                <h3 className="mb-3 text-2xl font-black text-white leading-tight">
                  {item.title}
                </h3>
                
                {/* Description - Fades in on hover */}
                <p className="text-sm text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                  {item.description}
                </p>

                {/* Rating - Only shows if it's a written review */}
                {item.type === 'written' && item.rating && (
                  <div className="mt-4 text-[#d4af37] tracking-[0.2em] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    {item.rating}
                  </div>
                )}
              </div>

              {/* Border Glow Effect on Hover */}
              <div className="absolute inset-0 z-30 transition-opacity duration-500 border-2 opacity-0 border-cinema-red group-hover:opacity-100 pointer-events-none"></div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default SideQuests;