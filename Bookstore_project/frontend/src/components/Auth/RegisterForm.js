import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Alert } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
    setError(''); // Очищаем предыдущие ошибки

    // Проверка паролей
    if (formData.password !== formData.password2) {
      setError('Пароли не совпадают');
      return;
    }

    try {
      const response = await axios.post('/api/register/', formData);
      if (response.data.access) {
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);
        navigate('/');
      }
    } catch (err) {
      if (err.response && err.response.data) {
        // Обработка различных ошибок от сервера
        if (err.response.data.username) {
          setError('Пользователь с таким именем уже существует');
        } else if (err.response.data.email) {
          setError('Пользователь с таким email уже существует');
        } else if (err.response.data.error) {
          setError(err.response.data.error);
        } else {
          setError('Произошла ошибка при регистрации');
        }
      } else {
        setError('Ошибка сервера. Попробуйте позже');
      }
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