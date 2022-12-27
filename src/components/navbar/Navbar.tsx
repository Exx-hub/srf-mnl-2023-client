import styles from "./Navbar.module.css";
import whiteLogo from "../../assets/images/whiteRec.png";

function Navbar() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={whiteLogo} alt="" />

      <nav className={styles.nav}>
        <ul>
          <li>Home</li>
          <li>Courses</li>
          <li>Profile</li>
          <li>Register</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
