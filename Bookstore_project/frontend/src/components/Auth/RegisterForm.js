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
    try {
      await axios.post('/api/register/', formData);
      navigate('/login');
    } catch (err) {
      setError('Ошибка при регистрации');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>Регистрация</Typography>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <TextField
        fullWidth
        label="Имя пользователя"
        margin="normal"
        value={formData.username}
        onChange={(e) => setFormData({...formData, username: e.target.value})}
      />
      <TextField
        fullWidth
        label="Email"
        type="email"
        margin="normal"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
      />
      <TextField
        fullWidth
        label="Пароль"
        type="password"
        margin="normal"
        value={formData.password}
        onChange={(e) => setFormData({...formData, password: e.target.value})}
      />
      <TextField
        fullWidth
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