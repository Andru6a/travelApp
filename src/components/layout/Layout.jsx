import { Outlet } from 'react-router-dom';

import AppHeader from 'components/appHeader/AppHeader';

import { Container } from '@mui/material';

import 'components/layout/layout.scss';

const Layout = () => {
  return (
    <>
      <AppHeader />
      <Container component={'main'}>
        <main style={{ marginTop: '10px' }}>
          <Outlet />
        </main>
      </Container>

      <footer style={{ textAlign: 'center', padding: '50px' }}>2024</footer>
    </>
  );
};

export default Layout;
