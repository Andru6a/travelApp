import SingUp from 'components/authentication/SingUp';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div>
      <h1>Регистрация</h1>
      <SingUp />
      <p>
        Или уже есть аккаунт <Link to="/login">Войти</Link>
      </p>
    </div>
  );
};

export default RegisterPage;