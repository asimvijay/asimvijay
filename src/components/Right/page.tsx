"use client";

import { useState, useEffect } from "react";
import Contact from "../Main/contact";
import Projects from "../Main/projects";
import Resume from "../Main/resume";
import About from "../Main/hero";

const RightWithNavbar = () => {
  const [activeComponent, setActiveComponent] = useState("About"); // Default to "About"
  const [theme, setTheme] = useState("light"); // State for theme
  const [menuOpen, setMenuOpen] = useState(false); // State to control the hamburger menu

  const navItems = ["About", "Resume", "Projects", "Contact"]; // Nav items

  // Initialize theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  // Update the theme class on documentElement and localStorage whenever theme changes
  useEffect(() => {
    document.documentElement.className = theme; // Apply theme to root element
    localStorage.setItem("theme", theme); // Save theme to localStorage
  }, [theme]);

  return (
    <div className="lg:overflow-y-auto h-full scrollbar-hide bg-transparent">
      {/* Navbar - Sticky at the top */}
      <div className="sticky top-0 z-10 h-12 bg-gray-50 shadow-md flex justify-between items-center px-4 rounded-lg">
        {/* Left side: Display the selected component */}
        <div className="text-lg font-semibold text-gray-800">
          {activeComponent}
        </div>

        {/* Right side: Desktop Nav Items */}
        <div className="hidden lg:flex space-x-12 font-bold">
          {navItems
            .filter((item) => item !== activeComponent) // Filter out the active link
            .map((item) => (
              <span
                key={item}
                className="cursor-pointer text-sky-600 hover:text-green-600 transition duration-200"
                onClick={() => setActiveComponent(item)}
              >
                {item}
              </span>
            ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-50 shadow-md space-x-4 p-4">
          {navItems
            .filter((item) => item !== activeComponent) // Filter out the active link
            .map((item) => (
              <span
                key={item}
                className="cursor-pointer text-sky-600 hover:text-green-600 transition duration-200"
                onClick={() => {
                  setActiveComponent(item);
                  setMenuOpen(false); // Close the menu after selection
                }}
              >
                {item}
              </span>
            ))}
        </div>
      )}

      {/* Conditionally Render Components */}
      <div className="p-4">
        {activeComponent === "About" && <About />}
        {activeComponent === "Projects" && <Projects />}
        {activeComponent === "Resume" && <Resume />}
        {activeComponent === "Contact" && <Contact />}
      </div>
    </div>
  );
};

export default RightWithNavbar;
