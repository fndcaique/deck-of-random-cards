import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

type Props = {
  children: React.ReactElement;
};

function RouterGuard({ children }: Props) {
  const location = useLocation();
  const isUserAuthenticated = useAuth();

  const isAuthorized = location.pathname === '/' || isUserAuthenticated;

  if (!isAuthorized) {
    return <Navigate to="/" />;
  }

  return children;
}

export default RouterGuard;
