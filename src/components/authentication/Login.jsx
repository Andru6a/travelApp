import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from 'store/slices/userSlice';

import Form from './Form';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      console.log(user);
      dispatch(setUser({
        email: user.email,
        id: user.uid,
        token: user.accessToken,
      }));
      navigate('/');
    })
    .catch(console.error)
  };

  return (
    <Form
      title="Войти"
      handleClick={handleLogin}
    />
  );
};
export default Login;
