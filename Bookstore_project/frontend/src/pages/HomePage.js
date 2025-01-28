/**
 * Путь: frontend/src/pages/HomePage.js
 * 
 * Назначение: Главная страница приложения.
 * Компонент отвечает за общую структуру и layout главной страницы,
 * включая навигационную панель, заголовок, секцию с фильтрами и
 * списком книг, а также подвал страницы.
 */

import React from 'react';
import { Box } from '@mui/material';
import BookList from '../components/Books/BookList';
import BookFilter from '../components/Books/BookFilter';

function HomePage() {
  const handleFilterChange = (filters) => {
    // Здесь будет логика применения фильтров
    console.log('Applied filters:', filters);
  };

  return (
    <Box sx={{ 
      display: 'flex',
      gap: 2
    }}>
      <Box sx={{ width: 240 }}>
        <BookFilter onFilterChange={handleFilterChange} />
      </Box>
      <Box sx={{ flex: 1 }}>
        <BookList />
      </Box>
    </Box>
  );
}

export default HomePage;
