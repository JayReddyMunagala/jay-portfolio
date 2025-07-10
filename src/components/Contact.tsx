import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, Download, User, MessageSquare, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear submit status when user starts typing again
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setSubmitMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      setSubmitMessage('Please fill in all fields.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      setSubmitMessage('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      // EmailJS configuration
      const serviceId = 'service_8zflr0k';
      const templateId = 'template_7i1oh9e';
      const publicKey = 'CHzbhgXvke8a9VIEO';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: `Message from ${formData.name}`,
        to_name: 'Jay Munagala',
        message: formData.message,
        reply_to: formData.email,
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus('success');
      setSubmitMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon.');
      
      // Clear form
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      setSubmitMessage('Oops! Something went wrong. Please try again or contact me directly via email.');
    } finally {
      setIsLoading(false);
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/jaya-prakash-reddy-munagala-90a39626b/',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:shadow-blue-500/25'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/JayReddyMunagala',
      color: 'from-gray-600 to-gray-700',
      hoverColor: 'hover:shadow-gray-500/25'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/jay_munagala?igsh=NmJma3ZtZ3lvamhw&utm_source=qr',
      color: 'from-pink-500 to-rose-600',
      hoverColor: 'hover:shadow-pink-500/25'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'munagala.jayaprakash@gmail.com',
      href: 'mailto:munagala.jayaprakash@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (731) 333-1003',
      href: 'tel:+17313331003'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Denton, Texas',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800/30 relative overflow-hidden">
      {/* Reduced intensity background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"></div>
      {/* Additional readability overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/10 via-transparent to-gray-900/10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
           "Building smarter tech together. let’s connect if you're working where software, data, and creativity meet."
          </p>
          <p className="text-lg text-blue-400 font-semibold mt-4">
            Software Engineer • Data Analyst • Student Assistant • Web Developer
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">Send me a message</h3>
                <p className="text-gray-400 leading-relaxed">
           "Whether you're exploring software engineering roles, healthcare analytics initiatives, eCommerce platforms, or data-driven collaborations. I’m always open to meaningful conversations and innovative partnerships."
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900/80 backdrop-blur-sm border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                    placeholder="Enter your full name"
                    required
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900/80 backdrop-blur-sm border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                    placeholder="Enter your email"
                    required
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900/80 backdrop-blur-sm border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                    required
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  whileHover={!isLoading ? { scale: 1.02, y: -2 } : {}}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative w-full py-4 rounded-xl text-white font-semibold text-lg transition-all duration-300 overflow-hidden ${
                    isLoading 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-2xl hover:shadow-blue-500/25'
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isLoading ? (
                      <>
                        <Loader size={20} className="mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={20} className="ml-2" />
                      </>
                    )}
                  </span>
                  
                  {/* Animated background */}
                  {!isLoading && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ type: "spring", stiffness: 100 }}
                    />
                  )}
                </motion.button>

                {/* Submit Status Message */}
                {submitStatus !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center p-4 rounded-xl border ${
                      submitStatus === 'success' 
                        ? 'bg-green-900/20 border-green-500/30 text-green-400' 
                        : 'bg-red-900/20 border-red-500/30 text-red-400'
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <CheckCircle size={20} className="mr-3 flex-shrink-0" />
                    ) : (
                      <AlertCircle size={20} className="mr-3 flex-shrink-0" />
                    )}
                    <p className="text-sm leading-relaxed">{submitMessage}</p>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Info & Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      className="group flex items-center p-4 bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-900/80 transition-all duration-300"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300"
                      >
                        <info.icon className="w-5 h-5 text-white" />
                      </motion.div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        <p className="text-white font-medium group-hover:text-blue-400 transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Media Links */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group relative p-4 bg-gradient-to-br ${social.color} rounded-2xl text-white hover:shadow-2xl ${social.hoverColor} transition-all duration-300`}
                    >
                      <social.icon size={24} />
                      
                      {/* Tooltip */}
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                        {social.name}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        </div>

        {/* Centered Inspirational Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16 mb-12"
        >
          <div className="max-w-4xl mx-auto relative p-8 bg-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <blockquote className="relative text-center">
                <div className="absolute -top-2 -left-2 text-4xl text-blue-400/30 font-serif">"</div>
                <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-gray-100 leading-relaxed px-6">
                  Aspiring Software Engineer and Data Analyst ready to bring data insights and scalable solutions to forward-thinking teams.
                </p>
                <div className="absolute -bottom-2 -right-2 text-4xl text-purple-400/30 font-serif">"</div>
              </blockquote>
              <div className="mt-6 w-24 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-center mt-12 pt-12 border-t border-gray-700/50"
        >
          <p className="text-gray-400 mb-4">
          © 2025 Jaya Prakash Reddy Munagala. React + TypeScript + ☕ x 🍻 = Portfolio Magic.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
