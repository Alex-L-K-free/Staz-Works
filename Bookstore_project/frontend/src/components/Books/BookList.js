/**
 * Путь: frontend/src/components/Books/BookList.js
 * 
 * Назначение: Компонент для отображения списка книг.
 * Отвечает за организацию и отображение карточек книг в виде сетки,
 * обеспечивает адаптивную верстку и прокрутку списка книг.
 */

import React from 'react';
import { Grid, Box, useTheme, useMediaQuery } from '@mui/material';
import BookCard from './BookCard';

function BookList() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  // Тестовые данные для отображения
  const books = [
    {
      id: 1,
      title: "Тестовая книга",
      author: "Автор Книги",
      year: 2024,
      price: 999,
      image: "https://via.placeholder.com/200x300?text=Book+1"
    }
  ];

  return (
    <Box sx={{ 
      overflowX: 'auto',
      '&::-webkit-scrollbar': {
        height: 8,
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: 'rgba(0,0,0,0.1)',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: 4,
      }
    }}>
      <Grid 
        container 
        spacing={{ xs: 1, sm: 2 }}
        sx={{ 
          width: '100%',
          flexWrap: { xs: 'nowrap', sm: 'wrap' }
        }}
      >
        {books && books.map((book) => (
          <Grid item xs={isMobile ? 'auto' : 12} sm={6} md={4} lg={3} key={book.id}>
            <BookCard book={book} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default BookList; 