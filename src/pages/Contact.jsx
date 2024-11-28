import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser, FaPaperPlane } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Phone",
      details: "+923209734716",
      action: "tel:+923209734716",
      color: "bg-blue-50"
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email",
      details: "muhammadharoongcp@gmail.com",
      action: "mailto:muhammadharoongcp@gmail.com",
      color: "bg-green-50"
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Address",
      details: "Peshawar, Pakistan",
      action: "https://maps.google.com/?q=Peshawar,Pakistan",
      color: "bg-red-50"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Here you would typically make an API call to your backend
      toast.success('Message sent successfully! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-yellow-500 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Have questions about our gemstones? We're here to help! Reach out to us 
              through any of the following channels.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.action}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${info.color} p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  {info.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-gray-600">{info.details}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FaPaperPlane className="text-yellow-500 mr-2" />
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      required
                    />
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Your Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      required
                    />
                    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-4 rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center space-x-2"
              >
                <FaPaperPlane />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FaMapMarkerAlt className="text-yellow-500 mr-2" />
              Our Location
            </h2>
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
              <iframe
                title="Location Map"
                className="absolute inset-0 w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217852.0701190067!2d71.43115239459213!3d34.01577012213085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917b90f0e79cf%3A0xa816b2637558a412!2sPeshawar%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1703174197284!5m2!1sen!2s"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Visit Our Store</h3>
              <p className="text-gray-600">
                Experience our premium collection of gemstones in person. Our expert staff 
                is ready to assist you in finding the perfect piece.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;