import { useRegisterForm } from "../../hooks/useRegisterForm";
import styles from "./RegisterForm.module.css";

function RegisterForm() {
  const { onRegister, values, handleChange, errors } = useRegisterForm();

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
        {errors.firstname && <small>{errors.firstname}</small>}
        <input
          type="text"
          name="lastname"
          placeholder="Lastname"
          value={values.lastname}
          onChange={handleChange}
        />
        {errors.lastname && <small>{errors.lastname}</small>}
        <input
          type="text"
          name="mobile"
          placeholder="09XX-XXX-XXXX"
          value={values.mobile}
          onChange={handleChange}
        />
        {errors.mobile && <small>{errors.mobile}</small>}
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
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={values.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <small>{errors.confirmPassword}</small>}
        <button type="submit">Sign Me Up</button>
      </form>
    </section>
  );
}

export default RegisterForm;
