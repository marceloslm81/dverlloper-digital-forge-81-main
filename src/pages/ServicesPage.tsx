import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';
import { useToast } from '@/hooks/use-toast';

const ServicesPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleRequestQuote = (serviceName: string) => {
    const message = `Olá! Gostaria de solicitar um orçamento para o serviço: ${serviceName}`;
    const whatsappUrl = `https://wa.me/5511943219223?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será direcionado para nossa conversa no WhatsApp para solicitar o orçamento.",
    });
  };

  const handleLearnMore = (serviceName: string) => {
    toast({
      title: "Mais informações",
      description: `Para saber mais detalhes sobre ${serviceName}, entre em contato conosco pelo WhatsApp.`,
    });
    
    setTimeout(() => {
      const message = `Olá! Gostaria de saber mais detalhes sobre o serviço: ${serviceName}`;
      const whatsappUrl = `https://wa.me/5511943219223?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }, 2000);
  };

  const services = [
    {
      title: "Desenvolvimento de Sites",
      icon: "🌐",
      description: "Sites institucionais, corporativos e portfolios com design responsivo e otimizado para SEO.",
      fullDescription: "Criamos sites modernos e responsivos que se adaptam perfeitamente a qualquer dispositivo. Nossos sites são otimizados para mecanismos de busca (SEO), garantindo maior visibilidade online. Incluímos sistema de gerenciamento de conteúdo, integração com redes sociais, formulários de contato avançados e análise de métricas. Todos os sites são desenvolvidos com as melhores práticas de performance e segurança."
    },
    {
      title: "Sistemas Personalizados",
      icon: "⚙️",
      description: "Desenvolvimento de sistemas sob medida para automatizar processos e aumentar a produtividade.",
      fullDescription: "Desenvolvemos sistemas web personalizados que automatizam processos específicos do seu negócio. Criamos dashboards intuitivos, relatórios automatizados, controle de usuários e permissões, integração com APIs externas e banco de dados robusto. Nossos sistemas são escaláveis e seguros, projetados para crescer junto com sua empresa."
    },
    {
      title: "Landing Pages",
      icon: "🎯",
      description: "Páginas de conversão otimizadas para campanhas de marketing e geração de leads.",
      fullDescription: "Criamos landing pages altamente otimizadas para conversão, focadas em transformar visitantes em clientes. Incluímos testes A/B, formulários inteligentes, integração com ferramentas de marketing, análise de comportamento do usuário e design persuasivo. Cada página é estrategicamente planejada para maximizar suas taxas de conversão e ROI das campanhas."
    },
    {
      title: "E-commerce",
      icon: "🛒",
      description: "Lojas virtuais completas com integração de pagamentos e gestão de produtos.",
      fullDescription: "Desenvolvemos lojas virtuais completas com carrinho de compras avançado, múltiplos métodos de pagamento, gestão de estoque em tempo real, painel administrativo completo, sistema de cupons e promoções, integração com correios para cálculo de frete e relatórios de vendas detalhados. Todas as lojas são otimizadas para conversão e segurança nas transações."
    },
    {
      title: "Identidade Visual",
      icon: "🎨",
      description: "Criação de logotipos, identidade visual e material gráfico para sua marca.",
      fullDescription: "Criamos identidades visuais únicas e memoráveis que representam perfeitamente sua marca. Nosso serviço inclui desenvolvimento de logotipo, paleta de cores, tipografia, manual da marca, aplicações em diversos materiais, cartões de visita, papelaria corporativa e materiais para redes sociais. Cada projeto é desenvolvido com base em pesquisa de mercado e análise do público-alvo."
    },
    {
      title: "Integrações",
      icon: "🔗",
      description: "APIs, bancos de dados e integração com plataformas terceiras para expandir funcionalidades.",
      fullDescription: "Realizamos integrações complexas entre diferentes sistemas e plataformas. Conectamos seu site ou sistema com CRMs, ERPs, gateways de pagamento, redes sociais, serviços de email marketing, plataformas de análise e muito mais. Desenvolvemos APIs personalizadas e garantimos a sincronização segura e eficiente de dados entre todas as plataformas conectadas."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-40%,rgba(59,130,246,0.3),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_70%_60%,rgba(147,51,234,0.3),transparent)]"></div>

      <div className="container mx-auto px-4 py-12 relative">
        <div className="flex items-center mb-8 animate-fade-in">
          <button 
            onClick={() => navigate('/')}
            className="group flex items-center gap-2 relative px-6 py-2 rounded-full
              bg-blue-500/10 hover:bg-blue-500/20 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 text-blue-400 group-hover:-translate-x-1 transition-transform" />
            <span className="text-blue-400 font-medium">Voltar ao Início</span>
            <div className="absolute inset-0 rounded-full bg-blue-400/10 blur-sm group-hover:opacity-100 opacity-0 transition-opacity"></div>
          </button>
          <div className="ml-6">
            <Logo size="md" />
          </div>
        </div>

        <div className="text-center mb-16 relative">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 relative inline-block animate-fade-in" style={{ animationDelay: '200ms' }}>
            Todos os Nossos{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 animate-gradient-x">
                Serviços
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-50 animate-pulse"></span>
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto relative animate-fade-in" style={{ animationDelay: '400ms' }}>
            Explore nossa gama completa de serviços digitais. Cada solução é desenvolvida com excelência técnica e foco nos resultados do seu negócio.
            <span className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-900/40 backdrop-blur-xl p-8 rounded-3xl border border-gray-800/50 
                overflow-hidden group relative animate-fade-in"
              style={{ animationDelay: `${600 + index * 150}ms` }}
            >
              {/* Card Background Effects */}
              <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent 
                skew-x-[-45deg] group-hover:animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 
                group-hover:opacity-100 rounded-3xl transition-all duration-700 blur-xl" />
              
              {/* Floating Particles */}
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

              {/* Content */}
              <div className="relative">
                <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-12 
                  transition-all duration-700 animate-bounce-slow">
                  {service.icon}
                </div>
                
                <h2 className="text-2xl font-bold mb-4 relative inline-block">
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r 
                    from-white to-white group-hover:from-blue-400 group-hover:to-purple-400 
                    transition-all duration-500">
                    {service.title}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r 
                    from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 
                    transition-transform duration-500"></span>
                </h2>
                
                <p className="text-blue-400 text-sm font-semibold mb-4 uppercase tracking-wide 
                  transition-all duration-300 group-hover:text-blue-300">
                  {service.description}
                </p>
                
                <p className="text-gray-300 leading-relaxed mb-8 group-hover:text-gray-200 
                  transition-colors duration-300">
                  {service.fullDescription}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <button 
                    onClick={() => handleRequestQuote(service.title)}
                    className="group relative inline-flex items-center px-6 py-3 rounded-full 
                      text-sm font-semibold overflow-hidden transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 
                      transition-all duration-300 group-hover:brightness-125"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                      -skew-x-45 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700"></div>
                    <span className="relative z-10 text-white">Solicitar Orçamento</span>
                  </button>
                  
                  <button 
                    onClick={() => handleLearnMore(service.title)}
                    className="group relative px-6 py-3 rounded-full text-sm font-semibold 
                      border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <span className="relative z-10 text-gray-300 group-hover:text-blue-400 transition-colors">
                      Saiba Mais
                    </span>
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 bg-blue-500/10 blur-sm"></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-24 relative animate-fade-in" style={{ animationDelay: '1200ms' }}>
          <div className="relative group">
            {/* Glow Effects */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-25 
              group-hover:opacity-50 blur-xl transition-all duration-700"></div>
            
            <div className="relative bg-gray-900/40 backdrop-blur-xl rounded-3xl border border-gray-800/50 p-12 overflow-hidden">
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
                <h3 className="text-3xl font-bold mb-4 relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient-x">
                    Precisa de uma solução personalizada?
                  </span>
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 
                    opacity-50 animate-pulse"></span>
                </h3>
                
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Entre em contato conosco e vamos desenvolver a solução perfeita para o seu negócio.
                </p>
                
                <button 
                  onClick={() => navigate('/')}
                  className="group relative inline-flex items-center px-10 py-4 rounded-full text-lg font-semibold
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
                    Falar Conosco
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
    </div>
  );
};

export default ServicesPage;
