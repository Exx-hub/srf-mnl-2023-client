import styles from "./Navbar.module.css";
import whiteLogo from "../../assets/images/whiteRec.png";
import { GrClose, GrMenu } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../hooks/useToken";

function Navbar() {
  const { pathname } = useLocation();
  const authenticated = useAuth();

  return (
    <header className={styles.header}>
      <img className={styles.logo} src={whiteLogo} alt="" />

      <GrMenu className={styles.menuIcon} />

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
            <li className={pathname === "/register" ? `${styles.active}` : ``}>
              <Link to="/register">Register</Link>
            </li>
          )}
          {!authenticated && (
            <li className={pathname === "/login" ? `${styles.active}` : ``}>
              <Link to="/login">Login</Link>
            </li>
          )}
          {authenticated && (
            <li>
              <Link to="/profile">Logout</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
