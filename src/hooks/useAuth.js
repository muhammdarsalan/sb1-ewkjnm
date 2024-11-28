import { create } from 'zustand';
import api from '../utils/api';

const useAuth = create((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,

  login: async (credentials) => {
    try {
      const response = await api.post('/api/auth/login', credentials);
      localStorage.setItem('token', response.data.token);
      set({ user: response.data.user, isAuthenticated: true });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  register: async (userData) => {
    try {
      const response = await api.post('/api/auth/register', userData);
      localStorage.setItem('token', response.data.token);
      set({ user: response.data.user, isAuthenticated: true });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    set({ user: null, isAuthenticated: false });
  },

  checkAuth: async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        set({ isLoading: false });
        return;
      }
      const response = await api.get('/api/users/profile');
      set({ user: response.data, isAuthenticated: true, isLoading: false });
    } catch (error) {
      localStorage.removeItem('token');
      set({ user: null, isAuthenticated: false, isLoading: false });
    }
  }
}));

export default useAuth;