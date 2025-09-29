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
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

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

  const handleFeatureClick = (index) => {
    setActiveFeature(index);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
  };

  return (
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
          <motion.a
            href="#contact"
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 font-medium rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Me
          </motion.a>
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
          const radius = 160; // reduced radius for better mobile fit
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
  );
};

export default Hero;
