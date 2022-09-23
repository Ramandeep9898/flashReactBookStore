import React from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../customHooks/useAuth";

const PrivateRoute = () => {
  const { encodedToken } = useAuth();
  const location = useLocation();
  return encodedToken ? (
    <Outlet />
  ) : (
    <Navigate to="/auth" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
