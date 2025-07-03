import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Code, Database, Shield, Cpu, Cloud, Monitor, BookOpen, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Student Assistant",
      company: "University of North Texas (Residential Life)",
      location: "Denton, TX",
      period: "Jan 2025 - Present",
      type: "Academic",
      gradient: "from-green-500 to-emerald-600",
      borderColor: "hover:border-green-500",
      shadowColor: "hover:shadow-green-500/20",
      responsibilities: [
        {
          icon: Users,
          text: "Serve as front desk assistant in UNT residence halls, supporting daily operations for 300+ students",
          color: "text-green-400"
        },
        {
          icon: Shield,
          text: "Provide responsive, student centered support by addressing housing concerns and resolving issues efficiently",
          color: "text-green-400"
        },
        {
          icon: BookOpen,
          text: "Collaborate with Residential Life staff to ensure smooth communication, safety compliance, and service coordination",
          color: "text-green-400"
        },
        {
          icon: Database,
          text: "Maintain accurate records, manage visitor logs, and uphold confidentiality in all student interactions",
          color: "text-green-400"
        }
      ]
    },
    {
      title: "Software Engineer",
      company: "Vitech | Patient Analytics Platform for Healthcare Technology Company",
      location: "Hyderabad, India",
      period: "Sep 2022 - Nov 2023",
      type: "Full-time",
      gradient: "from-blue-500 to-cyan-600",
      borderColor: "hover:border-blue-500",
      shadowColor: "hover:shadow-blue-500/20",
      responsibilities: [
        {
          icon: Users,
          text: "Led Agile sprint planning and collaborated with product owners to design scalable patient analytics platform",
          color: "text-blue-400"
        },
        {
          icon: Cpu,
          text: "Developed real time analytics features for medical data using Spark, Hadoop, and AWS infrastructure",
          color: "text-blue-400"
        },
        {
          icon: Database,
          text: "Implemented low latency pipelines and stratification algorithms for large scale patient segmentation",
          color: "text-blue-400"
        },
        {
          icon: Monitor,
          text: "Designed secure ReactJS based UI for clinical decision making workflows",
          color: "text-blue-400"
        },
        {
          icon: BookOpen,
          text: "Mentored junior interns and improved documentation for onboarding and deployment",
          color: "text-blue-400"
        }
      ]
    },
    {
      title: "Intern",
      company: "Vitech | Healthcare Data Visualization Dashboard",
      location: "Hyderabad, India",
      period: "Mar 2022 - Sep 2022",
      type: "Internship",
      gradient: "from-purple-500 to-violet-600",
      borderColor: "hover:border-purple-500",
      shadowColor: "hover:shadow-purple-500/20",
      responsibilities: [
        {
          icon: Monitor,
          text: "Built interactive dashboards using D3.js and Chart.js to visualize complex medical data",
          color: "text-purple-400"
        },
        {
          icon: Database,
          text: "Integrated backend SQL data via secure APIs; implemented user authentication and role based access",
          color: "text-purple-400"
        },
        {
          icon: Users,
          text: "Contributed to cross-functional discussions with design and operations teams to refine usability",
          color: "text-purple-400"
        }
      ]
    },
    {
      title: "Web Development Intern",
      company: "Arete IT Services Pvt Ltd.",
      location: "Vijayawada, India",
      period: "Oct 2021 - Jan 2022",
      type: "Internship",
      gradient: "from-emerald-500 to-teal-600",
      borderColor: "hover:border-emerald-500",
      shadowColor: "hover:shadow-emerald-500/20",
      responsibilities: [
        {
          icon: Monitor,
          text: "Assisted in developing an interactive ecommerce website for beauty and cosmetic products",
          color: "text-emerald-400"
        },
        {
          icon: Database,
          text: "Integrated PayPal payment gateway system to achieve effortless checkout process and order placement",
          color: "text-emerald-400"
        },
        {
          icon: Shield,
          text: "Designed admin panel to manage (Add/Remove/Edit) existing modules such as product, brand, category",
          color: "text-emerald-400"
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-gray-800/30 relative">
      {/* Subtle gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/15 via-transparent to-gray-900/15 pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Experience as Software Engineer & Data Analyst
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Professional experience as Software Engineer, Student Assistant, and Web Developer developing patient analytics platforms, medical data visualization, and healthcare technology solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 sm:mt-6 rounded-full"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.7,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3, type: "spring", stiffness: 300 }
              }}
              className={`group relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700 ${exp.borderColor} ${exp.shadowColor} transition-all duration-500 hover:bg-gray-900/90 overflow-hidden`}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Animated border gradient */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${exp.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 sm:mb-8">
                  <div className="flex items-start lg:items-center gap-4 sm:gap-6 mb-4 lg:mb-0">
                    {/* Company Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${exp.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      <span className="text-white font-bold text-sm sm:text-xl">
                        {exp.company.split(' ')[0].substring(0, 2).toUpperCase()}
                      </span>
                    </motion.div>
                    
                    <div className="flex-1">
                      <motion.h3 
                        initial={{ x: -20 }}
                        whileInView={{ x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300"
                      >
                        {exp.title}
                      </motion.h3>
                      <motion.h4 
                        initial={{ x: -20 }}
                        whileInView={{ x: 0 }}
                        transition={{ delay: index * 0.1 + 0.1, duration: 0.5 }}
                        className={`text-base sm:text-lg lg:text-xl font-semibold mb-2 ${exp.responsibilities[0].color}`}
                      >
                        {exp.company}
                      </motion.h4>
                      <div className="flex flex-col sm:flex-row sm:gap-6 text-gray-400 text-sm sm:text-base">
                        <div className="flex items-center mb-1 sm:mb-0">
                          <Calendar size={16} className="mr-2" />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Type Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
                    className={`self-start lg:self-center px-3 sm:px-4 py-2 bg-gradient-to-r ${exp.gradient} bg-opacity-20 border border-opacity-30 rounded-full text-xs sm:text-sm font-semibold ${exp.responsibilities[0].color} backdrop-blur-sm`}
                  >
                    {exp.type}
                  </motion.div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-4">
                  <h5 className="text-base sm:text-lg font-semibold text-white mb-4">Key Responsibilities & Achievements:</h5>
                  <div className="flex flex-col gap-3 sm:gap-4">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <motion.div
                        key={respIndex}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          delay: index * 0.1 + respIndex * 0.1 + 0.4, 
                          duration: 0.5 
                        }}
                        whileHover={{ x: 10, scale: 1.02 }}
                        className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 group-hover:border-gray-600/70 transition-all duration-300 hover:bg-gray-800/70"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${exp.gradient} bg-opacity-20 rounded-lg flex items-center justify-center border border-opacity-30 min-h-[40px] min-w-[40px]`}
                          style={{ borderColor: resp.color.replace('text-', '') }}
                        >
                          <resp.icon size={20} className={`sm:w-6 sm:h-6 ${resp.color}`} />
                        </motion.div>
                        <p className="text-gray-300 leading-relaxed flex-1 text-sm sm:text-base self-center">
                          {resp.text}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
            Interested in collaborating on healthcare analytics projects or discussing my experience?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-sm sm:text-base min-h-[48px]"
          >
            Let's Connect
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;