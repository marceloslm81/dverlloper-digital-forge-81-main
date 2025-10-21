
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/40 backdrop-blur-lg shadow-lg border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <Logo size="md" />
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-white/90 relative group py-2 px-3 overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-cyan-400 transition-colors duration-300 font-medium">Início</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="absolute inset-0 bg-white/5 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-lg -z-10"></span>
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-white/90 relative group py-2 px-3 overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-cyan-400 transition-colors duration-300 font-medium">Sobre</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="absolute inset-0 bg-white/5 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-lg -z-10"></span>
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-white/90 relative group py-2 px-3 overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-cyan-400 transition-colors duration-300 font-medium">Serviços</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="absolute inset-0 bg-white/5 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-lg -z-10"></span>
            </button>
            <button 
              onClick={() => scrollToSection('automations')} 
              className="text-white/90 relative group py-2 px-3 overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-cyan-400 transition-colors duration-300 font-medium">Automações</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="absolute inset-0 bg-white/5 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-lg -z-10"></span>
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="text-white/90 relative group py-2 px-3 overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-cyan-400 transition-colors duration-300 font-medium">Portfólio</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="absolute inset-0 bg-white/5 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-lg -z-10"></span>
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="text-white/90 relative group py-2 px-3 overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-cyan-400 transition-colors duration-300 font-medium">Depoimentos</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="absolute inset-0 bg-white/5 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-lg -z-10"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 font-medium"
            >
              Orçamento
            </button>
          </nav>

          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div className={`md:hidden fixed inset-x-0 top-[72px] p-4 transition-all duration-300 transform ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}>
          <div className="bg-black/80 backdrop-blur-lg rounded-xl p-6 border border-white/10 shadow-xl">
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-white/90 hover:text-cyan-400 transition-all duration-300 text-left px-4 py-3 rounded-lg hover:bg-white/5 font-medium border-l-2 border-transparent hover:border-cyan-500"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-white/90 hover:text-cyan-400 transition-all duration-300 text-left px-4 py-3 rounded-lg hover:bg-white/5 font-medium border-l-2 border-transparent hover:border-cyan-500"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-white/90 hover:text-cyan-400 transition-all duration-300 text-left px-4 py-3 rounded-lg hover:bg-white/5 font-medium border-l-2 border-transparent hover:border-cyan-500"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('automations')} 
                className="text-white/90 hover:text-cyan-400 transition-all duration-300 text-left px-4 py-3 rounded-lg hover:bg-white/5 font-medium border-l-2 border-transparent hover:border-cyan-500"
              >
                Automações
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')} 
                className="text-white/90 hover:text-cyan-400 transition-all duration-300 text-left px-4 py-3 rounded-lg hover:bg-white/5 font-medium border-l-2 border-transparent hover:border-cyan-500"
              >
                Portfólio
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="text-white/90 hover:text-cyan-400 transition-all duration-300 text-left px-4 py-3 rounded-lg hover:bg-white/5 font-medium border-l-2 border-transparent hover:border-cyan-500"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 text-center font-medium hover:shadow-lg hover:shadow-cyan-500/25 mt-2"
              >
                Orçamento
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
