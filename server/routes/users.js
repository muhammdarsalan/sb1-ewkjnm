import express from 'express';
import { 
  getUserProfile, 
  updateUserProfile, 
  updatePassword,
  getWishlist,
  toggleWishlistItem
} from '../controllers/userController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);
router.put('/password', protect, updatePassword);
router.get('/wishlist', protect, getWishlist);
router.post('/wishlist/:productId', protect, toggleWishlistItem);

export default router;