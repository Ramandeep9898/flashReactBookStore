import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../customHooks/useAuth";

export function RestrictedRoute() {
  const { encodedToken } = useAuth();
  const location = useLocation();
  console.log(encodedToken);

  return encodedToken ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
}
