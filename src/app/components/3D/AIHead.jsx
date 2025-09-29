'use client';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { useEffect, useState } from 'react';

export default function AIHead() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1048);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative min-h-screen w-full text-white overflow-hidden flex items-center justify-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-transparent z-0"></div>
      
      {/* Spline 3D Scene - Hidden on mobile for performance */}
      <div className="absolute ml-[20vw] inset-0 z-5 pointer-events-auto opacity-80">
        {!isMobile && (
          <Spline 
            scene="https://prod.spline.design/ziqolM0LYE1pujYG/scene.splinecode" 
            onLoad={() => setIsLoading(false)}
            className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          />
        )}
      </div>

      {/* Loading overlay */}
      {isLoading && !isMobile && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-900/80">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-300">Loading AI experience...</p>
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center h-full py-16 lg:py-0">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 max-w-xl space-y-6 lg:space-y-8 text-center lg:text-left mb-12 lg:mb-0"
        >
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Meet Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">AI Agent</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-lg sm:text-xl text-gray-300 leading-relaxed"
          >
            Not just a bot — it's your autonomous teammate trained on your vision, processes, and goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start"
          >
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-blue-500/30">
              Get Started
            </button>
            <button className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg font-medium border border-white/20 hover:bg-white/20 transition-all duration-300">
              View Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="pt-4 flex flex-wrap justify-center lg:justify-start gap-3"
          >
            {['Real-Time Reasoning', 'Custom LLMs', 'API Integration'].map((feature, index) => (
              <div key={index} className="px-4 py-2 rounded-full backdrop-blur-sm bg-white/10 border border-white/20 text-sm font-medium">
                {feature}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Features */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full lg:w-1/2 max-w-md space-y-6 lg:space-y-8 lg:pl-12"
        >
          <motion.h3
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-2xl sm:text-3xl font-semibold text-white text-center lg:text-right"
          >
            Built for Modern Teams
          </motion.h3>

          <motion.ul className="space-y-4 lg:space-y-6">
            {[
              { text: "Founders and Startups", icon: "🚀" },
              { text: "Autonomous Tools", icon: "🤖" },
              { text: "Agentic Workflows", icon: "⚡" },
              { text: "Real-time User Interfaces", icon: "💫" },
              { text: "Enterprise Integration", icon: "🏢" },
              { text: "Scale Operations", icon: "📈" }
            ].map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + (index * 0.1), duration: 0.8 }}
                className="flex items-center justify-center lg:justify-end gap-3 text-lg text-gray-300 hover:text-white transition-colors duration-300"
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.text}</span>
                <div className="w-2 h-0.5 bg-gradient-to-l from-cyan-400 to-blue-500 rounded-full ml-2 flex-shrink-0"></div>
              </motion.li>
            ))}
          </motion.ul>

          {/* Stats bar for mobile */}
          {isMobile && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20"
            >
              {[
                { value: "99.9%", label: "Uptime" },
                { value: "24/7", label: "Support" },
                { value: "1s", label: "Response" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden lg:block"
      >
        <div className="animate-bounce flex flex-col items-center">
          <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}