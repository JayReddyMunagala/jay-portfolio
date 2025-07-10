import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const updateScrollDirection = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    if (Math.abs(currentScrollY - lastScrollY.current) > 5) { // Threshold to prevent micro-movements
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      lastScrollY.current = currentScrollY;
    }
    
    ticking.current = false;
  }, []);

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(updateScrollDirection);
      ticking.current = true;
    }
  }, [updateScrollDirection]);

  useEffect(() => {
    const throttledHandleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current + 10) {
        setScrollDirection('down');
        lastScrollY.current = currentScrollY;
      } else if (currentScrollY < lastScrollY.current - 10) {
        setScrollDirection('up');
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  // Core skills with colors for better mobile display
  const topSkills = [
    { name: "Python", icon: "🐍", category: "Programming", color: "#3776ab" },
    { name: "JavaScript", icon: "🟨", category: "Programming", color: "#f7df1e" },
    { name: "PHP", icon: "🐘", category: "Backend", color: "#777bb4" },
    { name: "React", icon: "⚛️", category: "Frontend", color: "#61dafb" },
    { name: "TypeScript", icon: "🔷", category: "Programming", color: "#3178c6" },
    { name: "SQL", icon: "🗃️", category: "Database", color: "#336791" },
    { name: "MySQL", icon: "🗄️", category: "Database", color: "#4479a1" },
    { name: "AWS", icon: "☁️", category: "Cloud", color: "#ff9900" },
    { name: "TensorFlow", icon: "🧠", category: "ML", color: "#ff6f00" },
    { name: "Apache Spark", icon: "⚡", category: "Big Data", color: "#e25a1c" },
    { name: "Docker", icon: "🐳", category: "DevOps", color: "#2496ed" },
    { name: "Tableau", icon: "📈", category: "Analytics", color: "#e97627" },
    { name: "Node.js", icon: "🟢", category: "Backend", color: "#339933" },
    { name: "Pandas", icon: "🐼", category: "Data Analytics", color: "#150458" },
    { name: "D3.js", icon: "📉", category: "Visualization", color: "#f68e56" },
    { name: "Hadoop", icon: "🗂️", category: "Big Data", color: "#66ccff" },
    { name: "HTML/CSS", icon: "🎨", category: "Frontend", color: "#e34f26" },
    { name: "Git", icon: "📚", category: "Tools", color: "#f05032" }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Technical Skills & Expertise
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Core technologies for software engineering, data analytics, machine learning, and full stack development
          </p>
        </motion.div>

        {/* Responsive Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 gap-4 sm:gap-6 mb-12 sm:mb-16 justify-items-center max-w-7xl mx-auto">
          {topSkills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${scrollDirection}`}
              initial={{ 
                opacity: 0, 
                scale: 0.7,
                y: scrollDirection === 'down' ? -80 : 80,
                x: scrollDirection === 'down' 
                  ? (index % 2 === 0 ? -30 : 30)
                  : (index % 2 === 0 ? 30 : -30),
                rotate: scrollDirection === 'down' ? -10 : 10
              }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                y: 0,
                x: 0,
                rotate: 0
              }}
              transition={{ 
                delay: index * 0.08, 
                duration: 0.6,
                type: "spring",
                stiffness: 150,
                damping: 25,
                mass: 0.8
              }}
              viewport={{ 
                once: false, 
                amount: 0.2, 
                margin: scrollDirection === 'down' ? "0px 0px -100px 0px" : "-100px 0px 0px 0px"
              }}
              whileHover={{ 
                scale: 1.1, 
                y: -10,
                rotateY: 15,
                rotateX: 5
              }}
              style={{ 
                willChange: 'transform, opacity',
                backfaceVisibility: 'hidden',
                perspective: 1000,
                justifySelf: 'center'
              }}
              className="flex flex-col items-center justify-center p-3 sm:p-4 cursor-pointer group w-full max-w-[100px]"
            >
              {/* Skill Icon Container */}
              <motion.div
                whileHover={{ 
                  scale: 1.2,
                  filter: "brightness(1.2) saturate(1.3)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="relative w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-3 flex items-center justify-center rounded-2xl backdrop-blur-sm shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-300 min-h-[48px] min-w-[48px]"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${skill.color}20, ${skill.color}10)`,
                  boxShadow: `
                    inset 0 1px 0 ${skill.color}40,
                    inset 0 -1px 0 rgba(0,0,0,0.1),
                    0 4px 20px rgba(0,0,0,0.3),
                    0 0 0 1px ${skill.color}20
                  `
                }}
              >
                <div 
                  className="text-lg sm:text-2xl font-bold transform group-hover:scale-110 transition-transform duration-300"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                {/* Glass reflection effect */}
                <div 
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${skill.color}30, transparent, transparent)` }}
                />
              </motion.div>

              {/* Skill Text */}
              <motion.div
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
                className="text-center w-full"
              >
                <h3 
                  className="font-semibold text-xs sm:text-sm mb-1 transition-colors duration-300 leading-tight text-center"
                  style={{ color: `${skill.color}` }}
                >
                  {skill.name}
                </h3>
                <span className="text-gray-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block text-center">
                  {skill.category}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Categories for Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center lg:hidden"
        >
          <p className="text-sm text-gray-400 mb-4">
            Specialized in healthcare analytics, e-commerce platforms, machine learning, and full-stack development
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Healthcare Analytics", "Ecommerce Platforms", "Machine Learning", "Data Visualization"].map((category) => (
              <span
                key={category}
                className="px-3 py-1 bg-gray-800 border border-gray-600 rounded-full text-xs text-gray-300"
              >
                {category}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
