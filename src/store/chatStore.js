import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useChatStore = create(
  persist(
    (set) => ({
      messages: [],
      isOpen: false,
      toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),
      addMessage: (message) =>
        set((state) => ({
          messages: [...state.messages, message],
        })),
      clearChat: () => set({ messages: [] }),
    }),
    {
      name: 'chat-storage',
    }
  )
);

export default useChatStore;