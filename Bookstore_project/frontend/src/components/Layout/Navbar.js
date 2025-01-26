/**
 * Путь: frontend/src/components/Layout/Navbar.js
 * 
 * Назначение: Компонент навигационной панели.
 * Отображает главное меню сайта, логотип
 * и основные элементы навигации.
 */

import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Bookstore!</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 