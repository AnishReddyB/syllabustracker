import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! I'm your EduTrack AI assistant. How can I help you study today?", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newUserMessage = { id: Date.now(), text: inputValue, sender: "user" };
    setMessages([...messages, newUserMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "I can help with that! However, I'm currently a demo bot.";
      
      const lowerInput = newUserMessage.text.toLowerCase();
      if (lowerInput.includes("syllabus") || lowerInput.includes("track")) {
        botResponse = "You can track your syllabus by navigating to the 'Syllabus Tracker' page on your left menu.";
      } else if (lowerInput.includes("test") || lowerInput.includes("mock")) {
        botResponse = "You can take a mock test in the 'Test' section to test your knowledge.";
      } else if (lowerInput.includes("material") || lowerInput.includes("notes")) {
        botResponse = "Check out the 'Study Materials' page for curated PDFs and video lectures.";
      }

      setMessages(prev => [...prev, { id: Date.now(), text: botResponse, sender: "bot" }]);
    }, 1000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:-translate-y-1 transition-all z-40 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <MessageSquare size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 w-80 sm:w-96 bg-dark-800 border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col h-[500px] max-h-[80vh]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-bold">EduTrack Assistant</h3>
                  <p className="text-xs text-white/80 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block"></span> Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-dark-900/50">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-3 max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className="flex-shrink-0 mt-1">
                      {msg.sender === 'bot' ? (
                        <div className="w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center">
                          <Bot size={16} />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-dark-700 text-gray-300 flex items-center justify-center border border-white/5">
                          <User size={16} />
                        </div>
                      )}
                    </div>
                    
                    <div className={`p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      msg.sender === 'user' 
                        ? 'bg-primary-600 text-white rounded-tr-sm' 
                        : 'bg-dark-800 border border-white/5 text-gray-200 rounded-tl-sm'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-4 bg-dark-800 border-t border-white/5">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything..."
                  className="w-full bg-dark-900 border border-white/10 rounded-full py-2.5 pl-4 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
                <button 
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="absolute right-1 w-9 h-9 rounded-full bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500/50 disabled:cursor-not-allowed flex items-center justify-center text-white transition-colors"
                >
                  <Send size={16} className="ml-0.5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
