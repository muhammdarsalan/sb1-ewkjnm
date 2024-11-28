import React from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useCartStore from '../store/cartStore';
import useWishlistStore from '../store/wishlistStore';
import toast from 'react-hot-toast';

function ProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addItem);
  const toggleWishlist = useWishlistStore((state) => state.toggleItem);
  const isInWishlist = useWishlistStore((state) => state.isInWishlist(product.id));

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    toast.success('Added to cart!');
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    toggleWishlist(product);
    toast.success(isInWishlist ? 'Removed from wishlist!' : 'Added to wishlist!');
  };

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(product.price);

  return (
    <Link 
      to={`/product/${product.id}`}
      className="block bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow"
    >
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 space-y-2">
          <button 
            onClick={handleToggleWishlist}
            className={`p-2 rounded-full shadow-md transition-colors ${
              isInWishlist 
                ? 'bg-primary-400 text-white' 
                : 'bg-white hover:bg-primary-400 hover:text-white'
            }`}
          >
            <FaHeart className="w-4 h-4" />
          </button>
          <button 
            onClick={handleAddToCart}
            className="bg-white p-2 rounded-full shadow-md hover:bg-primary-400 hover:text-white transition-colors"
          >
            <FaShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold mb-2 text-gray-900">{product.name}</h3>
        <p className="text-primary-400 font-semibold mb-4">{formattedPrice}</p>
        <div 
          className="block w-full bg-primary-400 text-white py-2 rounded text-center hover:bg-primary-500 transition-colors"
        >
          View Details
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;