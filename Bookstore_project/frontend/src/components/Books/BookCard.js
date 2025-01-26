import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, useTheme, useMediaQuery } from '@mui/material';

function BookCard({ book }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card sx={{ 
      width: { xs: 160, sm: 200 },
      height: { xs: 280, sm: 320 },
      display: 'flex',
      flexDirection: 'column'
    }}>
      <CardMedia
        component="img"
        sx={{
          height: { xs: 160, sm: 200 },
          objectFit: 'cover'
        }}
        image={book?.image || '/placeholder.jpg'}
        alt={book?.title}
      />
      <CardContent sx={{ 
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        p: { xs: 1, sm: 2 }
      }}>
        <Typography 
          gutterBottom 
          variant={isMobile ? "subtitle1" : "h6"} 
          component="div" 
          noWrap
          sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
        >
          {book?.title}
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary" 
          noWrap
          sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
        >
          {book?.author}
        </Typography>
        <Typography 
          variant="h6" 
          color="primary"
          sx={{ 
            mt: 'auto',
            mb: 1,
            fontSize: { xs: '1rem', sm: '1.25rem' }
          }}
        >
          {book?.price} ₽
        </Typography>
        <Button 
          variant="contained" 
          size={isMobile ? "small" : "medium"} 
          fullWidth
          sx={{ mt: 'auto' }}
        >
          В корзину
        </Button>
      </CardContent>
    </Card>
  );
}

export default BookCard; 