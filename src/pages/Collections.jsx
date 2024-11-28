import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { FaFilter, FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Collections() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState(10000);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const products = [
    {
      id: 1,
      name: "Natural Ruby 3000ct",
      price: 2999,
      image: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=500&auto=format",
      category: "ruby"
    },
    {
      id: 2,
      name: "Blue Sapphire 2500ct",
      price: 3499,
      image: "https://images.unsplash.com/photo-1615655096345-61a54750068d?w=500&auto=format",
      category: "sapphire"
    },
    {
      id: 3,
      name: "Emerald 1800ct",
      price: 2799,
      image: "https://images.unsplash.com/photo-1551122087-f99a4ade46ce?w=500&auto=format",
      category: "emerald"
    },
    {
      id: 4,
      name: "Diamond 5ct",
      price: 9999,
      image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=500&auto=format",
      category: "diamond"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Gems' },
    { id: 'ruby', name: 'Rubies' },
    { id: 'sapphire', name: 'Sapphires' },
    { id: 'emerald', name: 'Emeralds' },
    { id: 'diamond', name: 'Diamonds' }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'name-asc', label: 'Name: A to Z' },
    { value: 'name-desc', label: 'Name: Z to A' }
  ];

  const filteredProducts = products
    .filter(product => 
      (selectedCategory === 'all' || product.category === selectedCategory) &&
      product.price <= priceRange &&
      (searchQuery === '' || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64 bg-white p-6 rounded-lg shadow-md h-fit sticky top-20">
          <div className="flex items-center gap-2 mb-6">
            <FaFilter className="text-yellow-500" />
            <h2 className="text-xl font-bold">Filters</h2>
          </div>
          
          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="font-semibold mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full text-left px-4 py-2 rounded transition-colors ${
                    selectedCategory === category.id 
                      ? 'bg-yellow-500 text-white' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h3 className="font-semibold mb-4">Price Range</h3>
            <input 
              type="range" 
              min="0" 
              max="10000" 
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full accent-yellow-500"
            />
            <div className="flex justify-between mt-2">
              <span>$0</span>
              <span>${priceRange}</span>
            </div>
          </div>

          {/* Sort */}
          <div>
            <h3 className="font-semibold mb-4">Sort By</h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">
              {selectedCategory === 'all' ? 'All Gemstones' : `${categories.find(c => c.id === selectedCategory)?.name}`}
            </h2>
            <p className="text-gray-600">
              {filteredProducts.length} products found
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            {filteredProducts.map(product => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Collections;