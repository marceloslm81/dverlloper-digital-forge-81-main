// Top-level imports
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Play } from "lucide-react";

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
    <div className="min-h-screen bg-black text-white">
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          {/* Top bar com link voltar e logo */}
          <div className="flex items-center gap-6 mb-10">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar ao Início
            </button>
            <img
              src="/logo.png"
              alt="Dveloper"
              className="h-8 w-auto"
              loading="lazy"
            />
          </div>

          {/* Título central e descrição como na imagem */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Todos os Nossos <span className="text-blue-600">Projetos</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-6">
              Explore nossa coleção completa de projetos desenvolvidos com excelência e
              inovação. Cada projeto representa nossa dedicação em criar soluções digitais
              que transformam negócios.
            </p>
          </div>

          {/* Grid de cards (mantido) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group relative overflow-hidden rounded-2xl bg-blue-900 border border-blue-800 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                  <img
                    src={encodeURI(project.image)}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-900/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-sm text-blue-300 uppercase tracking-wide">{project.category}</span>
                    <h3 className="mt-1 text-lg font-semibold text-white">{project.title}</h3>
                  </div>
                </div>

                <div className="p-8 md:p-10 bg-blue-900 border-t border-blue-800 shadow-inner">
                  <div className="text-sm font-semibold tracking-wide text-blue-300 uppercase">
                    {project.category}
                  </div>
                  <h3 className="mt-2 text-2xl md:text-3xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-base md:text-lg text-blue-100/90 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Botão Live Demo sempre visível: habilitado quando há demoVideo, desabilitado caso contrário */}
                  <div className="mt-6">
                    {project.demoVideo ? (
                      <button
                        type="button"
                        onClick={() => setOpenVideo(project.demoVideo!)}
                        className="inline-flex items-center gap-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                      >
                        <Play className="h-4 w-4" />
                        Live Demo
                      </button>
                    ) : (
                      <button
                        type="button"
                        disabled
                        className="inline-flex items-center gap-2 rounded-full bg-blue-800/40 border border-blue-700/50 px-5 py-2.5 text-sm font-semibold text-blue-100/70 cursor-not-allowed"
                      >
                        <span className="inline-block h-2 w-2 rounded-full bg-blue-200/70" />
                        Live Demo
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Rodapé CTA */}
          <div className="mt-16">
            <div className="mx-auto max-w-7xl rounded-2xl bg-gray-900/80 border border-white/10 px-6 py-12 sm:px-10 text-center shadow-inner">
              <h2 className="text-4xl md:text-3xl font-bold text-white">Gostou do que viu?</h2>
              <p className="mt-4 text-gray-300">
                Entre em contato conosco e vamos transformar sua ideia em realidade digital.
              </p>
              <button
                type="button"
                onClick={handleSolicitarOrcamento}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de vídeo (mantido) */}
      {openVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl">
            <button
              aria-label="Fechar"
              onClick={() => setOpenVideo(null)}
              className="absolute -top-10 right-0 rounded-md border border-white/20 bg-white/10 px-3 py-1 text-sm hover:bg-white/20 transition-colors"
            >
              Fechar
            </button>
            <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black">
              <iframe
                src={`${openVideo}?autoplay=1&rel=0`}
                title="Demo do Projeto"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
