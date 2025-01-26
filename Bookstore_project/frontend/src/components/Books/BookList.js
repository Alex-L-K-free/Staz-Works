import React from 'react';
import { Grid, Box, useTheme, useMediaQuery } from '@mui/material';
import BookCard from './BookCard';

function BookList() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

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
        {/* Динамическая ширина карточек */}
        <Grid item xs={isMobile ? 'auto' : 12} sm={6} md={4} lg={3}>
          <BookCard />
        </Grid>
        {/* Добавьте больше карточек */}
      </Grid>
    </Box>
  );
}

export default BookList; 