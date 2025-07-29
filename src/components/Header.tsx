
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white flex items-center">
            <span className="text-blue-500 mr-2">&lt;/&gt;</span>
            <span className="text-blue-500">D</span>velloper
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-blue-500 transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-blue-500 transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-blue-500 transition-colors">
              Serviços
            </button>
            <button onClick={() => scrollToSection('automations')} className="text-white hover:text-blue-500 transition-colors">
              Automações
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-white hover:text-blue-500 transition-colors">
              Portfólio
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-white hover:text-blue-500 transition-colors">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105">
              Orçamento
            </button>
          </nav>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-black/95 rounded-lg p-4">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-blue-500 transition-colors text-left">
                Início
              </button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-blue-500 transition-colors text-left">
                Sobre
              </button>
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-blue-500 transition-colors text-left">
                Serviços
              </button>
              <button onClick={() => scrollToSection('automations')} className="text-white hover:text-blue-500 transition-colors text-left">
                Automações
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-white hover:text-blue-500 transition-colors text-left">
                Portfólio
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-white hover:text-blue-500 transition-colors text-left">
                Depoimentos
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-all duration-300 text-left">
                Orçamento
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
