// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = !!Cookies.get('jwt'); // Replace 'your_jwt_cookie_name' with the actual name of your JWT cookie
  console.log("Present")
  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Element /> : <Navigate to="/" />}
    />
  );
};

export default ProtectedRoute;
