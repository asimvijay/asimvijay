//components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-black bg-opacity-80 backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold text-cyan-400">Amelia Morgan</h1>
        <nav className="space-x-8 text-gray-300">
          <Link href="#home"><a className="hover:text-cyan-400">Home</a></Link>
          <Link href="#about"><a className="hover:text-cyan-400">About</a></Link>
          <Link href="#services"><a className="hover:text-cyan-400">Services</a></Link>
          <Link href="#portfolio"><a className="hover:text-cyan-400">Portfolio</a></Link>
          <Link href="#contact"><a className="hover:text-cyan-400">Contact</a></Link>
        </nav>
      </div>
    </header>
  );
}
