import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/use-scroll-animation';
import type { RefCallback } from 'react';

const Services = () => {
  const navigate = useNavigate();
  const [titleRef, isTitleVisible] = useScrollAnimation();
  const [servicesRef, isServicesVisible] = useScrollAnimation();
  const services = [
    {
      title: "Desenvolvimento de Sites",
      description: "Sites institucionais, corporativos e portfolios com design responsivo e otimizado para SEO.",
      icon: "💻",
      gradient: "from-blue-600 to-cyan-400"
    },
    {
      title: "Sistemas Personalizados",
      description: "Desenvolvimento de sistemas sob medida para automatizar processos e aumentar a produtividade.",
      icon: "⚙️",
      gradient: "from-purple-600 to-blue-500"
    },
    {
      title: "Landing Pages",
      description: "Páginas de conversão otimizadas para campanhas de marketing e geração de leads.",
      icon: "🚀",
      gradient: "from-orange-500 to-pink-500"
    },
    {
      title: "E-commerce",
      description: "Lojas virtuais completas com integração de pagamentos e gestão de produtos.",
      icon: "🛍️",
      gradient: "from-green-500 to-emerald-400"
    },
    {
      title: "Identidade Visual",
      description: "Criação de logotipos, identidade visual e material gráfico para sua marca.",
      icon: "🎨",
      gradient: "from-pink-500 to-rose-400"
    },
    {
      title: "Integrações",
      description: "APIs, bancos de dados e integração com plataformas terceiras para expandir funcionalidades.",
      icon: "🔗",
      gradient: "from-violet-600 to-indigo-400"
    }
  ];
  return (
    <section id="services" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-40%,rgba(59,130,246,0.3),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_70%_60%,rgba(147,51,234,0.3),transparent)]"></div>
      
      <div className="container mx-auto px-4 relative">
        <div 
          className="text-center mb-16 relative"
          ref={titleRef as RefCallback<HTMLDivElement>}
        >
          <div className={`transform transition-all duration-1000 ${
            isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 relative inline-block">
              Nossos{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 animate-gradient-x">
                  Serviços
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-50 animate-pulse"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto relative">
              Oferecemos soluções completas para transformar sua presença digital em uma ferramenta poderosa de crescimento.
              <span className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
            </p>
          </div>
        </div>
        
        <div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={servicesRef as RefCallback<HTMLDivElement>}
        >
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-gray-900/40 backdrop-blur-xl p-8 rounded-3xl border border-gray-800/50 
                hover:border-blue-500/50 transition-all duration-700 group relative overflow-hidden
                transform ${isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
                hover:translate-y-[-5px] hover:shadow-2xl`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                animation: `float ${3 + index * 0.5}s ease-in-out infinite alternate`
              }}
            >
              {/* Efeito de brilho em movimento */}
              <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent 
                skew-x-[-45deg] group-hover:animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Gradiente de fundo */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 
                group-hover:opacity-10 rounded-3xl transition-all duration-700 blur-xl`}
              />
              
              {/* Partículas flutuantes */}
              <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animation: `float ${2 + Math.random() * 3}s ease-in-out infinite`
                    }}
                  />
                ))}
              </div>
              
              {/* Ícone */}
              <div className="relative text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-12 
                transition-all duration-700 animate-bounce-slow">
                {service.icon}
              </div>
              
              {/* Título */}
              <h3 className="text-xl font-semibold text-white mb-4 relative
                group-hover:text-transparent group-hover:bg-gradient-to-r 
                group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 
                transition-all duration-500">
                <span className="relative inline-block group-hover:animate-wave">
                  {service.title}
                </span>
              </h3>
              
              {/* Descrição */}
              <p className="text-gray-400 leading-relaxed relative z-10 group-hover:text-gray-300 
                transition-colors duration-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button 
            onClick={() => navigate('/services')} 
            className="group relative inline-flex items-center px-10 py-4 rounded-full text-lg font-semibold
              text-white overflow-hidden transition-all duration-500 hover:scale-105"
          >
            {/* Fundo gradiente animado */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400 
              animate-gradient-x transition-all duration-500 group-hover:brightness-125"></div>
            
            {/* Efeito de brilho */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
              -skew-x-45 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000"></div>
            
            {/* Partículas */}
            <div className="absolute inset-0">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `sparkle ${1 + Math.random() * 2}s linear infinite`
                  }}
                />
              ))}
            </div>
            
            {/* Texto e ícone */}
            <span className="relative z-10 flex items-center gap-2">
              Ver Todos os Serviços e Detalhes
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </span>
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400 
              blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500 group-hover:blur-2xl"></div>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Services;