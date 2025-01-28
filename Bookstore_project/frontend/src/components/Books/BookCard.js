/**
 * Путь: frontend/src/components/Books/BookCard.js
 * 
 * Назначение: Компонент карточки отдельной книги.
 * Отображает информацию о книге включая изображение, название,
 * автора, цену и кнопку добавления в корзину. Обеспечивает
 * адаптивное отображение на разных устройствах.
 */

import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box
} from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';

function BookCard({ book = {} }) {
  if (!book) return null;

  return (
    <Card sx={{ 
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      '& .MuiCardContent-root': {
        p: 1.5
      }
    }}>
      <CardMedia
        component="img"
        height="160"
        image={book.image || 'https://via.placeholder.com/200x300?text=No+Image'}
        alt={book.title || 'Book cover'}
        sx={{ objectFit: 'contain' }}
      />
      <CardContent sx={{ 
        flexGrow: 1, 
        display: 'flex', 
        flexDirection: 'column',
        p: 1.5
      }}>
        <Typography variant="subtitle1" component="div" noWrap>
          {book.title || 'Название отсутствует'}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {book.author || 'Автор не указан'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {book.year ? `${book.year} г.` : 'Год не указан'}
        </Typography>
        <Box sx={{ mt: 'auto', pt: 1 }}>
          <Typography variant="h6" color="primary" gutterBottom>
            {book.price ? `${book.price} руб.` : 'Цена не указана'}
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddShoppingCart />}
            fullWidth
            size="small"
          >
            В корзину
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default BookCard; 