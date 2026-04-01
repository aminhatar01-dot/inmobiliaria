'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Minimize2, LifeBuoy } from 'lucide-react';
import { askSupportAI, ChatMessage } from '@/app/actions/support-ai';

export default function AiSupportChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Initial greeting
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([{
                role: 'assistant',
                content: '¡Hola! 👋 Soy TerraBot, tu asistente inteligente de soporte técnico. ¿En qué puedo ayudarte hoy en la plataforma?'
            }]);
        }
    }, [isOpen]);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!input.trim() || isTyping) return;

        const originalInput = input;
        setInput('');
        
        const newHistory = [...messages, { role: 'user', content: originalInput } as ChatMessage];
        setMessages(newHistory);
        setIsTyping(true);

        const res = await askSupportAI(messages.filter(m => m.role !== 'system'), originalInput);
        
        setIsTyping(false);
        if (res.success && res.answer) {
            setMessages(prev => [...prev, { role: 'assistant', content: res.answer } as ChatMessage]);
        } else {
            setMessages(prev => [...prev, { 
                role: 'assistant', 
                content: '⚠️ Ocurrió un error consultando a la IA. Si el problema persiste, contacta por WhatsApp.'
            } as ChatMessage]);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Chat Window */}
            {isOpen && (
                <div className="mb-4 w-80 sm:w-96 h-[500px] max-h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col border border-indigo-100 overflow-hidden animate-in slide-in-from-bottom-5">
                    
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-4 text-white flex flex-col">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <Bot className="w-6 h-6" />
                                <span className="font-bold">Asistencia IA</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-lg transition">
                                <Minimize2 className="w-5 h-5" />
                            </button>
                        </div>
                        {/* WhatsApp Bridge Banner */}
                        <a 
                            href="https://wa.me/5493416857281" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-400 text-white text-xs font-semibold px-3 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors mt-2"
                        >
                            <LifeBuoy className="w-4 h-4" />
                            Soporte Humano Técnico
                        </a>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === 'user' 
                                        ? 'bg-blue-600 text-white rounded-tr-sm' 
                                        : 'bg-white border border-gray-200 text-gray-800 rounded-tl-sm shadow-sm'
                                }`}>
                                    <p className="whitespace-pre-wrap">{msg.content}</p>
                                </div>
                            </div>
                        ))}
                        
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-gray-200 rounded-2xl p-4 rounded-tl-sm shadow-sm flex items-center gap-1">
                                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" />
                                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
                        <input 
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Escribe tu duda técnica..."
                            className="flex-1 bg-gray-100 border-transparent rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
                        />
                        <button 
                            onClick={handleSend}
                            disabled={!input.trim() || isTyping}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white p-2.5 rounded-xl disabled:opacity-50 transition"
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}

            {/* Floating Trigger Button */}
            {!isOpen && (
                <button 
                    onClick={() => setIsOpen(true)}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center gap-3 animate-in zoom-in"
                >
                    <MessageSquare className="w-6 h-6" />
                </button>
            )}
        </div>
    );
}
