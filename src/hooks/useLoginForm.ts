import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLoginMutation } from "../features/auth/authApiSlice";
import { storeCredentials } from "../features/auth/authSlice";
import { loginValidate } from "../helpers/loginValidate";
import { LoginValidateValues } from "../types/interfaces";

const useLoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [loginLoading, setLoginLoading] = useState(false);
  const [errors, setErrors] = useState({} as LoginValidateValues);

  const [login] = useLoginMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoginLoading(true);

    const validationErrors = await loginValidate(values);
    setErrors(validationErrors);

    if (!validationErrors.email && !validationErrors.password) {
      try {
        const data = await login({
          email: values.email,
          password: values.password,
        }).unwrap();

        setLoginLoading(false);

        dispatch(storeCredentials(data));

        localStorage.setItem("user", JSON.stringify(data));

        setValues({ email: "", password: "" });
        toast("Log-in Success!");
        navigate("/profile");
      } catch (err) {
        console.log(err);
        setLoginLoading(false);
        toast.error("Incorrect username/password.", {
          autoClose: 2000,
        });
      }
    }
  };

  return { values, handleChange, onSignIn, errors, loginLoading };
};

export default useLoginForm;
