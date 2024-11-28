import React, { useState } from 'react';
import { FaCalendar, FaUser, FaComment, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

function Blog() {
  const [expandedPost, setExpandedPost] = useState(null);
  const [email, setEmail] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Diamond Clarity and Cut",
      excerpt: "Learn about the key factors that determine a diamond's quality and value...",
      content: `A diamond's clarity and cut are two of the most important factors that determine its value and beauty. Clarity refers to the absence of inclusions and blemishes, while cut determines how well the diamond interacts with light.

      The clarity scale ranges from Flawless (no inclusions or blemishes visible under 10x magnification) to Included (inclusions visible to the naked eye). The cut scale ranges from Excellent to Poor, with better cuts producing more brilliance and fire.

      When choosing a diamond, it's important to balance these factors with your budget. A slightly included diamond with an excellent cut might be a better choice than a VS1 diamond with a poor cut, as the cut has a bigger impact on the diamond's visual appeal.`,
      image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=500&auto=format",
      date: "Dec 15, 2023",
      author: "Emma Stone",
      comments: 12
    },
    {
      id: 2,
      title: "The History of Rubies",
      excerpt: "Explore the fascinating history of rubies through ancient civilizations...",
      content: `Rubies have been prized throughout history for their deep red color and cultural significance. Ancient civilizations believed rubies held the power of life and were often used in important ceremonies.

      The most valuable rubies come from Myanmar (formerly Burma) and are known for their "pigeon blood" red color. These stones have been traded along the Silk Road for thousands of years and have adorned the crowns of kings and queens.

      Today, rubies remain one of the most valuable gemstones, with fine specimens often commanding higher prices than diamonds of similar size.`,
      image: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=500&auto=format",
      date: "Dec 14, 2023",
      author: "James Wilson",
      comments: 8
    },
    {
      id: 3,
      title: "Investing in Precious Stones",
      excerpt: "Learn about the investment potential of various gemstones...",
      content: `Gemstones have long been considered a store of value and a hedge against inflation. Unlike many other investments, precious stones are portable, private, and have intrinsic value.

      When investing in gemstones, it's crucial to consider factors such as rarity, quality, and market demand. Certificates from respected laboratories are essential for verifying authenticity and quality.

      While diamonds remain popular, colored stones like sapphires, rubies, and emeralds have shown strong appreciation over the years, particularly rare, high-quality specimens.`,
      image: "https://images.unsplash.com/photo-1615655096345-61a54750068d?w=500&auto=format",
      date: "Dec 13, 2023",
      author: "Sarah Johnson",
      comments: 15
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success('Successfully subscribed to newsletter!');
    setEmail('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Our Blog</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover the latest insights, trends, and stories from the world of gemstones 
          and jewelry through our expert articles and guides.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {expandedPost === post.id ? post.content : post.excerpt}
              </p>
              <button
                onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                className="text-yellow-500 font-semibold hover:text-yellow-600 flex items-center gap-2"
              >
                {expandedPost === post.id ? 'Show Less' : 'Read More'}
                <FaArrowRight />
              </button>
              <div className="flex items-center text-sm text-gray-500 space-x-4 mt-4">
                <div className="flex items-center">
                  <FaCalendar className="mr-2" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <FaUser className="mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <FaComment className="mr-2" />
                  {post.comments}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-16 bg-gray-900 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-300 mb-6">
          Stay updated with our latest articles, news, and special offers.
        </p>
        <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg text-gray-900"
            required
          />
          <button
            type="submit"
            className="bg-yellow-500 px-6 py-2 rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Blog;