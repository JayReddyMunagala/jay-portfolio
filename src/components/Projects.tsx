import React from 'react';
import { motion } from 'framer-motion';
import { Github, Brain, BarChart3, Sparkles, Code2, Database, Cpu, Monitor } from 'lucide-react';

const Projects = () => {
  const mainProjects = [
    {
      id: 1,
      title: "Resume Analyzer & Job Match Predictor",
      description: "AI powered tool that analyzes resumes and provides personalized career enhancement suggestions. Features semantic similarity scoring, ATS optimization, and intelligent job matching using advanced NLP techniques.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["AI", "NLP", "React", "Machine Learning"],
      github: "https://github.com/JayReddyMunagala/Create-ResumeAnalyzer-Dashboard",
      icon: Brain,
      gradient: "from-blue-500 to-cyan-600",
      featured: true
    },
    {
      id: 2,
      title: "ML Pipeline Dashboard", 
      description: "Comprehensive dashboard for data scientists to build, monitor, and manage machine learning workflows. Features real time pipeline tracking, model monitoring, and automated alerting system.",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["MLOps", "React", "Dashboard", "Analytics"],
      github: "https://github.com/JayReddyMunagala/Production-ML-Pipeline-Dashboard",
      icon: BarChart3,
      gradient: "from-purple-500 to-pink-600",
      featured: true
    }
  ];

  const additionalProjects = [
    {
      title: "Healthcare Analytics Platform",
      description: "Patient analytics platform developed at Vitech featuring real time medical data visualization, secure authentication, and role based access control for clinical decision making workflows.",
      tags: ["Healthcare", "Visualization", "Security"],
      github: "#",
      icon: Database
    },
    {
      title: "Data Pipeline Optimization",
      description: "Real time analytics features for medical data built at Vitech using Spark, Hadoop, and AWS infrastructure with low latency pipelines and patient segmentation algorithms.",
      tags: ["Big Data", "Cloud", "Analytics"],
      github: "#",
      icon: Cpu
    },
    {
      title: "E-Commerce Beauty Platform",
      description: "Interactive ecommerce website for beauty and cosmetic products built at Arete IT Services, featuring PayPal payment integration and comprehensive admin panel for product management.",
      tags: ["E-Commerce", "PHP", "PayPal"],
      github: "#",
      icon: Monitor
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gray-800/30 relative">
      {/* Subtle gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/15 via-transparent to-gray-900/15 pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Projects & Development Portfolio
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Software engineering projects showcasing expertise as Software Engineer, Student Assistant, 
            Web Developer, and Data Analyst across healthcare analytics, ecommerce platforms, and ML powered tools
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 sm:mt-6 rounded-full"></div>
        </motion.div>

        {/* Main Featured Projects */}
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 mb-12 sm:mb-16 lg:mb-20">
          {mainProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ 
                opacity: 0, 
                x: index % 2 === 0 ? -100 : 100,
                y: 50
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className={`grid lg:grid-cols-2 gap-6 sm:gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Project Image */}
                <motion.div 
                  className={`relative overflow-hidden rounded-2xl ${
                    index % 2 === 1 ? 'lg:col-start-2' : ''
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 sm:h-80 object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent rounded-2xl"></div>
                    
                    {/* Floating Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.3 + 0.5, duration: 0.5 }}
                      className={`absolute top-4 sm:top-6 left-4 sm:left-6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-sm`}
                    >
                      <project.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </motion.div>

                    {/* Sparkle Effect */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute top-4 sm:top-6 right-4 sm:right-6 text-white/60"
                    >
                      <Sparkles size={20} className="sm:w-6 sm:h-6" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Project Content */}
                <motion.div 
                  className={`space-y-4 sm:space-y-6 ${
                    index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                >
                  {/* Project Header */}
                  <div>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                      className={`h-1 bg-gradient-to-r ${project.gradient} rounded-full mb-4`}
                    ></motion.div>
                    
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + tagIndex * 0.1 + 0.6, duration: 0.3 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`px-3 sm:px-4 py-2 bg-gradient-to-r ${project.gradient} bg-opacity-20 border border-opacity-30 rounded-full text-xs sm:text-sm font-semibold text-blue-300 backdrop-blur-sm hover:bg-opacity-30 transition-all duration-300`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex items-center justify-center px-4 sm:px-6 py-3 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group/btn text-sm sm:text-base min-h-[48px]`}
                    >
                      <Github size={18} className="mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                      View Code
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              {/* Background Decoration */}
              <div className={`absolute -inset-4 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 rounded-3xl blur-xl transition-opacity duration-500 -z-10`}></div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Professional Development Experience</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Healthcare technology and ecommerce solutions developed as Software Engineer and Web Developer
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {additionalProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center min-h-[40px] min-w-[40px]"
                  >
                    <project.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </motion.div>
                  
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-2 min-h-[40px] min-w-[40px] flex items-center justify-center"
                  >
                    <Github size={20} className="sm:w-6 sm:h-6" />
                  </motion.a>
                </div>

                {/* Content */}
                <h4 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h4>
                
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 sm:px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs text-blue-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-gray-700/50"
        >
          <p className="text-gray-400 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Interested in collaborating on innovative projects or discussing these solutions further?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-sm sm:text-base min-h-[48px] flex items-center justify-center"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="https://github.com/JayReddyMunagala"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center px-6 sm:px-8 py-3 bg-gray-800 border-2 border-gray-600 text-gray-300 hover:text-white hover:border-blue-400 font-semibold rounded-xl transition-all duration-300 text-sm sm:text-base min-h-[48px]"
            >
              <Code2 size={18} className="mr-2" />
              View All Projects
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;