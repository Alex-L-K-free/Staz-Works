/**
 * Путь: frontend/src/components/Books/BookGrid.js
 * 
 * Назначение: Компонент сетки книг.
 * Отображает книги в виде адаптивной сетки,
 * автоматически подстраивающейся под размер экрана.
 */

import React from 'react';
import { Grid } from '@mui/material';
import BookCard from './BookCard';

const BookGrid = ({ books }) => {
  return (
    <Grid container spacing={3}>
      {books.map((book) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
          <BookCard book={book} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BookGrid; 