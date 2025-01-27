/**
 * Путь: frontend/src/pages/HomePage.js
 * 
 * Назначение: Главная страница приложения.
 * Компонент отвечает за общую структуру и layout главной страницы,
 * включая навигационную панель, заголовок, секцию с фильтрами и
 * списком книг, а также подвал страницы.
 */

import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import BookFilter from '../components/Books/BookFilter';
import BookList from '../components/Books/BookList';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

function HomePage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Container sx={{ flex: 1, py: 4 }}>
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Paper sx={{ width: 250, p: 2 }}>
            <BookFilter />
          </Paper>
          <Paper sx={{ flex: 1, p: 2 }}>
            <BookList />
          </Paper>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}

export default HomePage;
