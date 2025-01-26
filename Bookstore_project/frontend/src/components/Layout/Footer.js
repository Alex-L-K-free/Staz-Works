/**
 * Путь: frontend/src/components/Layout/Footer.js
 * 
 * Назначение: Компонент подвала сайта.
 * Отображает информацию об авторских правах,
 * контакты и дополнительные ссылки.
 */

import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ p: 2, mt: 'auto', backgroundColor: '#f5f5f5' }}>
      <Typography variant="body2" color="text.secondary" align="center">
        © 2025 Bookstore!
      </Typography>
    </Box>
  );
};

export default Footer; 