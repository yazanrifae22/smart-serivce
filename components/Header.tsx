
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Healthcare', href: '#healthcare', id: 'healthcare' },
    { name: 'Formation', href: '#formation', id: 'formation' },
    { name: 'Govt Services', href: '#govt', id: 'govt' },
    { name: 'Why Us', href: '#whyus', id: 'whyus' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <a href="#home" className="hover:opacity-90 transition-opacity">
              <Logo />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-bold transition-all hover:text-sky-600 border-b-2 py-1 ${
                  activeSection === link.id 
                  ? 'text-sky-600 border-sky-600' 
                  : 'text-slate-600 border-transparent'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#consultation"
              className="bg-sky-600 text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-sky-700 transition-all shadow-lg hover:shadow-sky-200"
            >
              Book Free Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 hover:text-sky-600 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-8 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-lg font-bold rounded-lg ${
                  activeSection === link.id ? 'text-sky-600 bg-sky-50' : 'text-slate-600'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#consultation"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-6 bg-sky-600 text-white px-6 py-4 rounded-xl text-lg font-bold shadow-lg"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
