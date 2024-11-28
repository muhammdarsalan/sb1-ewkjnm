import React from 'react';
import { FaStar } from 'react-icons/fa';

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-bold">{testimonial.name}</h3>
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'} />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 italic">{testimonial.comment}</p>
    </div>
  );
}

export default TestimonialCard;