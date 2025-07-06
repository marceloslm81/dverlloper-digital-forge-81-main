
import React from 'react';
import { Shield, Clock, Code2, Users, Award, TrendingUp, Headphones, Star } from 'lucide-react';

const Advantages = () => {
  const advantages = [
    {
      title: "Rapidez na Entrega",
      description: "Projetos entregues no prazo acordado, sem comprometer a qualidade. Utilizamos metodologias ágeis para garantir entregas eficientes.",
      icon: <Clock className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Suporte Contínuo",
      description: "Apoio técnico 24/7 para garantir que seu projeto funcione perfeitamente. Monitoramento constante e atualizações preventivas.",
      icon: <Headphones className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Código Limpo",
      description: "Desenvolvimento com as melhores práticas e código otimizado para performance. Documentação completa e arquitetura escalável.",
      icon: <Code2 className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Interface Amigável",
      description: "Design intuitivo e experiência do usuário pensada nos mínimos detalhes. Foco na usabilidade e acessibilidade.",
      icon: <Users className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Segurança Garantida",
      description: "Implementação de protocolos de segurança avançados. Proteção contra vulnerabilidades e backup automático de dados.",
      icon: <Shield className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Qualidade Certificada",
      description: "Processos rigorosos de controle de qualidade e testes. Certificações e padrões internacionais de desenvolvimento.",
      icon: <Award className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Crescimento Escalável",
      description: "Soluções preparadas para crescer junto com seu negócio. Arquitetura flexível que se adapta às suas necessidades futuras.",
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Excelência Comprovada",
      description: "Mais de 100 projetos entregues com sucesso. Clientes satisfeitos e resultados mensuráveis em diversos segmentos.",
      icon: <Star className="w-8 h-8 text-blue-500" />
    }
  ];

  const stats = [
    { number: "98%", label: "Taxa de Satisfação", description: "dos nossos clientes" },
    { number: "100+", label: "Projetos Entregues", description: "com sucesso" },
    { number: "5+", label: "Anos de Experiência", description: "no mercado digital" },
    { number: "24h", label: "Suporte Técnico", description: "disponível sempre" }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Por que escolher a <span className="text-blue-500">Dvelloper</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Trabalhamos com excelência e compromisso para entregar soluções que superam expectativas. 
              Nossa experiência comprovada e metodologia diferenciada garantem o sucesso do seu projeto digital.
            </p>
          </div>
          
          {/* Estatísticas */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </div>
            ))}
          </div>
          
          {/* Vantagens */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-500 transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>

          {/* Seção de Garantias */}
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-8 border border-blue-500/20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Nossas <span className="text-blue-500">Garantias</span>
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Trabalhamos com total transparência e oferecemos garantias sólidas para sua tranquilidade.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">✓</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Entrega no Prazo</h4>
                <p className="text-gray-400 text-sm">Compromisso com cronogramas estabelecidos ou reembolso parcial.</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">✓</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Suporte Gratuito</h4>
                <p className="text-gray-400 text-sm">3 meses de suporte técnico gratuito após a entrega do projeto.</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">✓</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Satisfação Total</h4>
                <p className="text-gray-400 text-sm">Revisões ilimitadas até você ficar 100% satisfeito com o resultado.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
