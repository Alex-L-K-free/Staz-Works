import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Alert } from '@mui/material';
import axios from 'axios';

function UserProfile() {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    phone: '',
    address: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get('/api/profile/', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      });
      setUserData(response.data);
    } catch (err) {
      setError('Ошибка при загрузке данных');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put('/api/profile/', userData, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      });
      setSuccess('Профиль обновлен');
    } catch (err) {
      setError('Ошибка при обновлении профиля');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>Личный кабинет</Typography>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
      <TextField
        fullWidth
        label="Имя пользователя"
        margin="normal"
        value={userData.username}
        onChange={(e) => setUserData({...userData, username: e.target.value})}
      />
      <TextField
        fullWidth
        label="Email"
        type="email"
        margin="normal"
        value={userData.email}
        onChange={(e) => setUserData({...userData, email: e.target.value})}
      />
      <TextField
        fullWidth
        label="Телефон"
        margin="normal"
        value={userData.phone}
        onChange={(e) => setUserData({...userData, phone: e.target.value})}
      />
      <TextField
        fullWidth
        label="Адрес"
        multiline
        rows={3}
        margin="normal"
        value={userData.address}
        onChange={(e) => setUserData({...userData, address: e.target.value})}
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
      >
        Сохранить изменения
      </Button>
    </Box>
  );
}

export default UserProfile; 