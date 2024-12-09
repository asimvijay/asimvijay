"use client";

import { useState } from "react";
import Contact from "../Main/contact";
import Projects from "../Main/projects";
import Resume from "../Main/resume";
import About from "../Main/about";

const RightWithNavbar = () => {
  const [activeComponent, setActiveComponent] = useState("About"); // Default to "About"

  const navItems = ["About", "Resume", "Projects", "Contact"]; // Nav items

  return (
    <div className="lg:overflow-y-auto h-full scrollbar-hide">
      {/* Navbar - Sticky at the top */}
      <div className="sticky top-0 z-10 h-12 bg-gray-50 shadow-md flex justify-between items-center px-4 rounded-lg">
        {/* Left side: Display the selected component */}
        <div className="text-lg font-semibold text-gray-800">
          {activeComponent}
        </div>

        {/* Right side: Nav Items */}
        <div className="font-bold flex space-x-12">
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
      </div>

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
