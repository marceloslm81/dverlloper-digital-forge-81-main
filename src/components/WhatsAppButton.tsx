
import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511943219223"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse"
    >
      <span className="text-white text-2xl">💬</span>
    </a>
  );
};

export default WhatsAppButton;
