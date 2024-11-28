import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useWishlistStore = create(
  persist(
    (set) => ({
      items: [],
      toggleItem: (product) =>
        set((state) => {
          const exists = state.items.some((item) => item.id === product.id);
          if (exists) {
            return {
              items: state.items.filter((item) => item.id !== product.id),
            };
          }
          return { items: [...state.items, product] };
        }),
      isInWishlist: (productId) =>
        useWishlistStore
          .getState()
          .items.some((item) => item.id === productId),
      clearWishlist: () => set({ items: [] }),
    }),
    {
      name: 'wishlist-storage',
    }
  )
);

export default useWishlistStore;