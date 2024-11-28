import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa';
import useChatStore from '../store/chatStore';
import toast from 'react-hot-toast';

function LiveChat() {
  const { isOpen, toggleChat, messages, addMessage } = useChatStore();
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    addMessage({
      id: Date.now(),
      text: newMessage,
      sender: 'user',
      timestamp: new Date().toISOString(),
    });

    setTimeout(() => {
      addMessage({
        id: Date.now() + 1,
        text: "Thank you for your message! Our team will get back to you shortly.",
        sender: 'agent',
        timestamp: new Date().toISOString(),
      });
    }, 1000);

    setNewMessage('');
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 z-50 w-80"
          >
            <div className="bg-white rounded-lg shadow-xl">
              <div className="bg-gray-900 text-white p-4 rounded-t-lg flex justify-between items-center">
                <div className="flex items-center">
                  <FaComments className="mr-2" />
                  <h3 className="font-bold">Live Chat</h3>
                </div>
                <button onClick={toggleChat} className="hover:text-yellow-500 transition-colors">
                  <FaTimes />
                </button>
              </div>
              <div className="h-80 p-4 overflow-y-auto">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`mb-4 flex ${
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === 'user'
                          ? 'bg-yellow-500 text-white'
                          : 'bg-gray-100'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <span className="text-xs opacity-75 mt-1 block">
                        {new Date(message.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              <form onSubmit={handleSubmit} className="p-4 border-t">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-400 transition-colors"
                  >
                    <FaPaperPlane />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 z-50 bg-yellow-500 text-white p-4 rounded-full shadow-lg hover:bg-yellow-400 transition-colors"
      >
        <FaComments className="w-6 h-6" />
        {messages.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {messages.length}
          </span>
        )}
      </button>
    </>
  );
}

export default LiveChat;