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