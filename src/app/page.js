// pages/index.js
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="bg-black text-white font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center lg:flex-row justify-center mt-32 p-10">
        <div className="text-center lg:text-left lg:max-w-lg px-6">
          <h2 className="text-5xl font-bold">
            Hi, It's <span className="text-cyan-400">Amelia</span>
          </h2>
          <p className="mt-4 text-lg">I'm a [Your Profession]</p>
          <p className="mt-4 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quas tempore laborum enim quo!
          </p>
          <div className="flex justify-center lg:justify-start space-x-6 mt-6">
            {/* Social Icons */}
          </div>
          <div className="flex justify-center lg:justify-start space-x-4 mt-6">
            <button className="px-6 py-2 bg-cyan-400 rounded-full text-black font-semibold hover:bg-cyan-300">Hire</button>
            <button className="px-6 py-2 border border-gray-500 rounded-full hover:border-cyan-400">Contact</button>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 lg:ml-10 relative">
          <div className="relative rounded-full w-64 h-64 lg:w-80 lg:h-80 overflow-hidden">
            <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-cyan-400 opacity-30 rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
