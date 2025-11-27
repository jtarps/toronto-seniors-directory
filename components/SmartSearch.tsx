import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Loader2, X } from 'lucide-react';
import { queryGemini } from '../services/geminiService';
import { Message, Language } from '../types';

interface SmartSearchProps {
  language: Language;
  translations: any; // Using any for simplicity here, or strictly type it
}

export const SmartSearch: React.FC<SmartSearchProps> = ({ language, translations: t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Reset chat when language changes to avoid confusion
  useEffect(() => {
    setMessages([]);
  }, [language]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userMsg: Message = { role: 'user', text: query };
    setMessages(prev => [...prev, userMsg]);
    const currentQuery = query;
    setQuery('');
    setLoading(true);

    try {
      const response = await queryGemini(currentQuery, language);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      // Gracefully handle errors - don't break the app
      console.error('AI Helper error:', error);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: "I'm having trouble connecting right now. Please try using the search bar or browse by category above. You can also call 211 for assistance." 
      }]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-800 hover:bg-blue-900 text-white rounded-full p-4 shadow-xl flex items-center gap-3 transition-transform hover:scale-105"
          aria-label={t.aiButton}
        >
          <Bot className="w-8 h-8" />
          <span className="font-bold text-lg pr-2 hidden md:inline">{t.aiButton}</span>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[450px] bg-white rounded-2xl shadow-2xl border border-stone-200 flex flex-col max-h-[80vh] overflow-hidden animate-fade-in-up">
      <div className="bg-blue-800 p-4 flex justify-between items-center">
        <div className="flex items-center gap-2 text-white">
          <Bot className="w-6 h-6" />
          <h2 className="font-bold text-xl">{t.aiTitle}</h2>
        </div>
        <button 
          onClick={() => setIsOpen(false)}
          className="text-blue-100 hover:text-white p-1 rounded-lg hover:bg-blue-700 transition-colors"
          aria-label="Close Assistant"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50 min-h-[300px]">
        {messages.length === 0 && (
          <div className="text-center text-stone-500 mt-8">
            <Bot className="w-12 h-12 mx-auto mb-2 opacity-50" />
            <p className="text-lg font-medium">{t.aiIntro}</p>
            <p className="text-sm mt-2 opacity-75">{t.aiIntroSub}</p>
          </div>
        )}
        
        {messages.map((msg, idx) => (
          <div 
            key={idx} 
            className={`p-3 rounded-xl max-w-[85%] text-lg ${
              msg.role === 'user' 
                ? 'bg-blue-100 text-blue-900 ml-auto rounded-br-none' 
                : 'bg-white text-stone-800 border border-stone-200 mr-auto rounded-bl-none shadow-sm'
            }`}
          >
            {msg.text}
          </div>
        ))}
        
        {loading && (
          <div className="flex items-center gap-2 text-stone-500 p-2">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSearch} className="p-4 bg-white border-t border-stone-100 flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.aiPlaceholder}
          className="flex-1 px-4 py-3 rounded-xl border border-stone-300 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button 
          type="submit" 
          disabled={loading || !query.trim()}
          className="bg-blue-800 hover:bg-blue-900 disabled:bg-stone-300 text-white p-3 rounded-xl transition-colors"
          aria-label="Send message"
        >
          <Send className="w-6 h-6" />
        </button>
      </form>
    </div>
  );
};