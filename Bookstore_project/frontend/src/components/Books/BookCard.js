import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const BookCard = ({ book }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"
        height="250"
        image={book.image || '/placeholder.jpg'}
        alt={book.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6">
          {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Автор: {book.author}
        </Typography>
        <Typography variant="h6" color="primary">
          {book.price} руб.
        </Typography>
        <Button variant="contained" color="primary">
          Добавить в корзину
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookCard; 