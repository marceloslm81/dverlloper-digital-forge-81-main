import React from 'react';
import { useScrollAnimation } from '../hooks/use-scroll-animation';
import type { RefCallback } from 'react';

const Automations = () => {
  const [titleRef, isTitleVisible] = useScrollAnimation();
  const [automationsRef, isAutomationsVisible] = useScrollAnimation();
  const [benefitsRef, isBenefitsVisible] = useScrollAnimation();
  const [ctaRef, isCtaVisible] = useScrollAnimation();
  const automations = [
    {
      title: "Automação com n8n",
      description: "Automatize seus processos de negócio com workflows visuais poderosos e integrações nativas.",
      icon: "⚡",
      features: [
        "Workflows visuais intuitivos",
        "Integração com 200+ serviços",
        "Automação de marketing",
        "Processamento de dados"
      ]
    },
    {
      title: "Inteligência Artificial",
      description: "Implemente soluções de IA para otimizar processos e criar experiências personalizadas.",
      icon: "🤖",
      features: [
        "Chatbots inteligentes",
        "Análise preditiva",
        "Processamento de linguagem natural",
        "Automação de atendimento"
      ]
    },
    {
      title: "Integração Completa",
      description: "Conecte todos os seus sistemas e ferramentas em uma solução unificada e eficiente.",
      icon: "🔗",
      features: [
        "APIs personalizadas",
        "Sincronização de dados",
        "Webhooks avançados",
        "Monitoramento em tempo real"
      ]
    }
  ];

  return (
    <section id="automations" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-purple-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-40%,rgba(59,130,246,0.2),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_80%_60%,rgba(147,51,234,0.15),transparent)]"></div>

      <div className="container mx-auto px-4 relative">
        <div 
          className="text-center mb-16 relative"
          ref={titleRef as RefCallback<HTMLDivElement>}
        >
          {/* Glow Effect */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
          
          <div className={`transform transition-all duration-1000 ${
            isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 relative inline-block">
              Automações com{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 animate-gradient-x">
                  n8n
                </span>
              </span>
              {" "}e{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 animate-gradient-x">
                  IA
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-50 animate-pulse"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto relative">
              Transforme seus processos de negócio com automações inteligentes e soluções de IA personalizadas.
              <span className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
            </p>
          </div>
        </div>

        <div 
          className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          ref={automationsRef as RefCallback<HTMLDivElement>}
        >
          {automations.map((automation, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 group relative overflow-hidden ${
                isAutomationsVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms`,
              }}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              
              <div className="relative">
                <div className="text-5xl mb-8 group-hover:scale-110 transform transition-all duration-500 relative">
                  <span className="relative">
                    {automation.icon}
                    <span className="absolute -inset-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
                  {automation.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-6">
                  {automation.description}
                </p>
                
                <ul className="space-y-3">
                  {automation.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center text-gray-300 group/item hover:text-white transition-colors duration-300"
                    >
                      <span className="mr-3 flex-shrink-0">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover/item:from-blue-500 group-hover/item:to-purple-500 transition-all duration-300">
                          <span className="text-blue-500 text-sm group-hover/item:text-white">✓</span>
                        </div>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de benefícios */}
        <div 
          ref={benefitsRef as RefCallback<HTMLDivElement>}
          className={`bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-12 rounded-xl border border-gray-800/50 relative overflow-hidden ${
            isBenefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } transition-all duration-1000`}
        >
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-50"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          </div>

          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                Benefícios das Nossas Automações
              </h3>
              <p className="text-xl text-gray-300">
                Aumente a eficiência e reduza custos operacionais
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-gray-900 p-6 rounded-lg">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4 mx-auto group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-500">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-500">📈</span>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2 text-center group-hover:text-blue-400 transition-colors">Produtividade</h4>
                  <p className="text-gray-400 text-center group-hover:text-gray-300 transition-colors">Aumente em até 80%</p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-gray-900 p-6 rounded-lg">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 mx-auto group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-500">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-500">💰</span>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2 text-center group-hover:text-purple-400 transition-colors">Economia</h4>
                  <p className="text-gray-400 text-center group-hover:text-gray-300 transition-colors">Reduza custos operacionais</p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-gray-900 p-6 rounded-lg">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4 mx-auto group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-500">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-500">⚡</span>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2 text-center group-hover:text-blue-400 transition-colors">Velocidade</h4>
                  <p className="text-gray-400 text-center group-hover:text-gray-300 transition-colors">Processos em tempo real</p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-gray-900 p-6 rounded-lg">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 mx-auto group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-500">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-500">🎯</span>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2 text-center group-hover:text-purple-400 transition-colors">Precisão</h4>
                  <p className="text-gray-400 text-center group-hover:text-gray-300 transition-colors">Elimine erros humanos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div 
          ref={ctaRef as RefCallback<HTMLDivElement>}
          className="text-center mt-20"
        >
          <div className={`relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-12 rounded-xl border border-gray-800/50 overflow-hidden group ${
            isCtaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } transition-all duration-1000`}>
            {/* Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-100 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl"></div>
            </div>

            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                Pronto para Automatizar?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Nossas soluções de automação com n8n e IA estão chegando em breve. 
                Seja um dos primeiros a experimentar o futuro da automação de negócios.
              </p>
              <div className="relative inline-block group/button">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover/button:opacity-100 transition duration-1000 group-hover/button:duration-200 animate-pulse"></div>
                <a 
                  href="/lista-de-espera"
                  className="relative inline-flex items-center px-8 py-4 bg-gray-900 text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition-all duration-300"
                >
                  <span className="relative bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Lista de Espera
                  </span>
                  <svg className="w-5 h-5 ml-2 text-blue-400 group-hover/button:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Automations;