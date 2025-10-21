import React from 'react';
import { Code, Palette, Rocket, Users, CheckCircle, Zap, Globe, Smartphone } from 'lucide-react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss } from 'react-icons/si';
import { useScrollAnimation } from '../hooks/use-scroll-animation';
import type { RefCallback } from 'react';

const About = () => {
  const [aboutRef, isAboutVisible] = useScrollAnimation();
  const [statsRef, isStatsVisible] = useScrollAnimation();
  const [techRef, isTechVisible] = useScrollAnimation();
  const [processRef, isProcessVisible] = useScrollAnimation();

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
    <div className="bg-black">
      <section id="about" className="py-20 bg-black relative overflow-hidden">
        {/* Fundos iguais ao Services */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-40%,rgba(59,130,246,0.3),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_70%_60%,rgba(147,51,234,0.3),transparent)]"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 relative" ref={aboutRef as RefCallback<HTMLDivElement>}>
              <div className={`transition-all duration-1000 delay-100 transform ${isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* brilho de fundo do título (igual ao Services) */}
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 relative inline-block">
                  Sobre{" "}
                  <span className="relative">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 animate-gradient-x">
                      a Dvelloper
                    </span>
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-50 animate-pulse"></span>
                  </span>
                </h2>
              </div>
              
              <div className="mb-8">
                <p className={`text-xl text-gray-300 mb-6 leading-relaxed max-w-4xl mx-auto transition-all duration-1000 delay-300 transform ${
                  isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  Olá! Sou <span className="text-blue-500 font-semibold relative">
                    Marcelo Cavalcanti
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500/50"></span>
                  </span>, 
                  desenvolvedor e fundador da <span className="text-blue-500 relative">
                    Dvelloper
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500/50"></span>
                  </span>. 
                  Especializado em desenvolvimento web e soluções digitais inovadoras, 
                  crio experiências digitais que conectam marcas aos seus clientes de forma 
                  autêntica e eficaz, sempre focando em resultados mensuráveis e crescimento sustentável.
                </p>
                
                <p className={`text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-500 transform ${
                  isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  Nossa missão é transformar ideias em soluções digitais extraordinárias, 
                  utilizando as mais modernas tecnologias e metodologias ágeis. Trabalho 
                  com uma equipe dedicada e acreditamos que cada projeto é único e merece 
                  uma abordagem personalizada para alcançar o máximo potencial.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16" ref={statsRef as RefCallback<HTMLDivElement>}>
              <div
                className={`bg-gray-900/40 backdrop-blur-xl p-8 rounded-3xl border border-gray-800/50 
                  hover:border-blue-500/50 transition-all duration-700 group relative overflow-hidden
                  transform ${isStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
                  hover:translate-y-[-5px] hover:shadow-2xl`}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent skew-x-[-45deg] group-hover:animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-400 opacity-0 group-hover:opacity-10 rounded-3xl transition-all duration-700 blur-xl" />
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">2+</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Anos de Experiência</h3>
                <p className="text-gray-400">Desenvolvendo soluções digitais inovadoras para empresas de todos os tamanhos.</p>
              </div>

              <div
                className={`bg-gray-900/40 backdrop-blur-xl p-8 rounded-3xl border border-gray-800/50 
                  hover:border-blue-500/50 transition-all duration-700 group relative overflow-hidden
                  transform ${isStatsVisible ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-20'}
                  hover:translate-y-[-5px] hover:shadow-2xl`}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent skew-x-[-45deg] group-hover:animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-400 opacity-0 group-hover:opacity-10 rounded-3xl transition-all duration-700 blur-xl" />
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">50+</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Projetos Entregues</h3>
                <p className="text-gray-400">Sites, sistemas e aplicações desenvolvidas com excelência e qualidade.</p>
              </div>

              <div
                className={`bg-gray-900/40 backdrop-blur-xl p-8 rounded-3xl border border-gray-800/50 
                  hover:border-blue-500/50 transition-all duration-700 group relative overflow-hidden
                  transform ${isStatsVisible ? 'opacity-100 translate-y-0 delay-400' : 'opacity-0 translate-y-20'}
                  hover:translate-y-[-5px] hover:shadow-2xl`}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent skew-x-[-45deg] group-hover:animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-400 opacity-0 group-hover:opacity-10 rounded-3xl transition-all duration-700 blur-xl" />
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">24h</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Suporte Contínuo</h3>
                <p className="text-gray-400">Apoio técnico especializado para garantir o sucesso do seu projeto.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Serviços Especializados – título com brilho e tamanho maior */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-40%,rgba(59,130,246,0.3),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_70%_60%,rgba(147,51,234,0.3),transparent)]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 relative">
              {/* brilho de fundo do título */}
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 relative inline-block">
                Nossos{" "}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 animate-gradient-x">
                    Serviços Especializados
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-50 animate-pulse"></span>
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Oferecemos soluções completas e personalizadas para atender às necessidades específicas do seu negócio digital.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Desenvolvimento Web', Icon: Globe, gradient: 'from-blue-600 to-cyan-400', desc: 'Sites responsivos e sistemas web modernos com foco em performance e usabilidade.' },
                { title: 'Sistema MVP', Icon: Rocket, gradient: 'from-purple-600 to-blue-500', desc: 'Desenvolvimento rápido e validado de sistemas MVP para testar ideias e acelerar o lançamento do seu produto.' },
                { title: 'UI/UX Design', Icon: Palette, gradient: 'from-pink-500 to-rose-400', desc: 'Design de interfaces modernas e experiências de usuário excepcionais.' },
                { title: 'Consultoria Digital', Icon: Rocket, gradient: 'from-green-500 to-emerald-400', desc: 'Estratégias digitais personalizadas para acelerar o crescimento do seu negócio.' },
              ].map(({ title, Icon, gradient, desc }, idx) => (
                <div
                  key={idx}
                  className={`bg-gray-900/40 backdrop-blur-xl p-8 rounded-3xl border border-gray-800/50 
                    hover:border-blue-500/50 transition-all duration-700 group relative overflow-hidden
                    hover:translate-y-[-5px] hover:shadow-2xl`}
                  style={{ transitionDelay: `${idx * 150}ms`, animation: `float ${3 + idx * 0.5}s ease-in-out infinite alternate` }}
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent skew-x-[-45deg] group-hover:animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-all duration-700 blur-xl`} />
                  <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
                        style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animation: `float ${2 + Math.random() * 3}s ease-in-out infinite` }}
                      />
                    ))}
                  </div>

                  <div className="relative w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                    <Icon className="w-6 h-6 text-blue-500" />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3 relative group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
                    <span className="relative inline-block group-hover:animate-wave">{title}</span>
                  </h3>
                  <p className="text-gray-400 text-sm relative z-10 group-hover:text-gray-300 transition-colors duration-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tecnologias – harmonizado com Services */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-40%,rgba(59,130,246,0.3),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_70%_60%,rgba(147,51,234,0.3),transparent)]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 relative">
              {/* brilho de fundo do título */}
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 relative inline-block">
                Tecnologias que{" "}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 animate-gradient-x">
                    Impulsionam
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-50 animate-pulse"></span>
                </span>{" "}
                seus Projetos
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Utilizamos as mais modernas e confiáveis tecnologias do mercado para garantir performance, segurança e escalabilidade.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6" ref={techRef as RefCallback<HTMLDivElement>}>
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className={`bg-gray-900/40 backdrop-blur-xl p-6 rounded-3xl border border-gray-800/50 
                    hover:border-blue-500/50 transition-all duration-700 group relative overflow-hidden text-center
                    ${isTechVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent skew-x-[-45deg] group-hover:animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-400 opacity-0 group-hover:opacity-10 rounded-3xl transition-all duration-700 blur-xl" />
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600/10 to-blue-400/10 rounded-lg flex items-center justify-center mx-auto mb-3 transform group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h4 className="text-white font-medium text-sm group-hover:text-blue-400 transition-colors duration-300">{tech.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Processo de Trabalho – cards e fundo como Services */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-40%,rgba(59,130,246,0.3),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_70%_60%,rgba(147,51,234,0.3),transparent)]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 relative inline-block">
                Meu{" "}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 animate-gradient-x">
                    Processo de Trabalho
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-50 animate-pulse"></span>
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Metodologia estruturada e transparente para garantir a entrega de projetos de alta qualidade dentro do prazo e orçamento estabelecidos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" ref={processRef as RefCallback<HTMLDivElement>}>
              {[
                { n: 1, title: 'Descoberta', desc: 'Entendemos suas necessidades, objetivos e desafios através de reuniões estratégicas e análise detalhada do projeto.' },
                { n: 2, title: 'Planejamento', desc: 'Criamos um roadmap detalhado com cronogramas, marcos e especificações técnicas para guiar todo o desenvolvimento.' },
                { n: 3, title: 'Desenvolvimento', desc: 'Implementamos a solução utilizando metodologias ágeis, com entregas incrementais e feedback constante.' },
                { n: 4, title: 'Entrega & Suporte', desc: 'Realizamos testes rigorosos, deploy seguro e oferecemos suporte contínuo para garantir o sucesso do projeto.' },
              ].map(({ n, title, desc }, idx) => (
                <div
                  key={idx}
                  className={`bg-gray-900/40 backdrop-blur-xl p-8 rounded-3xl border border-gray-800/50 
                    hover:border-blue-500/50 transition-all duration-700 group relative overflow-hidden text-center
                    transform ${isProcessVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
                    hover:translate-y-[-5px] hover:shadow-2xl`}
                  style={{ transitionDelay: `${idx * 200}ms` }}
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent skew-x-[-45deg] group-hover:animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-400 opacity-0 group-hover:opacity-10 rounded-3xl transition-all duration-700 blur-xl" />
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{n}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 hover:text-transparent hover:bg-gradient-to-r hover:bg-clip-text hover:from-blue-400 hover:to-purple-400 transition-all duration-500">
                    {title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">{desc}</p>
                </div>
              ))}
            </div>

            {/* Destaques finais com estilo de card */}
            <div className="mt-16 bg-gray-900/40 backdrop-blur-xl p-8 rounded-3xl border border-gray-800/50">
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
    </div>
  );
};

export default About;
