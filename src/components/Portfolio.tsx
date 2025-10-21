import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/use-scroll-animation';
import type { RefCallback } from 'react';
const Portfolio = () => {
  const navigate = useNavigate();
  const projects = [{
    title: "ServiReform",
    category: "Loja Virtual",
    image: "/lovable-uploads/bb1af166-a8a0-49c1-902f-332b70497660.png",
    description: "Plataforma de serviços residenciais com sistema de orçamento integrado e atendimento emergencial 24h"
  }, {
    title: "Dra. Ana Silva - Psicóloga",
    category: "Website",
    image: "/lovable-uploads/637f9e2d-dc10-46ce-a9d4-af95b00f1297.png",
    description: "Site institucional para psicóloga clínica com sistema de agendamento de consultas online"
  }, {
    title: "Criativo Digital Freelancer",
    category: "Landing Page",
    image: "/lovable-uploads/a89c4af5-133f-4181-9967-0ca50bc89a27.png",
    description: "Landing page moderna para freelancer com foco em conversão e apresentação de serviços criativos"
  }, {
    title: "Alexandre Vasconcelos - Fotografia",
    category: "Website",
    image: "/lovable-uploads/4d89113d-279d-438a-b5ed-7b224c7e44ae.png",
    description: "Portfólio profissional para fotógrafo especializado em momentos únicos e eventos corporativos"
  }, {
    title: "Alex Silva - Designer",
    category: "Landing Page",
    image: "/lovable-uploads/9c0c19ef-055a-439f-ae23-7aadee49b68e.png",
    description: "Plataforma pessoal para designer gráfico com foco em experiências digitais incríveis"
  }, {
    title: "Estúdio Beleza",
    category: "Sistema Web",
    image: "/lovable-uploads/3cb2c538-4537-49da-bf45-c012c32e70af.png",
    description: "Sistema completo para estúdio de beleza com agendamento online e gestão de procedimentos"
  }];
  const [titleRef, isTitleVisible] = useScrollAnimation();
  const [projectsRef, isProjectsVisible] = useScrollAnimation();

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-40%,rgba(59,130,246,0.2),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_80%_60%,rgba(59,130,246,0.15),transparent)]"></div>

      <div className="container mx-auto px-4 relative">
        <div 
          className="text-center mb-16 relative"
          ref={titleRef as React.RefCallback<HTMLDivElement>}
        >
          {/* Glow Effect */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          
          <div className={`transform transition-all duration-1000 ${
            isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 relative inline-block">
              Nosso{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 animate-gradient-x">
                  Portfólio
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 opacity-50 animate-pulse"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto relative">
              Conheça alguns dos projetos que desenvolvemos e os resultados extraordinários que alcançamos.
              <span className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-3xl bg-gradient-to-r from-blue-500/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
            </p>
          </div>
        </div>
        
        <div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={projectsRef as RefCallback<HTMLDivElement>}
        >
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-3xl bg-gray-900/40 backdrop-blur-xl 
                border border-gray-800/50 transition-all duration-700 transform
                ${isProjectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Hover Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl opacity-0 
                group-hover:opacity-30 blur-2xl transition-opacity duration-700 z-0"></div>
              
              {/* Border Gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 
                group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Image Container */}
              <div className="aspect-video overflow-hidden relative rounded-3xl">
                {/* Overlay Gradient */}
                {/* Background Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent 
                  opacity-0 group-hover:opacity-90 transition-opacity duration-700 z-10"></div>
                
                {/* Project Image */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700" 
                />
                
                {/* Project Info Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 
                  transition-opacity duration-700 z-20 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                      {project.title}
                    </h3>
                    <span className="inline-block text-blue-300 text-sm font-semibold mb-2 
                      drop-shadow-lg bg-black/30 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <p className="text-gray-100 text-sm leading-relaxed mt-3 
                      drop-shadow-lg max-w-prose">
                      {project.description}
                    </p>
                  </div>
                </div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 
                  group-hover:opacity-100 -skew-x-45 translate-x-[-150%] group-hover:translate-x-[150%] 
                  transition-all duration-700 z-30"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-24">
          <button 
            onClick={() => navigate('/projects')} 
            className="group relative inline-flex items-center px-10 py-4 rounded-full text-lg font-semibold
              overflow-hidden transition-all duration-500 hover:scale-105"
          >
            {/* Button Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 
              animate-gradient-x transition-all duration-500 group-hover:brightness-125"></div>
            
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
              -skew-x-45 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700"></div>
            
            {/* Button Content */}
            <span className="relative z-10 text-white flex items-center gap-2">
              Ver Todos os Projetos e Detalhes
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </span>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 
              blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500 group-hover:blur-2xl"></div>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;