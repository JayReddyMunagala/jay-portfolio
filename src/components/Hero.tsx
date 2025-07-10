import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  const roles = ["Software Engineer", "Student Assistant", "Web Developer", "Data Analyst"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout;

    if (!isDeleting && displayedText === currentRole) {
      // Pause before starting to delete
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === '') {
      // Move to next role and start typing
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      // Handle typing or deleting
      timeout = setTimeout(() => {
        setDisplayedText(prev => {
          if (isDeleting) {
            return currentRole.substring(0, prev.length - 1);
          } else {
            return currentRole.substring(0, prev.length + 1);
          }
        });
      }, isDeleting ? 50 : 100);
    }

    return () => clearTimeout(timeout);
  }, [currentRoleIndex, displayedText, isDeleting, roles]);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6 pt-48 sm:pt-64">
      {/* Enhanced background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-purple-900/10"></div>
      {/* Additional readability overlay */}
      <div className="absolute inset-0 bg-gray-900/20"></div>
      
      <div className="container mx-auto text-center relative z-10 max-w-6xl flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 200 }}
            className="relative w-32 h-32 sm:w-40 sm:h-40 mb-6 sm:mb-8 flex-shrink-0"
          >
            {/* Profile image container with glass morphism effect */}
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 p-1 shadow-2xl mx-auto">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center relative overflow-hidden">
                {/* Placeholder image - using a high-quality pattern */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                  <span className="text-4xl sm:text-6xl font-bold text-white">JPR</span>
                </div>
                {/* Glass overlay effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
              </div>
            </div>
            
            {/* Floating rings around profile */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-blue-400/30 pointer-events-none"
            ></motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 rounded-full border border-purple-400/20 pointer-events-none"
            ></motion.div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-center"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Jaya Prakash Reddy
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Munagala
            </span>
          </motion.h1>

          {/* Animated typing role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-16 sm:h-20 flex items-center justify-center mb-6 sm:mb-8 w-full"
          >
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-300">
              <span className="text-blue-400">I'm a </span>
              <span className="relative">
                <motion.span
                  key={currentRoleIndex}
                  className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                >
                  {displayedText}
                </motion.span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-blue-400 ml-1"
                >
                  |
                </motion.span>
              </span>
            </div>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl leading-relaxed font-light px-4 text-center"
          >
            "Engineered platforms. Creating AI. Designing tomorrow"
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4"
          >
            {/* Primary CTA */}
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-full sm:w-auto px-6 sm:px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-white font-semibold text-base sm:text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 overflow-hidden min-h-[48px] flex items-center justify-center"
            >
              <span className="relative z-10 flex items-center">
                View Projects
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight size={20} className="ml-2" />
                </motion.div>
              </span>
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
              ></motion.div>
            </motion.a>

            {/* Secondary CTA */}
            {/* Download Resume Button - Hidden */}
            {/* 
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-full sm:w-auto px-6 sm:px-8 py-4 bg-gray-800/80 backdrop-blur-sm border-2 border-gray-600 rounded-2xl text-gray-300 hover:text-white hover:border-blue-400 transition-all duration-300 font-semibold text-base sm:text-lg min-h-[48px] flex items-center justify-center"
            >
              <span className="flex items-center">
                <Download size={20} className="mr-2" />
                Download Resume
              </span>
              <div className="absolute inset-0 rounded-2xl bg-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
            */}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex justify-center space-x-4 sm:space-x-6 px-4"
          >
            {[
              { Icon: Github, href: "https://github.com/JayReddyMunagala", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/jaya-prakash-reddy-munagala-90a39626b/", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:munagala.jayaprakash@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="group relative p-3 sm:p-4 bg-gray-800/60 backdrop-blur-sm rounded-2xl text-gray-400 hover:text-blue-400 hover:bg-gray-700/80 transition-all duration-300 border border-gray-700 hover:border-blue-400/50 min-h-[48px] min-w-[48px] flex items-center justify-center"
                aria-label={label}
              >
                <Icon size={24} />
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  {label}
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center text-gray-400 hover:text-blue-400 transition-colors duration-300 p-2"
          >
            <span className="text-sm font-medium mb-2 hidden sm:block">Scroll to explore</span>
            <ChevronDown size={32} />
          </motion.a>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
