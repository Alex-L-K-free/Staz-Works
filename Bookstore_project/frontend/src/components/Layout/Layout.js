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
      {/*/!* Фиксируем Navbar *!/*/}
      {/*<Navbar sx={{*/}
      {/*  position: 'fixed',*/}
      {/*  top: 0,*/}
      {/*  left: 0,*/}
      {/*  right: 0,*/}
      {/*  zIndex: 1200, // Убедитесь, что Navbar находится поверх других элементов*/}
      {/*}} />*/}

      {/*<Box sx={{*/}
      {/*  flex: 1,*/}
      {/*  padding: 2,*/}
      {/*  marginTop: '64px', // Отступ, чтобы контент не накладывался на Navbar (размер Navbar зависит от вашей реализации)*/}
      {/*}}>*/}
      {/*  {children}*/}
      {/*</Box>*/}
      <Navbar />
      <Box sx={{
        flex: 1,
        padding: 2
      }}>
        {children}
      </Box>

      <Footer />
    </Box>
  );
}

export default Layout; 