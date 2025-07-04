import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master's in Advanced Data Analytics",
      school: "University of North Texas",
      location: "Denton, TX",
      period: "2024 - 2025",
      logo: "/download.png",
      logoColor: "from-green-500 to-green-600",
      borderColor: "hover:border-green-500",
      textColor: "text-green-400",
      description: "Pursuing advanced studies in machine learning, healthcare data analytics, and statistical modeling. Specializing in applying AI and data analytics techniques to healthcare systems and business intelligence solutions.",
      description: "Pursuing advanced studies in machine learning, healthcare data analytics, and statistical modeling. Specializing in applying AI and data analytics techniques to healthcare systems and business intelligence solutions.",
      highlights: ["Healthcare Data Analytics", "Machine Learning", "Statistical Modeling", "Business Intelligence"]
    },
    {
      degree: "Bachelor's in Computer Science",
      school: "Koneru Lakshmaiah College of Engineering",
      location: "Vijayawada, India",
      period: "2019 - 2023",
      logo: "/KL logo.png",
      logoColor: "from-blue-500 to-purple-600",
      borderColor: "hover:border-blue-500",
      textColor: "text-blue-400",
      description: "Comprehensive foundation in computer science fundamentals, programming languages, algorithms, and software engineering. Built strong analytical thinking and technical expertise that enabled transition into healthcare technology and data analytics.",
      highlights: ["Data Structures & Algorithms", "Database Systems", "Web Development", "Software Engineering"]
    }
  ];

  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Education
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Academic foundation in computer science and advanced data analytics
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative mb-8 sm:mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index < education.length - 1 && (
                <div className="absolute left-1/2 top-28 sm:top-32 w-0.5 h-16 sm:h-24 bg-gradient-to-b from-blue-500 to-purple-600 transform -translate-x-1/2 hidden lg:block"></div>
              )}
              
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className={`bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-700 ${edu.borderColor} transition-all duration-300 group relative overflow-hidden`}
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.logoColor} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 sm:gap-8">
                    {/* Logo */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br ${edu.logoColor} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      <span className="text-white font-bold text-lg sm:text-xl">{edu.logo}</span>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                            {edu.degree}
                          </h3>
                          <h4 className={`text-lg sm:text-xl ${edu.textColor} font-semibold mb-3`}>
                            {edu.school}
                          </h4>
                        </div>
                        
                        <div className="flex flex-col lg:items-end text-gray-400 space-y-2">
                          <div className="flex items-center">
                            <Calendar size={18} className="mr-2" />
                            <span className="font-medium text-sm sm:text-base">{edu.period}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin size={18} className="mr-2" />
                            <span className="text-sm sm:text-base">{edu.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 leading-relaxed mb-6 text-base sm:text-lg">
                        {edu.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <motion.span
                            key={highlight}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: highlightIndex * 0.1, duration: 0.3 }}
                            className={`px-3 sm:px-4 py-2 bg-gradient-to-r ${edu.logoColor} bg-opacity-20 border border-opacity-30 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105`}
                            style={{ 
                              borderColor: edu.textColor.replace('text-', ''),
                              color: edu.textColor.replace('text-', '')
                            }}
                          >
                            {highlight}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <GraduationCap size={32} sm:size={40} className="text-blue-400" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
