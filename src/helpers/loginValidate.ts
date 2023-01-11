import { LoginValidateValues } from "../types/interfaces";

export const loginValidate = async (values: LoginValidateValues) => {
  let errors = {} as LoginValidateValues;

  if (Object.keys(values).length !== 0) {
    if (!values.email) {
      errors.email = "Email Address is required.";
    } else if (!/\S+@\S+\.\S/.test(values.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 6) {
      errors.password = "Password needs to have at least 6 characters!";
    }
  }

  return errors;
};
