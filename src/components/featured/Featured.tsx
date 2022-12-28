import styles from "./Featured.module.css";

import book from "../../assets/images/bookCourse.jpg";
import find from "../../assets/images/findCourse.jpg";
import ride from "../../assets/images/rideWaves.jpg";

function Featured() {
  return (
    <section className={styles.featuredGrid}>
      <img src={book} alt="" />

      <img src={find} alt="" />

      <img src={ride} alt="" />
    </section>
  );
}

export default Featured;
