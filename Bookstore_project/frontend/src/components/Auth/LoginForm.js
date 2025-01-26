import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import api from '../../services/api';

const LoginForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.login(formData);
      localStorage.setItem('user', JSON.stringify(response.data));
      onSuccess(response.data);
    } catch (err) {
      setError('Неверные учетные данные');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        label="Имя пользователя"
        name="username"
        value={formData.username}
        onChange={(e) => setFormData({...formData, username: e.target.value})}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        label="Пароль"
        type="password"
        name="password"
        value={formData.password}
        onChange={(e) => setFormData({...formData, password: e.target.value})}
      />
      {error && (
        <Typography color="error" sx={{ mt: 1 }}>
          {error}
        </Typography>
      )}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Войти
      </Button>
    </Box>
  );
};

export default LoginForm; 