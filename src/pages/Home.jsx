import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { FaGem, FaCertificate, FaAward, FaShippingFast, FaHeadset } from 'react-icons/fa';
import ProductSlider from '../components/ProductSlider';
import TestimonialCard from '../components/TestimonialCard';

function Home() {
  const featuredGems = [
    {
      id: 1,
      name: "Natural Ruby",
      price: 1999,
      image: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=500&auto=format"
    },
    {
      id: 2,
      name: "Blue Sapphire",
      price: 2499,
      image: "https://images.unsplash.com/photo-1615655096345-61a54750068d?w=500&auto=format"
    },
    {
      id: 3,
      name: "Emerald",
      price: 1799,
      image: "https://images.unsplash.com/photo-1551122087-f99a4ade46ce?w=500&auto=format"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment: "Exceptional quality and service! The sapphire I purchased exceeded my expectations.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      comment: "The team's expertise helped me find the perfect engagement ring. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format"
    },
    {
      id: 3,
      name: "Emily Davis",
      rating: 5,
      comment: "Beautiful selection of gemstones and excellent customer service.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format"
    }
  ];

  const features = [
    {
      icon: <FaGem />,
      title: "Premium Quality",
      description: "Only the finest gemstones"
    },
    {
      icon: <FaCertificate />,
      title: "Certified Authentic",
      description: "Guaranteed authenticity"
    },
    {
      icon: <FaAward />,
      title: "Expert Selection",
      description: "Curated by professionals"
    },
    {
      icon: <FaShippingFast />,
      title: "Global Shipping",
      description: "Worldwide delivery"
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      description: "Always here to help"
    }
  ];

  return (
    <div className="bg-white">
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-400 text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Gemstones</h2>
            <p className="mt-4 text-gray-600">Discover our most exceptional pieces</p>
          </motion.div>
          <ProductSlider products={featuredGems} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Customers Say</h2>
            <p className="mt-4 text-gray-600">Real experiences from our valued clients</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-400 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-primary-200 to-primary-400" />
            </div>
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Stay Updated
                </h2>
                <p className="text-primary-50 mb-8 max-w-2xl mx-auto">
                  Subscribe to our newsletter for exclusive offers and insights into the world of premium gemstones.
                </p>
                <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-3 rounded-full focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="px-8 py-3 bg-white text-primary-400 rounded-full hover:bg-primary-50 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;