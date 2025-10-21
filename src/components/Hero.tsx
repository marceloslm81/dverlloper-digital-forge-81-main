
import React, { useEffect, useState, useRef } from 'react';
import { ArrowDown, Code, Globe, Laptop } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const robotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Rastreamento do mouse
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Clique para interação
    const handleClick = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 300);
    };

    // Piscadas automáticas
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 3000 + Math.random() * 2000);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      clearInterval(blinkInterval);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Fundo animado com gradientes */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/50 to-black/80"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8)_2px,transparent_2px),linear-gradient(to_bottom,rgba(0,0,0,0.8)_2px,transparent_2px)] bg-[size:40px_40px] opacity-20"></div>
      
      {/* Círculos de luz com blur */}
      <div className="absolute top-20 left-[20%] w-72 h-72 bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute top-40 right-[20%] w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      
      {/* Efeito de partículas */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 animate-float-slow">
          <Code className="w-8 h-8 text-blue-400/30" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float-slower">
          <Globe className="w-10 h-10 text-blue-500/30" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float">
          <Laptop className="w-12 h-12 text-blue-300/30" />
        </div>
      </div>
      
      {/* Grid de fundo animado */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black_70%)]"></div>

      {/* Robô Animado Futurista */}
      <div 
        ref={robotRef}
        className="fixed bottom-10 left-6 pointer-events-none z-20 hidden md:block"
        style={{
          transform: 'translateY(0px)',
          animation: 'robotFloat 4s ease-in-out infinite'
        }}
      >
        <div className="relative">
          {/* Glow de fundo */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-lg scale-125 animate-pulse"></div>
          
          {/* Corpo do robô */}
          <div className={`relative transition-all duration-300 ${isClicked ? 'scale-110' : 'scale-100'}`}>
            {/* Cabeça */}
            <div className="relative w-16 h-14 mx-auto mb-1">
              {/* Cabeça principal */}
              <div 
                className="w-full h-full bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 rounded-xl shadow-xl border border-slate-500/30"
                style={{
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.3), inset 0 2px 6px rgba(255, 255, 255, 0.1)',
                  transform: `${isClicked ? 'rotateY(10deg)' : 'rotateY(0deg)'}`,
                  transition: 'transform 0.3s ease'
                }}
              >
                {/* Visor */}
                <div className="absolute top-2 left-2 right-2 h-6 bg-gradient-to-r from-slate-900 to-slate-800 rounded-md border border-blue-400/30 overflow-hidden">
                  {/* Reflexo do visor */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-pulse"></div>
                  
                  {/* Olhos */}
                  <div className="relative h-full flex items-center justify-center gap-2">
                    {['left', 'right'].map((side, index) => {
                      const robotRect = robotRef.current?.getBoundingClientRect();
                      const eyeCenterX = robotRect ? robotRect.left + robotRect.width / 2 + (index === 0 ? -5 : 5) : 0;
                      const eyeCenterY = robotRect ? robotRect.top + 25 : 0;
                      
                      const deltaX = mousePosition.x - eyeCenterX;
                      const deltaY = mousePosition.y - eyeCenterY;
                      const angle = Math.atan2(deltaY, deltaX);
                      const distance = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY) / 100, 1);
                      
                      const eyeX = Math.cos(angle) * distance * 2;
                      const eyeY = Math.sin(angle) * distance * 1.5;
                      
                      return (
                        <div key={side} className="relative">
                          {/* Órbita do olho */}
                          <div className="w-4 h-3.5 bg-slate-800 rounded-full border border-blue-500/40 relative overflow-hidden">
                            {/* Pupila */}
                            <div 
                              className={`absolute w-2.5 h-2.5 rounded-full transition-all duration-100 ease-out ${
                                isBlinking ? 'scale-y-0' : 'scale-y-100'
                              }`}
                              style={{
                                background: isClicked 
                                  ? 'radial-gradient(circle, #ef4444 0%, #dc2626 100%)'
                                  : 'radial-gradient(circle, #60a5fa 0%, #3b82f6 100%)',
                                boxShadow: isClicked 
                                  ? '0 0 8px #ef4444, 0 0 14px #ef444440'
                                  : '0 0 8px #60a5fa, 0 0 14px #60a5fa40',
                                left: `${50 + eyeX * 10}%`,
                                top: `${50 + eyeY * 10}%`,
                                transform: 'translate(-50%, -50%)'
                              }}
                            />
                            {/* Brilho no olho */}
                            <div 
                              className="absolute w-1 h-1 bg-white/80 rounded-full"
                              style={{
                                left: `${60 + eyeX * 8}%`,
                                top: `${40 + eyeY * 8}%`,
                                transform: 'translate(-50%, -50%)'
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {/* Antenas */}
                <div className="absolute -top-1.5 left-1/2 transform -translate-x-1/2">
                  <div className="w-0.5 h-2 bg-gradient-to-t from-slate-600 to-blue-400 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full -mt-0.5 animate-pulse shadow-md shadow-blue-400/50"></div>
                </div>
              </div>
            </div>
            
            {/* Pescoço */}
            <div className="w-4 h-2.5 bg-gradient-to-b from-slate-600 to-slate-700 mx-auto rounded-sm border border-slate-500/30"></div>
            
            {/* Corpo */}
            <div 
              className="w-14 h-12 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 rounded-lg mx-auto shadow-xl border border-slate-500/30 relative"
              style={{
                boxShadow: '0 0 15px rgba(59, 130, 246, 0.2), inset 0 2px 6px rgba(255, 255, 255, 0.1)',
                animation: 'robotBreathe 3s ease-in-out infinite'
              }}
            >
              {/* Painel central */}
              <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-gradient-to-b from-slate-800 to-slate-900 rounded-md border border-blue-400/30">
                {/* Luzes indicadoras */}
                <div className="flex justify-center items-center h-full gap-0.5">
                  <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse shadow-md shadow-green-400/50"></div>
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-300 shadow-md shadow-blue-400/50"></div>
                  <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-700 shadow-md shadow-purple-400/50"></div>
                </div>
              </div>
              
              {/* Braços */}
              <div className="absolute top-2 -left-2 w-4 h-2 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full border border-slate-500/30"></div>
              <div className="absolute top-2 -right-2 w-4 h-2 bg-gradient-to-l from-slate-700 to-slate-600 rounded-full border border-slate-500/30"></div>
            </div>
            
            {/* Base/Pernas */}
            <div className="flex justify-center gap-1.5 mt-0.5">
              <div className="w-2 h-4 bg-gradient-to-b from-slate-600 to-slate-700 rounded-full border border-slate-500/30"></div>
              <div className="w-2 h-4 bg-gradient-to-b from-slate-600 to-slate-700 rounded-full border border-slate-500/30"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes robotFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }
        
        @keyframes robotBreathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
      `}</style>

      <div className="container mx-auto px-4 text-center relative z-10">
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
              onClick={() => scrollToSection('contact')}
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <span className="relative z-10">Solicitar Orçamento</span>
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
