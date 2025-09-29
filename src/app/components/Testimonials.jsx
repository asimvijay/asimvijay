"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ExpandableCardDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(4);

  // Calculate how many cards to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else if (window.innerWidth < 1280) {
        setCardsPerView(3);
      } else {
        setCardsPerView(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-rotate the cards
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex + cardsPerView >= cards.length ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [cardsPerView, isPaused]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex + cardsPerView >= cards.length ? 0 : prevIndex + 1
    );
  }, [cardsPerView]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, cards.length - cardsPerView) : prevIndex - 1
    );
  }, [cardsPerView]);

  // Group cards for display
  const visibleCards = cards.slice(currentIndex, currentIndex + cardsPerView);
  // If we're at the end and don't have enough cards, add from the beginning
  if (visibleCards.length < cardsPerView) {
    visibleCards.push(...cards.slice(0, cardsPerView - visibleCards.length));
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-white mb-4">
          Client Reviews
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
          Discover what clients are saying about my work and collaborations
        </p>
      </div>

      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
 {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2  -translate-x-4 z-10 bg-white dark:bg-neutral-800 rounded-full p-2 shadow-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
          aria-label="Previous reviews"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2  -translate-y-1/2 translate-x-4 z-10 bg-white dark:bg-neutral-800 rounded-full p-2 shadow-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
          aria-label="Next reviews"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Cards Container */}
        <div className="relative min-h-[52vh] ml-6  grid grid-cols-1 md:grid-cols-2 mr-2 lg:grid-cols-3 xl:grid-cols-4  overflow-hidden">
          <AnimatePresence mode="sync">
            {visibleCards.map((card, index) => (
              <motion.div
                key={`${card.title}-${currentIndex}-${index}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full h-full bg-white dark:bg-neutral-800 mr-10 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-neutral-700"
              style={{
                left: `${index * (100 / cardsPerView)}%`,
                width: `calc(${100 / cardsPerView}% - 1rem)`, // subtract gap
                
              }}

              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    width={320}
                    height={192}
                    src={card.src}
                    alt={card.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-5">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg text-neutral-800 dark:text-white">
                        {card.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-300 text-sm mt-1">
                        {card.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <div className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed min-h-[80px]">
                    {typeof card.content === "function"
                      ? card.content()
                      : card.content}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(cards.length / cardsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * cardsPerView)}
              className={`w-3 h-3 rounded-full transition-all ${
                Math.floor(currentIndex / cardsPerView) === index 
                  ? 'bg-green-500' 
                  : 'bg-neutral-300 dark:bg-neutral-600'
              }`}
              aria-label={`Go to review group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const cards = [
  {
    description: "(Vijay) Tech Startup Founder",
    title: "AI-Powered Analytics Dashboard",
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    content: () => {
      return (
        <p>
          Hashim delivered an outstanding AI-driven analytics dashboard for our
          startup. His ability to blend complex machine learning models with a
          clean and intuitive UI exceeded our expectations.
        </p>
      );
    },
  },
  {
    description: "(Musab) E-Commerce Business Owner",
    title: "Custom Recommendation System",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    content: () => {
      return (
        <p>
          We hired Hashim to implement a recommendation system for our
          e-commerce store. The AI engine he developed boosted our customer
          engagement and increased conversions by over 30%.
        </p>
      );
    },
  },
  {
    description: "Healthcare Organization",
    title: "Predictive Patient Insights",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    content: () => {
      return (
        <p>
          Working with Hashim was a game-changer for our healthtech initiative.
          He created a predictive AI model that helped us identify patient risks
          early on.
        </p>
      );
    },
  },
  {
    description: "(Aleema) Hackathon Teammate",
    title: "AI Agent for Lead Generation",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    content: () => {
      return (
        <p>
          During a hackathon, I collaborated with Hashim on an AI-powered lead
          generation tool. His ability to quickly prototype and deliver a polished product was impressive.
        </p>
      );
    },
  },
  {
    description: "(Inzimam Khan) Research Collaborator",
    title: "Driverless Car Research",
    src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    content: () => {
      return (
        <p>
          Hashim contributed significantly to our research on driverless cars.
          From integrating LiDAR and GPS data to building visualization tools,
          he demonstrated both technical depth and curiosity.
        </p>
      );
    },
  },
  {
    description: "(Komal Hasan) Marketing Agency Director",
    title: "Customer Segmentation Platform",
    src: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    content: () => {
      return (
        <p>
          Hashim developed a customer segmentation platform that transformed our
          marketing campaigns. The insights we gained helped us increase ROI by 45%.
        </p>
      );
    },
  },
  {
    description: "FinTech CEO",
    title: "Fraud Detection System",
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    content: () => {
      return (
        <p>
          The fraud detection system Hashim built for our financial platform has
          saved us millions by identifying suspicious transactions in real-time.
        </p>
      );
    },
  },
  {
    description: "Education Nonprofit Director",
    title: "Learning Analytics Dashboard",
    src: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    content: () => {
      return (
        <p>
          Hashim created a learning analytics dashboard that helped us understand
          student progress and identify at-risk learners more effectively.
        </p>
      );
    },
  },
];