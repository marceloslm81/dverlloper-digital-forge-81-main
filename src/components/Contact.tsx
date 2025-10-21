import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { MdEmail, MdAccessTime } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/use-scroll-animation';
import type { RefCallback } from 'react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // animações de scroll para título, info e formulário
  const [titleRef, isTitleVisible] = useScrollAnimation();
  const [infoRef, isInfoVisible] = useScrollAnimation();
  const [formRef, isFormVisible] = useScrollAnimation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Criar corpo do email
      const emailBody = `
Nome: ${formData.name}
Email: ${formData.email}

Mensagem:
${formData.message}
      `;

      // Criar link mailto
      const mailtoLink = `mailto:atendimento@dvelloper.com.br?subject=Contato via Site - ${formData.name}&body=${encodeURIComponent(emailBody)}`;
      
      // Abrir cliente de email
      window.location.href = mailtoLink;

      toast({
        title: "Email preparado!",
        description: "Seu cliente de email foi aberto com a mensagem preenchida.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao preparar o email. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-purple-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-40%,rgba(59,130,246,0.2),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_80%_60%,rgba(147,51,234,0.15),transparent)]"></div>

      <div className="container mx-auto px-4 relative">
        <div
          ref={titleRef as RefCallback<HTMLDivElement>}
          className={`text-center mb-16 ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Fale com nossa{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-gradient-x">
                equipe
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-50 animate-pulse"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Estamos à disposição para dúvidas, orçamentos e suporte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bloco de informações e CTA WhatsApp */}
          <div
            ref={infoRef as RefCallback<HTMLDivElement>}
            className={`bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50 relative overflow-hidden ${
              isInfoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } transition-all duration-1000`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-50"></div>
            <div className="relative space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <MdEmail className="text-white text-2xl" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-400">atendimento@dvelloper.com.br</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <FaWhatsapp className="text-white text-2xl" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">WhatsApp</h4>
                  <p className="text-gray-400">(11) 943219223</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <MdAccessTime className="text-white text-2xl" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Horário</h4>
                  <p className="text-gray-400">Seg - Sex: 9h às 18h</p>
                </div>
              </div>

              {/* CTA WhatsApp com estilo do Automations */}
              <div className="mt-8">
                <div className="relative inline-block group/button">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover/button:opacity-100 transition duration-1000 group-hover/button:duration-200 animate-pulse"></div>
                  <a 
                    href="https://wa.me/5511943219223" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="relative inline-flex items-center px-8 py-4 bg-gray-900 text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition-all duration-300"
                  >
                    <span className="relative bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Chamar no WhatsApp
                    </span>
                    <svg className="w-5 h-5 ml-2 text-blue-400 group-hover/button:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de contato */}
          <div
            ref={formRef as RefCallback<HTMLDivElement>}
            className={`bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50 relative overflow-hidden ${
              isFormVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } transition-all duration-1000`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-100"></div>
            <form onSubmit={handleSubmit} className="relative space-y-6">
              <div>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Seu nome" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors" 
                />
              </div>
              
              <div>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Seu email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors" 
                />
              </div>
              
              <div>
                <textarea 
                  name="message" 
                  placeholder="Conte-nos sobre seu projeto" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  rows={6} 
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none" 
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition-all duration-300"
              >
                Enviar Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
