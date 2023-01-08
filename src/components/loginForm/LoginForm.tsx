import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../features/auth/authApiSlice";
import { storeCredentials } from "../../features/auth/authSlice";
import styles from "./LoginForm.module.css";

function LoginForm() {
  const [login, { isLoading, isSuccess, isError, error }] = useLoginMutation();
  const dispatch = useDispatch();

  // console.log("isLoading:", isLoading);
  // console.log("isSuccess:", isSuccess);
  // console.log("isError:", isError);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  // move logic to custom hook.

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data = await login({
        email: values.email,
        password: values.password,
      }).unwrap();
      console.log(data);

      dispatch(storeCredentials(data));
      setValues({ email: "", password: "" });
      navigate("/profile");
      // save token to global state --- check this --- DONE
      // store credentials - DONE
      // redirect to profile page - DONE

      // ---here
      // use token...
      // use token to fetch profile
      // move endpoints to extended auth slice

      // create user endpoints in backedn to test getting data using token, token auth and restriction...
    } catch (err) {
      console.log(err);

      // some error handling here...
    }

    // figuring out this part ei!
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
