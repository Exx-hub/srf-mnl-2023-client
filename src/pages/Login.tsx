import LoginForm from "../components/loginForm";
import { useTitle } from "../hooks/useTitle";

function Login() {
  useTitle("SRF MNL - Login");
  return <LoginForm />;
}

export default Login;
