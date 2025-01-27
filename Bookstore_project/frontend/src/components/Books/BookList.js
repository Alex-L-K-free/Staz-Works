/**
 * Путь: frontend/src/components/Books/BookList.js
 * 
 * Назначение: Компонент для отображения списка книг.
 * Отвечает за организацию и отображение карточек книг в виде сетки,
 * обеспечивает адаптивную верстку и прокрутку списка книг.
 */

import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import BookCard from './BookCard';
import axios from 'axios';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Получаем данные с бэкенда при монтировании компонента
    const fetchBooks = async () => {
      try {
        const response = await axios.get('/api/books/');
        setBooks(response.data);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <Grid container spacing={3}>
      {books && books.map((book) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
          <BookCard book={book} />
        </Grid>
      ))}
    </Grid>
  );
}

export default BookList; 