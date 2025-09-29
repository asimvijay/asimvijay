'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const skills = [
  { category: 'AI & Machine Learning', items: ['Autonomous Agents', 'GPT Integration', 'Computer Vision', 'Neural Networks'] },
  { category: 'Frontend Development', items: ['React/Next.js', 'TypeScript', 'Three.js', 'Tailwind CSS'] },
  { category: 'Backend & Infrastructure', items: ['Node.js', 'Python', 'AWS', 'Database Design'] },
];

const timeline = [
  { 
    year: '2023', 
    event: 'Started specializing in AI agent development',
    icon: '🤖'
  },
  { 
    year: '2024', 
    event: 'Launched first production-ready autonomous agent',
    icon: '🚀'
  },
  { 
    year: '2025', 
    event: 'Expanded into immersive 3D web experiences',
    icon: '✨'
  },
];

export default function AboutSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVoicePlay = () => {
    setIsPlaying(true);
    // Add your voice playback logic here
    setTimeout(() => setIsPlaying(false), 3000);
  };

  return (
    <section className="py-10 lg:py-32 text-white " id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
            I'm a <span className="text-white font-semibold">Software Engineer</span> specializing in building 
            fully autonomous AI agents and immersive web experiences. I combine cutting-edge AI with 
            elegant design to create solutions that think, adapt, and evolve.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <span className="w-2 h-6 bg-purple-500 rounded-full mr-3"></span>
              My Journey
            </h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex gap-4 group cursor-pointer"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center group-hover:bg-purple-500 transition-colors">
                      <span className="text-lg">{item.icon}</span>
                    </div>
                    <div className="w-0.5 h-full bg-purple-500 mt-2"></div>
                  </div>
                  <div className="flex-1 pb-6">
                    <p className="text-purple-400 font-semibold text-lg">{item.year}</p>
                    <p className="text-gray-300 mt-1">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <span className="w-2 h-6 bg-purple-500 rounded-full mr-3"></span>
              Technical Expertise
            </h3>
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-800/50 rounded-xl p-6 backdrop-blur-sm border border-neutral-700 hover:border-purple-500/30 transition-all"
                >
                  <h4 className="text-white font-semibold mb-3 text-lg">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-neutral-800/30 rounded-2xl p-6 text-center backdrop-blur-sm border border-neutral-700 hover:border-purple-500/30 transition-all">
            <p className="text-4xl font-bold text-white mb-2">30+</p>
            <p className="text-gray-400 text-sm">AI Agents Developed</p>
          </div>
          <div className="bg-neutral-800/30 rounded-2xl p-6 text-center backdrop-blur-sm border border-neutral-700 hover:border-purple-500/30 transition-all">
            <p className="text-4xl font-bold text-white mb-2">100K+</p>
            <p className="text-gray-400 text-sm">Lines of Code Written</p>
          </div>
          <div className="bg-neutral-800/30 rounded-2xl p-6 text-center backdrop-blur-sm border border-neutral-700 hover:border-purple-500/30 transition-all">
            <p className="text-4xl font-bold text-white mb-2">12+</p>
            <p className="text-gray-400 text-sm">Projects Delivered</p>
          </div>
        </motion.div>

        {/* Voice Introduction */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <button
            onClick={handleVoicePlay}
            disabled={isPlaying}
            className={`px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-3 mx-auto ${
              isPlaying
                ? 'bg-purple-700 cursor-not-allowed'
                : 'bg-purple-600 hover:bg-purple-500 hover:scale-105'
            }`}
          >
            <span className={`w-6 h-6 ${isPlaying ? 'animate-pulse' : ''}`}>
              {isPlaying ? '🔊' : '▶️'}
            </span>
            {isPlaying ? 'Playing Introduction...' : 'Play AI Introduction'}
          </button>
        </motion.div>
      </div>
    </section>
  );
}