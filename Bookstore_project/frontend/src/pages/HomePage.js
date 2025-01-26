import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import BookFilter from '../components/Books/BookFilter';
import BookList from '../components/Books/BookList';

function HomePage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Navbar */}
      <Box sx={{ bgcolor: 'primary.main', p: 1 }}>
        <Typography variant="h6" color="white">Книжный магазин</Typography>
      </Box>

      {/* Заголовок с фоновым изображением */}
      <Box 
        sx={{ 
          bgcolor: 'background.paper',
          p: 2,
          backgroundImage: 'url("/path-to-your-image.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Typography variant="h4" align="center">
          Добро пожаловать в наш книжный магазин
        </Typography>
      </Box>

      {/* Основной контент */}
      <Container sx={{ flex: 1, display: 'flex', gap: 2, my: 2 }}>
        {/* Панель фильтров */}
        <Paper sx={{ width: 240, p: 2 }}>
          <BookFilter />
        </Paper>

        {/* Окно для карточек книг */}
        <Paper 
          sx={{ 
            flex: 1, 
            p: 2,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <BookList />
          {/* Горизонтальная прокрутка будет добавлена в BookList */}
        </Paper>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: 'primary.main', p: 1, mt: 'auto' }}>
        <Typography color="white" align="center">
          © 2024 Книжный магазин
        </Typography>
      </Box>
    </Box>
  );
}

export default HomePage;
