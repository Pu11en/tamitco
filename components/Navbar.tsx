
import React from 'react';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Professional Text Logo */}
        <div className="flex items-center">
          <a href="#" className="flex items-center group">
            <span className={`font-display font-bold uppercase italic tracking-tighter transition-all duration-300 ${
              scrolled ? 'text-xl' : 'text-2xl md:text-3xl'
            } text-white`}>
              TAMIT<span className="text-primary">CO</span>
            </span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              className="text-white hover:text-primary font-bold uppercase tracking-wider text-xs transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#quote"
            className="bg-primary hover:bg-red-700 text-white font-bold py-2 px-6 rounded text-xs transition-all shadow-lg"
          >
            GET A QUOTE
          </a>
        </div>

        {/* Mobile View: Show only Quote button for a cleaner header since menu was removed */}
        <div className="md:hidden">
          <a 
            href="#quote"
            className="bg-primary text-white font-bold py-2 px-4 rounded text-[10px] uppercase tracking-widest shadow-lg"
          >
            QUOTE
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
