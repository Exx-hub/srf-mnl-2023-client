import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";

function LoginForm() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  // move logic to custom hook.

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <section className={styles.loginForm}>
      <h2>SIGN IN</h2>
      <form onSubmit={onSignIn} className={styles.form}>
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

        <button type="submit">Sign In</button>
      </form>
      <Link to="/register">Not yet registered? Sign up now!</Link>
    </section>
  );
}

export default LoginForm;
