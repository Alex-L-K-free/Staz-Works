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
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import UserProfile from './components/Profile/UserProfile';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
