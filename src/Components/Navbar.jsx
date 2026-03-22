import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  // Audio state and reference
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Handle background transition on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // The audio toggle function
  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      audioRef.current.volume = 0.3; // Sets volume to 30% so it's ambient, not overwhelming
    }
    setIsPlaying(!isPlaying);
  };

  const navLinks = [
    { title: 'Home', to: 'home' },
    { title: 'About', to: 'about' },
    { title: 'Skills', to: 'skills' },
    { title: 'Projects', to: 'projects' },
    { title: 'Training', to: 'experience' },
    { title: 'Extra-Cirricular', to: 'achievements' },
    { title: 'Certificates', to: 'certificates' },
    { title: 'Side Quests', to: 'side-quests' },
    { title: 'Contact', to: 'contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cinema-black/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between px-6 mx-auto md:px-8">
        
        {/* Logo and Audio Toggle Group */}
        <div className="flex items-center gap-4 md:gap-6">
          <Link 
            to="home" 
            smooth={true} 
            duration={800} 
            className="text-2xl font-black tracking-widest cursor-pointer text-cinema-red"
          >
            NS
          </Link>

          {/* Hidden Audio Element */}
          <audio ref={audioRef} src="/OBAA.mp3" loop />

          {/* Audio Control Button */}
          <button 
            onClick={toggleAudio}
            className="flex items-center justify-center w-8 h-8 transition-colors duration-300 rounded-full text-zinc-400 hover:text-cinema-red hover:bg-zinc-900 focus:outline-none"
            title={isPlaying ? "Mute Soundtrack" : "Play Soundtrack"}
          >
            {isPlaying ? (
              // Playing Icon (Volume Up)
              <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5 10v4a2 2 0 002 2h2.28l4.238 3.531A1 1 0 0015 18.75V5.25a1 1 0 00-1.482-.882L9.28 7.9H7a2 2 0 00-2 2z" />
              </svg>
            ) : (
              // Muted Icon (Volume Off)
              <svg className="w-5 h-5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden space-x-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.to}
              smooth={true}
              duration={800}
              spy={true}
              activeClass="text-cinema-red"
              className="text-sm font-semibold tracking-widest text-gray-300 transition-colors cursor-pointer hover:text-white"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="text-gray-300 md:hidden hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="absolute left-0 w-full shadow-xl top-full bg-cinema-black/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.to}
                smooth={true}
                duration={800}
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold tracking-widest text-gray-300 transition-colors cursor-pointer hover:text-cinema-red"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;