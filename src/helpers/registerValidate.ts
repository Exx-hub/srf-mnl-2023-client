import { RegisterValues } from "../types/interfaces";

export const registerValidate = async (values: RegisterValues) => {
  let errors = {} as RegisterValues;

  if (Object.keys(values).length !== 0) {
    if (!values.firstname) {
      errors.firstname = "Firstname is required!";
    }
    if (!values.lastname) {
      errors.lastname = "Lastname is required!";
    }
    if (!values.mobile) {
      errors.mobile = "Mobile number is required!";
    } else if (!/^\d{4}-\d{3}-\d{4}$/.test(values.mobile)) {
      errors.mobile = "Please follow 13-digit format 09XX-XXX-XXXX";
    }
    if (!values.email) {
      errors.email = "Email Address is required.";
    } else if (!/\S+@\S+\.\S/.test(values.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters long!";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Need to confirm password!";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords do not match!";
    }
  }

  return errors;
};
