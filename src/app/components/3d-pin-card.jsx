'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { PinContainer } from './ui/3d-pin';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'Satellite Farming System',
    desc: 'Real-time NDVI & crop monitoring system powered by satellite data, Google Earth Engine, and AI visual reports.',
    img: '/images/Cropsmart.png',
    link: '#',
  },
  {
    title: 'Health Insurance System',
    desc: 'ASP.NET Core MVC project for managing employees, patients, and admins with role-based dashboards and policy assignments.',
    img: '/images/pharma.png',
    link: '#',
  },
  {
    title: 'Hotel Management System',
    desc: 'Next Js ,Node + ExpressJs web application for managing employees, salaries,room booking and roles management with a responsive landing page.',
    img: '/images/management.png',
    link: '#',
  },
  {
    title: 'E-Commerce Platform',
    desc: 'React & Tailwind project with authentication, new arrivals carousel, product search, and Stripe integration.',
    img: '/images/ecommerce.png',
    link: '#',
  },
  {
    title: 'Driverless Car Research Portal',
    desc: 'Next.js + Express platform for showcasing radar, GPS, and LiDAR-based autonomous car research with free and premium downloads.',
    img: '/images/driverless.png',
    link: '#',
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 40 },
  show: { opacity: 1, scale: 1, y: 0 },
};

const getVisibleProjects = (arr, startIndex, count) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(arr[(startIndex + i) % arr.length]);
  }
  return result;
};

export default function ProjectsShowcase() {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      console.log('Window width:', window.innerWidth, 'Visible count:', visibleCount);
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, [visibleCount]); // Add visibleCount to dependency array for debugging

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const visibleProjects = getVisibleProjects(projects, index, visibleCount);

  return (
    <section id="projects" className="py-10 px-6 md:px-20 relative">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto text-white text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-neon drop-shadow-[0_0_0.3rem_#00ffe0]">
          Featured Projects
        </h2>

        <button
          onClick={prevSlide}
          className="absolute ml-[-5vw] top-[35vh] -translate-y-1/2 hidden lg:block bg-black/40 p-3 rounded-full hover:bg-black/70 z-10"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute ml-[61vw] top-[35vh] -translate-y-1/2 hidden lg:block bg-black/40 p-3 rounded-full hover:bg-black/70 z-10"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        <div
          className="mt-20 grid gap-6 ml-[-2vw] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gridTemplateColumns: `repeat(${visibleCount}, 1fr)` }}
        >
          {visibleProjects.map((project, idx) => (
            <AnimatePresence key={`${project.title}-${idx}`} mode="wait">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                transition={{ duration: 0.4 }}
                className="flex justify-center"
              >
                <PinContainer title={project.title} href={project.link}>
                  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/80 w-[20rem] h-[22rem]">
                    <div className="relative w-full h-40 rounded-md overflow-hidden mb-4">
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <h3 className="text-base font-bold text-slate-100 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-400">{project.desc}</p>
                    <div className="flex flex-1 w-full h-[10vh] rounded-lg mt-4 bg-gradient-to-br from-cyan-500 via-purple-500 to-blue-500" />
                  </div>
                </PinContainer>
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      </motion.div>
    </section>
  );
}