import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap, Heart, Code, Globe, Brain, Target } from 'lucide-react';

const About = () => {
  const journeySteps = [
    {
      icon: GraduationCap,
      title: "Computer Science Foundation",
      location: "Vijayawada, India",
      description: "Started my journey with a Bachelor's in Computer Science, building a strong foundation in programming, algorithms, and software engineering principles.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Code,
      title: "Web Development at Arete IT",
      location: "Vijayawada, India",
      description: "Began my professional journey developing e-commerce platforms, working with PHP, MySQL, and payment gateway integrations while learning industry best practices.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: Briefcase,
      title: "Healthcare Technology at Vitech",
      location: "Hyderabad, India",
      description: "Progressed from intern to full-time Software Engineer at Vitech, developing patient analytics platforms, real-time medical data processing, and interactive healthcare dashboards.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Globe,
      title: "Graduate Studies at UNT",
      location: "Texas, USA",
      description: "Currently pursuing Master's in Advanced Data Analytics at University of North Texas, focusing on machine learning, AI, and advanced data analytics methodologies while working as Student Assistant in Residential Life.",
      gradient: "from-purple-500 to-violet-600"
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 lg:py-40 bg-gray-800/30 relative">
      {/* Subtle gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-transparent to-gray-900/20 pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Personal Mission Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <blockquote className="relative px-4">
              <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 text-4xl sm:text-6xl text-blue-400/20 font-serif">"</div>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif italic text-gray-100 leading-relaxed max-w-4xl mx-auto">
                From writing code to drawing insights, my goal is simple: build with purpose, learn relentlessly, and leave things better than I found them.
              </p>
              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 text-4xl sm:text-6xl text-purple-400/20 font-serif">"</div>
            </blockquote>
            <div className="mt-6 sm:mt-8 w-32 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
            <p className="text-lg sm:text-xl text-blue-400 font-semibold mt-4">
              Software Engineer • Data Analyst • Student Assistant • Web Developer
            </p>
          </motion.div>

          {/* Career Journey */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12 sm:mb-16 lg:mb-20"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-left mb-8 sm:mb-12 text-white px-4 sm:px-0">
              My Career Journey
            </h3>
            
            <div className="grid gap-6 sm:gap-8">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Timeline line */}
                  {index < journeySteps.length - 1 && (
                    <div className="absolute left-6 sm:left-8 top-16 sm:top-20 w-0.5 h-16 sm:h-20 bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block"></div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-0">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </motion.div>
                    
                    {/* Content */}
                    <div className="flex-1 text-left">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">{step.title}</h4>
                        <span className="text-blue-400 font-medium flex items-center text-sm sm:text-base">
                          <MapPin size={16} className="mr-1" />
                          {step.location}
                        </span>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-base sm:text-lg">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Current Focus */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center"
          >
            <div className="text-left px-4 sm:px-0">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                Where I Am Today
              </h3>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-4 sm:mb-6">
                Today, I'm a Master's student in Advanced Data Analytics at the University of North Texas, 
                combining my background in software engineering with advanced training in data science, 
                machine learning, and AI.
              </p>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-4 sm:mb-6">
                I'm actively working on impactful projects like an AI powered Resume Analyzer and an ML Pipeline 
                Management Dashboard, applying real world skills in NLP, full stack development, and cloud technologies.
              </p>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-4 sm:mb-6">
                Alongside my studies, I serve as a Student Assistant in Residential Life, where I manage front desk 
                operations, support student needs, and ensure smooth communication within the housing team — 
                sharpening my leadership, problem solving, and interpersonal skills daily.
              </p>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-4 sm:mb-6">
                I'm now seeking internship or full time opportunities where I can contribute to data driven 
                innovation and build systems that truly make a difference.
              </p>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center text-blue-400 font-semibold text-base sm:text-lg"
              >
                <Target className="w-5 h-5 mr-2" />
                "Software Engineer & Data Analyst building the future of tech through data and code"
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-3 sm:gap-4 px-4 sm:px-0"
            >
              {[
                { icon: Code, label: "Full-Stack Engineer", color: "from-blue-500 to-blue-600" },
                { icon: Heart, label: "Healthcare Technology", color: "from-red-500 to-pink-600" },
                { icon: Brain, label: "Data Analytics", color: "from-purple-500 to-purple-600" },
                { icon: Target, label: "Student Leadership", color: "from-green-500 to-emerald-600" }
              ].map((trait, index) => (
                <motion.div
                  key={trait.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`p-4 sm:p-6 bg-gradient-to-br ${trait.color} rounded-xl text-white text-center shadow-lg hover:shadow-xl transition-all duration-300 min-h-[100px] sm:min-h-[120px] flex flex-col items-center justify-center`}
                >
                  <trait.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3" />
                  <span className="font-semibold text-sm sm:text-base">{trait.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
