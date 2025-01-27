/**
 * Путь: frontend/src/pages/HomePage.js
 * 
 * Назначение: Главная страница приложения.
 * Компонент отвечает за общую структуру и layout главной страницы,
 * включая навигационную панель, заголовок, секцию с фильтрами и
 * списком книг, а также подвал страницы.
 */

import React from 'react';
import { Box, Container, Paper } from '@mui/material';
import BookFilter from '../components/Books/BookFilter';
import BookList from '../components/Books/BookList';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

function HomePage() {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100vh', // Фиксированная высота
      overflow: 'hidden' // Предотвращаем прокрутку всей страницы
    }}>
      <Navbar />
      <Container 
        maxWidth={false} // Разрешаем контейнеру растягиваться
        sx={{ 
          flex: 1,
          py: 2, // Уменьшаем отступы
          overflow: 'hidden', // Предотвращаем прокрутку контейнера
          display: 'flex'
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          gap: 2, // Уменьшаем отступ между фильтром и списком
          width: '100%',
          overflow: 'hidden' // Предотвращаем прокрутку бокса
        }}>
          {/* Фильтр */}
          <Paper sx={{ 
            width: '200px', // Уменьшаем ширину фильтра
            p: 1.5, // Уменьшаем внутренние отступы
            overflow: 'auto' // Добавляем прокрутку для фильтра
          }}>
            <BookFilter />
          </Paper>

          {/* Список книг */}
          <Paper sx={{ 
            flex: 1,
            p: 1.5,
            overflow: 'auto' // Добавляем прокрутку для списка книг
          }}>
            <BookList />
          </Paper>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}

export default HomePage;
