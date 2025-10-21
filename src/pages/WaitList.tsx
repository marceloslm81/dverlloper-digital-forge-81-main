import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/use-scroll-animation';
import type { RefCallback } from 'react';
import Logo from '../components/Logo';

const n8nProjects = [
  {
    title: 'Automação de Atendimento',
    description: 'Integração entre WhatsApp, Email e CRM para atendimento automatizado',
    features: [
      'Respostas automáticas inteligentes',
      'Integração com múltiplos canais',
      'Roteamento de mensagens',
      'Análise de sentimento'
    ],
    icon: '🤖'
  },
  {
    title: 'Gestão de Leads',
    description: 'Sistema automatizado de captação e nutrição de leads',
    features: [
      'Captura de leads de múltiplas fontes',
      'Segmentação automática',
      'Envio de emails personalizados',
      'Pontuação de leads'
    ],
    icon: '📊'
  },
  {
    title: 'Automação de Marketing',
    description: 'Fluxos automatizados para campanhas de marketing',
    features: [
      'Publicação automática em redes sociais',
      'Monitoramento de menções',
      'Relatórios automatizados',
      'A/B testing'
    ],
    icon: '📱'
  }
];

const WaitList = () => {
  const [titleRef, isTitleVisible] = useScrollAnimation();
  const [projectsRef, isProjectsVisible] = useScrollAnimation();
  const [formRef, isFormVisible] = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Formatar a mensagem para o WhatsApp
    const message = `Nova inscrição na Lista de Espera!
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Empresa: ${formData.company}
Interesse: ${formData.interest}`;

    // Criar URL do WhatsApp com a mensagem
    const whatsappUrl = `https://wa.me/5511943219223?text=${encodeURIComponent(message)}`;
    
    // Abrir WhatsApp em nova aba
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-purple-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-40%,rgba(59,130,246,0.2),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_80%_60%,rgba(147,51,234,0.15),transparent)]"></div>

      <div className="container mx-auto px-4 py-10 relative">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-16">
          <a 
            href="/"
            className="flex items-center gap-2 bg-blue-500/10 hover:bg-blue-500/20 px-4 py-2 rounded-lg transition-all duration-300"
          >
            <svg 
              className="w-5 h-5 text-blue-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-blue-400 text-sm font-medium">Voltar ao Início</span>
          </a>

          <div className="flex items-center gap-2">
            <img 
              src="/logo.png" 
              alt="DVelloper Logo" 
              className="h-8"
            />
          </div>
        </div>

        {/* Title Section */}
        <div 
          ref={titleRef as RefCallback<HTMLDivElement>}
          className={`text-center mb-20 ${
            isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } transition-all duration-1000`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Lista de Espera
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Seja um dos primeiros a experimentar nossas soluções de automação com n8n e IA.
            Confira abaixo alguns dos projetos que estamos desenvolvendo.
          </p>
        </div>

        {/* Projects Section */}
        <div 
          ref={projectsRef as RefCallback<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {n8nProjects.map((project, index) => (
            <div 
              key={index}
              className={`group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 ${
                isProjectsVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

              <div className="relative">
                <div className="text-5xl mb-6 group-hover:scale-110 transform transition-all duration-500">
                  {project.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6">
                  {project.description}
                </p>

                <ul className="space-y-3">
                  {project.features.map((feature, featureIndex) => (
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

        {/* Form Section */}
        <div 
          ref={formRef as RefCallback<HTMLDivElement>}
          className={`max-w-2xl mx-auto ${
            isFormVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } transition-all duration-1000`}
        >
          <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-gray-800/50">
            {/* Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-100"></div>
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
              <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            </div>

            <div className="relative">
              <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Inscreva-se na Lista de Espera
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-gray-300 mb-2">Empresa</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors"
                    placeholder="Nome da sua empresa"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-gray-300 mb-2">Principal Interesse</label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="Automação de Atendimento">Automação de Atendimento</option>
                    <option value="Gestão de Leads">Gestão de Leads</option>
                    <option value="Automação de Marketing">Automação de Marketing</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                <div className="relative inline-block group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                  <button
                    type="submit"
                    className="relative block w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 hover:from-blue-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    Entrar na Lista de Espera
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* n8n Projects Showcase */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Exemplos de Projetos n8n
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Veja alguns exemplos de workflows e automações que podem ser criados com n8n
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Projeto 1 - CRM Integration */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gray-900 p-6 rounded-xl">
                <div className="aspect-w-16 aspect-h-9 mb-6 rounded-lg overflow-hidden">
                  <img 
                    src="/crm-workflow.png" 
                    alt="CRM Integration Workflow" 
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Integração com CRM
                </h3>
                <p className="text-gray-300 mb-4">
                  Automatize a sincronização de dados entre seu CRM e outras ferramentas de vendas e marketing.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full">Salesforce</span>
                  <span className="px-3 py-1 text-sm bg-purple-500/10 text-purple-400 rounded-full">HubSpot</span>
                  <span className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full">Pipedrive</span>
                </div>
              </div>
            </div>

            {/* Projeto 2 - Social Media Automation */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gray-900 p-6 rounded-xl">
                <div className="aspect-w-16 aspect-h-9 mb-6 rounded-lg overflow-hidden">
                  <img 
                    src="/social-automation.png" 
                    alt="Social Media Automation" 
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  Automação de Redes Sociais
                </h3>
                <p className="text-gray-300 mb-4">
                  Agende e publique conteúdo automaticamente em múltiplas redes sociais com análise de performance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm bg-purple-500/10 text-purple-400 rounded-full">Instagram</span>
                  <span className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full">LinkedIn</span>
                  <span className="px-3 py-1 text-sm bg-purple-500/10 text-purple-400 rounded-full">Twitter</span>
                </div>
              </div>
            </div>

            {/* Projeto 3 - Email Marketing */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gray-900 p-6 rounded-xl">
                <div className="aspect-w-16 aspect-h-9 mb-6 rounded-lg overflow-hidden">
                  <img 
                    src="/email-workflow.png" 
                    alt="Email Marketing Automation" 
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Automação de Email Marketing
                </h3>
                <p className="text-gray-300 mb-4">
                  Crie fluxos automatizados de email marketing com segmentação e personalização avançada.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full">Mailchimp</span>
                  <span className="px-3 py-1 text-sm bg-purple-500/10 text-purple-400 rounded-full">SendGrid</span>
                  <span className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full">ActiveCampaign</span>
                </div>
              </div>
            </div>

            {/* Projeto 4 - WhatsApp Business */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gray-900 p-6 rounded-xl">
                <div className="aspect-w-16 aspect-h-9 mb-6 rounded-lg overflow-hidden">
                  <img 
                    src="/whatsapp-workflow.png" 
                    alt="WhatsApp Business Automation" 
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  Automação WhatsApp Business
                </h3>
                <p className="text-gray-300 mb-4">
                  Automatize atendimento, envio de mensagens e integração com seu sistema de vendas.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm bg-purple-500/10 text-purple-400 rounded-full">WhatsApp API</span>
                  <span className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full">Chatbot</span>
                  <span className="px-3 py-1 text-sm bg-purple-500/10 text-purple-400 rounded-full">CRM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitList;