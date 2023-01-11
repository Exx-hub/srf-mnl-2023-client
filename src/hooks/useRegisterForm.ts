import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../features/users/userApiSlice";
import { registerValidate } from "../helpers/registerValidate";
import { RegisterValues } from "../types/interfaces";

export const useRegisterForm = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({} as RegisterValues);

  const [register, { isLoading, isSuccess, isError, error }] =
    useRegisterMutation();

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = await registerValidate(values);
    setErrors(validationErrors);

    console.log(Object.keys(validationErrors));

    // if there are errors will return an object with property names of those with error
    // if no error just an empty object so below will be true
    if (Object.keys(validationErrors).length === 0) {
      try {
        const data = await register(values).unwrap();
        navigate("/login");
        console.log(data);
        console.log("SUCCESS");
      } catch (err: any) {
        console.log(err); // error object and message here
        console.log("ERROR");
      }
    }
  };

  return { values, errors, handleChange, onRegister };
};
