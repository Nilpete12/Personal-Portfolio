import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace these with your actual EmailJS IDs
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    
    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
          setSubmitStatus('success');
          setIsSubmitting(false);
          e.target.reset(); // Clear the form
          
          // Reset the success message after 5 seconds
          setTimeout(() => setSubmitStatus(null), 5000);
      }, (error) => {
          console.log(error.text);
          setSubmitStatus('error');
          setIsSubmitting(false);
      });
  };
  
  return (
    <section id="contact" className="pt-24 bg-cinema-black">
      <div className="container px-6 mx-auto max-w-7xl pb-24">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-black md:text-5xl text-cinema-red">
            THE CASTING CALL
          </h2>
          <div className="w-24 h-1 mx-auto mt-4 bg-zinc-800"></div>
          <p className="max-w-2xl mx-auto mt-6 text-zinc-400">
            Ready to start production? Whether you are casting for a dedicated frontend developer role or looking to collaborate on a full-stack project, my inbox is open.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 max-w-5xl mx-auto">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full lg:w-1/3 space-y-8"
          >
            <div>
              <h3 className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-2">Direct Line</h3>
              <p className="text-xl font-semibold text-white">Nilpete12@gmail.com</p>
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-2">Location</h3>
              <p className="text-lg text-white">India</p>
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-4">Social Network</h3>
              <div className="flex flex-wrap gap-4 mt-2">
                {/* Existing: GitHub */}
                <a href="https://github.com/Nilpete12/" className="flex items-center justify-center w-10 h-10 transition-all border rounded-full border-zinc-700 text-zinc-400 hover:text-cinema-red hover:border-cinema-red">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                
                {/* Existing: LinkedIn */}
                <a href="https://www.linkedin.com/in/nilesh-sen-a76642284/" className="flex items-center justify-center w-10 h-10 transition-all border rounded-full border-zinc-700 text-zinc-400 hover:text-[#0077b5] hover:border-[#0077b5]">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                
                {/* Existing: YouTube */}
                <a href="https://www.youtube.com/channel/UC_YbNMGl_v3KhZf7OOL3gLw" className="flex items-center justify-center w-10 h-10 transition-all border rounded-full border-zinc-700 text-zinc-400 hover:text-[#FF0000] hover:border-[#FF0000]">
                  <span className="sr-only">YouTube</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>

                {/* New: Instagram */}
                <a href="https://www.instagram.com/nilpete12/" className="flex items-center justify-center w-10 h-10 transition-all border rounded-full border-zinc-700 text-zinc-400 hover:text-[#E1306C] hover:border-[#E1306C] group">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>

                {/* New: IMDb */}
                <a href="https://www.imdb.com/user/ur165495404/?ref_=hm_nv_profile" className="flex items-center justify-center w-10 h-10 transition-all border rounded-full border-zinc-700 text-zinc-400 hover:text-black hover:bg-[#f5c518] hover:border-[#f5c518] group">
                  <span className="sr-only">IMDb</span>
                  {/* IMDb is highly text-based, so a styled font works best here */}
                  <span className="text-[10px] font-black tracking-tighter pt-px">IMDb</span>
                </a>

                {/* New: Letterboxd */}
                <a href="https://letterboxd.com/Nilpete/" className="flex items-center justify-center w-10 h-10 transition-all border rounded-full border-zinc-700 text-zinc-400 hover:border-[#00e054] group">
                  <span className="sr-only">Letterboxd</span>
                  {/* Using a neat trick to map the three brand colors on hover */}
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="6" cy="12" r="2.5" className="transition-colors group-hover:text-[#00e054]" />
                    <circle cx="12" cy="12" r="2.5" className="transition-colors group-hover:text-[#ff8000]" />
                    <circle cx="18" cy="12" r="2.5" className="transition-colors group-hover:text-[#40bcf4]" />
                  </svg>
                </a>


                <a href="https://leetcode.com/u/Prince_Nilpete_over_9000/" className="flex items-center justify-center w-10 h-10 transition-all border rounded-full border-zinc-700 text-zinc-400 hover:text-black hover:bg-[#b18a0b] hover:border-[#f5c518] group">
                  <span className="sr-only">LeetCode</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M13.483 0a1.374 1.374 0 0 0 -0.961 0.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0 -1.209 2.104 5.35 5.35 0 0 0 -0.125 0.513 5.527 5.527 0 0 0 0.062 2.362 5.83 5.83 0 0 0 0.349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193 0.039 0.038c2.248 2.165 5.852 2.133 8.063 -0.074l2.396 -2.392c0.54 -0.54 0.54 -1.414 0.003 -1.955a1.378 1.378 0 0 0 -1.951 -0.003l-2.396 2.392a3.021 3.021 0 0 1 -4.205 0.038l-0.02 -0.019 -4.276 -4.193c-0.652 -0.64 -0.972 -1.469 -0.948 -2.263a2.68 2.68 0 0 1 0.066 -0.523 2.545 2.545 0 0 1 0.619 -1.164L9.13 8.114c1.058 -1.134 3.204 -1.27 4.43 -0.278l3.501 2.831c0.593 0.48 1.461 0.387 1.94 -0.207a1.384 1.384 0 0 0 -0.207 -1.943l-3.5 -2.831c-0.8 -0.647 -1.766 -1.045 -2.774 -1.202l2.015 -2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0 -1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38 -1.382 1.38 1.38 0 0 0 -1.38 -1.382z" fill="#000000" stroke-width="1"></path>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: The Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full lg:w-2/3"
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="user_name" className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Your Name</label>
                  <input type="text" name="from_name" id="user_name" required className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-cinema-red transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="user_email" className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Email Address</label>
                  <input type="email" name="reply_to" id="user_email" required className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-cinema-red transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold tracking-widest text-zinc-500 uppercase">The Script (Your Message)</label>
                <textarea name="message" id="message" required rows="5" className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-cinema-red transition-colors resize-none" placeholder="Speak your Mind..."></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full px-8 py-4 text-sm font-bold tracking-widest text-white transition-colors duration-300 rounded bg-cinema-red hover:bg-red-800 uppercase disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending Transmission...' : 'Send Message'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <p className="mt-4 text-sm font-semibold tracking-widest text-center text-green-500">Message delivered successfully. I'll be in touch.</p>
              )}
              {submitStatus === 'error' && (
                <p className="mt-4 text-sm font-semibold tracking-widest text-center text-cinema-red">Communication error. Please try again or use direct email.</p>
              )}
            </form>
          </motion.div>

        </div>
      </div>

      {/* The End Credits (Footer) */}
      <div className="border-t border-zinc-900 py-8 text-center bg-[#020202]">
        <p className="text-sm font-semibold tracking-widest text-zinc-600 uppercase">
          &copy; {new Date().getFullYear()} | END OF THE LINE 
        </p>
      </div>
    </section>
  );
};

export default Contact;