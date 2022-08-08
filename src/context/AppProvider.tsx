import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser, removeUser, saveUser } from '../services/userStorage';
import AppContext from './AppContext';

type Props = { children: React.ReactElement };

function AppProvider({ children }: Props) {
  const [username, setUsername] = useState(getUser() || '');
  const navigate = useNavigate();

  const login = (name: string) => {
    saveUser(name);
    setUsername(name);
    navigate('/cards');
  };

  const logout = () => {
    removeUser();
    navigate('/');
  };

  const contextValue = { username, login, logout };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export default AppProvider;
