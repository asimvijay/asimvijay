'use client';

import React, { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from 'motion/react';
import { Cpu, BrainCircuit, Bot, Code2, Laptop } from 'lucide-react';
import { cn } from '@/lib/utils';

// Services data
const services = [
  {
    icon: <Laptop size={28} />,
    title: 'Software Engineering',
    desc: 'Designing and developing scalable, efficient, and maintainable applications.',
  },
  {
    icon: <Cpu size={28} />,
    title: 'Autonomous Agents',
    desc: 'Custom-built AI agents that think, act, and learn on your behalf.',
  },
  {
    icon: <BrainCircuit size={28} />,
    title: 'AI Strategy & Consulting',
    desc: 'Aligning AI innovation with business goals using strategic intelligence.',
  },
  {
    icon: <Bot size={28} />,
    title: 'AI-Powered Products',
    desc: 'Building futuristic, user-friendly, and scalable AI-driven tools.',
  },
  {
    icon: <Code2 size={28} />,
    title: 'MLOps & Deployment',
    desc: 'Managing the full AI lifecycle: training, optimization, and cloud deployment.',
  },
];

// CometCard component
export const CometCard = ({
  rotateDepth = 17.5,
  translateDepth = 20,
  className,
  children,
}) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`-${rotateDepth}deg`, `${rotateDepth}deg`]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`${rotateDepth}deg`, `-${rotateDepth}deg`]);

  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], [`-${translateDepth}px`, `${translateDepth}px`]);
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], [`${translateDepth}px`, `-${translateDepth}px`]);

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100]);

  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.9) 10%, rgba(255, 255, 255, 0.75) 20%, rgba(255, 255, 255, 0) 80%)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className={cn('perspective-distant transform-3d', className)}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          translateX,
          translateY,
          boxShadow:
            'rgba(0, 0, 0, 0.01) 0px 520px 146px 0px, rgba(0, 0, 0, 0.04) 0px 333px 133px 0px, rgba(0, 0, 0, 0.26) 0px 83px 83px 0px, rgba(0, 0, 0, 0.29) 0px 21px 46px 0px',
        }}
        initial={{ scale: 1, z: 0 }}
        whileHover={{
          scale: 1.05,
          z: 50,
          transition: { duration: 0.2 },
        }}
        className="relative rounded-2xl bg-white dark:bg-black p-6 w-full h-full"
      >
        {children}
        <motion.div
          className="pointer-events-none absolute inset-0 z-50 h-full w-full rounded-[16px] mix-blend-overlay"
          style={{ background: glareBackground, opacity: 0.6 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </div>
  );
};

// Services Grid
export default function ServicesSection() {
  return (
    <section className="w-full px-6 sm:px-10 lg:px-20 py-16">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Services by <span className="text-cyan-500">Hashim</span>
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
          Professional Software & AI Engineer — crafting intelligent software and AI-powered solutions for the modern world.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {services.map((service, idx) => (
          <CometCard key={idx} className="h-full">
            <div className="flex flex-col gap-3 h-full">
              <div className="text-cyan-500">{service.icon}</div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 flex-grow">{service.desc}</p>
            </div>
          </CometCard>
        ))}
      </div>
    </section>
  );
}
