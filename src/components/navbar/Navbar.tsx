import styles from "./Navbar.module.css";
import whiteLogo from "../../assets/images/whiteRec.png";
import { GrClose, GrMenu } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../hooks/useToken";
import { useDispatch } from "react-redux";
import { clearCredentials } from "../../features/auth/authSlice";
import { toast } from "react-toastify";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const authenticated = useAuth();

  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem("user");
    dispatch(clearCredentials());
    toast("Successfully logged-out.");
  };

  return (
    <header>
      <section className={styles.header}>
        <img className={styles.logo} src={whiteLogo} alt="" />

        <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <GrClose /> : <GrMenu />}
        </div>

        <nav className={styles.nav}>
          <ul>
            <li className={pathname === "/" ? `${styles.active}` : ``}>
              <Link to="/">Home</Link>
            </li>
            <li className={pathname === "/courses" ? `${styles.active}` : ``}>
              <Link to="/courses">Courses</Link>
            </li>
            {authenticated && (
              <li className={pathname === "/profile" ? `${styles.active}` : ``}>
                <Link to="/profile">Profile</Link>
              </li>
            )}
            {!authenticated && (
              <li
                className={pathname === "/register" ? `${styles.active}` : ``}
              >
                <Link to="/register">Register</Link>
              </li>
            )}
            {!authenticated && (
              <li className={pathname === "/login" ? `${styles.active}` : ``}>
                <Link to="/login">Login</Link>
              </li>
            )}
            {authenticated && (
              <li onClick={logout}>
                <Link to="/login">Logout</Link>
              </li>
            )}
          </ul>
        </nav>
      </section>

      {menuOpen && (
        <nav
          className={styles.mobileNav}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <ul>
            <li className={pathname === "/" ? `${styles.active}` : ``}>
              <Link to="/">Home</Link>
            </li>
            <li className={pathname === "/courses" ? `${styles.active}` : ``}>
              <Link to="/courses">Courses</Link>
            </li>
            {authenticated && (
              <li className={pathname === "/profile" ? `${styles.active}` : ``}>
                <Link to="/profile">Profile</Link>
              </li>
            )}
            {!authenticated && (
              <li
                className={pathname === "/register" ? `${styles.active}` : ``}
              >
                <Link to="/register">Register</Link>
              </li>
            )}
            {!authenticated && (
              <li className={pathname === "/login" ? `${styles.active}` : ``}>
                <Link to="/login">Login</Link>
              </li>
            )}
            {authenticated && (
              <li onClick={logout}>
                <Link to="/login">Logout</Link>
              </li>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
