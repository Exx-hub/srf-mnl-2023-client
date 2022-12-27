import { Link } from "react-router-dom";
import blackSchool from "../../assets/images/blackschool.jpg";
import styles from "./Banner.module.css";

function Banner() {
  return (
    <section className={styles.bannerContainer}>
      <div className={styles.bannerDetailsDiv}>
        <img src={blackSchool} alt="" />
        <h5>Find waves with us, book a class now!</h5>
        <Link to="/courses">Get Started</Link>
      </div>
    </section>
  );
}

export default Banner;
