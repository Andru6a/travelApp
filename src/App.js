import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import MyRoutesPage from 'pages/MyRoutesPage';
import AllRoutesPage from 'pages/AllRoutesPage';
import CreateRoutePage from 'pages/CreateRoutePage';

import Layout from 'components/layout/Layout';

import './app.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="all-routes" element={<AllRoutesPage />} />
          <Route path=":id/my-routes" element={<MyRoutesPage />} />
          <Route path=":id/my-routes/create-route" element={<CreateRoutePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
