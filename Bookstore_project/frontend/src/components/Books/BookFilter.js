/**
 * Путь: frontend/src/components/Books/BookFilter.js
 * 
 * Назначение: Компонент панели фильтрации книг.
 * Предоставляет пользовательский интерфейс для фильтрации книг
 * по различным параметрам: цене, жанрам и другим характеристикам.
 * Содержит элементы управления фильтрами и логику их применения.
 */

import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Slider, 
  FormControl, 
  FormGroup, 
  FormControlLabel, 
  Checkbox,
  Button
} from '@mui/material';

const BookFilter = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedYears] = useState([]);

  const genres = ['Роман', 'Фантастика', 'Детектив', 'Научная литература'];
  // const years = ['2023', '2022', '2021', '2020'];

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleGenreChange = (event) => {
    const { value, checked } = event.target;
    setSelectedGenres(
      checked 
        ? [...selectedGenres, value]
        : selectedGenres.filter(genre => genre !== value)
    );
  };

  const handleApplyFilters = () => {
    onFilterChange({
      priceRange,
      genres: selectedGenres,
      years: selectedYears
    });
  };

  return (
    <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
      <Typography variant="h6" gutterBottom>Фильтры</Typography>
      
      <Box sx={{ my: 3 }}>
        <Typography gutterBottom>Цена</Typography>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={0}
          max={500}
        />
        <Typography variant="caption">
          {priceRange[0]} руб. - {priceRange[1]} руб.
        </Typography>
      </Box>

      <FormControl component="fieldset" sx={{ my: 2 }}>
        <Typography gutterBottom>Жанры</Typography>
        <FormGroup>
          {genres.map((genre) => (
            <FormControlLabel
              key={genre}
              control={
                <Checkbox 
                  checked={selectedGenres.includes(genre)}
                  onChange={handleGenreChange}
                  value={genre}
                />
              }
              label={genre}
            />
          ))}
        </FormGroup>
      </FormControl>

      <Button 
        variant="contained" 
        fullWidth 
        onClick={handleApplyFilters}
        sx={{ mt: 2 }}
      >
        Применить фильтры
      </Button>
    </Box>
  );
};

export default BookFilter; 