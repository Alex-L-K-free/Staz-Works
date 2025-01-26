/**
 * Путь: frontend/src/App.js
 * 
 * Назначение: Корневой компонент приложения.
 * Отвечает за основную маршрутизацию, подключение глобальных стилей
 * и провайдеров (MUI Theme, Redux store и др.). Является точкой входа
 * для всех остальных компонентов приложения.
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        minHeight: '100vh'
      }}>
        <Navbar />
        <Box sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
