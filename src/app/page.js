'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AIHead from './components/3D/AIHead';
import ServicesSection from './components/Services';
import ProjectsShowcase from './components/Projects';
import AboutSection from './components/About';
import { FeaturesSectionDemo } from './components/Gride';
import ComitCart from './components/ui/cometCart';
import { ExpandableCardDemo } from './components/Testimonials';

export default function Home() {
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: parallaxRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Initialize Lenis for smooth scroll
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // Particle.js config
  const particlesConfig = {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: ['#4F46E5', '#10B981', '#EF4444'] },
      shape: { type: 'circle' },
      opacity: { value: 0.7 },
      size: { value: 3 },
      links: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'repulse' },
        onclick: { enable: true, mode: 'push' },
        resize: true,
      },
      modes: {
        grab: { distance: 200, links: { opacity: 1 } },
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 },
      },
    },
    retina_detect: true,
  };

  // Dynamically load particles.js
  useEffect(() => {
    const loadParticles = async () => {
      if (typeof window !== 'undefined' && window.particlesJS) {
        window.particlesJS('particles-js', particlesConfig);
      } else {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
        script.async = true;
        script.onload = () => {
          if (window.particlesJS) {
            window.particlesJS('particles-js', particlesConfig);
          } else {
            console.error('Failed to load particles.js');
          }
        };
        script.onerror = () => console.error('Error loading particles.js');
        document.body.appendChild(script);
      }
    };

    loadParticles();

    return () => {
      const scripts = document.querySelectorAll('script[src*="particles.min.js"]');
      scripts.forEach((script) => script.remove());
    };
  }, []);

  return (
    <motion.div
      className="relative min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Particle Background */}
      <div
        id="particles-js"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -3,
          backgroundColor: '#000000',
        }}
      />

      {/* Scroll-Responsive Gradient */}
      <motion.div
        className="fixed inset-0 z-[-2] pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(62, 27, 85, 0.9), rgba(17,24,39,0.8))',
          backdropFilter: 'blur(5px)',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 10,
        }}
      />

      {/* Cloud Light Hover Layer */}
      <motion.div
        className="fixed inset-0 z-[-1] pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.03) 0%, transparent 60%),
            radial-gradient(circle at 70% 60%, rgba(255,255,255,0.02) 0%, transparent 70%),
            radial-gradient(circle at 40% 80%, rgba(255,255,255,0.04) 0%, transparent 50%)
          `,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          mixBlendMode: 'soft-light',
          opacity: 0.6,
        }}
        animate={{
          opacity: [0.4, 0.6, 0.5],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        whileHover={{ opacity: 0.7, scale: 1.05 }}
      />

      {/* Parallax Animated Wrapper */}
      <motion.div ref={parallaxRef} style={{ y }}>
        <Navbar />
        <Hero />
        <FeaturesSectionDemo />
        <ComitCart />
        <AIHead />
        <ExpandableCardDemo />
        
        {/* Services and Projects Sections */}
        <ServicesSection />
        <ProjectsShowcase />
        <AboutSection />
      </motion.div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
    </motion.div>
  );
}