/**
 * Путь: frontend/src/components/Layout/Navbar.js
 * 
 * Назначение: Компонент навигационной панели.
 * Отображает главное меню сайта, логотип
 * и основные элементы навигации.
 */

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('access_token');

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    navigate('/login');
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ minHeight: 'auto', py: 0 }}>
      {/*<Toolbar>*/}
        <Typography 
          variant="h6" 
          component={Link} 
          to="/" 
          sx={{ 
            flexGrow: 1, 
            textDecoration: 'none', 
            color: 'inherit' 
          }}
        >
          Bookstore!
        </Typography>
        <Box>
          {isAuthenticated ? (
            <>
              <Button 
                color="inherit" 
                component={Link} 
                to="/profile"
              >
                Личный кабинет
              </Button>
              <Button 
                color="inherit" 
                onClick={handleLogout}
              >
                Выйти
              </Button>
            </>
          ) : (
            <>
              <Button 
                color="inherit" 
                component={Link} 
                to="/login"
              >
                Войти
              </Button>
              <Button 
                color="inherit" 
                component={Link} 
                to="/register"
              >
                Регистрация
              </Button>
            </>
          )}
          <IconButton color="inherit">
            <Badge badgeContent={0} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar; 