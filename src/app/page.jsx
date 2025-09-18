"use client";
import { useState,useEffect } from 'react';
import Head from 'next/head';
import Hero from '@/components/Main/hero';
import About from '@/components/Main/about';
import Skills from '@/components/Main/skill';
import Projects from '@/components/Main/projects';
import Contact from '@/components/Main/contact';
import Testimonials from '@/components/Main/testimonials';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference for dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
  <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>

      <Head>
        <title>Software Engineer Portfolio</title>
        <meta name="description" content="Software Engineer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero darkMode={darkMode} setDarkMode={setDarkMode} />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}