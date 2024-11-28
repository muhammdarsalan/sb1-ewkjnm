import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaGem } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-primary-400 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <FaGem className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold">SaltMarket</span>
            </div>
            <p className="text-primary-100">
              Your trusted source for premium quality gemstones and jewelry.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-primary-100 hover:text-white">Home</Link></li>
              <li><Link to="/collections" className="text-primary-100 hover:text-white">Collections</Link></li>
              <li><Link to="/gallery" className="text-primary-100 hover:text-white">Gallery</Link></li>
              <li><Link to="/about" className="text-primary-100 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-primary-100 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-primary-100">
              <li>Peshawar, Pakistan</li>
              <li>Phone: +923209734716</li>
              <li>Email: muhammadharoongcp@gmail.com</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-100 hover:text-white">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary-100 hover:text-white">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary-100 hover:text-white">
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-300 mt-8 pt-8 text-center text-primary-100">
          <p>&copy; 2023 SaltMarket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;