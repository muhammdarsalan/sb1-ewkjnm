import React from 'react';
import { motion } from 'framer-motion';

function Gallery() {
  const gems = [
    { id: 1, url: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=500&auto=format", name: "Ruby" },
    { id: 2, url: "https://images.unsplash.com/photo-1615655096345-61a54750068d?w=500&auto=format", name: "Sapphire" },
    { id: 3, url: "https://images.unsplash.com/photo-1551122087-f99a4ade46ce?w=500&auto=format", name: "Emerald" },
    { id: 4, url: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=500&auto=format", name: "Diamond" },
    { id: 5, url: "https://images.unsplash.com/photo-1583937443351-f2f669fbe2cf?w=500&auto=format", name: "Amethyst" },
    { id: 6, url: "https://images.unsplash.com/photo-1588159729892-6a20e999a678?w=500&auto=format", name: "Topaz" },
    { id: 7, url: "https://images.unsplash.com/photo-1598517511194-ed5cf9125432?w=500&auto=format", name: "Opal" },
    { id: 8, url: "https://images.unsplash.com/photo-1584814361276-d5f1f9108142?w=500&auto=format", name: "Peridot" },
    { id: 9, url: "https://images.unsplash.com/photo-1601121141461-9d6647185a7e?w=500&auto=format", name: "Garnet" },
    { id: 10, url: "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?w=500&auto=format", name: "Tanzanite" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Gemstone Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gems.map((gem, index) => (
          <motion.div
            key={gem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="relative group"
          >
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={gem.url}
                alt={gem.name}
                className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{gem.name}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;