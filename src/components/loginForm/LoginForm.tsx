import { Link } from "react-router-dom";
import useLoginForm from "../../hooks/useLoginForm";
import styles from "./LoginForm.module.css";

function LoginForm() {
  const { onSignIn, values, handleChange, errors } = useLoginForm();

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
        {errors.email && <small>{errors.email}</small>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <small>{errors.password}</small>}
        <button type="submit">Sign In</button>
      </form>
      <Link to="/register">Not yet registered? Sign up now!</Link>
    </section>
  );
}

export default LoginForm;
