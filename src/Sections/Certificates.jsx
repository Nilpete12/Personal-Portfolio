import React from 'react';
import { motion } from 'framer-motion';
import Cipherschool from '../assets/Images/Cipherschool.png';
import Privacy from '../assets/Images/Privacy.png';
import FreeCodeCamp from '../assets/Images/FreeCodeCamp.png';


const Certificates = () => {
  // The Data: Your official credentials
  const certificates = [
    {
      title: "Data Structures & Algorithms in C++",
      issuer: "Cipherschools",
      date: "July 25'",
      image: Cipherschool, // Placeholder: Cipherschool logo
      credentialLink: "https://www.cipherschools.com/certificate/preview?id=6888ea2cd6aded19153caa81",
    },
    {
      title: "Privacy & Security in Social Media",
      issuer: "Swayam & NPTEL",
      date: "April 25'",
      image: Privacy, // Placeholder: Privacy logo
      credentialLink: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs79/Course/NPTEL25CS79S14750035004483524.pdf",
    },
    {
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      date: "Oct 23'",
      image: FreeCodeCamp, // Placeholder: FreeCodeCamp logo
      credentialLink: "https://www.freecodecamp.org/certification/fcc185aac99-e985-41bc-8754-7266b047b549/responsive-web-design",
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
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="certificates" className="py-24 bg-zinc-950">
      <div className="container px-6 mx-auto max-w-7xl">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-black md:text-5xl text-cinema-red">
            ACADEMY CERTIFICATIONS
          </h2>
          <div className="w-24 h-1 mx-auto mt-4 bg-zinc-800"></div>
          <p className="max-w-2xl mx-auto mt-6 text-zinc-400">
            Formal training, rigorous coursework, and verified credentials that back up the technical execution.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div 
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {certificates.map((cert, index) => (
            <motion.div 
              key={index}
              variants={cardVariant}
              className="relative flex flex-col overflow-hidden transition-all duration-300 border border-zinc-800 bg-cinema-black group hover:border-zinc-500"
            >
              {/* Thumbnail Image Container */}
              {/* Using aspect-video to give it a nice widescreen/document feel */}
              <div className="relative w-full overflow-hidden aspect-video">
                {/* Dark cinematic overlay that fades slightly on hover */}
                <div className="absolute inset-0 z-10 transition-opacity duration-300 bg-zinc-950/40 group-hover:bg-zinc-950/10"></div>
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Certificate Details */}
              <div className="flex flex-col grow p-6 border-t border-zinc-800">
                <div className="flex items-start justify-between mb-2">
                  <p className="text-xs font-bold tracking-widest text-cinema-red uppercase">
                    {cert.issuer}
                  </p>
                  <span className="text-xs text-zinc-500 font-semibold tracking-wider">
                    {cert.date}
                  </span>
                </div>
                
                <h3 className="mb-6 text-xl font-black text-white leading-tight">
                  {cert.title}
                </h3>

                {/* Action Button */}
                <div className="mt-auto">
                  <a 
                    href={cert.credentialLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block w-full px-4 py-2 text-sm font-bold text-center text-white transition-colors duration-300 border rounded border-zinc-700 bg-zinc-900 hover:bg-cinema-red hover:border-cinema-red"
                  >
                    View Credential
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <br />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 text-center"
        >
          <div className="w-24 h-1 mx-auto mt-4 bg-zinc-800"></div>
          <p className="max-w-2xl mx-auto mt-6 text-zinc-400">
            Check out more certifications and credentials on my LinkedIn profile.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Certificates;