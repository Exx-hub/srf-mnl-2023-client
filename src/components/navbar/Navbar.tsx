import styles from "./Navbar.module.css";
import whiteLogo from "../../assets/images/whiteRec.png";
import { GrClose, GrMenu } from "react-icons/gr";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={whiteLogo} alt="" />

      <GrMenu className={styles.menuIcon} />

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
