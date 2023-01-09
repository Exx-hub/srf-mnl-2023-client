import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectCurrentToken } from "../../features/auth/authSlice";

function ProtectedRoute() {
  const token = useSelector(selectCurrentToken);

  // console.log(token);

  return token ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
