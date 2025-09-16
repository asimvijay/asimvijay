export default function Footer() {
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
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="text-2xl font-bold mb-4">JD</div>
        <p className="text-gray-400 mb-8">Crafting digital excellence one line at a time</p>
        <div className="flex justify-center space-x-6 mb-8">
          {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-gray-400 hover:text-white transition-colors capitalize"
            >
              {item}
            </button>
          ))}
        </div>
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
      </div>
    </footer>
  );
}