
import React, { useState } from 'react';
import { ArrowLeft, Play, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const Projects = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [modalType, setModalType] = useState<'demo' | null>(null);

  const projects = [{
    title: "Clínica Vida Saudável",
    category: "Website Médico",
    image: "/lovable-uploads/0ffd31a2-d30b-4f02-a1d4-e526ce46a850.png",
    description: "Site institucional para clínica médica especializada em cuidados de saúde preventiva. Desenvolvido com sistema de agendamento online integrado, área do paciente para consulta de exames e histórico médico. O design moderno e responsivo transmite confiança e profissionalismo, com cores que remetem à saúde e bem-estar. Inclui seções para especialidades médicas, equipe de profissionais e informações sobre convênios aceitos.",
    demoVideo: "https://www.youtube.com/embed/FjTXgWdlIHM"
  }, {
    title: "Bella Estética",
    category: "Sistema de Beleza",
    image: "/lovable-uploads/d27107b7-3f66-4884-a5bb-20a690ac4bfb.png",
    description: "Plataforma completa para estúdio de beleza especializado em tratamentos estéticos naturais. Sistema inclui agendamento online com calendário interativo, gestão de procedimentos especializados, histórico de tratamentos por cliente e sistema de fidelidade. O design elegante em tons pastéis reflete a proposta de beleza natural, com interface intuitiva para facilitar o uso tanto por clientes quanto pela equipe técnica.",
    demoVideo: "https://www.youtube.com/embed/nzJGk_4OTTk"
  }, {
    title: "FitLife Pro",
    category: "Plataforma Fitness",
    image: "/lovable-uploads/04503b3e-6bc5-46b2-8468-fbcbfaf48c2b.png",
    description: "Sistema web completo para personal trainer e nutricionista especializada em transformações corporais. Inclui área do aluno com planos de treino personalizados, acompanhamento nutricional, medições e evolução fotográfica. Dashboard administrativo para gestão de clientes, criação de planos alimentares e exercícios. Design motivacional com gradientes verdes que transmitem energia e vitalidade.",
    demoVideo: "https://www.youtube.com/embed/IgeLu7ykEE0"
  }, {
    title: "Clínica Bem-Estar",
    category: "Portal Médico",
    image: "/lovable-uploads/63702e99-9e59-46a1-8a18-82493eb4c29a.png",
    description: "Portal médico multiprofissional com foco em cuidado humanizado e atendimento integral. Sistema integra múltiplas especialidades médicas com agenda unificada, prontuário eletrônico compartilhado entre profissionais e sistema de teleconsulta. Interface limpa e acessível, desenvolvida pensando em diferentes faixas etárias. Inclui módulo de convênios, relatórios gerenciais e integração com laboratórios parceiros.",
    demoVideo: "https://www.youtube.com/embed/eX09X3qErE4"
  }, {
    title: "Sabor Express",
    category: "Delivery Gourmet",
    image: "/lovable-uploads/258bd9ad-7f31-40d3-b423-85f70b25220c.png",
    description: "Plataforma de delivery para restaurante especializado em comida artesanal com ingredientes frescos e preparos especiais. Sistema completo de pedidos online com personalização de pratos, rastreamento em tempo real da entrega e programa de fidelidade. Design apetitoso com cores quentes que destacam os pratos, cardápio interativo com fotos profissionais e descrições detalhadas dos ingredientes e preparo.",
    demoVideo: "https://www.youtube.com/embed/_bHutwfnws0"
  }, {
    title: "EscolaTech",
    category: "Plataforma Educacional",
    image: "/lovable-uploads/a6ba339d-e7e5-4d97-a691-9b4d12080420.png",
    description: "Plataforma educacional completa para cursos técnicos e preparatórios voltados ao mercado de tecnologia. Sistema inclui área do aluno com videoaulas, exercícios interativos, projetos práticos e certificações. Dashboard do instrutor para criação de conteúdo, acompanhamento de progresso e comunicação com alunos. Design moderno e tecnológico em tons de azul, otimizado para longas sessões de estudo.",
    demoVideo: "https://www.youtube.com/embed/xFpMZY7TxhM"
  }, {
    title: "Prof. Marina Silva - Mentoria",
    category: "Coaching Profissional",
    image: "/lovable-uploads/d24d8c2c-e259-4e3c-896b-f7d609b78446.png",
    description: "Site pessoal para mentora e coach especializada em desenvolvimento profissional e transformação de carreiras. Plataforma inclui agendamento de mentorias, área exclusiva para mentorados com materiais de apoio, exercícios de autoconhecimento e acompanhamento de metas. Design inspiracional com gradientes azuis que transmitem confiança e crescimento profissional.",
    demoVideo: "https://www.youtube.com/embed/gF1LzaIk_D4"
  }, {
    title: "Dr. Marina Silva - Coaching",
    category: "Desenvolvimento Pessoal",
    image: "/lovable-uploads/dfa09563-76d8-427b-9205-5a11291687aa.png",
    description: "Portal completo para coach certificada especializada em transformação pessoal e profissional. Sistema integra agendamento de sessões individuais e em grupo, biblioteca de recursos para desenvolvimento pessoal, ferramentas de autoavaliação e planos de ação personalizados. Interface moderna e acolhedora que combina azul e laranja para transmitir energia positiva e transformação.",
    demoVideo: "https://www.youtube.com/embed/RY4jGeOzBcA"
  }, {
    title: "Registro da Saúde - Spa & Estética",
    category: "Sistema de Beleza",
    image: "/lovable-uploads/c3b74ad6-be77-47ee-b549-69c6eadeed83.png",
    description: "Portal completo para spa e centro de estética especializado em tratamentos de beleza e bem-estar. Sistema oferece serviços de cabelo com cortes modernos e colorações, unhas com manicure e pedicure profissional, tratamentos estéticos como limpeza de pele e massagens relaxantes, além de maquiagem para eventos especiais. Design elegante em tons roxos que transmite sofisticação e cuidado personalizado.",
    demoVideo: "https://www.youtube.com/embed/YwuvuGFIGUE"
  }, {
    title: "Super Mario Bros Experience",
    category: "Website de Entretenimento",
    image: "/lovable-uploads/032224ec-fc48-4b5c-8ec2-8e3e1b0ec723.png",
    description: "Site temático dedicado ao universo Super Mario Bros com design imersivo e interativo. Plataforma apresenta informações sobre jogos, personagens e história da franquia Nintendo. Interface colorida e divertida que captura a essência dos jogos clássicos, com elementos visuais animados e navegação intuitiva. Inclui seções para notícias, galeria de imagens e área de contato para fãs da série.",
    demoVideo: "https://www.youtube.com/embed/QFhYum1gk0g"
  }, {
    title: "Cabeleireiro Premium",
    category: "Salão de Beleza",
    image: "/lovable-uploads/f6401d20-98eb-4e2b-a57a-d20e7caea4f0.png",
    description: "Website profissional para cabeleireiro especialista em transformações visuais. Sistema oferece agendamento online integrado, galeria de trabalhos realizados e informações sobre serviços especializados. Design moderno e clean que destaca a qualidade dos serviços, com foco em cortes modernos, colorações vibrantes e tratamentos personalizados. Interface otimizada para conversão com call-to-action estratégicos.",
    demoVideo: "https://www.youtube.com/embed/m7H85RrFLrg"
  }, {
    title: "Roper Imóveis",
    category: "Portal Imobiliário",
    image: "/lovable-uploads/7dbb8888-6b26-487d-96a0-90fe546c209c.png",
    description: "Plataforma imobiliária completa para busca e venda de imóveis na região. Sistema robusto com filtros avançados de pesquisa, mapas interativos, tour virtual dos imóveis e sistema de favoritos. Interface profissional e moderna que facilita a navegação entre diferentes tipos de propriedades. Inclui área administrativa para corretores, sistema de agendamento de visitas e integração com redes sociais.",
    demoVideo: "https://www.youtube.com/embed/U8U7AD91pFg"
  }, {
    title: "Dvelloper Store - Apple Watch",
    category: "E-commerce Tecnológico",
    image: "/lovable-uploads/5bbce1dc-90b0-41bf-9c09-83cc680f7e8e.png",
    description: "Loja virtual especializada em produtos Apple com foco no Apple Watch Serie 10. Plataforma apresenta o smartwatch mais avançado do mercado com design premium e funcionalidades completas. Sistema inclui catálogo detalhado de produtos, comparador de modelos, sistema de pagamento seguro e rastreamento de pedidos. Design futurista com elementos visuais sofisticados que destacam a inovação tecnológica.",
    demoVideo: "https://www.youtube.com/embed/_Gq6j4DHNZg"
  }, {
    title: "Burger House",
    category: "Restaurante Gourmet",
    image: "/lovable-uploads/04ffa2f2-bec7-4c66-a286-26e95c73dbba.png",
    description: "Website para hamburgueria artesanal especializada em sabores únicos e ingredientes premium. Plataforma apresenta cardápio completo com hambúrgueres gourmet, opções veganas, bebidas especiais e informações sobre localização. Design apetitoso com fotografias profissionais que destacam a qualidade dos ingredientes. Sistema integrado para pedidos online, delivery e reservas no restaurante.",
    demoVideo: "https://www.youtube.com/embed/9yUoYNSpTPg"
  }, {
    title: "ServiReform",
    category: "Loja Virtual",
    image: "/lovable-uploads/bb1af166-a8a0-49c1-902f-332b70497660.png",
    description: "Plataforma de serviços residenciais com sistema de orçamento integrado e atendimento emergencial 24h. Oferece ampla gama de serviços para reforma e manutenção residencial, com profissionais qualificados e materiais de qualidade. Sistema permite solicitar orçamentos online, agendar serviços e acompanhar o progresso dos trabalhos. Interface intuitiva que facilita a contratação de serviços especializados.",
    demoVideo: "https://www.youtube.com/embed/fjyG3NZcPwI"
  }, {
    title: "Dra. Ana Silva - Psicóloga",
    category: "Website",
    image: "/lovable-uploads/637f9e2d-dc10-46ce-a9d4-af95b00f1297.png",
    description: "Site institucional para psicóloga clínica com sistema de agendamento de consultas online. Plataforma apresenta informações sobre especialidades, abordagens terapêuticas e experiência profissional. Design acolhedor e profissional que transmite confiança e bem-estar. Inclui área para agendamento de consultas, informações sobre terapias oferecidas e recursos para pacientes.",
    demoVideo: "https://www.youtube.com/embed/ug9t3RwKmZc"
  }, {
    title: "Criativo Digital Freelancer",
    category: "Landing Page",
    image: "/lovable-uploads/a89c4af5-133f-4181-9967-0ca50bc89a27.png",
    description: "Landing page moderna para freelancer com foco em conversão e apresentação de serviços criativos. Design inovador que destaca habilidades em design gráfico, desenvolvimento web e marketing digital. Interface otimizada para capturar leads e converter visitantes em clientes. Inclui portfólio de trabalhos, depoimentos de clientes e formulário de contato estratégico.",
    demoVideo: "https://www.youtube.com/embed/5eQ39CoilGw"
  }, {
    title: "Alexandre Vasconcelos - Fotografia",
    category: "Website",
    image: "/lovable-uploads/4d89113d-279d-438a-b5ed-7b224c7e44ae.png",
    description: "Portfólio profissional para fotógrafo especializado em momentos únicos e eventos corporativos. Galeria elegante que apresenta trabalhos em diferentes categorias como casamentos, ensaios e fotografia corporativa. Design visual impactante que valoriza as fotografias e destaca a qualidade técnica e artística. Sistema de contato integrado para orçamentos e agendamentos.",
    demoVideo: "https://www.youtube.com/embed/eYGTfi9_pZs"
  }, {
    title: "Alex Silva - Designer",
    category: "Landing Page",
    image: "/lovable-uploads/9c0c19ef-055a-439f-ae23-7aadee49b68e.png",
    description: "Plataforma pessoal para designer gráfico com foco em experiências digitais incríveis. Apresenta portfolio diversificado com projetos de branding, design web e identidade visual. Interface moderna e criativa que reflete a expertise em design e inovação. Inclui showcases de projetos, processo criativo e formulário para novos projetos.",
    demoVideo: "https://www.youtube.com/embed/lIpqfdj89Zc"
  }, {
    title: "Estúdio Beleza",
    category: "Sistema Web",
    image: "/lovable-uploads/3cb2c538-4537-49da-bf45-c012c32e70af.png",
    description: "Sistema completo para estúdio de beleza com agendamento online e gestão de procedimentos. Plataforma integra serviços de beleza como cabelo, unhas, estética facial e corporal. Interface intuitiva para clientes agendarem serviços e para profissionais gerenciarem suas agendas. Inclui sistema de fidelidade, histórico de atendimentos e gestão financeira.",
    demoVideo: "https://www.youtube.com/embed/n4KzC_h5M2s"
  }];

  const handleOpenModal = (project: any, type: 'demo') => {
    setSelectedProject(project);
    setModalType(type);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setModalType(null);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center mb-8">
          <button onClick={() => navigate('/')} className="flex items-center text-blue-500 hover:text-blue-400 transition-colors mr-6">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar ao Início
          </button>
          <Logo size="md" />
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Todos os Nossos <span className="text-blue-500">Projetos</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore nossa coleção completa de projetos desenvolvidos com excelência e inovação. 
            Cada projeto representa nossa dedicação em criar soluções digitais que transformam negócios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900/50 rounded-lg border border-gray-800 overflow-hidden hover:border-blue-500/50 transition-all duration-300 group">
              <div className="aspect-video overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              
              <div className="p-8">
                <span className="text-blue-500 text-sm font-semibold mb-3 block uppercase tracking-wide">
                  {project.category}
                </span>
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button 
                    onClick={() => handleOpenModal(project, 'demo')} 
                    variant="outline" 
                    className="border-gray-600 hover:border-blue-500 text-gray-300 hover:text-blue-500 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-900/50 rounded-lg border border-gray-800 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Gostou do que viu?
            </h3>
            <p className="text-gray-300 mb-6">
              Entre em contato conosco e vamos transformar sua ideia em realidade digital.
            </p>
            <button onClick={() => navigate('/')} className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>

      <Dialog open={modalType === 'demo'} onOpenChange={handleCloseModal}>
        <DialogContent className="max-w-4xl bg-gray-900 border-gray-800">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white mb-4 flex items-center">
              <Play className="w-6 h-6 mr-2 text-blue-500" />
              {selectedProject?.title} - Demo ao Vivo
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe 
                src={selectedProject?.demoVideo} 
                className="w-full h-full" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
                title={`${selectedProject?.title} - Demo`} 
              />
            </div>
            <div className="text-center">
              <p className="text-gray-300">
                Assista ao funcionamento completo do projeto {selectedProject?.title}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;
