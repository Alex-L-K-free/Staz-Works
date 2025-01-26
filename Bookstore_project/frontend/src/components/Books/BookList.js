import React from 'react';
import { Grid, Box } from '@mui/material';
import BookCard from './BookCard';

function BookList() {
  return (
    <Box sx={{ overflowX: 'auto' }}>
      <Grid container spacing={2}>
        {/* Здесь будут карточки книг */}
        <Grid item>
          <BookCard />
        </Grid>
        {/* Добавьте больше карточек по мере необходимости */}
      </Grid>
    </Box>
  );
}

export default BookList; 