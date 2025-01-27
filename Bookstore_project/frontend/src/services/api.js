/**
 * Путь: frontend/src/services/api.js
 * 
 * Назначение: Сервис для работы с API.
 * Содержит функции для взаимодействия с бэкендом,
 * включая запросы на получение списка книг, 
 * работу с корзиной и оформление заказов.
 */

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',  // Изменим URL на точный
  headers: {
    'Content-Type': 'application/json',
  }
});

// Перехватчик для добавления токена
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Перехватчик для обработки ошибок
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.error('API Error:', error.response?.data);
    return Promise.reject(error);
  }
);

const apiFunctions = {
    getBooks: (params) => api.get('/books/', { params }),
    getBook: (id) => api.get(`/books/${id}/`),
    getGenres: () => api.get('/genres/'),
    searchBooks: (query) => api.get('/books/search/', { params: { q: query } }),
    login: (credentials) => api.post('/users/token/', credentials),
    register: (userData) => api.post('/users/register/', userData),
    logout: () => api.post('/auth/logout/'),
    getCart: () => api.get('/cart/'),
    addToCart: (bookId, quantity = 1) => 
        api.post('/cart/add_item/', { book_id: bookId, quantity }),
    updateCartItem: (itemId, quantity) => 
        api.patch(`/cart/items/${itemId}/`, { quantity }),
    removeFromCart: (itemId) => 
        api.delete(`/cart/items/${itemId}/`),
};

export const authAPI = {
  register: async (userData) => {
    const response = await api.post('/users/register/', userData);
    return response.data;
  },

  login: async (credentials) => {
    const response = await api.post('/users/token/', credentials);
    if (response.data.access) {
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
    }
    return response.data;
  },

  getProfile: async () => {
    try {
      const response = await api.get('/users/profile/');
      return response.data;
    } catch (error) {
      console.error('Error fetching profile:', error);
      throw error;
    }
  },

  updateProfile: async (userData) => {
    try {
      const response = await api.put('/users/profile/', userData);
      return response.data;
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  }
};

export default api;
