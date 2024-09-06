import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from 'hooks/use-auth';
import { useDispatch } from 'react-redux';
import { removeUser } from 'store/slices/userSlice';
import { useEffect } from 'react';

import {
  AppBar,
  IconButton,
  Stack,
  Link,
  Container,
  Button,
  Toolbar,
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

const AppHeader = () => {
  const { isAuth, id } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    NavigateAuth();
  }, [isAuth]);

  const NavigateAuth = () => {
    return isAuth ? (
      <div>
        <Button color="inherit" to={`${id}/my-routes`} component={RouterLink}>
          Мои маршруты
        </Button>
        <Button
          variant="contained"
          color="inherit"
          sx={{ ml: 3 }}
          onClick={() => dispatch(removeUser())}
        >
          Выйти
        </Button>
      </div>
    ) : (
      <Link component={RouterLink} to="login" sx={{ ml: 3 }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </Link>
    );
  };

  return (
    <AppBar position="static" sx={{ pt: 2, pb: 2 }}>
        <Toolbar sx={{justifyContent: 'center'}}>
          <nav>
            <Stack
              spacing={3}
              direction="row"
              sx={{ justifyContent: 'center' }}
            >
              <Button color="inherit" to="/" component={RouterLink}>
                Главная
              </Button>
              <Button color="inherit" to="all-routes" component={RouterLink}>
                Готовые маршруты
              </Button>
              <NavigateAuth />
            </Stack>
          </nav>
        </Toolbar>
    </AppBar>
  );
};
export default AppHeader;
