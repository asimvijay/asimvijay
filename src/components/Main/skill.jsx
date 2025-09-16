// components/Skills.js
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Frontend');
  const [isVisible, setIsVisible] = useState(false);
  
  const skills = {
    Frontend: [
      { name: 'React', level: 90, color: '#61DAFB', icon: '⚛️' },
      { name: 'Next.js', level: 85, color: '#000000', icon: '▲' },
      { name: 'TypeScript', level: 80, color: '#3178C6', icon: '📘' },
      { name: 'Tailwind CSS', level: 95, color: '#38B2AC', icon: '🎨' },
      { name: 'Vue.js', level: 70, color: '#4FC08D', icon: '🟢' }
    ],
    Backend: [
      { name: 'Node.js', level: 85, color: '#339933', icon: '🟢' },
      { name: 'Express', level: 80, color: '#000000', icon: '🚂' },
      { name: 'Python', level: 75, color: '#3776AB', icon: '🐍' },
      { name: 'PostgreSQL', level: 70, color: '#336791', icon: '🐘' },
      { name: 'MongoDB', level: 65, color: '#47A248', icon: '🍃' }
    ],
    'AI/ML': [
      { name: 'TensorFlow', level: 60, color: '#FF6F00', icon: '🧠' },
      { name: 'PyTorch', level: 55, color: '#EE4C2C', icon: '🔥' },
      { name: 'OpenCV', level: 50, color: '#5C3EE8', icon: '👁️' },
      { name: 'NLP', level: 65, color: '#00A0DC', icon: '💬' }
    ],
    Tools: [
      { name: 'Git', level: 90, color: '#F05032', icon: '📌' },
      { name: 'Docker', level: 75, color: '#2496ED', icon: '🐳' },
      { name: 'AWS', level: 70, color: '#FF9900', icon: '☁️' },
      { name: 'Figma', level: 80, color: '#F24E1E', icon: '🎨' },
      { name: 'Jest', level: 85, color: '#C21325', icon: '✅' }
    ]
  };

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        delay: 0.3,
        ease: "easeOut"
      }
    })
  };

  const tabVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10% left-5% w-20 h-20 bg-indigo-500 rounded-full filter blur-xl animate-pulse"></div>
        <div className="absolute top-60% right-10% w-16 h-16 bg-purple-500 rounded-full filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20% left-20% w-24 h-24 bg-blue-500 rounded-full filter blur-xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 dark:text-white relative"
        >
          Skills & Technologies
          <motion.div 
            className="h-1 w-20 bg-indigo-600 mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
        </motion.h2>
        
        <motion.div 
          className="mb-12 flex justify-center flex-wrap gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {Object.keys(skills).map((category, index) => (
            <motion.button
              key={category}
              variants={tabVariants}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium relative overflow-hidden group ${
                activeCategory === category 
                  ? 'bg-indigo-600 text-white shadow-lg' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{category}</span>
              {activeCategory === category && (
                <motion.div 
                  className="absolute inset-0 bg-indigo-700 rounded-full"
                  layoutId="activeTab"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {skills[activeCategory].map((skill, index) => (
              <motion.div 
                key={skill.name}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
                whileHover={{ y: -5 }}
              >
                {/* Skill icon */}
                <div 
                  className="absolute top-4 right-4 text-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  style={{ color: skill.color }}
                >
                  
                </div>
                
                <div className="flex items-center mb-2">
                  <span 
                    className="text-2xl mr-3"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </span>
                  <span className="font-semibold dark:text-white">{skill.name}</span>
                  <span className="ml-auto text-gray-500 dark:text-gray-400 font-mono">{skill.level}%</span>
                </div>
                
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden relative">
                  <motion.div 
                    className="h-full rounded-full relative"
                    variants={progressBarVariants}
                    custom={skill.level}
                    initial="hidden"
                    animate="visible"
                    style={{ backgroundColor: skill.color }}
                  >
                    {/* Animated shine effect */}
                    <motion.div 
                      className="absolute top-0 left-0 h-full w-10 bg-white opacity-30"
                      animate={{
                        x: ["0%", "300%", "0%"]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                    />
                  </motion.div>
                  
                  {/* Progress indicator dots */}
                  <div className="absolute inset-0 flex justify-between items-center px-1">
                    {[0, 25, 50, 75, 100].map((point) => (
                      <div 
                        key={point}
                        className={`w-1 h-1 rounded-full ${skill.level >= point ? 'bg-white opacity-50' : 'bg-gray-400 opacity-30'}`}
                      ></div>
                    ))}
                  </div>
                </div>
                
                {/* Skill level label */}
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>Beginner</span>
                  <span>Intermediate</span>
                  <span>Advanced</span>
                  <span>Expert</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}