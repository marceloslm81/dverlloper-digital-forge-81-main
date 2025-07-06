import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  return <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Nosso <span className="text-blue-500">Portfólio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos e os resultados extraordinários que alcançamos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <div key={index} className="group relative overflow-hidden rounded-lg bg-black/50 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>)}
        </div>
        
        <div className="text-center mt-16">
          <button onClick={() => navigate('/projects')} className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">Ver Todos os Projetos e Detalhes</button>
        </div>
      </div>
    </section>;
};
export default Portfolio;