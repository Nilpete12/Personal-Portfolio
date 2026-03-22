import React from 'react';
import Hero from './Sections/Hero';
import Navbar from './Components/Navbar';
import About from './Sections/About';
import Skills from './Sections/Skills';
import Projects from './Sections/Projects';
import Exp from './Sections/Exp';
import Achievements from './Sections/Achievements';
import Certificates from './Sections/Certificates';
import Contact from './Sections/Contact';
import SideQuests from './Sections/Side-quests';


function App() {
  return (
    // The fragment <> </> acts as a container without adding extra HTML nodes
    <>
      <Navbar />
      
      <main>
        {/* Scene 1: The Premiere */}
        <Hero />
        <About />
        <Skills /> 
        <Projects />
        <Exp />
        <Achievements />
        <Certificates />
        <SideQuests />
        <Contact />
      </main>
    </>
  );
}

export default App;