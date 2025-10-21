
import React from 'react';
import { Shield, Clock, Code2, Users, Award, TrendingUp, Headphones, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/use-scroll-animation';
import type { RefCallback } from 'react';

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
      description: "Mais de 50 projetos entregues com sucesso. Clientes satisfeitos e resultados mensuráveis em diversos segmentos.",
      icon: <Star className="w-8 h-8 text-blue-500" />
    }
  ];

  const stats = [
    { number: "98%", label: "Taxa de Satisfação", description: "dos nossos clientes" },
    { number: "50+", label: "Projetos Entregues", description: "com sucesso" },
    { number: "2+", label: "Anos de Experiência", description: "no mercado digital" },
    { number: "24h", label: "Suporte Técnico", description: "disponível sempre" }
  ];

  const [titleRef, isTitleVisible] = useScrollAnimation();
  const [statsRef, isStatsVisible] = useScrollAnimation();
  const [advantagesRef, isAdvantagesVisible] = useScrollAnimation();
  const [guaranteesRef, isGuaranteesVisible] = useScrollAnimation();

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-40%,rgba(59,130,246,0.2),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_80%_60%,rgba(59,130,246,0.15),transparent)]"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div 
            className="text-center mb-16 relative"
            ref={titleRef as RefCallback<HTMLDivElement>}
          >
            {/* Glow Effect */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
            
            <div className={`transform transition-all duration-1000 ${
              isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 relative inline-block">
                Por que escolher a{" "}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 animate-gradient-x">
                    Dvelloper
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 opacity-50 animate-pulse"></span>
                </span>
                ?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed relative">
                Trabalhamos com excelência e compromisso para entregar soluções que superam expectativas. 
                Nossa experiência comprovada e metodologia diferenciada garantem o sucesso do seu projeto digital.
                <span className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-3xl bg-gradient-to-r from-blue-500/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
              </p>
            </div>
          </div>
          
          {/* Estatísticas */}
          <div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
            ref={statsRef as RefCallback<HTMLDivElement>}
          >
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`group relative bg-gray-900/40 backdrop-blur-xl p-6 rounded-3xl border border-gray-800/50 
                  transform transition-all duration-700 text-center
                  ${isStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Card Effects */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl opacity-0 
                  group-hover:opacity-30 blur-2xl transition-opacity duration-700"></div>
                
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
                    from-blue-400 to-blue-600 mb-2 animate-number-count">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.description}
                  </div>
                </div>
                
                {/* Particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-400/50 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `float ${2 + Math.random() * 3}s ease-in-out infinite`
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Vantagens */}
          <div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            ref={advantagesRef as RefCallback<HTMLDivElement>}
          >
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className={`group relative bg-gradient-to-b from-gray-900/80 to-gray-900/60 p-8 rounded-2xl 
                  border border-gray-800/50 backdrop-blur-sm hover:border-blue-500/50 
                  transform transition-all duration-500 hover:-translate-y-1
                  ${isAdvantagesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-blue-500/5 opacity-0 
                  group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-14 h-14 mb-6 relative">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-xl transform rotate-6 
                      transition-transform duration-300 group-hover:rotate-12"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-blue-700 rounded-xl"></div>
                    <div className="relative w-full h-full flex items-center justify-center transform 
                      transition-all duration-300 group-hover:scale-110">
                      {React.cloneElement(advantage.icon as React.ReactElement, {
                        className: "w-6 h-6 text-white/90"
                      })}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 transition-colors duration-300
                    group-hover:text-blue-400">
                    {advantage.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 
                    transition-colors duration-300">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Seção de Garantias */}
          <div 
            className="relative group"
            ref={guaranteesRef as RefCallback<HTMLDivElement>}
          >
            {/* Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-25 
              group-hover:opacity-50 blur-xl transition-all duration-700"></div>
            
            <div className={`relative bg-gray-900/40 backdrop-blur-xl rounded-3xl p-12 overflow-hidden
              transform transition-all duration-1000 border border-gray-800/50
              ${isGuaranteesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              
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
              <div className="relative text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold relative inline-block mb-4">
                  Nossas{" "}
                  <span className="relative">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient-x">
                      Garantias
                    </span>
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 
                      opacity-50 animate-pulse"></span>
                  </span>
                </h3>
                <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                  Trabalhamos com total transparência e oferecemos garantias sólidas para sua tranquilidade.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Entrega no Prazo",
                    description: "Compromisso com cronogramas estabelecidos ou reembolso parcial."
                  },
                  {
                    title: "Suporte Gratuito",
                    description: "2 meses de suporte técnico gratuito após a entrega do projeto."
                  },
                  {
                    title: "Satisfação Total",
                    description: "Revisões ilimitadas até você ficar 100% satisfeito com o resultado."
                  }
                ].map((guarantee, index) => (
                  <div 
                    key={index} 
                    className="group/item relative text-center transform transition-all duration-500 hover:scale-105"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-16 h-16 mx-auto mb-6 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full 
                        blur-lg opacity-50 group-hover/item:opacity-75 transition-opacity"></div>
                      <div className="relative w-full h-full bg-gradient-to-br from-green-500 to-emerald-400 
                        rounded-full flex items-center justify-center transform group-hover/item:scale-110 
                        transition-transform duration-500">
                        <span className="text-white text-2xl">✓</span>
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3 group-hover/item:text-green-400 transition-colors">
                      {guarantee.title}
                    </h4>
                    <p className="text-gray-400 text-sm group-hover/item:text-gray-300 transition-colors">
                      {guarantee.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
