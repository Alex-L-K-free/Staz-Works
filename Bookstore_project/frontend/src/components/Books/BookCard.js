import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

function BookCard({ book }) {
  return (
    <Card sx={{ width: 200, height: 320 }}>
      <CardMedia
        component="img"
        height="200"
        image={book?.image || '/placeholder.jpg'}
        alt={book?.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" noWrap>
          {book?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {book?.author}
        </Typography>
        <Typography variant="h6" color="primary">
          {book?.price} ₽
        </Typography>
        <Button variant="contained" size="small" fullWidth>
          В корзину
        </Button>
      </CardContent>
    </Card>
  );
}

export default BookCard; 