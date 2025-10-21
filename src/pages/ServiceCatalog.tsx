import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const ServiceCatalog = () => {
  const navigate = useNavigate();

  const [expandedService, setExpandedService] = React.useState<string | null>(null);

  const handleRequestQuote = (serviceName: string) => {
    const message = `Olá! Gostaria de solicitar um orçamento para o serviço: ${serviceName}`;
    const whatsappUrl = `https://wa.me/5511943219223?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  
  const toggleExpanded = (serviceTitle: string) => {
    if (expandedService === serviceTitle) {
      setExpandedService(null);
    } else {
      setExpandedService(serviceTitle);
    }
  };

  // Serviços de Desenvolvimento Front-End
  const frontEndServices = [
    {
      title: "Landing Page Simples",
      description: "1 a 3 seções, design limpo, CTA, formulário básico, responsivo",
      fullDescription: "Uma landing page eficiente e objetiva para converter visitantes em leads. Desenvolvemos uma página otimizada com design moderno e limpo, contendo até 3 seções estratégicas, formulário de captura de leads, botões de call-to-action persuasivos e totalmente responsiva para todos os dispositivos. Ideal para campanhas de marketing, lançamentos ou captura de leads para um produto ou serviço específico.",
      priceRange: "600 – 1.000",
      icon: "🌐"
    },
    {
      title: "Portfólio Pessoal/Profissional",
      description: "Páginas: Sobre, Projetos, Contato, galeria e redes sociais",
      fullDescription: "Destaque-se no mercado com um portfólio profissional que impressiona à primeira vista. Desenvolvemos um site personalizado que reflete sua identidade e valoriza seu trabalho, com páginas estratégicas como Sobre (sua história e diferenciais), Projetos (galeria interativa com filtros), Contato (formulário otimizado para conversão), integração com redes sociais e recursos de SEO para ser encontrado por recrutadores e clientes. Design exclusivo e responsivo que funciona perfeitamente em qualquer dispositivo.",
      priceRange: "1.000 – 1.500",
      icon: "👨‍💼"
    },
    {
      title: "Site Institucional",
      description: "3 a 6 páginas, SEO básico, mapa do Google, formulário e blog simples",
      fullDescription: "Estabeleça uma presença digital profissional e confiável para sua empresa. Desenvolvemos um site institucional completo com 3 a 6 páginas estratégicas (Home, Sobre, Serviços/Produtos, Blog, Contato), otimização SEO para melhor posicionamento nos buscadores, integração com Google Maps e ferramentas Google, formulário de contato com anti-spam e blog simples para estratégia de conteúdo. Design moderno, responsivo e alinhado com sua identidade visual, transmitindo credibilidade e profissionalismo aos seus clientes.",
      priceRange: "2.000 – 3.500",
      icon: "🏢"
    },
    {
      title: "Landing Page Avançada",
      description: "Até 6 seções, design estratégico, integração CRM/e-mail, animações",
      fullDescription: "Maximize suas conversões com uma landing page avançada de alto impacto. Desenvolvemos uma página estratégica com até 6 seções cuidadosamente planejadas, design premium com elementos visuais persuasivos, animações e efeitos que guiam a jornada do usuário, integração direta com seu CRM ou ferramenta de e-mail marketing, A/B testing para otimização contínua e pixel de rastreamento para remarketing. Ideal para campanhas de alto valor, lançamentos importantes ou produtos premium que exigem uma apresentação sofisticada.",
      priceRange: "2.500 – 5.000",
      icon: "🚀"
    },
    {
      title: "E-commerce Básico",
      description: "Até 30 produtos, checkout, pagamentos, estoque simples",
      fullDescription: "Comece a vender online com uma loja virtual profissional e funcional. Desenvolvemos um e-commerce completo para até 30 produtos, com catálogo organizado por categorias, sistema de busca intuitivo, carrinho de compras otimizado, checkout simplificado para reduzir abandono, integração com as principais formas de pagamento (cartão, boleto, Pix), controle básico de estoque, painel administrativo intuitivo e relatórios de vendas. Totalmente responsivo e otimizado para conversão, permitindo que você comece a vender imediatamente.",
      priceRange: "3.000 – 7.000",
      icon: "🛒"
    },
    {
      title: "Dashboard/Admin Front-End",
      description: "Painéis com gráficos, filtros e autenticação de usuários",
      fullDescription: "Transforme dados em insights acionáveis com um dashboard administrativo personalizado. Desenvolvemos uma interface administrativa completa com painéis visuais intuitivos, gráficos interativos e dinâmicos que atualizam em tempo real, filtros avançados para análise detalhada, sistema de autenticação seguro com diferentes níveis de permissão, exportação de relatórios em múltiplos formatos e design responsivo para acesso em qualquer dispositivo. Ideal para gestores que precisam visualizar métricas importantes e tomar decisões baseadas em dados.",
      priceRange: "6.000 – 10.000",
      icon: "📊"
    },
    {
      title: "Sistema Web Completo",
      description: "Login, áreas restritas, integração com APIs, suporte contínuo",
      fullDescription: "Automatize processos complexos e centralize operações com um sistema web personalizado para seu negócio. Desenvolvemos uma solução completa com sistema de login seguro e recuperação de senha, áreas restritas com diferentes níveis de acesso, integração com múltiplas APIs e serviços externos, banco de dados otimizado, processamento em tempo real, backup automático, documentação técnica completa e suporte contínuo. Ideal para empresas que precisam de uma solução digital sob medida para seus processos específicos, aumentando eficiência e reduzindo custos operacionais.",
      priceRange: "10.000 – 20.000+",
      icon: "⚙️"
    }
  ];

  // Serviços de Automações
  const automationServices = [
    {
      title: "Automação Simples (WhatsApp/E-mail)",
      description: "Mensagens automáticas, respostas rápidas, leads via e-mail",
      fullDescription: "Economize tempo e melhore seu atendimento com respostas automáticas inteligentes. Implementamos um sistema que responde instantaneamente às mensagens de WhatsApp e e-mails com informações personalizadas, captura leads automaticamente e os organiza para follow-up. Ideal para pequenas empresas que desejam melhorar o tempo de resposta e nunca mais perder uma oportunidade de negócio.",
      priceRange: "300 – 700",
      icon: "📱"
    },
    {
      title: "Integração de Formulários",
      description: "Conexão com planilhas/CRM, envio automático de notificações",
      fullDescription: "Capture e organize leads sem esforço manual. Criamos integrações que conectam seus formulários diretamente com planilhas Google, Excel online ou seu CRM preferido. O sistema envia notificações instantâneas para sua equipe quando novos leads chegam e pode disparar e-mails de boas-vindas personalizados. Elimine a digitação manual e reduza erros, garantindo que nenhum contato seja perdido.",
      priceRange: "500 – 1.200",
      icon: "📝"
    },
    {
      title: "Automação de Redes Sociais",
      description: "Agendamento, integração com Instagram/Facebook/LinkedIn",
      fullDescription: "Mantenha sua presença digital ativa sem dedicar horas diárias. Implementamos um sistema completo de gerenciamento de redes sociais que permite agendar publicações com antecedência, repostar conteúdo automaticamente, monitorar menções à sua marca e gerar relatórios de performance. Integração com Instagram, Facebook, LinkedIn e outras plataformas para maximizar seu alcance com mínimo esforço.",
      priceRange: "800 – 2.000",
      icon: "📸"
    },
    {
      title: "CRM Automatizado",
      description: "Organização automática de clientes e leads, alertas, relatórios",
      fullDescription: "Transforme seu relacionamento com clientes com um CRM que trabalha por você. Desenvolvemos um sistema que categoriza automaticamente seus leads por interesse e potencial, envia lembretes para follow-up no momento certo, gera relatórios detalhados de conversão e mantém todo o histórico de interações. Aumente suas taxas de conversão e fidelização com um acompanhamento personalizado e consistente.",
      priceRange: "1.500 – 3.000",
      icon: "👥"
    },
    {
      title: "Fluxos Avançados (n8n/Make/Zapier)",
      description: "Workflows personalizados, integração entre plataformas",
      fullDescription: "Conecte todas as suas ferramentas em um ecossistema digital integrado. Criamos workflows automatizados complexos usando n8n, Make ou Zapier que sincronizam dados entre diferentes plataformas, executam ações condicionais baseadas em gatilhos específicos e eliminam tarefas repetitivas. Ideal para empresas que utilizam múltiplas ferramentas e desejam um fluxo de trabalho contínuo e eficiente.",
      priceRange: "2.000 – 5.000",
      icon: "🔄"
    },
    {
      title: "E-commerce Automatizado",
      description: "Pagamentos, faturas, estoque e notificações automáticas",
      fullDescription: "Gerencie sua loja virtual com eficiência máxima e mínimo esforço. Implementamos um sistema completo que processa pagamentos automaticamente, gera faturas e notas fiscais, atualiza o estoque em tempo real, envia notificações de status do pedido para clientes e alerta sobre produtos com baixo estoque. Inclui relatórios de vendas e integração com plataformas de logística para uma operação verdadeiramente automatizada.",
      priceRange: "4.000 – 8.000",
      icon: "🛍️"
    },
    {
      title: "Automação Completa com IA",
      description: "Chatbots inteligentes, relatórios automáticos, integração CRM",
      fullDescription: "Leve seu negócio para o próximo nível com inteligência artificial aplicada. Desenvolvemos uma solução completa com chatbots que aprendem com cada interação, sistemas preditivos que antecipam comportamentos de clientes, geração automática de relatórios analíticos e integração profunda com seu CRM. Inclui dashboards personalizados e alertas inteligentes baseados em padrões identificados pela IA, permitindo decisões estratégicas baseadas em dados.",
      priceRange: "6.000 – 15.000+",
      icon: "🤖"
    }
  ];

  // Serviços Extras
  const extraServices = [
    {
      title: "Modernização de Sites",
      description: "Atualização visual e técnica de sites existentes, melhorias de performance e responsividade",
      fullDescription: "Revitalize seu site existente sem precisar reconstruí-lo do zero. Nosso serviço de modernização atualiza o design visual para tendências atuais, otimiza o código para melhor performance, implementa responsividade completa para todos os dispositivos e atualiza plugins e frameworks para versões mais seguras. Ideal para empresas que já possuem um site, mas precisam melhorar a experiência do usuário e os resultados de conversão.",
      priceRange: "1.500 – 5.000",
      icon: "✨"
    },
    {
      title: "Plano Mensal Básico",
      description: "Manutenção preventiva, atualizações de segurança, backup semanal, 2h de suporte mensal",
      fullDescription: "Mantenha seu site seguro e funcionando perfeitamente com nosso plano de manutenção básico. Inclui verificações semanais de segurança, atualizações de plugins e sistemas, backup semanal completo, monitoramento de uptime 24/7 e 2 horas mensais de suporte técnico para pequenas alterações ou dúvidas. A tranquilidade de saber que seu site está protegido e sempre atualizado por um custo mensal acessível.",
      priceRange: "300 – 500/mês",
      icon: "🔧"
    },
    {
      title: "Plano Mensal Avançado",
      description: "Manutenção completa, atualizações de conteúdo, otimização SEO, backup diário, 5h de suporte mensal",
      fullDescription: "Maximize o desempenho e segurança do seu site com nosso plano premium. Além de todas as vantagens do plano básico, inclui atualizações de conteúdo ilimitadas, otimização SEO mensal com relatórios de posicionamento, backups diários com retenção de 30 dias, monitoramento avançado de performance e 5 horas mensais de suporte técnico prioritário. Ideal para sites de e-commerce ou portais que exigem alta disponibilidade e atualizações frequentes.",
      priceRange: "800 – 1.200/mês",
      icon: "🛡️"
    },
    {
      title: "Consultoria UX/UI",
      description: "Análise de usabilidade, recomendações de melhorias, wireframes e protótipos",
      fullDescription: "Transforme a experiência dos usuários com seu produto digital através de nossa consultoria especializada. Realizamos análise completa de usabilidade com testes reais, mapeamento da jornada do usuário, identificação de pontos de atrito e oportunidades de melhoria. Entregamos relatório detalhado com recomendações, wireframes interativos e protótipos de alta fidelidade para implementação. Ideal para empresas que desejam aumentar conversões e satisfação dos usuários.",
      priceRange: "2.000 – 4.000",
      icon: "🎨"
    },
    {
      title: "Otimização de Performance",
      description: "Análise e melhorias de velocidade, SEO técnico, otimização de imagens e código",
      fullDescription: "Acelere seu site e melhore seu posicionamento nos buscadores com nossa otimização técnica especializada. Realizamos análise completa de performance, implementamos melhorias de velocidade de carregamento, otimizamos imagens e recursos, minificamos código, configuramos cache avançado e realizamos ajustes técnicos de SEO. Inclui relatório comparativo antes/depois com métricas do Google PageSpeed e Core Web Vitals. Ideal para sites que sofrem com baixa performance ou precisam melhorar o ranqueamento.",
      priceRange: "1.000 – 2.500",
      icon: "⚡"
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
            Catálogo de{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 animate-gradient-x">
                Serviços
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-50 animate-pulse"></span>
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto relative animate-fade-in" style={{ animationDelay: '400ms' }}>
            Explore nossa gama completa de serviços digitais com preços transparentes. 
            Cada solução é desenvolvida com excelência técnica e foco nos resultados do seu negócio.
          </p>
        </div>

        {/* Serviços de Desenvolvimento Front-End */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Serviços de Desenvolvimento Front-End
            </span>
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frontEndServices.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-900/40 backdrop-blur-xl p-6 rounded-xl border border-gray-800/50 
                  overflow-hidden group relative hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent 
                  skew-x-[-45deg] group-hover:animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                
                {expandedService === service.title ? (
                  <div className="mb-4">
                    <p className="text-gray-200 mb-4 text-sm">{service.fullDescription}</p>
                    <button 
                      onClick={() => toggleExpanded(service.title)}
                      className="text-blue-400 hover:text-blue-300 text-xs font-medium flex items-center"
                    >
                      Ver menos <FaChevronUp className="ml-1" />
                    </button>
                  </div>
                ) : (
                  <div className="mb-4">
                    <p className="text-gray-300 mb-2 text-sm">{service.description}</p>
                    <button 
                      onClick={() => toggleExpanded(service.title)}
                      className="text-blue-400 hover:text-blue-300 text-xs font-medium flex items-center"
                    >
                      Ver mais detalhes <FaChevronDown className="ml-1" />
                    </button>
                  </div>
                )}
                
                <div className="flex justify-between items-center mt-2">
                  <span className="text-blue-400 font-bold">R$ {service.priceRange}</span>
                  <button 
                    onClick={() => handleRequestQuote(service.title)}
                    className="text-sm px-3 py-1 bg-blue-600/30 hover:bg-blue-600/50 rounded-full text-blue-300 transition-colors"
                  >
                    Solicitar Orçamento
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Serviços de Automações */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Serviços de Automações
            </span>
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationServices.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-900/40 backdrop-blur-xl p-6 rounded-xl border border-gray-800/50 
                  overflow-hidden group relative hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent 
                  skew-x-[-45deg] group-hover:animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                
                {expandedService === service.title ? (
                  <div className="mb-4">
                    <p className="text-gray-200 mb-4 text-sm">{service.fullDescription}</p>
                    <button 
                      onClick={() => toggleExpanded(service.title)}
                      className="text-purple-400 hover:text-purple-300 text-xs font-medium flex items-center"
                    >
                      Ver menos <FaChevronUp className="ml-1" />
                    </button>
                  </div>
                ) : (
                  <div className="mb-4">
                    <p className="text-gray-300 mb-2 text-sm">{service.description}</p>
                    <button 
                      onClick={() => toggleExpanded(service.title)}
                      className="text-purple-400 hover:text-purple-300 text-xs font-medium flex items-center"
                    >
                      Ver mais detalhes <FaChevronDown className="ml-1" />
                    </button>
                  </div>
                )}
                
                <div className="flex justify-between items-center mt-2">
                  <span className="text-purple-400 font-bold">R$ {service.priceRange}</span>
                  <button 
                    onClick={() => handleRequestQuote(service.title)}
                    className="text-sm px-3 py-1 bg-purple-600/30 hover:bg-purple-600/50 rounded-full text-purple-300 transition-colors"
                  >
                    Solicitar Orçamento
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Serviços Extras */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Serviços Extras
            </span>
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extraServices.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-900/40 backdrop-blur-xl p-6 rounded-xl border border-gray-800/50 
                  overflow-hidden group relative hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-green-500/10 to-transparent 
                  skew-x-[-45deg] group-hover:animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                
                {expandedService === service.title ? (
                  <div className="mb-4">
                    <p className="text-gray-200 mb-4 text-sm">{service.fullDescription}</p>
                    <button 
                      onClick={() => toggleExpanded(service.title)}
                      className="text-green-400 hover:text-green-300 text-xs font-medium flex items-center"
                    >
                      Ver menos <FaChevronUp className="ml-1" />
                    </button>
                  </div>
                ) : (
                  <div className="mb-4">
                    <p className="text-gray-300 mb-2 text-sm">{service.description}</p>
                    <button 
                      onClick={() => toggleExpanded(service.title)}
                      className="text-green-400 hover:text-green-300 text-xs font-medium flex items-center"
                    >
                      Ver mais detalhes <FaChevronDown className="ml-1" />
                    </button>
                  </div>
                )}
                
                <div className="flex justify-between items-center mt-2">
                  <span className="text-green-400 font-bold">R$ {service.priceRange}</span>
                  <button 
                    onClick={() => handleRequestQuote(service.title)}
                    className="text-sm px-3 py-1 bg-green-600/30 hover:bg-green-600/50 rounded-full text-green-300 transition-colors"
                  >
                    Solicitar Orçamento
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-16 relative animate-fade-in">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-25 
              group-hover:opacity-50 blur-xl transition-all duration-700"></div>
            
            <div className="relative bg-gray-900/40 backdrop-blur-xl rounded-3xl border border-gray-800/50 p-12 overflow-hidden">
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
                  onClick={() => {
                    const message = `Olá! Gostaria de solicitar um orçamento personalizado para o meu projeto.`;
                    const whatsappUrl = `https://wa.me/5511943219223?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="group relative inline-flex items-center px-10 py-4 rounded-full text-lg font-semibold
                    overflow-hidden transition-all duration-500 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 
                    bg-[length:200%_100%] animate-gradient-x transition-all duration-500 group-hover:brightness-125"></div>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                    -skew-x-45 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700"></div>
                  
                  <span className="relative z-10 text-white flex items-center gap-2">
                    Solicitar Orçamento Personalizado
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCatalog;