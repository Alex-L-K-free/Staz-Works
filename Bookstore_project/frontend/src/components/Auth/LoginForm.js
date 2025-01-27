/**
 * Путь: frontend/src/components/Auth/LoginForm.js
 * 
 * Назначение: Компонент формы входа.
 * Обрабатывает аутентификацию пользователя,
 * включает валидацию полей и обработку ошибок.
 */

import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../../services/api';

function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const data = await authAPI.login(formData);
      if (data.access) {
        navigate('/');
      }
    } catch (err) {
      console.error('Login error:', err.response?.data);
      setError('Неверное имя пользователя или пароль');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>Вход</Typography>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <TextField
        fullWidth
        required
        label="Имя пользователя"
        margin="normal"
        value={formData.username}
        onChange={(e) => setFormData({...formData, username: e.target.value})}
      />
      <TextField
        fullWidth
        required
        label="Пароль"
        type="password"
        margin="normal"
        value={formData.password}
        onChange={(e) => setFormData({...formData, password: e.target.value})}
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
      >
        Войти
      </Button>
    </Box>
  );
}

export default LoginForm; 