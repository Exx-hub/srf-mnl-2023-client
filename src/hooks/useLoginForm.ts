import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../features/auth/authApiSlice";
import { storeCredentials } from "../features/auth/authSlice";
import { loginValidate } from "../helpers/loginValidate";
import { LoginValidateValues } from "../types/interfaces";

export const useLoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({} as LoginValidateValues);

  const [login, { isLoading, isSuccess, isError, error }] = useLoginMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = await loginValidate(values);
    setErrors(validationErrors);

    if (!validationErrors.email && !validationErrors.password) {
      try {
        const data = await login({
          email: values.email,
          password: values.password,
        }).unwrap();
        console.log(data);

        dispatch(storeCredentials(data));
        setValues({ email: "", password: "" });
        navigate("/profile");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return { values, handleChange, onSignIn, errors };
};
