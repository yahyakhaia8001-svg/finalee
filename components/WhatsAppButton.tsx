import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all duration-300 hover:scale-110 flex items-center justify-center animate-bounce-slow"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
};

export default WhatsAppButton;