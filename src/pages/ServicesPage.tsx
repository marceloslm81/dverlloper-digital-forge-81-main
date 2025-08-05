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
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center mb-8">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-blue-500 hover:text-blue-400 transition-colors mr-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar ao Início
          </button>
          <Logo size="md" />
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Todos os Nossos <span className="text-blue-500">Serviços</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore nossa gama completa de serviços digitais. Cada solução é desenvolvida com excelência técnica e foco nos resultados do seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 rounded-lg border border-gray-800 overflow-hidden hover:border-blue-500/50 transition-all duration-300 group p-8"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-500 transition-colors">
                {service.title}
              </h2>
              
              <p className="text-blue-500 text-sm font-semibold mb-4 uppercase tracking-wide">
                {service.description}
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-8">
                {service.fullDescription}
              </p>
              
              <div className="flex flex-wrap gap-3">
                <button 
                  onClick={() => handleRequestQuote(service.title)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
                >
                  Solicitar Orçamento
                </button>
                <button 
                  onClick={() => handleLearnMore(service.title)}
                  className="border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-blue-500 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300"
                >
                  Saiba Mais
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-900/50 rounded-lg border border-gray-800 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Precisa de uma solução personalizada?
            </h3>
            <p className="text-gray-300 mb-6">
              Entre em contato conosco e vamos desenvolver a solução perfeita para o seu negócio.
            </p>
            <button 
              onClick={() => navigate('/')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Falar Conosco
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
