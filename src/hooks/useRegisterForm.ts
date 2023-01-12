import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRegisterMutation } from "../features/users/userApiSlice";
import { registerValidate } from "../helpers/registerValidate";
import { RegisterValues } from "../types/interfaces";

const useRegisterForm = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({} as RegisterValues);

  const [register] = useRegisterMutation();

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const validationErrors = await registerValidate(values);
    setErrors(validationErrors);

    console.log(Object.keys(validationErrors));

    // if there are errors will return an object with property names of those with error
    // if no error just an empty object so below will be true
    if (Object.keys(validationErrors).length === 0) {
      try {
        const data = await register(values).unwrap();

        setLoading(false);
        toast("Successfully Signed-up.");
        navigate("/login");
      } catch (err: any) {
        console.log(err); // error object and message here
        setLoading(false);
        toast.warn("Email already taken.", {
          autoClose: 2000,
        });
      }
    }
  };

  return { values, errors, handleChange, onRegister, loading };
};

export default useRegisterForm;
