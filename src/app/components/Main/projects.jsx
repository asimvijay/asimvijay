"use client"
import { useState, useEffect } from "react";
import { projects } from '../../data';
import './main.css';
import Image from "next/image";

const Projects = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      return window.matchMedia("(hover: none)").matches || window.innerWidth < 768;
    };
    setIsMobile(checkIfMobile());
    
    const handleResize = () => {
      setIsMobile(checkIfMobile());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filterProjects = (language) => {
    if (language === "All") return projects;
    return projects.filter(project => project.languages.includes(language));
  };

  useEffect(() => {
    if (selectedProject) {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % selectedProject.images.length
        );
      }, 3000);
      return () => clearInterval(intervalId);
    }
  }, [selectedProject]);

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      {/* Language Filter Chips */}
      <div className="flex flex-wrap gap-3 mb-8 pb-2 overflow-x-auto scrollbar-hide">
        {["All", "JavaScript", "React", "Python", "Nextjs"].map((lang) => (
          <button
            key={lang}
            onClick={() => setSelectedLanguage(lang)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedLanguage === lang
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
          >
            {lang}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        {selectedLanguage === "All" ? "All Projects" : `${selectedLanguage} Projects`}
        <span className="block w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mt-2"></span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filterProjects(selectedLanguage).map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100 hover:border-blue-100"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative aspect-video overflow-hidden">
              {project.videos.length > 0 ? (
                <>
                  {isMobile ? (
                    <video
                      src={project.videos[0]}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <>
                      <Image
                        src={project.images[0]}
                        alt={project.name}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:opacity-0"
                      />
                      <video
                        src={project.videos[0]}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-105"
                      />
                    </>
                  )}
                </>
              ) : (
                <Image
                  src={project.images[0]}
                  alt={project.name}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
            </div>

            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {project.languages[0]}
                </span>
              </div>
              <p className="text-gray-600 line-clamp-2">{project.shortDescription || ''}</p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {project.languages.map((lang) => (
                  <span key={lang} className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-600">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <span className="text-white font-medium">View Details →</span>
            </div>
          </div>
        ))}
      </div>

      
     {/* Project Detail Popup */}
     {selectedProject && (
        <div className="fixed inset-0 bg-white/60 backdrop-blur-sm flex justify-center items-center z-50">

          <div className="bg-white p-6 rounded-lg  md:max-w-lg w-[90vw] md:w-full h-[75vh] md:h-100  mb-10  ">
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