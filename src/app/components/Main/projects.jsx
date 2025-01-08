"use client"
import { useState, useEffect } from "react";
import { projects } from './data'; 
import './main.css';
import Image from "next/image";

const Projects = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filterProjects = (language) => {
    if (language === "All") {
      return projects;
    }
    return projects.filter(project => project.languages.includes(language));
  };

  // Automatically change image every 3 seconds for selected project
  useEffect(() => {
    if (selectedProject) {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.images.length);
      }, 3000); // 3 seconds

      return () => clearInterval(intervalId); // Clean up interval on unmount
    }
  }, [selectedProject]);

  return (
    <div className="p-4">
      {/* Navbar for selecting language */}
      <div className="flex space-x-4 mb-6 overflow-scroll">
        <button onClick={() => setSelectedLanguage("All")} className="p-2 bg-blue-500 text-white rounded">
          All
        </button>
        <button onClick={() => setSelectedLanguage("JavaScript")} className="p-2 bg-blue-500 text-white rounded">
          JavaScript
        </button>
        <button onClick={() => setSelectedLanguage("React")} className="p-2 bg-blue-500 text-white rounded">
          React
        </button>
        <button onClick={() => setSelectedLanguage("Python")} className="p-2 bg-blue-500 text-white rounded">
          Python
        </button>
        <button onClick={() => setSelectedLanguage("Nextjs")} className="p-2 bg-blue-500 text-white rounded">
         Nextjs
        </button>
      </div>

      {/* Display projects based on selected language */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Projects in {selectedLanguage}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 cursor-pointer">
          {filterProjects(selectedLanguage).map((project) => (
            <div 
              key={project.id} 
              className="project-card p-4 border rounded-lg shadow-lg transition-transform duration-300"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative group">
                {/* Replace img with next/image for better performance */}
                <Image 
                  src={project.images[0]} 
                  alt={project.name} 
                  width={500} 
                  height={300} 
                  className="w-full h-48 object-cover rounded-lg mb-4 transition-opacity duration-500 group-hover:opacity-0" 
                />
                {project.videos.length > 0 && (
                  <video 
                    src={project.videos[0]} 
                    autoPlay 
                    loop 
                    muted 
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                )}
              </div>
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="text-sm text-gray-500">Languages: {project.languages.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>

    {/* Project Detail Popup */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h3 className="text-2xl font-semibold mb-4">{selectedProject.name}</h3>
            <p className="mb-4">{selectedProject.description}</p>
            <div className="mb-4">
              <div className="relative group">
                <img 
                  src={selectedProject.images[currentImageIndex]} 
                  alt={`${selectedProject.name} image`} 
                  className="w-full h-48 object-cover rounded-lg transition-opacity duration-500 group-hover:opacity-0"
                />
                {selectedProject.videos.length > 0 && (
                  <video 
                    src={selectedProject.videos[0]} 
                    autoPlay 
                    loop 
                    muted 
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                )}
              </div>
            </div>
            <button 
              onClick={() => setSelectedProject(null)} 
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
