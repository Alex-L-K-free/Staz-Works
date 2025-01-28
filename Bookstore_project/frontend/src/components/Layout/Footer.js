/**
 * Путь: frontend/src/components/Layout/Footer.js
 * 
 * Назначение: Компонент подвала сайта.
 * Отображает информацию об авторских правах,
 * контакты и дополнительные ссылки.
 */

import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{
      py: 2,
      textAlign: 'center',
      borderTop: '1px solid rgba(0, 0, 0, 0.12)'
    }}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Bookstore!
      </Typography>
    </Box>
  );
}

export default Footer;
