import React from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function TopBar() {
  return (
    <div className="bg-primary-400 text-white text-sm py-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-2 md:space-y-0">
            <div className="flex items-center">
              <FaPhone className="w-4 h-4 mr-2" />
              <span>+923209734716</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="w-4 h-4 mr-2" />
              <span>muhammadharoongcp@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="#" 
              className="hover:text-primary-200 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-primary-500"
            >
              <FaFacebook />
            </a>
            <a 
              href="#" 
              className="hover:text-primary-200 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-primary-500"
            >
              <FaTwitter />
            </a>
            <a 
              href="#" 
              className="hover:text-primary-200 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-primary-500"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;