import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectCurrentToken } from "../../features/auth/authSlice";

function ProtectedRoute() {
  const token = useSelector(selectCurrentToken);
  // when page refreshed becomes null at first. so navigates to login then data gets restored
  // but already navigated to login..

  // so im also using localstorage which will not have delays, will get data as soon as app starts.
  // so my route now checks if either there is a token saved in global auth state, or there is a user saved in
  // localstorage. im not sure if this is ideal but somehow works..

  const savedUser = localStorage.getItem("user");

  if (token || savedUser) {
    return <Outlet />;
  }

  return <Navigate to="/login" replace />;
}

export default ProtectedRoute;
