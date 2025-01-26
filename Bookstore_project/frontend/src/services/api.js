/**
 * Путь: frontend/src/services/api.js
 * 
 * Назначение: Сервис для работы с API.
 * Содержит функции для взаимодействия с бэкендом,
 * включая запросы на получение списка книг, 
 * работу с корзиной и оформление заказов.
 */

import axios from 'axios';

const api = {
    getBooks: (params) => axios.get('/api/books/', { params }),
    getBook: (id) => axios.get(`/api/books/${id}/`),
    getGenres: () => axios.get('/api/genres/'),
    searchBooks: (query) => axios.get('/api/books/search/', { params: { q: query } }),
    login: (credentials) => axios.post('/api/auth/login/', credentials),
    register: (userData) => axios.post('/api/auth/register/', userData),
    logout: () => axios.post('/api/auth/logout/'),
    getCart: () => axios.get('/api/cart/'),
    addToCart: (bookId, quantity = 1) => 
        axios.post('/api/cart/add_item/', { book_id: bookId, quantity }),
    updateCartItem: (itemId, quantity) => 
        axios.patch(`/api/cart/items/${itemId}/`, { quantity }),
    removeFromCart: (itemId) => 
        axios.delete(`/api/cart/items/${itemId}/`),
};

// Добавляем перехватчик для добавления токена к запросам
axios.interceptors.request.use(config => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user?.token) {
        config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
});

export default api;
