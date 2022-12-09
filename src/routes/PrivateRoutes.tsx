import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { HttpClient } from 'src/services/config/http';
import { useLocation } from 'react-router';


export function PrivateRoute() {
  const location = useLocation();
  return HttpClient.isThereValidToken() || true /* this  condition is always true!  implement "isThereValidToken" then remove "|| true"*/
      ? <Outlet />
      : <Navigate to={'Unauthorized'} state={{ from: location }} replace={true}/>;
}
