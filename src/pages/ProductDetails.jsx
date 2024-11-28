import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaStar } from 'react-icons/fa';
import useCartStore from '../store/cartStore';
import useWishlistStore from '../store/wishlistStore';
import toast from 'react-hot-toast';

function ProductDetails() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // In a real application, fetch product details from API
  const product = {
    id: parseInt(id),
    name: "Natural Ruby 3000ct",
    price: 2999,
    images: [
      "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=500&auto=format",
      "https://images.unsplash.com/photo-1615655096345-61a54750068d?w=500&auto=format",
      "https://images.unsplash.com/photo-1551122087-f99a4ade46ce?w=500&auto=format",
    ],
    description: "This stunning natural ruby features exceptional clarity and a vibrant red color. Perfect for both collectors and jewelry makers.",
    specifications: {
      weight: "3000 carats",
      clarity: "VS",
      cut: "Oval",
      origin: "Myanmar",
      certification: "GIA Certified"
    },
    reviews: [
      {
        id: 1,
        user: "John Doe",
        rating: 5,
        comment: "Exceptional quality and beautiful color!",
        date: "2023-12-01"
      },
      // Add more reviews...
    ]
  };

  const addToCart = useCartStore((state) => state.addItem);
  const toggleWishlist = useWishlistStore((state) => state.toggleItem);
  const isInWishlist = useWishlistStore((state) => state.isInWishlist(product.id));

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    toast.success('Added to cart!');
  };

  const handleToggleWishlist = () => {
    toggleWishlist(product);
    toast.success(isInWishlist ? 'Removed from wishlist!' : 'Added to wishlist!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <div className="mb-4">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`border-2 rounded-lg overflow-hidden ${
                  selectedImage === index ? 'border-yellow-500' : 'border-transparent'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-24 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-yellow-500 font-bold mb-6">${product.price}</p>
          
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          <div className="mb-6">
            <h2 className="font-bold mb-2">Specifications:</h2>
            <ul className="space-y-2">
              {Object.entries(product.specifications).map(([key, value]) => (
                <li key={key} className="flex justify-between">
                  <span className="text-gray-600">{key}:</span>
                  <span className="font-semibold">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Quantity:</label>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 border rounded-lg"
              >
                -
              </button>
              <span className="font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 border rounded-lg"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex gap-4 mb-8">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-400 flex items-center justify-center gap-2"
            >
              <FaShoppingCart />
              Add to Cart
            </button>
            <button
              onClick={handleToggleWishlist}
              className={`p-3 rounded-lg border flex items-center justify-center ${
                isInWishlist 
                  ? 'bg-yellow-500 text-white border-yellow-500' 
                  : 'border-gray-300 hover:border-yellow-500'
              }`}
            >
              <FaHeart />
            </button>
          </div>

          {/* Reviews */}
          <div>
            <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
            <div className="space-y-4">
              {product.reviews.map(review => (
                <div key={review.id} className="border-b pb-4">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-500 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={i < review.rating ? 'text-yellow-500' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                    <span className="font-semibold">{review.user}</span>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;