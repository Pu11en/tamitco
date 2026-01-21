
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Message } from '../types';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi! I\'m the TAMITCO Virtual Assistant. How can I help you with your underground utility project today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages.map(m => ({
            role: m.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: m.content }]
        })), { role: 'user', parts: [{ text: userMsg }] }],
        config: {
          systemInstruction: `You are the TAMITCO Underground Utilities AI Assistant. 
          Your tone is professional, helpful, and "Texan tough". 
          TAMITCO specializes in:
          - Underground utility installation (water, gas, electric)
          - Telecom and Fiber optic infrastructure
          - Directional drilling (HDD)
          - Aerial utility work
          - Construction excavation in Texas.
          Keep responses concise. If they ask about quotes, tell them to use the form on the page or call 1-800-TAMITCO.`,
        }
      });

      const aiText = response.text || "I'm sorry, I couldn't process that. Please contact our office directly!";
      setMessages(prev => [...prev, { role: 'assistant', content: aiText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Our AI systems are currently undergoing maintenance. Please use the contact form or call us!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-primary rounded-full shadow-2xl shadow-primary/40 flex items-center justify-center text-white z-[200] hover:scale-110 active:scale-95 transition-all"
      >
        <span className="material-icons text-3xl">{isOpen ? 'close' : 'smart_toy'}</span>
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-24 right-6 w-[calc(100vw-3rem)] md:w-96 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl z-[200] border border-slate-200 dark:border-zinc-800 flex flex-col overflow-hidden transition-all duration-300 transform ${
        isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10 pointer-events-none'
      }`}>
        <div className="bg-primary p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded bg-white/20 flex items-center justify-center text-white">
            <span className="material-icons">engineering</span>
          </div>
          <div>
            <div className="text-white font-bold text-sm">TAMITCO Assistant</div>
            <div className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Active Now • Texas Service</div>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex-1 p-4 overflow-y-auto space-y-4 max-h-[400px] min-h-[300px]"
        >
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-3 rounded-xl text-sm ${
                msg.role === 'user' 
                  ? 'bg-primary text-white' 
                  : 'bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-zinc-200'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-slate-100 dark:bg-zinc-800 p-3 rounded-xl flex gap-1">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-.15s]"></div>
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-.3s]"></div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 border-t dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about our services..." 
            className="flex-1 bg-white dark:bg-zinc-900 border-none rounded-lg p-3 text-sm focus:ring-1 focus:ring-primary outline-none dark:text-white"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center disabled:opacity-50 transition-opacity"
          >
            <span className="material-icons">send</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Assistant;
