import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RegisterForm.module.css";

function RegisterForm() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  // move logic to custom hook.

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        const { success, error, message } = data;
        console.log(data);

        if (success) {
          console.log(message);
          alert(message);
          navigate("/login");
        }

        if (error) {
          console.log(message);
          alert(message);
        }
      });
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
          name="confirmPassword"
          placeholder="Confirm Password"
          value={values.confirmPassword}
          onChange={handleChange}
        />
        <button type="submit">Sign Me Up</button>
      </form>
    </section>
  );
}

export default RegisterForm;
