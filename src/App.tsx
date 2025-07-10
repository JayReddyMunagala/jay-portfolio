import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import KonamiEasterEgg from './components/KonamiEasterEgg';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      <ParticleBackground />
      
      {/* Subtle gradient overlay for better readability */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900/30 via-transparent to-gray-900/30 pointer-events-none z-0"></div>
      
      <Header />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        {/* Easter Egg goes here */}
        <KonamiEasterEgg />
        
        {/* Page Sections */}
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </motion.main>
    </div>
  );
}

export default App;
