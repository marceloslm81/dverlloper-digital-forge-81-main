
import React from 'react';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-blue-500 mr-2">&lt;/&gt;</span>
              <span className="text-blue-500">D</span>velloper
            </div>
            <p className="text-gray-400 mb-6">
              Transformando ideias em soluções digitais extraordinárias.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/dvelloper_25/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-pink-500 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.linkedin.com/in/marcelo-cavalcanti-silva/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="https://wa.me/5511943219223" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors">
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-blue-500 transition-colors">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-blue-500 transition-colors">
                  Sobre
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-blue-500 transition-colors">
                  Serviços
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('portfolio')} className="text-gray-400 hover:text-blue-500 transition-colors">
                  Portfólio
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Desenvolvimento Web</li>
              <li>Sistemas Personalizados</li>
              <li>Landing Pages</li>
              <li>E-commerce</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-gray-400">
              <p>contato@dvelloper.com.br</p>
              <p>(11) 943219223</p>
              <p>Seg - Sex: 9h às 18h</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 Dvelloper. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
