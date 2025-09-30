'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

import Card from './3d-pin-card.jsx';

const projects = [
  {
    title: 'Autonomous AI Agent',
    desc: 'An agent that autonomously manages YouTube channels using real-time trend analysis, script generation, and video deployment.',
    img: '/images/ai-agent.png',
    link: '#',
  },
  {
    title: 'Satellite Farming System',
    desc: 'Real-time NDVI & crop monitoring system powered by satellite data, Earth Engine & AI visual reports.',
    img: '/images/satellite-farm.png',
    link: '#',
  },
  {
    title: 'AI Fashion Recommender',
    desc: 'ML-based visual style matcher for e-commerce, powering smart try-ons and personalized product discovery.',
    img: '/images/fashion-ai.png',
    link: '#',
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 50 },
  show: { opacity: 1, scale: 1, y: 0 },
};

export default function ProjectsShowcase() {
  return (
    <section id="projects" className=" md:px-20 ">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="max-w-7xl mx-auto text-white"
      >
        

        <div className=" gap-13">
         <Card/>
        </div>

   
      </motion.div>
    </section>
  );
}