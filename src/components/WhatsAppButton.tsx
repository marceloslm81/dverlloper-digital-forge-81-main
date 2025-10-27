
import React from 'react';

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Glow effect background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
      
      {/* Main button */}
      <a
        href="https://wa.me/5511943219223"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-16 h-16 bg-gradient-to-br from-green-500 via-green-600 to-emerald-700 hover:from-green-400 hover:via-green-500 hover:to-emerald-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all duration-500 hover:scale-110 transform-gpu perspective-1000 hover:rotate-y-12 border border-green-400/30"
      >
        {/* Inner glow */}
        <div className="absolute inset-1 bg-gradient-to-br from-green-400/30 to-transparent rounded-full"></div>
        
        {/* WhatsApp Icon */}
        <svg 
          className="w-7 h-7 text-white relative z-10 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
        
        {/* Notification dot */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-ping"></div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
      </a>
      
      {/* Floating particles */}
      <div className="absolute top-0 left-0 w-2 h-2 bg-green-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0s'}}></div>
      <div className="absolute bottom-0 right-0 w-1 h-1 bg-emerald-400 rounded-full animate-bounce opacity-40" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute top-1/2 -left-2 w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse opacity-50"></div>
    </div>
  );
};

export default WhatsAppButton;
