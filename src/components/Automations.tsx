import React from 'react';

const Automations = () => {
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
    <section id="automations" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Automações com <span className="text-blue-500">n8n</span> e <span className="text-purple-500">IA</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforme seus processos de negócio com automações inteligentes e soluções de IA personalizadas.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {automations.map((automation, index) => (
            <div 
              key={index} 
              className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group relative overflow-hidden"
            >
              {/* Badge "Em Breve" */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                Em Breve
              </div>
              
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {automation.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-500 transition-colors">
                {automation.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                {automation.description}
              </p>
              
              <ul className="space-y-2">
                {automation.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <span className="text-blue-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Seção de benefícios */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-lg border border-gray-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Benefícios das Nossas Automações
            </h3>
            <p className="text-gray-300">
              Aumente a eficiência e reduza custos operacionais
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">📈</div>
              <h4 className="text-white font-semibold mb-2">Produtividade</h4>
              <p className="text-gray-400 text-sm">Aumente em até 80%</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">💰</div>
              <h4 className="text-white font-semibold mb-2">Economia</h4>
              <p className="text-gray-400 text-sm">Reduza custos operacionais</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="text-white font-semibold mb-2">Velocidade</h4>
              <p className="text-gray-400 text-sm">Processos em tempo real</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="text-white font-semibold mb-2">Precisão</h4>
              <p className="text-gray-400 text-sm">Elimine erros humanos</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 rounded-lg border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto para Automatizar?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Nossas soluções de automação com n8n e IA estão chegando em breve. 
              Seja um dos primeiros a experimentar o futuro da automação de negócios.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
              Em Breve - Lista de Espera
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Automations; 