import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="w-full h-full"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=2000&q=80')",
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
              <span className="block">Discover Rare &</span>
              <span className="block mt-2 text-primary-200">Authentic Gemstones</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white mt-6">
              Your trusted source for premium quality stones, carefully curated for collectors and connoisseurs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link
                to="/collections"
                className="w-full sm:w-auto px-8 py-4 bg-primary-400 text-white rounded-lg overflow-hidden shadow-lg hover:bg-primary-500 transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="relative z-10">Explore Collection</span>
              </Link>
              
              <Link
                to="/about"
                className="w-full sm:w-auto px-8 py-4 text-white border-2 border-white/50 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 bg-primary-400/5 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;