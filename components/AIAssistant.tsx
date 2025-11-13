import React, { useState, useRef, useEffect, useCallback } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { marked } from 'marked';
import hljs from 'highlight.js';

interface Message {
  sender: 'user' | 'ai';
  text: string;
}

// Configure marked to use highlight.js for syntax highlighting
marked.setOptions({
  highlight: (code, lang) => {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(code, { language }).value;
  },
  langPrefix: 'hljs language-',
  breaks: true,
  gfm: true,
});

const SUGGESTED_PROMPTS = [
  'What are your key skills?',
  'Tell me about your projects',
  'How can I contact you?',
];

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'ai', text: "<p>Hi! I'm Owly, the AI assistant for this portfolio. Ask me anything about Putranto's skills or projects!</p>" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const chatBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const submitMessage = useCallback(async (messageText: string) => {
    if (messageText.trim() === '' || isLoading) return;

    setShowSuggestions(false);
    const userMessage: Message = { sender: 'user', text: messageText };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const aiResponse = await sendMessageToGemini(messageText);
      const parsedHtml = marked.parse(aiResponse) as string;
      const aiMessage: Message = { sender: 'ai', text: parsedHtml };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error communicating with Gemini:", error);
      const errorMessage: Message = { sender: 'ai', text: "<p>Sorry, I'm having trouble connecting right now. Please try again later.</p>" };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);
  
  const handleSend = () => {
    submitMessage(input);
  };

  const handleSuggestionClick = (prompt: string) => {
    submitMessage(prompt);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Bubble */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green text-navy rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-200 flex items-center justify-center"
          aria-label={isOpen ? 'Close chat' : 'Open chat'}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-full max-w-sm h-[60vh] bg-light-navy rounded-lg shadow-2xl flex flex-col z-50 animate-fade-in-up">
          <div className="bg-lightest-navy p-4 rounded-t-lg">
            <h3 className="text-lg font-bold text-lightest-slate">AI Portfolio Assistant</h3>
          </div>
          <div ref={chatBoxRef} className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${msg.sender === 'user' ? 'bg-green text-navy' : 'bg-lightest-navy text-lightest-slate'}`}>
                   {msg.sender === 'user' ? 
                    <p className="text-sm">{msg.text}</p> :
                    <div className="text-sm ai-response-content" dangerouslySetInnerHTML={{ __html: msg.text }} />
                  }
                </div>
              </div>
            ))}
            {showSuggestions && (
               <div className="pt-2 flex flex-col items-start space-y-2">
                {SUGGESTED_PROMPTS.map((prompt, index) => (
                   <button
                    key={index}
                    onClick={() => handleSuggestionClick(prompt)}
                    className="bg-lightest-navy text-slate px-3 py-2 text-left text-sm rounded-lg border border-slate/20 hover:border-green hover:text-green transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isLoading}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}
             {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-xs lg:max-w-md px-4 py-2 rounded-2xl bg-lightest-navy text-lightest-slate">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-slate rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-slate rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-slate rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="p-4 border-t border-lightest-navy flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about a project..."
              className="flex-1 bg-navy text-lightest-slate px-4 py-2 rounded-l-md rounded-r-none focus:outline-none focus:ring-2 focus:ring-green"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              className="bg-green text-navy px-4 py-2 rounded-r-md rounded-l-none font-bold disabled:opacity-50"
              disabled={isLoading || !input.trim()}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;