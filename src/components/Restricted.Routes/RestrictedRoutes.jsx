import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../customHooks/useAuth";

export function RestrictedRoute() {
  const { encodedToken, user } = useAuth();
  const location = useLocation();

  return encodedToken ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
}
