import React from 'react';
import { useNavigate } from 'react-router-dom';
const Services = () => {
  const navigate = useNavigate();
  const services = [{
    title: "Desenvolvimento de Sites",
    description: "Sites institucionais, corporativos e portfolios com design responsivo e otimizado para SEO.",
    icon: "🌐"
  }, {
    title: "Sistemas Personalizados",
    description: "Desenvolvimento de sistemas sob medida para automatizar processos e aumentar a produtividade.",
    icon: "⚙️"
  }, {
    title: "Landing Pages",
    description: "Páginas de conversão otimizadas para campanhas de marketing e geração de leads.",
    icon: "🎯"
  }, {
    title: "E-commerce",
    description: "Lojas virtuais completas com integração de pagamentos e gestão de produtos.",
    icon: "🛒"
  }, {
    title: "Identidade Visual",
    description: "Criação de logotipos, identidade visual e material gráfico para sua marca.",
    icon: "🎨"
  }, {
    title: "Integrações",
    description: "APIs, bancos de dados e integração com plataformas terceiras para expandir funcionalidades.",
    icon: "🔗"
  }];
  return <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Nossos <span className="text-blue-500">Serviços</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Oferecemos soluções completas para transformar sua presença digital em uma ferramenta poderosa de crescimento.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>)}
        </div>
        
        <div className="text-center mt-16">
          <button onClick={() => navigate('/services')} className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">Ver Todos os Serviços e Detalhes</button>
        </div>
      </div>
    </section>;
};
export default Services;