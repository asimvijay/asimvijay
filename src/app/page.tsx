"use client";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar/sidebar";
import Right from "./components/Right/page";
// Import dynamic from next
import dynamic from "next/dynamic";


// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

// Example animation (replace with your own JSON file)
import animationData from './animations/earth.json'; 

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [showSplash, setShowSplash] = useState(true);

  // Initialize theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  // Update theme when it changes
  useEffect(() => {
    document.documentElement.className = theme; // Apply theme to the root element
    localStorage.setItem("theme", theme); // Persist theme in localStorage
  }, [theme]);

  // Handle splash screen visibility
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 5000); // 3-second splash
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  // Lottie animation options
  const defaultOptions = {
    loop: true,
    autoplay: true, // Loop and autoplay
    animationData: animationData, // Your Lottie animation data
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      {showSplash ? (
        <div
          className={`fixed inset-0 flex items-center justify-center ${
            theme === "light" ? "bg-gradient-to-r from-green-400 to-blue-400" : "bg-gray-900"
          }`}
        >
          <div className="text-center">
            {/* Lottie Animation */}
            <Lottie options={defaultOptions} height={100} width={150} />
            <h1 className="text-4xl font-bold text-white animate-bounce mt-4">
             Welcome To My Portfolio
            </h1>
            <p className="text-lg text-white mt-4">Loading...</p>
          </div>
        </div>
      ) : (
        <div
          className={`min-h-screen ${
            theme === "light" ? "bg-gradient-to-r from-green-400 to-blue-400" : "bg-gray-900"
          } p-8 lg:px-20`}
        >
          <div className="grid grid-cols-12 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-3 col-span-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl lg:p-4 lg:sticky top-0 max-h-[90vh]">
              <Sidebar theme={theme} setTheme={setTheme} />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9 col-span-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl lg:p-4 lg:max-h-[90vh]">
              <Right />
    
            </div>
          </div>
        </div>
      )}
    </>
  );
}
