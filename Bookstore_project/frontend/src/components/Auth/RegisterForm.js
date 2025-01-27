import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../../services/api';

function RegisterForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Сначала регистрируем пользователя
      await authAPI.register(formData);
      // После успешной регистрации выполняем вход
      const loginData = await authAPI.login({
        username: formData.username,
        password: formData.password
      });
      
      if (loginData.access) {
        navigate('/');
      }
    } catch (err) {
      console.error('Registration error:', err.response?.data);
      setError(err.response?.data?.detail || 'Ошибка при регистрации');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>Регистрация</Typography>
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
        label="Email"
        type="email"
        margin="normal"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
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
      <TextField
        fullWidth
        required
        label="Подтверждение пароля"
        type="password"
        margin="normal"
        value={formData.password2}
        onChange={(e) => setFormData({...formData, password2: e.target.value})}
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
      >
        Зарегистрироваться
      </Button>
    </Box>
  );
}

export default RegisterForm; 