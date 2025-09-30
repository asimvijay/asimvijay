'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import SplineCanvas from './SplineCanvas';

const features = [
  { title: 'Software Solutions', description: 'Robust and scalable applications tailored to business needs' },
  { title: 'Hyper Automation', description: 'End-to-end process automation with AI decision points' },
  { title: 'Natural Reasoning', description: 'Human-like logical processing at machine speed' },
  { title: 'Task Planning', description: 'Dynamic workflow generation based on objectives' },
  { title: 'Real-Time Feedback', description: 'Continuous learning from interactions and outcomes' },
  { title: 'Memory & Context', description: 'Persistent memory for personalized experiences' },
  { title: 'Multi-Modal I/O', description: 'Seamless text, voice, and visual integration' },
];

const floatingMessages = [
  "Why choose us?",
  "24/7 AI Agents",
  "Built with AI",
  "Multi-modal I/O",
  "Reason like humans",
  "Real-time feedback",
  "Custom AI agents",
  "Hyper Automation",
  "Software Solutions",
];

const Hero = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);
  const modalRef = useRef(null);

  // Track viewport size
  useEffect(() => {
    const updateViewport = () => {
      if (sectionRef.current) {
        setViewportSize({
          width: sectionRef.current.clientWidth,
          height: sectionRef.current.clientHeight,
        });
      }
    };
    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  // Auto-rotate features
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsContactModalOpen(false);
      }
    };

    if (isContactModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isContactModalOpen]);

  const handleFeatureClick = (index) => {
    setActiveFeature(index);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
  };

  const contactInfo = [
    {
      platform: 'Email',
      value: 'hashimhasan444@gmail.com',
      icon: '✉️',
      link: 'mailto:hashimhasan444@gmail.com',
    },
    {
      platform: 'Phone',
      value: '+92 324 0251086',
      icon: '📱',
      link: 'tel:+923240251086',
    },
    {
      platform: 'LinkedIn',
      value: 'linkedin.com/in/hashim',
      icon: '💼',
      link: 'www.linkedin.com/in/syed-hashim-3324a3325',
    },
    {
      platform: 'Facebook',
      value: 'facebook.com/hashim',
      icon: '👥',
      link: 'https://facebook.com/hashim',
    },
    {
      platform: 'Instagram',
      value: '@hashim.dev',
      icon: '📷',
      link: 'https://instagram.com/hashim.dev',
    },
  ];

  return (
    <>
      <section
        ref={sectionRef}
        className="relative w-full min-h-screen px-4 sm:px-8 md:px-12 lg:px-32 py-16 lg:py-0 flex flex-col-reverse lg:flex-row items-center justify-between overflow-hidden"
      >
        {/* Left Content */}
        <div className="w-full lg:w-1/2 z-10 flex flex-col gap-8 lg:gap-10 text-center lg:text-left">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center lg:justify-start space-x-2"
          >
            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm md:text-base font-mono text-cyan-400">
              Hashim — Software & Agentic AI Engineer
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Autonomous
            </span>{' '}
            <br />
            AI Systems
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl max-w-lg mx-auto lg:mx-0"
          >
            Engineering future-ready software alongside AI agents that can learn, adapt, and act autonomously.
          </motion.p>

          {/* Feature Grid */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {features.map((feature, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleFeatureClick(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative p-3 rounded-lg text-left transition-all duration-300 ${
                    activeFeature === index
                      ? 'bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-400/30'
                      : 'bg-gray-100 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-700/50'
                  }`}
                >
                  <motion.div
                    layoutId={`feature-bg-${index}`}
                    className="absolute inset-0 rounded-lg"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                  <h3
                    className={`text-sm font-medium ${
                      activeFeature === index ? 'text-cyan-400' : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {feature.title}
                  </h3>
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="p-4 bg-gray-100 dark:bg-gray-800/50 rounded-lg"
              >
                <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
                  {features[activeFeature].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-medium rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </motion.a>
            
            {/* Resume Download Button */}
            <motion.a
              href="/cv/resume.pdf"
              download="Hashim_Resume.pdf"
              className="px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white font-medium rounded-lg shadow-lg flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </motion.a>

            {/* Contact Me Button */}
            <motion.button
              onClick={() => setIsContactModalOpen(true)}
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 font-medium rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </div>

        {/* Right Side - Spline + Messages */}
        <motion.div
          className="w-full lg:w-1/2 h-[350px] sm:h-[400px] lg:h-full hidden relative md:flex justify-center items-center mt-12 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <SplineCanvas activeFeature={activeFeature} viewportSize={viewportSize} />

          {/* Floating Messages */}
          {floatingMessages.map((msg, index) => {
            const angle = (index / floatingMessages.length) * 2 * Math.PI;
            const radius = 160;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  y: [y - 8, y + 8, y - 8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: index * 0.2,
                }}
                className="absolute text-xs sm:text-sm font-semibold text-white pointer-events-auto"
                style={{
                  top: `calc(50% + ${y}px)`,
                  left: `calc(50% + ${x}px)`,
                  transform: "translate(-50%, -50%)",
                  zIndex: 10,
                }}
              >
                <div className="p-2 rounded-md bg-black/60 backdrop-blur-md border border-cyan-400/30 hover:shadow-[0_0_12px_rgba(0,255,255,0.8)] transition duration-300">
                  {msg}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="sticky inset-0 bg-black/50 backdrop-blur-sm z-50 flex bottom-48 items-center justify-center p-4"
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full p-6"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Get In Touch
                </h3>
                <button
                  onClick={() => setIsContactModalOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                  >
                    <span className="text-2xl">{contact.icon}</span>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 dark:text-white group-hover:text-cyan-500 transition-colors">
                        {contact.platform}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {contact.value}
                      </p>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.a>
                ))}
              </div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
              >
                <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
                  Let's build something amazing together! 🚀
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;