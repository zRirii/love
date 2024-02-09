// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { user } = useAuth();

  return user ? <Route {...rest} element={<Element />} /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
