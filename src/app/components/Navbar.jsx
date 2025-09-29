'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] md:w-[80%] max-w-7xl backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-6 py-3 shadow-lg flex items-center justify-between"
    >
      {/* Logo */}
      <Link href="/" className="text-neon text-xl font-bold tracking-wider">
        Hashim.dev
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-6 text-sm text-white font-medium">
        {navItems.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="hover:text-neon transition-colors duration-300"
          >
            {label}
          </a>
        ))}
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 right-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-lg p-6 space-y-4 z-40 w-[80vw]"
          >
            {navItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="block text-white text-base hover:text-neon transition"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
