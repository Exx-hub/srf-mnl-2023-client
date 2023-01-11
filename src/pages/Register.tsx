import RegisterForm from "../components/registerForm";
import { useTitle } from "../hooks/useTitle";

function Register() {
  useTitle("SRF MNL - Sign Up");
  return <RegisterForm />;
}

export default Register;
