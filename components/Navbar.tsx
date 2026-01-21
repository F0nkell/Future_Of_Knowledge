import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'bg-dark-bg/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Logo />
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-brand transition-colors tracking-wide uppercase font-tech"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#tariffs"
            className="px-5 py-2 rounded-full border border-brand text-brand hover:bg-brand hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(254,0,125,0.3)] hover:shadow-[0_0_20px_rgba(254,0,125,0.6)] font-bold text-sm"
          >
            Start Learning
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-dark-bg/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-5">
           {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-medium text-white hover:text-brand"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;