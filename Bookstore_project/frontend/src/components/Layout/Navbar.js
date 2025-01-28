/**
 * Путь: frontend/src/components/Layout/Navbar.js
 * 
 * Назначение: Компонент навигационной панели.
 * Отображает главное меню сайта, логотип
 * и основные элементы навигации.
 */

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('access_token');

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    navigate('/login');
  };

  return (
    //   фиксация и уменьшение navbar
    <>
      <AppBar
        position="fixed" // Фиксированное позиционирование
        sx={{
          height: '35px', // Уменьшенная высота
          zIndex: (theme) => theme.zIndex.drawer + 1 // Гарантирует, что navbar будет поверх остального контента
        }}
      >
        <Toolbar
          sx={{
            minHeight: '35px !important', // Переопределяем минимальную высоту
            py: 0 // Убираем внутренние отступы
          }}
        >
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
              fontSize: '1.1rem' // Немного уменьшаем размер шрифта
            }}
          >
            Bookstore!   Главная
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {isAuthenticated ? (
              <>
                <Button
                  color="inherit"
                  component={Link}
                  to="/profile"
                  sx={{ py: 0.5 }} // Уменьшаем отступы кнопок
                >
                  Личный кабинет
                </Button>
                <Button
                  color="inherit"
                  onClick={handleLogout}
                  sx={{ py: 0.5 }}
                >
                  Выйти
                </Button>
              </>
            ) : (
              <>
                <Button
                  color="inherit"
                  component={Link}
                  to="/login"
                  sx={{ py: 0.5 }}
                >
                  Войти
                </Button>
                <Button
                  color="inherit"
                  component={Link}
                  to="/register"
                  sx={{ py: 0.5 }}
                >
                  Регистрация
                </Button>
              </>
            )}
            <IconButton
              color="inherit"
              size="small" // Уменьшаем размер иконки
              sx={{ ml: 1 }}
            >
              <Badge badgeContent={0} color="error">
                <ShoppingCart fontSize="small" />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Добавляем пустой элемент для компенсации фиксированного позиционирования */}
      <Toolbar sx={{ minHeight: '35px !important' }} />
    </>
  );
}
// не фиксированный navbar
//     <AppBar position="static">
//       <Toolbar sx={{ minHeight: 'auto', py: 0 }}>
//       {/*<Toolbar>*/}
//         <Typography
//           variant="h6"
//           component={Link}
//           to="/"
//           sx={{
//             flexGrow: 1,
//             textDecoration: 'none',
//             color: 'inherit'
//           }}
//         >
//           Bookstore!
//         </Typography>
//         <Box>
//           {isAuthenticated ? (
//             <>
//               <Button
//                 color="inherit"
//                 component={Link}
//                 to="/profile"
//               >
//                 Личный кабинет
//               </Button>
//               <Button
//                 color="inherit"
//                 onClick={handleLogout}
//               >
//                 Выйти
//               </Button>
//             </>
//           ) : (
//             <>
//               <Button
//                 color="inherit"
//                 component={Link}
//                 to="/login"
//               >
//                 Войти
//               </Button>
//               <Button
//                 color="inherit"
//                 component={Link}
//                 to="/register"
//               >
//                 Регистрация
//               </Button>
//             </>
//           )}
//           <IconButton color="inherit">
//             <Badge badgeContent={0} color="error">
//               <ShoppingCart />
//             </Badge>
//           </IconButton>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }

export default Navbar; 