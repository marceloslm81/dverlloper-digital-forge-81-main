
import React from 'react';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';
import Logo from './Logo';
import { useScrollAnimation } from '../hooks/use-scroll-animation';
import type { RefCallback } from 'react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const [col1Ref, isCol1Visible] = useScrollAnimation();
  const [col2Ref, isCol2Visible] = useScrollAnimation();
  const [col3Ref, isCol3Visible] = useScrollAnimation();
  const [col4Ref, isCol4Visible] = useScrollAnimation();

  return (
    <footer className="bg-black relative overflow-hidden border-t border-gray-800">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-purple-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-40%,rgba(59,130,246,0.2),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_80%_60%,rgba(147,51,234,0.15),transparent)]"></div>
      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid md:grid-cols-4 gap-8">
          <div
            ref={col1Ref as RefCallback<HTMLDivElement>}
            className={`bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50 relative overflow-hidden ${
              isCol1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } transition-all duration-1000`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-50"></div>
            <div className="relative">
              <Logo size="md" showSlogan={true} className="mb-4" />
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
          </div>
          <div
            ref={col2Ref as RefCallback<HTMLDivElement>}
            className={`bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50 relative overflow-hidden ${
              isCol2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } transition-all duration-1000`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-50"></div>
            <div className="relative">
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
          </div>
          <div
            ref={col3Ref as RefCallback<HTMLDivElement>}
            className={`bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50 relative overflow-hidden ${
              isCol3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } transition-all duration-1000`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-50"></div>
            <div className="relative">
              <h4 className="text-white font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Desenvolvimento Web</li>
                <li>Sistemas Personalizados</li>
                <li>Landing Pages</li>
                <li>E-commerce</li>
              </ul>
            </div>
          </div>
          <div
            ref={col4Ref as RefCallback<HTMLDivElement>}
            className={`bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50 relative overflow-hidden ${
              isCol4Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } transition-all duration-1000`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-50"></div>
            <div className="relative">
              <h4 className="text-white font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-400">
                <p>atendimento@dvelloper.com.br</p>
                <p>(11) 943219223</p>
                <p>Seg - Sex: 9h às 18h</p>
              </div>
              <div className="mt-6 relative inline-block group/button">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover/button:opacity-100 transition duration-1000 group-hover/button:duration-200 animate-pulse"></div>
                <a 
                  href="https://wa.me/5511943219223" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="relative inline-flex items-center px-6 py-3 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-all duration-300"
                >
                  <span className="relative bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Fale pelo WhatsApp
                  </span>
                  <svg className="w-5 h-5 ml-2 text-blue-400 group-hover/button:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
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
