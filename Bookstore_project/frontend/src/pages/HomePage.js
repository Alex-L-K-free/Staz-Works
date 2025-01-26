import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import BookGrid from '../components/Books/BookGrid';
import BookFilter from '../components/Books/BookFilter';
import api from '../services/api';

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBooks = async (filters = {}) => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      
      if (filters.priceRange) {
        params.append('min_price', filters.priceRange[0]);
        params.append('max_price', filters.priceRange[1]);
      }
      if (filters.genres?.length) {
        params.append('genre', filters.genres.join(','));
      }
      if (filters.years?.length) {
        params.append('year', filters.years.join(','));
      }

      const response = await api.getBooks(params);
      setBooks(response.data);
    } catch (err) {
      setError('Ошибка при загрузке книг');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleFilterChange = (filters) => {
    fetchBooks(filters);
  };

  return (
    <Box className="main-content">
      <Box className="welcome-banner">
        <Typography variant="h3" component="h1">
          Добро пожаловать в Bookstore!
        </Typography>
      </Box>
      
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <BookFilter onFilterChange={handleFilterChange} />
          </Grid>
          <Grid item xs={12} md={9}>
            {loading ? (
              <Typography>Загрузка...</Typography>
            ) : error ? (
              <Typography color="error">{error}</Typography>
            ) : (
              <BookGrid books={books} />
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
