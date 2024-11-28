import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  images: [{
    type: String,
    required: true
  }],
  category: {
    type: String,
    required: true,
    enum: ['ruby', 'sapphire', 'emerald', 'diamond']
  },
  weight: {
    type: Number,
    required: true
  },
  clarity: {
    type: String,
    required: true
  },
  cut: String,
  origin: String,
  stock: {
    type: Number,
    required: true,
    min: 0
  },
  ratings: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
    review: String
  }]
}, {
  timestamps: true
});

productSchema.index({ name: 'text', description: 'text' });

const Product = mongoose.model('Product', productSchema);
export default Product;