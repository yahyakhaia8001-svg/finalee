import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: 'Salam! Marhba bik chez Tropicam. Je suis votre assistant voyage IA 🤖. Je peux vous aider à trouver un voyage, un vol, ou des infos sur l\'Omra. Dites-moi tout !' }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Quick prompt suggestions
  const suggestions = [
    "Prix Omra 2025 ?",
    "Voyage Turquie pas cher",
    "Visa France",
    "Offres Dubai"
  ];

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim()) return;

    const userMsg = textToSend;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const reply = await sendMessageToGemini(userMsg, []); 
    
    setMessages(prev => [...prev, { role: 'model', text: reply || "Je n'ai pas compris. Pouvez-vous reformuler ?" }]);
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-24 right-4 md:right-6 z-[90] bg-tropicam-navy text-white p-3.5 rounded-full shadow-xl hover:bg-tropicam-orange transition-all duration-300 ${isOpen ? 'scale-0' : 'scale-100'} animate-bounce-subtle border-2 border-white`}
      >
        <div className="flex items-center gap-2">
            <Bot size={26} />
            <span className="text-xs font-bold hidden md:block pr-1">Assistant IA</span>
        </div>
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-24 right-4 md:right-6 z-[100] w-[calc(100vw-2rem)] md:w-96 h-[60vh] md:h-[500px] max-h-[calc(100dvh-130px)] bg-white rounded-2xl shadow-2xl flex flex-col transition-all duration-300 transform origin-bottom-right border border-gray-100 ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        
        {/* Header */}
        <div className="bg-tropicam-navy text-white p-4 rounded-t-2xl flex justify-between items-center shadow-md shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-2 rounded-full border border-white/20">
                <Sparkles size={18} className="text-yellow-300" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm">Tropicam Assistant</h3>
              <p className="text-[10px] text-gray-300 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> En ligne
              </p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:text-tropicam-orange transition-colors bg-white/10 hover:bg-white/20 p-1.5 rounded-full">
            <X size={16} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50/50 min-h-0">
          {messages.map((msg, idx) => (
            <div key={idx} className={`mb-4 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-tropicam-navy text-white rounded-tr-none' 
                  : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start mb-4">
              <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-none text-gray-500 text-xs flex items-center gap-1 shadow-sm">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggestions */}
        {messages.length < 3 && !loading && (
            <div className="px-4 pb-2 flex gap-2 overflow-x-auto no-scrollbar shrink-0">
                {suggestions.map((s, i) => (
                    <button key={i} onClick={() => handleSend(s)} className="text-xs bg-gray-100 hover:bg-gray-200 text-tropicam-navy px-3 py-1.5 rounded-full whitespace-nowrap border border-gray-200 transition-colors">
                        {s}
                    </button>
                ))}
            </div>
        )}

        {/* Input */}
        <div className="p-3 border-t bg-white rounded-b-2xl flex items-center gap-2 shrink-0">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Posez une question..."
            className="flex-1 bg-gray-100 text-sm p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-tropicam-navy/20 transition-all"
          />
          <button 
            onClick={() => handleSend()}
            disabled={!input.trim() || loading}
            className="bg-tropicam-orange text-white p-3 rounded-xl hover:bg-orange-600 disabled:opacity-50 transition-colors shadow-md"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </>
  );
};

export default AIChatbot;