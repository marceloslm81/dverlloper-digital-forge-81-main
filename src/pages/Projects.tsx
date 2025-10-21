import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Play } from "lucide-react";
import { useScrollAnimation } from '../hooks/use-scroll-animation';
import type { RefCallback } from 'react';

type Project = {
  title: string;
  category: string;
  image: string;
  description: string;
  demoVideo?: string;
};

const projects: Project[] = [
  // Projetos originais
  {
    title: "ServiReform",
    category: "Loja Virtual",
    image: "/lovable-uploads/bb1af166-a8a0-49c1-902f-332b70497660.png",
    description:
      "Plataforma de serviços residenciais com sistema de orçamento integrado e atendimento emergencial 24h. Tecnologias: React, TypeScript, HTML e CSS.",
    demoVideo: "/lovable-uploads/ServiReform.mp4",
  },
  {
    title: "Dra. Ana Silva - Psicóloga",
    category: "Website",
    image: "/lovable-uploads/637f9e2d-dc10-46ce-a9d4-af95b00f1297.png",
    description:
      "Site institucional com agendamento online e páginas informativas de serviços. Tecnologias: React, TypeScript, HTML e CSS.",
    demoVideo: "/lovable-uploads/Dr. Ana Silva.mp4",
  },
  {
    title: "Criativo Digital Freelancer",
    category: "Landing Page",
    image: "/lovable-uploads/a89c4af5-133f-4181-9967-0ca50bc89a27.png",
    description:
      "Landing page moderna focada em conversão e apresentação de serviços. Tecnologias: HTML, CSS, JavaScript e React.",
    demoVideo: "/lovable-uploads/Digital Freelancer.mp4",
  },
  {
    title: "Alexandre Vasconcelos - Fotografia",
    category: "Website",
    image: "/lovable-uploads/4d89113d-279d-438a-b5ed-7b224c7e44ae.png",
    description:
      "Portfólio profissional com galerias e destaque para projetos fotográficos. Tecnologias: React, TypeScript, HTML e CSS.",
    demoVideo: "/lovable-uploads/Alexandre Vasconcelo.mp4",
  },
  {
    title: "Alex Silva - Designer",
    category: "Landing Page",
    image: "/lovable-uploads/9c0c19ef-055a-439f-ae23-7aadee49b68e.png",
    description:
      "Apresentação de serviços para designer com foco em experiência visual. Tecnologias: HTML, CSS, JavaScript e React.",
    demoVideo: "/lovable-uploads/Alex Silva.mp4",
  },
  {
    title: "Estúdio Beleza",
    category: "Sistema Web",
    image: "/lovable-uploads/3cb2c538-4537-49da-bf45-c012c32e70af.png",
    description:
      "Sistema web com agenda online, gestão de procedimentos e painel administrativo. Tecnologias: React, TypeScript, HTML e CSS.",
    demoVideo: "/lovable-uploads/Estudio.mp4",
  },

  // Novos projetos com imagens do public/lovable-uploads e vídeo em embed
  {
    title: "Luxe Noir - Moda Premium",
    category: "E-commerce de Moda",
    image: "/lovable-uploads/Loja Luxo.png",
    description:
      "Loja de moda premium com catálogo de peças exclusivas e experiência de compra sofisticada. Tecnologias: React, TypeScript, HTML e CSS.",
    demoVideo: "/lovable-uploads/Loja Luxo.mp4",
  },
  {
    title: "RR Delícias - Lanches Online",
    category: "Delivery de Lanches",
    image: "/lovable-uploads/Lanches.png",
    description:
      "Plataforma de pedidos online com integração ao WhatsApp e destaque para combos. Tecnologias: React, JavaScript, HTML e CSS.",
    demoVideo: "/lovable-uploads/Lanches.mp4",
  },
  {
    title: "PetCare - Pet Shop",
    category: "Serviços para Pets",
    image: "/lovable-uploads/Pets.png",
    description:
      "Website para pet shop com serviços de banho e tosa e agendamentos. Tecnologias: React, TypeScript, HTML e CSS.",
    demoVideo: "/lovable-uploads/Pets.mp4",
  },

  // Novo projeto: Yoga & Meditação
  {
    title: "Yoga & Meditação",
    category: "Bem-estar",
    image: "/lovable-uploads/Yoga.png",
    description:
      "Landing page de Yoga e Meditação com foco em bem-estar, CTA para agendar aula gratuita e seções de Benefícios, Instrutora, Modalidades e Depoimentos. Tecnologias: React, TypeScript, HTML e CSS.",
      demoVideo: "/lovable-uploads/Yoga.mp4",
    // sem vídeo local disponível
  },

  // Extras do public/lovable-uploads (sem vídeo)
  {
    title: "Projeto Mario Desentupidora",
    category: "Preview",
    image: "/lovable-uploads/032224ec-fc48-4b5c-8ec2-8e3e1b0ec723.png",
    description:
      "Protótipo visual a partir de layout estático. Tecnologias: HTML, CSS e JavaScript.",
    demoVideo: "/lovable-uploads/Mario.mp4",
  },
  {
    title: "Projeto Personal Trainer",
    category: "Preview",
    image: "/lovable-uploads/04503b3e-6bc5-46b2-8468-fbcbfaf48c2b.png",
    description:
      "Preview de interface com foco em tipografia e contraste. Tecnologias: React, HTML, CSS e JavaScript.",
    demoVideo: "/lovable-uploads/Personal Trainer.mp4",
  },
  {
    title: "Projeto Burger House",
    category: "Preview",
    image: "/lovable-uploads/04ffa2f2-bec7-4c66-a286-26e95c73dbba.png",
    description:
      "Layout de página com seções modulares e cards. Tecnologias: React, HTML, CSS e TypeScript.",
    demoVideo: "/lovable-uploads/Burger.mp4",
  },
  {
    title: "Projeto Clínica Vida Saldavel",
    category: "Preview",
    image: "/lovable-uploads/0ffd31a2-d30b-4f02-a1d4-e526ce46a850.png",
    description:
      "Composição visual com elementos de UI e ícones. Tecnologias: React,HTML, CSS e TypeScript.",
    demoVideo: "/lovable-uploads/Clinica Vida Saudável.mp4",
  },
  {
    title: "Projeto Sabor Express",
    category: "Preview",
    image: "/lovable-uploads/258bd9ad-7f31-40d3-b423-85f70b25220c.png",
    description:
      "Estrutura de seção com grid e chamadas de ação. Tecnologias: React, HTML, CSS e JavaScript.",
    demoVideo: "/lovable-uploads/Sabor Express.mp4",
  },
  {
    title: "Tênis",
    category: "Preview",
    image: "/lovable-uploads/Tenis.png",
    description:
      "Landing page para loja de tênis com vitrine de produtos e CTA. Tecnologias: React, TypeScript, HTML e CSS.",
    demoVideo: "/lovable-uploads/Tenis.mp4",
  },
  {
    title: "Doce Encanto",
    category: "Preview",
    image: "/lovable-uploads/Doce Encanto.png",
    description:
      "Site para confeitaria com destaque de produtos e pedidos online. Tecnologias: React, TypeScript, HTML e CSS.",
    demoVideo: "/lovable-uploads/Doce Encanto.mp4",
  },
  {
    title: "Projeto Dvelloper Store",
    category: "Preview",
    image: "/lovable-uploads/5bbce1dc-90b0-41bf-9c09-83cc680f7e8e.png",
    description:
      "Página de apresentação com destaque para imagem hero. Tecnologias: React, HTML, CSS e TypeScript.",
      demoVideo: "/lovable-uploads/Store.mp4",
    // sem vídeo local disponível
  },
  {
    title: "Projeto Clínica Bem-Estar",
    category: "Preview",
    image: "/lovable-uploads/63702e99-9e59-46a1-8a18-82493eb4c29a.png",
    description:
      "Template com blocos escuros e tipografia branca. Tecnologias: React, HTML, CSS e TypeScript.",
    demoVideo: "/lovable-uploads/Clinica bem estar.mp4",
  },
  {
    title: "Projeto Roper Imóveis",
    category: "Preview",
    image: "/lovable-uploads/7dbb8888-6b26-487d-96a0-90fe546c209c.png",
    description:
      "Design com cards informativos e hierarquia visual. Tecnologias: React, HTML, CSS e TypeScript.",
    demoVideo: "/lovable-uploads/Roper Imoveis.mp4",
  },
  {
    title: "Projeto EscolaTech",
    category: "Preview",
    image: "/lovable-uploads/a6ba339d-e7e5-4d97-a691-9b4d12080420.png",
    description:
      "Preview de seção com ícones e métricas. Tecnologias: React, HTML, CSS e JavaScript.",
    demoVideo: "/lovable-uploads/EscolaTech.mp4",
  },
  {
    title: "Projeto Studio Beleza",
    category: "Preview",
    image: "/lovable-uploads/c3b74ad6-be77-47ee-b549-69c6eadeed83.png",
    description:
      "Layout com grid de serviços e chamadas de ação. Tecnologias: React, HTML, CSS e JavaScript.",
    demoVideo: "/lovable-uploads/Studio Beleza.mp4",
  },
  {
    title: "Projeto Marina Silva",
    category: "Preview",
    image: "/lovable-uploads/d24d8c2c-e259-4e3c-896b-f7d609b78446.png",
    description:
      "Página escura com componente hero e métricas. Tecnologias: React, HTML, CSS e TypeScript.",
    demoVideo: "/lovable-uploads/Prof, Marina.mp4",
  },
  {
    title: "Projeto Bella Estética",
    category: "Preview",
    image: "/lovable-uploads/d27107b7-3f66-4884-a5bb-20a690ac4bfb.png",
    description:
      "Seção informativa com tipografia de alto contraste. Tecnologias: HTML, React, CSS e JavaScript.",
      demoVideo: "/lovable-uploads/Beleza.mp4",
    // sem vídeo local disponível
  },
  {
    title: "Projeto Dr. Marina Silva",
    category: "Preview",
    image: "/lovable-uploads/dfa09563-76d8-427b-9205-5a11291687aa.png",
    description:
      "Composição com cards, botões e áreas de conteúdo. Tecnologias: HTML, Recat, CSS e TypeScript.",
    demoVideo: "/lovable-uploads/Dr. marina.mp4",
  },
  {
    title: "Projeto Cabeleireiro",
    category: "Preview",
    image: "/lovable-uploads/f6401d20-98eb-4e2b-a57a-d20e7caea4f0.png",
    description:
      "Estrutura modular com blocos de texto e imagem. Tecnologias: HTML, React, CSS e JavaScript.",
    demoVideo: "/lovable-uploads/Cabeleireiro.mp4",
  },
  {
    title: "Dr. Smile - Clínica Odontológica",
    category: "Website",
    image: "/lovable-uploads/Dr. Smile.png",
    description:
      "Site institucional para clínica odontológica com destaque para serviços, profissionais e contato, incluindo formulário de agendamento e CTA para WhatsApp. Tecnologias: React, TypeScript, HTML e CSS.",
    demoVideo: "/lovable-uploads/Dr. Smile.mp4",
  },
  {
    title: "Aluguel",
    category: "Preview",
    image: "/lovable-uploads/Aluguel.png",
    description:
      "Landing page para serviço de aluguel com vitrine e CTA. Tecnologias: React, TypeScript, HTML e CSS.",
    demoVideo: "/lovable-uploads/Aluguel.mp4",
  },
  {
    title: "Carros e Imóveis",
    category: "Preview",
    image: "/lovable-uploads/Carros e Imoveis.png",
    description:
      "Site de catálogo para carros e imóveis com destaques e contato. Tecnologias: React, TypeScript, HTML e CSS.",
    demoVideo: "/lovable-uploads/Carros e Imoveis.mp4",
  },
  {
    title: "Ministério Encontro Betel",
    category: "Preview",
    image: "/lovable-uploads/Betel.png",
    description:
      "Site institucional do Ministério Encontro Betel com destaques de eventos, mensagens e contato. Tecnologias: React, TypeScript, HTML e CSS.",
    demoVideo: "/lovable-uploads/betel.mp4",
  },
  // Extras do public/lovable-uploads (sem vídeo)
  {
    title: "Projeto Marina Silva",
    category: "Preview",
    image: "/lovable-uploads/d24d8c2c-e259-4e3c-896b-f7d609b78446.png",
    description:
      "Página escura com componente hero e métricas. Tecnologias: React, HTML, CSS e TypeScript.",
    demoVideo: "/lovable-uploads/Prof, Marina.mp4",
  },
  {
    title: "Projeto Bella Estética",
    category: "Preview",
    image: "/lovable-uploads/d27107b7-3f66-4884-a5bb-20a690ac4bfb.png",
    description:
      "Seção informativa com tipografia de alto contraste. Tecnologias: HTML, React, CSS e JavaScript.",
      demoVideo: "/lovable-uploads/Beleza.mp4",
    // sem vídeo local disponível
  },
  {
    title: "Projeto Dr. Marina Silva",
    category: "Preview",
    image: "/lovable-uploads/dfa09563-76d8-427b-9205-5a11291687aa.png",
    description:
      "Composição com cards, botões e áreas de conteúdo. Tecnologias: HTML, Recat, CSS e TypeScript.",
    demoVideo: "/lovable-uploads/Dr. marina.mp4",
  },
  {
    title: "Projeto Cabeleireiro",
    category: "Preview",
    image: "/lovable-uploads/f6401d20-98eb-4e2b-a57a-d20e7caea4f0.png",
    description:
      "Estrutura modular com blocos de texto e imagem. Tecnologias: HTML, React, CSS e JavaScript.",
    demoVideo: "/lovable-uploads/Cabeleireiro.mp4",
  },
  {
    title: "Dr. Smile - Clínica Odontológica",
    category: "Website",
    image: "/lovable-uploads/Dr. Smile.png",
    description:
      "Site institucional para clínica odontológica com destaque para serviços, profissionais e contato, incluindo formulário de agendamento e CTA para WhatsApp. Tecnologias: React, TypeScript, HTML e CSS.",
    demoVideo: "/lovable-uploads/Dr. Smile.mp4",
  },
];

const Projects: React.FC = () => {
  const [openVideo, setOpenVideo] = useState<string | null>(null);
  const navigate = useNavigate();
  const [projectsRef, isProjectsVisible] = useScrollAnimation();
  const [imageSrc, setImageSrc] = useState<Record<string, string>>(
    Object.fromEntries(projects.map((p) => [p.title, p.image]))
  );

  // Ação do botão de orçamento (WhatsApp)
  const handleSolicitarOrcamento = () => {
    const message = "Olá! Gostei dos projetos e quero solicitar um orçamento.";
    const whatsappUrl = `https://wa.me/5511943219223?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-40%,rgba(59,130,246,0.2),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_80%_60%,rgba(59,130,246,0.15),transparent)]"></div>

      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          {/* Top bar com link voltar e logo */}
          <div className="flex items-center gap-6 mb-10 animate-fade-in">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="group flex items-center gap-2 relative px-6 py-2 rounded-full
                bg-blue-500/10 hover:bg-blue-500/20 transition-all duration-300"
            >
              <ArrowLeft className="h-5 w-5 text-blue-400 group-hover:-translate-x-1 transition-transform" />
              <span className="text-blue-400 font-medium">Voltar ao Início</span>
              <div className="absolute inset-0 rounded-full bg-blue-400/10 blur-sm group-hover:opacity-100 opacity-0 transition-opacity"></div>
            </button>
            <img
              src="/logo.png"
              alt="Dveloper"
              className="h-8 w-auto"
              loading="lazy"
            />
          </div>

          {/* Título central e descrição */}
          <div className="text-center mb-16 relative">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 relative inline-block animate-fade-in" style={{ animationDelay: '200ms' }}>
              Todos os Nossos{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 animate-gradient-x">
                  Projetos
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 opacity-50 animate-pulse"></span>
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto relative animate-fade-in" style={{ animationDelay: '400ms' }}>
              Explore nossa coleção completa de projetos desenvolvidos com excelência e
              inovação. Cada projeto representa nossa dedicação em criar soluções digitais
              que transformam negócios.
              <span className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-3xl bg-gradient-to-r from-blue-500/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
            </p>
          </div>

          {/* Grid de cards */}
          <div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            ref={projectsRef as RefCallback<HTMLDivElement>}
          >
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`group relative overflow-hidden rounded-3xl bg-gray-900/40 backdrop-blur-xl 
                  border border-gray-800/50 transition-all duration-700 transform
                  ${isProjectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Hover Effects */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl opacity-0 
                  group-hover:opacity-30 blur-2xl transition-opacity duration-700 z-0"></div>
                
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden rounded-t-3xl">
                  {/* Background Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent 
                    opacity-0 group-hover:opacity-90 transition-opacity duration-700 z-10"></div>
                  
                  {/* Project Image */}
                  <img
                    src={encodeURI(project.image)}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                  
                  {/* Image Overlay Info */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 
                    transition-all duration-700 z-20 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <span className="inline-block text-blue-300 text-sm font-semibold mb-2 
                        drop-shadow-lg bg-black/30 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white drop-shadow-lg">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 
                    group-hover:opacity-100 -skew-x-45 translate-x-[-150%] group-hover:translate-x-[150%] 
                    transition-all duration-700 z-30"></div>
                </div>

                {/* Project Info */}
                <div className="p-8 md:p-10 relative">
                  <div className="text-sm font-semibold tracking-wide text-blue-300 uppercase">
                    {project.category}
                  </div>
                  <h3 className="mt-2 text-2xl md:text-3xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-base md:text-lg text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Demo Button */}
                  <div className="mt-6">
                    {project.demoVideo ? (
                      <button
                        type="button"
                        onClick={() => setOpenVideo(project.demoVideo!)}
                        className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full 
                          overflow-hidden transition-all duration-500"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 
                          animate-gradient-x transition-all duration-500 group-hover:brightness-125"></div>
                        
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                          -skew-x-45 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700"></div>
                        
                        <Play className="relative z-10 w-4 h-4 text-white" />
                        <span className="relative z-10 text-white text-sm font-semibold">Live Demo</span>
                        
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 
                          blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500"></div>
                      </button>
                    ) : (
                      <button
                        type="button"
                        disabled
                        className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full 
                          bg-blue-900/40 border border-blue-800/50 backdrop-blur-sm"
                      >
                        <span className="h-2 w-2 rounded-full bg-blue-400/50 animate-pulse"></span>
                        <span className="text-sm font-semibold text-blue-300/70">Live Demo</span>
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Rodapé CTA */}
          <div className="mt-24 relative animate-fade-in" style={{ animationDelay: '1200ms' }}>
            <div className="relative group">
              {/* Glow Effects */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-25 
                group-hover:opacity-50 blur-xl transition-all duration-700"></div>
              
              <div className="relative mx-auto max-w-7xl rounded-3xl bg-gray-900/40 backdrop-blur-xl 
                border border-gray-800/50 px-6 py-12 sm:px-10 text-center overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Floating Particles */}
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`
                      }}
                    />
                  ))}
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h2 className="text-4xl md:text-5xl font-bold relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient-x">
                      Gostou do que viu?
                    </span>
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 
                      opacity-50 animate-pulse"></span>
                  </h2>
                  
                  <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
                    Entre em contato conosco e vamos transformar sua ideia em realidade digital.
                  </p>
                  
                  <button
                    type="button"
                    onClick={handleSolicitarOrcamento}
                    className="group relative inline-flex items-center mt-8 px-10 py-4 rounded-full text-lg font-semibold
                      overflow-hidden transition-all duration-500 hover:scale-105"
                  >
                    {/* Button Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 
                      bg-[length:200%_100%] animate-gradient-x transition-all duration-500 group-hover:brightness-125"></div>
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                      -skew-x-45 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700"></div>
                    
                    {/* Button Content */}
                    <span className="relative z-10 text-white flex items-center gap-2">
                      Solicitar Orçamento
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                    
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 
                      blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500 group-hover:blur-2xl"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de vídeo */}
      {openVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>
          
          {/* Modal Content */}
          <div className="relative w-full max-w-4xl animate-scale-up">
            {/* Close Button */}
            <button
              aria-label="Fechar"
              onClick={() => setOpenVideo(null)}
              className="group absolute -top-12 right-0 inline-flex items-center gap-2 px-4 py-2 rounded-full
                bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20
                transition-all duration-300 hover:scale-105"
            >
              <span className="text-sm font-medium text-white/90">Fechar</span>
              <span className="text-lg leading-none transform group-hover:rotate-90 transition-transform">×</span>
            </button>
            
            {/* Video Container */}
            <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-white/10 bg-black">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 opacity-30 blur-xl"></div>
              
              <iframe
                src={`${openVideo}?autoplay=1&rel=0`}
                title="Demo do Projeto"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="relative z-10 h-full w-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
