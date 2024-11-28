import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem('hasSeenNewsletterPopup');
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you for subscribing!');
    setIsOpen(false);
    localStorage.setItem('hasSeenNewsletterPopup', 'true');
  };

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenNewsletterPopup', 'true');
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl p-8 max-w-md"
          >
            <Dialog.Title className="text-2xl font-bold mb-4">
              Join Our Newsletter
            </Dialog.Title>
            <Dialog.Description className="text-gray-600 mb-6">
              Subscribe to receive updates about new collections and special offers!
            </Dialog.Description>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                required
              />
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-400 transition-colors"
                >
                  Subscribe
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Maybe Later
                </button>
              </div>
            </form>
          </motion.div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default NewsletterPopup;