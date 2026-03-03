import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={scrollToTop}
          className="flex items-center space-x-2 group cursor-pointer bg-transparent border-none outline-none"
        >
          <Terminal className="w-6 h-6 text-primary group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-mono font-bold text-lg tracking-tight text-white">
            ramingooo<span className="text-primary group-hover:animate-pulse">.</span>dev
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="nav-link relative group">
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-zinc-100 p-2 hover:bg-zinc-800 rounded-lg transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full border-t border-zinc-800 animate-in slide-in-from-top duration-300">
          <div className="px-6 py-6 flex flex-col space-y-4 text-center">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="nav-link text-lg py-2" 
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
