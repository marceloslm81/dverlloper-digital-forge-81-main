import React from 'react';
import { Code, Palette, Rocket, Users, CheckCircle, Zap, Globe, Smartphone } from 'lucide-react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss } from 'react-icons/si';

const About = () => {
  const technologies = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-600 text-4xl" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-4xl" /> },
    { name: 'React', icon: <FaReact className="text-cyan-400 text-4xl" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white text-4xl" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600 text-4xl" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-4xl" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-700 text-4xl" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-800 text-4xl" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-500 text-4xl" /> },
    { name: 'Git', icon: <FaGitAlt className="text-orange-500 text-4xl" /> },
    { name: 'GitHub', icon: <FaGithub className="text-white dark:text-black text-4xl" /> }
  ];

  return (
    <>
      {/* Seção Sobre expandida */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Sobre a <span className="text-blue-500">Dvelloper</span>
              </h2>
              
              <div className="mb-8">
                <p className="text-xl text-gray-300 mb-6 leading-relaxed max-w-4xl mx-auto">
                  Olá! Sou <span className="text-blue-500 font-semibold">Marcelo Cavalcanti</span>, 
                  desenvolvedor e fundador da <span className="text-blue-500">Dvelloper</span>. 
                  Especializado em desenvolvimento web e soluções digitais inovadoras, 
                  crio experiências digitais que conectam marcas aos seus clientes de forma 
                  autêntica e eficaz, sempre focando em resultados mensuráveis e crescimento sustentável.
                </p>
                
                <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
                  Nossa missão é transformar ideias em soluções digitais extraordinárias, 
                  utilizando as mais modernas tecnologias e metodologias ágeis. Trabalho 
                  com uma equipe dedicada e acreditamos que cada projeto é único e merece 
                  uma abordagem personalizada para alcançar o máximo potencial.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-black/50 p-8 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2+</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Anos de Experiência</h3>
                <p className="text-gray-400">Desenvolvendo soluções digitais inovadoras para empresas de todos os tamanhos.</p>
              </div>
              
              <div className="bg-black/50 p-8 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">50+</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Projetos Entregues</h3>
                <p className="text-gray-400">Sites, sistemas e aplicações desenvolvidas com excelência e qualidade.</p>
              </div>
              
              <div className="bg-black/50 p-8 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">24h</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Suporte Contínuo</h3>
                <p className="text-gray-400">Apoio técnico especializado para garantir o sucesso do seu projeto.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nova Seção: Nossos Serviços Especializados */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Nossos <span className="text-blue-500">Serviços Especializados</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Oferecemos soluções completas e personalizadas para atender às necessidades 
                específicas do seu negócio digital.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                  <Globe className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Desenvolvimento Web</h3>
                <p className="text-gray-400 text-sm">Sites responsivos e sistemas web modernos com foco em performance e usabilidade.</p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                  <Rocket className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Sistema MVP</h3>
                <p className="text-gray-400 text-sm">Desenvolvimento rápido e validado de sistemas MVP para testar ideias e acelerar o lançamento do seu produto.</p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                  <Palette className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">UI/UX Design</h3>
                <p className="text-gray-400 text-sm">Design de interfaces modernas e experiências de usuário excepcionais.</p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                  <Rocket className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Consultoria Digital</h3>
                <p className="text-gray-400 text-sm">Estratégias digitais personalizadas para acelerar o crescimento do seu negócio.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nova Seção: Tecnologias */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Tecnologias que <span className="text-blue-500">Impulsionam</span> seus Projetos
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Utilizamos as mais modernas e confiáveis tecnologias do mercado para 
                garantir performance, segurança e escalabilidade.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-black/50 p-4 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    {tech.icon}
                  </div>
                  <h4 className="text-white font-medium text-sm">{tech.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nova Seção: Processo de Trabalho */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Meu <span className="text-blue-500">Processo de Trabalho</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Metodologia estruturada e transparente para garantir a entrega de 
                projetos de alta qualidade dentro do prazo e orçamento estabelecidos.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Descoberta</h3>
                <p className="text-gray-400 leading-relaxed">
                  Entendemos suas necessidades, objetivos e desafios através de 
                  reuniões estratégicas e análise detalhada do projeto.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Planejamento</h3>
                <p className="text-gray-400 leading-relaxed">
                  Criamos um roadmap detalhado com cronogramas, marcos e 
                  especificações técnicas para guiar todo o desenvolvimento.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Desenvolvimento</h3>
                <p className="text-gray-400 leading-relaxed">
                  Implementamos a solução utilizando metodologias ágeis, 
                  com entregas incrementais e feedback constante.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Entrega & Suporte</h3>
                <p className="text-gray-400 leading-relaxed">
                  Realizamos testes rigorosos, deploy seguro e oferecemos 
                  suporte contínuo para garantir o sucesso do projeto.
                </p>
              </div>
            </div>
            
            <div className="mt-16 bg-gray-900 p-8 rounded-lg border border-gray-800">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <CheckCircle className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                  <h4 className="text-white font-semibold mb-2">Transparência Total</h4>
                  <p className="text-gray-400 text-sm">Relatórios regulares e comunicação clara em todas as etapas.</p>
                </div>
                <div>
                  <Zap className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                  <h4 className="text-white font-semibold mb-2">Agilidade</h4>
                  <p className="text-gray-400 text-sm">Entregas rápidas sem comprometer a qualidade.</p>
                </div>
                <div>
                  <Users className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                  <h4 className="text-white font-semibold mb-2">Colaboração</h4>
                  <p className="text-gray-400 text-sm">Trabalho em equipe com foco nos seus objetivos de negócio.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
