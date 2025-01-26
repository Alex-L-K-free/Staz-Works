/**
 * Путь: frontend/src/components/Cart/CartItem.js
 * 
 * Назначение: Компонент элемента корзины.
 * Отображает информацию о товаре в корзине,
 * позволяет изменять количество и удалять товар.
 */

import React from 'react';
import { 
  Box, 
  Typography, 
  IconButton, 
  Card, 
  CardMedia, 
  CardContent 
} from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <Card sx={{ display: 'flex', mb: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        image={item.book.image}
        alt={item.book.title}
      />
      <CardContent sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6">{item.book.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {item.book.author}
          </Typography>
          <Typography variant="h6" color="primary">
            {item.total_price} ₽
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
            <Remove />
          </IconButton>
          <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
          <IconButton onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
            <Add />
          </IconButton>
          <IconButton onClick={() => onRemove(item.id)} color="error">
            <Delete />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CartItem; 