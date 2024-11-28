import React from 'react';
import { FaGem, FaAward, FaHandshake } from 'react-icons/fa';

function About() {
  const features = [
    {
      icon: <FaGem className="w-12 h-12 text-yellow-500" />,
      title: "Premium Quality",
      description: "We source only the finest gemstones from trusted suppliers worldwide."
    },
    {
      icon: <FaAward className="w-12 h-12 text-yellow-500" />,
      title: "Certified Authentic",
      description: "Every gemstone comes with authentication and quality certification."
    },
    {
      icon: <FaHandshake className="w-12 h-12 text-yellow-500" />,
      title: "Expert Service",
      description: "Our team of gemologists provides professional guidance and support."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">About SaltMarket</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are passionate about bringing the world's finest gemstones to our customers. 
          With years of expertise in the industry, we ensure every stone meets the highest 
          standards of quality and authenticity.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format" 
            alt="Our Story" 
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2010, SaltMarket has grown from a small local jeweler to a 
            trusted name in the global gemstone market. Our journey began with a simple 
            mission: to provide exceptional quality gemstones with complete transparency 
            and outstanding service.
          </p>
          <p className="text-gray-600 mb-4">
            Today, we continue to uphold these values while expanding our collection to 
            include rare and unique pieces from around the world. Our team of expert 
            gemologists personally selects each stone, ensuring it meets our rigorous 
            quality standards.
          </p>
          <button className="bg-yellow-500 text-white px-8 py-3 rounded-full hover:bg-yellow-400 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;