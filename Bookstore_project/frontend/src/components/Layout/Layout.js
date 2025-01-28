/**
 * Путь: frontend/src/components/Layout/Layout.js
 * 
 * Назначение: Компонент общей разметки страниц.
 * Обеспечивает единообразное отображение навигации,
 * футера и основного контента для всех страниц приложения.
 */

import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Navbar />
      <Box sx={{
        flex: 1,
        padding: 2
      }}>

      {/*?пока не работает - нарушает боковые отступы (для фиксации navbar)?*/}
      {/*<Box sx={{*/}
      {/*  flex: 1,*/}
      {/*  padding: 2,*/}
      {/*  width: '100%',*/}
      {/*  maxWidth: '1200px', // Ограничиваем максимальную ширину контента*/}
      {/*  margin: '0 auto', // Центрируем контент*/}
      {/*}}>*/}

        {children}
      </Box>
      <Footer />
    </Box>
  );
}

export default Layout; 