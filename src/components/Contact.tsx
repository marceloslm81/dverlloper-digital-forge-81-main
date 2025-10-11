import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { MdEmail, MdAccessTime } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Vamos conversar sobre seu <span className="text-blue-500">projeto</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos transformar sua ideia em realidade digital.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Fale Conosco</h3>
            <div className="space-y-6">
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
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
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
            </div>
            
            <div className="mt-8">
              <a 
                href="https://wa.me/5511943219223" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                <FaWhatsapp className="text-2xl" />
                <span>Chamar no WhatsApp</span>
              </a>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                {isSubmitting ? 'Preparando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
