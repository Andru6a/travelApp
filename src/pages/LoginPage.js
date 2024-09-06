import Login from 'components/authentication/Login';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
      <h1>Вход</h1>
      <Login />
      <p>
        Или <Link to="/register">зарегистрироваться</Link>
      </p>
    </div>
  );
};

export default LoginPage;
