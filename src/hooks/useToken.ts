import { useSelector } from "react-redux";
import { selectCurrentToken } from "../features/auth/authSlice";

const useAuth = () => {
  const token = useSelector(selectCurrentToken);

  if (token) {
    return token;
  }

  return null;
};

export default useAuth;
