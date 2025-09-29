'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ExternalLink, Github, Calendar, Code } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative">
            <div className="relative h-64 md:h-80 w-full">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-slate-900/50 rounded-full hover:bg-slate-800 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="absolute bottom-4 left-6">
                <span className="bg-purple-600 text-sm px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">{project.title}</h2>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold mb-4 text-neon">Project Overview</h3>
                <p className="text-slate-300 leading-relaxed">{project.fullDesc}</p>

                {/* Features */}
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-3 text-neon">Key Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                        <span className="text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-neon flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-slate-800 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-neon">Project Links</h4>
                  <div className="space-y-3">
                    <a
                      href={project.liveLink}
                      className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-purple-600 px-4 py-2 rounded-lg hover:from-cyan-700 hover:to-purple-700 transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-neon">Project Details</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Category:</span>
                      <span>{project.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Status:</span>
                      <span className="text-green-400">Completed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Sections */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {/* Challenges & Solutions */}
              <div className="bg-slate-800/30 rounded-lg p-4">
                <h4 className="font-semibold mb-3 text-neon">Challenges & Solutions</h4>
                <p className="text-slate-300 text-sm">
                  This project involved complex data processing and real-time updates. 
                  Implemented efficient algorithms to handle large datasets and ensure 
                  smooth user experience across all devices.
                </p>
              </div>

              {/* What I Learned */}
              <div className="bg-slate-800/30 rounded-lg p-4">
                <h4 className="font-semibold mb-3 text-neon">Key Learnings</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Advanced state management patterns</li>
                  <li>• Performance optimization techniques</li>
                  <li>• API design and integration best practices</li>
                  <li>• Cross-platform development strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;