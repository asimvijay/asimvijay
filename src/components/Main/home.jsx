export default function HomeSection() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="h-[100vh] flex items-center pt-20 pb-28"> {/* Changed to h-[100vh] */}
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 mt-10 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">John Doe</h1>
          <h2 className="text-xl md:text-2xl text-indigo-600 mb-6">Full-Stack Software Engineer</h2>
          <p className="text-gray-600 mb-8 max-w-md">Crafting digital experiences that blend innovation with functionality</p>
          <div className="flex space-x-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
            >
              Hire Me
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors"
            >
              View Projects
            </button>
          </div>
        </div>
        <div className="md:w-2/5 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-indigo-100 rounded-full flex items-center justify-center shadow-xl">
            <svg className="w-3/4 h-3/4 text-indigo-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}