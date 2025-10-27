import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/use-scroll-animation';
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import type { RefCallback } from 'react';

type Project = {
  title: string;
  category: string;
  image: string;
  description: string;
};

const AnimatedPortfolio = ({ 
  projects, 
  autoplay = true 
}: { 
  projects: Project[]; 
  autoplay?: boolean; 
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="max-w-sm md:max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-20">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {projects.map((project, index) => (
                <motion.div
                  key={project.image}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : projects.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center border border-gray-800/50"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              {projects[active].title}
            </h3>
            <p className="text-sm text-blue-400 font-semibold mb-4">
              {projects[active].category}
            </p>
            <motion.p className="text-lg text-gray-300 mt-8 leading-relaxed">
              {projects[active].description.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-10 w-10 rounded-full bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 flex items-center justify-center group/button transition-all duration-300"
            >
              <IconArrowLeft className="h-5 w-5 text-blue-400 group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-10 w-10 rounded-full bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 flex items-center justify-center group/button transition-all duration-300"
            >
              <IconArrowRight className="h-5 w-5 text-blue-400 group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

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
        
        {/* Novo Componente Animado */}
        <AnimatedPortfolio projects={projects} autoplay={true} />
        
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