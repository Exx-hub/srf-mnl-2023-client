import { useState } from "react";
import styles from "./RegisterForm.module.css";

function RegisterForm() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    password: "",
    confirm: "",
  });

  // move logic to custom hook.

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <section className={styles.registerForm}>
      <h2>SIGN UP</h2>
      <form onSubmit={onRegister} className={styles.form}>
        <input
          type="text"
          name="firstname"
          placeholder="Firstname"
          value={values.firstname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastname"
          placeholder="Lastname"
          value={values.lastname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="mobile"
          placeholder="09XX-XXX-XXXX"
          value={values.mobile}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email Address"
          value={values.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirm"
          placeholder="Confirm Password"
          value={values.confirm}
          onChange={handleChange}
        />
        <button type="submit">Sign Me Up</button>
      </form>
    </section>
  );
}

export default RegisterForm;
