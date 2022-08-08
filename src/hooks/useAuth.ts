import { useContext } from 'react';
import AppContext from '../context/AppContext';

const useAuth = () => {
  const { username } = useContext(AppContext);
  return username.length > 0;
};

export default useAuth;
