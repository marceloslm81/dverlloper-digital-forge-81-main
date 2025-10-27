
import React, { useEffect, useState, useRef } from 'react';
import { ArrowDown, Code, Globe, Laptop } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/banner1.jpeg" 
          alt="Banner de fundo" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Overlay para escurecer a imagem e melhorar a legibilidade */}
      <div className="absolute inset-0 bg-black/60 z-[1]"></div>
      
      {/* Fundo animado com gradientes */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900/50 to-black/50 z-[2]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/30 to-black/60 z-[2]"></div>
      
      {/* Círculos de luz com blur */}
      <div className="absolute top-20 left-[20%] w-72 h-72 bg-blue-500/10 rounded-full blur-[120px] animate-pulse z-[3]"></div>
      <div className="absolute top-40 right-[20%] w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-1000 z-[3]"></div>
      
      {/* Efeito de partículas */}
      <div className="absolute inset-0 z-[3]">
        <div className="absolute top-1/4 left-1/4 animate-float-slow">
          <Code className="w-8 h-8 text-blue-400/50" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float-slower">
          <Globe className="w-10 h-10 text-blue-500/50" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float">
          <Laptop className="w-12 h-12 text-blue-300/50" />
        </div>
      </div>
      




      <div className="container mx-auto px-4 text-center relative z-[10]">
        <div className={`max-w-4xl mx-auto transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="relative inline-block text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="block mb-2">Sua presença digital</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              começa aqui
            </span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent opacity-50"></div>
          </h1>
          
          <p className={`text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Transformamos ideias em soluções digitais extraordinárias. 
            <span className="block mt-2 text-gray-400">
              Desenvolvimento web profissional que gera resultados reais.
            </span>
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <button 
              onClick={() => navigate('/catalogo')}
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <span className="relative z-10">Catálogo de Serviços</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl scale-90 group-hover:scale-100"></div>
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="group relative overflow-hidden border-2 border-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">Ver Projetos</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-full group-hover:translate-x-0"></span>
            </button>
          </div>
        </div>
      </div>

      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <button 
          onClick={() => scrollToSection('about')}
          className="group relative text-white hover:text-blue-400 transition-all duration-300"
        >
          <ArrowDown size={32} className="animate-float" />
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
