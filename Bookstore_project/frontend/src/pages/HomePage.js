import React from 'react';
import { Box, Container, Typography, Paper, useTheme, useMediaQuery } from '@mui/material';
import BookFilter from '../components/Books/BookFilter';
import BookList from '../components/Books/BookList';

function HomePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Адаптивный navbar */}
      <Box sx={{ 
        bgcolor: 'primary.main', 
        p: { xs: 1, sm: 2 },
        position: 'sticky',
        top: 0,
        zIndex: 1100
      }}>
        <Typography 
          variant={isMobile ? "subtitle1" : "h6"} 
          color="white"
          sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}
        >
          Книжный магазин
        </Typography>
      </Box>

      {/* Адаптивный заголовок */}
      <Box sx={{ 
        bgcolor: 'background.paper',
        p: { xs: 2, sm: 3, md: 4 },
        backgroundImage: 'url("/path-to-your-image.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: { xs: '150px', sm: '200px', md: '250px' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Typography 
          variant={isMobile ? "h5" : "h4"} 
          align="center"
          sx={{
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: { xs: 1, sm: 2 },
            borderRadius: 1
          }}
        >
          Добро пожаловать в наш книжный магазин
        </Typography>
      </Box>

      {/* Адаптивный контент */}
      <Container 
        sx={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2, 
          my: 2,
          px: { xs: 1, sm: 2, md: 3 }
        }}
      >
        {/* Адаптивная панель фильтров */}
        <Paper 
          sx={{ 
            width: { xs: '100%', md: 240 },
            p: { xs: 1, sm: 2 },
            mb: { xs: 2, md: 0 }
          }}
        >
          <BookFilter />
        </Paper>

        {/* Адаптивный список книг */}
        <Paper 
          sx={{ 
            flex: 1, 
            p: { xs: 1, sm: 2 },
            overflow: 'hidden'
          }}
        >
          <BookList />
        </Paper>
      </Container>

      {/* Адаптивный footer */}
      <Box sx={{ 
        bgcolor: 'primary.main', 
        p: { xs: 1, sm: 2 }, 
        mt: 'auto'
      }}>
        <Typography 
          color="white" 
          align="center"
          sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
        >
          © 2024 Книжный магазин
        </Typography>
      </Box>
    </Box>
  );
}

export default HomePage;
