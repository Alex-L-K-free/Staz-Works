import React from 'react';
import { Box, Typography } from '@mui/material';
import welcomeBg from '../../assets/images/welcome-bg.jpg'; // Путь к фоновому изображению

function WelcomeHeader() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${welcomeBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: 4,
        marginBottom: 3,
        borderRadius: 1,
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Полупрозрачный черный фон для текста
        // textAlign: 'center',
        // color: 'white', // Цвет текста
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)', // Тень для текста
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom>
        Добро пожаловать в Bookstore!
      </Typography>
      <Typography variant="h5" component="h2">
        Здесь вы найдете лучшие книги для чтения
      </Typography>
    </Box>
  );
}

export default WelcomeHeader;

// import React from 'react';
// import { Box, Typography } from '@mui/material';
// import welcomeBg from '../../assets/images/welcome-bg.jpg'; // Путь к фоновому изображению
//
// function WelcomeHeader() {
//   return (
//     <Box
//       sx={{
//         backgroundImage: `url(${welcomeBg})`,
//         backgroundSize: 'contain', // Изображение всегда полностью отображается
//         backgroundRepeat: 'no-repeat', // Убирает повторение изображения
//         backgroundPosition: 'center', // Центрирует изображение
//         padding: 2,
//         marginBottom: 3,
//         borderRadius: 1,
//         textAlign: 'center',
//         color: 'white',
//         backgroundColor: 'rgba(0, 0, 0, 0.3)', // Полупрозрачный черный фон для текста
//         textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
//         height: '300px', // Фиксированная высота блока
//         display: 'flex', // Для центрирования текста
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <Typography variant="h3" component="h1" gutterBottom>
//         Добро пожаловать в Bookstore!
//       </Typography>
//       <Typography variant="h5" component="h2">
//         Здесь вы найдете лучшие книги для чтения
//       </Typography>
//     </Box>
//   );
// }
//
// export default WelcomeHeader;
