/**
 * Путь: frontend/src/pages/HomePage.js
 * 
 * Назначение: Главная страница приложения.
 * Компонент отвечает за общую структуру и layout главной страницы,
 * включая навигационную панель, заголовок, секцию с фильтрами и
 * списком книг, а также подвал страницы.
 */

import React from 'react';
import { Box, Container, Typography, Paper, useTheme, useMediaQuery } from '@mui/material';
import BookFilter from '../components/Books/BookFilter';
import BookList from '../components/Books/BookList';

function HomePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100vh', // Фиксированная высота на весь экран
      overflow: 'hidden' // Предотвращает скролл всей страницы
    }}>
      {/* Компактный navbar */}
      <Box sx={{ 
        bgcolor: 'primary.main', 
        py: 1, // Уменьшенный вертикальный padding
        px: 2,
        height: '48px', // Фиксированная высота
        display: 'flex',
        alignItems: 'center'
      }}>
        <Typography 
          variant="h6" 
          color="white"
          sx={{ fontSize: '1.1rem' }}
        >
          Книжный магазин
        </Typography>
      </Box>

      {/* Компактный заголовок */}
      <Box sx={{ 
        bgcolor: 'background.paper',
        py: 2, // Уменьшенный padding
        px: 2,
        height: '80px', // Фиксированная высота
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Typography 
          variant="h4" 
          align="center"
          sx={{ fontSize: '1.5rem' }}
        >
          Добро пожаловать в наш книжный магазин
        </Typography>
      </Box>

      {/* Основной контент */}
      <Box sx={{ 
        flex: 1,
        display: 'flex',
        px: 2, // Отступы по бокам
        gap: 2,
        overflow: 'hidden' // Важно для скролла контента
      }}>
        {/* Панель фильтров - прижата к левому краю */}
        <Paper 
          sx={{ 
            width: '250px', // Фиксированная ширина
            height: '100%',
            overflow: 'auto',
            p: 2,
            flexShrink: 0 // Предотвращает сжатие
          }}
        >
          <BookFilter />
        </Paper>

        {/* Контейнер для книг - растягивается на оставшееся пространство */}
        <Paper 
          sx={{ 
            flex: 1,
            height: '100%',
            overflow: 'auto',
            p: 2
          }}
        >
          <BookList />
        </Paper>
      </Box>

      {/* Компактный footer */}
      <Box sx={{ 
        bgcolor: 'primary.main', 
        py: 1, // Уменьшенный padding
        px: 2,
        height: '40px', // Фиксированная высота
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Typography 
          color="white" 
          variant="body2"
        >
          © 2024 Книжный магазин
        </Typography>
      </Box>
    </Box>
  );
}

export default HomePage;
