import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGem, FaShoppingCart, FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Cart from './Cart';
import useCartStore from '../store/cartStore';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const cartItems = useCartStore((state) => state.items);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/collections', label: 'Collections' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/blog', label: 'Blog' }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/923497880632', '_blank');
  };

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/50 backdrop-blur-md shadow-lg' 
            : 'bg-gradient-to-b from-black/70 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="bg-primary-400 p-2 rounded-lg"
              >
                <FaGem className="h-6 w-6 text-white" />
              </motion.div>
              <span className="text-xl font-bold text-white">
                SaltMarket
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative group text-white hover:text-primary-200 transition-colors duration-300 ${
                    location.pathname === link.path ? 'text-primary-200' : ''
                  }`}
                >
                  {link.label}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              ))}
              <button 
                onClick={toggleCart}
                className="relative p-2 bg-primary-400/20 hover:bg-primary-400/40 rounded-lg transition-colors duration-300"
              >
                <FaShoppingCart className="h-5 w-5 text-white" />
                {cartItems.length > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-primary-400 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"
                  >
                    {cartItems.length}
                  </motion.span>
                )}
              </button>
            </div>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 bg-primary-400/20 hover:bg-primary-400/40 rounded-lg transition-colors duration-300"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6 text-white" />
              ) : (
                <FaBars className="h-6 w-6 text-white" />
              )}
            </button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden bg-black/95 backdrop-blur-md rounded-lg mt-2"
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block px-4 py-3 rounded-lg transition-colors duration-300 ${
                        location.pathname === link.path
                          ? 'bg-primary-400/20 text-primary-200'
                          : 'text-white hover:bg-primary-400/20 hover:text-primary-200'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <button 
                    onClick={toggleCart}
                    className="w-full flex items-center px-4 py-3 text-white hover:bg-primary-400/20 hover:text-primary-200 rounded-lg transition-colors duration-300"
                  >
                    <FaShoppingCart className="h-5 w-5 mr-2" />
                    Cart ({cartItems.length})
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Cart />
      </nav>

      {/* WhatsApp Button */}
      <motion.button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 left-6 z-50 bg-primary-400 text-white p-4 rounded-full shadow-lg hover:bg-primary-500 transition-all duration-300 transform hover:-translate-y-1"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp className="h-6 w-6" />
        <span className="sr-only">Contact on WhatsApp</span>
      </motion.button>
    </>
  );
}

export default Navbar;